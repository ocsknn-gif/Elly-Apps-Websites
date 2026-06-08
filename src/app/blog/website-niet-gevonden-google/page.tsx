import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Website niet gevonden op Google? Oorzaken en oplossingen | Elly Apps',
  description:
    'Staat uw website niet in Google? Ontdek de meestvoorkomende technische oorzaken en hoe u ze stap voor stap oplost. Inclusief tips van Elly Apps.',
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Website niet gevonden op Google? Dit zijn de oorzaken en oplossingen',
  author: { '@type': 'Organization', name: 'Elly Apps' },
  publisher: { '@type': 'Organization', name: 'Elly Apps', url: 'https://elly-apps.nl' },
  datePublished: '2026-06-08',
  url: 'https://elly-apps.nl/blog/website-niet-gevonden-google',
}

export default function WebsiteNietGevondenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-gray prose-lg max-w-none">
        <Link href="/blog" className="text-sm text-indigo-600 hover:underline not-prose">
          ← Terug naar blog
        </Link>

        <h1 className="text-4xl font-extrabold text-gray-900 mt-6 mb-4">
          Website niet gevonden op Google? Dit zijn de oorzaken en oplossingen
        </h1>
        <p className="text-gray-500 text-sm mb-8">Gepubliceerd op 8 juni 2026 door Elly Apps</p>

        <p>
          U heeft een website, maar als u zoekt op uw bedrijfsnaam of diensten in Google, verschijnt
          uw site nergens. Frustrerend — en helaas voor veel MKB-ondernemers een herkenbaar
          probleem. In dit artikel bespreken wij de meestvoorkomende oorzaken en hoe u ze oplost.
        </p>

        <h2>1. De website is nog niet geïndexeerd</h2>
        <p>
          Een nieuwe website wordt niet direct door Google opgemerkt. Google's zoekcrawlers
          moeten uw site eerst bezoeken en indexeren voordat deze verschijnt in de zoekresultaten.
          Dit kan enkele dagen tot weken duren.
        </p>
        <p>
          <strong>Oplossing:</strong> Maak een gratis account aan in Google Search Console en dien
          uw sitemap.xml in. U kunt ook specifieke URL's aanvragen voor directe indexering via
          de URL-inspectietool.
        </p>

        <h2>2. Noindex-tag staat aan</h2>
        <p>
          Dit is een veelgemaakte fout bij websites die tijdens de bouw op "niet indexeren" stonden.
          Na de lancering wordt die instelling soms vergeten. Een noindex-tag in de HTML of een
          vinkje in WordPress ("Verzoek zoekmachines deze site niet te indexeren") blokkeert Google
          volledig.
        </p>
        <p>
          <strong>Oplossing:</strong> Controleer in de broncode van uw pagina of er een regel
          staat als <code>{'<meta name="robots" content="noindex">'}</code>. Verwijder deze als
          uw site live is.
        </p>

        <h2>3. Slechte technische SEO</h2>
        <p>
          Google kan uw website wel bezoeken, maar als de technische basis niet klopt, rankt u
          laag of helemaal niet. Denk aan ontbrekende title-tags, dubbele content, trage
          laadsnelheid of een website die niet mobielvriendelijk is. Sinds 2021 gebruikt Google
          mobile-first indexering: de mobiele versie van uw website is leidend.
        </p>
        <p>
          <strong>Oplossing:</strong> Voer een technische SEO-audit uit. Controleer laadsnelheid
          via Google PageSpeed Insights, test de mobiele weergave en zorg dat elke pagina een
          unieke title-tag en meta description heeft.
        </p>

        <h2>4. Geen relevante content</h2>
        <p>
          Google toont pagina's die aansluiten op wat iemand zoekt. Als uw website bestaat uit
          weinig tekst, geen zoekwoorden bevat die uw doelgroep gebruikt, of als de content niet
          aansluit op de zoekopdrachten, scoort u laag of niet.
        </p>
        <p>
          <strong>Oplossing:</strong> Doe zoekwoordonderzoek. Welke termen gebruikt uw doelgroep?
          Verwerk die termen natuurlijk in uw paginatitels, koppen en teksten. Schrijf ook
          blogteksten die vragen beantwoorden die uw klanten stellen.
        </p>

        <h2>5. Geen externe links (autoriteit)</h2>
        <p>
          Google vertrouwt websites meer als andere betrouwbare sites naar hen linken. Een
          gloednieuwe website zonder externe links heeft weinig autoriteit en rankt daardoor lager
          dan gevestigde concurrenten.
        </p>
        <p>
          <strong>Oplossing:</strong> Zorg dat uw bedrijf vermeld staat in relevante directories
          (Yelp, gouden gids, brancheorganisaties), vraag klanten om een Google-review en overweeg
          gastblogs of persberichten.
        </p>

        <h2>6. Hevige concurrentie</h2>
        <p>
          Soms is uw website technisch prima in orde, maar is de concurrentie simpelweg zwaar.
          Voor populaire zoektermen als "loodgieter Amsterdam" of "kapper Utrecht" zijn er
          tientallen gevestigde websites die al jarenlang op SEO investeren.
        </p>
        <p>
          <strong>Oplossing:</strong> Focus op long-tail zoekwoorden die specifieker zijn en
          minder concurrentie hebben. "Loodgieter spoedservice Amsterdam-Noord" is makkelijker
          te scoren dan "loodgieter Amsterdam". Combineer dit met Google Ads voor directe
          zichtbaarheid.
        </p>

        <h2>Wanneer hulp inschakelen?</h2>
        <p>
          Als u de bovenstaande stappen heeft doorlopen en uw website nog steeds niet gevonden
          wordt, is het tijd om een professional in te schakelen. Een technische SEO-audit door
          een specialist legt problemen bloot die u zelf niet makkelijk vindt. Bij Elly Apps
          bieden wij een gratis websitescan aan waarbij wij uw SEO, snelheid en technische basis
          beoordelen en u een concreet advies geven.
        </p>

        <div className="not-prose mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/gratis-websitescan"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors"
          >
            Gratis websitescan aanvragen
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-indigo-600 text-indigo-600 font-semibold text-sm hover:bg-indigo-50 transition-colors"
          >
            Neem contact op
          </Link>
        </div>
      </article>
    </>
  )
}
