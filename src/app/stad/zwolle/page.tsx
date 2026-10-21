import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Faq } from '@/components/home/Faq'

export const metadata: Metadata = {
  title: 'Website laten maken Zwolle | Professioneel & Betaalbaar | Elly Apps',
  description: 'Professionele website laten maken in Zwolle? Elly Apps bouwt snelle, betaalbare websites voor ondernemers in Zwolle. Lokale SEO voor het economisch centrum van Oost-Nederland. Gratis offerte!',
  alternates: { canonical: 'https://elly-apps.nl/stad/zwolle' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/stad/zwolle',
    title: 'Website laten maken Zwolle | Professioneel & Betaalbaar | Elly Apps',
    description: 'Professionele website laten maken in Zwolle? Elly Apps bouwt snelle, betaalbare websites voor ondernemers in Zwolle. Lokale SEO voor het economisch centrum van Oost-Nederland. Gratis offerte!',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken Zwolle | Professioneel & Betaalbaar | Elly Apps',
    description: 'Professionele website laten maken in Zwolle? Elly Apps bouwt snelle, betaalbare websites voor ondernemers in Zwolle. Lokale SEO voor het economisch centrum van Oost-Nederland. Gratis offerte!',
    images: ['/og-image.png'],
  },
}

const faq = [
  { q: 'Wat kost een website laten maken in Zwolle?', a: 'Een website via Elly Apps begint vanaf €299 eenmalige setup plus €49 per maand, inclusief hosting, onderhoud en basis SEO-optimalisatie. De prijs hangt af van het aantal pagina\'s en de gewenste functionaliteit. Vraag een gratis offerte aan voor een exacte prijs.' },
  { q: 'Hoe snel is mijn website klaar?', a: 'Websites zijn gemiddeld binnen twee weken live. Bij complexere projecten stemmen we de planning vooraf af.' },
  { q: 'Wordt mijn website gevonden in Google?', a: 'Ja. Wij optimaliseren elke website voor zoekmachines, met extra aandacht voor lokale zoektermen in Zwolle en omgeving.' },
  { q: 'Bouwen jullie ook webshops in Zwolle?', a: 'Ja, wij bouwen webshops voor ondernemers in Zwolle. Neem contact op voor de mogelijkheden en een offerte.' },
  { q: 'Werken jullie ook buiten Zwolle?', a: 'Ja, we bedienen ook ondernemers in Kampen, Deventer, Hardenberg, Meppel en andere gemeenten rondom Zwolle en in Oost-Nederland.' },
  { q: 'Zit er een maandelijkse kost aan vast?', a: 'Ja, naast de eenmalige setup van €299 betaalt u €49 per maand. Dat is inclusief hosting, onderhoud en basis SEO-optimalisatie.' },
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

export default function ZwollePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Zwolle</p>
          <h1 className="h1 text-ink">Website laten maken in Zwolle</h1>
          <p className="body-lg text-muted mt-4">Zwolse ondernemers verdienen een website die écht werkt. Wij bouwen snelle, professionele websites — betaalbaar en zonder gedoe.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>Zwolle is het economisch centrum van Oost-Nederland en een van de sterkst groeiende steden van Overijssel. De historische Sassenpoort, het bruisende stadscentrum en de strategische ligging maken Zwolle tot een aantrekkelijke vestigingsplaats voor ondernemers uit allerlei sectoren.</p>
          <p>Elly Apps bouwt voor Zwolse ondernemers websites die professioneel ogen en hoog scoren in Google. Of u nu een winkel heeft in de binnenstad, een kantoor runt nabij het station of diensten aanbiedt in de regio — wij bouwen een website die aansluit bij uw doelgroep in Zwolle en omgeving.</p>
          <p>Een effectieve website voor een Zwolls bedrijf bevat altijd een duidelijke omschrijving van uw diensten, uw werkgebied in Zwolle en omgeving, klantbeoordelingen, een contactformulier en lokale SEO-optimalisatie. Onze websites worden volledig beheerd geleverd: hosting, SSL, updates en technisch onderhoud zijn inbegrepen. Het hele traject duurt gemiddeld 5 tot 7 werkdagen.</p>
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

      <Faq items={faq} title="Veelgestelde vragen over website laten maken in Zwolle" className="bg-bg" />

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Actief in Zwolle? Wij helpen u groeien.</h2>
          <p className="body-lg text-navy-muted mt-4">Vraag een gratis websitescan aan en ontdek uw kansen in Zwolle.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>Gratis websitescan</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
