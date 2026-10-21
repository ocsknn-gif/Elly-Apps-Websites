import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { RelatedLinks } from '@/components/RelatedLinks'

export const metadata: Metadata = {
  title: 'Website laten maken Amsterdam | Elly Apps',
  description:
    'Website laten maken in Amsterdam? Elly Apps bouwt professionele websites voor Amsterdamse MKB-bedrijven. Lokale SEO, snel live en volledig ontzorgd. Vanaf €49/maand.',
  alternates: { canonical: 'https://elly-apps.nl/stad/amsterdam' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/stad/amsterdam',
    title: 'Website laten maken Amsterdam | Elly Apps',
    description: 'Website laten maken in Amsterdam? Elly Apps bouwt professionele websites voor Amsterdamse MKB-bedrijven. Lokale SEO, snel live en volledig ontzorgd. Vanaf €49/maand.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken Amsterdam | Elly Apps',
    description: 'Website laten maken in Amsterdam? Elly Apps bouwt professionele websites voor Amsterdamse MKB-bedrijven. Lokale SEO, snel live en volledig ontzorgd. Vanaf €49/maand.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elly Apps — Website laten maken Amsterdam',
  url: 'https://elly-apps.nl/stad/amsterdam',
  areaServed: { '@type': 'City', name: 'Amsterdam' },
  description: 'Professionele websites voor MKB-bedrijven in Amsterdam. Lokale SEO en volledig beheerd.',
}

export default function AmsterdamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Amsterdam</p>
          <h1 className="h1 text-ink">
            Website laten maken in Amsterdam
          </h1>
          <p className="body-lg text-muted mt-4">
            Professionele websites voor Amsterdamse ondernemers. Lokaal gevonden worden in de
            grootste stad van Nederland.
          </p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>
            Amsterdam is een van de meest competitieve markten van Nederland. De stad herbergt
            veel bedrijven — van kleine ambachtslieden
            in de Jordaan tot techbedrijven in Sloterdijk. In zo'n dynamische markt is een
            professionele online aanwezigheid geen luxe, maar een noodzaak. Klanten zoeken online
            voordat ze een bedrijf bellen, en wie niet gevonden wordt, bestaat niet.
          </p>
          <p>
            Elly Apps helpt Amsterdamse MKB-bedrijven om online zichtbaar te worden en te groeien.
            Wij bouwen snelle, professionele websites die geoptimaliseerd zijn voor lokale
            zoekopdrachten in Amsterdam en de omliggende wijken. Of u nu actief bent in
            Amsterdam-Centrum, Amsterdam-Noord, de Pijp of Oost — wij zorgen dat uw doelgroep
            u vindt.
          </p>
          <p>
            Lokale SEO voor Amsterdam betekent specifiek targeten op Amsterdamse zoektermen.
            Denk aan "loodgieter Amsterdam-West", "kapper De Pijp" of "fysiotherapeut
            Amsterdam-Noord". Wij doen uitgebreid zoekwoordonderzoek voor uw specifieke situatie
            en verwerken die termen strategisch in uw website. Combineer dit met een volledig
            geoptimaliseerd Google Business Profile en u staat bovenaan in de lokale resultaten.
          </p>
          <p>
            Amsterdam heeft ook een groot toeristen- en expat-publiek. Als uw bedrijf ook
            Engelstalige klanten bedient, kunnen wij een tweetalige website bouwen (Nederlands
            én Engels) zodat u ook die doelgroep bereikt.
          </p>
          <p>
            Wij werken al met Amsterdamse bedrijven in sectoren als horeca, zorg, beauty,
            technische dienstverlening en zakelijke dienstverlening. Onze websites zijn altijd
            volledig beheerd: hosting, updates en basis SEO zijn inbegrepen in de vaste maandprijs.
          </p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Lokale SEO voor Amsterdam en wijken',
            'Google Business Profile optimalisatie',
            'Snel live — gemiddeld binnen 2 weken',
            'Tweetalig (NL/EN) mogelijk',
            'Hosting en onderhoud inbegrepen',
            'Vaste maandprijs vanaf €49',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 body text-ink">
              <CheckCircleIcon className="size-5 text-brand shrink-0" aria-hidden="true" />
              {f}
            </div>
          ))}
        </div>
      </section>

      <RelatedLinks
        id="gerelateerd-titel"
        title="Gerelateerde pagina's"
        className="bg-bg"
        links={[
          { label: "Website laten maken in Noord-Holland", href: "/werkgebied/noord-holland" },
          { label: "Website laten maken in Haarlem", href: "/stad/haarlem" },
          { label: "App laten maken in Amsterdam", href: "/apps/amsterdam" },
          { label: "Website laten maken in Almere", href: "/stad/almere" },
          { label: "Website laten maken en beheren", href: "/diensten/websites" },
        ]}
      />

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Gevonden worden in Amsterdam?</h2>
          <p className="body-lg text-navy-muted mt-4">Vraag een gratis websitescan aan en ontdek hoe wij uw Amsterdamse zichtbaarheid verbeteren.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>Gratis websitescan</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
