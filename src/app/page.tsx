import Link from 'next/link'
import {
  GlobeIcon,
  SmartphoneIcon,
  SearchIcon,
  TrendingUpIcon,
  CheckCircleIcon,
  ClockIcon,
  ShieldCheckIcon,
  MapPinIcon,
  StarIcon,
} from 'lucide-react'

// ─── Schema.org JSON-LD ───────────────────────────────────────────────────────

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elly Apps',
  telephone: '+31636278515',
  email: 'info@elly-apps.nl',
  url: 'https://elly-apps.nl',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Amsterdam',
    addressCountry: 'NL',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
}

const faqItems = [
  {
    q: 'Wat kost een website laten maken bij Elly Apps?',
    a: 'Bij Elly Apps betaalt u een vaste maandprijs zonder verborgen kosten. Het Starter pakket begint vanaf €49 per maand met een eenmalige setup van €299. Het Groei pakket kost €199 per maand met een eenmalige setup van €499. Het Pro pakket heeft een eenmalige setup van €799 met een maandprijs op aanvraag.',
  },
  {
    q: 'Hoe snel wordt mijn website opgeleverd?',
    a: 'Wij leveren uw website gemiddeld binnen twee weken op. Na een gratis kennismaking gaan wij direct aan de slag met het ontwerp en de technische opzet.',
  },
  {
    q: 'Moet ik zelf iets doen aan de website?',
    a: 'Nee, wij ontzorgen u volledig. Van ontwerp tot lancering tot maandelijks onderhoud — wij regelen alles.',
  },
  {
    q: 'Wordt mijn website gevonden op Google?',
    a: 'Ja. Alle websites die wij bouwen zijn standaard geoptimaliseerd voor Google. In het Groei en Pro pakket voegen we ook lokale SEO en Google Business optimalisatie toe.',
  },
  {
    q: 'Kan ik mijn huidige website laten verbeteren?',
    a: 'Ja, dat kan. Wij analyseren uw huidige website gratis via onze websitescan en adviseren u over de beste aanpak.',
  },
  {
    q: 'Zit ik vast aan een lang contract?',
    a: 'Wij hanteren een minimale contractduur van 1 jaar. Na het eerste jaar wordt het contract automatisch verlengd.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── SECTIE 1 — Hero ── */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Linker kolom — tekst */}
            <div>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-[#1a1a2e] leading-tight">
                Meer klanten via Google
              </h1>
              <p className="text-4xl sm:text-5xl font-extrabold italic text-[#E53E3E] mt-2 leading-tight">
                zonder gedoe.
              </p>
              <p className="mt-6 text-lg text-gray-600 max-w-lg">
                Elly Apps bouwt en beheert professionele websites voor het MKB.
                SEO-geoptimaliseerd, betaalbaar en volledig ontzorgd. Vanaf €49 per maand.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/gratis-websitescan"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#E53E3E] text-white font-semibold text-base hover:bg-[#C53030] transition-colors shadow-md"
                >
                  Ja, ik wil mijn gratis websitescan
                </Link>
                <Link
                  href="/prijzen"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold text-base hover:bg-red-50 transition-colors"
                >
                  Bekijk onze pakketten
                </Link>
              </div>

              <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium text-gray-600">
                {['✓ Gratis', '✓ Vrijblijvend', '✓ Binnen 24 uur reactie'].map((b) => (
                  <span key={b}>{b}</span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                {[
                  { icon: <ShieldCheckIcon className="size-4 text-[#E53E3E]" />, label: '100% tevredenheidsgarantie' },
                  { icon: <StarIcon className="size-4 text-[#E53E3E]" />, label: 'Google Partner' },
                  { icon: <StarIcon className="size-4 text-[#E53E3E]" />, label: 'Trustpilot' },
                ].map((t) => (
                  <div key={t.label} className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded-full px-3 py-1.5">
                    {t.icon}
                    {t.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Rechter kolom — device mockup placeholder */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm h-72 bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm font-medium">
                Website mockup
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats balk ── */}
      <section className="bg-[#f7f7f7] py-8 px-4 sm:px-6 lg:px-8 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { icon: <ClockIcon className="size-5 text-[#E53E3E] mx-auto mb-1" />, stat: 'Gemiddeld binnen 2 weken online' },
              { icon: <StarIcon className="size-5 text-[#E53E3E] mx-auto mb-1" />, stat: '15+ jaar ervaring' },
              { icon: <ShieldCheckIcon className="size-5 text-[#E53E3E] mx-auto mb-1" />, stat: '100% tevredenheidsgarantie' },
              { icon: <MapPinIcon className="size-5 text-[#E53E3E] mx-auto mb-1" />, stat: 'Heel Nederland' },
            ].map((s) => (
              <div key={s.stat}>
                {s.icon}
                <p className="text-sm font-semibold text-[#1a1a2e]">{s.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTIE 2 — USPs ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="inline-flex items-center justify-center size-12 rounded-full bg-red-50 mb-4">
                <CheckCircleIcon className="size-6 text-[#E53E3E]" />
              </div>
              <h2 className="text-xl font-bold text-[#1a1a2e] mb-2">Betaalbaar vanaf €49/maand</h2>
              <p className="text-gray-600 text-sm">Vaste lage maandprijs, geen verborgen kosten.</p>
            </div>
            <div className="text-center p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="inline-flex items-center justify-center size-12 rounded-full bg-red-50 mb-4">
                <ClockIcon className="size-6 text-[#E53E3E]" />
              </div>
              <h2 className="text-xl font-bold text-[#1a1a2e] mb-2">Binnen 2 weken live</h2>
              <p className="text-gray-600 text-sm">Van kennismaking tot lancering in gemiddeld 14 dagen.</p>
            </div>
            <div className="text-center p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="inline-flex items-center justify-center size-12 rounded-full bg-red-50 mb-4">
                <ShieldCheckIcon className="size-6 text-[#E53E3E]" />
              </div>
              <h2 className="text-xl font-bold text-[#1a1a2e] mb-2">Volledig ontzorgd</h2>
              <p className="text-gray-600 text-sm">Hosting, updates, beveiliging — wij regelen alles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTIE 3 — Diensten ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1a1a2e] mb-12">Onze diensten</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <GlobeIcon className="size-7 text-[#E53E3E]" />, title: 'Websites', description: 'Professionele, snelle en SEO-geoptimaliseerde websites die bezoekers omzetten in klanten.' },
              { icon: <SmartphoneIcon className="size-7 text-[#E53E3E]" />, title: 'Apps', description: 'Maatwerk webapplicaties en mobiele apps die aansluiten op uw bedrijfsprocessen.' },
              { icon: <SearchIcon className="size-7 text-[#E53E3E]" />, title: 'SEO', description: 'Zoekmachineoptimalisatie zodat uw bedrijf lokaal en nationaal gevonden wordt op Google.' },
              { icon: <TrendingUpIcon className="size-7 text-[#E53E3E]" />, title: 'Google Ads', description: 'Gerichte advertentiecampagnes die direct meer verkeer en leads genereren.' },
            ].map((dienst) => (
              <div key={dienst.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="mb-4">{dienst.icon}</div>
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">{dienst.title}</h3>
                <p className="text-sm text-gray-600">{dienst.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTIE 4 — Prijzen ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1a1a2e] mb-4">Transparante prijzen</h2>
          <p className="text-center text-gray-600 mb-12">Geen verrassingen. Vaste maandprijs.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Starter */}
            <div className="flex flex-col rounded-2xl border border-gray-200 p-8 shadow-sm">
              <p className="text-lg font-bold text-[#1a1a2e]">Starter</p>
              <p className="mt-2 text-4xl font-extrabold text-[#E53E3E]">
                €49<span className="text-lg font-medium text-gray-500">/mnd</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">Eenmalige setup: €299</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-700 flex-1">
                {['Professionele website', 'Hosting inbegrepen', 'SSL-certificaat', 'Basis SEO'].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-8 block text-center py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold hover:bg-red-50 transition-colors">
                Aan de slag
              </Link>
            </div>
            {/* Groei */}
            <div className="flex flex-col rounded-2xl border-2 border-[#E53E3E] p-8 shadow-lg relative">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E53E3E] text-white text-xs font-bold px-4 py-1 rounded-full">
                Meest gekozen
              </span>
              <p className="text-lg font-bold text-[#1a1a2e]">Groei</p>
              <p className="mt-2 text-4xl font-extrabold text-[#E53E3E]">
                €199<span className="text-lg font-medium text-gray-500">/mnd</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">Eenmalige setup: €499</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-700 flex-1">
                {['Alles van Starter', 'Lokale SEO', 'Google Business optimalisatie', 'Maandelijks rapport'].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-8 block text-center py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">
                Aan de slag
              </Link>
            </div>
            {/* Pro */}
            <div className="flex flex-col rounded-2xl border border-gray-200 p-8 shadow-sm">
              <p className="text-lg font-bold text-[#1a1a2e]">Pro</p>
              <p className="mt-2 text-4xl font-extrabold text-[#E53E3E]">Op aanvraag</p>
              <p className="text-sm text-gray-500 mt-1">Eenmalige setup: €799</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-700 flex-1">
                {['Maatwerk website of app', 'Geavanceerde SEO', 'Dedicated support', 'Google Ads beheer'].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-8 block text-center py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold hover:bg-red-50 transition-colors">
                Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTIE 5 — Werkwijze ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f7f7f7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1a1a2e] mb-12">Zo werken wij</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Gratis kennismaking', description: 'We bespreken uw wensen en doelen zonder verplichtingen.' },
              { step: '2', title: 'Ontwerp & bouw', description: 'Wij ontwerpen en bouwen uw website op maat.' },
              { step: '3', title: 'Review & lancering', description: 'U keurt goed, wij lanceren — binnen 2 weken.' },
              { step: '4', title: 'Beheer & groei', description: 'Wij beheren uw website en helpen u groeien.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center size-12 rounded-full bg-[#E53E3E] text-white font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-[#1a1a2e] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTIE 6 — FAQ ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1a1a2e] mb-10">Veelgestelde vragen</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.q} className="group rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-semibold text-[#1a1a2e] list-none select-none hover:bg-gray-50 transition-colors">
                  {item.q}
                  <span className="shrink-0 text-[#E53E3E] text-xl leading-none group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTIE 7 — CTA banner ── */}
      <section className="bg-[#E53E3E] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Klaar om gevonden te worden?</h2>
          <Link
            href="/gratis-websitescan"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-[#E53E3E] font-bold text-lg hover:bg-red-50 transition-colors shadow-md"
          >
            Start met een gratis websitescan
          </Link>
        </div>
      </section>
    </>
  )
}
