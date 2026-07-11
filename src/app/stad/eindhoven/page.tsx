import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website laten maken Eindhoven – vanaf €49/mnd | Elly Apps',
  description:
    'Website laten maken in Eindhoven? Elly Apps bouwt professionele websites voor Eindhovense MKB-bedrijven. Lokale SEO en volledig ontzorgd. Vanaf €49/maand.',
  alternates: { canonical: 'https://elly-apps.nl/stad/eindhoven' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elly Apps — Website laten maken Eindhoven',
  url: 'https://elly-apps.nl/stad/eindhoven',
  areaServed: { '@type': 'City', name: 'Eindhoven' },
  description: 'Professionele websites voor MKB-bedrijven in Eindhoven. Lokale SEO en volledig beheerd.',
}

export default function EindhovenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div>
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Eindhoven</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Website laten maken in Eindhoven
          </h1>
          <p className="text-xl text-gray-600">
            Professionele websites voor Eindhovense ondernemers. De stad van innovatie verdient
            een moderne online aanwezigheid.
          </p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>
            Eindhoven is de technologie- en designhoofdstad van Nederland. De stad staat bekend
            om innovatieve bedrijven, de High Tech Campus en Dutch Design Week. Maar naast de
            grote tech-namen heeft Eindhoven ook een bruisend MKB — van kappers en restaurants
            in het centrum tot bouwbedrijven en zorgpraktijken in wijken als Woensel en Stratum.
            Al die ondernemers verdienen een sterke online aanwezigheid.
          </p>
          <p>
            Elly Apps bouwt professionele websites voor MKB-bedrijven in Eindhoven en de
            Brabantse regio, inclusief Veldhoven, Helmond, Best, Waalre en Geldrop-Mierlo.
            Onze websites zijn snel, mobielvriendelijk en geoptimaliseerd voor lokale
            zoekopdrachten zodat Eindhovense klanten u vinden.
          </p>
          <p>
            Eindhoven groeit snel. De stad trekt steeds meer expats en internationale
            professionals aan door de aanwezigheid van ASML, NXP en andere tech-giganten.
            Als uw bedrijf deze doelgroep wil bereiken, kunnen wij een Engelstalige of
            tweetalige website bouwen die ook internationale klanten aanspreekt.
          </p>
          <p>
            Lokale SEO voor Eindhoven richt zich op specifieke zoekopdrachten van Eindhovense
            consumenten en bedrijven. "Schilder Eindhoven", "kinderopvang Woensel" of
            "accountant Veldhoven" — wij zorgen dat uw website en Google Business Profile
            optimaal scoren op de zoekopdrachten die voor uw bedrijf het meest waardevol zijn.
          </p>
          <p>
            Net als Eindhovense bedrijven zelf zijn wij pragmatisch en resultaatgericht. Wij
            leveren snel, communiceren duidelijk en zorgen dat uw website écht resultaat
            oplevert. Met een vaste maandprijs weet u altijd precies wat u betaalt.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Lokale SEO voor Eindhoven en regio',
            'Google Business Profile optimalisatie',
            'Tweetalig (NL/EN) mogelijk',
            'Snel live — gemiddeld binnen 2 weken',
            'Hosting en onderhoud inbegrepen',
            'Vaste maandprijs vanaf €49',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />
              {f}
            </div>
          ))}
        </div>

        <div className="bg-[#f7f7f7] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Gevonden worden in Eindhoven?</h2>
          <p className="text-gray-600 mb-6">Vraag een gratis websitescan aan en ontdek uw online groeipotentieel.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">
              Gratis websitescan
            </Link>
            <Link href="/prijzen" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold hover:bg-red-50 transition-colors">
              Bekijk prijzen
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
