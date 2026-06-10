import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website laten maken voor loodgieters | Elly Apps',
  description:
    'Een professionele website voor uw loodgietersbedrijf. Lokaal gevonden worden, spoedaanvragen ontvangen en reviews verzamelen. Vanaf €49/maand.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: 'Elly Apps — Websites voor loodgieters',
  url: 'https://elly-apps.nl/branche/loodgieter',
  description: 'Professionele websites voor loodgieters, inclusief lokale SEO en spoedaanvragen.',
}

export default function LoodgieterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div>
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Branche</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Website laten maken voor loodgieters
          </h1>
          <p className="text-xl text-gray-600">
            Meer spoedopdrachten, betere lokale vindbaarheid en een professionele uitstraling —
            dat is wat een goede website voor uw loodgietersbedrijf oplevert.
          </p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>
            Als loodgieter draait alles om bereikbaarheid en vertrouwen. Klanten die een lekkage
            of verstopte afvoer hebben, zoeken online naar een betrouwbare loodgieter in hun
            buurt. Als uw bedrijf dan niet zichtbaar is in Google, loopt u die opdrachten mis. Een
            professionele website — gecombineerd met lokale SEO — zorgt ervoor dat u precies op
            het juiste moment gevonden wordt.
          </p>
          <p>
            Elly Apps bouwt websites die specifiek zijn afgestemd op de behoeften van
            loodgieters. Wij zorgen voor een duidelijke "Spoedhulp aanvragen" knop die direct
            opvalt, een overzicht van uw diensten (lekkage, verstoppingen, CV-ketel, badkamer),
            en een contactformulier dat ook op mobiel perfect werkt. Want de meeste mensen die
            snel een loodgieter nodig hebben, zoeken via hun smartphone.
          </p>
          <p>
            Lokale vindbaarheid is voor loodgieters cruciaal. Wij optimaliseren uw website voor
            lokale zoektermen zoals "loodgieter [stad]" en "loodgieter spoed [regio]". Daarnaast
            zorgen wij voor een volledig ingevuld Google Business Profile, zodat u ook in Google
            Maps verschijnt en klanten direct uw openingstijden, telefoonnummer en reviews kunnen
            zien.
          </p>
          <p>
            Reviews spelen een grote rol in het vertrouwen van nieuwe klanten. Wij bouwen een
            reviews-sectie in uw website en helpen u bij het vergaren van Google-reviews. Een
            hoog aantal positieve reviews versterkt zowel uw online reputatie als uw positie in
            Google.
          </p>
          <p>
            Onze websites zijn volledig beheerd: hosting, SSL, updates en technisch onderhoud
            regelen wij. U hoeft zich nergens druk over te maken — u focust op het werk, wij op
            uw online aanwezigheid.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Lokale SEO voor uw werkgebied',
            'Spoedaanvraag knop prominent zichtbaar',
            'Google Business Profile optimalisatie',
            'Reviews sectie en beheer',
            'Mobiel-geoptimaliseerde website',
            'Hosting, SSL en onderhoud inbegrepen',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />
              {f}
            </div>
          ))}
        </div>

        <div className="bg-[#f7f7f7] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Meer opdrachten via uw website?
          </h2>
          <p className="text-gray-600 mb-6">
            Vraag een gratis websitescan aan en ontdek hoe wij uw online zichtbaarheid verbeteren.
          </p>
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
