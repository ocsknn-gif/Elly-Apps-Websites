import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Website laten maken in Noord-Brabant | Elly Apps',
  description: 'Van Eindhoven tot Breda — Elly Apps bouwt resultaatgerichte websites voor MKB-bedrijven in Noord-Brabant.',
  alternates: { canonical: 'https://elly-apps.nl/werkgebied/noord-brabant' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/werkgebied/noord-brabant',
    title: 'Website laten maken in Noord-Brabant | Elly Apps',
    description: 'Van Eindhoven tot Breda — Elly Apps bouwt resultaatgerichte websites voor MKB-bedrijven in Noord-Brabant.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken in Noord-Brabant | Elly Apps',
    description: 'Van Eindhoven tot Breda — Elly Apps bouwt resultaatgerichte websites voor MKB-bedrijven in Noord-Brabant.',
    images: ['/og-image.png'],
  },
}

export default function WerkgebiedNoordBrabantPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Elly Apps — Werkgebied Noord-Brabant', url: 'https://elly-apps.nl/werkgebied/noord-brabant', areaServed: 'Noord-Brabant' }) }} />
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Werkgebied</p>
          <h1 className="h1 text-ink">Website laten maken in Noord-Brabant</h1>
          <p className="body-lg text-muted mt-4">Actief in Eindhoven, Tilburg, Breda, &apos;s-Hertogenbosch, Helmond en Oss — wij bouwen resultaatgerichte websites voor MKB-bedrijven door heel Noord-Brabant.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>Noord-Brabant is een ondernemende provincie. Of u nu in Eindhoven, Tilburg of Breda zit — online zichtbaarheid bepaalt wie de klant kiest. Elly Apps helpt ondernemers in Noord-Brabant met een professionele website die klanten aantrekt en converteert.</p>
          <p>Wij bouwen snelle, mobielvriendelijke websites die hoog scoren in Google. Van een eenvoudige bedrijfswebsite tot een uitgebreide site met boekingssysteem of webshop — wij leveren maatwerk passend bij uw branche in Noord-Brabant.</p>
          <p>Lokale SEO is onderdeel van elk pakket. Wij optimaliseren uw website voor zoektermen relevant voor uw stad of regio binnen Noord-Brabant en zorgen voor een volledig Google Business Profile.</p>
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

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Actief in Noord-Brabant? Wij helpen u groeien.</h2>
          <p className="body-lg text-navy-muted mt-4">Vraag een gratis websitescan aan en ontdek uw kansen in Noord-Brabant.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>Gratis websitescan</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
