import type { Metadata } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { RelatedLinks } from '@/components/RelatedLinks'
import { organizationRef } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Website laten maken voor een restaurant in 2026 | Elly Apps',
  description: 'Een website laten maken voor uw restaurant? Ontdek wat een professionele restaurantwebsite moet hebben en hoe Elly Apps u helpt vanaf €49 per maand.',
  alternates: { canonical: 'https://elly-apps.nl/blog/restaurant' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/blog/restaurant',
    title: 'Website laten maken voor een restaurant in 2026 | Elly Apps',
    description: 'Een website laten maken voor uw restaurant? Ontdek wat een professionele restaurantwebsite moet hebben en hoe Elly Apps u helpt vanaf €49 per maand.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken voor een restaurant in 2026 | Elly Apps',
    description: 'Een website laten maken voor uw restaurant? Ontdek wat een professionele restaurantwebsite moet hebben en hoe Elly Apps u helpt vanaf €49 per maand.',
    images: ['/og-image.png'],
  },
}

const IMAGE_URL = 'https://elly-apps.nl/images/branches/restaurant.webp'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Website laten maken voor een restaurant — zo wordt uw restaurant beter gevonden',
  description: 'Een website laten maken voor uw restaurant? Ontdek wat een professionele restaurantwebsite moet hebben en hoe Elly Apps u helpt vanaf €49 per maand.',
  image: [IMAGE_URL],
  author: organizationRef,
  publisher: { ...organizationRef, logo: { '@type': 'ImageObject', url: 'https://elly-apps.nl/elly-logo.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://elly-apps.nl/blog/restaurant' },
  inLanguage: 'nl-NL',
}

export default function BlogRestaurantPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-muted mb-6">
            <Link href="/" className="hover:text-brand-strong">Home</Link>
            {' / '}
            <Link href="/blog" className="hover:text-brand-strong">Blog</Link>
            {' / '}
            <span>Website laten maken voor een restaurant</span>
          </nav>

          <h1 className="h1 text-ink">
            Website laten maken voor een restaurant — zo wordt uw restaurant beter gevonden
          </h1>
        </div>
      </section>

      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-3xl mx-auto artikel">
          <section>
            <h2>Gasten zoeken online naar een restaurant</h2>
            <p>
              Bijna elke restaurantbezoeker begint zijn avond online. Ze zoeken op Google naar &quot;restaurant + plaatsnaam&quot;, bekijken het menu, lezen reviews en maken een reservering. Als uw restaurant niet goed vindbaar is, kiezen gasten voor een concurrent die wél online zichtbaar is.
            </p>
          </section>

          <section>
            <h2>Wat moet een restaurantwebsite bevatten?</h2>
            <p>
              Een goede restaurantwebsite bevat uw menu inclusief prijzen, sfeervolle foto&apos;s van uw gerechten en interieur, openingstijden en locatie, een reserveringsknop en klantreviews. Hoe aantrekkelijker en overzichtelijker uw website eruitziet, hoe meer gasten u binnenhaalt.
            </p>
          </section>

          <section>
            <h2>Lokaal gevonden worden op Google Maps</h2>
            <p>
              Veel gasten vinden restaurants via Google Maps. Een goed ingesteld Google Business profiel in combinatie met een geoptimaliseerde website helpt uw restaurant beter vindbaar te zijn bij mensen in uw buurt. Bij Elly Apps is Google Business optimalisatie standaard inbegrepen in het Groei pakket.
            </p>
          </section>

          <section>
            <h2>Wat kost een restaurantwebsite bij Elly Apps?</h2>
            <p>
              Bij Elly Apps kunt u een{' '}
              <Link href="/branche/restaurant" className="text-brand-strong underline hover:no-underline">professionele restaurantwebsite laten maken</Link>
              {' '}vanaf €49 per maand inclusief hosting, onderhoud en basis SEO. Het Groei pakket voor €199 per maand voegt daar lokale SEO, stadspagina&apos;s en Google Business optimalisatie aan toe. Alles inbegrepen, geen verrassingen.
            </p>
          </section>

          <section>
            <h2>Binnen twee weken online</h2>
            <p>
              Wij leveren uw restaurantwebsite gemiddeld binnen twee weken op. U hoeft zelf niets te regelen — wij verzorgen het ontwerp, de hosting en de SEO. U focust op uw gasten, wij zorgen dat ze u online vinden.
            </p>
          </section>

          <section>
            <h2>Conclusie</h2>
            <p>
              Een professionele restaurantwebsite is in 2026 onmisbaar. Het verschil tussen een volle en een lege zaak begint steeds vaker online. Vraag vandaag nog uw gratis websitescan aan en ontdek hoe u meer gasten via Google kunt aantrekken.
            </p>
          </section>
        </div>
      </section>

      <RelatedLinks
        id="gerelateerd-titel"
        title="Gerelateerde artikelen"
        narrow
        links={[
          { label: "Website laten maken voor een kapper in 2026", href: "/blog/kapper" },
          { label: "Website laten maken voor een loodgieter in 2026", href: "/blog/loodgieter" },
          { label: "Website laten maken en beheren", href: "/diensten/websites" },
          { label: "Online boekingssysteem voor uw website", href: "/diensten/boekingssysteem" },
        ]}
      />

      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Klaar om meer gasten via Google te krijgen?</h2>
          <p className="body-lg text-navy-muted mt-4">Ontvang binnen één werkdag een gratis analyse van uw huidige website met concrete verbeterpunten.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>
              Vraag uw gratis websitescan aan
            </Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>
              Bekijk prijzen
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
