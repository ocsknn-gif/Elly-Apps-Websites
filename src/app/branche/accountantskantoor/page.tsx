import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { RelatedLinks } from '@/components/RelatedLinks'
import { Faq } from '@/components/home/Faq'

export const metadata: Metadata = {
  title: 'Website laten maken voor accountantskantoor | Elly Apps',
  description: 'Website laten maken voor uw accountantskantoor? Professionele websites voor accountants en administratiekantoren, met basis SEO en een vaste prijs.',
  alternates: { canonical: 'https://elly-apps.nl/branche/accountantskantoor' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/branche/accountantskantoor',
    title: 'Website laten maken voor accountantskantoor | Elly Apps',
    description: 'Website laten maken voor uw accountantskantoor? Professionele websites voor accountants en administratiekantoren, met basis SEO en een vaste prijs.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken voor accountantskantoor | Elly Apps',
    description: 'Website laten maken voor uw accountantskantoor? Professionele websites voor accountants en administratiekantoren, met basis SEO en een vaste prijs.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website laten maken voor accountantskantoor',
  provider: { '@type': 'Organization', name: 'Elly Apps', url: 'https://elly-apps.nl' },
  description: 'Website laten maken voor uw accountantskantoor? Professionele websites voor accountants en administratiekantoren, met basis SEO en een vaste prijs.',
  areaServed: { '@type': 'Country', name: 'Netherlands' },
}

const faqItems = [
  { q: 'Wat moet er op de website van een accountantskantoor staan?', a: 'Een goede accountantswebsite bevat minimaal: een duidelijke dienstenpagina (jaarrekening, belastingaangifte, loonadministratie), een over-ons sectie met de expertise van uw team, klantcases of testimonials, contactgegevens en een contactformulier. SEO-geoptimaliseerde content rond zoekwoorden als "accountant [stad]" is essentieel voor vindbaarheid.' },
  { q: 'Hoe onderscheidt een accountantswebsite zich van de concurrentie?', a: 'De meeste accountantswebsites zien er hetzelfde uit. U onderscheidt zich door concreet te zijn: welke sectoren bedient u, welke bedrijfsgroottes, welke specifieke expertise? Wij helpen u dit helder te verwoorden en te vertalen naar een website die direct vertrouwen wekt.' },
  { q: 'Kan ik een klantomgeving toevoegen?', a: 'Een klantportaal waar cliënten documenten kunnen uploaden en downloaden is op aanvraag mogelijk, in overleg. Dit bespaart veel heen-en-weer mailen en verhoogt de professionele uitstraling.' },
  { q: 'Is een accountantswebsite duur?', a: 'Bij Elly Apps betaalt u €299 eenmalige setup en €49 per maand. Dat is inclusief hosting, SSL, updates en basis SEO. Er zijn geen verborgen kosten.' },
]

export default function AccountantskantoorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a }
        }))
      }) }} />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Branche</p>
          <h1 className="h1 text-ink">Website laten maken voor accountantskantoor</h1>
          <p className="body-lg text-muted mt-4">Een professionele, vertrouwenwekkende website voor uw accountantskantoor. Gevonden worden door MKB-ondernemers die op zoek zijn naar een betrouwbare accountant.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>
            Ondernemers die een accountant zoeken, vergelijken online. Ze bekijken de website,
            lezen over de expertise, zoeken naar ervaringen van andere klanten en beoordelen
            de uitstraling van het kantoor. Een verouderde of onduidelijke website kost u
            potentiële klanten — zelfs als u inhoudelijk superieur bent aan de concurrent.
            Een professionele accountantswebsite is uw digitale visitekaartje en uw
            belangrijkste marketingtool.
          </p>
          <h2 className="h2 text-ink pt-6">Wat maakt een goede accountantswebsite?</h2>
          <p>
            Een effectieve website voor een accountantskantoor wekt direct vertrouwen.
            Dit bereikt u door een professioneel en strak ontwerp, heldere informatie over
            uw diensten en tarieven, een duidelijke "over ons" sectie met foto's en
            achtergrond van uw team, en aantoonbare expertise via klantcases, specialisaties
            of sectorfocus. Wij helpen u dit alles helder en overtuigend te presenteren —
            zodat een bezoeker binnen tien seconden begrijpt waarom uw kantoor de juiste keuze is.
          </p>
          <h2 className="h2 text-ink pt-6">Gevonden worden door MKB-ondernemers</h2>
          <p>
            De meeste accountants worden gevonden via Google. Zoektermen als "accountant
            [stad]", "boekhouder MKB" of "belastingaangifte zzp" worden
            regelmatig gezocht. Wij optimaliseren uw website specifiek voor deze
            zoekwoorden — zodat u bovenaan verschijnt wanneer ondernemers in uw regio op
            zoek zijn naar een accountant. Dit is duurzame marketing die maand na maand
            nieuwe klanten oplevert, zonder advertentiekosten.
          </p>
          <h2 className="h2 text-ink pt-6">Klantportaal</h2>
          <p>
            Steeds meer accountantskantoren kiezen voor een digitaal klantportaal waar
            cliënten documenten kunnen uploaden, jaarrekeningen kunnen downloaden en
            vragen kunnen stellen. Een portaal is op aanvraag mogelijk, in overleg. Dit bespaart uw team tijd en verhoogt
            de tevredenheid van uw klanten.
          </p>
          <h2 className="h2 text-ink pt-6">Specialisaties en sectorfocus</h2>
          <p>
            Veel accountantskantoren hebben een specialisatie — in een bepaalde sector,
            een bepaalde bedrijfsgrootte of een specifiek type dienstverlening. Wij vertalen
            uw specialisatie naar gerichte landingspagina's die ranken op de specifieke
            zoektermen van uw doelgroep. Een kantoor dat gespecialiseerd is in horecaboekhouding
            scoort daarmee op "boekhouder horeca" — een zoekwoord met hoge conversiekans.
          </p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Vertrouwenwekkend en professioneel ontwerp',
            'SEO voor "accountant [stad]" zoektermen',
            'Klantportaal op aanvraag, in overleg',
            'Specialisatie landingspagina\'s',
            'Google Business optimalisatie',
            'Volledig beheerd, vaste prijs',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 body text-ink">
              <CheckCircleIcon className="size-5 text-brand shrink-0" aria-hidden="true" />
              {f}
            </div>
          ))}
        </div>
      </section>

      <Faq items={faqItems} title="Veelgestelde vragen over accountantswebsites" className="bg-bg" />

      <RelatedLinks
        id="gerelateerd-titel"
        title="Gerelateerde pagina's"
        links={[
          { label: "Website laten maken en beheren", href: "/diensten/websites" },
          { label: "Wat kost een website? Bekijk de prijzen", href: "/prijzen" },
          { label: "SEO voor het MKB", href: "/diensten/seo" },
          { label: "Website laten maken voor een zorgpraktijk", href: "/branche/zorg" },
          { label: "7 praktische SEO tips voor MKB-bedrijven in 2026", href: "/blog/seo-tips-mkb" },
          { label: "Website laten maken per branche", href: "/branche" },
        ]}
      />

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Website voor uw accountantskantoor?</h2>
          <p className="body-lg text-navy-muted mt-4">Vraag een gratis websitescan aan en ontdek hoe wij meer klanten naar uw kantoor brengen.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>Gratis websitescan</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
