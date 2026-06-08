'use client'

import { useState } from 'react'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="rounded-xl bg-emerald-50 border border-emerald-200 px-6 py-8 text-center">
        <p className="text-lg font-semibold text-emerald-700">Bedankt voor uw bericht!</p>
        <p className="mt-2 text-sm text-emerald-600">
          Wij nemen binnen één werkdag contact met u op.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
        <label htmlFor="bericht" className="block text-sm font-medium text-gray-700 mb-1">
          Bericht <span className="text-red-500">*</span>
        </label>
        <textarea
          id="bericht"
          name="bericht"
          required
          rows={5}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          placeholder="Hoe kunnen wij u helpen?"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors"
      >
        Verstuur bericht
      </button>
    </form>
  )
}
