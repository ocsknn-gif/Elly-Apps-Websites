import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { RelatedLinks } from '@/components/RelatedLinks'
import { serviceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Website laten maken in Overijssel | Elly Apps',
  description: 'Van Zwolle tot Enschede — Elly Apps bouwt websites die MKB-bedrijven in Overijssel beter vindbaar maken in Google.',
  alternates: { canonical: 'https://elly-apps.nl/werkgebied/overijssel' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/werkgebied/overijssel',
    title: 'Website laten maken in Overijssel | Elly Apps',
    description: 'Van Zwolle tot Enschede — Elly Apps bouwt websites die MKB-bedrijven in Overijssel beter vindbaar maken in Google.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken in Overijssel | Elly Apps',
    description: 'Van Zwolle tot Enschede — Elly Apps bouwt websites die MKB-bedrijven in Overijssel beter vindbaar maken in Google.',
    images: ['/og-image.png'],
  },
}

const schema = serviceSchema({
  name: 'Website laten maken in Overijssel',
  url: 'https://elly-apps.nl/werkgebied/overijssel',
  description: 'Actief in Zwolle, Enschede, Deventer, Almelo, Hengelo en Kampen — wij bouwen websites voor MKB-bedrijven in Overijssel, met aandacht voor vindbaarheid.',
  areaServed: { '@type': 'AdministrativeArea', name: 'Provincie Overijssel' },
})

export default function WerkgebiedOverijsselPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Werkgebied</p>
          <h1 className="h1 text-ink">Website laten maken in Overijssel</h1>
          <p className="body-lg text-muted mt-4">Actief in Zwolle, Enschede, Deventer, Almelo, Hengelo en Kampen — wij bouwen websites voor MKB-bedrijven in Overijssel, met aandacht voor vindbaarheid.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <h2 className="h2 text-ink">Ondernemen in Overijssel</h2>
          <p>De hoofdstad van Overijssel is Zwolle. De provincie grenst aan Drenthe, Gelderland, Flevoland en Friesland, en over de grens liggen de Duitse deelstaten Nedersaksen en Noordrijn-Westfalen. De IJssel en de Overijsselse Vecht stromen door de provincie. Tot de streken horen de Kop van Overijssel, Salland en Twente: Salland is van oudsher vooral agrarisch, terwijl de textielindustrie de Twentse cultuur mede heeft gevormd. Grotere steden zijn Almelo, Deventer, Enschede, Hengelo, Kampen en <Link href="/stad/zwolle" className="text-brand-strong underline hover:no-underline">Zwolle</Link>. In Enschede staat de Universiteit Twente, een universiteit voor technische en sociale wetenschappen, op het voormalige landgoed Drienerlo.</p>
          <h2 className="h2 text-ink">Zo helpen wij ondernemers in Overijssel</h2>
          <p>Elly Apps helpt ondernemers in Overijssel met een professionele website, van een eenvoudige bedrijfswebsite tot een site met meerdere pagina's, passend bij uw branche in Overijssel. Op aanvraag bouwen wij ook een boekingssysteem of webshop.</p>
          <p>Onze websites zijn snel, mobielvriendelijk, hebben basis SEO en zijn volledig beheerd: hosting, SSL, updates en technisch onderhoud zijn inbegrepen. Lokale SEO en Google Business optimalisatie zitten in het Groei pakket en hoger, voor zoektermen relevant voor uw stad of regio binnen Overijssel en uw Google Business Profile.</p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {['Basis SEO; lokale SEO in het Groei en Pro pakket', 'Mobielvriendelijk en snel', 'Google Business optimalisatie in het Groei pakket en hoger', 'Hosting, SSL en onderhoud inbegrepen', 'Professioneel ontwerp op maat'].map((f) => (
            <div key={f} className="flex items-center gap-3 body text-ink"><CheckCircleIcon className="size-5 text-brand shrink-0" aria-hidden="true" />{f}</div>
          ))}
        </div>
      </section>

      <RelatedLinks
        id="steden-titel"
        title="Website laten maken per stad in Overijssel"
        className="bg-bg"
        links={[
          { label: "Website laten maken in Zwolle", href: "/stad/zwolle" },
          { label: "Website laten maken en beheren", href: "/diensten/websites" },
        ]}
      />

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Actief in Overijssel? Wij helpen u groeien.</h2>
          <p className="body-lg text-navy-muted mt-4">Vraag een gratis websitescan aan en ontdek uw kansen in Overijssel.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>Gratis websitescan</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
