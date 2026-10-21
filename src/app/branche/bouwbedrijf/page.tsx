import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { RelatedLinks } from '@/components/RelatedLinks'
import { Faq } from '@/components/home/Faq'
import { organizationRef } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Website laten maken voor bouwbedrijf | Elly Apps',
  description: 'Website laten maken voor uw bouwbedrijf? Portfolio, offerteformulier en basis SEO voor aannemers en bouwbedrijven. Vanaf €49 per maand.',
  alternates: { canonical: 'https://elly-apps.nl/branche/bouwbedrijf' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/branche/bouwbedrijf',
    title: 'Website laten maken voor bouwbedrijf | Elly Apps',
    description: 'Website laten maken voor uw bouwbedrijf? Portfolio, offerteformulier en basis SEO voor aannemers en bouwbedrijven. Vanaf €49 per maand.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken voor bouwbedrijf | Elly Apps',
    description: 'Website laten maken voor uw bouwbedrijf? Portfolio, offerteformulier en basis SEO voor aannemers en bouwbedrijven. Vanaf €49 per maand.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website laten maken voor bouwbedrijf',
  provider: organizationRef,
  description: 'Professionele websites voor bouwbedrijven en aannemers. Portfolio, offerteformulier en basis SEO.',
  areaServed: { '@type': 'Country', name: 'Netherlands' },
}

const faqItems = [
  { q: 'Wat moet er op de website van een bouwbedrijf staan?', a: 'Een effectieve bouwbedrijfswebsite bevat: een portfolio met afgeronde projecten (bij voorkeur met voor/na-foto\'s), een duidelijke dienstenpagina, referenties van tevreden klanten, een offerteformulier en uw contactgegevens. Lokale SEO (Groei pakket en hoger) helpt u gevonden te worden door mensen die zoeken op "aannemer [stad]".' },
  { q: 'Hoe laat ik mijn portfolio zien op mijn website?', a: 'Wij bouwen een professionele portfolio sectie waar u uw afgeronde projecten kunt tonen met foto\'s, een korte beschrijving en de gebruikte materialen of technieken. U kunt dit zelf bijwerken via een eenvoudig beheerpaneel.' },
  { q: 'Kan ik online offertes aanvragen via mijn website?', a: 'Ja. Wij integreren een slim offerteformulier waarbij potentiële klanten hun project kunnen beschrijven, foto\'s kunnen uploaden en hun contactgegevens invullen. U ontvangt direct een melding en kunt snel reageren.' },
  { q: 'Werken jullie ook voor zelfstandige aannemers?', a: 'Absoluut. Ons Starter pakket (€49/mnd) is bedoeld voor zelfstandige aannemers die een professionele online aanwezigheid willen. Volledig beheerd en betaalbaar.' },
]

