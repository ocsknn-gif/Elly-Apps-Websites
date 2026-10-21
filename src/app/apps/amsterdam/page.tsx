import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Faq } from '@/components/home/Faq'

export const metadata: Metadata = {
  title: 'App laten maken Amsterdam | Elly Apps',
  description:
    'App laten maken in Amsterdam? Elly Apps bouwt professionele web-apps en mobiele apps voor Amsterdamse MKB-bedrijven. AI-gedreven, snel en betaalbaar.',
  alternates: { canonical: 'https://elly-apps.nl/apps/amsterdam' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/apps/amsterdam',
    title: 'App laten maken Amsterdam | Elly Apps',
    description: 'App laten maken in Amsterdam? Elly Apps bouwt professionele web-apps en mobiele apps voor Amsterdamse MKB-bedrijven. AI-gedreven, snel en betaalbaar.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App laten maken Amsterdam | Elly Apps',
    description: 'App laten maken in Amsterdam? Elly Apps bouwt professionele web-apps en mobiele apps voor Amsterdamse MKB-bedrijven. AI-gedreven, snel en betaalbaar.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elly Apps — App laten maken Amsterdam',
  url: 'https://elly-apps.nl/apps/amsterdam',
  areaServed: { '@type': 'City', name: 'Amsterdam' },
  description: 'Professionele web-apps en mobiele apps voor MKB-bedrijven in Amsterdam. AI-gedreven en volledig beheerd.',
}

const faqItems = [
  { q: 'Wat kost een app laten maken in Amsterdam?', a: 'De kosten hangen af van het type en de complexiteit van de app. Wij werken altijd met een transparante vaste prijs — geen uurtarieven en geen verrassingen achteraf. Vraag een vrijblijvende offerte aan voor een exacte prijsindicatie.' },
  { q: 'Hoe lang duurt het om een app te laten bouwen?', a: 'Gemiddeld leveren wij een app op binnen 4 tot 6 weken, van eerste kennismaking tot live lancering. Eenvoudige applicaties kunnen sneller, complexere platforms vragen wat meer tijd.' },
  { q: 'Bouwen jullie web-apps of ook native mobiele apps?', a: 'Beide. Voor veel Amsterdamse MKB-bedrijven is een web-app de slimste keuze: toegankelijk via elke browser, sneller te bouwen en makkelijker te onderhouden. Waar een native app in de App Store of Google Play meerwaarde biedt, bouwen wij die uiteraard ook.' },
  { q: 'Kan de app gekoppeld worden aan mijn bestaande systemen?', a: 'Ja. Wij bouwen koppelingen met CRM-systemen, boekhoudpakketten, betaalproviders en andere externe platformen, zodat uw data automatisch synchroniseert en u niet dubbel werkt.' },
]

export default function AppAmsterdamPage() {
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
          <p className="text-sm text-brand-strong font-medium mb-2">Amsterdam</p>
          <h1 className="h1 text-ink">
            App laten maken in Amsterdam
          </h1>
          <p className="body-lg text-muted mt-4">
            Professionele web-apps en mobiele apps voor Amsterdamse ondernemers.
            AI-gedreven ontwikkeling, snel live en volledig ontzorgd.
          </p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>
            Amsterdam is het digitale hart van Nederland. De stad herbergt duizenden innovatieve
            bedrijven, startups en scale-ups die hun processen willen automatiseren of hun klanten
            willen bedienen via een app. Of u nu een webapplicatie nodig heeft voor uw interne
            processen, een klantportaal wilt bouwen of een volledig maatwerk platform zoekt —
            Elly Apps bouwt het voor u.
          </p>
          <p>
            Wij bouwen apps met de nieuwste technologieën, waaronder AI-gedreven functionaliteiten
            die uw bedrijfsprocessen slimmer en efficiënter maken. Denk aan automatische rapportages,
            slimme zoekfuncties, gepersonaliseerde gebruikerservaringen of koppelingen met externe
            systemen zoals boekhoudpakketten, CRM-software of betaalproviders.
          </p>
          <p>
            De Amsterdamse markt vraagt om snelheid en kwaliteit. Wij leveren apps gemiddeld binnen
            vier tot zes weken op — van eerste kennismaking tot live lancering. U wordt gedurende
            het hele traject op de hoogte gehouden en heeft altijd inzicht in de voortgang.
            Na de lancering beheren wij de app volledig: updates, beveiliging en technische
            monitoring zijn inbegrepen.
          </p>
          <p>
            Elly Apps werkt met Amsterdamse bedrijven in uiteenlopende sectoren: van horeca en
            retail tot zakelijke dienstverlening, zorg en technologie. Elke app is maatwerk —
            geen kant-en-klare templates, maar een oplossing die precies aansluit op uw
            bedrijfsprocessen en doelgroep.
          </p>
          <p>
            Heeft u een idee voor een app maar weet u niet waar u moet beginnen? Wij helpen u
            van concept tot lancering. In een gratis kennismakingsgesprek bespreken wij uw wensen,
            mogelijkheden en budget. Zonder verplichtingen, zonder verkooppraat.
          </p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Web-apps en mobiele apps op maat',
            'AI-gedreven functionaliteiten',
            'Koppelingen met externe systemen',
            'Gemiddeld binnen 4-6 weken live',
            'Volledig beheer na lancering',
            'Vaste prijs, geen verrassingen',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 body text-ink">
              <CheckCircleIcon className="size-5 text-brand shrink-0" aria-hidden="true" />
              {f}
            </div>
          ))}
        </div>
      </section>

      <Faq items={faqItems} title="Veelgestelde vragen over app ontwikkeling in Amsterdam" className="bg-bg" />

      {/* Gerelateerde pagina's */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="h2 text-ink mb-6">Gerelateerde pagina&apos;s</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'App laten maken — overzicht', href: '/diensten/apps' },
              { label: 'Website laten maken in Amsterdam', href: '/stad/amsterdam' },
              { label: 'App ontwikkelaar Noord-Holland', href: '/apps/noord-holland' },
              { label: 'App laten maken Den Haag', href: '/apps/den-haag' },
            ].map((r) => (
              <Link key={r.href} href={r.href} className="flex min-h-12 items-center gap-2 rounded-2xl border border-line bg-bg px-4 py-3 font-semibold text-ink shadow-sm transition-all hover:border-brand-strong hover:text-brand-strong hover:shadow-md">
                <span className="text-brand" aria-hidden="true">→</span> {r.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">App laten bouwen in Amsterdam?</h2>
          <p className="body-lg text-navy-muted mt-4">Vertel ons uw idee en ontvang binnen één werkdag een vrijblijvende terugkoppeling.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className={buttonVariants({ size: 'lg' })}>Gratis kennismakingsgesprek</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
