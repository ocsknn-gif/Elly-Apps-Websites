import Link from 'next/link'
import { ArrowRightIcon, GlobeIcon, SearchIcon, MousePointerClickIcon, SmartphoneIcon } from 'lucide-react'
import { SectionHeader } from './SectionHeader'

const doelen = [
  { icon: GlobeIcon, title: 'Een nieuwe website', text: 'Een professionele website die past bij uw bedrijf.', href: '/diensten/websites' },
  { icon: SearchIcon, title: 'Beter gevonden worden in Google', text: 'Hoger in de zoekresultaten, structureel meer bezoekers.', href: '/diensten/seo' },
  { icon: MousePointerClickIcon, title: 'Direct meer aanvragen via Google Ads', text: 'Gerichte advertenties voor mensen die nu zoeken.', href: '/diensten/sea' },
  { icon: SmartphoneIcon, title: 'Een app laten bouwen', text: 'Een webapp of platform op maat van uw werkwijze.', href: '/diensten/apps' },
]

export function Goals() {
  return (
    <section className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-labelledby="doelen-titel">
      <div className="max-w-7xl mx-auto">
        <SectionHeader id="doelen-titel" title="Wat wilt u bereiken?" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {doelen.map(({ icon: Icon, title, text, href }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col rounded-2xl border border-line bg-bg p-6 shadow-sm transition-all hover:border-brand-strong hover:shadow-md"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand-tint">
                <Icon className="size-6 text-brand" aria-hidden="true" />
              </span>
              <h3 className="h3 text-ink mt-4">{title}</h3>
              <p className="body text-muted mt-2 flex-1">{text}</p>
              <span className="mt-4 inline-flex items-center gap-1 font-semibold text-brand-strong">
                Lees meer
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
