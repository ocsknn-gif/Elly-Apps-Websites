import Link from 'next/link'
import { CheckIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Props = {
  naam: string
  prijs: string
  /** Achtervoegsel achter de prijs, bijv. '/mnd'. Zonder: alleen de prijs. */
  periode?: string
  eenmalig: string
  populair: boolean
  features: string[]
  cta: { label: string; href: string }
  /** Kleine regel onder de knop. */
  note?: string
}

/** Pakketkaart voor homepage en /prijzen. */
export function PakketKaart({ naam, prijs, periode, eenmalig, populair, features, cta, note }: Props) {
  return (
    <div
      className={cn(
        'relative flex flex-col rounded-2xl bg-bg p-6 lg:p-8',
        populair ? 'border-2 border-brand-strong shadow-lg' : 'border border-line shadow-sm',
      )}
    >
      {populair && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-strong px-4 py-1 text-sm font-semibold text-white">
          Meest gekozen
        </span>
      )}
      <h3 className="h3 text-ink">{naam}</h3>
      <p className="mt-3 text-4xl font-extrabold text-ink">
        {prijs}
        {periode && <span className="text-base font-semibold text-muted">{periode}</span>}
      </p>
      <p className="mt-1 text-sm text-muted">{eenmalig}</p>
      <p className="text-sm text-muted">Alle prijzen zijn exclusief BTW</p>

      <ul className="mt-6 space-y-3 body text-ink flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <CheckIcon className="size-5 text-brand shrink-0 mt-0.5" aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>

      <Link
        href={cta.href}
        className={cn(buttonVariants({ variant: populair ? 'primary' : 'secondary' }), 'mt-8 w-full whitespace-normal text-center')}
      >
        {cta.label}
      </Link>
      {note && <p className="mt-3 text-sm text-muted text-center">{note}</p>}
    </div>
  )
}
