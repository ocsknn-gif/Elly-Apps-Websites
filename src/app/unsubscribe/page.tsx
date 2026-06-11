'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

type Status = 'loading' | 'valid' | 'already' | 'invalid' | 'success' | 'error'

function UnsubscribeContent() {
  const params = useSearchParams()
  const token = params.get('token')
  const [status, setStatus] = useState<Status>('loading')

  useEffect(() => {
    if (!token) { setStatus('invalid'); return }

    const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`
    fetch(url, { headers: { apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '' } })
      .then((r) => r.json())
      .then((d) => {
        if (d.valid === false && d.reason === 'already_unsubscribed') setStatus('already')
        else if (d.valid) setStatus('valid')
        else setStatus('invalid')
      })
      .catch(() => setStatus('invalid'))
  }, [token])

  const handleUnsubscribe = async () => {
    if (!token) return
    try {
      const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/handle-email-unsubscribe`
      const res = await fetch(url, {
        method: 'POST',
        headers: { apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '', 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
      const data = await res.json()
      if (data?.success) setStatus('success')
      else if (data?.reason === 'already_unsubscribed') setStatus('already')
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section className="min-h-[60vh] flex items-center justify-center py-16">
      <div className="max-w-md text-center space-y-4 px-4">
        {status === 'loading' && <p className="text-gray-500">Laden...</p>}
        {status === 'valid' && (
          <>
            <h1 className="text-2xl font-bold text-gray-900">Uitschrijven</h1>
            <p className="text-gray-600">Wilt u zich uitschrijven voor e-mails van Elly Apps?</p>
            <button onClick={handleUnsubscribe} className="bg-[#E53E3E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#C53030] transition-colors">
              Ja, schrijf mij uit
            </button>
          </>
        )}
        {status === 'success' && (
          <>
            <h1 className="text-2xl font-bold text-gray-900">Uitgeschreven</h1>
            <p className="text-gray-600">U bent succesvol uitgeschreven. U ontvangt geen e-mails meer van ons.</p>
          </>
        )}
        {status === 'already' && (
          <>
            <h1 className="text-2xl font-bold text-gray-900">Al uitgeschreven</h1>
            <p className="text-gray-600">U bent al uitgeschreven voor onze e-mails.</p>
          </>
        )}
        {status === 'invalid' && (
          <>
            <h1 className="text-2xl font-bold text-gray-900">Ongeldige link</h1>
            <p className="text-gray-600">Deze uitschrijflink is ongeldig of verlopen.</p>
          </>
        )}
        {status === 'error' && (
          <>
            <h1 className="text-2xl font-bold text-gray-900">Er ging iets mis</h1>
            <p className="text-gray-600">Probeer het later opnieuw of neem contact met ons op.</p>
          </>
        )}
      </div>
    </section>
  )
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p className="text-gray-500">Laden...</p></div>}>
      <UnsubscribeContent />
    </Suspense>
  )
}
