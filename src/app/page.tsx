import { Hero } from '@/components/home/Hero'
import { Goals } from '@/components/home/Goals'
import { Benefits } from '@/components/home/Benefits'
import { Services } from '@/components/home/Services'
import { Branches } from '@/components/home/Branches'
import { Pricing } from '@/components/home/Pricing'
import { Steps } from '@/components/home/Steps'
import { Expectations } from '@/components/home/Expectations'
import { Faq } from '@/components/home/Faq'
import { About } from '@/components/home/About'
import { ClosingCta } from '@/components/home/ClosingCta'
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

      {/* ── SECTIE 3c — Branches ── */}
      <Branches />

      {/* ── SECTIE 4 — Prijzen ── */}
      <Pricing />

      {/* ── SECTIE 5 — Zo werken wij ── */}
      <Steps />

      {/* ── SECTIE 5b — Wat u van ons kunt verwachten ── */}
      <Expectations />

      {/* ── SECTIE 6 — Veelgestelde vragen (zelfde items als faqSchema) ── */}
      <Faq items={faqItems} />

      {/* ── SECTIE 6b — Website laten maken voor het MKB (korte SEO-tekst) ── */}
      <About />

      {/* ── SECTIE 7 — Afsluitende CTA ── */}
      <ClosingCta />
    </>
  )
}
