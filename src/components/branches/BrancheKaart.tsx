import fs from 'node:fs'
import path from 'node:path'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'
import { ImageSlot } from '@/components/home/ImageSlot'
import type { Branche } from './branches-data'

function fotoVan(slug: string) {
  const src = `/images/branches/${slug}.webp`
  return fs.existsSync(path.join(process.cwd(), 'public', src)) ? src : null
}

export function BrancheKaart({ icon, label, slug, alt }: Branche) {
  const foto = fotoVan(slug)
  return (
    <Link
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
}
