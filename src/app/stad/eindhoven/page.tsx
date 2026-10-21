import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { RelatedLinks } from '@/components/RelatedLinks'
import { serviceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Website laten maken Eindhoven – vanaf €49/mnd | Elly Apps',
  description:
    'Website laten maken in Eindhoven? Elly Apps bouwt professionele websites voor Eindhovense MKB-bedrijven. Volledig ontzorgd, vanaf €49 per maand.',
  alternates: { canonical: 'https://elly-apps.nl/stad/eindhoven' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/stad/eindhoven',
    title: 'Website laten maken Eindhoven – vanaf €49/mnd | Elly Apps',
    description: 'Website laten maken in Eindhoven? Elly Apps bouwt professionele websites voor Eindhovense MKB-bedrijven. Volledig ontzorgd, vanaf €49 per maand.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken Eindhoven – vanaf €49/mnd | Elly Apps',
    description: 'Website laten maken in Eindhoven? Elly Apps bouwt professionele websites voor Eindhovense MKB-bedrijven. Volledig ontzorgd, vanaf €49 per maand.',
    images: ['/og-image.png'],
  },
}

const schema = serviceSchema({
  name: 'Website laten maken in Eindhoven',
  url: 'https://elly-apps.nl/stad/eindhoven',
  description: 'Website laten maken in Eindhoven? Elly Apps bouwt professionele websites voor Eindhovense MKB-bedrijven. Volledig ontzorgd, vanaf €49 per maand.',
  areaServed: { '@type': 'City', name: 'Eindhoven' },
})

export default function EindhovenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Eindhoven</p>
          <h1 className="h1 text-ink">
            Website laten maken in Eindhoven
          </h1>
          <p className="body-lg text-muted mt-4">
            Professionele websites voor Eindhovense ondernemers. De stad van innovatie verdient
            een moderne online aanwezigheid.
          </p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>
            Eindhoven is de technologie- en designhoofdstad van Nederland. De stad staat bekend
            om innovatieve bedrijven, de High Tech Campus en Dutch Design Week. Maar naast de
            grote tech-namen heeft Eindhoven ook een bruisend MKB — van kappers en restaurants
            in het centrum tot bouwbedrijven en zorgpraktijken in wijken als Woensel en Stratum.
            Al die ondernemers verdienen een sterke online aanwezigheid.
          </p>
          <p>
            Elly Apps bouwt professionele websites voor MKB-bedrijven in Eindhoven en de
            Brabantse regio, inclusief Veldhoven, Helmond, Best, Waalre en Geldrop-Mierlo.
            Onze websites zijn snel, mobielvriendelijk en geoptimaliseerd voor lokale
            zoekopdrachten zodat Eindhovense klanten u vinden.
          </p>
          <p>
            Eindhoven groeit snel. De stad trekt steeds meer expats en internationale
            professionals aan door de aanwezigheid van ASML, NXP en andere tech-giganten.
            Als uw bedrijf deze doelgroep wil bereiken, kunnen wij een Engelstalige of
            tweetalige website bouwen die ook internationale klanten aanspreekt.
          </p>
          <p>
            Lokale SEO voor Eindhoven richt zich op specifieke zoekopdrachten van Eindhovense
            consumenten en bedrijven. "Schilder Eindhoven", "kinderopvang Woensel" of
            "accountant Veldhoven" — wij zorgen dat uw website en Google Business Profile
            optimaal scoren op de zoekopdrachten die voor uw bedrijf het meest waardevol zijn.
          </p>
          <p>
            Net als Eindhovense bedrijven zelf zijn wij pragmatisch en resultaatgericht. Wij
            leveren snel, communiceren duidelijk en zorgen dat uw website écht resultaat
            oplevert. Met een vaste maandprijs weet u altijd precies wat u betaalt.
          </p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Lokale SEO voor Eindhoven en regio',
            'Google Business Profile optimalisatie',
            'Tweetalig (NL/EN) mogelijk',
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
          { label: "Website laten maken in Noord-Brabant", href: "/werkgebied/noord-brabant" },
          { label: "Website laten maken in Tilburg", href: "/stad/tilburg" },
          { label: "Website laten maken in Breda", href: "/stad/breda" },
          { label: "Website laten maken in Den Bosch", href: "/stad/den-bosch" },
          { label: "Website laten maken en beheren", href: "/diensten/websites" },
        ]}
      />

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Gevonden worden in Eindhoven?</h2>
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
