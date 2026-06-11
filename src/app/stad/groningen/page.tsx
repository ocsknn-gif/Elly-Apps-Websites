import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website laten maken Groningen | Professionele websites vanaf €49 | Elly Apps',
  description: 'Op zoek naar een professionele website laten maken in Groningen? Elly Apps bouwt SEO-geoptimaliseerde websites voor Groningse ondernemers. Vanaf €49/maand. Vraag gratis websitescan aan.',
  alternates: { canonical: 'https://elly-apps.nl/stad/groningen' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Hoe zorg je dat ik gevonden word in Groningen op Google?', acceptedAnswer: { '@type': 'Answer', text: 'We optimaliseren uw website specifiek voor Groningen en omgeving. We verwerken lokale zoektermen zoals website laten maken Groningen in uw paginateksten, titels en meta descriptions.' } },
    { '@type': 'Question', name: 'Wat kost een website laten maken in Groningen?', acceptedAnswer: { '@type': 'Answer', text: 'Een website via Elly Apps kost vanaf €49 per maand, inclusief ontwerp, hosting, lokale SEO voor Groningen en onderhoud.' } },
    { '@type': 'Question', name: 'Hoe snel kan mijn website online in Groningen?', acceptedAnswer: { '@type': 'Answer', text: 'Gemiddeld staat uw website binnen 5 tot 10 werkdagen live.' } },
  ],
}

const faq = [
  { q: 'Hoe zorg je dat ik gevonden word in Groningen op Google?', a: 'We optimaliseren uw website specifiek voor Groningen en omgeving. We verwerken lokale zoektermen zoals "website laten maken Groningen" in uw paginateksten, titels en meta descriptions. Daarnaast zorgen we dat uw Google Business-profiel correct is ingesteld.' },
  { q: 'Hoe snel kan mijn website live staan in Groningen?', a: 'In de meeste gevallen staat uw website binnen 5 tot 10 werkdagen live. Na een kort intakegesprek verwerken wij alles voor u.' },
  { q: 'Maken jullie websites voor alle branches in Groningen?', a: 'Ja, absoluut. We bouwen websites voor alle soorten Groningse bedrijven — van restaurants en winkels tot loodgieters, kappers, accountants en MKB-bedrijven.' },
  { q: 'Is een website voor een klein Gronings bedrijf betaalbaar?', a: 'Absoluut. Onze websites beginnen vanaf €49 per maand, inclusief hosting, onderhoud en lokale SEO voor Groningen.' },
  { q: 'Werken jullie ook in de regio rondom Groningen?', a: 'Ja, we bedienen ook ondernemers in Assen, Drachten, Emmen, Leeuwarden en andere gemeenten rondom Groningen.' },
  { q: 'Kan ik ook een webshop laten maken in Groningen?', a: 'Ja, we bouwen ook webshops voor Groningse ondernemers — snel, veilig en goed vindbaar in Google Groningen.' },
]

export default function GroningenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div>
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Groningen</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Website laten maken in Groningen</h1>
          <p className="text-xl text-gray-600">Meer klanten uit Groningen via Google. Elly Apps bouwt professionele websites voor Groningse ondernemers — snel, betaalbaar en volledig ontzorgd.</p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>Groningen is de grootste stad van Noord-Nederland en een van de meest dynamische studentensteden van het land. Met meer dan 230.000 inwoners, duizenden studenten en een groeiend aantal bedrijven is de concurrentie groot. Klanten zoeken altijd eerst online voordat ze contact opnemen.</p>
          <p>Elly Apps bouwt voor Groningse ondernemers websites die geoptimaliseerd zijn voor lokale vindbaarheid. Onze AI analyseert wanneer en hoe mensen in Groningen zoeken naar uw diensten. Van de Grote Markt tot het Noorderplantsoen — wij zorgen dat klanten u vinden.</p>
          <p>Een effectieve website voor een Gronings bedrijf bevat altijd een duidelijke omschrijving van uw diensten, uw werkgebied in Groningen en omgeving, klantbeoordelingen, een contactformulier en lokale SEO-optimalisatie. We voegen lokale content toe zodat u optimaal vindbaar bent — niet alleen in het centrum maar ook in wijken als Helpman, De Hoogte, Paddepoel en omliggende gemeenten. Onze websites zijn volledig beheerd: hosting, SSL, updates en technisch onderhoud zijn inbegrepen.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {['Lokale SEO voor Groningen en omgeving', 'Mobielvriendelijk en snel', 'Google Business Profile optimalisatie', 'Hosting, SSL en onderhoud inbegrepen', 'Professioneel ontwerp op maat', 'Persoonlijk contact en support'].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700"><CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />{f}</div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Veelgestelde vragen over website laten maken in Groningen</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Actief in Groningen? Wij helpen u groeien.</h2>
          <p className="text-gray-600 mb-6">Vraag een gratis websitescan aan en ontdek uw kansen in Groningen.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">Gratis websitescan</Link>
            <Link href="/prijzen" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold hover:bg-red-50 transition-colors">Bekijk prijzen</Link>
          </div>
        </div>
      </div>
    </>
  )
}
