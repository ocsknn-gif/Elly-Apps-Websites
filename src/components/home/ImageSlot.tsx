import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Gereserveerde plek voor een afbeelding die later komt. De vaste beeldverhouding
 * voorkomt layout shift wanneer hier straks een next/image komt; tot die tijd
 * toont hij een rustig vlak met icoon.
 */
export function ImageSlot({ icon: Icon, className }: { icon: LucideIcon; className?: string }) {
  return (
    <div
      aria-hidden="true"
      data-image-slot
      className={cn('flex items-center justify-center rounded-xl bg-brand-tint', className)}
    >
      <Icon className="size-10 text-brand" strokeWidth={1.5} />
    </div>
  )
}
