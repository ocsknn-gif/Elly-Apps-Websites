import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Faq } from '@/components/home/Faq'

export const metadata: Metadata = {
  title: 'App laten maken Den Haag | Elly Apps',
  description: 'App laten maken in Den Haag? Elly Apps bouwt professionele web-apps en mobiele apps voor MKB-bedrijven in Den Haag. AI-gedreven, betaalbaar en snel live.',
  alternates: { canonical: 'https://elly-apps.nl/apps/den-haag' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/apps/den-haag',
    title: 'App laten maken Den Haag | Elly Apps',
    description: 'App laten maken in Den Haag? Elly Apps bouwt professionele web-apps en mobiele apps voor MKB-bedrijven in Den Haag. AI-gedreven, betaalbaar en snel live.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App laten maken Den Haag | Elly Apps',
    description: 'App laten maken in Den Haag? Elly Apps bouwt professionele web-apps en mobiele apps voor MKB-bedrijven in Den Haag. AI-gedreven, betaalbaar en snel live.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elly Apps — App laten maken Den Haag',
  url: 'https://elly-apps.nl/apps/den-haag',
  areaServed: { '@type': 'City', name: 'Den Haag' },
  description: 'Professionele web-apps en mobiele apps voor MKB-bedrijven in Den Haag.',
}

const faqItems = [
  { q: 'Wat kost een app laten maken in Den Haag?', a: 'De kosten zijn afhankelijk van de complexiteit en het type app. Wij werken altijd met een transparante vaste prijs. Vraag een vrijblijvende offerte aan voor een exacte prijsindicatie.' },
  { q: 'Hoe lang duurt het om een app te laten bouwen?', a: 'Gemiddeld leveren wij een app op binnen 4 tot 6 weken. Eenvoudigere applicaties kunnen sneller, complexere platforms vragen meer tijd. U heeft altijd inzicht in de voortgang.' },
  { q: 'Bouwen jullie ook apps voor de overheid of non-profit?', a: 'Ja. Den Haag is de bestuurlijke hoofdstad van Nederland en herbergt veel overheidsinstanties en non-profit organisaties. Wij hebben ervaring met veilige, toegankelijke applicaties voor deze sectoren.' },
  { q: 'Kan een app ook gekoppeld worden aan bestaande systemen?', a: 'Absoluut. Wij bouwen koppelingen met CRM-systemen, boekhoudpakketten, betaalproviders en andere externe platformen.' },
]

export default function AppDenHaagPage() {
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
          <p className="text-sm text-brand-strong font-medium mb-2">Den Haag</p>
          <h1 className="h1 text-ink">
            App laten maken in Den Haag
          </h1>
          <p className="body-lg text-muted mt-4">
            Professionele web-apps en mobiele apps voor ondernemers in Den Haag en omgeving.
            Van concept tot lancering — AI-gedreven, snel en volledig ontzorgd.
          </p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>
            Den Haag is niet alleen de politieke hoofdstad van Nederland — het is ook een van de
            grootste economische centra van het land. De stad herbergt duizenden bedrijven in
            sectoren als zakelijke dienstverlening, juridische sector, IT, zorg en overheid.
            Steeds meer van deze bedrijven ontdekken dat een maatwerk app hun processen drastisch
            kan verbeteren: minder handmatig werk, betere klantcommunicatie en meer grip op data.
          </p>
          <h2 className="h2 text-ink pt-6">Waarom een app laten bouwen in Den Haag?</h2>
          <p>
            Den Haag heeft een unieke bedrijfsomgeving. De combinatie van grote institutionele
            opdrachtgevers, een groeiend tech-ecosysteem rondom de Binckhorst en een diverse
            bevolking maakt de stad tot een vruchtbare bodem voor digitale innovatie. Of u nu
            een advocatenkantoor bent dat een cliëntportaal wil bouwen, een zorginstelling die
            patiëntgegevens digitaal wil beheren, of een retailer die een bestelapp wil lanceren
            — Elly Apps bouwt de oplossing die bij uw organisatie past.
          </p>
          <h2 className="h2 text-ink pt-6">Wat kunnen wij voor u bouwen?</h2>
          <p>
            Wij bouwen uiteenlopende digitale oplossingen: van eenvoudige webapplicaties tot
            complexe platforms met gebruikersauthenticatie, dashboards, API-koppelingen en
            AI-functionaliteiten. Voorbeelden van apps die wij voor Den Haagse bedrijven
            hebben gebouwd: klantportalen voor dienstverleners, reserveringssystemen voor
            restaurants en wellness-centra, interne HR-tools voor MKB, en e-commerce platforms
            met maatwerk logistiek. Elk project begint met een grondige analyse van uw wensen
            en processen — zodat de app niet alleen mooi is, maar ook echt werkt voor uw bedrijf.
          </p>
          <h2 className="h2 text-ink pt-6">AI-gedreven apps: de toekomst is nu</h2>
          <p>
            Elly Apps integreert waar mogelijk AI-functionaliteiten in de apps die wij bouwen.
            Denk aan intelligente zoekfuncties die begrijpen wat een gebruiker bedoelt,
            automatische categorisering van data, chatbots die klantvragen beantwoorden of
            predictive analytics die trends voorspellen. Dit zijn geen futuristische concepten —
            het zijn concrete tools die uw bedrijf vandaag al slimmer kunnen maken.
          </p>
          <h2 className="h2 text-ink pt-6">Transparante werkwijze, vaste prijs</h2>
          <p>
            Wij werken altijd met een vaste prijs — geen uurtarieven, geen verborgen kosten.
            Voordat wij beginnen, ontvangen u een heldere offerte met een volledige omschrijving
            van wat wij gaan bouwen en wanneer u het kunt verwachten. Tijdens het project heeft u
            via een persoonlijk dashboard altijd inzicht in de status. Na oplevering begeleiden
            wij u bij de lancering en bieden wij doorlopend beheer en technische ondersteuning.
          </p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Web-apps en mobiele apps op maat',
            'AI-functionaliteiten standaard beschikbaar',
            'Ervaring met overheid en non-profit',
            'Gemiddeld binnen 4-6 weken live',
            'Koppelingen met externe systemen',
            'Vaste prijs, volledig beheer',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 body text-ink">
              <CheckCircleIcon className="size-5 text-brand shrink-0" aria-hidden="true" />
              {f}
            </div>
          ))}
        </div>
      </section>

      <Faq items={faqItems} title="Veelgestelde vragen over app ontwikkeling in Den Haag" className="bg-bg" />

      {/* Gerelateerde pagina's */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="h2 text-ink mb-6">Gerelateerde pagina&apos;s</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'App laten maken — overzicht', href: '/diensten/apps' },
              { label: 'Website laten maken in Den Haag', href: '/stad/den-haag' },
              { label: 'App laten maken Amsterdam', href: '/apps/amsterdam' },
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
          <h2 id="afsluiting-titel" className="h2 text-on-navy">App laten bouwen in Den Haag?</h2>
          <p className="body-lg text-navy-muted mt-4">Vertel ons uw idee en ontvang binnen 24 uur een vrijblijvende terugkoppeling.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className={buttonVariants({ size: 'lg' })}>Gratis kennismakingsgesprek</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
