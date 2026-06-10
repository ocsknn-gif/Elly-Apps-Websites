import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Boekingssysteem website laten integreren | Elly Apps',
  description: 'Boekingssysteem laten integreren op uw website? Elly Apps koppelt een professioneel online reserveringssysteem aan uw bestaande website. Snel, betaalbaar en volledig beheerd.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Boekingssysteem website integratie',
  provider: { '@type': 'Organization', name: 'Elly Apps', url: 'https://elly-apps.nl' },
  description: 'Professioneel boekingssysteem laten integreren op uw website. Voor restaurants, kappers, therapeuten en andere dienstverleners.',
  areaServed: { '@type': 'Country', name: 'Netherlands' },
}

const faqItems = [
  { q: 'Welke boekingssystemen kunnen jullie integreren?', a: 'Wij werken met diverse oplossingen: van maatwerk reserveringssystemen tot koppelingen met bestaande tools zoals Calendly, SimplyBook, Booksy of sectorspecifieke systemen. We adviseren altijd de beste optie voor uw situatie.' },
  { q: 'Werkt een boekingssysteem ook op mobiel?', a: 'Ja, alle systemen die wij integreren zijn volledig mobielvriendelijk. Klanten kunnen eenvoudig reserveren via smartphone of tablet.' },
  { q: 'Kan ik automatische bevestigingsmails instellen?', a: 'Absoluut. Wij configureren automatische bevestigings- en herinneringsmails zodat u minder no-shows heeft en uw klanten altijd goed geïnformeerd zijn.' },
  { q: 'Wat kost het integreren van een boekingssysteem?', a: 'De kosten hangen af van de complexiteit en het type systeem. Wij werken met een vaste prijs. Neem contact op voor een vrijblijvende offerte.' },
]

export default function BoekingssysteemPage() {
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
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Dienst</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Boekingssysteem integreren op uw website
          </h1>
          <p className="text-xl text-gray-600">
            Laat klanten 24/7 online reserveren. Wij integreren een professioneel
            boekingssysteem op uw bestaande website — snel, betaalbaar en volledig beheerd.
          </p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>
            Klanten verwachten tegenwoordig dat ze op elk moment van de dag een afspraak of
            reservering kunnen maken — niet alleen tijdens uw openingstijden. Een online
            boekingssysteem op uw website geeft klanten die vrijheid en neemt u tegelijkertijd
            veel administratief werk uit handen. Geen telefoontjes meer om afspraken in te
            plannen, geen handmatige agendabeheer en minder no-shows dankzij automatische
            herinneringen.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Voor wie is een boekingssysteem geschikt?</h2>
          <p>
            Een online reserveringssysteem is waardevol voor elke ondernemer die afspraken,
            reserveringen of boekingen verwerkt. Denk aan kappers en schoonheidsspecialisten
            die afspraken plannen, restaurants die tafels reserveren, fysiotherapeuten en
            coaches die consultaties inplannen, sportscholen die lessen beheren, of
            verhuurders van ruimtes en apparatuur. Wij hebben ervaring met alle deze sectoren
            en weten welke oplossing het beste werkt voor uw specifieke situatie.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Maatwerk of standaard koppeling?</h2>
          <p>
            Afhankelijk van uw wensen bouwen wij een volledig maatwerk boekingssysteem of
            koppelen wij een bestaande tool aan uw website. Beide opties hebben hun voordelen.
            Een maatwerk systeem geeft u maximale controle en kan precies worden afgestemd op
            uw processen. Een koppeling met een bestaande tool is sneller en goedkoper, maar
            biedt minder flexibiliteit. Wij adviseren u over de beste keuze voor uw situatie
            en budget.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Automatisering en minder no-shows</h2>
          <p>
            Een goed boekingssysteem doet meer dan alleen afspraken registreren. Wij
            configureren automatische bevestigingsmails direct na boeking, herinneringsmails
            24 uur van tevoren, en eventueel een follow-up na de afspraak. Studies tonen aan
            dat automatische herinneringen het aantal no-shows met 30 tot 50 procent
            verminderen. Dat betekent minder inkomstenverlies en een efficiëntere agenda.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Koppeling met betalingen</h2>
          <p>
            Wil u dat klanten ook direct kunnen betalen bij het maken van een reservering?
            Wij koppelen het boekingssysteem aan betaalproviders zoals Mollie of Stripe,
            zodat klanten eenvoudig vooraf kunnen betalen. Dit verlaagt het aantal no-shows
            verder en verbetert uw cashflow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            '24/7 online reserveren voor klanten',
            'Automatische bevestigings- en herinneringsmails',
            'Koppeling met bestaande agenda-tools',
            'Betaalintegratie mogelijk (Mollie/Stripe)',
            'Mobielvriendelijk en snel',
            'Geschikt voor alle dienstverleners',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />
              {f}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Veelgestelde vragen over boekingssystemen</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Boekingssysteem laten integreren?</h2>
          <p className="text-gray-600 mb-6">Vertel ons wat u nodig heeft en ontvang binnen 24 uur een vrijblijvende offerte.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">Gratis adviesgesprek</Link>
            <Link href="/prijzen" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold hover:bg-red-50 transition-colors">Bekijk prijzen</Link>
          </div>
        </div>
      </div>
    </>
  )
}
