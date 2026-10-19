import Link from 'next/link'
import { CheckIcon } from 'lucide-react'
import { websitePakketten, type WebsitePakket } from '@/lib/pakketten'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { SectionHeader } from './SectionHeader'

const knoppen: Record<WebsitePakket['naam'], { label: string; href: string }> = {
  Starter: { label: 'Kies Starter', href: '/gratis-websitescan' },
  Groei: { label: 'Kies Groei', href: '/gratis-websitescan' },
  Pro: { label: 'Bespreek Pro', href: '/contact' },
}

export function Pricing() {
  return (
    <section className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-labelledby="prijzen-titel">
      <div className="max-w-7xl mx-auto">
        <SectionHeader id="prijzen-titel" title="Transparante prijzen" intro="Een vaste maandprijs, zonder verborgen kosten." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {websitePakketten.map((p) => {
            const knop = knoppen[p.naam]
            return (
              <div
                key={p.naam}
                className={cn(
                  'relative flex flex-col rounded-2xl bg-bg p-6 lg:p-8',
                  p.populair ? 'border-2 border-brand-strong shadow-lg' : 'border border-line shadow-sm',
                )}
              >
                {p.populair && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-strong px-4 py-1 text-sm font-semibold text-white">
                    Meest gekozen
                  </span>
                )}
                <h3 className="h3 text-ink">{p.naam}</h3>
                <p className="mt-3 text-4xl font-extrabold text-ink">
                  {p.prijs}
                  {p.maandprijs !== null && <span className="text-base font-semibold text-muted">/mnd</span>}
                </p>
                <p className="mt-1 text-sm text-muted">{p.eenmalig}</p>

                <ul className="mt-6 space-y-3 body text-ink flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckIcon className="size-5 text-brand shrink-0 mt-0.5" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={knop.href}
                  className={cn(buttonVariants({ variant: p.populair ? 'primary' : 'secondary' }), 'mt-8 w-full')}
                >
                  {knop.label}
                </Link>
              </div>
            )
          })}
        </div>

        <p className="mt-8 text-center">
          <Link href="/prijzen" className={buttonVariants({ variant: 'link', className: 'text-base' })}>
            Bekijk alle prijzen en pakketten
          </Link>
        </p>
      </div>
    </section>
  )
}
