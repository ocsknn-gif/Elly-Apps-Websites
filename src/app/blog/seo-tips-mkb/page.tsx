import type { Metadata } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

export const metadata: Metadata = {
  title: '7 praktische SEO tips voor MKB-bedrijven in 2026 | Elly Apps',
  description:
    'Concrete SEO tips waarmee MKB-bedrijven direct aan de slag kunnen. Van technische optimalisatie tot content strategie — zo wordt uw website beter gevonden op Google.',
  alternates: { canonical: 'https://elly-apps.nl/blog/seo-tips-mkb' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/blog/seo-tips-mkb',
    title: '7 praktische SEO tips voor MKB-bedrijven in 2026 | Elly Apps',
    description: 'Concrete SEO tips waarmee MKB-bedrijven direct aan de slag kunnen. Van technische optimalisatie tot content strategie — zo wordt uw website beter gevonden op Google.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '7 praktische SEO tips voor MKB-bedrijven in 2026 | Elly Apps',
    description: 'Concrete SEO tips waarmee MKB-bedrijven direct aan de slag kunnen. Van technische optimalisatie tot content strategie — zo wordt uw website beter gevonden op Google.',
    images: ['/og-image.png'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '7 praktische SEO tips voor MKB-bedrijven in 2026',
  description: 'Concrete SEO tips waarmee MKB-bedrijven direct aan de slag kunnen om beter gevonden te worden op Google.',
  author: { '@type': 'Organization', name: 'Elly Apps' },
  publisher: { '@type': 'Organization', name: 'Elly Apps', url: 'https://elly-apps.nl' },
  datePublished: '2026-06-09',
  url: 'https://elly-apps.nl/blog/seo-tips-mkb',
}

export default function SEOTipsMKBPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-sm font-medium text-brand-strong hover:underline">
            ← Terug naar blog
          </Link>
          <h1 className="h1 text-ink mt-6">
            7 praktische SEO tips voor MKB-bedrijven in 2026
          </h1>
          <p className="text-sm text-muted mt-4">Gepubliceerd op 9 juni 2026 door Elly Apps</p>
        </div>
      </section>

      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-3xl mx-auto artikel">
          <p>
            Voor veel MKB-ondernemers is SEO een vaag begrip. U weet dat het belangrijk is om
            gevonden te worden op Google, maar waar begint u? En wat heeft het meeste effect
            voor een klein of middelgroot bedrijf? In dit artikel geven wij zeven concrete tips
            die u direct kunt toepassen — of die u kunt meenemen in een gesprek met uw webdesigner.
          </p>

          <h2>Tip 1: Begin met zoekwoordenonderzoek</h2>
          <p>
            SEO begint met begrijpen waarop uw potentiële klanten zoeken. Gebruik gratis tools
            zoals Google Search Console, Google Keyword Planner of Ubersuggest om te ontdekken
            welke zoektermen relevant zijn voor uw bedrijf. Zoek naar specifieke, intentierijke
            zoektermen — niet alleen &ldquo;loodgieter&rdquo; maar ook &ldquo;loodgieter lekkage spoed Amsterdam&rdquo;.
            Die langere zoektermen (long-tail keywords) hebben minder concurrentie en trekken
            bezoekers die al weten wat ze willen.
          </p>

          <h2>Tip 2: Optimaliseer uw paginatitels en meta descriptions</h2>
          <p>
            De title tag en meta description zijn de eerste dingen die een zoeker ziet in Google.
            Een goede title tag bevat uw belangrijkste zoekwoord en is maximaal 60 tekens lang.
            De meta description (maximaal 155 tekens) is uw kans om iemand te overtuigen te
            klikken. Schrijf voor elke pagina een unieke, prikkelende beschrijving die duidelijk
            maakt wat de bezoeker kan verwachten. Dit verhoogt uw klikfrequentie (CTR) en geeft
            Google een signaal dat uw pagina relevant is.
          </p>

          <h2>Tip 3: Zorg voor een heldere paginastructuur met H1, H2 en H3</h2>
          <p>
            Google leest uw website als een document. Een logische koppenstructuur helpt zoekmachines
            begrijpen waar uw pagina over gaat. Gebruik één H1 per pagina — dat is de hoofdtitel.
            Verdeel de inhoud in duidelijke secties met H2-koppen en gebruik H3 voor subsecties.
            Verwerk uw zoekwoorden natuurlijk in deze koppen. Overdrijf niet: keyword stuffing
            werkt averechts en wordt door Google bestraft.
          </p>

          <h2>Tip 4: Maak uw website snel</h2>
          <p>
            Laadtijd is een directe rankingfactor voor Google. Een website die trager dan 3 seconden
            laadt, verliest gemiddeld 40% van zijn bezoekers nog vóór de pagina geladen is. Meet
            uw laadtijd via Google PageSpeed Insights en pak de grootste knelpunten aan: te grote
            afbeeldingen, onnodige scripts of een trage hostingomgeving. Bij Elly Apps bouwen wij
            websites op Next.js — een modern framework dat specifiek is ontworpen voor snelheid
            en prestaties.
          </p>

          <h2>Tip 5: Claim en optimaliseer uw Google Business profiel</h2>
          <p>
            Als u lokale klanten wilt bereiken, is Google Business Profile (voorheen Google
            Mijn Bedrijf) onmisbaar. Zorg dat uw bedrijfsnaam, adres, telefoonnummer en openingstijden
            correct en volledig zijn ingevuld. Voeg foto&apos;s toe, verzamel actief reviews en reageer
            op alle beoordelingen — ook de negatieve. Een goed geoptimaliseerd Google Business
            profiel zorgt ervoor dat u verschijnt in de lokale resultaten en op Google Maps,
            wat direct meer belletjes en bezoek oplevert.
          </p>

          <h2>Tip 6: Schrijf regelmatig nuttige content</h2>
          <p>
            Google beloont websites die regelmatig relevante, kwalitatieve content publiceren.
            Een blog of kennisbank hoeft niet ingewikkeld te zijn — schrijf antwoorden op vragen
            die uw klanten stellen. &ldquo;Wat kost een nieuwe cv-ketel?&rdquo; of &ldquo;Hoe lang duurt een
            tandheelkundige behandeling?&rdquo; zijn voorbeelden van vragen waarop een blogpost u
            structureel verkeer kan opleveren. Publiceer minimaal één artikel per maand en zorg
            dat elk artikel minstens 500 woorden bevat.
          </p>

          <h2>Tip 7: Verdien backlinks via lokale vermeldingen</h2>
          <p>
            Backlinks — links van andere websites naar de uwe — zijn een van de sterkste
            rankingfactoren in Google. Voor MKB is de makkelijkste manier om backlinks te
            verdienen: vermeld uw bedrijf op relevante directories zoals de KvK-website,
            brancheverenigingen, lokale ondernemersverenigingen en platforms als Yelp of
            Trusted Shops. Elke vermelding telt als een vertrouwenssignaal voor Google en
            versterkt uw positie in de zoekresultaten.
          </p>

          <h2>Conclusie</h2>
          <p>
            SEO hoeft niet ingewikkeld te zijn. Door consistent aandacht te besteden aan de
            juiste zoekwoorden, een heldere structuur, snelle laadtijden en waardevolle content,
            bouwt u stap voor stap een sterke positie op in Google. Heeft u hulp nodig bij het
            implementeren van deze tips? Elly Apps helpt MKB-bedrijven door heel Nederland met
            professionele SEO en websitebeheer.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/gratis-websitescan"
            className={buttonVariants()}
          >
            Gratis websitescan aanvragen
          </Link>
          <Link
            href="/diensten"
            className={buttonVariants({ variant: 'secondary' })}
          >
            Bekijk onze SEO diensten
          </Link>
        </div>
      </section>
    </>
  )
}
