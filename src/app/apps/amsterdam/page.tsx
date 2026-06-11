import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'App laten maken Amsterdam | Elly Apps',
  description:
    'App laten maken in Amsterdam? Elly Apps bouwt professionele web-apps en mobiele apps voor Amsterdamse MKB-bedrijven. AI-gedreven, snel en betaalbaar.',
  alternates: { canonical: 'https://elly-apps.nl/apps/amsterdam' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elly Apps — App laten maken Amsterdam',
  url: 'https://elly-apps.nl/apps/amsterdam',
  areaServed: { '@type': 'City', name: 'Amsterdam' },
  description: 'Professionele web-apps en mobiele apps voor MKB-bedrijven in Amsterdam. AI-gedreven en volledig beheerd.',
}

export default function AppAmsterdamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div>
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Amsterdam</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            App laten maken in Amsterdam
          </h1>
          <p className="text-xl text-gray-600">
            Professionele web-apps en mobiele apps voor Amsterdamse ondernemers.
            AI-gedreven ontwikkeling, snel live en volledig ontzorgd.
          </p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>
            Amsterdam is het digitale hart van Nederland. De stad herbergt duizenden innovatieve
            bedrijven, startups en scale-ups die hun processen willen automatiseren of hun klanten
            willen bedienen via een app. Of u nu een webapplicatie nodig heeft voor uw interne
            processen, een klantportaal wilt bouwen of een volledig maatwerk platform zoekt —
            Elly Apps bouwt het voor u.
          </p>
          <p>
            Wij bouwen apps met de nieuwste technologieën, waaronder AI-gedreven functionaliteiten
            die uw bedrijfsprocessen slimmer en efficiënter maken. Denk aan automatische rapportages,
            slimme zoekfuncties, gepersonaliseerde gebruikerservaringen of koppelingen met externe
            systemen zoals boekhoudpakketten, CRM-software of betaalproviders.
          </p>
          <p>
            De Amsterdamse markt vraagt om snelheid en kwaliteit. Wij leveren apps gemiddeld binnen
            vier tot zes weken op — van eerste kennismaking tot live lancering. U wordt gedurende
            het hele traject op de hoogte gehouden en heeft altijd inzicht in de voortgang.
            Na de lancering beheren wij de app volledig: updates, beveiliging en technische
            monitoring zijn inbegrepen.
          </p>
          <p>
            Elly Apps werkt met Amsterdamse bedrijven in uiteenlopende sectoren: van horeca en
            retail tot zakelijke dienstverlening, zorg en technologie. Elke app is maatwerk —
            geen kant-en-klare templates, maar een oplossing die precies aansluit op uw
            bedrijfsprocessen en doelgroep.
          </p>
          <p>
            Heeft u een idee voor een app maar weet u niet waar u moet beginnen? Wij helpen u
            van concept tot lancering. In een gratis kennismakingsgesprek bespreken wij uw wensen,
            mogelijkheden en budget. Zonder verplichtingen, zonder verkooppraat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Web-apps en mobiele apps op maat',
            'AI-gedreven functionaliteiten',
            'Koppelingen met externe systemen',
            'Gemiddeld binnen 4-6 weken live',
            'Volledig beheer na lancering',
            'Vaste prijs, geen verrassingen',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />
              {f}
            </div>
          ))}
        </div>

        <div className="bg-[#f7f7f7] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            App laten bouwen in Amsterdam?
          </h2>
          <p className="text-gray-600 mb-6">
            Vertel ons uw idee en ontvang binnen 24 uur een vrijblijvende terugkoppeling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">
              Gratis kennismakingsgesprek
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
