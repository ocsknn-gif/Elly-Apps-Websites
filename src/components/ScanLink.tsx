'use client'

import Link from 'next/link'

/** Link naar de gratis scan op /gratis-websitescan. */
export default function ScanLink({
  className,
  children,
  onClick,
}: {
  className?: string
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <Link href="/gratis-websitescan" className={className} onClick={() => onClick?.()}>
      {children}
    </Link>
  )
}
