import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { RelatedLinks } from '@/components/RelatedLinks'

export const metadata: Metadata = {
  title: 'Website laten maken voor loodgieters | Elly Apps',
  description:
    'Een professionele website voor uw loodgietersbedrijf. Lokaal gevonden worden, spoedaanvragen ontvangen en reviews verzamelen. Vanaf €49/maand.',
  alternates: { canonical: 'https://elly-apps.nl/branche/loodgieter' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/branche/loodgieter',
    title: 'Website laten maken voor loodgieters | Elly Apps',
    description: 'Een professionele website voor uw loodgietersbedrijf. Lokaal gevonden worden, spoedaanvragen ontvangen en reviews verzamelen. Vanaf €49/maand.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken voor loodgieters | Elly Apps',
    description: 'Een professionele website voor uw loodgietersbedrijf. Lokaal gevonden worden, spoedaanvragen ontvangen en reviews verzamelen. Vanaf €49/maand.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: 'Elly Apps — Websites voor loodgieters',
  url: 'https://elly-apps.nl/branche/loodgieter',
  description: 'Professionele websites voor loodgieters, inclusief basis SEO en spoedaanvragen.',
}

export default function LoodgieterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Branche</p>
          <h1 className="h1 text-ink">Website laten maken voor loodgieters</h1>
          <p className="body-lg text-muted mt-4">Meer spoedopdrachten, betere lokale vindbaarheid en een professionele uitstraling — dat is wat een goede website voor uw loodgietersbedrijf oplevert.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>
            Als loodgieter draait alles om bereikbaarheid en vertrouwen. Klanten die een lekkage
            of verstopte afvoer hebben, zoeken online naar een betrouwbare loodgieter in hun
            buurt. Als uw bedrijf dan niet zichtbaar is in Google, loopt u die opdrachten mis. Een
            professionele website — gecombineerd met lokale SEO — zorgt ervoor dat u precies op
            het juiste moment gevonden wordt.
          </p>
          <p>
            Elly Apps bouwt websites die specifiek zijn afgestemd op de behoeften van
            loodgieters. Wij zorgen voor een duidelijke "Spoedhulp aanvragen" knop die direct
            opvalt, een overzicht van uw diensten (lekkage, verstoppingen, CV-ketel, badkamer),
            en een contactformulier dat ook op mobiel perfect werkt. Want de meeste mensen die
            snel een loodgieter nodig hebben, zoeken via hun smartphone.
          </p>
          <p>
            Lokale vindbaarheid is voor loodgieters cruciaal. Wij optimaliseren uw website voor
            lokale zoektermen zoals "loodgieter [stad]" en "loodgieter spoed [regio]". Daarnaast
            zorgen wij voor een volledig ingevuld Google Business Profile, zodat u ook in Google
            Maps verschijnt en klanten direct uw openingstijden, telefoonnummer en reviews kunnen
            zien.
          </p>
          <p>
            Reviews spelen een grote rol in het vertrouwen van nieuwe klanten. Wij bouwen een
            reviews-sectie in uw website en helpen u bij het vergaren van Google-reviews. Een
            hoog aantal positieve reviews versterkt zowel uw online reputatie als uw positie in
            Google.
          </p>
          <p>
            Onze websites zijn volledig beheerd: hosting, SSL, updates en technisch onderhoud
            regelen wij. U hoeft zich nergens druk over te maken — u focust op het werk, wij op
            uw online aanwezigheid.
          </p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Lokale SEO voor uw werkgebied',
            'Spoedaanvraag knop prominent zichtbaar',
            'Google Business Profile optimalisatie',
            'Reviews sectie en beheer',
            'Mobiel-geoptimaliseerde website',
            'Hosting, SSL en onderhoud inbegrepen',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 body text-ink">
              <CheckCircleIcon className="size-5 text-brand shrink-0" aria-hidden="true" />
              {f}
            </div>
          ))}
        </div>
      </section>

      <RelatedLinks
        id="gerelateerd-titel"
        title="Gerelateerde pagina's"
        links={[
          { label: "Website laten maken en beheren", href: "/diensten/websites" },
          { label: "Wat kost een website? Bekijk de prijzen", href: "/prijzen" },
          { label: "Website laten maken voor een bouwbedrijf", href: "/branche/bouwbedrijf" },
          { label: "Website laten maken voor een schildersbedrijf", href: "/branche/schilder" },
          { label: "Website laten maken voor een loodgieter in 2026", href: "/blog/loodgieter" },
          { label: "Website laten maken per branche", href: "/branche" },
        ]}
      />

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Meer opdrachten via uw website?</h2>
          <p className="body-lg text-navy-muted mt-4">Vraag een gratis websitescan aan en ontdek hoe wij uw online zichtbaarheid verbeteren.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>Gratis websitescan</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
