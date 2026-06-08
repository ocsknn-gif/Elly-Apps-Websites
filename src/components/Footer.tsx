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
              {['Websites', 'Apps', 'SEO', 'SEA', 'Social Media'].map((item) => (
                <li key={item}>
                  <Link
                    href="/diensten"
                    className="hover:text-[#E53E3E] transition-colors"
                  >
                    {item}
                  </Link>
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
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#E53E3E] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold mb-3">Contact</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+31636278515"
                  className="hover:text-[#E53E3E] transition-colors"
                >
                  +31 6 36 27 85 15
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@elly-apps.nl"
                  className="hover:text-[#E53E3E] transition-colors"
                >
                  info@elly-apps.nl
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/31636278515"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E53E3E] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
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
