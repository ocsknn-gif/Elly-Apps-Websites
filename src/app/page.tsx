import Image from 'next/image'
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
    a: "Bij Elly Apps betaalt u een vaste maandprijs zonder verborgen kosten. Het Starter pakket begint vanaf €49 per maand met een eenmalige setup van €299 — ideaal voor zzp'ers en kleine ondernemers die een professionele online aanwezigheid willen. Het Groei pakket kost €199 per maand met een eenmalige setup van €499 en bevat uitgebreide SEO en Google Business optimalisatie. Voor maatwerk websites en apps is het Pro pakket beschikbaar, met een eenmalige setup vanaf €799 en een maandprijs op aanvraag.",
  },
  {
    q: 'Hoe snel wordt mijn website opgeleverd?',
    a: 'Wij leveren uw website gemiddeld binnen twee weken op. Na een gratis kennismaking en een kort intakegesprek gaan wij direct aan de slag met het ontwerp en de technische opzet. U ontvangt regelmatige updates en heeft altijd inzicht in de voortgang.',
  },
  {
    q: 'Moet ik zelf iets doen aan de website?',
    a: 'Nee, wij ontzorgen u volledig. Van het eerste ontwerp tot de lancering en alle maandelijkse updates daarna — wij regelen alles. U hoeft geen technische kennis te hebben en hoeft zich nergens druk om te maken.',
  },
  {
    q: 'Wordt mijn website gevonden op Google?',
    a: 'Ja. Alle websites die wij bouwen zijn technisch geoptimaliseerd voor zoekmachines. Dit betekent correcte HTML-structuur, snelle laadtijden, mobielvriendelijk ontwerp en relevante metadata. In het Groei en Pro pakket voegen we ook actieve SEO toe, waaronder lokale zoekmachineoptimalisatie en Google Business Profile optimalisatie.',
  },
  {
    q: 'Kan ik mijn huidige website laten verbeteren?',
    a: 'Ja, dat kan. Wij analyseren uw huidige website gratis via onze websitescan. Daarin kijken we naar laadtijd, SEO-score, technische fouten en mobiele weergave. Op basis van de resultaten adviseren wij u over de beste aanpak — of dat nu een verbetering is of een compleet nieuwe website.',
  },
  {
    q: 'Zit ik vast aan een lang contract?',
    a: 'Wij hanteren een minimale contractduur van 1 jaar. Na het eerste jaar wordt het contract automatisch maandelijks verlengd. Zo houden wij de service betaalbaar en zorgen wij dat wij ons kunnen blijven inzetten voor uw online groei.',
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
                Elly Apps bouwt en beheert professionele websites voor het Nederlandse MKB.
                Volledig SEO-geoptimaliseerd, snel, veilig en voor een vaste maandprijs.
                Wij zorgen dat uw bedrijf gevonden wordt op Google — zodat u zich kunt focussen op wat u echt doet.
                Geen technische kennis nodig. Geen verborgen kosten. Alleen resultaat.
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
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero-image.jpg"
                  alt="SEO dashboard op laptop — professionele website laten maken"
                  fill
                  className="object-cover object-center"
                  priority
                />
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
              { icon: <GlobeIcon className="size-7 text-[#E53E3E]" />, title: 'Websites', description: 'Wij bouwen professionele websites die niet alleen mooi zijn, maar ook snel laden en hoog scoren in Google. Elke website is technisch SEO-geoptimaliseerd, mobielvriendelijk en voorzien van de juiste structuur om bezoekers om te zetten in klanten.' },
              { icon: <SmartphoneIcon className="size-7 text-[#E53E3E]" />, title: 'Apps', description: 'Van een eenvoudige webapplicatie tot een volledig maatwerk platform — wij bouwen digitale oplossingen die aansluiten op uw bedrijfsprocessen en meegroeien met uw organisatie.' },
              { icon: <SearchIcon className="size-7 text-[#E53E3E]" />, title: 'SEO', description: 'Met zoekmachineoptimalisatie zorgen wij dat uw website structureel beter scoort in Google. Wij analyseren uw website, optimaliseren de technische basis, versterken uw content en bouwen autoriteit op zodat u duurzaam meer bezoekers trekt.' },
              { icon: <TrendingUpIcon className="size-7 text-[#E53E3E]" />, title: 'Google Ads', description: 'Wij beheren gerichte Google Ads campagnes die precies de juiste mensen bereiken op het juiste moment. Van zoekwoord strategie tot advertentieteksten en biedstrategie — volledig beheerd door ons.' },
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

      {/* ── SECTIE 3b — Waarom Elly Apps ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1a1a2e] mb-6">
            Waarom MKB-bedrijven kiezen voor Elly Apps
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Een professionele website laten maken hoeft niet ingewikkeld of duur te zijn.
            Wij combineren technische kwaliteit met betaalbaarheid — speciaal voor het Nederlandse MKB.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-[#f7f7f7] p-8">
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Gebouwd om gevonden te worden</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Elke website die wij bouwen is van de grond af aan geoptimaliseerd voor Google.
                Wij zorgen voor een technisch correcte structuur, snelle laadtijden en relevante content —
                de drie pijlers die bepalen hoe hoog uw website scoort in de zoekresultaten.
                Zo trekt uw website structureel meer bezoekers zonder dat u betaalt voor elke klik.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f7f7] p-8">
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Volledig ontzorgd, vaste prijs</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Veel MKB-ondernemers hebben geen tijd om zich bezig te houden met websites,
                updates en Google-algoritmes. Wij nemen dat volledig over.
                Voor een vaste maandprijs zorgen wij dat uw website altijd actueel, snel en veilig is.
                Geen verrassingen op de factuur, geen technische zorgen.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f7f7] p-8">
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Voor elk type bedrijf</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wij bouwen websites voor zzp&apos;ers, kleine bedrijven en groeiende MKB-ondernemingen
                in uiteenlopende sectoren — van loodgieters en kappers tot tandartsen,
                fysiotherapeuten en online webshops. Elk bedrijf verdient een professionele online aanwezigheid.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f7f7] p-8">
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Resultaat dat meetbaar is</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wij leveren geen website en verdwijnen. In het Groei en Pro pakket ontvangt u
                maandelijks een helder rapport met uw zoekposities, websiteverkeer en
                aanbevelingen om verder te groeien. Transparantie is de basis van onze samenwerking.
              </p>
            </div>
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
              { step: '1', title: 'Gratis kennismaking', description: 'We plannen een gratis kennismakingsgesprek en bespreken uw doelen, wensen en budget. Geen verplichtingen, geen verkooppraat — gewoon een eerlijk gesprek.' },
              { step: '2', title: 'Ontwerp & bouw', description: 'Op basis van uw wensen ontwerpen en bouwen wij een website die past bij uw bedrijf en doelgroep. U wordt op de hoogte gehouden gedurende het hele proces.' },
              { step: '3', title: 'Review & lancering', description: 'U bekijkt het eindresultaat en geeft feedback. Na uw goedkeuring gaan we live. Gemiddeld staat uw website binnen 2 weken online.' },
              { step: '4', title: 'Beheer & groei', description: 'Wij nemen het beheer volledig uit handen. Updates, beveiliging, technische monitoring en maandelijkse rapportages — zodat uw website altijd optimaal presteert.' },
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
          <h2 className="text-3xl font-bold text-white mb-6">Klaar om gevonden te worden op Google?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Vraag een gratis websitescan aan en ontdek in 24 uur wat er beter kan aan uw online aanwezigheid.
          </p>
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
