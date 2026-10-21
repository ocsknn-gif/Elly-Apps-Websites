import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Faq } from '@/components/home/Faq'

export const metadata: Metadata = {
  title: 'App ontwikkelaar Noord-Holland | Elly Apps',
  description: 'App ontwikkelaar in Noord-Holland? Elly Apps bouwt web-apps en mobiele apps voor MKB-bedrijven in Amsterdam, Haarlem, Alkmaar en heel Noord-Holland.',
  alternates: { canonical: 'https://elly-apps.nl/apps/noord-holland' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/apps/noord-holland',
    title: 'App ontwikkelaar Noord-Holland | Elly Apps',
    description: 'App ontwikkelaar in Noord-Holland? Elly Apps bouwt web-apps en mobiele apps voor MKB-bedrijven in Amsterdam, Haarlem, Alkmaar en heel Noord-Holland.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App ontwikkelaar Noord-Holland | Elly Apps',
    description: 'App ontwikkelaar in Noord-Holland? Elly Apps bouwt web-apps en mobiele apps voor MKB-bedrijven in Amsterdam, Haarlem, Alkmaar en heel Noord-Holland.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elly Apps — App ontwikkelaar Noord-Holland',
  url: 'https://elly-apps.nl/apps/noord-holland',
  areaServed: { '@type': 'State', name: 'Noord-Holland' },
  description: 'App ontwikkelaar in Noord-Holland? Elly Apps bouwt web-apps en mobiele apps voor MKB-bedrijven in Amsterdam, Haarlem, Alkmaar en heel Noord-Holland.',
}

const faqItems = [
  { q: 'In welke steden in Noord-Holland werken jullie?', a: 'Wij werken voor bedrijven door heel Noord-Holland: Amsterdam, Haarlem, Alkmaar, Zaandam, Hoorn, Den Helder, Purmerend en alle omliggende gemeenten. Onze samenwerking verloopt grotendeels online, dus locatie is nooit een belemmering.' },
  { q: 'Wat is het verschil tussen een web-app en een mobiele app?', a: 'Een web-app draait in de browser en is toegankelijk via elke smartphone, tablet of computer zonder installatie. Een mobiele app wordt geïnstalleerd via de App Store of Google Play. Voor de meeste MKB-bedrijven is een web-app de beste keuze: goedkoper, sneller te bouwen en makkelijker te onderhouden.' },
  { q: 'Kunnen jullie ook een app bouwen voor mijn franchise?', a: 'Ja. Wij bouwen schaalbare applicaties voor franchiseketens waarbij meerdere vestigingen toegang hebben tot één centraal systeem met lokale aanpassingsmogelijkheden.' },
  { q: 'Hoe krijg ik een offerte?', a: 'Op uw aanvraag reageren wij binnen één werkdag. Na een gratis kennismakingsgesprek van 30-45 minuten ontvangt u een gedetailleerde offerte met een vaste prijs en een realistische planning.' },
]

export default function AppNoordHollandPage() {
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
          <p className="text-sm text-brand-strong font-medium mb-2">Noord-Holland</p>
          <h1 className="h1 text-ink">
            App ontwikkelaar in Noord-Holland
          </h1>
          <p className="body-lg text-muted mt-4">
            Professionele web-apps en mobiele apps voor MKB-bedrijven in Amsterdam, Haarlem,
            Alkmaar en heel Noord-Holland. AI-gedreven, vaste prijs en volledig ontzorgd.
          </p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>
            Noord-Holland is de meest economisch actieve provincie van Nederland. Amsterdam
            als internationale zakenhub, Haarlem als creatieve stad, Alkmaar als handelscentrum
            en talloze innovatieve bedrijven in de regio — Noord-Holland bruist van
            ondernemersactiviteit. En steeds meer van die ondernemers ontdekken dat een
            maatwerk app hun bedrijf naar een hoger niveau tilt.
          </p>
          <h2 className="h2 text-ink pt-6">App laten maken in Amsterdam, Haarlem of Alkmaar</h2>
          <p>
            Elly Apps bouwt apps voor bedrijven door heel Noord-Holland. Of u nu in Amsterdam
            een klantportaal wil bouwen, in Haarlem een reserveringssysteem zoekt of in
            Alkmaar een voorraadbeheer-app wil digitaliseren — wij kennen de lokale
            bedrijfscultuur en leveren oplossingen die aansluiten op uw specifieke situatie.
            Onze samenwerking verloopt grotendeels digitaal, maar een fysieke meeting is
            altijd mogelijk.
          </p>
          <h2 className="h2 text-ink pt-6">Waarom Noord-Hollandse bedrijven kiezen voor Elly Apps</h2>
          <p>
            In Noord-Holland zijn veel app-ontwikkelaars actief — van kleine freelancers tot
            grote bureaus. Elly Apps onderscheidt zich op drie punten. Ten eerste werken wij
            uitsluitend met vaste prijzen — geen uurtarieven, geen verrassingen op de factuur.
            Ten tweede integreren wij standaard AI-functionaliteiten in onze apps, waardoor
            uw applicatie slimmer is dan wat de gemiddelde ontwikkelaar oplevert. En ten derde
            bieden wij na oplevering volledig beheer — u hoeft nooit meer wakker te liggen van
            updates, beveiliging of storingen.
          </p>
          <h2 className="h2 text-ink pt-6">Sectoren waarvoor wij apps bouwen in Noord-Holland</h2>
          <p>
            Wij hebben ervaring in uiteenlopende sectoren die sterk vertegenwoordigd zijn in
            Noord-Holland: toerisme en horeca (Amsterdam is de meest bezochte stad van
            Nederland), creatieve sector en media, zakelijke dienstverlening, zorg en welzijn,
            retail en e-commerce, logistiek en transport. Elke sector heeft eigen processen en
            behoeften — wij passen onze aanpak daarop aan.
          </p>
          <h2 className="h2 text-ink pt-6">Van idee naar werkende app: ons proces</h2>
          <p>
            Wij hanteren een ontwikkelproces dat zorgt voor hoge
            kwaliteit. Na een gratis kennismakingsgesprek maken wij een functioneel ontwerp.
            Daarna bouwen wij in twee-wekelijkse sprints — u ziet elke twee weken de
            voortgang en kunt feedback geven. Na uitgebreid testen lanceren wij de app en
            begeleiden wij de go-live. De oplevertijd is afhankelijk van de app en wordt na een kennismaking (intake) bepaald.
          </p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Actief in Amsterdam, Haarlem, Alkmaar en meer',
            'AI-functionaliteiten standaard',
            'Vaste prijs, geen uurtarieven',
            'Oplevertijd bepaald na intake',
            'Ervaring in toerisme, zorg en retail',
            'Volledig beheer na lancering',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 body text-ink">
              <CheckCircleIcon className="size-5 text-brand shrink-0" aria-hidden="true" />
              {f}
            </div>
          ))}
        </div>
      </section>

      <Faq items={faqItems} title="Veelgestelde vragen over app ontwikkeling in Noord-Holland" className="bg-bg" />

      {/* Gerelateerde pagina's */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="h2 text-ink mb-6">Gerelateerde pagina&apos;s</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'App laten maken — overzicht', href: '/diensten/apps' },
              { label: 'App laten maken Amsterdam', href: '/apps/amsterdam' },
              { label: 'App laten maken Den Haag', href: '/apps/den-haag' },
              { label: 'Werkgebied Noord-Holland', href: '/werkgebied/noord-holland' },
            ].map((r) => (
              <Link key={r.href} href={r.href} className="flex min-h-12 items-center gap-2 rounded-2xl border border-line bg-bg px-4 py-3 font-semibold text-ink shadow-sm transition-all hover:border-brand-strong hover:text-brand-strong hover:shadow-md">
                <span className="text-brand" aria-hidden="true">→</span> {r.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">App laten maken in Noord-Holland?</h2>
          <p className="body-lg text-navy-muted mt-4">Plan een gratis kennismakingsgesprek en ontdek wat wij voor uw bedrijf kunnen bouwen.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className={buttonVariants({ size: 'lg' })}>Gratis kennismakingsgesprek</Link>
            <Link href="/apps/amsterdam" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>App laten maken Amsterdam</Link>
          </div>
        </div>
      </section>
    </>
  )
}
