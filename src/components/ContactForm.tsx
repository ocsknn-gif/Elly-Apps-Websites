'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function ContactForm() {
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
          formType: 'contact',
          naam: data.get('naam'),
          email: data.get('email'),
          bericht: data.get('bericht'),
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

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
        <label htmlFor="bericht" className={label}>
          Bericht <span className="text-brand-strong" aria-hidden="true">*</span>
        </label>
        <textarea
          id="bericht"
          name="bericht"
          required
          rows={5}
          className={`${input} min-h-0 py-3 resize-none`}
          placeholder="Hoe kunnen wij u helpen?"
        />
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
          className="rounded-btn bg-brand-tint border border-brand-strong px-4 py-3 text-sm text-brand-strong"
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={sending}
        className={cn(buttonVariants(), 'w-full')}
      >
        {sending ? 'Versturen…' : 'Verstuur bericht'}
      </button>
    </form>
  )
}
