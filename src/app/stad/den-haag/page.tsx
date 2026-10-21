import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { RelatedLinks } from '@/components/RelatedLinks'

export const metadata: Metadata = {
  title: 'Website laten maken Den Haag | Elly Apps',
  description:
    'Website laten maken in Den Haag? Elly Apps bouwt professionele websites voor Haagse MKB-bedrijven. Volledig ontzorgd, vanaf €49 per maand.',
  alternates: { canonical: 'https://elly-apps.nl/stad/den-haag' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/stad/den-haag',
    title: 'Website laten maken Den Haag | Elly Apps',
    description: 'Website laten maken in Den Haag? Elly Apps bouwt professionele websites voor Haagse MKB-bedrijven. Volledig ontzorgd, vanaf €49 per maand.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken Den Haag | Elly Apps',
    description: 'Website laten maken in Den Haag? Elly Apps bouwt professionele websites voor Haagse MKB-bedrijven. Volledig ontzorgd, vanaf €49 per maand.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elly Apps — Website laten maken Den Haag',
  url: 'https://elly-apps.nl/stad/den-haag',
  areaServed: { '@type': 'City', name: 'Den Haag' },
  description: 'Website laten maken in Den Haag? Elly Apps bouwt professionele websites voor Haagse MKB-bedrijven. Volledig ontzorgd, vanaf €49 per maand.',
}

export default function DenHaagPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Den Haag</p>
          <h1 className="h1 text-ink">
            Website laten maken in Den Haag
          </h1>
          <p className="body-lg text-muted mt-4">
            Professionele websites voor Haagse ondernemers. De regeringsstad verdient een sterke
            online aanwezigheid.
          </p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>
            Den Haag is als regeringsstad van Nederland een bijzondere markt. Naast de overheid
            en internationale organisaties heeft de stad een levendig MKB-landschap: van
            restaurantjes in de Hofkwartier tot zorgpraktijken in Loosduinen en bouwbedrijven
            in Leidschendam-Voorburg. Al deze ondernemers hebben één ding gemeen: ze moeten
            online gevonden worden door hun lokale doelgroep.
          </p>
          <p>
            Elly Apps bouwt professionele websites voor MKB-bedrijven in Den Haag en de Haagse
            regio, inclusief Rijswijk, Zoetermeer, Delft, Leidschendam en Wassenaar. Onze
            websites zijn geoptimaliseerd voor lokale zoekopdrachten zodat Haagse klanten u
            vinden wanneer ze zoeken naar uw diensten.
          </p>
          <p>
            Den Haag heeft een diverse bevolking en een sterk internationaal karakter door de
            aanwezigheid van ambassades en internationale instellingen. Als uw bedrijf ook
            Engelstalige of anderstalige klanten bedient, kunnen wij een meertalige website
            bouwen die alle doelgroepen aanspreekt.
          </p>
          <p>
            Lokale SEO voor Den Haag richt zich op specifieke Haagse zoekopdrachten.
            "Loodgieter Den Haag Centrum", "kapper Scheveningen" of "fysiotherapeut
            Leidschendam" — wij zorgen dat u bij de juiste zoekopdrachten verschijnt. Onze
            aanpak combineert technische SEO, lokale content en Google Business optimalisatie
            voor maximale zichtbaarheid.
          </p>
          <p>
            Wij werken met een vaste maandprijs, zodat u als Haagse ondernemer precies weet
            waar u aan toe bent. Hosting, onderhoud en basis SEO zijn altijd inbegrepen.
            Geen verborgen kosten, geen ingewikkelde contracten.
          </p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Lokale SEO voor Den Haag en regio',
            'Google Business Profile optimalisatie',
            'Meertalig (NL/EN) mogelijk',
            'Snel live — gemiddeld binnen 2 weken',
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
          { label: "Website laten maken in Zuid-Holland", href: "/werkgebied/zuid-holland" },
          { label: "Website laten maken in Rotterdam", href: "/stad/rotterdam" },
          { label: "Website laten maken in Leiden", href: "/stad/leiden" },
          { label: "App laten maken in Den Haag", href: "/apps/den-haag" },
          { label: "Website laten maken en beheren", href: "/diensten/websites" },
        ]}
      />

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Gevonden worden in Den Haag?</h2>
          <p className="body-lg text-navy-muted mt-4">Vraag een gratis websitescan aan en ontdek uw kansen in de Haagse markt.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>Gratis websitescan</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
