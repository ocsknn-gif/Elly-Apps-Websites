import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'App laten maken Tilburg | Elly Apps',
  description: 'App laten maken in Tilburg? Elly Apps bouwt professionele web-apps voor MKB-bedrijven in Tilburg en Midden-Brabant. AI-gedreven ontwikkeling, vaste prijs.',
  alternates: { canonical: 'https://elly-apps.nl/apps/tilburg' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elly Apps — App laten maken Tilburg',
  url: 'https://elly-apps.nl/apps/tilburg',
  areaServed: { '@type': 'City', name: 'Tilburg' },
  description: 'Professionele web-apps voor MKB-bedrijven in Tilburg en Midden-Brabant.',
}

const faqItems = [
  { q: 'Wat kost een app laten maken in Tilburg?', a: 'De kosten zijn afhankelijk van het type en de complexiteit van de app. Wij werken met een transparante vaste prijs. Neem contact op voor een vrijblijvende offerte op maat.' },
  { q: 'Kunnen jullie ook samenwerken met studenten of interns?', a: 'Wij bouwen onze apps zelf — geen studenten of interns op productieprojecten. U krijgt altijd ervaren ontwikkelaars die verantwoordelijk zijn voor kwaliteit en oplevering.' },
  { q: 'Heeft Tilburg specifieke voordelen als vestigingsplaats voor app-ontwikkeling?', a: 'Tilburg heeft een sterke creatieve sector en een groeiend tech-ecosysteem, mede dankzij Tilburg University en Fontys. Dat betekent dat er veel innovatieve bedrijven zijn die open staan voor digitale oplossingen.' },
  { q: 'Hoe verloopt het kennismakingsgesprek?', a: 'Het kennismakingsgesprek duurt 30-45 minuten en vindt online of op locatie plaats. We bespreken uw wensen, processen en budget. U ontvangt binnen 48 uur een offerte.' },
]

export default function AppTilburgPage() {
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
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Tilburg</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">App laten maken in Tilburg</h1>
          <p className="text-xl text-gray-600">Professionele web-apps voor ondernemers in Tilburg en Midden-Brabant. AI-gedreven ontwikkeling, vaste prijs en volledig ontzorgd.</p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>Tilburg is een stad in transitie. Van industriestad naar innovatieve kenniseconomie — de stad heeft de afgelopen jaren een indrukwekkende transformatie doorgemaakt. Met Tilburg University, Fontys Hogescholen en een groeiend aantal tech-bedrijven is Tilburg uitgegroeid tot een van de meest dynamische steden van Brabant. Ondernemers in Tilburg zijn ambitieus en zoeken naar manieren om hun bedrijf te digitaliseren en te laten groeien.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">App ontwikkeling in Tilburg: wat heeft u nodig?</h2>
          <p>Elly Apps bouwt maatwerk apps voor Tilburgse ondernemers in alle sectoren. Of u nu een productiebedrijf bent dat een voorraadbeheer-app wil, een zorginstelling die een patiëntportaal zoekt, of een retailer die een loyaliteitsprogramma wil digitaliseren — wij hebben de expertise om het te bouwen. Wij beginnen altijd met een uitgebreide analyse van uw situatie, zodat de app die wij opleveren perfect aansluit op uw behoeften.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">App ontwikkelaar Tilburg: wat onderscheidt Elly Apps?</h2>
          <p>Er zijn veel app-ontwikkelaars actief in en rondom Tilburg. Wat Elly Apps onderscheidt is onze combinatie van technische diepgang, AI-expertise en betaalbaarheid. Wij werken niet met uurtarieven maar met een vaste projectprijs — zodat u precies weet wat u betaalt en wat u krijgt. Bovendien integreren wij standaard AI-functionaliteiten in onze apps, waardoor uw applicatie niet alleen vandaag werkt, maar ook toekomstbestendig is.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Van idee naar werkende app in 6 stappen</h2>
          <p>Ons proces is helder en transparant: (1) Kennismakingsgesprek — wij leren uw bedrijf kennen. (2) Analyse en ontwerp — wij maken een functioneel ontwerp. (3) Ontwikkeling — wij bouwen de app in sprints. (4) Testen — wij testen uitgebreid voor u. (5) Lancering — wij begeleiden de go-live. (6) Beheer — wij houden alles draaiende. Elke stap is helder en u wordt betrokken bij alle belangrijke beslissingen.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Interne koppelingen en systeemintegraties</h2>
          <p>Veel Tilburgse bedrijven werken al met bestaande softwarepakketten — denk aan Exact, AFAS, SAP of Salesforce. Wij kunnen uw nieuwe app naadloos koppelen aan deze systemen, zodat data automatisch gesynchroniseerd wordt en u niet dubbel hoeft te werken. API-integraties zijn een kerncompetentie van Elly Apps.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {['Maatwerk apps voor alle sectoren', 'AI-functionaliteiten standaard', 'Koppelingen met Exact, AFAS, SAP', 'Gemiddeld binnen 4-6 weken live', 'Vaste prijs, geen uurtarieven', 'Volledig beheer na lancering'].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />
              {f}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Veelgestelde vragen over app ontwikkeling in Tilburg</h2>
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

        <div className="bg-[#f7f7f7] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">App laten bouwen in Tilburg?</h2>
          <p className="text-gray-600 mb-6">Vertel ons uw idee en ontvang binnen 24 uur een vrijblijvende terugkoppeling.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">Gratis kennismakingsgesprek</Link>
            <Link href="/prijzen" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold hover:bg-red-50 transition-colors">Bekijk prijzen</Link>
          </div>
        </div>
      </div>
    </>
  )
}
