'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function WebsiteScanForm() {
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

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="naam" className="block text-sm font-medium text-gray-700 mb-1">
            Naam <span className="text-red-500">*</span>
          </label>
          <input
            id="naam"
            name="naam"
            type="text"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Uw volledige naam"
          />
        </div>

        <div>
          <label htmlFor="bedrijf" className="block text-sm font-medium text-gray-700 mb-1">
            Bedrijfsnaam <span className="text-red-500">*</span>
          </label>
          <input
            id="bedrijf"
            name="bedrijf"
            type="text"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Uw bedrijfsnaam"
          />
        </div>
      </div>

      <div>
        <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
          Website URL <span className="text-red-500">*</span>
        </label>
        <input
          id="website"
          name="website"
          type="url"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="https://uwbedrijf.nl"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mailadres <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="u@bedrijf.nl"
          />
        </div>

        <div>
          <label htmlFor="telefoon" className="block text-sm font-medium text-gray-700 mb-1">
            Telefoonnummer
          </label>
          <input
            id="telefoon"
            name="telefoon"
            type="tel"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="+31 6 12345678"
          />
        </div>
      </div>

      {/* Honeypot — onzichtbaar voor bezoekers, wordt door bots wel ingevuld */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {error && (
        <div
          role="alert"
          className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700"
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={sending}
        className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {sending ? 'Versturen…' : 'Vraag gratis websitescan aan'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Wij delen uw gegevens nooit met derden.
      </p>
    </form>
  )
}
