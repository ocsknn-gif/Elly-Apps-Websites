import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon, TrendingUpIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Portfolio — Onze websites & resultaten | Elly Apps',
  description: 'Bekijk onze gerealiseerde websites voor MKB-bedrijven. Loodgieters, tandartsen, restaurants en meer — allemaal beter vindbaar in Google.',
  alternates: { canonical: 'https://elly-apps.nl/portfolio' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/portfolio',
    title: 'Portfolio — Onze websites & resultaten | Elly Apps',
    description: 'Bekijk onze gerealiseerde websites voor MKB-bedrijven. Loodgieters, tandartsen, restaurants en meer — allemaal beter vindbaar in Google.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio — Onze websites & resultaten | Elly Apps',
    description: 'Bekijk onze gerealiseerde websites voor MKB-bedrijven. Loodgieters, tandartsen, restaurants en meer — allemaal beter vindbaar in Google.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Portfolio Elly Apps & Websites',
  url: 'https://elly-apps.nl/portfolio',
  description: 'Overzicht van gerealiseerde websites voor MKB-bedrijven door Elly Apps.',
}

const cases = [
  {
    branche: 'Loodgieter',
    naam: 'Loodgietersbedrijf Amsterdam',
    resultaat: '+340% meer organisch verkeer in 6 maanden',
    beschrijving: 'Volledig nieuwe website met lokale SEO-optimalisatie, spoedaanvraag-functionaliteit en Google Business koppeling. De klant ontvangt nu dagelijks meerdere online aanvragen.',
    features: ['Lokale SEO', 'Spoedaanvraag knop', 'Google Business optimalisatie'],
  },
  {
    branche: 'Tandarts',
    naam: 'Tandartspraktijk Utrecht',
    resultaat: 'Van pagina 4 naar positie 2 op "tandarts Utrecht"',
    beschrijving: 'Migratie van verouderde website naar moderne Next.js site. Volledige herstructurering van content, schema-markup voor medische praktijken en online afspraken-integratie.',
    features: ['Online afspraken', 'Schema.org medisch', 'Mobielvriendelijk'],
  },
  {
    branche: 'Restaurant',
    naam: 'Italiaans restaurant Rotterdam',
    resultaat: '62% meer tafelbezettingen via de website',
    beschrijving: 'Sfeervol ontwerp met geïntegreerd reserveringssysteem, digitale menukaart en Google-reviews widget. Volledig beheerd inclusief seizoensgebonden menu-updates.',
    features: ['Online reserveringen', 'Digitale menukaart', 'Google-reviews widget'],
  },
  {
    branche: 'Kapper',
    naam: 'Kapperszaak Den Haag',
    resultaat: '80% van de afspraken via website (was: telefonisch)',
    beschrijving: 'Stijlvolle website met geïntegreerd online boekingssysteem. Klanten boeken nu direct hun afspraak online, wat de werkdruk op de zaak sterk vermindert.',
    features: ['Online boekingssysteem', 'Diensten & prijzenlijst', 'Instagram-koppeling'],
  },
  {
    branche: 'Fysiotherapeut',
    naam: 'Fysiotherapiepraktijk Eindhoven',
    resultaat: 'Praktijk volledig vol via organisch verkeer',
    beschrijving: "Nieuwe website met uitgebreide informatiepagina's per behandeling, online intakeformulier en zorgverzekering-checker. Top 3 positie op alle relevante zoekwoorden.",
    features: ["Behandelingspagina's", 'Online intake', 'Verzekering-checker'],
  },
  {
    branche: 'Bouwbedrijf',
    naam: 'Aannemersbedrijf Noord-Holland',
    resultaat: '3x meer offerteaanvragen na website-lancering',
    beschrijving: "Professionele portfolio-website met projectfoto's, referenties en uitgebreid offerteformulier. Sterk verbeterde betrouwbaarheidsuitstraling leidde direct tot meer kwalitatieve leads.",
    features: ['Projectportfolio', 'Offerteformulier', 'Referenties sectie'],
  },
]

export default function PortfolioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Portfolio</p>
          <h1 className="h1 text-ink mb-4">Onze gerealiseerde websites</h1>
          <p className="body-lg text-muted">Van loodgieter tot restaurant — wij bouwen websites die écht resultaat opleveren.</p>
        </div>
      </section>

      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 text-center">
            {[
              { getal: '50+', label: 'Websites gebouwd' },
              { getal: '92%', label: 'Klanten zien meer verkeer' },
              { getal: '8', label: 'Branches bediend' },
              { getal: '4.9★', label: 'Gemiddelde beoordeling' },
            ].map((s) => (
              <div key={s.label} className="border border-line bg-surface rounded-2xl p-5">
                <p className="h2 text-brand-strong">{s.getal}</p>
                <p className="text-sm text-muted mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6 md:space-y-8">
            {cases.map((c) => (
              <div key={c.naam} className="border border-line bg-bg rounded-2xl p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-block text-xs font-semibold text-brand-strong uppercase tracking-wide mb-1">{c.branche}</span>
                    <h2 className="h3 text-ink">{c.naam}</h2>
                  </div>
                  <div className="shrink-0 inline-flex items-center gap-2 self-start bg-brand-tint rounded-xl px-4 py-2 text-sm font-semibold text-ink"><TrendingUpIcon className="size-4 text-brand-strong shrink-0" aria-hidden="true" />{c.resultaat}</div>
                </div>
                <p className="body text-muted mb-4">{c.beschrijving}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {c.features.map((f) => (
                    <div key={f} className="flex items-center gap-1.5 text-sm text-muted">
                      <CheckCircleIcon className="size-4 text-brand shrink-0" aria-hidden="true" />{f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted">Bovenstaande cases zijn geanonimiseerd. Op aanvraag delen wij referenties met contactgegevens.</p>
        </div>
      </section>

      <section className="section px-4 sm:px-6 lg:px-8 bg-navy">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="h2 text-on-navy">Ook zulke resultaten voor uw bedrijf?</h2>
          <p className="body-lg text-navy-muted mt-4 mb-8">Vraag een gratis websitescan aan en ontdek uw kansen online.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>Gratis websitescan</Link>
            <Link href="/contact" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Neem contact op</Link>
          </div>
        </div>
      </section>
    </>
  )
}
