import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { RelatedLinks } from '@/components/RelatedLinks'

export const metadata: Metadata = {
  title: 'Website laten maken in Utrecht | Elly Apps',
  description: 'Centraal gelegen, sterk concurrerend — Elly Apps helpt Utrechtse MKB-bedrijven groeien via een betere online aanwezigheid.',
  alternates: { canonical: 'https://elly-apps.nl/werkgebied/utrecht' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/werkgebied/utrecht',
    title: 'Website laten maken in Utrecht | Elly Apps',
    description: 'Centraal gelegen, sterk concurrerend — Elly Apps helpt Utrechtse MKB-bedrijven groeien via een betere online aanwezigheid.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken in Utrecht | Elly Apps',
    description: 'Centraal gelegen, sterk concurrerend — Elly Apps helpt Utrechtse MKB-bedrijven groeien via een betere online aanwezigheid.',
    images: ['/og-image.png'],
  },
}

export default function WerkgebiedUtrechtPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Elly Apps — Werkgebied Utrecht', url: 'https://elly-apps.nl/werkgebied/utrecht', areaServed: 'Utrecht' }) }} />
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Werkgebied</p>
          <h1 className="h1 text-ink">Website laten maken in Utrecht</h1>
          <p className="body-lg text-muted mt-4">Actief in Utrecht, Amersfoort, Nieuwegein, Zeist, Woerden en Houten — wij bouwen en beheren websites voor ondernemers in de provincie Utrecht.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <h2 className="h2 text-ink">Ondernemen in de provincie Utrecht</h2>
          <p>De hoofdstad van de provincie Utrecht is de stad <Link href="/stad/utrecht" className="text-brand-strong underline hover:no-underline">Utrecht</Link>. De provincie grenst onder meer aan Zuid-Holland, Gelderland en Noord-Holland. Het oosten wordt doorsneden door de Utrechtse Heuvelrug, de zuidgrens wordt deels gevormd door de Nederrijn en de Lek en ten noorden van de stad liggen de Vechtstreek en de Loosdrechtse Plassen. In de noordoosthoek ligt Amersfoort, in het zuiden liggen Nieuwegein en Houten en Zeist ligt aan de zuidflank van de Utrechtse Heuvelrug. Op het Utrecht Science Park in de stad Utrecht zijn onder meer de Hogeschool Utrecht, het UMC Utrecht en enkele faculteiten van de Universiteit Utrecht gevestigd.</p>
          <h2 className="h2 text-ink">Zo helpen wij ondernemers in de provincie Utrecht</h2>
          <p>Elly Apps helpt ondernemers in de provincie Utrecht met een professionele website, van een eenvoudige bedrijfswebsite tot een site met meerdere pagina's, passend bij uw branche in Utrecht. Op aanvraag bouwen wij ook een boekingssysteem of webshop.</p>
          <p>Onze websites zijn snel, mobielvriendelijk, hebben basis SEO en zijn volledig beheerd: hosting, SSL, updates en technisch onderhoud zijn inbegrepen. Lokale SEO en Google Business optimalisatie zitten in het Groei pakket en hoger, voor zoektermen relevant voor uw stad of regio binnen Utrecht en uw Google Business Profile.</p>
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
        title="Website laten maken per stad in Utrecht"
        className="bg-bg"
        links={[
          { label: "Website laten maken in Utrecht", href: "/stad/utrecht" },
          { label: "Website laten maken en beheren", href: "/diensten/websites" },
        ]}
      />

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Actief in Utrecht? Wij helpen u groeien.</h2>
          <p className="body-lg text-navy-muted mt-4">Vraag een gratis websitescan aan en ontdek uw kansen in Utrecht.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>Gratis websitescan</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
