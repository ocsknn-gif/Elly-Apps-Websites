import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website laten maken Breda | Professioneel & Betaalbaar | Elly Apps',
  description: 'Professionele website laten maken in Breda? Elly Apps bouwt snelle, betaalbare websites voor ondernemers in Breda. Vraag vandaag een gratis offerte aan!',
  alternates: { canonical: 'https://elly-apps.nl/stad/breda' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Wat kost een website laten maken in Breda?', acceptedAnswer: { '@type': 'Answer', text: 'Een website via Elly Apps begint vanaf €299. De prijs hangt af van het aantal pagina\'s en de gewenste functionaliteit.' } },
    { '@type': 'Question', name: 'Hoe snel is mijn website klaar?', acceptedAnswer: { '@type': 'Answer', text: 'De meeste websites zijn binnen 5 tot 7 werkdagen live.' } },
    { '@type': 'Question', name: 'Wordt mijn website gevonden in Google?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Wij optimaliseren elke website voor zoekmachines, met extra aandacht voor lokale zoektermen in Breda en omgeving.' } },
  ],
}

const faq = [
  { q: 'Wat kost een website laten maken in Breda?', a: 'Een website via Elly Apps begint vanaf €299. De prijs hangt af van het aantal pagina\'s en de gewenste functionaliteit. Vraag een gratis offerte aan voor een exacte prijs.' },
  { q: 'Hoe snel is mijn website klaar?', a: 'De meeste websites zijn binnen 5 tot 7 werkdagen live. Bij complexere projecten stemmen we de planning vooraf af.' },
  { q: 'Wordt mijn website gevonden in Google?', a: 'Ja. Wij optimaliseren elke website voor zoekmachines, met extra aandacht voor lokale zoektermen in Breda en omgeving.' },
  { q: 'Bouwen jullie ook webshops?', a: 'Ja, wij bouwen webshops voor ondernemers in Breda. Neem contact op voor de mogelijkheden en een offerte.' },
  { q: 'Werken jullie alleen in Breda?', a: 'Nee, wij werken voor ondernemers door heel Nederland. Maar wij kennen de Bredase markt goed en helpen lokale bedrijven graag.' },
  { q: 'Zit er een maandelijkse kost aan vast?', a: 'Nee, je betaalt eenmalig voor de website. Hosting en domein zijn optioneel en worden transparant gecommuniceerd.' },
]

export default function BredaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div>
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Breda</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Website laten maken in Breda</h1>
          <p className="text-xl text-gray-600">Lokale ondernemers in Breda verdienen een website die écht werkt. Wij bouwen snelle, professionele websites — betaalbaar en zonder gedoe.</p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>Ben je ondernemer in Breda en wil je online meer klanten aantrekken? Een professionele website is tegenwoordig onmisbaar. Of je nu een winkel in het centrum runt, een bouwbedrijf hebt in Teteringen of een dienst aanbiedt in de regio — Elly Apps bouwt een website die past bij jouw bedrijf en jouw doelgroep.</p>
          <p>Breda is een groeiende stad met een levendige ondernemersscene. Van de sfeervolle binnenstad tot de moderne bedrijventerreinen — de concurrentie is groot. Met een sterke online aanwezigheid val jij op. Elly Apps combineert strak design, snelle laadtijden en lokale SEO zodat jouw website gevonden wordt door klanten in Breda en omgeving.</p>
          <p>Wij kennen de Bredase markt. We bouwen websites die aansluiten bij de lokale doelgroep — van de horeca in de binnenstad tot de zorg- en bouwsector. Onze klanten kiezen voor ons omdat we snel werken, eerlijk communiceren en resultaat leveren. Na de oplevering laten wij je niet los: wij bieden doorlopend onderhoud zodat jouw website altijd up-to-date blijft.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {['Lokale SEO voor Breda', 'Mobielvriendelijk en snel', 'Google Business Profile optimalisatie', 'Hosting, SSL en onderhoud inbegrepen', 'Professioneel ontwerp op maat', 'Persoonlijk contact en support'].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700"><CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />{f}</div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Veelgestelde vragen over website laten maken in Breda</h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details key={i} className="border rounded-xl p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.q}<span className="text-[#E53E3E] ml-2">+</span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="bg-[#f7f7f7] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Actief in Breda? Wij helpen u groeien.</h2>
          <p className="text-gray-600 mb-6">Vraag een gratis websitescan aan en ontdek uw kansen in Breda.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">Gratis websitescan</Link>
            <Link href="/prijzen" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold hover:bg-red-50 transition-colors">Bekijk prijzen</Link>
          </div>
        </div>
      </div>
    </>
  )
}
