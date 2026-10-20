import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Website laten maken Rotterdam | Elly Apps',
  description:
    'Website laten maken in Rotterdam? Elly Apps bouwt professionele websites voor Rotterdamse MKB-bedrijven. Lokale SEO en volledig ontzorgd. Vanaf €49/maand.',
  alternates: { canonical: 'https://elly-apps.nl/stad/rotterdam' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/stad/rotterdam',
    title: 'Website laten maken Rotterdam | Elly Apps',
    description: 'Website laten maken in Rotterdam? Elly Apps bouwt professionele websites voor Rotterdamse MKB-bedrijven. Lokale SEO en volledig ontzorgd. Vanaf €49/maand.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken Rotterdam | Elly Apps',
    description: 'Website laten maken in Rotterdam? Elly Apps bouwt professionele websites voor Rotterdamse MKB-bedrijven. Lokale SEO en volledig ontzorgd. Vanaf €49/maand.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elly Apps — Website laten maken Rotterdam',
  url: 'https://elly-apps.nl/stad/rotterdam',
  areaServed: { '@type': 'City', name: 'Rotterdam' },
  description: 'Professionele websites voor MKB-bedrijven in Rotterdam. Lokale SEO en volledig beheerd.',
}

export default function RotterdamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Rotterdam</p>
          <h1 className="h1 text-ink">
            Website laten maken in Rotterdam
          </h1>
          <p className="body-lg text-muted mt-4">
            Rotterdamse ondernemers verdienen een website die werkt. Lokaal gevonden worden in de
            havenstad van Nederland.
          </p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>
            Rotterdam is de tweede stad van Nederland en heeft een uniek ondernemersklimaat. De
            stad staat bekend om zijn hands-on mentaliteit, diversiteit en ambitie. Rotterdamse
            ondernemers zijn direct, resultaatgericht en willen waar voor hun geld. Dat sluit
            perfect aan bij hoe Elly Apps werkt.
          </p>
          <p>
            Wij bouwen professionele websites voor MKB-bedrijven in Rotterdam en de regio —
            inclusief Capelle aan den IJssel, Barendrecht, Schiedam en Spijkenisse. Onze websites
            zijn snel, mobielvriendelijk en geoptimaliseerd voor lokale zoekopdrachten in
            Rotterdam. Zo wordt u gevonden door klanten die actief zoeken naar uw dienst of
            product in de buurt.
          </p>
          <p>
            Rotterdam heeft een diverse bevolking en een groeiend MKB-landschap. Van de
            horeca in Katendrecht en het centrum tot technische bedrijven in het Botlekgebied
            en zorgpraktijken in Hillegersberg — wij bouwen voor alle sectoren websites die
            resultaat opleveren. Elke website is afgestemd op uw specifieke doelgroep en
            werkgebied.
          </p>
          <p>
            Lokale SEO voor Rotterdam is een van onze specialiteiten. Zoekopdrachten als
            "aannemer Rotterdam-Zuid" of "tandarts Rotterdam-Centrum" worden dagelijks
            tienduizenden keren ingevoerd. Wij zorgen dat u bij die zoekopdrachten zichtbaar
            bent, zowel in de organische resultaten als in Google Maps.
          </p>
          <p>
            Met onze vaste maandprijzen weet u exact wat u betaalt. Geen verborgen kosten, geen
            verrassingen. Hosting, onderhoud en SEO zijn altijd inbegrepen. Zo kunt u als
            Rotterdamse ondernemer vol vertrouwen investeren in uw online aanwezigheid.
          </p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Lokale SEO voor Rotterdam en regio',
            'Google Business Profile optimalisatie',
            'Snel live — gemiddeld binnen 2 weken',
            'Alle sectoren en wijken',
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

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Gevonden worden in Rotterdam?</h2>
          <p className="body-lg text-navy-muted mt-4">Vraag een gratis websitescan aan en ontdek uw kansen online.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>Gratis websitescan</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
