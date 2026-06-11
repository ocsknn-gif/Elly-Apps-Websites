import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'App ontwikkelaar Noord-Holland | Elly Apps',
  description: 'App ontwikkelaar in Noord-Holland? Elly Apps bouwt professionele web-apps en mobiele apps voor MKB-bedrijven in Amsterdam, Haarlem, Alkmaar en heel Noord-Holland.',
  alternates: { canonical: 'https://elly-apps.nl/apps/noord-holland' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elly Apps — App ontwikkelaar Noord-Holland',
  url: 'https://elly-apps.nl/apps/noord-holland',
  areaServed: { '@type': 'State', name: 'Noord-Holland' },
  description: 'Professionele web-apps en mobiele apps voor MKB-bedrijven in Noord-Holland.',
}

const faqItems = [
  { q: 'In welke steden in Noord-Holland werken jullie?', a: 'Wij werken voor bedrijven door heel Noord-Holland: Amsterdam, Haarlem, Alkmaar, Zaandam, Hoorn, Den Helder, Purmerend en alle omliggende gemeenten. Onze samenwerking verloopt grotendeels online, dus locatie is nooit een belemmering.' },
  { q: 'Wat is het verschil tussen een web-app en een mobiele app?', a: 'Een web-app draait in de browser en is toegankelijk via elke smartphone, tablet of computer zonder installatie. Een mobiele app wordt geïnstalleerd via de App Store of Google Play. Voor de meeste MKB-bedrijven is een web-app de beste keuze: goedkoper, sneller te bouwen en makkelijker te onderhouden.' },
  { q: 'Kunnen jullie ook een app bouwen voor mijn franchise?', a: 'Ja. Wij bouwen schaalbare applicaties voor franchiseketens waarbij meerdere vestigingen toegang hebben tot één centraal systeem met lokale aanpassingsmogelijkheden.' },
  { q: 'Hoe snel kan ik een offerte krijgen?', a: 'Na een gratis kennismakingsgesprek van 30-45 minuten ontvangt u binnen 48 uur een gedetailleerde offerte met een vaste prijs en een realistische planning.' },
]

export default function AppNoordHollandPage() {
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
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Noord-Holland</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            App ontwikkelaar in Noord-Holland
          </h1>
          <p className="text-xl text-gray-600">
            Professionele web-apps en mobiele apps voor MKB-bedrijven in Amsterdam, Haarlem,
            Alkmaar en heel Noord-Holland. AI-gedreven, vaste prijs en snel opgeleverd.
          </p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>
            Noord-Holland is de meest economisch actieve provincie van Nederland. Amsterdam
            als internationale zakenhub, Haarlem als creatieve stad, Alkmaar als handelscentrum
            en talloze innovatieve bedrijven in de regio — Noord-Holland bruist van
            ondernemersactiviteit. En steeds meer van die ondernemers ontdekken dat een
            maatwerk app hun bedrijf naar een hoger niveau tilt.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">App laten maken in Amsterdam, Haarlem of Alkmaar</h2>
          <p>
            Elly Apps bouwt apps voor bedrijven door heel Noord-Holland. Of u nu in Amsterdam
            een klantportaal wil bouwen, in Haarlem een reserveringssysteem zoekt of in
            Alkmaar een voorraadbeheer-app wil digitaliseren — wij kennen de lokale
            bedrijfscultuur en leveren oplossingen die aansluiten op uw specifieke situatie.
            Onze samenwerking verloopt grotendeels digitaal, maar een fysieke meeting is
            altijd mogelijk.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Waarom Noord-Hollandse bedrijven kiezen voor Elly Apps</h2>
          <p>
            In Noord-Holland zijn veel app-ontwikkelaars actief — van kleine freelancers tot
            grote bureaus. Elly Apps onderscheidt zich op drie punten. Ten eerste werken wij
            uitsluitend met vaste prijzen — geen uurtarieven, geen verrassingen op de factuur.
            Ten tweede integreren wij standaard AI-functionaliteiten in onze apps, waardoor
            uw applicatie slimmer is dan wat de gemiddelde ontwikkelaar oplevert. En ten derde
            bieden wij na oplevering volledig beheer — u hoeft nooit meer wakker te liggen van
            updates, beveiliging of storingen.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Sectoren waarvoor wij apps bouwen in Noord-Holland</h2>
          <p>
            Wij hebben ervaring in uiteenlopende sectoren die sterk vertegenwoordigd zijn in
            Noord-Holland: toerisme en horeca (Amsterdam is de meest bezochte stad van
            Nederland), creatieve sector en media, zakelijke dienstverlening, zorg en welzijn,
            retail en e-commerce, logistiek en transport. Elke sector heeft eigen processen en
            behoeften — wij passen onze aanpak daarop aan.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Van idee naar werkende app: ons bewezen proces</h2>
          <p>
            Wij hanteren een bewezen ontwikkelproces dat zorgt voor snelle oplevering en hoge
            kwaliteit. Na een gratis kennismakingsgesprek maken wij een functioneel ontwerp.
            Daarna bouwen wij in twee-wekelijkse sprints — u ziet elke twee weken de
            voortgang en kunt feedback geven. Na uitgebreid testen lanceren wij de app en
            begeleiden wij de go-live. Gemiddeld staat uw app binnen 4 tot 6 weken live.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Actief in Amsterdam, Haarlem, Alkmaar en meer',
            'AI-functionaliteiten standaard',
            'Vaste prijs, geen uurtarieven',
            'Gemiddeld binnen 4-6 weken live',
            'Ervaring in toerisme, zorg en retail',
            'Volledig beheer na lancering',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />
              {f}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Veelgestelde vragen over app ontwikkeling in Noord-Holland</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">App laten maken in Noord-Holland?</h2>
          <p className="text-gray-600 mb-6">Plan een gratis kennismakingsgesprek en ontdek wat wij voor uw bedrijf kunnen bouwen.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">Gratis kennismakingsgesprek</Link>
            <Link href="/apps/amsterdam" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold hover:bg-red-50 transition-colors">App laten maken Amsterdam</Link>
          </div>
        </div>
      </div>
    </>
  )
}
