import Link from 'next/link'
import Image from 'next/image'
import ScanLink from '@/components/ScanLink'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { MobileMenu } from './MobileMenu'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Diensten', href: '/diensten' },
  { label: 'Branches', href: '/branche' },
  { label: 'Prijzen', href: '/prijzen' },
  { label: 'Blog', href: '/blog' },
  { label: 'Over ons', href: '/over-ons' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  return (
    <>
      {/* Smalle balk */}
      <div className="bg-navy text-on-navy text-center text-sm font-semibold py-2 px-4">
        <ScanLink className="hover:underline underline-offset-4">
          Gratis websitescan: rapport binnen één werkdag
        </ScanLink>
      </div>

      {/* Hoofdnavigatie */}
      <header className="sticky top-0 z-50 bg-bg border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/elly-logo.png"
                alt="Elly Apps & Websites"
                width={160}
                height={40}
                loading="eager"
                className="w-[120px] sm:w-[160px] h-auto"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] font-semibold text-ink hover:text-brand-strong transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-1">
              <ScanLink className={cn(buttonVariants(), 'px-4 lg:px-6')}>Gratis scan</ScanLink>
              <MobileMenu links={navLinks} />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
