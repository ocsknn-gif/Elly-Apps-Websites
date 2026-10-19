import Link from 'next/link'
import {
  ArrowRightIcon,
  ScissorsIcon,
  UtensilsCrossedIcon,
  WrenchIcon,
  SmileIcon,
  ActivityIcon,
  HardHatIcon,
  CarIcon,
  PaintRollerIcon,
  LayoutGridIcon,
} from 'lucide-react'
import { ImageSlot } from './ImageSlot'
import { SectionHeader } from './SectionHeader'

const branches = [
  { icon: ScissorsIcon, label: 'Kapper', href: '/branche/kapper' },
  { icon: UtensilsCrossedIcon, label: 'Restaurant', href: '/branche/restaurant' },
  { icon: WrenchIcon, label: 'Loodgieter', href: '/branche/loodgieter' },
  { icon: SmileIcon, label: 'Tandarts', href: '/branche/tandarts' },
  { icon: ActivityIcon, label: 'Fysiotherapeut', href: '/branche/fysiotherapeut' },
  { icon: HardHatIcon, label: 'Bouwbedrijf', href: '/branche/bouwbedrijf' },
  { icon: CarIcon, label: 'Rijschool', href: '/branche/rijschool' },
  { icon: PaintRollerIcon, label: 'Schilder', href: '/branche/schilder' },
  { icon: LayoutGridIcon, label: 'Alle branches', href: '/branche' },
]

export function Branches() {
  return (
    <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-labelledby="branches-titel">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          id="branches-titel"
          title="Een website voor uw branche"
          intro="Wij kennen de wensen per sector en bouwen websites met de juiste functies en lokale vindbaarheid."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {branches.map(({ icon, label, href }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col rounded-2xl border border-line bg-bg p-3 shadow-sm transition-all hover:border-brand-strong hover:shadow-md"
            >
              {/* Beeldplek: later een afbeelding per branche */}
              <ImageSlot icon={icon} className="aspect-[4/3]" />
              <span className="mt-3 flex items-center justify-between gap-2 px-1 pb-1 font-semibold text-ink group-hover:text-brand-strong">
                {label}
                <ArrowRightIcon className="size-4 shrink-0" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
