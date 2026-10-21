import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Faq } from '@/components/home/Faq'

export const metadata: Metadata = {
  title: 'Website laten maken Nijmegen | Professioneel & Betaalbaar | Elly Apps',
  description: 'Professionele website laten maken in Nijmegen? Elly Apps bouwt snelle, betaalbare websites voor ondernemers in Nijmegen. Lokale SEO voor de oudste stad van Nederland. Vraag gratis offerte aan!',
  alternates: { canonical: 'https://elly-apps.nl/stad/nijmegen' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/stad/nijmegen',
    title: 'Website laten maken Nijmegen | Professioneel & Betaalbaar | Elly Apps',
    description: 'Professionele website laten maken in Nijmegen? Elly Apps bouwt snelle, betaalbare websites voor ondernemers in Nijmegen. Lokale SEO voor de oudste stad van Nederland. Vraag gratis offerte aan!',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken Nijmegen | Professioneel & Betaalbaar | Elly Apps',
    description: 'Professionele website laten maken in Nijmegen? Elly Apps bouwt snelle, betaalbare websites voor ondernemers in Nijmegen. Lokale SEO voor de oudste stad van Nederland. Vraag gratis offerte aan!',
    images: ['/og-image.png'],
  },
}

const faq = [
  { q: 'Wat kost een website laten maken in Nijmegen?', a: 'Een website via Elly Apps begint vanaf €299 eenmalige setup plus €49 per maand, inclusief hosting, onderhoud en basis SEO-optimalisatie. De prijs hangt af van het aantal pagina\'s en de gewenste functionaliteit. Vraag een gratis offerte aan voor een exacte prijs.' },
  { q: 'Hoe snel is mijn website klaar?', a: 'Websites zijn gemiddeld binnen twee weken live. Bij complexere projecten stemmen we de planning vooraf af.' },
  { q: 'Wordt mijn website gevonden in Google?', a: 'Ja. Wij optimaliseren elke website voor zoekmachines, met extra aandacht voor lokale zoektermen in Nijmegen en omgeving.' },
  { q: 'Bouwen jullie ook webshops in Nijmegen?', a: 'Ja, wij bouwen webshops voor ondernemers in Nijmegen. Neem contact op voor de mogelijkheden en een offerte.' },
  { q: 'Werken jullie ook buiten Nijmegen?', a: 'Ja, we bedienen ook ondernemers in Beuningen, Wijchen, Druten, Arnhem en andere gemeenten rondom Nijmegen.' },
  { q: 'Maken jullie ook websites voor studenten-gerelateerde bedrijven?', a: 'Zeker. Nijmegen heeft een grote studentenpopulatie via Radboud Universiteit en HAN. Wij maken ook websites die op die doelgroep zijn afgestemd.' },
]

// Schema komt uit dezelfde items als de zichtbare FAQ, zodat ze altijd gelijk lopen
const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function NijmegenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Nijmegen</p>
          <h1 className="h1 text-ink">Website laten maken in Nijmegen</h1>
          <p className="body-lg text-muted mt-4">Nijmeegse ondernemers verdienen een website die écht werkt. Wij bouwen snelle, professionele websites — betaalbaar en zonder gedoe.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>Nijmegen is de oudste stad van Nederland en een van de snelst groeiende steden van Gelderland. Met de Radboud Universiteit, een actieve middenstand en veel ondernemers is de stad economisch sterk. Klanten zoeken tegenwoordig altijd eerst online — zonder professionele website verliest u dagelijks potentiële klanten.</p>
          <p>Elly Apps bouwt voor Nijmeegse ondernemers websites die professioneel ogen en hoog scoren in Google. Of u nu een winkel heeft in de binnenstad nabij het Valkhof, een kantoor runt in de regio of diensten aanbiedt in heel Nijmegen — wij bouwen een website die aansluit bij uw doelgroep.</p>
          <p>Een effectieve website voor een Nijmeegs bedrijf bevat altijd een duidelijke omschrijving van uw diensten, uw werkgebied in Nijmegen en omgeving, klantbeoordelingen, een contactformulier en lokale SEO-optimalisatie. Onze websites worden volledig beheerd geleverd: hosting, SSL, updates en technisch onderhoud zijn inbegrepen. Het hele traject duurt gemiddeld twee weken.</p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {['Basis SEO; lokale SEO in het Groei en Pro pakket', 'Mobielvriendelijk en snel', 'Google Business optimalisatie in het Groei pakket en hoger', 'Hosting, SSL en onderhoud inbegrepen', 'Professioneel ontwerp op maat'].map((f) => (
            <div key={f} className="flex items-center gap-3 body text-ink"><CheckCircleIcon className="size-5 text-brand shrink-0" aria-hidden="true" />{f}</div>
          ))}
        </div>
      </section>

      <Faq items={faq} title="Veelgestelde vragen over website laten maken in Nijmegen" className="bg-bg" />

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Actief in Nijmegen? Wij helpen u groeien.</h2>
          <p className="body-lg text-navy-muted mt-4">Vraag een gratis websitescan aan en ontdek uw kansen in Nijmegen.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>Gratis websitescan</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
