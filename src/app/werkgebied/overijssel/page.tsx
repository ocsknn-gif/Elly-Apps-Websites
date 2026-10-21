import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { RelatedLinks } from '@/components/RelatedLinks'

export const metadata: Metadata = {
  title: 'Website laten maken in Overijssel | Elly Apps',
  description: 'Van Zwolle tot Enschede — Elly Apps bouwt websites die MKB-bedrijven in Overijssel beter vindbaar maken in Google.',
  alternates: { canonical: 'https://elly-apps.nl/werkgebied/overijssel' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/werkgebied/overijssel',
    title: 'Website laten maken in Overijssel | Elly Apps',
    description: 'Van Zwolle tot Enschede — Elly Apps bouwt websites die MKB-bedrijven in Overijssel beter vindbaar maken in Google.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken in Overijssel | Elly Apps',
    description: 'Van Zwolle tot Enschede — Elly Apps bouwt websites die MKB-bedrijven in Overijssel beter vindbaar maken in Google.',
    images: ['/og-image.png'],
  },
}

export default function WerkgebiedOverijsselPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Elly Apps — Werkgebied Overijssel', url: 'https://elly-apps.nl/werkgebied/overijssel', areaServed: 'Overijssel' }) }} />
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Werkgebied</p>
          <h1 className="h1 text-ink">Website laten maken in Overijssel</h1>
          <p className="body-lg text-muted mt-4">Actief in Zwolle, Enschede, Deventer, Almelo, Hengelo en Kampen — wij bouwen websites die MKB-bedrijven in Overijssel beter vindbaar maken.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>Overijssel kent een sterke ondernemerscultuur. In steden als Zwolle en Enschede is de concurrentie online groot — een professionele website is onmisbaar. Elly Apps helpt ondernemers in Overijssel met een website die klanten aantrekt en converteert.</p>
          <p>Wij bouwen snelle, mobielvriendelijke websites die hoog scoren in Google. Van een eenvoudige bedrijfswebsite tot een uitgebreide site met boekingssysteem of webshop — wij leveren maatwerk passend bij uw branche in Overijssel.</p>
          <p>Lokale SEO en Google Business optimalisatie zitten in het Groei pakket en hoger. Daarmee optimaliseren wij uw website voor zoektermen relevant voor uw stad of regio binnen Overijssel en uw Google Business Profile.</p>
          <p>Onze websites zijn volledig beheerd: hosting, SSL, updates en technisch onderhoud zijn inbegrepen.</p>
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

      <RelatedLinks
        id="steden-titel"
        title="Website laten maken per stad in Overijssel"
        className="bg-bg"
        links={[
          { label: "Website laten maken in Zwolle", href: "/stad/zwolle" },
          { label: "Website laten maken en beheren", href: "/diensten/websites" },
        ]}
      />

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Actief in Overijssel? Wij helpen u groeien.</h2>
          <p className="body-lg text-navy-muted mt-4">Vraag een gratis websitescan aan en ontdek uw kansen in Overijssel.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>Gratis websitescan</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
