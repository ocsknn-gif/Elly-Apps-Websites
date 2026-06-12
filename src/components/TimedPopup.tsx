'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react'

export default function TimedPopup() {
  const [show, setShow] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setShow(false)
  }, [pathname])

  useEffect(() => {
    const dismissed = sessionStorage.getItem('popup-dismissed')
    if (dismissed) return
    const timer = setTimeout(() => setShow(true), 8000)
    return () => clearTimeout(timer)
  }, [])

  const dismiss = () => {
    setShow(false)
    sessionStorage.setItem('popup-dismissed', 'true')
  }

  if (!show) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"
      role="dialog"
      aria-label="Popup aanbod"
    >
      <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full relative">
        <button
          onClick={dismiss}
          className="absolute top-3 right-3 min-h-[44px] min-w-[44px] flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors"
          aria-label="Sluiten"
        >
          <X className="h-5 w-5" />
        </button>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Nog even twijfelen?</h3>
        <p className="text-sm text-gray-600 mb-4">
          Vraag vrijblijvend een gratis websitescan aan en ontdek waar de kansen liggen voor uw bedrijf.
        </p>
        <Link
          href="/gratis-websitescan"
          onClick={dismiss}
          className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors"
        >
          Ja, ik wil mijn gratis scan
        </Link>
        <p className="text-xs text-gray-500 text-center mt-2">✓ Gratis &nbsp; ✓ Vrijblijvend &nbsp; ✓ Binnen 24 uur reactie</p>
      </div>
    </div>
  )
}
