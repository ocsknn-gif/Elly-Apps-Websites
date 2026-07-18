'use client'

import { useEffect, useRef } from 'react'
import { trackEvent } from '@/lib/analytics'

/**
 * Vuurt de GA4-conversie op /bedankt. De ref-guard zorgt dat het event
 * maar één keer per paginabezoek verstuurd wordt, ook wanneer React in
 * development het effect dubbel uitvoert (StrictMode).
 */
export default function LeadConversion() {
  const fired = useRef(false)

  useEffect(() => {
    if (fired.current) return
    fired.current = true

    trackEvent('generate_lead', {
      currency: 'EUR',
      value: 1,
      event_category: 'lead',
      event_label: 'bedankt-pagina',
    })
  }, [])

  return null
}
