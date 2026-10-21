import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Faq } from '@/components/home/Faq'

export const metadata: Metadata = {
  title: 'App ontwikkelaar Tilburg | Elly Apps',
  description: 'Op zoek naar een app ontwikkelaar in Tilburg? Elly Apps is uw partner voor professionele web-apps en mobiele apps. AI-gedreven, vaste prijs en snel opgeleverd.',
  alternates: { canonical: 'https://elly-apps.nl/apps/app-ontwikkelaar-tilburg' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/apps/app-ontwikkelaar-tilburg',
    title: 'App ontwikkelaar Tilburg | Elly Apps',
    description: 'Op zoek naar een app ontwikkelaar in Tilburg? Elly Apps is uw partner voor professionele web-apps en mobiele apps. AI-gedreven, vaste prijs en snel opgeleverd.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App ontwikkelaar Tilburg | Elly Apps',
    description: 'Op zoek naar een app ontwikkelaar in Tilburg? Elly Apps is uw partner voor professionele web-apps en mobiele apps. AI-gedreven, vaste prijs en snel opgeleverd.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elly Apps — App ontwikkelaar Tilburg',
  url: 'https://elly-apps.nl/apps/app-ontwikkelaar-tilburg',
  areaServed: { '@type': 'City', name: 'Tilburg' },
  description: 'App ontwikkelaar in Tilburg voor professionele web-apps en mobiele applicaties.',
}

const faqItems = [
  { q: 'Wat maakt een goede app ontwikkelaar?', a: 'Een goede app ontwikkelaar combineert technische kennis met zakelijk inzicht. Hij begrijpt niet alleen hoe hij code schrijft, maar ook waarom u een app nodig heeft en hoe die uw bedrijf vooruithelpt.' },
  { q: 'Werken jullie ook voor bedrijven buiten Tilburg?', a: 'Ja. Wij werken voor bedrijven door heel Nederland. Tilburg is onze regio maar wij hebben klanten van Groningen tot Maastricht.' },
  { q: 'Kan ik ook een app laten maken voor mijn franchise of keten?', a: 'Zeker. Wij hebben ervaring met schaalbare applicaties voor ketens en franchisenemers waarbij consistentie en centrale controle belangrijk zijn.' },
  { q: 'Hoe bewaken jullie de kwaliteit van de code?', a: 'Wij werken met code reviews, geautomatiseerde tests en uitgebreide handmatige tests voor elke release. Kwaliteit is geen bijzaak maar de kern van ons proces.' },
]

export default function AppOntwikkelaarTilburgPage() {
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
          <p className="text-sm text-brand-strong font-medium mb-2">Tilburg</p>
          <h1 className="h1 text-ink">App ontwikkelaar in Tilburg</h1>
          <p className="body-lg text-muted mt-4">Elly Apps is uw app ontwikkelaar in Tilburg en omgeving. Wij bouwen professionele web-apps en mobiele applicaties met AI-gedreven functionaliteiten — snel, betrouwbaar en voor een vaste prijs.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>Op zoek naar een betrouwbare app ontwikkelaar in Tilburg? Elly Apps is gespecialiseerd in het bouwen van maatwerk web-apps en mobiele applicaties voor MKB-bedrijven in Tilburg en de regio Midden-Brabant. Wij combineren technische expertise met een diep begrip van de uitdagingen waar ondernemers tegenaan lopen — zodat de apps die wij bouwen niet alleen technisch perfect zijn, maar ook echt het verschil maken voor uw bedrijf.</p>
          <h2 className="h2 text-ink pt-6">Wat doet een app ontwikkelaar precies?</h2>
          <p>Een app ontwikkelaar analyseert uw bedrijfsprocessen, vertaalt die naar functionele eisen, ontwerpt de gebruikersinterface, schrijft de code en test de applicatie uitgebreid voor oplevering. Bij Elly Apps gaat dat verder: wij denken actief mee over hoe technologie uw bedrijf vooruitkan helpen. Wij zijn niet alleen uitvoerders — wij zijn strategische partners die u helpen de juiste digitale beslissingen te nemen.</p>
          <h2 className="h2 text-ink pt-6">Waarom kiezen voor Elly Apps als app ontwikkelaar in Tilburg?</h2>
          <p>Er zijn meerdere redenen waarom Tilburgse ondernemers voor Elly Apps kiezen. Ten eerste onze transparante werkwijze: vaste prijs, heldere communicatie en geen verrassingen. Ten tweede onze AI-expertise: wij integreren standaard AI-functionaliteiten in onze apps waardoor uw applicatie slimmer en toekomstbestendiger wordt. Ten derde onze brede sectorervaring: van horeca en retail tot zorg en zakelijke dienstverlening. En ten vierde onze snelheid: gemiddeld binnen 4 tot 6 weken van idee naar werkende app.</p>
          <h2 className="h2 text-ink pt-6">Technologie die we gebruiken</h2>
          <p>Wij werken met moderne, bewezen technologieën die schaalbaar en onderhoudsvriendelijk zijn. Voor web-apps gebruiken wij Next.js en React, voor databases Supabase of PostgreSQL, voor AI-integraties de Anthropic Claude API, en voor betalingen Stripe of Mollie. Al onze code is goed gedocumenteerd en overdraagbaar — u bent nooit afhankelijk van ons voor de technologie die u bezit.</p>
          <h2 className="h2 text-ink pt-6">Van idee naar app: ons proces</h2>
          <p>Ons ontwikkelproces is lean en transparant. Na een gratis kennismakingsgesprek stellen wij een gedetailleerde offerte op. Na akkoord starten wij met het functioneel ontwerp. Daarna bouwen wij in twee-wekelijkse sprints, waarbij u na elke sprint een werkende versie kunt testen. Na uitgebreid testen lanceren wij de app en begeleiden wij de go-live. Daarna nemen wij het beheer volledig over.</p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {['Specialist in Next.js, React en AI', 'Transparante vaste prijs', 'Gemiddeld binnen 4-6 weken live', 'Code reviews en geautomatiseerde tests', 'Volledig beheer na lancering', 'Sectorervaring in horeca, zorg en retail'].map((f) => (
            <div key={f} className="flex items-center gap-3 body text-ink">
              <CheckCircleIcon className="size-5 text-brand shrink-0" aria-hidden="true" />
              {f}
            </div>
          ))}
        </div>
      </section>

      <Faq items={faqItems} title="Veelgestelde vragen over app ontwikkeling" className="bg-bg" />

      {/* Gerelateerde pagina's */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="h2 text-ink mb-6">Gerelateerde pagina&apos;s</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'App laten maken — overzicht', href: '/diensten/apps' },
              { label: 'App laten maken in Tilburg', href: '/apps/tilburg' },
              { label: 'Website laten maken in Tilburg', href: '/stad/tilburg' },
              { label: 'App laten maken Breda', href: '/apps/breda' },
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
          <h2 id="afsluiting-titel" className="h2 text-on-navy">App laten ontwikkelen in Tilburg?</h2>
          <p className="body-lg text-navy-muted mt-4">Plan een gratis kennismakingsgesprek en ontdek wat wij voor u kunnen bouwen.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className={buttonVariants({ size: 'lg' })}>Gratis kennismakingsgesprek</Link>
            <Link href="/apps/tilburg" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Meer over apps in Tilburg</Link>
          </div>
        </div>
      </section>
    </>
  )
}
