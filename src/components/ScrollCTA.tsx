'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react'

export default function ScrollCTA() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setShow(false)
  }, [pathname])

  useEffect(() => {
    const handler = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      if (scrollPercent > 0.5 && !dismissed) setShow(true)
      else if (scrollPercent <= 0.3) setShow(false)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [dismissed])

  if (!show || dismissed) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#E53E3E] text-white py-3 px-4 text-center text-sm font-semibold shadow-lg">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-4">
        <Link
          href="/gratis-websitescan"
          className="hover:underline"
          onClick={() => setDismissed(true)}
        >
          Wil u ook meer klanten via Google? Vraag uw gratis websitescan aan →
        </Link>
        <button
          onClick={() => setDismissed(true)}
          className="min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Sluiten"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
