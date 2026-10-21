import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { RelatedLinks } from '@/components/RelatedLinks'
import { Faq } from '@/components/home/Faq'

export const metadata: Metadata = {
  title: 'Horeca website laten maken | Elly Apps',
  description: 'Horeca website laten maken? Online menu en basis SEO voor restaurants, cafés en hotels, vanaf €49 per maand. Reserveren is een aparte uitbreiding.',
  alternates: { canonical: 'https://elly-apps.nl/branche/horeca' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/branche/horeca',
    title: 'Horeca website laten maken | Elly Apps',
    description: 'Horeca website laten maken? Online menu en basis SEO voor restaurants, cafés en hotels, vanaf €49 per maand. Reserveren is een aparte uitbreiding.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Horeca website laten maken | Elly Apps',
    description: 'Horeca website laten maken? Online menu en basis SEO voor restaurants, cafés en hotels, vanaf €49 per maand. Reserveren is een aparte uitbreiding.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Horeca website laten maken',
  provider: { '@type': 'Organization', name: 'Elly Apps', url: 'https://elly-apps.nl' },
  description: 'Horeca website laten maken? Online menu en basis SEO voor restaurants, cafés en hotels, vanaf €49 per maand. Reserveren is een aparte uitbreiding.',
  areaServed: { '@type': 'Country', name: 'Netherlands' },
}

const faqItems = [
  { q: 'Wat kost een horeca website laten maken?', a: 'Een professionele horecawebsite bij Elly Apps begint vanaf €299 eenmalige setup en €49 per maand. Daarin zijn hosting, SSL, updates en basis SEO inbegrepen. Voor uitgebreidere functies zoals online reserveringen of bestelsystemen zijn aparte uitbreidingen op offerte mogelijk.' },
  { q: 'Kan ik zelf mijn menu bijwerken op de website?', a: 'Ja. Wij bouwen een eenvoudig beheerpaneel waarmee u zelf uw menu kunt bijwerken — geen technische kennis nodig. Verandert er een prijs of een gerecht? U past het zelf aan in enkele klikken.' },
  { q: 'Werken jullie ook met bezorging of afhaal?', a: 'Ja. Wij kunnen een online bestelmodule integreren waarmee gasten direct via uw website kunnen bestellen voor bezorging of afhaal — zonder commissie aan platformen als Thuisbezorgd of Uber Eats.' },
  { q: 'Hoe snel kan mijn horeca website live?', a: 'Wij leveren gemiddeld binnen twee weken op. Na een gratis kennismakingsgesprek starten wij direct met het ontwerp en de technische opzet.' },
  { q: 'Zijn Google Maps en reviews inbegrepen?', a: 'Ja. Wij optimaliseren uw Google Business Profile en integreren uw reviews op de website. Dit verhoogt zowel uw vindbaarheid als het vertrouwen van nieuwe gasten.' },
]

export default function HorecaPage() {
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
          <h1 className="h1 text-ink">Horeca website laten maken</h1>
          <p className="body-lg text-muted mt-4">Meer gasten via Google. Een professionele horecawebsite met online menu en lokale SEO — volledig beheerd vanaf €49 per maand.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>
            De horeca is een van de meest competitieve sectoren van Nederland. Gasten kiezen
            hun restaurant, café of hotel al online — op basis van de website, de foto's, het
            menu en de reviews. Een slechte of verouderde website kost u gasten. Een professionele
            horecawebsite, geoptimaliseerd voor Google, is geen luxe maar een noodzaak voor elk serieus horecabedrijf.
          </p>
          <h2 className="h2 text-ink pt-6">Wat heeft een goede horecawebsite nodig?</h2>
          <p>
            Een effectieve horecawebsite doet meer dan er goed uitzien. Ten eerste moet de website
            snel laden — zeker op mobiel, want meer dan 70 procent van de zoekopdrachten naar
            horeca vindt plaats op een smartphone. Ten tweede moet uw menu duidelijk en aantrekkelijk
            gepresenteerd worden, inclusief foto's, prijzen en allergeneninformatie. Ten derde moeten
            gasten makkelijk een tafel kunnen reserveren; een online reserveringssysteem voegen wij
            toe als aparte uitbreiding. En ten vierde moet de website vindbaar zijn in Google — voor zoektermen als "restaurant [stad]"
            of "[uw type keuken] [stad]".
          </p>
          <h2 className="h2 text-ink pt-6">Online bestellen zonder commissie</h2>
          <p>
            Platforms zoals Thuisbezorgd en Uber Eats zijn handig voor bereik, maar de commissies
            (15 tot 30 procent per bestelling) vreten aan uw marge. Wij bouwen een eigen
            bestelmodule op uw website waarmee klanten direct bij u bestellen — zonder
            tussenkomst van een platform. U betaalt geen commissie en u heeft directe controle
            over de klantrelatie. Gecombineerd met een Google Ads campagne of lokale SEO is dit
            een krachtige manier om uw online omzet te vergroten.
          </p>
          <h2 className="h2 text-ink pt-6">Lokale SEO voor horeca: zo werkt het</h2>
          <p>
            Wanneer iemand zoekt op "restaurant Amsterdam-West" of "sushi bezorgen Utrecht",
            bepaalt Google welke bedrijven bovenaan verschijnen op basis van drie factoren:
            relevantie, afstand en bekendheid. Wij optimaliseren uw website en Google Business
            Profile op alle drie deze factoren. Wij voegen de juiste zoekwoorden toe, zorgen
            voor consistente NAP-gegevens (naam, adres, telefoonnummer) en helpen u actief
            meer reviews te verzamelen. Het resultaat: structureel meer gasten via Google.
          </p>
          <h2 className="h2 text-ink pt-6">Voor welke horecabedrijven werken wij?</h2>
          <p>
            Elly Apps bouwt websites voor alle soorten horecabedrijven: restaurants van alle
            keukens, cafés en kroegen, lunchrooms en koffiezaken, hotels en B&Bs,
            cateringbedrijven, foodtrucks en pop-up restaurants. Elk type zaak heeft andere
            behoeften en een andere doelgroep — wij passen de website daarop aan.
          </p>
          <h2 className="h2 text-ink pt-6">Volledig ontzorgd, vaste prijs</h2>
          <p>
            U heeft genoeg aan uw hoofd als horecaondernemer. Wij nemen uw online aanwezigheid
            volledig over. Van het eerste ontwerp tot de dagelijkse updates, van de technische
            monitoring tot de maandelijkse SEO-rapportage — wij regelen het allemaal. Voor een
            vaste maandprijs, zonder verrassingen.
          </p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Online menu met foto\'s en allergenen',
            'Reserveringssysteem (optionele uitbreiding)',
            'Bestelmodule zonder commissie',
            'Lokale SEO en Google Business',
            'Reviews integratie',
            'Volledig beheerd, vaste prijs',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 body text-ink">
              <CheckCircleIcon className="size-5 text-brand shrink-0" aria-hidden="true" />
              {f}
            </div>
          ))}
        </div>
      </section>

      <Faq items={faqItems} title="Veelgestelde vragen over horeca websites" className="bg-bg" />

      <RelatedLinks
        id="gerelateerd-titel"
        title="Gerelateerde pagina's"
        links={[
          { label: "Website laten maken en beheren", href: "/diensten/websites" },
          { label: "Wat kost een website? Bekijk de prijzen", href: "/prijzen" },
          { label: "Website laten maken voor restaurants", href: "/branche/restaurant" },
          { label: "Online boekingssysteem voor uw website", href: "/diensten/boekingssysteem" },
          { label: "Website laten maken voor een restaurant in 2026", href: "/blog/restaurant" },
          { label: "Website laten maken per branche", href: "/branche" },
        ]}
      />

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Horeca website laten maken?</h2>
          <p className="body-lg text-navy-muted mt-4">Vraag een gratis websitescan aan en ontdek hoe wij meer gasten naar uw zaak brengen.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>Gratis websitescan</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
