import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a1a2e' }} className="text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Image src="/elly-logo.png" alt="Elly Apps & Websites" width={140} height={35} className="brightness-0 invert mb-3" />
            <p className="text-sm leading-relaxed">
              Elly Apps bouwt en beheert professionele websites voor het MKB.
              Betaalbaar, snel en volledig ontzorgd.
            </p>
          </div>

          <div>
            <p className="text-white font-semibold mb-3">Diensten</p>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Websites', href: '/diensten/websites' },
                { label: 'Apps', href: '/diensten/apps' },
                { label: 'SEO', href: '/diensten/seo' },
                { label: 'SEA', href: '/diensten/sea' },
                { label: 'Social Media', href: '/diensten/social-media' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-[#E53E3E] transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold mb-3">Snel naar</p>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'Prijzen', href: '/prijzen' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact', href: '/contact' },
                { label: 'Privacybeleid', href: '/privacybeleid' },
                { label: 'Algemene voorwaarden', href: '/algemene-voorwaarden' },
                { label: 'Sitemap', href: '/sitemap-pagina' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-[#E53E3E] transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold mb-3">Werkgebied</p>
            <ul className="space-y-2 text-sm mb-6">
              {[
                { label: 'Noord-Holland', href: '/werkgebied/noord-holland' },
                { label: 'Zuid-Holland', href: '/werkgebied/zuid-holland' },
                { label: 'Utrecht', href: '/werkgebied/utrecht' },
                { label: 'Noord-Brabant', href: '/werkgebied/noord-brabant' },
                { label: 'Gelderland', href: '/werkgebied/gelderland' },
                { label: 'Overijssel', href: '/werkgebied/overijssel' },
                { label: 'Groningen', href: '/werkgebied/groningen' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-[#E53E3E] transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>

            <p className="text-white font-semibold mb-3">Contact</p>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+31636278515" className="hover:text-[#E53E3E] transition-colors">+31 6 36 27 85 15</a></li>
              <li><Link href="/contact" className="hover:text-[#E53E3E] transition-colors">Stuur een bericht</Link></li>
              <li><a href="https://wa.me/31636278515" target="_blank" rel="noopener noreferrer" className="hover:text-[#E53E3E] transition-colors">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Elly Apps &amp; Websites. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  )
}
