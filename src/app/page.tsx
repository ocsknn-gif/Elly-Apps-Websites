import Link from 'next/link'
import { Hero } from '@/components/home/Hero'
import { Goals } from '@/components/home/Goals'
import { Benefits } from '@/components/home/Benefits'
import { Services } from '@/components/home/Services'
import { Branches } from '@/components/home/Branches'
import { Pricing } from '@/components/home/Pricing'
import { Steps } from '@/components/home/Steps'
import { Expectations } from '@/components/home/Expectations'
import { websitePakketten, type WebsitePakket } from '@/lib/pakketten'

// ─── Schema.org JSON-LD ───────────────────────────────────────────────────────

// Pakketinhoud komt uit src/lib/pakketten.ts, zodat schema en zichtbare prijzen gelijk blijven
const schemaNamen: Record<WebsitePakket['naam'], string> = {
  Starter: 'Professionele website',
  Groei: 'Website met lokale SEO',
  Pro: 'Uitgebreide website met SEO-strategie',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  name: 'Elly Apps & Websites',
  telephone: '+31636278515',
  email: 'info@elly-apps.nl',
  url: 'https://elly-apps.nl',
  logo: 'https://elly-apps.nl/elly-logo.png',
  description: 'Elly Apps bouwt en beheert professionele, SEO-geoptimaliseerde websites voor het Nederlandse MKB. AI-gedreven aanpak, vaste maandprijs vanaf €49.',
  areaServed: {
    '@type': 'Country',
    name: 'Netherlands',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Aalsmeer',
    addressRegion: 'Noord-Holland',
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
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Website en SEO pakketten',
    itemListElement: websitePakketten.map((p) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: `${p.naam} pakket — ${schemaNamen[p.naam]}`,
        description: `${p.features.join(', ')}. ${p.eenmalig}.`,
      },
      price: String(p.maandprijs ?? 0),
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: String(p.maandprijs ?? 0),
        priceCurrency: 'EUR',
        unitText: p.maandprijs === null ? 'op aanvraag' : 'per maand',
      },
    })),
  },
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
      <Hero />

      {/* ── SECTIE 2 — Wat wilt u bereiken? ── */}
      <Goals />

      {/* ── SECTIE 2b — Voordelen ── */}
      <Benefits />

      {/* ── SECTIE 3 — Diensten ── */}
      <Services />

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

      {/* ── SECTIE 3c — Branches ── */}
      <Branches />

      {/* ── SECTIE 4 — Prijzen ── */}
      <Pricing />

      {/* ── SECTIE 5 — Zo werken wij ── */}
      <Steps />

      {/* ── SECTIE 5b — Wat u van ons kunt verwachten ── */}
      <Expectations />

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
