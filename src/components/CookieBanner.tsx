'use client'

import Link from 'next/link'
import { useCookieConsent } from '@/hooks/use-cookie-consent'

export default function CookieBanner() {
  const { showBanner, accept, reject } = useCookieConsent()
  if (!showBanner) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-xl p-4 md:p-6"
      role="dialog"
      aria-label="Cookiemelding"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-700">
          Wij gebruiken cookies voor analytics en een betere gebruikerservaring.{' '}
          <Link href="/privacybeleid" className="text-[#E53E3E] hover:underline">
            Meer informatie
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Weigeren
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-[#E53E3E] text-white hover:bg-[#C53030] transition-colors"
          >
            Accepteren
          </button>
        </div>
      </div>
    </div>
  )
}
