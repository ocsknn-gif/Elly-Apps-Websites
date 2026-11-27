import type { Metadata } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { RelatedLinks } from '@/components/RelatedLinks'
import { Faq } from '@/components/home/Faq'
import { BranchePrijzen } from '@/components/branches/BranchePrijzen'
import ContactLink from '@/components/ContactLink'
import { serviceSchema } from '@/lib/schema'

const url = 'https://elly-apps.nl/stad/aalsmeer'
const title = 'Website laten maken Aalsmeer | Webdesign | Elly Apps'
const description =
  'Website laten maken in Aalsmeer? Elly Apps is gevestigd in Aalsmeer. Direct contact met de oprichter, volledig beheerd vanaf €49 per maand excl. BTW.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/og-image.png'] },
}

const faq = [
  { q: 'Wat kost een website laten maken in Aalsmeer?', a: 'Het Starter pakket kost €49 per maand met €299 eenmalige setup. Groei kost €199 per maand met €499 eenmalige setup. Bij Pro is de eenmalige setup €799 en de maandprijs op aanvraag. Alle prijzen zijn exclusief BTW.' },
  { q: 'Komen jullie langs voor een gesprek?', a: 'Het contact verloopt online en telefonisch. U spreekt daarbij rechtstreeks met de oprichter.' },
  { q: 'Hoe snel staat mijn website online?', a: 'Gemiddeld staat uw website binnen twee weken online. Afhankelijk van de complexiteit kan dit variëren.' },
  { q: 'Wordt mijn website gevonden in Aalsmeer?', a: 'Basis SEO zit in elk pakket. Lokale SEO en Google Business optimalisatie horen bij het Groei pakket en hoger. Een positie in Google kunnen wij niet garanderen.' },
  { q: 'Zit ik vast aan een contract?', a: 'Het contract heeft een looptijd van 1 jaar, die begint bij uw schriftelijke akkoord, en wordt daarna steeds met 1 jaar verlengd. Opzeggen kan tot 1 kalendermaand voor het einde van de looptijd.' },
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
  name: 'Website laten maken in Aalsmeer',
  url,
  description,
  areaServed: { '@type': 'City', name: 'Aalsmeer' },
})

const link = 'text-brand-strong underline hover:no-underline'

export default function AalsmeerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Aalsmeer</p>
          <h1 className="h1 text-ink">Website laten maken in Aalsmeer</h1>
          <p className="body-lg text-muted mt-4">Webdesign van een bedrijf uit Aalsmeer: u spreekt rechtstreeks met de oprichter en wij regelen de bouw, de hosting en het onderhoud.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <h2 className="h2 text-ink">Direct contact met de oprichter</h2>
          <p>Elly Apps is opgericht door Omer Coskun en gevestigd in Aalsmeer. U belt of mailt niet met een helpdesk, maar met degene die verantwoordelijk is voor uw website. Het contact verloopt online en telefonisch, zodat u uw zaak niet hoeft te verlaten. Lees meer <Link href="/over-ons" className={link}>over Elly Apps</Link>.</p>
          <p>Uw website staat gemiddeld binnen twee weken online. U krijgt een feedbackronde, daarna gaan we live. In het maandelijkse beheer zitten hosting, SSL en 30 minuten kleine wijzigingen per maand.</p>

          <h2 className="h2 text-ink pt-6">Websites voor ondernemers in Aalsmeer</h2>

          <h3 className="h3 text-ink pt-2">Bloemen en sierteelt</h3>
          <p>Aalsmeer is bekend om de bloemenveiling en de sierteelt. Voor een kweker, exporteur, bloemist of toeleverancier werkt een site die snel duidelijk maakt wat u levert, aan wie en in welk seizoen. Denk aan een overzicht van uw assortiment, foto’s van eigen producten, een formulier voor zakelijke aanvragen en, als u exporteert, een versie in het Engels op offertebasis.</p>

          <h3 className="h3 text-ink pt-2">Bouw en vakmensen</h3>
          <p>Wie een vakman zoekt, wil zien wat u eerder heeft gemaakt en of u in de buurt werkt. Zet projectfoto’s, uw werkgebied en een offerteformulier vooraan, met uw telefoonnummer aanklikbaar op mobiel. Bekijk de pagina’s voor <Link href="/branche/schilder" className={link}>schilders</Link>, <Link href="/branche/loodgieter" className={link}>loodgieters</Link> en <Link href="/branche/bouwbedrijf" className={link}>bouwbedrijven</Link>.</p>

          <h3 className="h3 text-ink pt-2">Kappers en horeca</h3>
          <p>Gasten en klanten kijken vooral op hun telefoon naar openingstijden, prijzen of de menukaart en het adres. Online reserveren of afspraken plannen kan als aparte uitbreiding. Lees meer over een website voor een <Link href="/branche/kapper" className={link}>kapper</Link>, <Link href="/branche/restaurant" className={link}>restaurant</Link> of <Link href="/branche/horeca" className={link}>horecazaak</Link>.</p>

          <h3 className="h3 text-ink pt-2">Watersport en recreatie</h3>
          <p>Rond de Westeinderplassen draait veel om het seizoen. Een jachthaven, botenverhuur of watersportbedrijf is geholpen met duidelijke tarieven, ligging en parkeren, actuele openingstijden en een aanvraagformulier. Online boeken met beschikbaarheid vraagt een <Link href="/diensten/boekingssysteem" className={link}>boekingssysteem</Link>, een aparte uitbreiding op offertebasis.</p>

          <h2 className="h2 text-ink pt-6">Kudelstaart, Amstelveen, Hoofddorp en Uithoorn</h2>
          <p>Wij werken ook voor ondernemers in Kudelstaart, Amstelveen, Hoofddorp en Uithoorn. Werkt u in meerdere plaatsen, dan benoemen wij uw werkgebied duidelijk op de website, zodat bezoekers direct zien of u bij hen in de buurt actief bent.</p>

          <h2 className="h2 text-ink pt-6">Contact</h2>
          <p>
            Telefoon:{' '}
            <ContactLink type="phone" location="stad-aalsmeer" className={link}>06 36 27 85 15</ContactLink>
            <br />
            E-mail: <a href="mailto:info@elly-apps.nl" className={link}>info@elly-apps.nl</a>
            <br />
            Gevestigd in Aalsmeer
          </p>
        </div>
      </section>

      <BranchePrijzen title="Wat kost een website in Aalsmeer?">
        U betaalt eenmalig voor de setup en daarna een vaste maandprijs.
      </BranchePrijzen>

      <Faq items={faq} title="Veelgestelde vragen over een website laten maken in Aalsmeer" className="bg-surface" />

      <RelatedLinks
        id="gerelateerd-titel"
        title="Gerelateerde pagina's"
        className="bg-bg"
        links={[
          { label: "Website laten maken in Noord-Holland", href: "/werkgebied/noord-holland" },
          { label: "Website laten maken in Amsterdam", href: "/stad/amsterdam" },
          { label: "Website laten maken en beheren", href: "/diensten/websites" },
          { label: "Website laten maken per branche", href: "/branche" },
        ]}
      />

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Ondernemer in Aalsmeer?</h2>
          <p className="body-lg text-navy-muted mt-4">Vraag een gratis websitescan aan en ontdek de kansen voor uw bedrijf.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>Gratis websitescan</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
