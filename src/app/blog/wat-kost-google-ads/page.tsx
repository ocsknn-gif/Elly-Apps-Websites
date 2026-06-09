import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wat kost Google Ads in 2026? Eerlijk overzicht voor MKB | Elly Apps',
  description:
    'Wat kost Google Ads voor een MKB-bedrijf? Ontdek de werkelijke kosten, wat bepaalt uw prijs per klik en hoe u slim adverteert zonder budget te verspillen.',
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Wat kost Google Ads in 2026? Een eerlijk overzicht voor MKB',
  description: 'Wat kost Google Ads voor een MKB-bedrijf? Ontdek de werkelijke kosten per klik en hoe u slim adverteert.',
  author: { '@type': 'Organization', name: 'Elly Apps' },
  publisher: { '@type': 'Organization', name: 'Elly Apps', url: 'https://elly-apps.nl' },
  datePublished: '2026-06-09',
  url: 'https://elly-apps.nl/blog/wat-kost-google-ads',
}

export default function WatKostGoogleAdsPage() {
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
          Wat kost Google Ads in 2026? Een eerlijk overzicht voor MKB
        </h1>
        <p className="text-gray-500 text-sm mb-8">Gepubliceerd op 9 juni 2026 door Elly Apps</p>

        <p>
          Google Ads is een van de krachtigste manieren om snel nieuwe klanten te bereiken.
          Maar wat kost het eigenlijk? Veel ondernemers schrikken van onduidelijke prijzen,
          onverwacht hoge kosten per klik of teleurstellende resultaten na een te klein budget.
          In dit artikel geven wij een eerlijk en volledig overzicht van de kosten van Google Ads
          voor het Nederlandse MKB in 2026.
        </p>

        <h2>Hoe werkt het advertentiesysteem van Google?</h2>
        <p>
          Google Ads werkt op basis van een veilingsysteem. Elke keer dat iemand iets zoekt op
          Google, vindt er in milliseconden een veiling plaats tussen alle adverteerders die op
          dat zoekwoord bieden. De winnaar verschijnt bovenaan de pagina. U betaalt alleen wanneer
          iemand daadwerkelijk op uw advertentie klikt — dit heet cost-per-click (CPC).
        </p>
        <p>
          De prijs per klik wordt bepaald door twee factoren: uw bod en uw kwaliteitsscore.
          Die kwaliteitsscore is een beoordeling van Google op basis van de relevantie van uw
          advertentie, de verwachte klikfrequentie en de kwaliteit van uw landingspagina.
          Een hoge kwaliteitsscore verlaagt uw kosten per klik — een goed ingerichte campagne
          betaalt u dus minder dan een slecht ingerichte campagne voor hetzelfde zoekwoord.
        </p>

        <h2>Wat is de gemiddelde prijs per klik in Nederland?</h2>
        <p>
          De gemiddelde kosten per klik variëren sterk per branche. Voor algemene zoekwoorden
          in het MKB-segment liggen de kosten doorgaans tussen de €0,50 en €3,00 per klik.
          In competitieve sectoren zoals juridische dienstverlening, verzekeringen of
          financiële producten kan dit oplopen tot €10 tot €30 per klik. Hieronder een
          indicatie per sector:
        </p>
        <ul>
          <li><strong>Loodgieter / installateur:</strong> €1,50 – €4,00 per klik</li>
          <li><strong>Kapper / schoonheidsspecialist:</strong> €0,50 – €1,50 per klik</li>
          <li><strong>Tandarts / fysiotherapeut:</strong> €1,00 – €3,00 per klik</li>
          <li><strong>Webdesign bureau:</strong> €1,00 – €4,00 per klik</li>
          <li><strong>Advocaat / notaris:</strong> €5,00 – €20,00 per klik</li>
        </ul>
        <p>
          Dit zijn gemiddelden — de werkelijke kosten hangen af van uw locatie, concurrentie,
          zoekwoorden en de kwaliteit van uw campagne.
        </p>

        <h2>Wat is een realistisch maandbudget?</h2>
        <p>
          Voor de meeste MKB-bedrijven is een startbudget van €300 tot €600 per maand een
          realistisch beginpunt om zinvolle data te verzamelen en eerste resultaten te boeken.
          Met €300 per maand en een gemiddelde CPC van €1,50 heeft u ruim 200 klikken per maand.
          Als uw website goed converteert — bijvoorbeeld 5% van de bezoekers vraagt een offerte
          aan — betekent dat circa 10 leads per maand.
        </p>
        <p>
          Wilt u serieus groeien via Google Ads, dan is een budget van €500 tot €1.500 per maand
          realistischer. Dit geeft voldoende volume om te testen, te optimaliseren en structureel
          resultaten te boeken. Houd er rekening mee dat naast het advertentiebudget ook
          beheerkosten komen kijken als u dit uitbesteedt.
        </p>

        <h2>Wat zijn de kosten voor beheer?</h2>
        <p>
          Als u Google Ads uitbesteedt aan een bureau of specialist, betaalt u naast het
          advertentiebudget ook een beheerfee. Dit is doorgaans een percentage van uw
          advertentiebudget (10–20%) of een vast maandelijks bedrag. Bij een budget van €500
          per maand rekent een bureau dus al snel €75 tot €100 extra voor het beheer.
        </p>
        <p>
          Bij Elly Apps voegen wij Google Ads beheer toe als onderdeel van ons Pro pakket of
          als losse dienst. U heeft één aanspreekpunt voor zowel uw website, SEO als advertenties —
          zodat alles op elkaar afgestemd is en uw advertentiebudget zo efficiënt mogelijk
          wordt ingezet.
        </p>

        <h2>Valkuilen die u geld kosten</h2>
        <p>
          Veel ondernemers starten zelf met Google Ads en verliezen onnodig geld door veelgemaakte
          fouten. De meest voorkomende valkuilen:
        </p>
        <ul>
          <li><strong>Te brede zoekwoorden:</strong> Adverteren op &ldquo;website&rdquo; in plaats van &ldquo;website laten maken MKB&rdquo; trekt veel irrelevante bezoekers.</li>
          <li><strong>Geen negatieve zoekwoorden:</strong> Zonder uitsluitingslijst betaalt u voor zoekopdrachten die niets met uw dienst te maken hebben.</li>
          <li><strong>Slechte landingspagina:</strong> Een advertentie die doorlinkt naar uw homepage in plaats van een gerichte pagina converteert aanzienlijk slechter.</li>
          <li><strong>Geen conversietracking:</strong> Als u niet meet welke klikken leiden tot aanvragen, weet u niet wat werkt en wat niet.</li>
          <li><strong>Te laag budget:</strong> Een budget van €50 per maand levert te weinig data op om iets te kunnen optimaliseren.</li>
        </ul>

        <h2>Is Google Ads de moeite waard voor MKB?</h2>
        <p>
          Ja — mits goed opgezet. Google Ads is bijzonder geschikt voor bedrijven die snel
          zichtbaar willen zijn, een nieuw product of dienst lanceren of lokaal een specifieke
          doelgroep willen bereiken. De kracht van Google Ads is dat u adverteert op het moment
          dat iemand actief zoekt naar wat u aanbiedt. Dat is fundamenteel anders dan sociale
          media advertenties, waar u mensen onderbreekt die niet per se op zoek zijn.
        </p>
        <p>
          Combineer Google Ads altijd met een goede SEO-strategie. Google Ads genereert direct
          verkeer; SEO bouwt op de lange termijn organische zichtbaarheid op. Samen vormen ze
          de sterkste online marketingstrategie voor het MKB.
        </p>

        <h2>Conclusie</h2>
        <p>
          De kosten van Google Ads zijn sterk afhankelijk van uw branche, zoekwoorden en de
          kwaliteit van uw campagne. Een realistisch startbudget voor MKB ligt tussen de €300
          en €600 per maand exclusief beheer. Laat u begeleiden door een specialist om verspilling
          te voorkomen en uw investering maximaal te laten renderen.
        </p>

        <div className="not-prose mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold text-sm hover:bg-[#C53030] transition-colors"
          >
            Vraag een gratis adviesgesprek aan
          </Link>
          <Link
            href="/diensten"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold text-sm hover:bg-red-50 transition-colors"
          >
            Bekijk onze diensten
          </Link>
        </div>
      </article>
    </>
  )
}
