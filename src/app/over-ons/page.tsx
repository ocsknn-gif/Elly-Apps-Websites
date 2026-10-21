import type { Metadata } from 'next'
import Link from 'next/link'
import { HeartIcon, UsersIcon, TargetIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { ORG_ALTERNATE_NAME, ORG_ID, ORG_NAME, ORG_SAME_AS, SITE_URL } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Over ons | Elly Apps',
  description:
    'Elly Apps is opgericht door Omer Coskun in Aalsmeer en bouwt betaalbare, professionele websites voor het MKB.',
  alternates: { canonical: 'https://elly-apps.nl/over-ons' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/over-ons',
    title: 'Over ons | Elly Apps',
    description: 'Elly Apps is opgericht door Omer Coskun in Aalsmeer en bouwt betaalbare, professionele websites voor het MKB.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Over ons | Elly Apps',
    description: 'Elly Apps is opgericht door Omer Coskun in Aalsmeer en bouwt betaalbare, professionele websites voor het MKB.',
    images: ['/og-image.png'],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: ORG_NAME,
  alternateName: ORG_ALTERNATE_NAME,
  sameAs: ORG_SAME_AS,
  url: SITE_URL,
  logo: `${SITE_URL}/elly-logo.png`,
  telephone: '+31636278515',
  founder: {
    '@type': 'Person',
    name: 'Omer Coskun',
  },
  description:
    'Elly Apps bouwt en beheert professionele websites voor het MKB. Betaalbaar, snel en volledig ontzorgd.',
}

const kernwaarden = [
  {
    icon: <HeartIcon className="size-7 text-brand" />,
    title: 'Betaalbaar',
    description:
      'Wij geloven dat elke ondernemer recht heeft op een professionele online aanwezigheid, ongeacht het budget. Daarom bieden wij vaste, eerlijke maandprijzen zonder verborgen kosten.',
  },
  {
    icon: <UsersIcon className="size-7 text-brand" />,
    title: 'Persoonlijk',
    description:
      'Bij Elly Apps bent u geen nummer. Wij werken nauw samen met elke klant, luisteren naar uw wensen en denken mee over de beste aanpak voor uw specifieke situatie.',
  },
  {
    icon: <TargetIcon className="size-7 text-brand" />,
    title: 'Resultaatgericht',
    description:
      'Een mooie website is een middel, geen doel. Wij richten ons altijd op meetbare resultaten en duidelijke rapportages.',
  },
]

export default function OverOnsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="h1 text-ink">Over Elly Apps</h1>
          <p className="body-lg text-muted mt-4">
            Wij helpen het MKB groeien met een sterke online aanwezigheid.
          </p>
        </div>
      </section>

      {/* Verhaal */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-3xl mx-auto artikel">
          <p>
            Elly Apps is opgericht door <strong>Omer Coskun</strong>, gevestigd in Aalsmeer. Na
            jarenlange ervaring in digitale dienstverlening zag Omer dat veel MKB-bedrijven
            worstelen met hetzelfde probleem: ze weten dat ze een goede website nodig hebben, maar
            vinden het te duur, te ingewikkeld of te tijdrovend om dit goed aan te pakken.
          </p>
          <p>
            Elly Apps is opgericht om dat te veranderen. Wij bouwen betaalbare, professionele
            websites voor ondernemers die gewoon goed gevonden willen worden — zonder zich zorgen
            te maken over techniek, hosting of updates. Wij ontzorgen u volledig, van het eerste
            gesprek tot de lancering en daarna.
          </p>
          <p>
            Onze missie is helder: <strong>elk bedrijf verdient een goede online aanwezigheid.</strong>{' '}
            Of u nu een eenmanszaak bent, een klein team heeft of een groeiend MKB-bedrijf runt —
            wij zorgen dat u online zichtbaar bent en gevonden wordt door de juiste klanten.
          </p>
          <p>
            Wij werken altijd persoonlijk, transparant en resultaatgericht. U ontvangt duidelijke
            rapportages vanaf het Groei pakket en weet altijd waar u aan toe bent.
          </p>
        </div>
      </section>

      {/* Kernwaarden */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="h2 text-ink mb-10 text-center">Onze kernwaarden</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {kernwaarden.map((w) => (
              <div
                key={w.title}
                className="text-center p-6 rounded-2xl border border-line bg-bg"
              >
                <div className="inline-flex items-center justify-center size-12 rounded-full bg-brand-tint mb-4">
                  {w.icon}
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">{w.title}</h3>
                <p className="body text-muted">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="h2 text-on-navy">Klaar voor een kennismaking?</h2>
          <p className="body-lg text-navy-muted mt-4 mb-8">
            Neem vrijblijvend contact op of vraag direct een gratis websitescan aan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gratis-websitescan"
              className={buttonVariants({ size: 'lg' })}
            >
              Gratis websitescan
            </Link>
            <Link
              href="/contact"
              className={buttonVariants({ variant: 'secondary', size: 'lg' })}
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
