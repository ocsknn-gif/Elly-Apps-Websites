import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bedankt voor uw aanvraag | Elly Apps',
  description: 'Bedankt! U ontvangt binnen 24 uur een persoonlijke reactie van ons.',
  alternates: { canonical: 'https://elly-apps.nl/bedankt' },
}

const steps = [
  'Wij bekijken uw aanvraag vandaag nog',
  'Wij nemen binnen 24 uur persoonlijk contact op',
  'U ontvangt een vrijblijvende offerte op maat',
]

export default function BedanktPage() {
  return (
    <section className="min-h-[60vh] flex items-center py-16">
      <div className="max-w-xl mx-auto px-4 text-center w-full">
        <div className="text-5xl mb-4">🎉</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Bedankt voor uw aanvraag!</h1>
        <p className="text-lg text-gray-600 mb-6">U ontvangt binnen 24 uur een persoonlijke reactie van ons.</p>

        <div className="border rounded-xl p-6 text-left mb-8">
          <h2 className="font-bold text-gray-900 mb-4">Wat gebeurt er nu?</h2>
          <ol className="space-y-3">
            {steps.map((s, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="bg-[#E53E3E] text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                <span className="text-sm text-gray-700">{s}</span>
              </li>
            ))}
          </ol>
        </div>

        <Link href="/" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">
          Terug naar de homepage
        </Link>

        <div className="mt-8">
          <p className="text-sm text-gray-500 mb-3">Volg ons op social media</p>
          <div className="flex justify-center gap-4">
            {['LinkedIn', 'Instagram', 'TikTok'].map((s) => (
              <a key={s} href="#" className="text-[#E53E3E] hover:underline text-sm font-semibold">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
