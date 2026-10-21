'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

type Status = 'loading' | 'valid' | 'already' | 'invalid' | 'success' | 'error' | 'config'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

function UnsubscribeContent() {
  const params = useSearchParams()
  const token = params.get('token')
  const [status, setStatus] = useState<Status>('loading')

  useEffect(() => {
    if (!token) { setStatus('invalid'); return }
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      console.error('Uitschrijven: NEXT_PUBLIC_SUPABASE_URL of NEXT_PUBLIC_SUPABASE_ANON_KEY ontbreekt')
      setStatus('config')
      return
    }

    const url = `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`
    fetch(url, { headers: { apikey: SUPABASE_ANON_KEY } })
      .then((r) => r.json())
      .then((d) => {
        if (d.valid === false && d.reason === 'already_unsubscribed') setStatus('already')
        else if (d.valid) setStatus('valid')
        else setStatus('invalid')
      })
      .catch(() => setStatus('invalid'))
  }, [token])

  const handleUnsubscribe = async () => {
    if (!token || !SUPABASE_URL || !SUPABASE_ANON_KEY) return
    try {
      const url = `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe`
      const res = await fetch(url, {
        method: 'POST',
        headers: { apikey: SUPABASE_ANON_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
      const data = await res.json()
      if (data?.success) setStatus('success')
      else if (data?.reason === 'already_unsubscribed') setStatus('already')
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section className="section min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-md w-full text-center space-y-4 p-8 rounded-2xl border border-line bg-bg">
        {status === 'loading' && <p className="text-muted">Laden...</p>}
        {status === 'valid' && (
          <>
            <h1 className="h3 text-ink">Uitschrijven</h1>
            <p className="body text-muted">Wilt u zich uitschrijven voor e-mails van Elly Apps?</p>
            <button onClick={handleUnsubscribe} className="inline-flex min-h-12 items-center justify-center rounded-btn bg-brand-strong px-6 font-semibold text-white transition-colors hover:bg-brand-strong-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-strong">
              Ja, schrijf mij uit
            </button>
          </>
        )}
        {status === 'success' && (
          <>
            <h1 className="h3 text-ink">Uitgeschreven</h1>
            <p className="body text-muted">U bent succesvol uitgeschreven. U ontvangt geen e-mails meer van ons.</p>
          </>
        )}
        {status === 'already' && (
          <>
            <h1 className="h3 text-ink">Al uitgeschreven</h1>
            <p className="body text-muted">U bent al uitgeschreven voor onze e-mails.</p>
          </>
        )}
        {status === 'invalid' && (
          <>
            <h1 className="h3 text-ink">Ongeldige link</h1>
            <p className="body text-muted">Deze uitschrijflink is ongeldig of verlopen.</p>
          </>
        )}
        {status === 'config' && (
          <>
            <h1 className="h3 text-ink">Uitschrijven is tijdelijk niet mogelijk</h1>
            <p className="body text-muted">Er ging iets mis aan onze kant. Stuur een e-mail naar info@elly-apps.nl, dan schrijven wij u handmatig uit.</p>
          </>
        )}
        {status === 'error' && (
          <>
            <h1 className="h3 text-ink">Er ging iets mis</h1>
            <p className="body text-muted">Probeer het later opnieuw of neem contact met ons op.</p>
          </>
        )}
      </div>
    </section>
  )
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p className="text-muted">Laden...</p></div>}>
      <UnsubscribeContent />
    </Suspense>
  )
}
