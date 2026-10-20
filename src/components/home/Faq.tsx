import { PlusIcon } from 'lucide-react'
import { SectionHeader } from './SectionHeader'

/** Uitklapbare FAQ. Krijgt dezelfde items als het FAQ-schema, zodat die altijd gelijk lopen. */
export function Faq({
  items,
  title = 'Veelgestelde vragen',
  className = 'bg-surface',
}: {
  items: { q: string; a: string }[]
  title?: string
  className?: string
}) {
  return (
    <section className={`section px-4 sm:px-6 lg:px-8 ${className}`} aria-labelledby="faq-titel">
      <div className="max-w-3xl mx-auto">
        <SectionHeader id="faq-titel" title={title} />
        <div className="space-y-3">
          {items.map((item) => (
            <details key={item.q} className="group rounded-xl border border-line bg-bg">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-4 font-semibold text-ink hover:text-brand-strong [&::-webkit-details-marker]:hidden">
                {item.q}
                <PlusIcon
                  className="size-5 shrink-0 text-brand-strong transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="body text-muted px-5 pb-5">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
