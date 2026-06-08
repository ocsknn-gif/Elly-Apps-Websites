import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website laten maken Utrecht | Elly Apps',
  description:
    'Website laten maken in Utrecht? Elly Apps bouwt professionele websites voor Utrechtse MKB-bedrijven. Lokale SEO en volledig ontzorgd. Vanaf €49/maand.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elly Apps — Website laten maken Utrecht',
  url: 'https://elly-apps.nl/stad/utrecht',
  areaServed: { '@type': 'City', name: 'Utrecht' },
  description: 'Professionele websites voor MKB-bedrijven in Utrecht. Lokale SEO en volledig beheerd.',
}

export default function UtrechtPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div>
          <p className="text-sm text-indigo-600 font-medium mb-2">Utrecht</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Website laten maken in Utrecht
          </h1>
          <p className="text-xl text-gray-600">
            Professionele websites voor Utrechtse ondernemers. Centraal gelegen, lokaal sterk
            aanwezig.
          </p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>
            Utrecht is een bruisende stad met een sterke lokale economie, veel zelfstandigen en
            een groeiend MKB-landschap. De stad trekt studenten, jonge professionals en gezinnen
            aan — een diverse doelgroep die actief online zoekt naar lokale diensten en bedrijven.
            Voor Utrechtse ondernemers is een goede online aanwezigheid daarom onmisbaar.
          </p>
          <p>
            Elly Apps bouwt professionele websites voor MKB-bedrijven in Utrecht en de Utrechtse
            regio, inclusief Nieuwegein, IJsselstein, Woerden, Zeist en De Bilt. Wij kennen de
            lokale markt en optimaliseren uw website voor de zoektermen die Utrechtse klanten
            daadwerkelijk gebruiken.
          </p>
          <p>
            Utrecht heeft een unieke mix van historisch centrum, moderne wijken en een bloeiend
            zakelijk district rondom de NS Hoofdkantoor en Jaarbeurs. Of uw bedrijf zich nu richt
            op de Utrechtse binnenstad, Leidsche Rijn, Overvecht of Vleuten — wij zorgen dat u
            zichtbaar bent voor uw lokale doelgroep.
          </p>
          <p>
            Lokale SEO voor Utrecht richt zich op zoekopdrachten zoals "accountant Utrecht",
            "kinderopvang Utrecht-West" of "schilder Zeist". Wij verwerken deze termen
            strategisch in uw website en optimaliseren uw Google Business Profile. Zo verschijnt
            u bovenaan in de lokale zoekresultaten en Google Maps wanneer potentiële klanten
            zoeken.
          </p>
          <p>
            Onze websites worden gemiddeld binnen twee weken opgeleverd. U heeft één vast
            aanspreekpunt en een vaste maandprijs die alles omvat. Zo investeert u als Utrechtse
            ondernemer vertrouwd in uw groei.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Lokale SEO voor Utrecht en regio',
            'Google Business Profile optimalisatie',
            'Snel live — gemiddeld binnen 2 weken',
            'Alle wijken en omliggende gemeenten',
            'Hosting en onderhoud inbegrepen',
            'Vaste maandprijs vanaf €49',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircleIcon className="size-4 text-indigo-500 shrink-0" />
              {f}
            </div>
          ))}
        </div>

        <div className="bg-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Gevonden worden in Utrecht?</h2>
          <p className="text-gray-600 mb-6">Vraag een gratis websitescan aan en ontdek uw online groeipotentieel.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors">
              Gratis websitescan
            </Link>
            <Link href="/prijzen" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors">
              Bekijk prijzen
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
