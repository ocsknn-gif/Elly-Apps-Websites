import Link from 'next/link'
import { cn } from '@/lib/utils'

export type RelatedLink = { label: string; href: string }

/** Blok met gerelateerde pagina's: zelfde opmaak als op /branche/kapper. */
export function RelatedLinks({
  id,
  title,
  links,
  className,
  narrow,
}: {
  id: string
  title: string
  links: RelatedLink[]
  className?: string
  narrow?: boolean
}) {
  return (
    <section className={cn('section px-4 sm:px-6 lg:px-8 bg-surface', className)} aria-labelledby={id}>
      <div className={cn('mx-auto', narrow ? 'max-w-3xl' : 'max-w-4xl')}>
        <h2 id={id} className="h3 text-ink mb-6">{title}</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {links.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="flex min-h-12 items-center gap-2 rounded-2xl border border-line bg-bg px-4 py-3 font-semibold text-ink shadow-sm transition-all hover:border-brand-strong hover:text-brand-strong hover:shadow-md"
            >
              <span className="text-brand" aria-hidden="true">→</span> {r.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
