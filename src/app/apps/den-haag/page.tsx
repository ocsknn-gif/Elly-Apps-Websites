import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'App laten maken Den Haag | Elly Apps',
  description: 'App laten maken in Den Haag? Elly Apps bouwt professionele web-apps en mobiele apps voor MKB-bedrijven in Den Haag. AI-gedreven, betaalbaar en snel live.',
  alternates: { canonical: 'https://elly-apps.nl/apps/den-haag' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elly Apps — App laten maken Den Haag',
  url: 'https://elly-apps.nl/apps/den-haag',
  areaServed: { '@type': 'City', name: 'Den Haag' },
  description: 'Professionele web-apps en mobiele apps voor MKB-bedrijven in Den Haag.',
}

const faqItems = [
  { q: 'Wat kost een app laten maken in Den Haag?', a: 'De kosten zijn afhankelijk van de complexiteit en het type app. Wij werken altijd met een transparante vaste prijs. Vraag een vrijblijvende offerte aan voor een exacte prijsindicatie.' },
  { q: 'Hoe lang duurt het om een app te laten bouwen?', a: 'Gemiddeld leveren wij een app op binnen 4 tot 6 weken. Eenvoudigere applicaties kunnen sneller, complexere platforms vragen meer tijd. U heeft altijd inzicht in de voortgang.' },
  { q: 'Bouwen jullie ook apps voor de overheid of non-profit?', a: 'Ja. Den Haag is de bestuurlijke hoofdstad van Nederland en herbergt veel overheidsinstanties en non-profit organisaties. Wij hebben ervaring met veilige, toegankelijke applicaties voor deze sectoren.' },
  { q: 'Kan een app ook gekoppeld worden aan bestaande systemen?', a: 'Absoluut. Wij bouwen koppelingen met CRM-systemen, boekhoudpakketten, betaalproviders en andere externe platformen.' },
]

export default function AppDenHaagPage() {
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
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Den Haag</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            App laten maken in Den Haag
          </h1>
          <p className="text-xl text-gray-600">
            Professionele web-apps en mobiele apps voor ondernemers in Den Haag en omgeving.
            Van concept tot lancering — AI-gedreven, snel en volledig ontzorgd.
          </p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>
            Den Haag is niet alleen de politieke hoofdstad van Nederland — het is ook een van de
            grootste economische centra van het land. De stad herbergt duizenden bedrijven in
            sectoren als zakelijke dienstverlening, juridische sector, IT, zorg en overheid.
            Steeds meer van deze bedrijven ontdekken dat een maatwerk app hun processen drastisch
            kan verbeteren: minder handmatig werk, betere klantcommunicatie en meer grip op data.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Waarom een app laten bouwen in Den Haag?</h2>
          <p>
            Den Haag heeft een unieke bedrijfsomgeving. De combinatie van grote institutionele
            opdrachtgevers, een groeiend tech-ecosysteem rondom de Binckhorst en een diverse
            bevolking maakt de stad tot een vruchtbare bodem voor digitale innovatie. Of u nu
            een advocatenkantoor bent dat een cliëntportaal wil bouwen, een zorginstelling die
            patiëntgegevens digitaal wil beheren, of een retailer die een bestelapp wil lanceren
            — Elly Apps bouwt de oplossing die bij uw organisatie past.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Wat kunnen wij voor u bouwen?</h2>
          <p>
            Wij bouwen uiteenlopende digitale oplossingen: van eenvoudige webapplicaties tot
            complexe platforms met gebruikersauthenticatie, dashboards, API-koppelingen en
            AI-functionaliteiten. Voorbeelden van apps die wij voor Den Haagse bedrijven
            hebben gebouwd: klantportalen voor dienstverleners, reserveringssystemen voor
            restaurants en wellness-centra, interne HR-tools voor MKB, en e-commerce platforms
            met maatwerk logistiek. Elk project begint met een grondige analyse van uw wensen
            en processen — zodat de app niet alleen mooi is, maar ook echt werkt voor uw bedrijf.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">AI-gedreven apps: de toekomst is nu</h2>
          <p>
            Elly Apps integreert waar mogelijk AI-functionaliteiten in de apps die wij bouwen.
            Denk aan intelligente zoekfuncties die begrijpen wat een gebruiker bedoelt,
            automatische categorisering van data, chatbots die klantvragen beantwoorden of
            predictive analytics die trends voorspellen. Dit zijn geen futuristische concepten —
            het zijn concrete tools die uw bedrijf vandaag al slimmer kunnen maken.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Transparante werkwijze, vaste prijs</h2>
          <p>
            Wij werken altijd met een vaste prijs — geen uurtarieven, geen verborgen kosten.
            Voordat wij beginnen, ontvangen u een heldere offerte met een volledige omschrijving
            van wat wij gaan bouwen en wanneer u het kunt verwachten. Tijdens het project heeft u
            via een persoonlijk dashboard altijd inzicht in de status. Na oplevering begeleiden
            wij u bij de lancering en bieden wij doorlopend beheer en technische ondersteuning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Web-apps en mobiele apps op maat',
            'AI-functionaliteiten standaard beschikbaar',
            'Ervaring met overheid en non-profit',
            'Gemiddeld binnen 4-6 weken live',
            'Koppelingen met externe systemen',
            'Vaste prijs, volledig beheer',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />
              {f}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Veelgestelde vragen over app ontwikkeling in Den Haag</h2>
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
              { label: 'Website laten maken in Den Haag', href: '/stad/den-haag' },
              { label: 'App laten maken Amsterdam', href: '/apps/amsterdam' },
              { label: 'App laten maken Breda', href: '/apps/breda' },
            ].map((r) => (
              <Link key={r.href} href={r.href} className="flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-xl px-4 py-3 hover:text-[#E53E3E] hover:border-[#E53E3E] transition-colors">
                <span className="text-[#E53E3E]">→</span> {r.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-[#f7f7f7] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">App laten bouwen in Den Haag?</h2>
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
