import type { Metadata } from 'next'
import { SearchIcon, ZapIcon, SmartphoneIcon } from 'lucide-react'
import { WebsiteScanForm } from '@/components/WebsiteScanForm'
import { SectionHeader } from '@/components/home/SectionHeader'

export const metadata: Metadata = {
  title: 'Gratis websitescan | Elly Apps',
  description:
    'Ontvang gratis een professionele websitescan van Elly Apps. Wij analyseren uw SEO, snelheid en mobiele weergave en adviseren u zonder verplichtingen.',
  alternates: { canonical: 'https://elly-apps.nl/gratis-websitescan' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/gratis-websitescan',
    title: 'Gratis websitescan | Elly Apps',
    description: 'Ontvang gratis een professionele websitescan van Elly Apps. Wij analyseren uw SEO, snelheid en mobiele weergave en adviseren u zonder verplichtingen.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gratis websitescan | Elly Apps',
    description: 'Ontvang gratis een professionele websitescan van Elly Apps. Wij analyseren uw SEO, snelheid en mobiele weergave en adviseren u zonder verplichtingen.',
    images: ['/og-image.png'],
  },
}

const checks = [
  {
    icon: <SearchIcon className="size-6 text-brand" aria-hidden="true" />,
    title: 'SEO-check',
    description:
      'Wij analyseren hoe goed uw website scoort op zoekmachines. Denk aan zoekwoorden, metateksten, interne links en technische SEO-factoren die invloed hebben op uw positie in Google.',
  },
  {
    icon: <ZapIcon className="size-6 text-brand" aria-hidden="true" />,
    title: 'Snelheidstest',
    description:
      'Een trage website kost u bezoekers én Google-posities. Wij meten de laadsnelheid van uw website op desktop en mobiel en geven concrete aanbevelingen voor verbetering.',
  },
  {
    icon: <SmartphoneIcon className="size-6 text-brand" aria-hidden="true" />,
    title: 'Mobiel-vriendelijk check',
    description:
      'Meer dan de helft van alle websitebezoeken komt van een smartphone. Wij controleren of uw website correct wordt weergegeven op alle schermformaten en of de gebruikerservaring optimaal is.',
  },
]

export default function GratisWebsitescanPage() {
  return (
    <>
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="h1 text-ink">Ontvang gratis een professionele websitescan</h1>
          <p className="body-lg text-muted mt-4 max-w-2xl mx-auto">
            Wij analyseren uw website op SEO, snelheid en mobiele weergave — kosteloos en
            vrijblijvend. U ontvangt binnen één werkdag een persoonlijk rapport.
          </p>
        </div>
      </section>

      {/* Wat houdt de scan in */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-labelledby="scan-inhoud-titel">
        <div className="max-w-5xl mx-auto">
          <SectionHeader id="scan-inhoud-titel" title="Wat houdt de scan in?" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {checks.map((c) => (
              <div key={c.title} className="rounded-2xl border border-line bg-bg shadow-sm p-6">
                <div className="inline-flex items-center justify-center size-12 rounded-full bg-brand-tint mb-4">
                  {c.icon}
                </div>
                <h3 className="h3 text-ink mb-2">{c.title}</h3>
                <p className="body text-muted">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulier */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-labelledby="scan-formulier-titel">
        <div className="max-w-2xl mx-auto rounded-2xl border border-line bg-bg p-4 sm:p-8 shadow-lg">
          <h2 id="scan-formulier-titel" className="h3 text-ink mb-6">
            Vul uw gegevens in
          </h2>
          <WebsiteScanForm />
        </div>
      </section>
    </>
  )
}
