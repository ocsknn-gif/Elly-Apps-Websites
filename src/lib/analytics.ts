declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Stuurt een event naar GA4. Doet niets wanneer gtag (nog) niet geladen is,
 * bijvoorbeeld door een adblocker — een mislukte meting mag nooit de
 * onderliggende actie (bellen, WhatsApp, navigatie) blokkeren.
 */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  try {
    window.gtag('event', name, params)
  } catch {
    // Meting mag nooit de gebruikerservaring breken.
  }
}

export {}
