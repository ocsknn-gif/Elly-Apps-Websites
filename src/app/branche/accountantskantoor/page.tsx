import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website laten maken voor accountantskantoor | Elly Apps',
  description: 'Website laten maken voor uw accountantskantoor? Elly Apps bouwt professionele, betrouwbare websites voor accountants en administratiekantoren. SEO-geoptimaliseerd, vaste prijs.',
  alternates: { canonical: 'https://elly-apps.nl/branche/accountantskantoor' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website laten maken voor accountantskantoor',
  provider: { '@type': 'Organization', name: 'Elly Apps', url: 'https://elly-apps.nl' },
  description: 'Professionele websites voor accountants en administratiekantoren. Betrouwbaar, SEO-geoptimaliseerd en volledig beheerd.',
  areaServed: { '@type': 'Country', name: 'Netherlands' },
}

const faqItems = [
  { q: 'Wat moet er op de website van een accountantskantoor staan?', a: 'Een goede accountantswebsite bevat minimaal: een duidelijke dienstenpagina (jaarrekening, belastingaangifte, loonadministratie), een over-ons sectie met de expertise van uw team, klantcases of testimonials, contactgegevens en een contactformulier. SEO-geoptimaliseerde content rond zoekwoorden als "accountant [stad]" is essentieel voor vindbaarheid.' },
  { q: 'Hoe onderscheidt een accountantswebsite zich van de concurrentie?', a: 'De meeste accountantswebsites zien er hetzelfde uit. U onderscheidt zich door concreet te zijn: welke sectoren bedient u, welke bedrijfsgroottes, welke specifieke expertise? Wij helpen u dit helder te verwoorden en te vertalen naar een website die direct vertrouwen wekt.' },
  { q: 'Kan ik een beveiligde klantomgeving toevoegen?', a: 'Ja. Wij kunnen een beveiligd klantportaal integreren waar cliënten documenten kunnen uploaden en downloaden. Dit bespaart veel heen-en-weer mailen en verhoogt de professionele uitstraling.' },
  { q: 'Is een accountantswebsite duur?', a: 'Bij Elly Apps betaalt u €299 eenmalige setup en €49 per maand. Dat is inclusief hosting, SSL, updates en basis SEO. Er zijn geen verborgen kosten.' },
]

export default function AccountantskantoorPage() {
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
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Branche</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Website laten maken voor accountantskantoor
          </h1>
          <p className="text-xl text-gray-600">
            Een professionele, vertrouwenwekkende website voor uw accountantskantoor.
            Gevonden worden door MKB-ondernemers die op zoek zijn naar een betrouwbare accountant.
          </p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>
            Ondernemers die een accountant zoeken, vergelijken online. Ze bekijken de website,
            lezen over de expertise, zoeken naar ervaringen van andere klanten en beoordelen
            de uitstraling van het kantoor. Een verouderde of onduidelijke website kost u
            potentiële klanten — zelfs als u inhoudelijk superieur bent aan de concurrent.
            Een professionele accountantswebsite is uw digitale visitekaartje en uw
            belangrijkste marketingtool.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Wat maakt een goede accountantswebsite?</h2>
          <p>
            Een effectieve website voor een accountantskantoor wekt direct vertrouwen.
            Dit bereikt u door een professioneel en strak ontwerp, heldere informatie over
            uw diensten en tarieven, een duidelijke "over ons" sectie met foto's en
            achtergrond van uw team, en aantoonbare expertise via klantcases, specialisaties
            of sectorfocus. Wij helpen u dit alles helder en overtuigend te presenteren —
            zodat een bezoeker binnen tien seconden begrijpt waarom uw kantoor de juiste keuze is.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Gevonden worden door MKB-ondernemers</h2>
          <p>
            De meeste accountants worden gevonden via Google. Zoektermen als "accountant
            [stad]", "boekhouder MKB" of "belastingaangifte zzp" hebben duizenden
            maandelijkse zoekopdrachten. Wij optimaliseren uw website specifiek voor deze
            zoekwoorden — zodat u bovenaan verschijnt wanneer ondernemers in uw regio op
            zoek zijn naar een accountant. Dit is duurzame marketing die maand na maand
            nieuwe klanten oplevert, zonder advertentiekosten.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Beveiligd klantportaal</h2>
          <p>
            Steeds meer accountantskantoren kiezen voor een digitaal klantportaal waar
            cliënten documenten kunnen uploaden, jaarrekeningen kunnen downloaden en
            vragen kunnen stellen. Wij bouwen dit soort portalen — veilig, gebruiksvriendelijk
            en volledig geïntegreerd in uw website. Dit bespaart uw team tijd en verhoogt
            de tevredenheid van uw klanten.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Specialisaties en sectorfocus</h2>
          <p>
            Veel accountantskantoren hebben een specialisatie — in een bepaalde sector,
            een bepaalde bedrijfsgrootte of een specifiek type dienstverlening. Wij vertalen
            uw specialisatie naar gerichte landingspagina's die ranken op de specifieke
            zoektermen van uw doelgroep. Een kantoor dat gespecialiseerd is in horecaboekhouding
            scoort daarmee op "boekhouder horeca" — een zoekwoord met hoge conversiekans.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Vertrouwenwekkend en professioneel ontwerp',
            'SEO voor "accountant [stad]" zoektermen',
            'Beveiligd klantportaal mogelijk',
            'Specialisatie landingspagina\'s',
            'Google Business optimalisatie',
            'Volledig beheerd, vaste prijs',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />
              {f}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Veelgestelde vragen over accountantswebsites</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Website voor uw accountantskantoor?</h2>
          <p className="text-gray-600 mb-6">Vraag een gratis websitescan aan en ontdek hoe wij meer klanten naar uw kantoor brengen.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">Gratis websitescan</Link>
            <Link href="/prijzen" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold hover:bg-red-50 transition-colors">Bekijk prijzen</Link>
          </div>
        </div>
      </div>
    </>
  )
}
