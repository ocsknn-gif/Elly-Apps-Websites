import { SearchIcon } from 'lucide-react'
import ScanLink from '@/components/ScanLink'
import { buttonVariants } from '@/components/ui/button'
import { ImageSlot } from './ImageSlot'

type Props = {
  title?: string
  text?: string
  buttonLabel?: string
  /** Kleine regel onder de knop; null verbergt hem. */
  note?: string | null
  /** Beeldplek rechts (desktop). */
  beeld?: boolean
}

export function ClosingCta({
  title = 'Klaar om gevonden te worden op Google?',
  text = 'Vraag een gratis websitescan aan en ontvang binnen één werkdag een persoonlijk rapport.',
  buttonLabel = 'Start gratis scan',
  note = 'Gratis en vrijblijvend.',
  beeld = true,
}: Props) {
  return (
    <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
      <div className={beeld ? 'max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center' : 'max-w-3xl mx-auto text-center'}>
        <div>
          <h2 id="afsluiting-titel" className="h2 text-on-navy">
            {title}
          </h2>
          <p className={`body-lg text-navy-muted mt-4 ${beeld ? 'max-w-xl' : ''}`}>{text}</p>
          <ScanLink className={buttonVariants({ size: 'lg', className: 'mt-8' })}>{buttonLabel}</ScanLink>
          {note && <p className="text-sm text-navy-muted mt-3">{note}</p>}
        </div>
        {/* Beeldplek: later een afsluitende afbeelding */}
        {beeld && <ImageSlot icon={SearchIcon} className="hidden lg:flex aspect-[4/3] bg-white/10 [&_svg]:text-on-navy" />}
      </div>
    </section>
  )
}
