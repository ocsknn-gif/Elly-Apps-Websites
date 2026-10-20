import type { Metadata } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Website laten maken voor een loodgieter in 2026 | Elly Apps',
  description: 'Als loodgieter meer klanten via Google? Ontdek wat een professionele loodgieterwebsite moet hebben en hoe Elly Apps u helpt vanaf €49 per maand.',
  alternates: { canonical: 'https://elly-apps.nl/blog/loodgieter' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/blog/loodgieter',
    title: 'Website laten maken voor een loodgieter in 2026 | Elly Apps',
    description: 'Als loodgieter meer klanten via Google? Ontdek wat een professionele loodgieterwebsite moet hebben en hoe Elly Apps u helpt vanaf €49 per maand.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken voor een loodgieter in 2026 | Elly Apps',
    description: 'Als loodgieter meer klanten via Google? Ontdek wat een professionele loodgieterwebsite moet hebben en hoe Elly Apps u helpt vanaf €49 per maand.',
    images: ['/og-image.png'],
  },
}

const IMAGE_URL = 'https://elly-apps.nl/images/branches/loodgieter.webp'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Website laten maken voor een loodgieter — zo krijgt u meer klanten via Google',
  description: 'Als loodgieter meer klanten via Google? Ontdek wat een professionele loodgieterwebsite moet hebben en hoe Elly Apps u helpt vanaf €49 per maand.',
  image: [IMAGE_URL],
  datePublished: '2026-01-22',
  dateModified: '2026-01-22',
  author: { '@type': 'Organization', name: 'Elly Apps', url: 'https://elly-apps.nl' },
  publisher: {
    '@type': 'Organization',
    name: 'Elly Apps',
    url: 'https://elly-apps.nl',
    logo: { '@type': 'ImageObject', url: 'https://elly-apps.nl/elly-logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://elly-apps.nl/blog/loodgieter' },
  inLanguage: 'nl-NL',
}

export default function BlogLoodgieterPage() {
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
            <span>Website laten maken voor een loodgieter</span>
          </nav>

          <h1 className="h1 text-ink">
            Website laten maken voor een loodgieter — zo krijgt u meer klanten via Google
          </h1>
        </div>
      </section>

      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-3xl mx-auto artikel">
          <section>
            <h2>Klanten zoeken online naar een loodgieter</h2>
            <p>
              Wanneer een klant een lekkage heeft of de cv-ketel het begeeft, grijpt hij direct naar zijn telefoon. Hij zoekt op Google naar &quot;loodgieter + plaatsnaam&quot; en belt de eerste die hij ziet. Als uw bedrijf niet bovenaan staat in Google, bestaat u niet voor die klant. Een professionele website is voor loodgieters daarmee geen luxe maar pure noodzaak.
            </p>
          </section>

          <section>
            <h2>Wat moet een goede loodgieterwebsite bevatten?</h2>
            <p>
              Een effectieve website voor een loodgietersbedrijf bevat altijd een duidelijk telefoonnummer bovenaan de pagina, een overzicht van uw diensten zoals lekkages, cv-ketel onderhoud en ontstopping, uw werkgebied, klantbeoordelingen en een contactformulier. Daarnaast is snelheid cruciaal — een trage website verliest bezoekers voordat ze zelfs uw telefoonnummer zien.
            </p>
          </section>

          <section>
            <h2>Waarom lokale SEO zo belangrijk is voor loodgieters</h2>
            <p>
              De meeste loodgieters werken in een bepaalde regio. Google weet dit en toont lokale resultaten aan mensen in uw buurt. Door uw website te optimaliseren voor zoektermen als &quot;loodgieter Amsterdam&quot; of &quot;cv-ketel storing Utrecht&quot; verschijnt u precies wanneer klanten u nodig hebben. Bij Elly Apps is lokale SEO standaard inbegrepen in het Groei pakket.
            </p>
          </section>

          <section>
            <h2>Wat kost een website voor een loodgieter bij Elly Apps?</h2>
            <p>
              Traditionele webbureaus rekenen €2.000 tot €8.000 voor een loodgieterwebsite. Bij Elly Apps kunt u een{' '}
              <Link href="/branche/loodgieter" className="text-brand-strong underline hover:no-underline">professionele website laten maken als loodgieter</Link>
              {' '}vanaf €49 per maand inclusief hosting, onderhoud en basis SEO. Wilt u ook lokale vindbaarheid in meerdere steden? Dan is het Groei pakket voor €199 per maand de slimste keuze — inclusief stadspagina&apos;s en Google Business optimalisatie.
            </p>
          </section>

          <section>
            <h2>Binnen twee weken online</h2>
            <p>
              Wij leveren uw loodgieterwebsite gemiddeld binnen twee weken op. U hoeft zelf niets te regelen — wij verzorgen het ontwerp, de teksten, de hosting en de SEO. U focust op uw klanten, wij zorgen dat ze u online vinden.
            </p>
          </section>

          <section>
            <h2>Conclusie</h2>
            <p>
              Als loodgieter is een professionele website één van de beste investeringen die u kunt doen. Het levert direct meer aanvragen op uit uw regio. Vraag vandaag nog uw gratis websitescan aan en ontdek hoe u meer klanten via Google kunt krijgen.
            </p>
          </section>
        </div>
      </section>

      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Klaar om meer klanten via Google te krijgen?</h2>
          <p className="body-lg text-navy-muted mt-4">Ontvang binnen 24 uur een gratis analyse van uw huidige website met concrete verbeterpunten.</p>
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
