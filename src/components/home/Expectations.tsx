import { ReceiptIcon, FileTextIcon, ServerIcon, HandshakeIcon } from 'lucide-react'
import { SectionHeader } from './SectionHeader'

// Alleen toezeggingen die elders op de site al worden waargemaakt (FAQ, scanpagina, pakketten).
// Geen cijfers of resultaten die niet onderbouwd zijn.
const toezeggingen = [
  { icon: ReceiptIcon, title: 'Vaste maandprijs', text: 'U weet vooraf wat u betaalt. Geen verborgen kosten.' },
  { icon: FileTextIcon, title: 'Scanrapport binnen één werkdag', text: 'Na uw aanvraag ontvangt u een persoonlijk rapport over uw website.' },
  { icon: ServerIcon, title: 'Techniek geregeld', text: 'Hosting, SSL, updates en beveiliging zitten in uw pakket.' },
  { icon: HandshakeIcon, title: 'Duidelijke afspraken', text: 'Minimaal 1 jaar, daarna wordt het contract maandelijks verlengd.' },
]

export function Expectations() {
  return (
    <section className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-labelledby="verwachten-titel">
      <div className="max-w-5xl mx-auto">
        <SectionHeader id="verwachten-titel" title="Wat u van ons kunt verwachten" />
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          {toezeggingen.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-start gap-4 rounded-2xl border border-line p-6">
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-tint">
                <Icon className="size-6 text-brand" aria-hidden="true" />
              </span>
              <div>
                <h3 className="h3 text-ink">{title}</h3>
                <p className="body text-muted mt-1">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
