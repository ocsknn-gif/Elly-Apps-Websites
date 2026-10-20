import type { Metadata } from 'next'
import Link from 'next/link'
import { BrancheKaart } from '@/components/branches/BrancheKaart'
import { overzichtBranches } from '@/components/branches/branches-data'

export const metadata: Metadata = {
  title: 'Websites per branche | Elly Apps',
  description: 'Elly Apps bouwt professionele websites voor diverse branches. Bekijk ons aanbod per branche.',
  alternates: { canonical: 'https://elly-apps.nl/branche' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/branche',
    title: 'Websites per branche | Elly Apps',
    description: 'Elly Apps bouwt professionele websites voor diverse branches. Bekijk ons aanbod per branche.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Websites per branche | Elly Apps',
    description: 'Elly Apps bouwt professionele websites voor diverse branches. Bekijk ons aanbod per branche.',
    images: ['/og-image.png'],
  },
}

export default function BranchePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="text-center">
        <p className="text-sm text-brand-strong font-medium mb-2">Branches</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-ink mb-4">Website per branche</h1>
        <p className="text-xl text-muted">Wij bouwen websites die specifiek zijn afgestemd op uw branche. Kies uw sector:</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
        {overzichtBranches.map((b) => (
          <BrancheKaart key={b.slug} {...b} />
        ))}
      </div>
      <div className="bg-surface rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-ink mb-3">Uw branche staat er niet bij?</h2>
        <p className="text-muted mb-6">Wij bouwen websites voor alle soorten bedrijven. Neem contact op voor een vrijblijvend gesprek.</p>
        <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-brand-strong text-white font-semibold hover:bg-brand-strong-hover transition-colors">
          Neem contact op
        </Link>
      </div>
    </div>
  )
}
