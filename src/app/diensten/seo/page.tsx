import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Faq } from '@/components/home/Faq'

export const metadata: Metadata = {
  title: 'SEO voor MKB | Meer klanten via Google | Elly Apps',
  description: 'Meer klanten via Google zonder te betalen per klik? Elly Apps verzorgt lokale SEO voor MKB-bedrijven. Van technische optimalisatie tot contentstrategie. Vraag gratis scan aan.',
  alternates: { canonical: 'https://elly-apps.nl/diensten/seo' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/diensten/seo',
    title: 'SEO voor MKB | Meer klanten via Google | Elly Apps',
    description: 'Meer klanten via Google zonder te betalen per klik? Elly Apps verzorgt lokale SEO voor MKB-bedrijven. Van technische optimalisatie tot contentstrategie. Vraag gratis scan aan.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO voor MKB | Meer klanten via Google | Elly Apps',
    description: 'Meer klanten via Google zonder te betalen per klik? Elly Apps verzorgt lokale SEO voor MKB-bedrijven. Van technische optimalisatie tot contentstrategie. Vraag gratis scan aan.',
    images: ['/og-image.png'],
  },
}

const features = [
  'Technische SEO: snelheid, mobile, structured data',
  'On-page optimalisatie van titels, koppen en teksten',
  'Lokale SEO voor uw stad en regio',
  'Google Business Profile optimalisatie',
  'Maandelijkse rapportage met concrete cijfers',
  'Zoekwoordonderzoek op maat',
  'SEO-vriendelijke content',
  'Inbegrepen in alle website pakketten',
]

const faq = [
  { q: 'Hoe lang duurt het voordat SEO resultaat geeft?', a: 'SEO is een langetermijninvestering. Doorgaans ziet u na 3 tot 6 maanden meetbare resultaten in hogere posities en meer organisch verkeer. Na 6 tot 12 maanden worden de resultaten echt zichtbaar.' },
  { q: 'Is SEO inbegrepen bij uw websites?', a: 'Ja. Basis SEO is inbegrepen in al onze website pakketten. Lokale SEO en Google Business optimalisatie zijn inbegrepen in het Groei pakket en hoger.' },
  { q: 'Wat kost SEO bij Elly Apps?', a: 'Basis SEO is inbegrepen in onze maandelijkse pakketten vanaf €49/mnd; lokale SEO vanaf het Groei pakket (€199/mnd). Voor uitgebreide SEO-campagnes met contentcreatie en linkbuilding kunt u contact opnemen voor een offerte op maat.' },
  { q: 'Verschil SEO en Google Ads?', a: 'SEO levert organisch (gratis) verkeer op de lange termijn. Google Ads geeft directe zichtbaarheid, maar u betaalt per klik. Wij adviseren vaak een combinatie: Google Ads voor snelle resultaten, SEO voor duurzame groei.' },
  { q: 'Garanderen jullie positie 1 in Google?', a: 'Nee — dat kan niemand eerlijk garanderen, want Google bepaalt de rankings. Wij werken met meetbare doelen en transparante rapportages zodat u precies weet wat er gebeurt en wat de voortgang is.' },
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

export default function DienstenSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Diensten</p>
          <h1 className="h1 text-ink">SEO — meer klanten via Google zonder per klik te betalen</h1>
          <p className="body-lg text-muted mt-4">Lokale SEO voor MKB-bedrijven. Wij zorgen dat uw website gevonden wordt door klanten in uw regio — structureel en duurzaam.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>De meeste MKB-bedrijven worden nauwelijks gevonden op Google. Niet omdat hun dienst niet goed is, maar omdat hun website technisch niet in orde is of te weinig relevante content bevat. Dat veranderen wij.</p>
          <p>Elly Apps verzorgt lokale SEO die écht werkt voor kleine en middelgrote bedrijven. We beginnen met een grondige analyse van uw huidige positie, uw concurrenten en de zoekwoorden waarop uw klanten zoeken. Op basis daarvan bouwen we een SEO-strategie die past bij uw budget en doelen.</p>
          <p>Voor lokale bedrijven is lokale SEO de krachtigste tool. Wanneer iemand in Amsterdam zoekt naar &ldquo;loodgieter Amsterdam&rdquo; of &ldquo;kapper Utrecht&rdquo;, wilt u bovenaan staan. Met de combinatie van on-page optimalisatie, Google Business Profile en lokale content zorgen we daar voor.</p>
          <p>Basis SEO is inbegrepen in al onze website pakketten. U hoeft geen extra investering te doen voor de basis. Voor uitgebreide SEO-campagnes met blogcontent, linkbuilding en maandelijkse audits bieden wij een apart SEO-pakket aan.</p>
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

      <Faq items={faq} title="Veelgestelde vragen over SEO" className="bg-bg" />

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Ontdek hoe uw website scoort in Google</h2>
          <p className="body-lg text-navy-muted mt-4">✓ Gratis &nbsp; ✓ Vrijblijvend &nbsp; ✓ Binnen één werkdag reactie</p>
          <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg', className: 'mt-8' })}>
            Ja, ik wil een gratis SEO-scan
          </Link>
        </div>
      </section>
    </>
  )
}
