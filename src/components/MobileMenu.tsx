'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MenuIcon, XIcon } from 'lucide-react'

type NavLink = { label: string; href: string }

export function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menu openen"
        className="p-2 rounded-md text-gray-600 hover:text-[#E53E3E]"
      >
        {open ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-[104px] bg-white shadow-lg border-t border-gray-100 z-50">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-[#E53E3E] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+31636278515"
              onClick={() => setOpen(false)}
              className="mt-2 py-2 px-3 rounded-lg border-2 border-[#E53E3E] text-[#E53E3E] text-sm font-semibold text-center hover:bg-red-50 transition-colors"
            >
              Bel ons: 06-36278515
            </a>
            <Link
              href="/gratis-websitescan"
              onClick={() => setOpen(false)}
              className="mt-2 py-2 px-3 rounded-lg bg-[#E53E3E] text-white text-sm font-medium text-center hover:bg-[#C53030] transition-colors"
            >
              Gratis websitescan
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
