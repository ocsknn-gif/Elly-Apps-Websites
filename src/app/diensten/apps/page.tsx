import type { Metadata } from 'next'
import Link from 'next/link'
import { ShoppingCart, CalendarCheck, Users } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Faq } from '@/components/home/Faq'
import { SectionHeader } from '@/components/home/SectionHeader'

export const metadata: Metadata = {
  title: 'Professionele app laten maken & beheren | Elly Apps',
  description: 'Elly Apps bouwt en beheert uw iOS én Android app. Op maat voor uw bedrijf. Van bestelapp tot ledenapp — volledig ontzorgd.',
  alternates: { canonical: 'https://elly-apps.nl/diensten/apps' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/diensten/apps',
    title: 'Professionele app laten maken & beheren | Elly Apps',
    description: 'Elly Apps bouwt en beheert uw iOS én Android app. Op maat voor uw bedrijf. Van bestelapp tot ledenapp — volledig ontzorgd.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professionele app laten maken & beheren | Elly Apps',
    description: 'Elly Apps bouwt en beheert uw iOS én Android app. Op maat voor uw bedrijf. Van bestelapp tot ledenapp — volledig ontzorgd.',
    images: ['/og-image.png'],
  },
}

const appTypes = [
  { title: 'Bestelapp', desc: 'Voor restaurants, bakkerijen en bezorgdiensten. Online bestellen en betalen.', Icon: ShoppingCart },
  { title: 'Reserveringsapp', desc: 'Voor rijscholen, kappers en horecabedrijven. Klanten boeken zelf hun afspraak.', Icon: CalendarCheck },
  { title: 'Ledenapp', desc: 'Voor sportclubs, zorginstellingen en verenigingen. Communicatie en planning.', Icon: Users },
]

const steden = [
  { label: 'App laten maken Amsterdam', href: '/apps/amsterdam' },
  { label: 'App laten maken Den Haag', href: '/apps/den-haag' },
  { label: 'App laten maken Breda', href: '/apps/breda' },
  { label: 'App laten maken Tilburg', href: '/apps/tilburg' },
  { label: 'App ontwikkelaar Tilburg', href: '/apps/app-ontwikkelaar-tilburg' },
  { label: 'App ontwikkelaar Noord-Holland', href: '/apps/noord-holland' },
]

const faq = [
  { q: 'Hoeveel kost een app laten maken?', a: 'Dit is afhankelijk van de complexiteit. Neem contact op voor een vrijblijvende offerte op maat.' },
  { q: 'Hoe lang duurt het om een app te bouwen?', a: 'Dat is afhankelijk van de app en wordt na een kennismaking (intake) bepaald.' },
  { q: 'Kan ik mijn app later uitbreiden?', a: 'Ja, wij bouwen uw app modulair zodat uitbreidingen altijd mogelijk zijn.' },
  { q: 'Wordt mijn app ook beheerd?', a: 'Ja, wij bieden volledig beheer inclusief updates, bugfixes en nieuwe functies.' },
]

export default function DienstenAppsPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="h1 text-ink">Professionele app laten maken voor uw bedrijf</h1>
          <p className="body-lg text-muted mt-4 mb-8">Van bestelapp tot ledenapp — wij bouwen en beheren uw app voor iOS én Android. Volledig op maat, volledig ontzorgd.</p>
          <Link href="/contact" className={buttonVariants({ size: 'lg' })}>
            Neem contact op
          </Link>
        </div>
      </section>

      {/* Website vs App */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-labelledby="website-app-titel">
        <div className="max-w-4xl mx-auto">
          <SectionHeader id="website-app-titel" title="Website of app — wanneer wat?" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-line bg-bg shadow-sm p-6">
              <h3 className="h3 text-ink mb-3">Website</h3>
              <p className="body text-muted">Ideaal voor informatief, SEO, bereikbaarheid en online zichtbaarheid. Toegankelijk via elke browser.</p>
            </div>
            <div className="rounded-2xl border border-line bg-bg shadow-sm p-6">
              <h3 className="h3 text-ink mb-3">App</h3>
              <p className="body text-muted">Ideaal voor terugkerende interactie: bestellingen, reserveringen, ledenportalen. Direct op het startscherm.</p>
            </div>
          </div>
        </div>
      </section>

      {/* App types */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-labelledby="app-types-titel">
        <div className="max-w-5xl mx-auto">
          <SectionHeader id="app-types-titel" title="App types" />
          <div className="grid md:grid-cols-3 gap-6">
            {appTypes.map((t) => (
              <div key={t.title} className="rounded-2xl border border-line bg-bg shadow-sm p-6">
                <div className="inline-flex items-center justify-center size-12 rounded-full bg-brand-tint mb-4">
                  <t.Icon size={24} className="text-brand" aria-hidden="true" />
                </div>
                <h3 className="h3 text-ink mb-2">{t.title}</h3>
                <p className="body text-muted">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* iOS & Android */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-labelledby="platformen-titel">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader id="platformen-titel" title="iOS én Android" intro="Wij bouwen uw app voor beide platformen zodat u het maximale bereik heeft. Eén codebase, twee platformen, één prijs." />
        </div>
      </section>

      {/* Proces */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-labelledby="proces-titel">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeader id="proces-titel" title="Ons proces" />
          <ol className="flex flex-wrap justify-center gap-4">
            {['Intake', 'Ontwerp', 'Ontwikkeling', 'Testing', 'Lancering', 'Beheer'].map((s, i) => (
              <li key={s} className="flex items-center gap-2">
                <span className="bg-brand-strong text-white size-10 rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</span>
                <span className="font-semibold text-sm text-ink">{s}</span>
                {i < 5 && <span className="text-muted" aria-hidden="true">→</span>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* App laten maken per stad */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-labelledby="steden-titel">
        <div className="max-w-5xl mx-auto">
          <SectionHeader id="steden-titel" title="App laten maken per stad en regio" intro="Wij bouwen apps voor ondernemers door heel Nederland. Bekijk de mogelijkheden voor uw stad of regio." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {steden.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex min-h-12 items-center justify-between gap-2 rounded-2xl border border-line bg-bg px-5 py-4 font-semibold text-ink shadow-sm transition-all hover:border-brand-strong hover:text-brand-strong hover:shadow-md"
              >
                {s.label}
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Faq items={faq} className="bg-surface" />

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Klaar om uw app te laten bouwen?</h2>
          <Link href="/contact" className={buttonVariants({ size: 'lg', className: 'mt-8' })}>
            Neem contact op
          </Link>
        </div>
      </section>
    </>
  )
}
