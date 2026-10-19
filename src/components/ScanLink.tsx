'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

/**
 * Link naar de gratis scan. Op de homepage scrolt hij naar het scanformulier
 * in de hero en zet de focus in het eerste veld; elders gaat hij naar
 * /gratis-websitescan.
 */
export default function ScanLink({
  className,
  children,
  onClick,
}: {
  className?: string
  children: React.ReactNode
  onClick?: () => void
}) {
  const onHome = usePathname() === '/'

  return (
    <Link
      href={onHome ? '#scan' : '/gratis-websitescan'}
      className={className}
      onClick={() => {
        onClick?.()
        if (onHome) {
          document.querySelector<HTMLInputElement>('#scan input:not([tabindex="-1"])')?.focus({ preventScroll: true })
        }
      }}
    >
      {children}
    </Link>
  )
}
