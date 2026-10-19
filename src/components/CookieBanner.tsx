'use client'

import Link from 'next/link'
import { useCookieConsent } from '@/hooks/use-cookie-consent'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// Weigeren en Accepteren zijn bewust even groot en even opvallend (zelfde variant)
const knop = cn(buttonVariants(), 'flex-1 md:flex-none md:min-w-36')

export default function CookieBanner() {
  const { showBanner, accept, reject } = useCookieConsent()
  if (!showBanner) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-bg border-t border-line shadow-xl px-4 py-3 md:p-6"
      role="dialog"
      aria-label="Cookiemelding"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-6">
        <p className="text-sm text-ink">
          Mogen wij analytische cookies plaatsen? Wij gebruiken Google Analytics en Microsoft Clarity om te zien
          hoe bezoekers de site gebruiken, inclusief anonieme sessie-opnames. Weigert u, dan plaatsen wij alleen
          noodzakelijke opslag.{' '}
          <Link href="/privacybeleid" className="text-brand-strong underline underline-offset-2">
            Meer informatie
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button onClick={reject} className={knop}>
            Weigeren
          </button>
          <button onClick={accept} className={knop}>
            Accepteren
          </button>
        </div>
      </div>
    </div>
  )
}
