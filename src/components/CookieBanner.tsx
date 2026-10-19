'use client'

import Link from 'next/link'
import { useCookieConsent } from '@/hooks/use-cookie-consent'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function CookieBanner() {
  const { showBanner, accept, reject } = useCookieConsent()
  if (!showBanner) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-bg border-t border-line shadow-xl px-4 py-3 md:p-6"
      role="dialog"
      aria-label="Cookiemelding"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
        <p className="text-sm text-ink">
          Wij gebruiken cookies voor analytics en een betere gebruikerservaring.{' '}
          <Link href="/privacybeleid" className="text-brand-strong underline underline-offset-2">
            Meer informatie
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button onClick={reject} className={cn(buttonVariants({ variant: 'secondary' }), 'flex-1 md:flex-none')}>
            Weigeren
          </button>
          <button onClick={accept} className={cn(buttonVariants(), 'flex-1 md:flex-none')}>
            Accepteren
          </button>
        </div>
      </div>
    </div>
  )
}
