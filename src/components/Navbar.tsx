import Link from 'next/link'
import ContactLink from '@/components/ContactLink'
import Image from 'next/image'
import { MobileMenu } from './MobileMenu'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Diensten', href: '/diensten' },
  { label: 'Branches', href: '/branche' },
  { label: 'Prijzen', href: '/prijzen' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Over ons', href: '/over-ons' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  return (
    <>
      {/* Urgency balk */}
      <div className="bg-[#E53E3E] text-white text-center text-sm font-medium py-2 px-4">
        <Link
          href="/gratis-websitescan"
          className="hover:underline inline-flex items-center gap-1"
        >
          Gratis websitescan | Vraag nu aan →
        </Link>
      </div>

      {/* Hoofdnavigatie */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image src="/elly-logo.png" alt="Elly Apps & Websites" width={160} height={40} loading="eager" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-[#E53E3E] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA knop */}
            <ContactLink
              type="phone"
              location="navbar"
              className="hidden lg:inline-flex items-center px-4 py-2 rounded-lg border-2 border-[#E53E3E] text-[#E53E3E] text-sm font-semibold hover:bg-red-50 transition-colors"
            >
              Bel ons direct: 06-36278515
            </ContactLink>

            <MobileMenu links={navLinks} />
          </div>
        </div>
      </header>
    </>
  )
}
