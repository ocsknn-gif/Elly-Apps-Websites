import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website laten maken Rotterdam | Elly Apps',
  description:
    'Website laten maken in Rotterdam? Elly Apps bouwt professionele websites voor Rotterdamse MKB-bedrijven. Lokale SEO en volledig ontzorgd. Vanaf €49/maand.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elly Apps — Website laten maken Rotterdam',
  url: 'https://elly-apps.nl/stad/rotterdam',
  areaServed: { '@type': 'City', name: 'Rotterdam' },
  description: 'Professionele websites voor MKB-bedrijven in Rotterdam. Lokale SEO en volledig beheerd.',
}

export default function RotterdamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div>
          <p className="text-sm text-indigo-600 font-medium mb-2">Rotterdam</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Website laten maken in Rotterdam
          </h1>
          <p className="text-xl text-gray-600">
            Rotterdamse ondernemers verdienen een website die werkt. Lokaal gevonden worden in de
            havenstad van Nederland.
          </p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>
            Rotterdam is de tweede stad van Nederland en heeft een uniek ondernemersklimaat. De
            stad staat bekend om zijn hands-on mentaliteit, diversiteit en ambitie. Rotterdamse
            ondernemers zijn direct, resultaatgericht en willen waar voor hun geld. Dat sluit
            perfect aan bij hoe Elly Apps werkt.
          </p>
          <p>
            Wij bouwen professionele websites voor MKB-bedrijven in Rotterdam en de regio —
            inclusief Capelle aan den IJssel, Barendrecht, Schiedam en Spijkenisse. Onze websites
            zijn snel, mobielvriendelijk en geoptimaliseerd voor lokale zoekopdrachten in
            Rotterdam. Zo wordt u gevonden door klanten die actief zoeken naar uw dienst of
            product in de buurt.
          </p>
          <p>
            Rotterdam heeft een diverse bevolking en een groeiend MKB-landschap. Van de
            horeca in Katendrecht en het centrum tot technische bedrijven in het Botlekgebied
            en zorgpraktijken in Hillegersberg — wij bouwen voor alle sectoren websites die
            resultaat opleveren. Elke website is afgestemd op uw specifieke doelgroep en
            werkgebied.
          </p>
          <p>
            Lokale SEO voor Rotterdam is een van onze specialiteiten. Zoekopdrachten als
            "aannemer Rotterdam-Zuid" of "tandarts Rotterdam-Centrum" worden dagelijks
            tienduizenden keren ingevoerd. Wij zorgen dat u bij die zoekopdrachten zichtbaar
            bent, zowel in de organische resultaten als in Google Maps.
          </p>
          <p>
            Met onze vaste maandprijzen weet u exact wat u betaalt. Geen verborgen kosten, geen
            verrassingen. Hosting, onderhoud en SEO zijn altijd inbegrepen. Zo kunt u als
            Rotterdamse ondernemer vol vertrouwen investeren in uw online aanwezigheid.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Lokale SEO voor Rotterdam en regio',
            'Google Business Profile optimalisatie',
            'Snel live — gemiddeld binnen 2 weken',
            'Alle sectoren en wijken',
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Gevonden worden in Rotterdam?</h2>
          <p className="text-gray-600 mb-6">Vraag een gratis websitescan aan en ontdek uw kansen online.</p>
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
