import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Faq } from '@/components/home/Faq'

export const metadata: Metadata = {
  title: 'Boekingssysteem website laten integreren | Elly Apps',
  description: 'Boekingssysteem laten integreren op uw website? Elly Apps koppelt een professioneel online reserveringssysteem aan uw bestaande website. Snel, betaalbaar en volledig beheerd.',
  alternates: { canonical: 'https://elly-apps.nl/diensten/boekingssysteem' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/diensten/boekingssysteem',
    title: 'Boekingssysteem website laten integreren | Elly Apps',
    description: 'Boekingssysteem laten integreren op uw website? Elly Apps koppelt een professioneel online reserveringssysteem aan uw bestaande website. Snel, betaalbaar en volledig beheerd.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boekingssysteem website laten integreren | Elly Apps',
    description: 'Boekingssysteem laten integreren op uw website? Elly Apps koppelt een professioneel online reserveringssysteem aan uw bestaande website. Snel, betaalbaar en volledig beheerd.',
    images: ['/og-image.png'],
  },
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

const features = [
  '24/7 online reserveren voor klanten',
  'Automatische bevestigings- en herinneringsmails',
  'Koppeling met bestaande agenda-tools',
  'Betaalintegratie mogelijk (Mollie/Stripe)',
  'Mobielvriendelijk en snel',
  'Geschikt voor alle dienstverleners',
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

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Dienst</p>
          <h1 className="h1 text-ink">Boekingssysteem integreren op uw website</h1>
          <p className="body-lg text-muted mt-4">
            Laat klanten 24/7 online reserveren. Wij integreren een professioneel
            boekingssysteem op uw bestaande website — snel, betaalbaar en volledig beheerd.
          </p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>
            Klanten verwachten tegenwoordig dat ze op elk moment van de dag een afspraak of
            reservering kunnen maken — niet alleen tijdens uw openingstijden. Een online
            boekingssysteem op uw website geeft klanten die vrijheid en neemt u tegelijkertijd
            veel administratief werk uit handen. Geen telefoontjes meer om afspraken in te
            plannen, geen handmatige agendabeheer en minder no-shows dankzij automatische
            herinneringen.
          </p>
          <h2 className="h2 text-ink pt-6">Voor wie is een boekingssysteem geschikt?</h2>
          <p>
            Een online reserveringssysteem is waardevol voor elke ondernemer die afspraken,
            reserveringen of boekingen verwerkt. Denk aan kappers en schoonheidsspecialisten
            die afspraken plannen, restaurants die tafels reserveren, fysiotherapeuten en
            coaches die consultaties inplannen, sportscholen die lessen beheren, of
            verhuurders van ruimtes en apparatuur. Wij hebben ervaring met alle deze sectoren
            en weten welke oplossing het beste werkt voor uw specifieke situatie.
          </p>
          <h2 className="h2 text-ink pt-6">Maatwerk of standaard koppeling?</h2>
          <p>
            Afhankelijk van uw wensen bouwen wij een volledig maatwerk boekingssysteem of
            koppelen wij een bestaande tool aan uw website. Beide opties hebben hun voordelen.
            Een maatwerk systeem geeft u maximale controle en kan precies worden afgestemd op
            uw processen. Een koppeling met een bestaande tool is sneller en goedkoper, maar
            biedt minder flexibiliteit. Wij adviseren u over de beste keuze voor uw situatie
            en budget.
          </p>
          <h2 className="h2 text-ink pt-6">Automatisering en minder no-shows</h2>
          <p>
            Een goed boekingssysteem doet meer dan alleen afspraken registreren. Wij
            configureren automatische bevestigingsmails direct na boeking, herinneringsmails
            24 uur van tevoren, en eventueel een follow-up na de afspraak. Studies tonen aan
            dat automatische herinneringen het aantal no-shows met 30 tot 50 procent
            verminderen. Dat betekent minder inkomstenverlies en een efficiëntere agenda.
          </p>
          <h2 className="h2 text-ink pt-6">Koppeling met betalingen</h2>
          <p>
            Wil u dat klanten ook direct kunnen betalen bij het maken van een reservering?
            Wij koppelen het boekingssysteem aan betaalproviders zoals Mollie of Stripe,
            zodat klanten eenvoudig vooraf kunnen betalen. Dit verlaagt het aantal no-shows
            verder en verbetert uw cashflow.
          </p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f) => (
            <div key={f} className="flex items-center gap-3 body text-ink">
              <CheckCircleIcon className="size-5 text-brand shrink-0" aria-hidden="true" />
              {f}
            </div>
          ))}
        </div>
      </section>

      <Faq items={faqItems} title="Veelgestelde vragen over boekingssystemen" className="bg-bg" />

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Boekingssysteem laten integreren?</h2>
          <p className="body-lg text-navy-muted mt-4">Vertel ons wat u nodig heeft en ontvang binnen 24 uur een vrijblijvende offerte.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className={buttonVariants({ size: 'lg' })}>Gratis adviesgesprek</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
