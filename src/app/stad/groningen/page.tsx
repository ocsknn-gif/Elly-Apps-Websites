import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { RelatedLinks } from '@/components/RelatedLinks'
import { Faq } from '@/components/home/Faq'
import { serviceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Website laten maken Groningen – vanaf €49/mnd | Elly Apps',
  description: 'Website laten maken in Groningen? Elly Apps bouwt websites met basis SEO voor ondernemers in Groningen. Vanaf €49 per maand. Vraag een gratis scan aan.',
  alternates: { canonical: 'https://elly-apps.nl/stad/groningen' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/stad/groningen',
    title: 'Website laten maken Groningen – vanaf €49/mnd | Elly Apps',
    description: 'Website laten maken in Groningen? Elly Apps bouwt websites met basis SEO voor ondernemers in Groningen. Vanaf €49 per maand. Vraag een gratis scan aan.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken Groningen – vanaf €49/mnd | Elly Apps',
    description: 'Website laten maken in Groningen? Elly Apps bouwt websites met basis SEO voor ondernemers in Groningen. Vanaf €49 per maand. Vraag een gratis scan aan.',
    images: ['/og-image.png'],
  },
}

const faq = [
  { q: 'Hoe zorg je dat ik gevonden word in Groningen op Google?', a: 'We optimaliseren uw website specifiek voor Groningen en omgeving. We verwerken lokale zoektermen zoals "website laten maken Groningen" in uw paginateksten, titels en meta descriptions. Met het Groei pakket en hoger optimaliseren we ook uw Google Business Profile.' },
  { q: 'Hoe snel kan mijn website live staan in Groningen?', a: 'Gemiddeld staat uw website binnen twee weken live. Na een kort intakegesprek verwerken wij alles voor u.' },
  { q: 'Maken jullie websites voor alle branches in Groningen?', a: 'Ja. Wij bouwen websites voor ondernemers in elke branche.' },
  { q: 'Is een website voor een klein Gronings bedrijf betaalbaar?', a: 'Absoluut. Onze websites beginnen vanaf €49 per maand met een eenmalige setup van €299, inclusief hosting, onderhoud en basis SEO.' },
  { q: 'Werken jullie ook in de regio rondom Groningen?', a: 'Ja, we bedienen ook ondernemers in Assen, Drachten, Emmen, Leeuwarden en andere gemeenten rondom Groningen.' },
  { q: 'Kan ik ook een webshop laten maken in Groningen?', a: 'Ja, we bouwen ook webshops voor Groningse ondernemers — snel, veilig en goed vindbaar in Google Groningen.' },
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

const serviceJsonLd = serviceSchema({
  name: 'Website laten maken in Groningen',
  url: 'https://elly-apps.nl/stad/groningen',
  description: 'Website laten maken in Groningen? Elly Apps bouwt websites met basis SEO voor ondernemers in Groningen. Vanaf €49 per maand. Vraag een gratis scan aan.',
  areaServed: { '@type': 'City', name: 'Groningen' },
})

export default function GroningenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Groningen</p>
          <h1 className="h1 text-ink">Website laten maken in Groningen</h1>
          <p className="body-lg text-muted mt-4">Elly Apps bouwt professionele websites voor Groningse ondernemers — snel, betaalbaar en volledig ontzorgd.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <h2 className="h2 text-ink">Ondernemen in Groningen</h2>
          <p>Groningen is de hoofdstad van de provincie Groningen en ligt op de noordelijke uitloper van de Hondsrug. De Grote Markt is het historische centrale plein van de stad en het UMCG ligt op loopafstand daarvan. In Paddepoel staat de Zernike Campus met gebouwen van de Rijksuniversiteit Groningen en de Hanzehogeschool Groningen. Bij Hoogkerk, in het westen van de gemeente, ligt het industriegebied Westpoort met een eigen aansluiting op de A7.</p>
          <p>Elly Apps bouwt voor Groningse ondernemers websites met aandacht voor vindbaarheid. Wij werken met een AI-gedreven aanpak. Wij bouwen websites voor ondernemers in elke branche.</p>
          <p>Een goede website bevat een duidelijke omschrijving van uw diensten, uw werkgebied in Groningen en omgeving en een contactformulier. Lokale SEO zit in het Groei pakket en hoger. Onze websites zijn volledig beheerd: hosting, SSL, updates en technisch onderhoud zijn inbegrepen.</p>
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

      <Faq items={faq} title="Veelgestelde vragen over website laten maken in Groningen" className="bg-bg" />

      <RelatedLinks
        id="gerelateerd-titel"
        title="Gerelateerde pagina's"
        className="bg-bg"
        links={[
          { label: "Website laten maken in de provincie Groningen", href: "/werkgebied/groningen" },
          { label: "Website laten maken en beheren", href: "/diensten/websites" },
        ]}
      />

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Actief in Groningen? Wij helpen u groeien.</h2>
          <p className="body-lg text-navy-muted mt-4">Vraag een gratis websitescan aan en ontdek uw kansen in Groningen.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>Gratis websitescan</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
