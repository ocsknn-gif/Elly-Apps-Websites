import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'App laten maken Breda | Elly Apps',
  description: 'App laten maken in Breda? Elly Apps bouwt professionele web-apps en mobiele apps voor MKB-bedrijven in Breda en West-Brabant. Snel, betaalbaar en AI-gedreven.',
  alternates: { canonical: 'https://elly-apps.nl/apps/breda' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/apps/breda',
    title: 'App laten maken Breda | Elly Apps',
    description: 'App laten maken in Breda? Elly Apps bouwt professionele web-apps en mobiele apps voor MKB-bedrijven in Breda en West-Brabant. Snel, betaalbaar en AI-gedreven.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App laten maken Breda | Elly Apps',
    description: 'App laten maken in Breda? Elly Apps bouwt professionele web-apps en mobiele apps voor MKB-bedrijven in Breda en West-Brabant. Snel, betaalbaar en AI-gedreven.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elly Apps — App laten maken Breda',
  url: 'https://elly-apps.nl/apps/breda',
  areaServed: { '@type': 'City', name: 'Breda' },
  description: 'Professionele web-apps en mobiele apps voor MKB-bedrijven in Breda en West-Brabant.',
}

const faqItems = [
  { q: 'Wat kost een app laten maken in Breda?', a: 'De prijs hangt af van de complexiteit en het type app. Wij werken altijd met een transparante vaste prijs. Vraag een vrijblijvende offerte aan voor een exacte prijsindicatie.' },
  { q: 'Werken jullie ook samen met Bredase startups?', a: 'Ja. Wij werken graag samen met startups en scale-ups in Breda die snel een MVP of volledig platform willen lanceren. Onze aanpak is flexibel en schaalbaar.' },
  { q: 'Kunnen jullie ook een bestaande app verbeteren?', a: 'Absoluut. Wij doen eerst een technische audit van uw huidige applicatie en adviseren over de beste aanpak — of dat nu een refactor, uitbreiding of complete herbouw is.' },
  { q: 'Is onderhoud na oplevering inbegrepen?', a: 'Ja. Na de lancering bieden wij doorlopend beheer inclusief updates, beveiligingspatches en technische monitoring. U betaalt een vaste maandprijs zonder verrassingen.' },
]

export default function AppBredaPage() {
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
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Breda</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">App laten maken in Breda</h1>
          <p className="text-xl text-gray-600">Professionele web-apps en mobiele apps voor ondernemers in Breda en West-Brabant. Van idee tot werkende applicatie — snel, betaalbaar en volledig ontzorgd.</p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>Breda is een van de snelst groeiende steden van Nederland. De stad heeft een bloeiend ondernemersklimaat met een sterke mix van industrie, logistiek, retail en creatieve sector. Steeds meer Bredase ondernemers kiezen voor digitale innovatie om hun concurrentiepositie te versterken. Een maatwerk app is daarbij een krachtig instrument — of het nu gaat om het automatiseren van interne processen, het verbeteren van de klantbeleving of het ontsluiten van nieuwe inkomstenstromen.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">App bouwen in Breda: wat zijn de mogelijkheden?</h2>
          <p>Elly Apps bouwt alle soorten digitale applicaties. Van een eenvoudig reserveringssysteem voor een restaurant in Breda tot een complex logistiek platform voor een distributiebedrijf in West-Brabant. Wij beginnen altijd met een grondige analyse van uw bedrijfsprocessen en doelgroep — zodat de app die wij bouwen niet alleen technisch perfect is, maar ook daadwerkelijk de problemen oplost die u heeft. Elk project is uniek en verdient een unieke aanpak.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">AI-integratie: slimmere apps voor Bredase bedrijven</h2>
          <p>Wij integreren standaard AI-mogelijkheden in onze apps. Dit betekent dat uw applicatie niet alleen doet wat u vraagt, maar ook leert van gebruik en steeds slimmer wordt. Denk aan automatische dataverwerking van formulieren, intelligente zoekfuncties, aanbevelingssystemen of geautomatiseerde rapportages. AI maakt uw app toekomstbestendig en geeft u een voorsprong op concurrenten die nog met verouderde systemen werken.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Snelle oplevering, geen gedoe</h2>
          <p>Wij leveren gemiddeld binnen 4 tot 6 weken op. Dat is mogelijk omdat wij een bewezen ontwikkelproces hanteren waarbij wij snel kunnen schakelen. Wekelijkse updates, een duidelijk projectplan en een vaste contactpersoon zorgen ervoor dat u altijd weet waar u aan toe bent. Na oplevering is uw app klaar voor gebruik — en wij staan klaar voor eventuele vragen of aanpassingen.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Lokale expertise, landelijke kwaliteit</h2>
          <p>Elly Apps werkt voor bedrijven door heel Nederland. Wij begrijpen de Bredase markt en de specifieke uitdagingen van ondernemers in West-Brabant. Tegelijkertijd brengen wij de kwaliteit en expertise van een landelijk opererende digitale dienstverlener. U krijgt het beste van twee werelden: persoonlijke aandacht gecombineerd met professionele uitvoering.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {['Web-apps en mobiele apps op maat', 'AI-integratie standaard beschikbaar', 'Ervaring met retail en logistiek', 'Gemiddeld binnen 4-6 weken live', 'Wekelijkse voortgangsupdate', 'Vaste prijs, volledig beheer na lancering'].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />
              {f}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Veelgestelde vragen over app ontwikkeling in Breda</h2>
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
              { label: 'Website laten maken in Breda', href: '/stad/breda' },
              { label: 'App laten maken Tilburg', href: '/apps/tilburg' },
              { label: 'App laten maken Den Haag', href: '/apps/den-haag' },
            ].map((r) => (
              <Link key={r.href} href={r.href} className="flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-xl px-4 py-3 hover:text-[#E53E3E] hover:border-[#E53E3E] transition-colors">
                <span className="text-[#E53E3E]">→</span> {r.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-[#f7f7f7] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">App laten bouwen in Breda?</h2>
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
