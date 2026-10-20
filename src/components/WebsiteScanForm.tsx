'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Props = {
  /** 'compact': drie velden (website, naam, e-mail) voor de hero op de homepage. */
  variant?: 'full' | 'compact'
}

export function WebsiteScanForm({ variant = 'full' }: Props) {
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (sending) return

    const form = e.currentTarget
    const data = new FormData(form)

    setSending(true)
    setError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'websitescan',
          naam: data.get('naam'),
          bedrijf: data.get('bedrijf'),
          website: data.get('website'),
          email: data.get('email'),
          telefoon: data.get('telefoon'),
          company_website: data.get('company_website'),
        }),
      })

      if (!res.ok) {
        // Alleen bij een bevestigde 2xx tonen we succes; anders blijft het formulier staan.
        setError(
          'Verzenden is helaas niet gelukt. Probeer het opnieuw of bel ons direct op 06-36278515.',
        )
        setSending(false)
        return
      }

      router.push('/bedankt')
    } catch {
      setError(
        'Verzenden is helaas niet gelukt. Controleer uw internetverbinding of bel ons op 06-36278515.',
      )
      setSending(false)
    }
  }

  const label = 'block text-sm font-semibold text-ink mb-1'
  const input =
    'w-full min-h-12 rounded-btn border border-line bg-bg px-4 text-base text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-strong'

  const honeypot = (
    /* Honeypot — onzichtbaar voor bezoekers, wordt door bots wel ingevuld */
    <input
      type="text"
      name="company_website"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      className="hidden"
    />
  )

  const errorBox = error && (
    <div
      role="alert"
      className="rounded-btn bg-brand-tint border border-brand-strong px-4 py-3 text-sm text-brand-strong"
    >
      {error}
    </div>
  )

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label htmlFor="scan-website" className={label}>
            Uw website
          </label>
          {/* type="text" i.p.v. "url": dan wordt "uwbedrijf.nl" zonder https:// ook geaccepteerd */}
          <input
            id="scan-website"
            name="website"
            type="text"
            inputMode="url"
            autoComplete="url"
            autoCapitalize="none"
            spellCheck={false}
            required
            className={input}
            placeholder="uwbedrijf.nl"
          />
        </div>

        <div>
          <label htmlFor="scan-naam" className={label}>
            Naam
          </label>
          <input
            id="scan-naam"
            name="naam"
            type="text"
            autoComplete="name"
            required
            className={input}
            placeholder="Uw naam"
          />
        </div>

        <div>
          <label htmlFor="scan-email" className={label}>
            E-mailadres
          </label>
          <input
            id="scan-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={input}
            placeholder="u@bedrijf.nl"
          />
        </div>

        {honeypot}
        {errorBox}

        <button type="submit" disabled={sending} className={cn(buttonVariants(), 'w-full')}>
          {sending ? 'Versturen…' : 'Start gratis scan'}
        </button>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="naam" className={label}>
            Naam <span className="text-brand-strong" aria-hidden="true">*</span>
          </label>
          <input
            id="naam"
            name="naam"
            type="text"
            required
            className={input}
            placeholder="Uw volledige naam"
          />
        </div>

        <div>
          <label htmlFor="bedrijf" className={label}>
            Bedrijfsnaam <span className="text-brand-strong" aria-hidden="true">*</span>
          </label>
          <input
            id="bedrijf"
            name="bedrijf"
            type="text"
            required
            className={input}
            placeholder="Uw bedrijfsnaam"
          />
        </div>
      </div>

      <div>
        <label htmlFor="website" className={label}>
          Website URL <span className="text-brand-strong" aria-hidden="true">*</span>
        </label>
        {/* Zelfde aanpak als de compacte variant: "uwbedrijf.nl" zonder https:// wordt ook geaccepteerd */}
        <input
          id="website"
          name="website"
          type="text"
          inputMode="url"
          autoComplete="url"
          autoCapitalize="none"
          spellCheck={false}
          required
          className={input}
          placeholder="uwbedrijf.nl"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className={label}>
            E-mailadres <span className="text-brand-strong" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={input}
            placeholder="u@bedrijf.nl"
          />
        </div>

        <div>
          <label htmlFor="telefoon" className={label}>
            Telefoonnummer
          </label>
          <input
            id="telefoon"
            name="telefoon"
            type="tel"
            className={input}
            placeholder="+31 6 12345678"
          />
        </div>
      </div>

      {honeypot}
      {errorBox}

      <button type="submit" disabled={sending} className={cn(buttonVariants(), 'w-full')}>
        {sending ? 'Versturen…' : 'Vraag gratis websitescan aan'}
      </button>

      <p className="text-sm text-muted text-center">
        Wij delen uw gegevens nooit met derden.
      </p>
    </form>
  )
}
