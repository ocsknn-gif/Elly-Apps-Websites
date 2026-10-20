import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Website laten maken voor fysiotherapeuten | Elly Apps',
  description:
    'Professionele website voor uw fysiotherapiepraktijk. Behandelingsinfo en lokale vindbaarheid. Vanaf €49/maand volledig beheerd. Online afspraken zijn als aparte uitbreiding mogelijk.',
  alternates: { canonical: 'https://elly-apps.nl/branche/fysiotherapeut' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/branche/fysiotherapeut',
    title: 'Website laten maken voor fysiotherapeuten | Elly Apps',
    description: 'Professionele website voor uw fysiotherapiepraktijk. Behandelingsinfo en lokale vindbaarheid. Vanaf €49/maand volledig beheerd. Online afspraken zijn als aparte uitbreiding mogelijk.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken voor fysiotherapeuten | Elly Apps',
    description: 'Professionele website voor uw fysiotherapiepraktijk. Behandelingsinfo en lokale vindbaarheid. Vanaf €49/maand volledig beheerd. Online afspraken zijn als aparte uitbreiding mogelijk.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Elly Apps — Websites voor fysiotherapeuten',
  url: 'https://elly-apps.nl/branche/fysiotherapeut',
  description: 'Professionele websites voor fysiotherapiepraktijken, met behandelingsinfo en lokale SEO. Een online afsprakensysteem is als aparte uitbreiding mogelijk.',
}

export default function FysiotherapeutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Branche</p>
          <h1 className="h1 text-ink">Website laten maken voor fysiotherapeuten</h1>
          <p className="body-lg text-muted mt-4">Meer directe patiënten aantrekken, verwijzingen faciliteren en uw behandelingsaanbod helder presenteren — met een professionele website.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>
            De fysiotherapiemarkt is competitief. Patiënten hebben steeds vaker de vrijheid om
            zelf een fysiotherapeut te kiezen, ook zonder verwijzing. Dat betekent dat uw online
            zichtbaarheid directe invloed heeft op het aantal nieuwe patiënten dat uw praktijk
            binnenkomt. Een professionele, informatieve website is daarvoor onmisbaar.
          </p>
          <p>
            Elly Apps bouwt fysiotherapiewebsites die patiënten informeren en overtuigen. Wij
            presenteren uw behandelingsaanbod helder: van sportfysiotherapie en manuele therapie
            tot bekkenfysiotherapie en geriatrie. Een duidelijke uitleg van elke behandeling —
            inclusief voor wie het geschikt is en wat patiënten kunnen verwachten — verlaagt de
            drempel en verhoogt het vertrouwen.
          </p>
          <p>
            Online afspraken maken is voor patiënten een groot gemak. Een online afsprakensysteem
            is geen onderdeel van de websitepakketten, maar kunt u als aparte uitbreiding laten
            toevoegen. Patiënten plannen dan zelf een eerste consult of vervolgafspraak, met
            automatische herinneringen. De prijs is afhankelijk van uw wensen; wij maken daarvoor
            een vrijblijvende offerte. Meer weten? Bekijk dan onze pagina over het{' '}
            <Link href="/diensten/boekingssysteem" className="text-brand-strong underline hover:no-underline">online boekingssysteem</Link>.
          </p>
          <p>
            Verwijzingen van huisartsen en specialisten zijn voor veel fysiotherapeuten een
            belangrijke bron van nieuwe patiënten. Wij bouwen een professionele website die ook
            voor verwijzers overtuigend is: met duidelijke specialisaties, een teampagina en
            uw samenwerkingspartners. Een goede website versterkt uw positie als betrouwbare
            partner in het zorgnetwerk.
          </p>
          <p>
            Lokale SEO is essentieel. Zoekopdrachten als "fysiotherapeut [stad]" of "fysiotherapie
            rugklachten [regio]" leveren directe nieuwe patiënten op. Wij optimaliseren uw website
            en Google Business Profile zodat u op de juiste momenten zichtbaar bent.
          </p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Online afsprakensysteem (optionele uitbreiding)',
            'Behandelingsoverzicht per specialisatie',
            'Teampagina en specialisaties',
            'Lokale SEO voor uw regio',
            'Verwijzers-sectie',
            'AVG-conforme formulieren',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 body text-ink">
              <CheckCircleIcon className="size-5 text-brand shrink-0" aria-hidden="true" />
              {f}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Meer directe patiënten?</h2>
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
