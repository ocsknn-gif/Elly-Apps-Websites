import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Faq } from '@/components/home/Faq'

export const metadata: Metadata = {
  title: 'App laten maken Breda | Elly Apps',
  description: 'App laten maken in Breda? Elly Apps bouwt web-apps en mobiele apps voor MKB-bedrijven in Breda en West-Brabant. Betaalbaar en AI-gedreven.',
  alternates: { canonical: 'https://elly-apps.nl/apps/breda' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/apps/breda',
    title: 'App laten maken Breda | Elly Apps',
    description: 'App laten maken in Breda? Elly Apps bouwt web-apps en mobiele apps voor MKB-bedrijven in Breda en West-Brabant. Betaalbaar en AI-gedreven.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App laten maken Breda | Elly Apps',
    description: 'App laten maken in Breda? Elly Apps bouwt web-apps en mobiele apps voor MKB-bedrijven in Breda en West-Brabant. Betaalbaar en AI-gedreven.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elly Apps — App laten maken Breda',
  url: 'https://elly-apps.nl/apps/breda',
  areaServed: { '@type': 'City', name: 'Breda' },
  description: 'App laten maken in Breda? Elly Apps bouwt web-apps en mobiele apps voor MKB-bedrijven in Breda en West-Brabant. Betaalbaar en AI-gedreven.',
}

const faqItems = [
  { q: 'Wat kost een app laten maken in Breda?', a: 'De prijs hangt af van de complexiteit en het type app. Wij werken altijd met een transparante vaste prijs. Vraag een vrijblijvende offerte aan voor een exacte prijsindicatie.' },
  { q: 'Werken jullie ook samen met Bredase startups?', a: 'Ja. Wij werken graag samen met startups en scale-ups in Breda die snel een MVP of volledig platform willen lanceren. Onze aanpak is flexibel en schaalbaar.' },
  { q: 'Kunnen jullie ook een bestaande app verbeteren?', a: 'Absoluut. Wij doen eerst een technische audit van uw huidige applicatie en adviseren over de beste aanpak — of dat nu een refactor, uitbreiding of complete herbouw is.' },
  { q: 'Is onderhoud na oplevering inbegrepen?', a: 'Ja. Na de lancering bieden wij doorlopend beheer inclusief updates, beveiligingspatches en technische monitoring. U betaalt een vaste maandprijs zonder verrassingen.' },
]

export default function AppBredaPage() {
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
          <p className="text-sm text-brand-strong font-medium mb-2">Breda</p>
          <h1 className="h1 text-ink">App laten maken in Breda</h1>
          <p className="body-lg text-muted mt-4">Professionele web-apps en mobiele apps voor ondernemers in Breda en West-Brabant. Van idee tot werkende applicatie — betaalbaar en volledig ontzorgd.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>Breda is een van de snelst groeiende steden van Nederland. De stad heeft een bloeiend ondernemersklimaat met een sterke mix van industrie, logistiek, retail en creatieve sector. Steeds meer Bredase ondernemers kiezen voor digitale innovatie om hun concurrentiepositie te versterken. Een maatwerk app is daarbij een krachtig instrument — of het nu gaat om het automatiseren van interne processen, het verbeteren van de klantbeleving of het ontsluiten van nieuwe inkomstenstromen.</p>
          <h2 className="h2 text-ink pt-6">App bouwen in Breda: wat zijn de mogelijkheden?</h2>
          <p>Elly Apps bouwt alle soorten digitale applicaties. Van een eenvoudig reserveringssysteem voor een restaurant in Breda tot een complex logistiek platform voor een distributiebedrijf in West-Brabant. Wij beginnen altijd met een grondige analyse van uw bedrijfsprocessen en doelgroep — zodat de app die wij bouwen niet alleen technisch perfect is, maar ook daadwerkelijk de problemen oplost die u heeft. Elk project is uniek en verdient een unieke aanpak.</p>
          <h2 className="h2 text-ink pt-6">AI-integratie: slimmere apps voor Bredase bedrijven</h2>
          <p>Wij integreren standaard AI-mogelijkheden in onze apps. Dit betekent dat uw applicatie niet alleen doet wat u vraagt, maar ook leert van gebruik en steeds slimmer wordt. Denk aan automatische dataverwerking van formulieren, intelligente zoekfuncties, aanbevelingssystemen of geautomatiseerde rapportages. AI maakt uw app toekomstbestendig en geeft u een voorsprong op concurrenten die nog met verouderde systemen werken.</p>
          <h2 className="h2 text-ink pt-6">Duidelijke planning, geen gedoe</h2>
          <p>De oplevertijd is afhankelijk van de app en wordt na een kennismaking (intake) bepaald. Wekelijkse updates, een duidelijk projectplan en een vaste contactpersoon zorgen ervoor dat u altijd weet waar u aan toe bent. Na oplevering is uw app klaar voor gebruik — en wij staan klaar voor eventuele vragen of aanpassingen.</p>
          <h2 className="h2 text-ink pt-6">Lokale expertise, landelijke kwaliteit</h2>
          <p>Elly Apps werkt voor bedrijven door heel Nederland. Wij begrijpen de Bredase markt en de specifieke uitdagingen van ondernemers in West-Brabant. Tegelijkertijd brengen wij de kwaliteit en expertise van een landelijk opererende digitale dienstverlener. U krijgt het beste van twee werelden: persoonlijke aandacht gecombineerd met professionele uitvoering.</p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {['Web-apps en mobiele apps op maat', 'AI-integratie standaard beschikbaar', 'Ervaring met retail en logistiek', 'Oplevertijd bepaald na intake', 'Wekelijkse voortgangsupdate', 'Vaste prijs, volledig beheer na lancering'].map((f) => (
            <div key={f} className="flex items-center gap-3 body text-ink">
              <CheckCircleIcon className="size-5 text-brand shrink-0" aria-hidden="true" />
              {f}
            </div>
          ))}
        </div>
      </section>

      <Faq items={faqItems} title="Veelgestelde vragen over app ontwikkeling in Breda" className="bg-bg" />

      {/* Gerelateerde pagina's */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="h2 text-ink mb-6">Gerelateerde pagina&apos;s</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'App laten maken — overzicht', href: '/diensten/apps' },
              { label: 'Website laten maken in Breda', href: '/stad/breda' },
              { label: 'App laten maken Tilburg', href: '/apps/tilburg' },
              { label: 'App laten maken Den Haag', href: '/apps/den-haag' },
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
          <h2 id="afsluiting-titel" className="h2 text-on-navy">App laten bouwen in Breda?</h2>
          <p className="body-lg text-navy-muted mt-4">Vertel ons uw idee en ontvang binnen één werkdag een vrijblijvende terugkoppeling.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className={buttonVariants({ size: 'lg' })}>Gratis kennismakingsgesprek</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
