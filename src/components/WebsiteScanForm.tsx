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
      className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700"
    >
      {error}
    </div>
  )

  if (variant === 'compact') {
    const label = 'block text-sm font-semibold text-ink mb-1'
    const input =
      'w-full min-h-12 rounded-btn border border-line bg-bg px-4 text-base text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-strong'

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
          <label htmlFor="naam" className="block text-sm font-medium text-gray-700 mb-1">
            Naam <span className="text-red-500">*</span>
          </label>
          <input
            id="naam"
            name="naam"
            type="text"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-strong"
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
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-strong"
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
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-strong"
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
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-strong"
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
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-strong"
            placeholder="+31 6 12345678"
          />
        </div>
      </div>

      {honeypot}
      {errorBox}

      <button type="submit" disabled={sending} className={cn(buttonVariants(), 'w-full')}>
        {sending ? 'Versturen…' : 'Vraag gratis websitescan aan'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Wij delen uw gegevens nooit met derden.
      </p>
    </form>
  )
}
