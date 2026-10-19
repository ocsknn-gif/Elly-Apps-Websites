import fs from 'node:fs'
import path from 'node:path'
import Image from 'next/image'
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
  type LucideIcon,
} from 'lucide-react'
import { ImageSlot } from './ImageSlot'
import { SectionHeader } from './SectionHeader'

type Branche = { icon: LucideIcon; label: string; slug: string; alt: string }

// Foto per branche: public/images/branches/<slug>.webp (800px breed, 4:3-uitsnede gebeurt via CSS).
// Ontbreekt het bestand, dan toont de kaart de beeldplek. Bestand toevoegen + opnieuw builden is genoeg.
const branches: Branche[] = [
  { icon: ScissorsIcon, label: 'Kapper', slug: 'kapper', alt: 'Moderne kapsalon' },
  { icon: UtensilsCrossedIcon, label: 'Restaurant', slug: 'restaurant', alt: 'Gezellig restaurant met gedekte tafels' },
  { icon: WrenchIcon, label: 'Loodgieter', slug: 'loodgieter', alt: 'Loodgieter repareert de afvoer onder een wastafel' },
  { icon: SmileIcon, label: 'Tandarts', slug: 'tandarts', alt: 'Moderne tandartspraktijk' },
  { icon: ActivityIcon, label: 'Fysiotherapeut', slug: 'fysiotherapeut', alt: 'Fysiotherapeut behandelt een patiënt' },
  { icon: HardHatIcon, label: 'Bouwbedrijf', slug: 'bouwbedrijf', alt: 'Bouwplaats met helm en bouwtekening' },
  { icon: CarIcon, label: 'Rijschool', slug: 'rijschool', alt: 'Rijles vanuit de bestuurdersstoel' },
  { icon: PaintRollerIcon, label: 'Schilder', slug: 'schilder', alt: 'Schilder rolt een muur in de verf' },
]

function fotoVan(slug: string) {
  const src = `/images/branches/${slug}.webp`
  return fs.existsSync(path.join(process.cwd(), 'public', src)) ? src : null
}

export function Branches() {
  return (
    <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-labelledby="branches-titel">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          id="branches-titel"
          title="Een website voor uw branche"
          intro="Wij kennen de wensen per sector en bouwen websites met de juiste functies en lokale vindbaarheid."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {branches.map(({ icon, label, slug, alt }) => {
            const foto = fotoVan(slug)
            return (
              <Link
                key={slug}
                href={`/branche/${slug}`}
                className="group flex flex-col rounded-2xl border border-line bg-bg p-2 sm:p-3 shadow-sm transition-all hover:border-brand-strong hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  {foto ? (
                    <Image
                      src={foto}
                      alt={alt}
                      fill
                      sizes="(min-width: 1024px) 300px, (min-width: 768px) 33vw, 50vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <ImageSlot icon={icon} className="h-full rounded-2xl" />
                  )}
                </div>
                <span className="mt-2 sm:mt-3 flex items-center justify-between gap-2 px-1 pb-1 font-semibold text-ink group-hover:text-brand-strong">
                  {label}
                  <ArrowRightIcon className="size-4 shrink-0" aria-hidden="true" />
                </span>
              </Link>
            )
          })}

          {/* Alle branches: geen foto, navy kaart. Mobiel over 2 kolommen (9e kaart), vanaf md even hoog als de fotokaarten */}
          <Link
            href="/branche"
            className="group col-span-2 md:col-span-1 flex flex-col justify-between rounded-2xl bg-navy p-4 sm:p-6 text-on-navy shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="inline-flex size-12 items-center justify-center rounded-full bg-white/10">
              <LayoutGridIcon className="size-6" aria-hidden="true" />
            </span>
            <span className="mt-4">
              <span className="block text-lg sm:text-xl font-bold">Alle branches</span>
              <span className="mt-1 hidden sm:block text-sm text-navy-muted">Bekijk alle branchepagina&apos;s</span>
              <span className="mt-3 inline-flex items-center gap-1 font-semibold underline-offset-4 group-hover:underline">
                Bekijken
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
