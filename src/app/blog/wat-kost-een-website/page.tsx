import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wat kost een website laten maken in 2026? | Elly Apps',
  description:
    'Wat kost een professionele website in 2026? Ontdek wat de prijs bepaalt, de veelgemaakte fouten en waarom een vaste maandprijs vanaf €49 vaak slimmer is voor het MKB.',
  alternates: { canonical: 'https://elly-apps.nl/blog/wat-kost-een-website' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/blog/wat-kost-een-website',
    title: 'Wat kost een website laten maken in 2026? | Elly Apps',
    description: 'Wat kost een professionele website in 2026? Ontdek wat de prijs bepaalt, de veelgemaakte fouten en waarom een vaste maandprijs vanaf €49 vaak slimmer is voor het MKB.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wat kost een website laten maken in 2026? | Elly Apps',
    description: 'Wat kost een professionele website in 2026? Ontdek wat de prijs bepaalt, de veelgemaakte fouten en waarom een vaste maandprijs vanaf €49 vaak slimmer is voor het MKB.',
    images: ['/og-image.png'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Wat kost een website laten maken in 2026?',
  description:
    'Een complete uitleg over de kosten van een professionele website in 2026.',
  author: { '@type': 'Organization', name: 'Elly Apps' },
  publisher: { '@type': 'Organization', name: 'Elly Apps', url: 'https://elly-apps.nl' },
  datePublished: '2026-06-08',
  url: 'https://elly-apps.nl/blog/wat-kost-een-website',
}

export default function WatKostEenWebsitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-gray prose-lg max-w-none">
        <Link href="/blog" className="text-sm text-[#E53E3E] hover:underline not-prose">
          ← Terug naar blog
        </Link>

        <h1 className="text-4xl font-extrabold text-gray-900 mt-6 mb-4">
          Wat kost een website laten maken in 2026?
        </h1>
        <p className="text-gray-500 text-sm mb-8">Gepubliceerd op 8 juni 2026 door Elly Apps</p>

        <p>
          Een van de meestgestelde vragen die wij krijgen van ondernemers is: "Wat kost een website
          laten maken eigenlijk?" Het eerlijke antwoord is: dat hangt ervan af. Maar in dit artikel
          geven wij u een helder en eerlijk overzicht van de kosten, de factoren die de prijs
          bepalen en wat u kunt verwachten bij verschillende budgetten.
        </p>

        <h2>De gemiddelde kosten van een website in 2026</h2>
        <p>
          De kosten voor een professionele website lopen in Nederland uiteen van een paar honderd
          euro tot tienduizenden euro's. Voor een eenvoudige zakelijke website betaalt u bij een
          professioneel bureau doorgaans tussen de €1.500 en €5.000 eenmalig, plus maandelijkse
          kosten voor hosting en onderhoud. Bij een goedkope aanbieder kan het goedkoper, maar
          dan levert u in op kwaliteit, snelheid en SEO.
        </p>
        <p>
          Bij Elly Apps hanteren wij een transparant abonnementsmodel. U betaalt een eenmalige
          setup vanaf €299 en daarna een vaste maandprijs vanaf €49. Daarin zijn hosting,
          SSL-certificaat, technische updates en basis SEO inbegrepen. Geen verrassingen achteraf.
        </p>

        <h2>Factoren die de prijs bepalen</h2>
        <p>
          De prijs van een website wordt bepaald door een combinatie van factoren. Hieronder de
          belangrijkste:
        </p>
        <ul>
          <li>
            <strong>Aantal pagina's:</strong> Een eenvoudige website van vijf pagina's kost minder
            dan een uitgebreide website met twintig pagina's, een blog en een webshop.
          </li>
          <li>
            <strong>Maatwerk design:</strong> Een volledig uniek ontwerp kost meer dan een website
            op basis van een bewezen template. Beide kunnen er uitstekend uitzien.
          </li>
          <li>
            <strong>Functionaliteiten:</strong> Wilt u een reserveringssysteem, een
            contactformulier, een ledenomgeving of een webshop? Elke extra functie heeft invloed
            op de prijs.
          </li>
          <li>
            <strong>Content:</strong> Levert u zelf teksten en foto's aan, of moet de webbouwer
            dit voor u verzorgen? Professionele copywriting en fotografie verhogen de kosten.
          </li>
          <li>
            <strong>SEO:</strong> Een website bouwen zonder aandacht voor zoekmachineoptimalisatie
            is zonde. Goede on-page SEO kost tijd en verhoogt daarmee de investering, maar betaalt
            zichzelf snel terug.
          </li>
          <li>
            <strong>Hosting en onderhoud:</strong> Na de lancering heeft u hosting, updates en
            beveiligingspatches nodig. Dit zijn doorlopende kosten die u niet moet onderschatten.
          </li>
        </ul>

        <h2>Goedkoop vs professioneel: wat is het verschil?</h2>
        <p>
          Een website via een websitebouwer zoals Wix of Squarespace kost u zo'n €10 tot €30 per
          maand. Dat klinkt aantrekkelijk, maar er zijn nadelen. Deze platforms zijn minder goed
          voor SEO, bieden beperkte maatwerkmogelijkheden en uw website staat volledig op hun
          platform. Als het platform stopt of zijn prijzen verhoogt, bent u afhankelijk.
        </p>
        <p>
          Een professionele website gebouwd op Next.js of WordPress laadt sneller, scoort beter
          in Google en is volledig van u. U bent niet gebonden aan één platform. Bovendien zorgt
          een professionele webbouwer voor technische SEO die u écht helpt gevonden te worden.
        </p>

        <h2>Wat krijgt u bij Elly Apps?</h2>
        <p>
          Bij Elly Apps betaalt u een eerlijke vaste prijs voor een complete online aanwezigheid.
          In ons Starter pakket (€299 setup + €49/mnd) krijgt u een professionele website,
          hosting, SSL, basis SEO en WhatsApp support. In ons Groei pakket (€499 setup + €199/mnd)
          voegen we lokale SEO, Google Business optimalisatie en een maandelijks rapport toe.
          Voor grotere projecten is er het Pro pakket met maatwerk mogelijkheden.
        </p>
        <p>
          Wij werken uitsluitend voor het MKB en begrijpen dat u uw tijd en budget efficiënt wilt
          inzetten. Daarom ontzorgen wij u volledig: van het eerste gesprek tot de lancering en
          daarna. U heeft één vast aanspreekpunt en weet altijd waar u aan toe bent.
        </p>

        <h2>Conclusie</h2>
        <p>
          Een professionele website is een investering die zichzelf terugverdient als u het goed
          aanpakt. Kies niet alleen op prijs, maar let ook op wat er inbegrepen is, hoe de SEO
          is geborgd en wie er na de lancering verantwoordelijk is voor onderhoud. Bij Elly Apps
          krijgt u alles in één pakket voor een vaste, transparante prijs.
        </p>

        <div className="not-prose mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/prijzen"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold text-sm hover:bg-[#C53030] transition-colors"
          >
            Bekijk onze prijzen
          </Link>
          <Link
            href="/gratis-websitescan"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold text-sm hover:bg-red-50 transition-colors"
          >
            Gratis websitescan aanvragen
          </Link>
        </div>
      </article>
    </>
  )
}
