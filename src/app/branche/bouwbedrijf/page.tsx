import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website laten maken voor bouwbedrijf | Elly Apps',
  description: 'Website laten maken voor uw bouwbedrijf? Elly Apps bouwt professionele websites voor aannemers en bouwbedrijven. Portfolio, offerteformulier en lokale SEO. Vanaf €49/maand.',
  alternates: { canonical: 'https://elly-apps.nl/branche/bouwbedrijf' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website laten maken voor bouwbedrijf',
  provider: { '@type': 'Organization', name: 'Elly Apps', url: 'https://elly-apps.nl' },
  description: 'Professionele websites voor bouwbedrijven en aannemers. Portfolio, offerteformulier en lokale SEO.',
  areaServed: { '@type': 'Country', name: 'Netherlands' },
}

const faqItems = [
  { q: 'Wat moet er op de website van een bouwbedrijf staan?', a: 'Een effectieve bouwbedrijfswebsite bevat: een portfolio met afgeronde projecten (bij voorkeur met voor/na-foto\'s), een duidelijke dienstenpagina, referenties van tevreden klanten, een offerteformulier en uw contactgegevens. Lokale SEO is essentieel zodat u gevonden wordt door mensen die zoeken op "aannemer [stad]".' },
  { q: 'Hoe laat ik mijn portfolio zien op mijn website?', a: 'Wij bouwen een professionele portfolio sectie waar u uw afgeronde projecten kunt tonen met foto\'s, een korte beschrijving en de gebruikte materialen of technieken. U kunt dit zelf bijwerken via een eenvoudig beheerpaneel.' },
  { q: 'Kan ik online offertes aanvragen via mijn website?', a: 'Ja. Wij integreren een slim offerteformulier waarbij potentiële klanten hun project kunnen beschrijven, foto\'s kunnen uploaden en hun contactgegevens invullen. U ontvangt direct een melding en kunt snel reageren.' },
  { q: 'Werken jullie ook voor zelfstandige aannemers?', a: 'Absoluut. Ons Starter pakket (€49/mnd) is perfect voor zelfstandige aannemers die een professionele online aanwezigheid willen. Snel live, volledig beheerd en betaalbaar.' },
]

export default function BouwbedrijfPage() {
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
            Website laten maken voor bouwbedrijf
          </h1>
          <p className="text-xl text-gray-600">
            Meer opdrachten via Google. Een professionele website voor uw bouwbedrijf of
            aannemer — met portfolio, offerteformulier en lokale SEO.
          </p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>
            Particulieren en bedrijven die een aannemer of bouwbedrijf zoeken, beginnen hun
            zoektocht steeds vaker online. Ze zoeken op Google, bekijken websites, lezen reviews
            en vragen via een formulier een offerte aan. Bouwbedrijven die niet goed vindbaar
            zijn online, missen deze opdrachten — ongeacht hoe goed hun vakmanschap is.
            Een professionele website is voor elk bouwbedrijf de basis van moderne
            klantacquisitie.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Uw portfolio online: laat uw werk spreken</h2>
          <p>
            Het sterkste verkoopargument voor een bouwbedrijf is uw eerdere werk. Wij bouwen
            een professionele portfolio sectie waar u uw afgeronde projecten kunt tonen —
            nieuwbouw, renovaties, verbouwingen, dakkapellen, aanbouwen. Met voor/na-foto's,
            een korte beschrijving en eventueel een quote van de opdrachtgever. Dit overtuigt
            potentiële klanten sneller dan welke tekst ook.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Online offertes: meer leads, minder telefoontjes</h2>
          <p>
            Een slim offerteformulier op uw website werkt 24/7. Potentiële klanten beschrijven
            hun project, uploaden foto's van de situatie en vullen hun contactgegevens in.
            U ontvangt direct een melding en kunt snel reageren. Snelle reactie is in de bouw
            cruciaal — wie als eerste terugbelt, krijgt de opdracht. Wij configureren het
            formulier zo dat u alleen relevante aanvragen ontvangt.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Lokale SEO voor bouwbedrijven</h2>
          <p>
            Mensen zoeken doorgaans op lokale termen: "aannemer Utrecht", "verbouwing
            Amsterdam", "dakkapel plaatsen Den Haag". Wij optimaliseren uw website voor
            deze zoektermen — met gerichte content per dienst en per regio. Combineer dit
            met een geoptimaliseerd Google Business Profile en u verschijnt bovenaan in de
            lokale zoekresultaten. Dat levert structureel meer aanvragen op zonder
            advertentiekosten.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Professionele uitstraling, betaalbare prijs</h2>
          <p>
            Veel bouwbedrijven hebben een slechte of verouderde website — of helemaal geen.
            Dit is een kans voor u. Met een professionele Elly Apps website onderscheidt u
            zich direct van de concurrentie. Onze websites zijn ontworpen om vertrouwen te
            wekken: strak, overzichtelijk en gericht op conversie. Voor een vaste maandprijs
            vanaf €49 heeft u een complete online aanwezigheid inclusief hosting, updates en
            technische ondersteuning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Professionele portfolio sectie',
            'Slim offerteformulier met foto-upload',
            'Lokale SEO voor "aannemer [stad]"',
            'Google Business optimalisatie',
            'Mobielvriendelijk en snel',
            'Volledig beheerd, vaste prijs',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />
              {f}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Veelgestelde vragen over websites voor bouwbedrijven</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Website voor uw bouwbedrijf?</h2>
          <p className="text-gray-600 mb-6">Vraag een gratis websitescan aan en ontdek hoe wij meer opdrachten naar uw bedrijf brengen.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">Gratis websitescan</Link>
            <Link href="/prijzen" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold hover:bg-red-50 transition-colors">Bekijk prijzen</Link>
          </div>
        </div>
      </div>
    </>
  )
}
