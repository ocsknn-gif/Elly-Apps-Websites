'use client'

import { useState } from 'react'

export function WebsiteScanForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="rounded-xl bg-emerald-50 border border-emerald-200 px-6 py-8 text-center">
        <p className="text-lg font-semibold text-emerald-700">Uw aanvraag is ontvangen!</p>
        <p className="mt-2 text-sm text-emerald-600">
          Wij sturen u binnen één werkdag uw gratis websitescan toe.
        </p>
      </div>
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

      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors"
      >
        Vraag gratis websitescan aan
      </button>

      <p className="text-xs text-gray-500 text-center">
        Wij delen uw gegevens nooit met derden.
      </p>
    </form>
  )
}
