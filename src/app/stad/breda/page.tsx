import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { RelatedLinks } from '@/components/RelatedLinks'
import { Faq } from '@/components/home/Faq'

export const metadata: Metadata = {
  title: 'Website laten maken Breda | Elly Apps',
  description: 'Website laten maken in Breda? Elly Apps bouwt snelle, betaalbare websites voor ondernemers in Breda. Vraag een gratis offerte aan.',
  alternates: { canonical: 'https://elly-apps.nl/stad/breda' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/stad/breda',
    title: 'Website laten maken Breda | Elly Apps',
    description: 'Website laten maken in Breda? Elly Apps bouwt snelle, betaalbare websites voor ondernemers in Breda. Vraag een gratis offerte aan.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken Breda | Elly Apps',
    description: 'Website laten maken in Breda? Elly Apps bouwt snelle, betaalbare websites voor ondernemers in Breda. Vraag een gratis offerte aan.',
    images: ['/og-image.png'],
  },
}

const faq = [
  { q: 'Wat kost een website laten maken in Breda?', a: 'Een website via Elly Apps begint vanaf €299 eenmalige setup plus €49 per maand, inclusief hosting, onderhoud en basis SEO-optimalisatie. De prijs hangt af van het aantal pagina\'s en de gewenste functionaliteit. Vraag een gratis offerte aan voor een exacte prijs.' },
  { q: 'Hoe snel is mijn website klaar?', a: 'Websites zijn gemiddeld binnen twee weken live. Bij complexere projecten stemmen we de planning vooraf af.' },
  { q: 'Wordt mijn website gevonden in Google?', a: 'Ja. Wij optimaliseren elke website voor zoekmachines, met extra aandacht voor lokale zoektermen in Breda en omgeving.' },
  { q: 'Bouwen jullie ook webshops?', a: 'Ja, wij bouwen webshops voor ondernemers in Breda. Neem contact op voor de mogelijkheden en een offerte.' },
  { q: 'Werken jullie alleen in Breda?', a: 'Nee, wij werken voor ondernemers door heel Nederland. Maar wij kennen de Bredase markt goed en helpen lokale bedrijven graag.' },
  { q: 'Zit er een maandelijkse kost aan vast?', a: 'Ja, naast de eenmalige setup van €299 betaalt u €49 per maand. Dat is inclusief hosting, onderhoud en basis SEO-optimalisatie.' },
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

export default function BredaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Breda</p>
          <h1 className="h1 text-ink">Website laten maken in Breda</h1>
          <p className="body-lg text-muted mt-4">Lokale ondernemers in Breda verdienen een website die écht werkt. Wij bouwen snelle, professionele websites — betaalbaar en zonder gedoe.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>Ben je ondernemer in Breda en wil je online beter gevonden worden? Een professionele website is tegenwoordig onmisbaar. Of je nu een winkel in het centrum runt, een bouwbedrijf hebt in Teteringen of een dienst aanbiedt in de regio — Elly Apps bouwt een website die past bij jouw bedrijf en jouw doelgroep.</p>
          <p>Breda is een groeiende stad met een levendige ondernemersscene. Van de sfeervolle binnenstad tot de moderne bedrijventerreinen — de concurrentie is groot. Met een sterke online aanwezigheid val jij op. Elly Apps combineert strak design, snelle laadtijden en lokale SEO zodat jouw website gevonden wordt door klanten in Breda en omgeving.</p>
          <p>Wij kennen de Bredase markt. We bouwen websites die aansluiten bij de lokale doelgroep — van de horeca in de binnenstad tot de zorg- en bouwsector. Onze klanten kiezen voor ons omdat we snel werken, eerlijk communiceren en resultaat leveren. Na de oplevering laten wij je niet los: wij bieden doorlopend onderhoud zodat jouw website altijd up-to-date blijft.</p>
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

      <Faq items={faq} title="Veelgestelde vragen over website laten maken in Breda" className="bg-bg" />

      <RelatedLinks
        id="gerelateerd-titel"
        title="Gerelateerde pagina's"
        className="bg-bg"
        links={[
          { label: "Website laten maken in Noord-Brabant", href: "/werkgebied/noord-brabant" },
          { label: "Website laten maken in Eindhoven", href: "/stad/eindhoven" },
          { label: "Website laten maken in Tilburg", href: "/stad/tilburg" },
          { label: "Website laten maken in Den Bosch", href: "/stad/den-bosch" },
          { label: "App laten maken in Breda", href: "/apps/breda" },
          { label: "Website laten maken en beheren", href: "/diensten/websites" },
        ]}
      />

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Actief in Breda? Wij helpen u groeien.</h2>
          <p className="body-lg text-navy-muted mt-4">Vraag een gratis websitescan aan en ontdek uw kansen in Breda.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>Gratis websitescan</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
