import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'App ontwikkelaar Tilburg | Elly Apps',
  description: 'Op zoek naar een app ontwikkelaar in Tilburg? Elly Apps is uw partner voor professionele web-apps en mobiele apps. AI-gedreven, vaste prijs en snel opgeleverd.',
  alternates: { canonical: 'https://elly-apps.nl/apps/app-ontwikkelaar-tilburg' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elly Apps — App ontwikkelaar Tilburg',
  url: 'https://elly-apps.nl/apps/app-ontwikkelaar-tilburg',
  areaServed: { '@type': 'City', name: 'Tilburg' },
  description: 'App ontwikkelaar in Tilburg voor professionele web-apps en mobiele applicaties.',
}

const faqItems = [
  { q: 'Wat maakt een goede app ontwikkelaar?', a: 'Een goede app ontwikkelaar combineert technische kennis met zakelijk inzicht. Hij begrijpt niet alleen hoe hij code schrijft, maar ook waarom u een app nodig heeft en hoe die uw bedrijf vooruithelpt.' },
  { q: 'Werken jullie ook voor bedrijven buiten Tilburg?', a: 'Ja. Wij werken voor bedrijven door heel Nederland. Tilburg is onze regio maar wij hebben klanten van Groningen tot Maastricht.' },
  { q: 'Kan ik ook een app laten maken voor mijn franchise of keten?', a: 'Zeker. Wij hebben ervaring met schaalbare applicaties voor ketens en franchisenemers waarbij consistentie en centrale controle belangrijk zijn.' },
  { q: 'Hoe bewaken jullie de kwaliteit van de code?', a: 'Wij werken met code reviews, geautomatiseerde tests en uitgebreide handmatige tests voor elke release. Kwaliteit is geen bijzaak maar de kern van ons proces.' },
]

export default function AppOntwikkelaarTilburgPage() {
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
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">App ontwikkelaar in Tilburg</h1>
          <p className="text-xl text-gray-600">Elly Apps is uw app ontwikkelaar in Tilburg en omgeving. Wij bouwen professionele web-apps en mobiele applicaties met AI-gedreven functionaliteiten — snel, betrouwbaar en voor een vaste prijs.</p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>Op zoek naar een betrouwbare app ontwikkelaar in Tilburg? Elly Apps is gespecialiseerd in het bouwen van maatwerk web-apps en mobiele applicaties voor MKB-bedrijven in Tilburg en de regio Midden-Brabant. Wij combineren technische expertise met een diep begrip van de uitdagingen waar ondernemers tegenaan lopen — zodat de apps die wij bouwen niet alleen technisch perfect zijn, maar ook echt het verschil maken voor uw bedrijf.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Wat doet een app ontwikkelaar precies?</h2>
          <p>Een app ontwikkelaar analyseert uw bedrijfsprocessen, vertaalt die naar functionele eisen, ontwerpt de gebruikersinterface, schrijft de code en test de applicatie uitgebreid voor oplevering. Bij Elly Apps gaat dat verder: wij denken actief mee over hoe technologie uw bedrijf vooruitkan helpen. Wij zijn niet alleen uitvoerders — wij zijn strategische partners die u helpen de juiste digitale beslissingen te nemen.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Waarom kiezen voor Elly Apps als app ontwikkelaar in Tilburg?</h2>
          <p>Er zijn meerdere redenen waarom Tilburgse ondernemers voor Elly Apps kiezen. Ten eerste onze transparante werkwijze: vaste prijs, heldere communicatie en geen verrassingen. Ten tweede onze AI-expertise: wij integreren standaard AI-functionaliteiten in onze apps waardoor uw applicatie slimmer en toekomstbestendiger wordt. Ten derde onze brede sectorervaring: van horeca en retail tot zorg en zakelijke dienstverlening. En ten vierde onze snelheid: gemiddeld binnen 4 tot 6 weken van idee naar werkende app.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Technologie die we gebruiken</h2>
          <p>Wij werken met moderne, bewezen technologieën die schaalbaar en onderhoudsvriendelijk zijn. Voor web-apps gebruiken wij Next.js en React, voor databases Supabase of PostgreSQL, voor AI-integraties de Anthropic Claude API, en voor betalingen Stripe of Mollie. Al onze code is goed gedocumenteerd en overdraagbaar — u bent nooit afhankelijk van ons voor de technologie die u bezit.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Van idee naar app: ons bewezen proces</h2>
          <p>Ons ontwikkelproces is lean en transparant. Na een gratis kennismakingsgesprek stellen wij een gedetailleerde offerte op. Na akkoord starten wij met het functioneel ontwerp. Daarna bouwen wij in twee-wekelijkse sprints, waarbij u na elke sprint een werkende versie kunt testen. Na uitgebreid testen lanceren wij de app en begeleiden wij de go-live. Daarna nemen wij het beheer volledig over.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {['Specialist in Next.js, React en AI', 'Transparante vaste prijs', 'Gemiddeld binnen 4-6 weken live', 'Code reviews en geautomatiseerde tests', 'Volledig beheer na lancering', 'Sectorervaring in horeca, zorg en retail'].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />
              {f}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Veelgestelde vragen over app ontwikkeling</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">App laten ontwikkelen in Tilburg?</h2>
          <p className="text-gray-600 mb-6">Plan een gratis kennismakingsgesprek en ontdek wat wij voor u kunnen bouwen.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">Gratis kennismakingsgesprek</Link>
            <Link href="/apps/tilburg" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold hover:bg-red-50 transition-colors">Meer over apps in Tilburg</Link>
          </div>
        </div>
      </div>
    </>
  )
}
