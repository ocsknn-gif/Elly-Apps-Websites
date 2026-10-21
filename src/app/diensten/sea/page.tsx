import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Faq } from '@/components/home/Faq'

export const metadata: Metadata = {
  title: 'Google Ads voor MKB | SEA & Betaald Adverteren | Elly Apps',
  description: 'Google Ads laten beheren? Elly Apps beheert uw campagnes volledig. Vaste beheerkosten, meetbaar resultaat, geen verborgen kosten. Gratis scan aanvragen.',
  alternates: { canonical: 'https://elly-apps.nl/diensten/sea' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/diensten/sea',
    title: 'Google Ads voor MKB | SEA & Betaald Adverteren | Elly Apps',
    description: 'Google Ads laten beheren? Elly Apps beheert uw campagnes volledig. Vaste beheerkosten, meetbaar resultaat, geen verborgen kosten. Gratis scan aanvragen.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads voor MKB | SEA & Betaald Adverteren | Elly Apps',
    description: 'Google Ads laten beheren? Elly Apps beheert uw campagnes volledig. Vaste beheerkosten, meetbaar resultaat, geen verborgen kosten. Gratis scan aanvragen.',
    images: ['/og-image.png'],
  },
}

const features = [
  'Campagne setup en zoekwoordonderzoek',
  'Advertentieteksten op maat',
  'Bid management en budgetoptimalisatie',
  'Conversietracking instellen',
  'Remarketing campagnes',
  'Maandelijkse rapportage',
  'Geen langetermijncontract',
  'Transparante beheerkosten',
]

const faq = [
  { q: 'Wat is het verschil tussen SEO en Google Ads?', a: 'SEO levert organisch verkeer op de lange termijn. Google Ads (SEA) geeft directe zichtbaarheid in Google, maar u betaalt per klik. Samen vormen ze een krachtige groeistrategie.' },
  { q: 'Wat kost Google Ads beheer bij Elly Apps?', a: 'Onze beheerkosten starten vanaf €199/mnd (Google Ads Starter, met €249 eenmalige opstartkosten). Het advertentiebudget betaalt u direct aan Google — dat is volledig uw keuze en staat los van onze beheerskosten.' },
  { q: 'Hoe snel zie ik resultaat?', a: 'Google Ads campagnes zijn vrijwel direct actief. Na activering verschijnen uw advertenties al binnen enkele uren in de zoekresultaten.' },
  { q: 'Wat als ik mijn campagne wil pauzeren?', a: 'U kunt uw campagne op elk moment pauzeren of stoppen. Er zijn geen minimale looptijden en geen opzegtermijnen bij ons.' },
  { q: 'Beheren jullie ook bestaande Google Ads accounts?', a: 'Ja. Wij nemen graag een bestaand account over, voeren een audit uit en optimaliseren waar nodig. Dit gaat gepaard met een eenmalige analyse.' },
]

// Schema komt uit dezelfde items als de zichtbare FAQ, zodat ze altijd gelijk lopen
const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function DienstenSeaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Diensten</p>
          <h1 className="h1 text-ink">Google Ads — direct zichtbaar in Google, volledig ontzorgd</h1>
          <p className="body-lg text-muted mt-4">SEA-beheer voor MKB-bedrijven die nu al klanten willen. Wij zetten uw campagnes op, optimaliseren dagelijks en rapporteren maandelijks.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>Met Google Ads kan uw bedrijf direct in de zoekresultaten verschijnen — zelfs als uw website nog niet hoog rankt organisch. U betaalt alleen wanneer iemand op uw advertentie klikt. Dat maakt Google Ads een van de meest meetbare vormen van online adverteren.</p>
          <p>Voor MKB-bedrijven is Google Ads bijzonder effectief voor lokale diensten waarbij klanten actief zoeken: loodgieters, kappers, tandartsenpraktijken, rijscholen en meer. Wanneer iemand zoekt naar &ldquo;loodgieter Amsterdam spoed&rdquo; wilt u als eerste zichtbaar zijn.</p>
          <p>Elly Apps beheert uw Google Ads-campagnes volledig. Van het instellen van campagnes en het schrijven van advertentieteksten tot optimalisatie van biedstrategieën en maandelijkse rapportage. U hoeft zelf niets te doen — wij zorgen dat uw budget zo efficiënt mogelijk wordt ingezet.</p>
          <p>Het advertentiebudget betaalt u direct aan Google. Onze beheerkosten zijn transparant en starten vanaf €199 per maand, met €249 eenmalige opstartkosten. Geen verborgen kosten, geen langetermijncontract.</p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f) => (
            <div key={f} className="flex items-center gap-3 body text-ink">
              <CheckCircleIcon className="size-5 text-brand shrink-0" aria-hidden="true" />
              {f}
            </div>
          ))}
        </div>
      </section>

      <Faq items={faq} title="Veelgestelde vragen over Google Ads" className="bg-bg" />

      {/* Meer lezen */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-labelledby="meer-lezen-titel">
        <div className="max-w-4xl mx-auto">
          <h2 id="meer-lezen-titel" className="h3 text-ink mb-6">Meer lezen over Google Ads</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Wat kost Google Ads?', href: '/blog/wat-kost-google-ads' },
              { label: 'Google Ads: zelf doen of uitbesteden?', href: '/blog/google-ads-zelf-of-uitbesteden' },
              { label: 'SEO vs Google Ads: wat werkt beter?', href: '/blog/seo-vs-google-ads' },
              { label: 'Bekijk onze prijzen', href: '/prijzen' },
            ].map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="flex min-h-12 items-center gap-2 rounded-2xl border border-line bg-bg px-4 py-3 font-semibold text-ink shadow-sm transition-all hover:border-brand-strong hover:text-brand-strong hover:shadow-md"
              >
                <span className="text-brand" aria-hidden="true">→</span> {r.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Klaar om direct zichtbaar te zijn in Google?</h2>
          <p className="body-lg text-navy-muted mt-4">✓ Gratis &nbsp; ✓ Vrijblijvend &nbsp; ✓ Binnen één werkdag reactie</p>
          <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg', className: 'mt-8' })}>
            Ja, ik wil een gratis scan
          </Link>
        </div>
      </section>
    </>
  )
}
