'use client'

import Link from 'next/link'

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t shadow-xl p-2 flex gap-2 md:hidden">
      <a
        href="tel:+31636278515"
        className="flex-1 bg-[#E53E3E] text-white rounded-lg py-3 text-center text-sm font-bold min-h-[44px] flex items-center justify-center hover:bg-[#C53030] transition-colors"
      >
        📞 Bel ons
      </a>
      <Link
        href="/gratis-websitescan"
        className="flex-1 bg-[#E53E3E] text-white rounded-lg py-3 text-center text-sm font-bold min-h-[44px] flex items-center justify-center hover:bg-[#C53030] transition-colors"
      >
        🔍 Gratis scan
      </Link>
    </div>
  )
}
