'use client'

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'cookie-consent'

export function useCookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) setShowBanner(true)
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setShowBanner(false)
  }

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected')
    setShowBanner(false)
  }

  return { showBanner, accept, reject }
}
