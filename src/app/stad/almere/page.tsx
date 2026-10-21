import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Faq } from '@/components/home/Faq'

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

const faq = [
  { q: 'Hoe zorg je dat ik gevonden word in Almere op Google?', a: 'We optimaliseren uw website specifiek voor Almere en omgeving. We verwerken lokale zoektermen zoals "website laten maken Almere" in uw paginateksten, titels en meta descriptions. Daarnaast zorgen we dat uw Google Business-profiel correct is ingesteld met uw Almeerse vestiging.' },
  { q: 'Hoe snel kan mijn website live staan in Almere?', a: 'In de meeste gevallen staat uw website binnen 5 tot 10 werkdagen live. Na een kort intakegesprek verwerken wij alles voor u. U hoeft niets technisch te doen.' },
  { q: 'Maken jullie websites voor alle branches in Almere?', a: 'Ja, absoluut. We bouwen websites voor alle soorten Almeerse bedrijven — van restaurants en winkels tot loodgieters, kappers, accountants en MKB-bedrijven.' },
  { q: 'Is een website voor een klein Almeers bedrijf betaalbaar?', a: 'Absoluut. Onze websites beginnen vanaf €49 per maand, inclusief hosting, onderhoud en lokale SEO voor Almere. Eén nieuwe klant per maand verdient dit ruimschoots terug.' },
  { q: 'Werken jullie ook in de regio rondom Almere?', a: 'Ja, we bedienen ook ondernemers in Lelystad, Zeewolde, Huizen, Bussum en andere gemeenten rondom Almere.' },
  { q: 'Kan ik ook een webshop laten maken in Almere?', a: 'Ja, we bouwen ook webshops voor Almeerse ondernemers — snel, veilig en goed vindbaar in Google Almere.' },
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

export default function AlmerePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Almere</p>
          <h1 className="h1 text-ink">Website laten maken in Almere</h1>
          <p className="body-lg text-muted mt-4">Meer klanten uit Almere via Google. Elly Apps bouwt professionele websites voor Almeerse ondernemers — snel, betaalbaar en volledig ontzorgd.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>Almere is één van de snelst groeiende steden van Nederland. Met meer dan 230.000 inwoners en duizenden actieve bedrijven in vrijwel elke branche is de concurrentie groot. Klanten zoeken altijd eerst online voordat ze contact opnemen. Zonder professionele website mist uw bedrijf dagelijks kansen aan concurrenten die wél goed vindbaar zijn in Almere.</p>
          <p>Elly Apps bouwt voor Almeerse ondernemers websites die niet alleen mooi zijn, maar ook gevonden worden. Met lokale SEO zorgen we dat uw website verschijnt wanneer mensen in Almere zoeken naar uw dienst. Van Almere Stad tot Almere Buiten en Almere Haven — wij zorgen dat klanten u vinden.</p>
          <p>Een effectieve website voor een Almeers bedrijf bevat altijd een duidelijke omschrijving van uw diensten, uw werkgebied in Almere en omgeving, klantbeoordelingen, een contactformulier en lokale SEO-optimalisatie. Door uw website te optimaliseren voor zoektermen als "website laten maken Almere" of "webdesign Almere" verschijnt u precies wanneer Almeerse ondernemers u nodig hebben.</p>
          <p>Elly Apps werkt voor alle soorten Almeerse bedrijven: restaurants, loodgieters, kappers, accountants, bouwbedrijven en meer. Elke website wordt op maat gemaakt met lokale SEO zodat u gevonden wordt door klanten in uw specifieke buurt of wijk. Onze websites zijn volledig beheerd: hosting, SSL, updates en technisch onderhoud zijn inbegrepen.</p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {['Basis SEO; lokale SEO in het Groei en Pro pakket', 'Mobielvriendelijk en snel', 'Google Business optimalisatie in het Groei pakket en hoger', 'Hosting, SSL en onderhoud inbegrepen', 'Professioneel ontwerp op maat', 'Binnen 5-10 werkdagen live'].map((f) => (
            <div key={f} className="flex items-center gap-3 body text-ink"><CheckCircleIcon className="size-5 text-brand shrink-0" aria-hidden="true" />{f}</div>
          ))}
        </div>
      </section>

      <Faq items={faq} title="Veelgestelde vragen over website laten maken in Almere" className="bg-bg" />

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Actief in Almere? Wij helpen u groeien.</h2>
          <p className="body-lg text-navy-muted mt-4">Vraag een gratis websitescan aan en ontdek uw kansen in Almere.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>Gratis websitescan</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
