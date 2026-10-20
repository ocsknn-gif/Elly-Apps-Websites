import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Faq } from '@/components/home/Faq'

export const metadata: Metadata = {
  title: 'Website laten maken Tilburg | Professionele websites vanaf €49 | Elly Apps',
  description: 'Op zoek naar een professionele website laten maken in Tilburg? Elly Apps bouwt SEO-geoptimaliseerde websites voor Tilburgse ondernemers. Vanaf €49/maand. Vraag gratis websitescan aan.',
  alternates: { canonical: 'https://elly-apps.nl/stad/tilburg' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/stad/tilburg',
    title: 'Website laten maken Tilburg | Professionele websites vanaf €49 | Elly Apps',
    description: 'Op zoek naar een professionele website laten maken in Tilburg? Elly Apps bouwt SEO-geoptimaliseerde websites voor Tilburgse ondernemers. Vanaf €49/maand. Vraag gratis websitescan aan.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken Tilburg | Professionele websites vanaf €49 | Elly Apps',
    description: 'Op zoek naar een professionele website laten maken in Tilburg? Elly Apps bouwt SEO-geoptimaliseerde websites voor Tilburgse ondernemers. Vanaf €49/maand. Vraag gratis websitescan aan.',
    images: ['/og-image.png'],
  },
}

const faq = [
  { q: 'Hoe zorg je dat ik gevonden word in Tilburg op Google?', a: 'We optimaliseren uw website specifiek voor Tilburg en omgeving. We verwerken lokale zoektermen zoals "website laten maken Tilburg" in uw paginateksten, titels en meta descriptions. Daarnaast zorgen we dat uw Google Business-profiel correct is ingesteld.' },
  { q: 'Hoe snel kan mijn website live staan in Tilburg?', a: 'In de meeste gevallen staat uw website binnen 5 tot 10 werkdagen live. Na een kort intakegesprek verwerken wij alles voor u.' },
  { q: 'Maken jullie websites voor alle branches in Tilburg?', a: 'Ja, absoluut. We bouwen websites voor alle soorten Tilburgse bedrijven — van restaurants en winkels tot loodgieters, kappers, accountants en MKB-bedrijven.' },
  { q: 'Is een website voor een klein Tilburgs bedrijf betaalbaar?', a: 'Absoluut. Onze websites beginnen vanaf €49 per maand, inclusief hosting, onderhoud en lokale SEO voor Tilburg.' },
  { q: 'Werken jullie ook in de regio rondom Tilburg?', a: 'Ja, we bedienen ook ondernemers in Waalwijk, Dongen, Goirle, Gilze en omliggende gemeenten rondom Tilburg. Ook wijken als Reeshof, Berkel-Enschot en Udenhout bedienen wij.' },
  { q: 'Kan ik ook een webshop laten maken in Tilburg?', a: 'Ja, we bouwen ook webshops voor Tilburgse ondernemers — snel, veilig en goed vindbaar in Google Tilburg.' },
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

export default function TilburgPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Tilburg</p>
          <h1 className="h1 text-ink">Website laten maken in Tilburg</h1>
          <p className="body-lg text-muted mt-4">Meer klanten uit Tilburg via Google. Elly Apps bouwt professionele websites voor Tilburgse ondernemers — snel, betaalbaar en volledig ontzorgd.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>Tilburg is de zesde stad van Nederland en een van de snelst groeiende steden van Noord-Brabant. Met meer dan 220.000 inwoners, een actieve maakindustrie en een groeiende dienstensector is de concurrentie groot. Klanten zoeken altijd eerst online voordat ze contact opnemen.</p>
          <p>Elly Apps bouwt voor Tilburgse ondernemers websites die geoptimaliseerd zijn voor lokale vindbaarheid. Onze AI analyseert wanneer en hoe mensen in Tilburg zoeken naar uw diensten. Van het centrum tot Reeshof, Berkel-Enschot en Udenhout — wij zorgen dat klanten u vinden.</p>
          <p>Een effectieve website voor een Tilburgs bedrijf bevat altijd een duidelijke omschrijving van uw diensten, uw werkgebied in Tilburg en omgeving, klantbeoordelingen, een contactformulier en lokale SEO-optimalisatie. We voegen lokale content toe zodat u optimaal vindbaar bent, ook in de regio Waalwijk, Dongen en Goirle. Onze websites zijn volledig beheerd: hosting, SSL, updates en technisch onderhoud zijn inbegrepen.</p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {['Lokale SEO voor Tilburg en omgeving', 'Mobielvriendelijk en snel', 'Google Business Profile optimalisatie', 'Hosting, SSL en onderhoud inbegrepen', 'Professioneel ontwerp op maat', 'Persoonlijk contact en support'].map((f) => (
            <div key={f} className="flex items-center gap-3 body text-ink"><CheckCircleIcon className="size-5 text-brand shrink-0" aria-hidden="true" />{f}</div>
          ))}
        </div>
      </section>

      <Faq items={faq} title="Veelgestelde vragen over website laten maken in Tilburg" className="bg-bg" />

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Actief in Tilburg? Wij helpen u groeien.</h2>
          <p className="body-lg text-navy-muted mt-4">Vraag een gratis websitescan aan en ontdek uw kansen in Tilburg.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>Gratis websitescan</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
