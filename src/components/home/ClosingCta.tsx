import { SearchIcon } from 'lucide-react'
import ScanLink from '@/components/ScanLink'
import { buttonVariants } from '@/components/ui/button'
import { ImageSlot } from './ImageSlot'

export function ClosingCta() {
  return (
    <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div>
          <h2 id="afsluiting-titel" className="h2 text-on-navy">
            Klaar om gevonden te worden op Google?
          </h2>
          <p className="body-lg text-navy-muted mt-4 max-w-xl">
            Vraag een gratis websitescan aan en ontvang binnen één werkdag een persoonlijk rapport.
          </p>
          <ScanLink className={buttonVariants({ size: 'lg', className: 'mt-8' })}>Start gratis scan</ScanLink>
          <p className="text-sm text-navy-muted mt-3">Gratis en vrijblijvend.</p>
        </div>
        {/* Beeldplek: later een afsluitende afbeelding */}
        <ImageSlot icon={SearchIcon} className="hidden lg:flex aspect-[4/3] bg-white/10 [&_svg]:text-on-navy" />
      </div>
    </section>
  )
}
