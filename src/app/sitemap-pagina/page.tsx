import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sitemap | Elly Apps & Websites',
  description: 'Overzicht van alle paginas op elly-apps.nl',
  alternates: { canonical: 'https://elly-apps.nl/sitemap-pagina' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/sitemap-pagina',
    title: 'Sitemap | Elly Apps & Websites',
    description: 'Overzicht van alle paginas op elly-apps.nl',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sitemap | Elly Apps & Websites',
    description: 'Overzicht van alle paginas op elly-apps.nl',
    images: ['/og-image.png'],
  },
}

const sections = [
  {
    title: "Hoofdpagina's",
    links: [
      { label: 'Home', href: '/' },
      { label: 'Diensten', href: '/diensten' },
      { label: 'Prijzen', href: '/prijzen' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Over ons', href: '/over-ons' },
      { label: 'Contact', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Gratis websitescan', href: '/gratis-websitescan' },
    ],
  },
  {
    title: 'Diensten',
    links: [
      { label: 'Websites laten maken', href: '/diensten/websites' },
      { label: 'SEO', href: '/diensten/seo' },
      { label: 'Google Ads (SEA)', href: '/diensten/sea' },
      { label: 'Social Media advertenties', href: '/diensten/social-media' },
      { label: 'Apps laten maken', href: '/diensten/apps' },
      { label: 'Boekingssysteem', href: '/diensten/boekingssysteem' },
    ],
  },
  {
    title: 'Branches',
    links: [
      { label: 'Alle branches', href: '/branche' },
      { label: 'Loodgieter', href: '/branche/loodgieter' },
      { label: 'Kapper', href: '/branche/kapper' },
      { label: 'Restaurant', href: '/branche/restaurant' },
      { label: 'Tandarts', href: '/branche/tandarts' },
      { label: 'Fysiotherapeut', href: '/branche/fysiotherapeut' },
      { label: 'Horeca', href: '/branche/horeca' },
      { label: 'Accountantskantoor', href: '/branche/accountantskantoor' },
      { label: 'Bouwbedrijf', href: '/branche/bouwbedrijf' },
      { label: 'Rijschool', href: '/branche/rijschool' },
      { label: 'Schilder', href: '/branche/schilder' },
      { label: 'Zorg', href: '/branche/zorg' },
    ],
  },
  {
    title: 'Steden',
    links: [
      { label: 'Amsterdam', href: '/stad/amsterdam' },
      { label: 'Rotterdam', href: '/stad/rotterdam' },
      { label: 'Utrecht', href: '/stad/utrecht' },
      { label: 'Den Haag', href: '/stad/den-haag' },
      { label: 'Eindhoven', href: '/stad/eindhoven' },
      { label: 'Almere', href: '/stad/almere' },
      { label: 'Breda', href: '/stad/breda' },
      { label: 'Den Bosch', href: '/stad/den-bosch' },
      { label: 'Groningen', href: '/stad/groningen' },
      { label: 'Haarlem', href: '/stad/haarlem' },
      { label: 'Leiden', href: '/stad/leiden' },
      { label: 'Nijmegen', href: '/stad/nijmegen' },
      { label: 'Tilburg', href: '/stad/tilburg' },
      { label: 'Zwolle', href: '/stad/zwolle' },
    ],
  },
  {
    title: 'Werkgebieden',
    links: [
      { label: 'Noord-Holland', href: '/werkgebied/noord-holland' },
      { label: 'Zuid-Holland', href: '/werkgebied/zuid-holland' },
      { label: 'Utrecht (provincie)', href: '/werkgebied/utrecht' },
      { label: 'Noord-Brabant', href: '/werkgebied/noord-brabant' },
      { label: 'Gelderland', href: '/werkgebied/gelderland' },
      { label: 'Overijssel', href: '/werkgebied/overijssel' },
      { label: 'Groningen (provincie)', href: '/werkgebied/groningen' },
    ],
  },
  {
    title: 'Blog',
    links: [
      { label: 'Alle artikelen', href: '/blog' },
      { label: 'Wat kost een website?', href: '/blog/wat-kost-een-website' },
      { label: 'Wat kost SEO?', href: '/blog/wat-kost-seo' },
      { label: 'Wat kost Google Ads?', href: '/blog/wat-kost-google-ads' },
      { label: 'SEO vs Google Ads', href: '/blog/seo-vs-google-ads' },
      { label: 'Website niet gevonden op Google', href: '/blog/website-niet-gevonden-google' },
      { label: 'Goedkope website laten maken', href: '/blog/goedkope-website' },
      { label: 'SEO tips voor het MKB', href: '/blog/seo-tips-mkb' },
      { label: 'Website voor ZZP', href: '/blog/website-zzp' },
      { label: 'Website laten maken voor kapper', href: '/blog/kapper' },
      { label: 'Website laten maken voor loodgieter', href: '/blog/loodgieter' },
      { label: 'Website laten maken voor restaurant', href: '/blog/restaurant' },
      { label: 'Google Ads: zelf of uitbesteden?', href: '/blog/google-ads-zelf-of-uitbesteden' },
      { label: 'Social media met AI', href: '/blog/social-media-ai' },
      { label: 'Social media budget', href: '/blog/social-media-budget' },
      { label: 'Social media: zelf of uitbesteden?', href: '/blog/social-media-zelf-of-uitbesteden' },
    ],
  },
  {
    title: 'Juridisch',
    links: [
      { label: 'Privacybeleid', href: '/privacybeleid' },
      { label: 'Algemene voorwaarden', href: '/algemene-voorwaarden' },
    ],
  },
]

export default function SitemapPaginaPage() {
  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Navigatie</p>
          <h1 className="h1 text-ink mb-3">Sitemap</h1>
          <p className="body-lg text-muted">Overzicht van alle pagina&apos;s op elly-apps.nl</p>
        </div>
      </section>

      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-sm font-bold text-brand-strong uppercase tracking-wider mb-3">
                {section.title}
              </h2>
              <ul>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block py-2 text-sm text-muted hover:text-brand-strong hover:underline transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
