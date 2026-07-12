import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website laten maken Den Haag | Elly Apps',
  description:
    'Website laten maken in Den Haag? Elly Apps bouwt professionele websites voor Haagse MKB-bedrijven. Lokale SEO en volledig ontzorgd. Vanaf €49/maand.',
  alternates: { canonical: 'https://elly-apps.nl/stad/den-haag' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/stad/den-haag',
    title: 'Website laten maken Den Haag | Elly Apps',
    description: 'Website laten maken in Den Haag? Elly Apps bouwt professionele websites voor Haagse MKB-bedrijven. Lokale SEO en volledig ontzorgd. Vanaf €49/maand.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken Den Haag | Elly Apps',
    description: 'Website laten maken in Den Haag? Elly Apps bouwt professionele websites voor Haagse MKB-bedrijven. Lokale SEO en volledig ontzorgd. Vanaf €49/maand.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elly Apps — Website laten maken Den Haag',
  url: 'https://elly-apps.nl/stad/den-haag',
  areaServed: { '@type': 'City', name: 'Den Haag' },
  description: 'Professionele websites voor MKB-bedrijven in Den Haag. Lokale SEO en volledig beheerd.',
}

export default function DenHaagPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div>
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Den Haag</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Website laten maken in Den Haag
          </h1>
          <p className="text-xl text-gray-600">
            Professionele websites voor Haagse ondernemers. De regeringsstad verdient een sterke
            online aanwezigheid.
          </p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>
            Den Haag is als regeringsstad van Nederland een bijzondere markt. Naast de overheid
            en internationale organisaties heeft de stad een levendig MKB-landschap: van
            restaurantjes in de Hofkwartier tot zorgpraktijken in Loosduinen en bouwbedrijven
            in Leidschendam-Voorburg. Al deze ondernemers hebben één ding gemeen: ze moeten
            online gevonden worden door hun lokale doelgroep.
          </p>
          <p>
            Elly Apps bouwt professionele websites voor MKB-bedrijven in Den Haag en de Haagse
            regio, inclusief Rijswijk, Zoetermeer, Delft, Leidschendam en Wassenaar. Onze
            websites zijn geoptimaliseerd voor lokale zoekopdrachten zodat Haagse klanten u
            vinden wanneer ze zoeken naar uw diensten.
          </p>
          <p>
            Den Haag heeft een diverse bevolking en een sterk internationaal karakter door de
            aanwezigheid van ambassades en internationale instellingen. Als uw bedrijf ook
            Engelstalige of anderstalige klanten bedient, kunnen wij een meertalige website
            bouwen die alle doelgroepen aanspreekt.
          </p>
          <p>
            Lokale SEO voor Den Haag richt zich op specifieke Haagse zoekopdrachten.
            "Loodgieter Den Haag Centrum", "kapper Scheveningen" of "fysiotherapeut
            Leidschendam" — wij zorgen dat u bij de juiste zoekopdrachten verschijnt. Onze
            aanpak combineert technische SEO, lokale content en Google Business optimalisatie
            voor maximale zichtbaarheid.
          </p>
          <p>
            Wij werken met een vaste maandprijs, zodat u als Haagse ondernemer precies weet
            waar u aan toe bent. Hosting, onderhoud en basis SEO zijn altijd inbegrepen.
            Geen verborgen kosten, geen ingewikkelde contracten.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Lokale SEO voor Den Haag en regio',
            'Google Business Profile optimalisatie',
            'Meertalig (NL/EN) mogelijk',
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Gevonden worden in Den Haag?</h2>
          <p className="text-gray-600 mb-6">Vraag een gratis websitescan aan en ontdek uw kansen in de Haagse markt.</p>
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
