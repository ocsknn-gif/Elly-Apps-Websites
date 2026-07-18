import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'info@elly-apps.nl'
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'website@elly-apps.nl'

type FormType = 'contact' | 'websitescan'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Beperkt lengte en verwijdert regeleindes uit korte velden. */
function clean(value: unknown, maxLength = 2000): string {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, maxLength)
}

/** Voorkomt dat gebruikersinvoer de HTML-mail kan breken. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function row(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#1a1a2e;vertical-align:top;white-space:nowrap;">${escapeHtml(
        label,
      )}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #eee;color:#333;">${escapeHtml(value).replace(
        /\n/g,
        '<br>',
      )}</td>
    </tr>`
}

function buildHtml(title: string, fields: Array<[string, string]>): string {
  return `<!doctype html>
<html lang="nl">
  <body style="margin:0;padding:24px;background:#f6f6f8;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e5ea;" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td style="background:#1a1a2e;padding:20px 24px;">
          <p style="margin:0;color:#fff;font-size:18px;font-weight:700;">${escapeHtml(title)}</p>
          <p style="margin:4px 0 0;color:#c9c9d4;font-size:13px;">Elly Apps &amp; Websites &mdash; elly-apps.nl</p>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 12px;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;font-size:14px;">
            ${fields.map(([label, value]) => row(label, value)).join('')}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 24px;background:#fafafa;color:#777;font-size:12px;">
          U kunt direct op deze e-mail antwoorden om de aanvrager te bereiken.
        </td>
      </tr>
    </table>
  </body>
</html>`
}

function buildText(title: string, fields: Array<[string, string]>): string {
  return `${title}\n\n${fields.map(([label, value]) => `${label}: ${value}`).join('\n')}\n`
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>

  try {
    payload = (await request.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: 'Ongeldige aanvraag.' }, { status: 400 })
  }

  // Honeypot: door bots ingevuld, door mensen niet.
  if (clean(payload.company_website, 200)) {
    return NextResponse.json({ ok: true })
  }

  const formType = payload.formType === 'websitescan' ? 'websitescan' : 'contact'
  const naam = clean(payload.naam, 200)
  const email = clean(payload.email, 200)

  const missing: string[] = []
  if (!naam) missing.push('naam')
  if (!email) missing.push('email')
  else if (!EMAIL_REGEX.test(email)) missing.push('email')

  let subject: string
  let title: string
  let fields: Array<[string, string]>

  if ((formType as FormType) === 'websitescan') {
    const bedrijf = clean(payload.bedrijf, 200)
    const website = clean(payload.website, 500)
    const telefoon = clean(payload.telefoon, 50)

    if (!bedrijf) missing.push('bedrijf')
    if (!website) missing.push('website')

    if (missing.length > 0) {
      return NextResponse.json(
        { error: 'Vul alle verplichte velden correct in.', missing },
        { status: 400 },
      )
    }

    subject = `Websitescan-aanvraag: ${bedrijf} (${naam})`
    title = 'Nieuwe aanvraag gratis websitescan'
    fields = [
      ['Naam', naam],
      ['Bedrijf', bedrijf],
      ['Website', website],
      ['E-mail', email],
      ['Telefoon', telefoon || '—'],
      ['Formulier', 'Gratis websitescan'],
    ]
  } else {
    const bericht = clean(payload.bericht, 5000)
    if (!bericht) missing.push('bericht')

    if (missing.length > 0) {
      return NextResponse.json(
        { error: 'Vul alle verplichte velden correct in.', missing },
        { status: 400 },
      )
    }

    subject = `Contactformulier: ${naam}`
    title = 'Nieuw bericht via het contactformulier'
    fields = [
      ['Naam', naam],
      ['E-mail', email],
      ['Bericht', bericht],
      ['Formulier', 'Contactformulier'],
    ]
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY ontbreekt — inzending niet verstuurd.', { formType })
    return NextResponse.json(
      { error: 'Verzenden is tijdelijk niet mogelijk. Probeer het later opnieuw.' },
      { status: 500 },
    )
  }

  try {
    const resend = new Resend(apiKey)
    const { data, error } = await resend.emails.send({
      from: `Elly Apps Website <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject,
      html: buildHtml(title, fields),
      text: buildText(title, fields),
    })

    if (error) {
      console.error('[contact] Resend gaf een fout terug:', error)
      return NextResponse.json(
        { error: 'Verzenden is tijdelijk niet mogelijk. Probeer het later opnieuw.' },
        { status: 502 },
      )
    }

    console.log('[contact] Inzending verstuurd:', { formType, id: data?.id })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] Onverwachte fout bij verzenden:', err)
    return NextResponse.json(
      { error: 'Verzenden is tijdelijk niet mogelijk. Probeer het later opnieuw.' },
      { status: 500 },
    )
  }
}
