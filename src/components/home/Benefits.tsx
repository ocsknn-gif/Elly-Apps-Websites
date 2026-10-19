import { WalletIcon, ClockIcon, ShieldCheckIcon } from 'lucide-react'

const voordelen = [
  { icon: WalletIcon, title: 'Betaalbaar vanaf €49/maand', text: 'Een vaste lage maandprijs, zonder verborgen kosten.' },
  { icon: ClockIcon, title: 'Gemiddeld binnen 2 weken online', text: 'Van kennismaking tot lancering in korte tijd.' },
  { icon: ShieldCheckIcon, title: 'Volledig ontzorgd', text: 'Hosting, updates en beveiliging: wij regelen alles.' },
]

export function Benefits() {
  return (
    <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Voordelen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {voordelen.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-start gap-4 md:flex-col md:items-center md:text-center">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-bg shadow-sm">
              <Icon className="size-6 text-brand" aria-hidden="true" />
            </span>
            <div>
              <h3 className="h3 text-ink">{title}</h3>
              <p className="body text-muted mt-1">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
