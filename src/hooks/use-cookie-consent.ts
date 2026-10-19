'use client'

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'cookie-consent'
const CHANGE_EVENT = 'cookie-consent-change'

/**
 * 'unknown' tot na de eerste render in de browser, daarna 'pending' (banner
 * open) of 'decided'. Alle componenten die de hook gebruiken lopen gelijk via
 * een event, zodat bv. de sticky balk verschijnt zodra de banner sluit.
 */
type Status = 'unknown' | 'pending' | 'decided'

function readStatus(): Status {
  try {
    return localStorage.getItem(STORAGE_KEY) ? 'decided' : 'pending'
  } catch {
    return 'pending'
  }
}

export function useCookieConsent() {
  const [status, setStatus] = useState<Status>('unknown')

  useEffect(() => {
    const sync = () => setStatus(readStatus())
    sync()
    window.addEventListener(CHANGE_EVENT, sync)
    return () => window.removeEventListener(CHANGE_EVENT, sync)
  }, [])

  const decide = (value: 'accepted' | 'rejected') => {
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {}
    setStatus('decided')
    window.dispatchEvent(new Event(CHANGE_EVENT))
  }

  return {
    status,
    showBanner: status === 'pending',
    accept: () => decide('accepted'),
    reject: () => decide('rejected'),
  }
}
