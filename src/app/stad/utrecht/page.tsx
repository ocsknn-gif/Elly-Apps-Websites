import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { RelatedLinks } from '@/components/RelatedLinks'

export const metadata: Metadata = {
  title: 'Website laten maken Utrecht | Elly Apps',
  description:
    'Website laten maken in Utrecht? Elly Apps bouwt professionele websites voor Utrechtse MKB-bedrijven. Volledig ontzorgd, vanaf €49 per maand.',
  alternates: { canonical: 'https://elly-apps.nl/stad/utrecht' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/stad/utrecht',
    title: 'Website laten maken Utrecht | Elly Apps',
    description: 'Website laten maken in Utrecht? Elly Apps bouwt professionele websites voor Utrechtse MKB-bedrijven. Volledig ontzorgd, vanaf €49 per maand.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken Utrecht | Elly Apps',
    description: 'Website laten maken in Utrecht? Elly Apps bouwt professionele websites voor Utrechtse MKB-bedrijven. Volledig ontzorgd, vanaf €49 per maand.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elly Apps — Website laten maken Utrecht',
  url: 'https://elly-apps.nl/stad/utrecht',
  areaServed: { '@type': 'City', name: 'Utrecht' },
  description: 'Website laten maken in Utrecht? Elly Apps bouwt professionele websites voor Utrechtse MKB-bedrijven. Volledig ontzorgd, vanaf €49 per maand.',
}

export default function UtrechtPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Utrecht</p>
          <h1 className="h1 text-ink">
            Website laten maken in Utrecht
          </h1>
          <p className="body-lg text-muted mt-4">
            Professionele websites voor Utrechtse ondernemers. Centraal gelegen, lokaal sterk
            aanwezig.
          </p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>
            Utrecht is een bruisende stad met een sterke lokale economie, veel zelfstandigen en
            een groeiend MKB-landschap. De stad trekt studenten, jonge professionals en gezinnen
            aan — een diverse doelgroep die actief online zoekt naar lokale diensten en bedrijven.
            Voor Utrechtse ondernemers is een goede online aanwezigheid daarom onmisbaar.
          </p>
          <p>
            Elly Apps bouwt professionele websites voor MKB-bedrijven in Utrecht en de Utrechtse
            regio, inclusief Nieuwegein, IJsselstein, Woerden, Zeist en De Bilt. Wij kennen de
            lokale markt en optimaliseren uw website voor de zoektermen die Utrechtse klanten
            daadwerkelijk gebruiken.
          </p>
          <p>
            Utrecht heeft een unieke mix van historisch centrum, moderne wijken en een bloeiend
            zakelijk district rondom de NS Hoofdkantoor en Jaarbeurs. Of uw bedrijf zich nu richt
            op de Utrechtse binnenstad, Leidsche Rijn, Overvecht of Vleuten — wij zorgen dat u
            zichtbaar bent voor uw lokale doelgroep.
          </p>
          <p>
            Lokale SEO voor Utrecht richt zich op zoekopdrachten zoals "accountant Utrecht",
            "kinderopvang Utrecht-West" of "schilder Zeist". Wij verwerken deze termen
            strategisch in uw website en optimaliseren uw Google Business Profile. Zo verschijnt
            u bovenaan in de lokale zoekresultaten en Google Maps wanneer potentiële klanten
            zoeken.
          </p>
          <p>
            Onze websites worden gemiddeld binnen twee weken opgeleverd. U heeft een vaste
            maandprijs die alles omvat. Zo investeert u als Utrechtse
            ondernemer vertrouwd in uw groei.
          </p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Lokale SEO voor Utrecht en regio',
            'Google Business Profile optimalisatie',
            'Snel live — gemiddeld binnen 2 weken',
            'Alle wijken en omliggende gemeenten',
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
          { label: "Website laten maken in de provincie Utrecht", href: "/werkgebied/utrecht" },
          { label: "Website laten maken in Amsterdam", href: "/stad/amsterdam" },
          { label: "Website laten maken in Almere", href: "/stad/almere" },
          { label: "Website laten maken en beheren", href: "/diensten/websites" },
        ]}
      />

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Gevonden worden in Utrecht?</h2>
          <p className="body-lg text-navy-muted mt-4">Vraag een gratis websitescan aan en ontdek uw online groeipotentieel.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>Gratis websitescan</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
