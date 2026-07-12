import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Website laten maken als zzp'er: wat u moet weten in 2026 | Elly Apps",
  description:
    "Als zzp'er een website laten maken? Ontdek wat een goede zzp-website kost, waar u op moet letten en hoe u snel online staat zonder gedoe.",
  alternates: { canonical: 'https://elly-apps.nl/blog/website-zzp' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/blog/website-zzp',
    title: 'Website laten maken als zzp\'er: wat u moet weten in 2026 | Elly Apps',
    description: 'Als zzp\'er een website laten maken? Ontdek wat een goede zzp-website kost, waar u op moet letten en hoe u snel online staat zonder gedoe.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken als zzp\'er: wat u moet weten in 2026 | Elly Apps',
    description: 'Als zzp\'er een website laten maken? Ontdek wat een goede zzp-website kost, waar u op moet letten en hoe u snel online staat zonder gedoe.',
    images: ['/og-image.png'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Website laten maken als zzp'er: wat u moet weten in 2026",
  description: "Als zzp'er een website laten maken? Ontdek wat het kost en waar u op moet letten.",
  author: { '@type': 'Organization', name: 'Elly Apps' },
  publisher: { '@type': 'Organization', name: 'Elly Apps', url: 'https://elly-apps.nl' },
  datePublished: '2026-06-09',
  url: 'https://elly-apps.nl/blog/website-zzp',
}

export default function WebsiteZZPPage() {
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
          Website laten maken als zzp&apos;er: wat u moet weten in 2026
        </h1>
        <p className="text-gray-500 text-sm mb-8">Gepubliceerd op 9 juni 2026 door Elly Apps</p>

        <p>
          Als zzp&apos;er bent u uw eigen merk. Potentiële klanten zoeken u op Google voordat ze
          contact opnemen — en wat ze dan vinden, bepaalt of ze u bellen of doorklikken naar
          een concurrent. Een professionele website is voor een zelfstandige geen luxe maar
          een noodzaak. Maar wat kost het, wat heeft u nodig en hoe zorgt u dat uw website
          ook écht klanten oplevert?
        </p>

        <h2>Waarom een website essentieel is voor zzp&apos;ers</h2>
        <p>
          Veel zzp&apos;ers redden zich aanvankelijk op mond-tot-mondreclame en sociale media.
          Dat werkt — in het begin. Maar als u structureel wilt groeien en niet afhankelijk
          wilt zijn van doorverwijzingen, heeft u een website nodig die 24/7 voor u werkt.
          Een professionele website geeft u geloofwaardigheid, maakt u vindbaar op Google
          en geeft potentiële klanten alle informatie die ze nodig hebben om een beslissing
          te nemen.
        </p>
        <p>
          Bovendien verwachten zakelijke opdrachtgevers tegenwoordig standaard dat u een
          website heeft. Heeft u die niet, dan wekt dat twijfel over uw professionaliteit —
          ongeacht hoe goed uw werk is.
        </p>

        <h2>Wat heeft een zzp-website nodig?</h2>
        <p>
          Een goede website voor een zzp&apos;er hoeft niet ingewikkeld te zijn, maar moet wel
          de juiste elementen bevatten. Dit zijn de essentiële onderdelen:
        </p>
        <ul>
          <li><strong>Duidelijke homepage:</strong> Wie bent u, wat doet u en voor wie? In tien seconden moet een bezoeker begrijpen wat u aanbiedt.</li>
          <li><strong>Dienstenpagina:</strong> Beschrijf uw diensten concreet. Wat krijgt de klant, wat zijn de voordelen en wat onderscheidt u van anderen?</li>
          <li><strong>Over mij pagina:</strong> Mensen doen zaken met mensen. Een persoonlijke pagina met foto en verhaal vergroot het vertrouwen enorm.</li>
          <li><strong>Referenties of portfolio:</strong> Laat zien wat u gedaan heeft. Testimonials van tevreden klanten zijn de sterkste sociale bewijskracht.</li>
          <li><strong>Contactpagina:</strong> Maak het zo makkelijk mogelijk om contact op te nemen. Telefoon, e-mail én een contactformulier.</li>
          <li><strong>SEO-basis:</strong> Zonder optimalisatie voor Google heeft de mooiste website geen waarde. Zorg voor correcte titels, beschrijvingen en een snelle laadtijd.</li>
        </ul>

        <h2>Wat kost een website voor een zzp&apos;er?</h2>
        <p>
          De kosten van een zzp-website variëren sterk. Zelf bouwen via Wix of Squarespace
          kost €10 tot €30 per maand, maar vergt tijd en levert doorgaans minder goede
          SEO-resultaten op. Een freelance webdesigner rekent voor een eenvoudige website
          doorgaans €500 tot €2.000 eenmalig, zonder doorlopend onderhoud inbegrepen.
        </p>
        <p>
          Bij Elly Apps bieden wij een betaalbaar abonnementsmodel speciaal voor zzp&apos;ers en
          kleine ondernemers. Voor een eenmalige setup van €299 en €49 per maand heeft u een
          professionele, SEO-geoptimaliseerde website inclusief hosting, SSL-certificaat en
          technische updates. U heeft geen technische kennis nodig en hoeft zich nergens druk
          om te maken. Wij regelen alles.
        </p>

        <h2>Hoe snel kunt u online zijn?</h2>
        <p>
          Bij Elly Apps staat uw website gemiddeld binnen twee weken online. Na een gratis
          kennismakingsgesprek bespreken we uw wensen, doelgroep en diensten. Wij verzorgen
          het ontwerp, de technische opzet en de basis SEO. U keurt het resultaat goed en dan
          gaan we live. Geen ingewikkelde processen, geen ellenlange trajecten.
        </p>

        <h2>Zzp-website en belasting: is het aftrekbaar?</h2>
        <p>
          Ja. De kosten voor uw zakelijke website zijn volledig aftrekbaar als bedrijfskosten
          voor de inkomstenbelasting. Dit geldt zowel voor de eenmalige setupkosten als de
          maandelijkse abonnementskosten. Bewaar uw facturen goed en vermeld ze in uw
          administratie als zakelijke uitgaven. Raadpleeg uw boekhouder voor uw specifieke
          situatie.
        </p>

        <h2>Veelgemaakte fouten bij een zzp-website</h2>
        <p>
          Tot slot: de meest voorkomende fouten die zzp&apos;ers maken met hun website:
        </p>
        <ul>
          <li><strong>Te veel jargon:</strong> Schrijf in de taal van uw klant, niet in vaktermen die alleen u begrijpt.</li>
          <li><strong>Geen duidelijke call-to-action:</strong> Elke pagina moet een duidelijke volgende stap hebben. &ldquo;Neem contact op&rdquo;, &ldquo;Vraag een offerte aan&rdquo; of &ldquo;Bekijk mijn diensten&rdquo;.</li>
          <li><strong>Geen mobiele optimalisatie:</strong> Meer dan de helft van uw bezoekers bekijkt uw site op een telefoon. Een website die er slecht uitziet op mobiel is een gemiste kans.</li>
          <li><strong>Verouderde informatie:</strong> Een website met prijzen of diensten van twee jaar geleden wekt geen vertrouwen. Houd uw content actueel.</li>
          <li><strong>Geen SEO:</strong> Een mooie website die niemand vindt, brengt geen klanten. Zorg altijd voor een solide SEO-basis.</li>
        </ul>

        <h2>Conclusie</h2>
        <p>
          Een professionele website is voor iedere zzp&apos;er een waardevolle investering die
          zichzelf terugverdient. U bent 24/7 vindbaar, u straalt professionaliteit uit en
          u trekt structureel nieuwe klanten aan. Kies voor een oplossing die betaalbaar,
          professioneel en volledig ontzorgd is — zodat u zich kunt focussen op uw werk.
        </p>

        <div className="not-prose mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold text-sm hover:bg-[#C53030] transition-colors"
          >
            Gratis kennismaking inplannen
          </Link>
          <Link
            href="/prijzen"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold text-sm hover:bg-red-50 transition-colors"
          >
            Bekijk ons Starter pakket
          </Link>
        </div>
      </article>
    </>
  )
}
