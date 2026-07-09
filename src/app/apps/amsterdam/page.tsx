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

const faqItems = [
  { q: 'Wat kost een app laten maken in Amsterdam?', a: 'De kosten hangen af van het type en de complexiteit van de app. Wij werken altijd met een transparante vaste prijs — geen uurtarieven en geen verrassingen achteraf. Vraag een vrijblijvende offerte aan voor een exacte prijsindicatie.' },
  { q: 'Hoe lang duurt het om een app te laten bouwen?', a: 'Gemiddeld leveren wij een app op binnen 4 tot 6 weken, van eerste kennismaking tot live lancering. Eenvoudige applicaties kunnen sneller, complexere platforms vragen wat meer tijd.' },
  { q: 'Bouwen jullie web-apps of ook native mobiele apps?', a: 'Beide. Voor veel Amsterdamse MKB-bedrijven is een web-app de slimste keuze: toegankelijk via elke browser, sneller te bouwen en makkelijker te onderhouden. Waar een native app in de App Store of Google Play meerwaarde biedt, bouwen wij die uiteraard ook.' },
  { q: 'Kan de app gekoppeld worden aan mijn bestaande systemen?', a: 'Ja. Wij bouwen koppelingen met CRM-systemen, boekhoudpakketten, betaalproviders en andere externe platformen, zodat uw data automatisch synchroniseert en u niet dubbel werkt.' },
]

export default function AppAmsterdamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a }
        }))
      }) }} />

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

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Veelgestelde vragen over app ontwikkeling in Amsterdam</h2>
          {faqItems.map((item) => (
            <details key={item.q} className="group rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-semibold text-gray-900 list-none select-none hover:bg-gray-50">
                {item.q}
                <span className="shrink-0 text-[#E53E3E] text-xl leading-none group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">{item.a}</div>
            </details>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Gerelateerde pagina&apos;s</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'App laten maken — overzicht', href: '/diensten/apps' },
              { label: 'Website laten maken in Amsterdam', href: '/stad/amsterdam' },
              { label: 'App ontwikkelaar Noord-Holland', href: '/apps/noord-holland' },
              { label: 'App laten maken Den Haag', href: '/apps/den-haag' },
            ].map((r) => (
              <Link key={r.href} href={r.href} className="flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-xl px-4 py-3 hover:text-[#E53E3E] hover:border-[#E53E3E] transition-colors">
                <span className="text-[#E53E3E]">→</span> {r.label}
              </Link>
            ))}
          </div>
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
