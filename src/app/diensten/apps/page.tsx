import type { Metadata } from 'next'
import Link from 'next/link'
import { ShoppingCart, CalendarCheck, Users } from 'lucide-react'

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
  { q: 'Hoe lang duurt het om een app te bouwen?', a: 'Gemiddeld 6–12 weken, afhankelijk van de functionaliteit.' },
  { q: 'Kan ik mijn app later uitbreiden?', a: 'Ja, wij bouwen uw app modulair zodat uitbreidingen altijd mogelijk zijn.' },
  { q: 'Wordt mijn app ook beheerd?', a: 'Ja, wij bieden volledig beheer inclusief updates, bugfixes en nieuwe functies.' },
]

export default function DienstenAppsPage() {
  return (
    <>
      {/* Hero */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professionele app laten maken voor uw bedrijf</h1>
        <p className="text-lg text-gray-600 mb-6">Van bestelapp tot ledenapp — wij bouwen en beheren uw app voor iOS én Android. Volledig op maat, volledig ontzorgd.</p>
        <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">
          Neem contact op
        </Link>
      </div>

      {/* Website vs App */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Website of app — wanneer wat?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-xl p-6 bg-white">
              <h3 className="font-bold text-gray-900 mb-3">Website</h3>
              <p className="text-sm text-gray-600">Ideaal voor informatief, SEO, bereikbaarheid en online zichtbaarheid. Toegankelijk via elke browser.</p>
            </div>
            <div className="border rounded-xl p-6 bg-white">
              <h3 className="font-bold text-gray-900 mb-3">App</h3>
              <p className="text-sm text-gray-600">Ideaal voor terugkerende interactie: bestellingen, reserveringen, ledenportalen. Direct op het startscherm.</p>
            </div>
          </div>
        </div>
      </div>

      {/* App types */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">App types</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {appTypes.map((t) => (
            <div key={t.title} className="border rounded-xl p-6 hover:border-[#E53E3E] transition-colors">
              <div className="mb-3"><t.Icon size={24} color="#DC2626" /></div>
              <h3 className="font-bold text-gray-900 mb-2">{t.title}</h3>
              <p className="text-sm text-gray-600">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* iOS & Android */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">iOS én Android</h2>
          <p className="text-gray-600">Wij bouwen uw app voor beide platformen zodat u het maximale bereik heeft. Eén codebase, twee platformen, één prijs.</p>
        </div>
      </div>

      {/* Process */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Ons proces</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['Intake', 'Ontwerp', 'Ontwikkeling', 'Testing', 'Lancering', 'Beheer'].map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className="bg-[#E53E3E] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</div>
              <span className="font-semibold text-sm text-gray-900">{s}</span>
              {i < 5 && <span className="text-gray-400">→</span>}
            </div>
          ))}
        </div>
      </div>

      {/* App laten maken per stad */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">App laten maken per stad en regio</h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">Wij bouwen apps voor ondernemers door heel Nederland. Bekijk de mogelijkheden voor uw stad of regio.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steden.map((s) => (
            <Link key={s.href} href={s.href} className="border rounded-xl p-5 font-semibold text-gray-900 hover:border-[#E53E3E] hover:text-[#E53E3E] transition-colors">
              {s.label} →
            </Link>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Veelgestelde vragen</h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details key={i} className="border rounded-xl p-4 bg-white">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.q}<span className="text-[#E53E3E] ml-2">+</span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#E53E3E] py-16 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Klaar om uw app te laten bouwen?</h2>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-[#E53E3E] font-semibold hover:bg-gray-100 transition-colors">
            Neem contact op
          </Link>
        </div>
      </div>
    </>
  )
}
