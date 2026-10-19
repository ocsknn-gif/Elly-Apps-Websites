'use client'

import { openCookieSettings } from '@/hooks/use-cookie-consent'

/** Footerlink waarmee de bezoeker de cookiekeuze later kan wijzigen of intrekken. */
export default function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      Cookie-instellingen
    </button>
  )
}
