import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website laten maken Amsterdam | Elly Apps',
  description:
    'Website laten maken in Amsterdam? Elly Apps bouwt professionele websites voor Amsterdamse MKB-bedrijven. Lokale SEO, snel live en volledig ontzorgd. Vanaf €49/maand.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elly Apps — Website laten maken Amsterdam',
  url: 'https://elly-apps.nl/stad/amsterdam',
  areaServed: { '@type': 'City', name: 'Amsterdam' },
  description: 'Professionele websites voor MKB-bedrijven in Amsterdam. Lokale SEO en volledig beheerd.',
}

export default function AmsterdamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div>
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Amsterdam</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Website laten maken in Amsterdam
          </h1>
          <p className="text-xl text-gray-600">
            Professionele websites voor Amsterdamse ondernemers. Lokaal gevonden worden in de
            grootste stad van Nederland.
          </p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>
            Amsterdam is een van de meest competitieve markten van Nederland. De stad telt meer
            dan 900.000 inwoners en herbergt tienduizenden bedrijven — van kleine ambachtslieden
            in de Jordaan tot techbedrijven in Sloterdijk. In zo'n dynamische markt is een
            professionele online aanwezigheid geen luxe, maar een noodzaak. Klanten zoeken online
            voordat ze een bedrijf bellen, en wie niet gevonden wordt, bestaat niet.
          </p>
          <p>
            Elly Apps helpt Amsterdamse MKB-bedrijven om online zichtbaar te worden en te groeien.
            Wij bouwen snelle, professionele websites die geoptimaliseerd zijn voor lokale
            zoekopdrachten in Amsterdam en de omliggende wijken. Of u nu actief bent in
            Amsterdam-Centrum, Amsterdam-Noord, de Pijp of Oost — wij zorgen dat uw doelgroep
            u vindt.
          </p>
          <p>
            Lokale SEO voor Amsterdam betekent specifiek targeten op Amsterdamse zoektermen.
            Denk aan "loodgieter Amsterdam-West", "kapper De Pijp" of "fysiotherapeut
            Amsterdam-Noord". Wij doen uitgebreid zoekwoordonderzoek voor uw specifieke situatie
            en verwerken die termen strategisch in uw website. Combineer dit met een volledig
            geoptimaliseerd Google Business Profile en u staat bovenaan in de lokale resultaten.
          </p>
          <p>
            Amsterdam heeft ook een groot toeristen- en expat-publiek. Als uw bedrijf ook
            Engelstalige klanten bedient, kunnen wij een tweetalige website bouwen (Nederlands
            én Engels) zodat u ook die doelgroep bereikt.
          </p>
          <p>
            Wij werken al met Amsterdamse bedrijven in sectoren als horeca, zorg, beauty,
            technische dienstverlening en zakelijke dienstverlening. Onze websites zijn altijd
            volledig beheerd: hosting, updates en SEO zijn inbegrepen in de vaste maandprijs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Lokale SEO voor Amsterdam en wijken',
            'Google Business Profile optimalisatie',
            'Snel live — gemiddeld binnen 2 weken',
            'Tweetalig (NL/EN) mogelijk',
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Gevonden worden in Amsterdam?
          </h2>
          <p className="text-gray-600 mb-6">
            Vraag een gratis websitescan aan en ontdek hoe wij uw Amsterdamse zichtbaarheid verbeteren.
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
