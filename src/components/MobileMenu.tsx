'use client'

import { useState } from 'react'
import Link from 'next/link'
import ContactLink from '@/components/ContactLink'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { MenuIcon, XIcon } from 'lucide-react'

type NavLink = { label: string; href: string }

export function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Menu sluiten' : 'Menu openen'}
        aria-expanded={open}
        className="min-h-12 min-w-12 flex items-center justify-center rounded-btn text-ink hover:text-brand-strong"
      >
        {open ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full bg-bg shadow-lg border-t border-line z-50">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 px-3 rounded-btn text-base font-semibold text-ink hover:bg-brand-tint hover:text-brand-strong transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <ContactLink
              type="phone"
              location="mobiel-menu"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants({ variant: 'secondary' }), 'mt-3')}
            >
              Bel ons: 06-36278515
            </ContactLink>
          </nav>
        </div>
      )}
    </div>
  )
}
