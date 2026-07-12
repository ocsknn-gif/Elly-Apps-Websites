import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website laten maken Almere | Professionele websites vanaf €49 | Elly Apps',
  description: 'Op zoek naar een professionele website laten maken in Almere? Elly Apps bouwt SEO-geoptimaliseerde websites voor Almeerse ondernemers. Vanaf €49/maand. Vraag gratis websitescan aan.',
  alternates: { canonical: 'https://elly-apps.nl/stad/almere' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/stad/almere',
    title: 'Website laten maken Almere | Professionele websites vanaf €49 | Elly Apps',
    description: 'Op zoek naar een professionele website laten maken in Almere? Elly Apps bouwt SEO-geoptimaliseerde websites voor Almeerse ondernemers. Vanaf €49/maand. Vraag gratis websitescan aan.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken Almere | Professionele websites vanaf €49 | Elly Apps',
    description: 'Op zoek naar een professionele website laten maken in Almere? Elly Apps bouwt SEO-geoptimaliseerde websites voor Almeerse ondernemers. Vanaf €49/maand. Vraag gratis websitescan aan.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Hoe zorg je dat ik gevonden word in Almere op Google?', acceptedAnswer: { '@type': 'Answer', text: 'We optimaliseren uw website specifiek voor Almere en omgeving. We verwerken lokale zoektermen zoals website laten maken Almere in uw paginateksten, titels en meta descriptions.' } },
    { '@type': 'Question', name: 'Wat kost een website laten maken in Almere?', acceptedAnswer: { '@type': 'Answer', text: 'Een website via Elly Apps kost vanaf €49 per maand, inclusief ontwerp, hosting, lokale SEO voor Almere en onderhoud.' } },
    { '@type': 'Question', name: 'Hoe snel kan mijn website online in Almere?', acceptedAnswer: { '@type': 'Answer', text: 'Gemiddeld staat uw website binnen 5 tot 10 werkdagen live.' } },
  ],
}

const faq = [
  { q: 'Hoe zorg je dat ik gevonden word in Almere op Google?', a: 'We optimaliseren uw website specifiek voor Almere en omgeving. We verwerken lokale zoektermen zoals "website laten maken Almere" in uw paginateksten, titels en meta descriptions. Daarnaast zorgen we dat uw Google Business-profiel correct is ingesteld met uw Almeerse vestiging.' },
  { q: 'Hoe snel kan mijn website live staan in Almere?', a: 'In de meeste gevallen staat uw website binnen 5 tot 10 werkdagen live. Na een kort intakegesprek verwerken wij alles voor u. U hoeft niets technisch te doen.' },
  { q: 'Maken jullie websites voor alle branches in Almere?', a: 'Ja, absoluut. We bouwen websites voor alle soorten Almeerse bedrijven — van restaurants en winkels tot loodgieters, kappers, accountants en MKB-bedrijven.' },
  { q: 'Is een website voor een klein Almeers bedrijf betaalbaar?', a: 'Absoluut. Onze websites beginnen vanaf €49 per maand, inclusief hosting, onderhoud en lokale SEO voor Almere. Eén nieuwe klant per maand verdient dit ruimschoots terug.' },
  { q: 'Werken jullie ook in de regio rondom Almere?', a: 'Ja, we bedienen ook ondernemers in Lelystad, Zeewolde, Huizen, Bussum en andere gemeenten rondom Almere.' },
  { q: 'Kan ik ook een webshop laten maken in Almere?', a: 'Ja, we bouwen ook webshops voor Almeerse ondernemers — snel, veilig en goed vindbaar in Google Almere.' },
]

export default function AlmerePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div>
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Almere</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Website laten maken in Almere</h1>
          <p className="text-xl text-gray-600">Meer klanten uit Almere via Google. Elly Apps bouwt professionele websites voor Almeerse ondernemers — snel, betaalbaar en volledig ontzorgd.</p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>Almere is één van de snelst groeiende steden van Nederland. Met meer dan 230.000 inwoners en duizenden actieve bedrijven in vrijwel elke branche is de concurrentie groot. Klanten zoeken altijd eerst online voordat ze contact opnemen. Zonder professionele website mist uw bedrijf dagelijks kansen aan concurrenten die wél goed vindbaar zijn in Almere.</p>
          <p>Elly Apps bouwt voor Almeerse ondernemers websites die niet alleen mooi zijn, maar ook gevonden worden. Met lokale SEO zorgen we dat uw website verschijnt wanneer mensen in Almere zoeken naar uw dienst. Van Almere Stad tot Almere Buiten en Almere Haven — wij zorgen dat klanten u vinden.</p>
          <p>Een effectieve website voor een Almeers bedrijf bevat altijd een duidelijke omschrijving van uw diensten, uw werkgebied in Almere en omgeving, klantbeoordelingen, een contactformulier en lokale SEO-optimalisatie. Door uw website te optimaliseren voor zoektermen als "website laten maken Almere" of "webdesign Almere" verschijnt u precies wanneer Almeerse ondernemers u nodig hebben.</p>
          <p>Elly Apps werkt voor alle soorten Almeerse bedrijven: restaurants, loodgieters, kappers, accountants, bouwbedrijven en meer. Elke website wordt op maat gemaakt met lokale SEO zodat u gevonden wordt door klanten in uw specifieke buurt of wijk. Onze websites zijn volledig beheerd: hosting, SSL, updates en technisch onderhoud zijn inbegrepen.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {['Lokale SEO voor Almere en omgeving', 'Mobielvriendelijk en snel', 'Google Business Profile optimalisatie', 'Hosting, SSL en onderhoud inbegrepen', 'Professioneel ontwerp op maat', 'Binnen 5-10 werkdagen live'].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700"><CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />{f}</div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Veelgestelde vragen over website laten maken in Almere</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Actief in Almere? Wij helpen u groeien.</h2>
          <p className="text-gray-600 mb-6">Vraag een gratis websitescan aan en ontdek uw kansen in Almere.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">Gratis websitescan</Link>
            <Link href="/prijzen" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold hover:bg-red-50 transition-colors">Bekijk prijzen</Link>
          </div>
        </div>
      </div>
    </>
  )
}
