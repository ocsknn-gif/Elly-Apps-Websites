import Link from 'next/link'
import { ArrowRightIcon, GlobeIcon, SmartphoneIcon, SearchIcon, TrendingUpIcon } from 'lucide-react'
import { ImageSlot } from './ImageSlot'
import { SectionHeader } from './SectionHeader'

const diensten = [
  { icon: GlobeIcon, title: 'Websites', text: 'Snelle, mobielvriendelijke websites die gevonden worden in Google.', href: '/diensten/websites', link: 'Meer over websites' },
  { icon: SmartphoneIcon, title: 'Apps', text: 'Webapplicaties en platforms die aansluiten op uw werkwijze.', href: '/diensten/apps', link: 'Meer over apps' },
  { icon: SearchIcon, title: 'SEO', text: 'Structureel hoger in Google, met een sterke technische basis en content.', href: '/diensten/seo', link: 'Meer over SEO' },
  { icon: TrendingUpIcon, title: 'Google Ads', text: 'Campagnes die de juiste mensen op het juiste moment bereiken.', href: '/diensten/sea', link: 'Meer over Google Ads' },
]

export function Services() {
  return (
    <section className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-labelledby="diensten-titel">
      <div className="max-w-7xl mx-auto">
        <SectionHeader id="diensten-titel" title="Onze diensten" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {diensten.map(({ icon, title, text, href, link }) => (
            <div key={href} className="flex flex-col rounded-2xl border border-line bg-bg p-4 shadow-sm">
              {/* Beeldplek: later een afbeelding per dienst */}
              <ImageSlot icon={icon} className="aspect-[16/10]" />
              <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                <h3 className="h3 text-ink">{title}</h3>
                <p className="body text-muted mt-2 flex-1">{text}</p>
                <Link
                  href={href}
                  className="mt-4 inline-flex items-center gap-1 self-start font-semibold text-brand-strong underline-offset-4 hover:underline"
                >
                  {link}
                  <ArrowRightIcon className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
