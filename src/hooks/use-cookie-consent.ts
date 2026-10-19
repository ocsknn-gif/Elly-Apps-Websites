'use client'

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'cookie-consent'
const CHANGE_EVENT = 'cookie-consent-change'
/** Na 12 maanden vragen we opnieuw om toestemming. */
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000
/** Cookies van GA4 (_ga, _ga_<ID>) en Clarity (_clck, _clsk) die we bij intrekken opruimen. */
const TRACKING_COOKIE = /^(_ga|_ga_.+|_clck|_clsk)$/

export type ConsentChoice = 'accepted' | 'rejected'

/**
 * 'unknown' tot na de eerste render in de browser, daarna 'pending' (banner
 * open) of 'decided'. Alle componenten die de hook gebruiken lopen gelijk via
 * een event, zodat bv. de sticky balk verschijnt zodra de banner sluit.
 */
type Status = 'unknown' | 'pending' | 'decided'

// Gedeeld binnen de pagina: true zolang de bezoeker de banner via "Cookie-instellingen" heeft geopend.
let settingsOpen = false

function readChoice(): ConsentChoice | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    // Oude opslag was alleen 'accepted'/'rejected'; die blijft geldig en krijgt nu een datum.
    if (raw === 'accepted' || raw === 'rejected') {
      writeChoice(raw)
      return raw
    }
    const { choice, at } = JSON.parse(raw) as { choice: ConsentChoice; at: number }
    if (choice !== 'accepted' && choice !== 'rejected') return null
    if (Date.now() - at > MAX_AGE_MS) return null
    return choice
  } catch {
    return null
  }
}

function writeChoice(choice: ConsentChoice) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice, at: Date.now() }))
  } catch {}
}

function clearTrackingCookies() {
  const host = location.hostname
  const domains = ['', host, `.${host}`, `.${host.replace(/^www\./, '')}`]
  for (const part of document.cookie.split(';')) {
    const name = part.split('=')[0].trim()
    if (!TRACKING_COOKIE.test(name)) continue
    for (const d of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? `; domain=${d}` : ''}`
    }
  }
}

export function useCookieConsent() {
  const [status, setStatus] = useState<Status>('unknown')
  const [choice, setChoice] = useState<ConsentChoice | null>(null)

  useEffect(() => {
    const sync = () => {
      const c = readChoice()
      setChoice(c)
      setStatus(c && !settingsOpen ? 'decided' : 'pending')
    }
    sync()
    window.addEventListener(CHANGE_EVENT, sync)
    return () => window.removeEventListener(CHANGE_EVENT, sync)
  }, [])

  const decide = (value: ConsentChoice) => {
    const previous = readChoice()
    writeChoice(value)
    settingsOpen = false

    // Ingetrokken: cookies opruimen en herladen, zodat de al geladen scripts echt weg zijn.
    if (previous === 'accepted' && value === 'rejected') {
      clearTrackingCookies()
      window.location.reload()
      return
    }
    window.dispatchEvent(new Event(CHANGE_EVENT))
  }

  return {
    status,
    choice,
    showBanner: status === 'pending',
    accept: () => decide('accepted'),
    reject: () => decide('rejected'),
  }
}

/** Opent de cookiebanner opnieuw (link "Cookie-instellingen" in de footer). */
export function openCookieSettings() {
  settingsOpen = true
  window.dispatchEvent(new Event(CHANGE_EVENT))
}
