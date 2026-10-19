'use client'

import ContactLink from '@/components/ContactLink'
import ScanLink from '@/components/ScanLink'
import { buttonVariants } from '@/components/ui/button'
import { useCookieConsent } from '@/hooks/use-cookie-consent'
import { cn } from '@/lib/utils'

export default function MobileStickyBar() {
  const { status } = useCookieConsent()
  // Pas tonen als de cookiebanner weg is, zodat ze elkaar niet overlappen
  if (status !== 'decided') return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-bg border-t border-line shadow-xl p-2 flex gap-2 md:hidden">
      <ContactLink
        type="phone"
        location="sticky-bar"
        className={cn(buttonVariants({ variant: 'secondary' }), 'flex-1')}
      >
        Bel ons
      </ContactLink>
      <ScanLink className={cn(buttonVariants(), 'flex-1')}>Gratis scan</ScanLink>
    </div>
  )
}
