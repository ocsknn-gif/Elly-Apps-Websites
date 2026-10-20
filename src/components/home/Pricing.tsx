import Link from 'next/link'
import { websitePakketten, type WebsitePakket } from '@/lib/pakketten'
import { buttonVariants } from '@/components/ui/button'
import { PakketKaart } from '@/components/PakketKaart'
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
          {websitePakketten.map((p) => (
            <PakketKaart
              key={p.naam}
              naam={p.naam}
              prijs={p.prijs}
              periode={p.maandprijs !== null ? '/mnd' : undefined}
              eenmalig={p.eenmalig}
              populair={p.populair}
              features={p.features}
              cta={knoppen[p.naam]}
            />
          ))}
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