export default function BouwbedrijfPage() {
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
          <h1 className="h1 text-ink">Website laten maken voor bouwbedrijf</h1>
          <p className="body-lg text-muted mt-4">Een professionele website voor uw bouwbedrijf of aannemer — met portfolio, offerteformulier en basis SEO.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>
            Particulieren en bedrijven die een aannemer of bouwbedrijf zoeken, beginnen hun
            zoektocht steeds vaker online. Ze zoeken op Google, bekijken websites, lezen reviews
            en vragen via een formulier een offerte aan. Bouwbedrijven die niet goed vindbaar
            zijn online, kunnen deze opdrachten mislopen — ongeacht hoe goed hun vakmanschap is.
            Een professionele website is voor elk bouwbedrijf de basis van moderne
            klantacquisitie.
          </p>
          <h2 className="h2 text-ink pt-6">Uw portfolio online: laat uw werk spreken</h2>
          <p>
            Het sterkste verkoopargument voor een bouwbedrijf is uw eerdere werk. Wij bouwen
            een professionele portfolio sectie waar u uw afgeronde projecten kunt tonen —
            nieuwbouw, renovaties, verbouwingen, dakkapellen, aanbouwen. Met voor/na-foto's,
            een korte beschrijving en eventueel een quote van de opdrachtgever. Dit laat
            potentiële klanten zien wat u kunt.
          </p>
          <h2 className="h2 text-ink pt-6">Online offertes via uw website</h2>
          <p>
            Een slim offerteformulier op uw website werkt 24/7. Potentiële klanten beschrijven
            hun project, uploaden foto's van de situatie en vullen hun contactgegevens in.
            U ontvangt direct een melding en kunt snel reageren. Snel reageren is in de bouw
            belangrijk. Wij configureren het formulier zo dat het de informatie vraagt
            die u nodig heeft.
          </p>
          <h2 className="h2 text-ink pt-6">Lokale SEO voor bouwbedrijven</h2>
          <p>
            Mensen zoeken doorgaans op lokale termen: "aannemer Utrecht", "verbouwing
            Amsterdam", "dakkapel plaatsen Den Haag". Lokale SEO en Google Business optimalisatie zitten in het Groei pakket en hoger.
            Daarmee optimaliseren wij uw website voor deze zoektermen — met gerichte content
            per dienst en per regio — en richten wij uw Google Business Profile in, zodat u
            beter vindbaar kunt zijn in de lokale zoekresultaten. Werkt u in een van de genoemde steden? Bekijk dan onze
            pagina's over
            {' '}<Link href="/stad/utrecht" className="text-brand-strong underline hover:no-underline">website laten maken in Utrecht</Link>,
            {' '}<Link href="/stad/amsterdam" className="text-brand-strong underline hover:no-underline">website laten maken in Amsterdam</Link> en
            {' '}<Link href="/stad/den-haag" className="text-brand-strong underline hover:no-underline">website laten maken in Den Haag</Link>.
          </p>
          <h2 className="h2 text-ink pt-6">Professionele uitstraling, betaalbare prijs</h2>
          <p>
            Veel bouwbedrijven hebben een slechte of verouderde website — of helemaal geen.
            Met een professionele Elly Apps website kunt u
            zich onderscheiden van de concurrentie. Onze websites zijn ontworpen om vertrouwen te
            wekken: strak, overzichtelijk en gericht op conversie. Voor een vaste maandprijs
            vanaf €49 heeft u een complete online aanwezigheid inclusief hosting, updates en
            technische ondersteuning.
          </p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Professionele portfolio sectie',
            'Slim offerteformulier met foto-upload',
            'Basis SEO; lokale SEO in het Groei pakket en hoger',
            'Google Business optimalisatie in het Groei pakket en hoger',
            'Mobielvriendelijk en snel',
            'Volledig beheerd, vaste prijs',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 body text-ink">
              <CheckCircleIcon className="size-5 text-brand shrink-0" aria-hidden="true" />
              {f}
            </div>
          ))}
        </div>
      </section>

      <Faq items={faqItems} title="Veelgestelde vragen over websites voor bouwbedrijven" className="bg-bg" />

      <RelatedLinks
        id="gerelateerd-titel"
        title="Gerelateerde pagina's"
        links={[
          { label: "Website laten maken en beheren", href: "/diensten/websites" },
          { label: "Wat kost een website? Bekijk de prijzen", href: "/prijzen" },
          { label: "Website laten maken voor een schildersbedrijf", href: "/branche/schilder" },
          { label: "Website laten maken voor een loodgieter", href: "/branche/loodgieter" },
          { label: "Wat kost een website laten maken in 2026?", href: "/blog/wat-kost-een-website" },
          { label: "Website laten maken per branche", href: "/branche" },
        ]}
      />

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Website voor uw bouwbedrijf?</h2>
          <p className="body-lg text-navy-muted mt-4">Vraag een gratis websitescan aan en ontdek de kansen voor uw bouwbedrijf.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>Gratis websitescan</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
