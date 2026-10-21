import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { RelatedLinks } from '@/components/RelatedLinks'

export const metadata: Metadata = {
  title: 'Website of app laten maken in Groningen | Elly Apps',
  description: 'Website of app laten maken in Groningen? Elly Apps bouwt en beheert websites voor lokale ondernemers en bouwt ook apps. Vanaf €49 per maand voor websites.',
  alternates: { canonical: 'https://elly-apps.nl/werkgebied/groningen' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/werkgebied/groningen',
    title: 'Website of app laten maken in Groningen | Elly Apps',
    description: 'Website of app laten maken in Groningen? Elly Apps bouwt en beheert websites voor lokale ondernemers en bouwt ook apps. Vanaf €49 per maand voor websites.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website of app laten maken in Groningen | Elly Apps',
    description: 'Website of app laten maken in Groningen? Elly Apps bouwt en beheert websites voor lokale ondernemers en bouwt ook apps. Vanaf €49 per maand voor websites.',
    images: ['/og-image.png'],
  },
}

export default function WerkgebiedGroningenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Elly Apps — Werkgebied Groningen', url: 'https://elly-apps.nl/werkgebied/groningen', areaServed: 'Groningen' }) }} />
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Werkgebied</p>
          <h1 className="h1 text-ink">Website laten maken in Groningen</h1>
          <p className="body-lg text-muted mt-4">Actief in Groningen, Hoogezand, Veendam, Stadskanaal, Winschoten en Delfzijl — wij bouwen professionele websites voor lokale ondernemers in de provincie Groningen.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <h2 className="h2 text-ink">Ondernemen in de provincie Groningen</h2>
          <p>De provincie Groningen grenst in het noorden aan de Waddenzee, in het westen aan Friesland, in het zuiden aan Drenthe en in het oosten aan Duitsland. Er liggen tien gemeenten: Eemsdelta, Groningen, Het Hogeland, Midden-Groningen, Oldambt, Pekela, Stadskanaal, Veendam, Westerkwartier en Westerwolde. Van oudsher is de provincie vooral een landbouwgebied; dienstverlening en handel zijn geconcentreerd in <Link href="/stad/groningen" className="text-brand-strong underline hover:no-underline">de stad Groningen</Link>. Groningen Seaports beheert de havens van Delfzijl en de Eemshaven. In Delfzijl ligt een chemiepark en bij de Eemshaven staan energiecentrales en een datacenter van Google.</p>
          <h2 className="h2 text-ink">Website of app laten maken in Groningen</h2>
          <p>In de provincie Groningen is online zichtbaarheid belangrijk omdat de regio groot en verspreid is. Elly Apps helpt ondernemers in Groningen met een professionele website, van een eenvoudige bedrijfswebsite tot een site met meerdere pagina's, passend bij uw branche. Op aanvraag bouwen wij ook een boekingssysteem of webshop. Heeft u een app nodig? Lees meer over <Link href="/diensten/apps" className="text-brand-strong underline hover:no-underline">app laten maken</Link>.</p>
          <p>Onze websites zijn snel, mobielvriendelijk, hebben basis SEO en zijn volledig beheerd: hosting, SSL, updates en technisch onderhoud zijn inbegrepen. Lokale SEO en Google Business optimalisatie zitten in het Groei pakket en hoger, voor zoektermen relevant voor uw stad of regio binnen Groningen en uw Google Business Profile.</p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {['Basis SEO; lokale SEO in het Groei pakket en hoger', 'Mobielvriendelijk en snel', 'Google Business optimalisatie in het Groei pakket en hoger', 'Hosting, SSL en onderhoud inbegrepen', 'Professioneel ontwerp op maat'].map((f) => (
            <div key={f} className="flex items-center gap-3 body text-ink"><CheckCircleIcon className="size-5 text-brand shrink-0" aria-hidden="true" />{f}</div>
          ))}
        </div>
      </section>

      <RelatedLinks
        id="steden-titel"
        title="Website laten maken per stad in Groningen"
        className="bg-bg"
        links={[
          { label: "Website laten maken in Groningen", href: "/stad/groningen" },
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
