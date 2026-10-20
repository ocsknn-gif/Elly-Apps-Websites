import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Faq } from '@/components/home/Faq'

export const metadata: Metadata = {
  title: 'App laten maken Tilburg | Elly Apps',
  description: 'App laten maken in Tilburg? Elly Apps bouwt professionele web-apps voor MKB-bedrijven in Tilburg en Midden-Brabant. AI-gedreven ontwikkeling, vaste prijs.',
  alternates: { canonical: 'https://elly-apps.nl/apps/tilburg' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/apps/tilburg',
    title: 'App laten maken Tilburg | Elly Apps',
    description: 'App laten maken in Tilburg? Elly Apps bouwt professionele web-apps voor MKB-bedrijven in Tilburg en Midden-Brabant. AI-gedreven ontwikkeling, vaste prijs.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App laten maken Tilburg | Elly Apps',
    description: 'App laten maken in Tilburg? Elly Apps bouwt professionele web-apps voor MKB-bedrijven in Tilburg en Midden-Brabant. AI-gedreven ontwikkeling, vaste prijs.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elly Apps — App laten maken Tilburg',
  url: 'https://elly-apps.nl/apps/tilburg',
  areaServed: { '@type': 'City', name: 'Tilburg' },
  description: 'Professionele web-apps voor MKB-bedrijven in Tilburg en Midden-Brabant.',
}

const faqItems = [
  { q: 'Wat kost een app laten maken in Tilburg?', a: 'De kosten zijn afhankelijk van het type en de complexiteit van de app. Wij werken met een transparante vaste prijs. Neem contact op voor een vrijblijvende offerte op maat.' },
  { q: 'Kunnen jullie ook samenwerken met studenten of interns?', a: 'Wij bouwen onze apps zelf — geen studenten of interns op productieprojecten. U krijgt altijd ervaren ontwikkelaars die verantwoordelijk zijn voor kwaliteit en oplevering.' },
  { q: 'Heeft Tilburg specifieke voordelen als vestigingsplaats voor app-ontwikkeling?', a: 'Tilburg heeft een sterke creatieve sector en een groeiend tech-ecosysteem, mede dankzij Tilburg University en Fontys. Dat betekent dat er veel innovatieve bedrijven zijn die open staan voor digitale oplossingen.' },
  { q: 'Hoe verloopt het kennismakingsgesprek?', a: 'Het kennismakingsgesprek duurt 30-45 minuten en vindt online of op locatie plaats. We bespreken uw wensen, processen en budget. U ontvangt binnen 48 uur een offerte.' },
]

export default function AppTilburgPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a }
        }))
      }) }} />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Tilburg</p>
          <h1 className="h1 text-ink">App laten maken in Tilburg</h1>
          <p className="body-lg text-muted mt-4">Professionele web-apps voor ondernemers in Tilburg en Midden-Brabant. AI-gedreven ontwikkeling, vaste prijs en volledig ontzorgd.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>Tilburg is een stad in transitie. Van industriestad naar innovatieve kenniseconomie — de stad heeft de afgelopen jaren een indrukwekkende transformatie doorgemaakt. Met Tilburg University, Fontys Hogescholen en een groeiend aantal tech-bedrijven is Tilburg uitgegroeid tot een van de meest dynamische steden van Brabant. Ondernemers in Tilburg zijn ambitieus en zoeken naar manieren om hun bedrijf te digitaliseren en te laten groeien.</p>
          <h2 className="h2 text-ink pt-6">App ontwikkeling in Tilburg: wat heeft u nodig?</h2>
          <p>Elly Apps bouwt maatwerk apps voor Tilburgse ondernemers in alle sectoren. Of u nu een productiebedrijf bent dat een voorraadbeheer-app wil, een zorginstelling die een patiëntportaal zoekt, of een retailer die een loyaliteitsprogramma wil digitaliseren — wij hebben de expertise om het te bouwen. Wij beginnen altijd met een uitgebreide analyse van uw situatie, zodat de app die wij opleveren perfect aansluit op uw behoeften.</p>
          <h2 className="h2 text-ink pt-6">App ontwikkelaar Tilburg: wat onderscheidt Elly Apps?</h2>
          <p>Er zijn veel app-ontwikkelaars actief in en rondom Tilburg. Wat Elly Apps onderscheidt is onze combinatie van technische diepgang, AI-expertise en betaalbaarheid. Wij werken niet met uurtarieven maar met een vaste projectprijs — zodat u precies weet wat u betaalt en wat u krijgt. Bovendien integreren wij standaard AI-functionaliteiten in onze apps, waardoor uw applicatie niet alleen vandaag werkt, maar ook toekomstbestendig is.</p>
          <h2 className="h2 text-ink pt-6">Van idee naar werkende app in 6 stappen</h2>
          <p>Ons proces is helder en transparant: (1) Kennismakingsgesprek — wij leren uw bedrijf kennen. (2) Analyse en ontwerp — wij maken een functioneel ontwerp. (3) Ontwikkeling — wij bouwen de app in sprints. (4) Testen — wij testen uitgebreid voor u. (5) Lancering — wij begeleiden de go-live. (6) Beheer — wij houden alles draaiende. Elke stap is helder en u wordt betrokken bij alle belangrijke beslissingen.</p>
          <h2 className="h2 text-ink pt-6">Interne koppelingen en systeemintegraties</h2>
          <p>Veel Tilburgse bedrijven werken al met bestaande softwarepakketten — denk aan Exact, AFAS, SAP of Salesforce. Wij kunnen uw nieuwe app naadloos koppelen aan deze systemen, zodat data automatisch gesynchroniseerd wordt en u niet dubbel hoeft te werken. API-integraties zijn een kerncompetentie van Elly Apps.</p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {['Maatwerk apps voor alle sectoren', 'AI-functionaliteiten standaard', 'Koppelingen met Exact, AFAS, SAP', 'Gemiddeld binnen 4-6 weken live', 'Vaste prijs, geen uurtarieven', 'Volledig beheer na lancering'].map((f) => (
            <div key={f} className="flex items-center gap-3 body text-ink">
              <CheckCircleIcon className="size-5 text-brand shrink-0" aria-hidden="true" />
              {f}
            </div>
          ))}
        </div>
      </section>

      <Faq items={faqItems} title="Veelgestelde vragen over app ontwikkeling in Tilburg" className="bg-bg" />

      {/* Gerelateerde pagina's */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="h2 text-ink mb-6">Gerelateerde pagina&apos;s</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'App laten maken — overzicht', href: '/diensten/apps' },
              { label: 'Website laten maken in Tilburg', href: '/stad/tilburg' },
              { label: 'App ontwikkelaar Tilburg', href: '/apps/app-ontwikkelaar-tilburg' },
              { label: 'App laten maken Breda', href: '/apps/breda' },
            ].map((r) => (
              <Link key={r.href} href={r.href} className="flex min-h-12 items-center gap-2 rounded-2xl border border-line bg-bg px-4 py-3 font-semibold text-ink shadow-sm transition-all hover:border-brand-strong hover:text-brand-strong hover:shadow-md">
                <span className="text-brand" aria-hidden="true">→</span> {r.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">App laten bouwen in Tilburg?</h2>
          <p className="body-lg text-navy-muted mt-4">Vertel ons uw idee en ontvang binnen 24 uur een vrijblijvende terugkoppeling.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className={buttonVariants({ size: 'lg' })}>Gratis kennismakingsgesprek</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
