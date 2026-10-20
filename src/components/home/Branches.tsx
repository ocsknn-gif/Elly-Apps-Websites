import Link from 'next/link'
import { ArrowRightIcon, LayoutGridIcon } from 'lucide-react'
import { BrancheKaart } from '@/components/branches/BrancheKaart'
import { homeBranches } from '@/components/branches/branches-data'
import { SectionHeader } from './SectionHeader'

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
          {homeBranches.map((b) => (
            <BrancheKaart key={b.slug} {...b} />
          ))}

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
