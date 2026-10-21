import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Website laten maken voor een rijschool | Elly Apps',
  description: 'Website laten maken voor uw rijschool? Met aanmeldformulier, pakketten en tarieven en een reviewsectie. Vanaf €49 per maand, volledig beheerd.',
  alternates: { canonical: 'https://elly-apps.nl/branche/rijschool' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/branche/rijschool',
    title: 'Website laten maken voor een rijschool | Elly Apps',
    description: 'Website laten maken voor uw rijschool? Met aanmeldformulier, pakketten en tarieven en een reviewsectie. Vanaf €49 per maand, volledig beheerd.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken voor een rijschool | Elly Apps',
    description: 'Website laten maken voor uw rijschool? Met aanmeldformulier, pakketten en tarieven en een reviewsectie. Vanaf €49 per maand, volledig beheerd.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'DrivingSchool',
  name: 'Elly Apps — Websites voor rijscholen',
  url: 'https://elly-apps.nl/branche/rijschool',
  description: 'Professionele websites voor rijscholen, inclusief basis SEO en online lesaanvragen.',
}

export default function RijschoolPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Branche</p>
          <h1 className="h1 text-ink">Website laten maken voor een rijschool</h1>
          <p className="body-lg text-muted mt-4">Een website laten maken voor uw rijschool: een professionele eerste indruk, een duidelijke aanmeldknop en een site die voor Google is ingericht.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <h2 className="h2 text-ink">Waarom een rijschool een goede website nodig heeft</h2>
          <p>De rijschoolmarkt is competitief. Leerlingen en hun ouders vergelijken rijscholen online voordat ze bellen. Als uw website verouderd of slecht vindbaar is, kiest men voor de concurrent. Een professionele website helpt u gevonden te worden wanneer iemand zoekt op &quot;rijschool [uw stad]&quot;.</p>
          <p>Elly Apps bouwt rijschoolwebsites gericht op conversie: een duidelijke aanmeldknop, overzicht van pakketten en tarieven, slagingspercentages en een reviewsectie. Met een geïntegreerd contactformulier komen lesaanvragen direct in uw mailbox.</p>
          <h2 className="h2 text-ink pt-6">Lokale SEO en Google Business Profile voor rijscholen</h2>
          <p>Lokale SEO is voor rijscholen belangrijk en zit in het Groei pakket en hoger. Daarmee optimaliseren wij uw website voor zoektermen als &quot;rijles [stad]&quot; en &quot;snel rijbewijs halen&quot;. Ook uw Google Business Profile hoort bij het Groei pakket en hoger, zodat uw rijschool ook in Google Maps zichtbaar is.</p>
          <h2 className="h2 text-ink pt-6">Reviews voor nieuwe leerlingen</h2>
          <p>Reviews zijn belangrijk voor nieuwe leerlingen. Wij bouwen een prominente reviewsectie en helpen u actief meer beoordelingen te verzamelen. Een slagingspercentage kunt u op uw site tonen.</p>
          <h2 className="h2 text-ink pt-6">Volledig beheerd</h2>
          <p>Onze websites zijn volledig beheerd: hosting, SSL, updates en onderhoud zijn inbegrepen. U focust op het lesgeven, wij zorgen voor uw online zichtbaarheid.</p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Basis SEO; lokale SEO in het Groei pakket en hoger',
            'Online aanmeldformulier voor leerlingen',
            'Pakketten en tarieven overzichtelijk',
            'Slagingspercentage prominent weergegeven',
            'Google Business Profile optimalisatie in het Groei pakket en hoger',
            'Reviews sectie met Google-beoordelingen',
            'Mobielvriendelijk design',
            'Hosting, SSL en onderhoud inbegrepen',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 body text-ink">
              <CheckCircleIcon className="size-5 text-brand shrink-0" aria-hidden="true" />
              {f}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Een website voor uw rijschool?</h2>
          <p className="body-lg text-navy-muted mt-4">Vraag een gratis websitescan aan en ontdek de kansen voor uw rijschool.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>Gratis websitescan</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
