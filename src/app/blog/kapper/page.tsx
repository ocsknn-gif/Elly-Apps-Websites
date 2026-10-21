import type { Metadata } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { RelatedLinks } from '@/components/RelatedLinks'

export const metadata: Metadata = {
  title: 'Website laten maken voor een kapper in 2026 | Elly Apps',
  description: 'Een website laten maken voor uw kapperszaak? Ontdek wat een professionele kapperwebsite moet hebben en hoe Elly Apps u helpt vanaf €49 per maand.',
  alternates: { canonical: 'https://elly-apps.nl/blog/kapper' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/blog/kapper',
    title: 'Website laten maken voor een kapper in 2026 | Elly Apps',
    description: 'Een website laten maken voor uw kapperszaak? Ontdek wat een professionele kapperwebsite moet hebben en hoe Elly Apps u helpt vanaf €49 per maand.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken voor een kapper in 2026 | Elly Apps',
    description: 'Een website laten maken voor uw kapperszaak? Ontdek wat een professionele kapperwebsite moet hebben en hoe Elly Apps u helpt vanaf €49 per maand.',
    images: ['/og-image.png'],
  },
}

const IMAGE_URL = 'https://elly-apps.nl/images/branches/kapper.webp'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Website laten maken voor een kapper — zo krijgt u meer klanten',
  description: 'Een website laten maken voor uw kapperszaak? Ontdek wat een professionele kapperwebsite moet hebben en hoe Elly Apps u helpt vanaf €49 per maand.',
  image: [IMAGE_URL],
  datePublished: '2026-01-15',
  dateModified: '2026-01-15',
  author: { '@type': 'Organization', name: 'Elly Apps', url: 'https://elly-apps.nl' },
  publisher: {
    '@type': 'Organization',
    name: 'Elly Apps',
    url: 'https://elly-apps.nl',
    logo: { '@type': 'ImageObject', url: 'https://elly-apps.nl/elly-logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://elly-apps.nl/blog/kapper' },
  inLanguage: 'nl-NL',
}

export default function BlogKapperPage() {
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
            <span>Website laten maken voor een kapper</span>
          </nav>

          <h1 className="h1 text-ink">
            Website laten maken voor een kapper — zo krijgt u meer klanten
          </h1>
        </div>
      </section>

      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-3xl mx-auto artikel">
          <section>
            <h2>Klanten zoeken online naar een kapper</h2>
            <p>
              De meeste kappers krijgen nieuwe klanten via mond-tot-mondreclame of Google. Dat tweede kanaal groeit snel: mensen zoeken op &quot;kapper + plaatsnaam&quot; en bellen de eerste die er professioneel uitziet. Zonder een goede website bent u voor die groep onzichtbaar — en laat u opdrachten liggen aan de concurrent die wél online vindbaar is.
            </p>
          </section>

          <section>
            <h2>Wat moet een kapperwebsite bevatten?</h2>
            <p>
              Een goede website voor een kapsalon laat direct zien wie u bent. Denk aan duidelijke foto&apos;s van uw werk, een overzicht van uw diensten en prijzen, openingstijden, adres en een online boekingsformulier. Klanten willen snel weten wat ze kunnen verwachten — hoe overzichtelijker uw site, hoe sneller ze een afspraak maken.
            </p>
          </section>

          <section>
            <h2>Lokale SEO: gevonden worden op &apos;kapper [uw stad]&apos;</h2>
            <p>
              De meeste klanten van een kapper wonen in de buurt. Google weet dat en toont lokale resultaten aan mensen bij u in de buurt. Door uw website te optimaliseren voor zoektermen als &quot;kapper Amsterdam&quot; of &quot;kapsalon Utrecht&quot; verschijnt u precies wanneer iemand op zoek is naar een nieuwe kapper. Bij Elly Apps is lokale SEO standaard inbegrepen.
            </p>
          </section>

          <section>
            <h2>Wat kost een kapperwebsite bij Elly Apps?</h2>
            <p>
              Bij Elly Apps kunt u een{' '}
              <Link href="/branche/kapper" className="text-brand-strong underline hover:no-underline">professionele website laten maken als kapper</Link>
              {' '}vanaf €49 per maand inclusief hosting, onderhoud en basis SEO. Wilt u ook lokale vindbaarheid in meerdere steden? Dan is het Groei pakket voor €199 per maand de slimste keuze.
            </p>
          </section>

          <section>
            <h2>Binnen twee weken online</h2>
            <p>
              Wij leveren uw kapperwebsite gemiddeld binnen twee weken op. U hoeft zelf niets te regelen — wij verzorgen het ontwerp, de hosting en de SEO. U focust op uw klanten, wij zorgen dat ze u online vinden.
            </p>
          </section>

          <section>
            <h2>Conclusie</h2>
            <p>
              Als kapper is een professionele website één van de beste investeringen die u kunt doen. Het levert direct meer afspraken op uit uw eigen buurt. Vraag vandaag nog uw gratis websitescan aan en ontdek hoe u meer klanten via Google kunt krijgen.
            </p>
          </section>
        </div>
      </section>

      <RelatedLinks
        id="gerelateerd-titel"
        title="Gerelateerde artikelen"
        narrow
        links={[
          { label: "Website laten maken voor een restaurant in 2026", href: "/blog/restaurant" },
          { label: "Website laten maken voor een loodgieter in 2026", href: "/blog/loodgieter" },
          { label: "Website laten maken en beheren", href: "/diensten/websites" },
          { label: "Online boekingssysteem voor uw website", href: "/diensten/boekingssysteem" },
          { label: "Wat kost een website? Bekijk de prijzen", href: "/prijzen" },
        ]}
      />

      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Klaar om meer klanten via Google te krijgen?</h2>
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
