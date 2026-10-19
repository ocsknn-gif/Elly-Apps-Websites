import { MessagesSquareIcon, PencilRulerIcon, RocketIcon, ShieldCheckIcon } from 'lucide-react'
import { ImageSlot } from './ImageSlot'
import { SectionHeader } from './SectionHeader'

const stappen = [
  { icon: MessagesSquareIcon, title: 'Gratis kennismaking', text: 'We bespreken uw doelen, wensen en budget. Vrijblijvend.' },
  { icon: PencilRulerIcon, title: 'Ontwerp & bouw', text: 'Wij ontwerpen en bouwen uw website en houden u op de hoogte.' },
  { icon: RocketIcon, title: 'Review & lancering', text: 'U geeft feedback, daarna gaan we live. Gemiddeld binnen 2 weken.' },
  { icon: ShieldCheckIcon, title: 'Beheer & groei', text: 'Wij regelen updates, beveiliging en technische monitoring.' },
]

export function Steps() {
  return (
    <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-labelledby="stappen-titel">
      <div className="max-w-7xl mx-auto">
        <SectionHeader id="stappen-titel" title="Zo werken wij" />
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stappen.map(({ icon, title, text }, i) => (
            <li key={title} className="flex flex-col">
              {/* Beeldplek: later een afbeelding per stap */}
              <ImageSlot icon={icon} className="aspect-[4/3] bg-bg" />
              <div className="mt-4 flex items-center gap-3">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-strong font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="h3 text-ink">{title}</h3>
              </div>
              <p className="body text-muted mt-2">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
