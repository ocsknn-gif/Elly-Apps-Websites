import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { RelatedLinks } from '@/components/RelatedLinks'

export const metadata: Metadata = {
  title: 'Website laten maken voor restaurants | Elly Apps',
  description:
    'Website laten maken voor uw restaurant? Online menu, reviews en basis SEO, volledig beheerd vanaf €49 per maand. Reserveren is een aparte uitbreiding.',
  alternates: { canonical: 'https://elly-apps.nl/branche/restaurant' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/branche/restaurant',
    title: 'Website laten maken voor restaurants | Elly Apps',
    description: 'Website laten maken voor uw restaurant? Online menu, reviews en basis SEO, volledig beheerd vanaf €49 per maand. Reserveren is een aparte uitbreiding.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken voor restaurants | Elly Apps',
    description: 'Website laten maken voor uw restaurant? Online menu, reviews en basis SEO, volledig beheerd vanaf €49 per maand. Reserveren is een aparte uitbreiding.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Elly Apps — Websites voor restaurants',
  url: 'https://elly-apps.nl/branche/restaurant',
  description: 'Professionele websites voor restaurants, met online menu en basis SEO. Een reserveringssysteem is als aparte uitbreiding mogelijk.',
}

export default function RestaurantPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Branche</p>
          <h1 className="h1 text-ink">Website laten maken voor restaurants</h1>
          <p className="body-lg text-muted mt-4">Toon uw menu online, zodat gasten uw restaurant in de buurt kunnen vinden.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <h2 className="h2 text-ink">Website laten maken voor uw restaurant</h2>
          <p>
            Mensen die een restaurant zoeken, starten hun zoektocht online. Ze kijken naar het
            menu, de sfeer, de prijzen en de reviews — voordat ze een stap over de drempel zetten.
            Als uw restaurant geen goede website heeft, of als uw menu moeilijk te vinden is,
            kan de potentiële gast naar een concurrent gaan. Een professionele restaurantwebsite is
            daarmee onderdeel van de eerste indruk van uw zaak.
          </p>
          <p>
            Elly Apps bouwt restaurantwebsites die gasten overtuigen. Wij presenteren uw menu
            overzichtelijk en aantrekkelijk — inclusief foto's, prijzen en allergeneninformatie.
            Een online reserveringssysteem kunt u als aparte uitbreiding laten toevoegen, zodat
            gasten ook buiten openingstijden een tafel kunnen boeken.
          </p>
          <p>
            Google Maps is voor restaurants een van de belangrijkste vindkanalen. In het Groei
            pakket en hoger richten wij uw Google Business Profile in voor Google Maps en Google Search, met de juiste
            categorisering, openingstijden, foto's en beschrijving. Klanten kunnen met één klik
            de routebeschrijving openen of bellen.
          </p>
          <p>
            Reviews zijn belangrijk voor restaurants. Wij integreren uw Google-reviews en
            Tripadvisor-beoordelingen in uw website, zodat nieuwe gasten direct het vertrouwen
            zien dat anderen in uw restaurant hebben. Wij helpen u een strategie op te zetten om meer reviews te verzamelen.
          </p>
          <p>
            Of u nu een koffiezaak, een eetcafé, een sushi-restaurant of een fine dining
            gelegenheid heeft — wij bouwen een website die past bij de sfeer en doelgroep van
            uw zaak. Uw website weerspiegelt wie u bent.
          </p>
          <h2 className="h2 text-ink pt-6">App laten maken voor uw restaurant</h2>
          <p>
            Steeds meer restauranthouders kiezen voor een maatwerk app naast hun website.
            Denk aan een eigen bestel-app waarmee gasten thuis of onderweg een bestelling plaatsen,
            een loyalty-app waarbij vaste klanten punten sparen, of een keuken-app die bestellingen
            direct naar de keuken stuurt. Een eigen app geeft u meer controle dan platforms zoals
            Thuisbezorgd — en u betaalt geen commissie per bestelling. Elly Apps bouwt dit soort
            apps voor een vaste prijs, inclusief beheer en updates. Meer weten? Bekijk onze pagina over <Link href="/diensten/apps" className="text-brand-strong underline hover:no-underline">app laten maken</Link>.
          </p>
          <h2 className="h2 text-ink pt-6">Online reserveringen als uitbreiding</h2>
          <p>
            Een online reserveringssysteem is geen onderdeel van de websitepakketten, maar kunt u
            als aparte uitbreiding laten toevoegen. Het stuurt automatische bevestigingsmails en
            herinneringen. Vooruitbetalen of een borgsom is op aanvraag mogelijk. De prijs is
            afhankelijk van uw wensen; wij maken daarvoor een vrijblijvende offerte. Meer weten?
            Bekijk dan onze pagina over het{' '}
            <Link href="/diensten/boekingssysteem" className="text-brand-strong underline hover:no-underline">online boekingssysteem</Link>.
          </p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Online menu met foto\'s en prijzen',
            'Reserveringssysteem (optionele uitbreiding)',
            'Google Maps optimalisatie in het Groei pakket en hoger',
            'Reviews integratie',
            'Basis SEO; lokale SEO in het Groei pakket en hoger',
            'Mobiel-vriendelijk en snel',
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
        links={[
          { label: "Website laten maken en beheren", href: "/diensten/websites" },
          { label: "Wat kost een website? Bekijk de prijzen", href: "/prijzen" },
          { label: "Online boekingssysteem voor uw website", href: "/diensten/boekingssysteem" },
          { label: "Horeca website laten maken", href: "/branche/horeca" },
          { label: "Website laten maken voor een kapper", href: "/branche/kapper" },
          { label: "Website laten maken voor een restaurant in 2026", href: "/blog/restaurant" },
          { label: "Website laten maken per branche", href: "/branche" },
        ]}
      />

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Een website voor uw restaurant?</h2>
          <p className="body-lg text-navy-muted mt-4">Vraag een gratis websitescan aan en ontdek wat er beter kan.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>Gratis websitescan</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
