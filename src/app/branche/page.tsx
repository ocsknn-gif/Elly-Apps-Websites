import type { Metadata } from 'next'
import Link from 'next/link'

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

const branches = [
  { slug: 'loodgieter', label: 'Loodgieter', icon: '🔧' },
  { slug: 'kapper', label: 'Kapper', icon: '✂️' },
  { slug: 'restaurant', label: 'Restaurant', icon: '🍽️' },
  { slug: 'tandarts', label: 'Tandarts', icon: '🦷' },
  { slug: 'fysiotherapeut', label: 'Fysiotherapeut', icon: '💪' },
  { slug: 'horeca', label: 'Horeca', icon: '🍺' },
  { slug: 'accountantskantoor', label: 'Accountantskantoor', icon: '📊' },
  { slug: 'bouwbedrijf', label: 'Bouwbedrijf', icon: '🏗️' },
  { slug: 'rijschool', label: 'Rijschool', icon: '🚗' },
]

export default function BranchePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="text-center">
        <p className="text-sm text-[#E53E3E] font-medium mb-2">Branches</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Website per branche</h1>
        <p className="text-xl text-gray-600">Wij bouwen websites die specifiek zijn afgestemd op uw branche. Kies uw sector:</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {branches.map((b) => (
          <Link
            key={b.slug}
            href={`/branche/${b.slug}`}
            className="flex items-center gap-4 p-5 rounded-2xl border border-gray-200 hover:border-[#E53E3E] hover:shadow-md transition-all group"
          >
            <span className="text-3xl">{b.icon}</span>
            <span className="font-semibold text-gray-800 group-hover:text-[#E53E3E] transition-colors">{b.label}</span>
          </Link>
        ))}
      </div>
      <div className="bg-[#f7f7f7] rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Uw branche staat er niet bij?</h2>
        <p className="text-gray-600 mb-6">Wij bouwen websites voor alle soorten bedrijven. Neem contact op voor een vrijblijvend gesprek.</p>
        <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">
          Neem contact op
        </Link>
      </div>
    </div>
  )
}
