import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Website laten maken voor een loodgieter in 2026 | Elly Apps',
  description: 'Als loodgieter meer klanten via Google? Ontdek wat een professionele loodgieterwebsite moet hebben en hoe Elly Apps u helpt vanaf €49 per maand.',
  alternates: { canonical: 'https://elly-apps.nl/blog/loodgieter' },
}

const IMAGE_URL = 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&fm=webp&q=75'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Website laten maken voor een loodgieter — zo krijgt u meer klanten via Google',
  description: 'Als loodgieter meer klanten via Google? Ontdek wat een professionele loodgieterwebsite moet hebben en hoe Elly Apps u helpt vanaf €49 per maand.',
  image: [IMAGE_URL],
  datePublished: '2026-01-22',
  dateModified: '2026-01-22',
  author: { '@type': 'Organization', name: 'Elly Apps', url: 'https://elly-apps.nl' },
  publisher: {
    '@type': 'Organization',
    name: 'Elly Apps',
    url: 'https://elly-apps.nl',
    logo: { '@type': 'ImageObject', url: 'https://elly-apps.nl/elly-logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://elly-apps.nl/blog/loodgieter' },
  inLanguage: 'nl-NL',
}

export default function BlogLoodgieterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-[#E53E3E]">Home</Link>
          {' / '}
          <Link href="/blog" className="hover:text-[#E53E3E]">Blog</Link>
          {' / '}
          <span>Website laten maken voor een loodgieter</span>
        </nav>

        <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-gray-900">
          Website laten maken voor een loodgieter — zo krijgt u meer klanten via Google
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-gray-900">Klanten zoeken online naar een loodgieter</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Wanneer een klant een lekkage heeft of de cv-ketel het begeeft, grijpt hij direct naar zijn telefoon. Hij zoekt op Google naar &quot;loodgieter + plaatsnaam&quot; en belt de eerste die hij ziet. Als uw bedrijf niet bovenaan staat in Google, bestaat u niet voor die klant. Een professionele website is voor loodgieters daarmee geen luxe maar pure noodzaak.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-gray-900">Wat moet een goede loodgieterwebsite bevatten?</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Een effectieve website voor een loodgietersbedrijf bevat altijd een duidelijk telefoonnummer bovenaan de pagina, een overzicht van uw diensten zoals lekkages, cv-ketel onderhoud en ontstopping, uw werkgebied, klantbeoordelingen en een contactformulier. Daarnaast is snelheid cruciaal — een trage website verliest bezoekers voordat ze zelfs uw telefoonnummer zien.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-gray-900">Waarom lokale SEO zo belangrijk is voor loodgieters</h2>
            <p className="text-base md:text-lg leading-relaxed">
              De meeste loodgieters werken in een bepaalde regio. Google weet dit en toont lokale resultaten aan mensen in uw buurt. Door uw website te optimaliseren voor zoektermen als &quot;loodgieter Amsterdam&quot; of &quot;cv-ketel storing Utrecht&quot; verschijnt u precies wanneer klanten u nodig hebben. Bij Elly Apps is lokale SEO standaard inbegrepen in het Groei pakket.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-gray-900">Wat kost een website voor een loodgieter bij Elly Apps?</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Traditionele webbureaus rekenen €2.000 tot €8.000 voor een loodgieterwebsite. Bij Elly Apps kunt u een{' '}
              <Link href="/branche/loodgieter" className="text-[#E53E3E] underline hover:no-underline">professionele website laten maken als loodgieter</Link>
              {' '}vanaf €49 per maand inclusief hosting, onderhoud en basis SEO. Wilt u ook lokale vindbaarheid in meerdere steden? Dan is het Groei pakket voor €199 per maand de slimste keuze — inclusief stadspagina&apos;s en Google Business optimalisatie.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-gray-900">Binnen twee weken online</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Wij leveren uw loodgieterwebsite gemiddeld binnen twee weken op. U hoeft zelf niets te regelen — wij verzorgen het ontwerp, de teksten, de hosting en de SEO. U focust op uw klanten, wij zorgen dat ze u online vinden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-gray-900">Conclusie</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Als loodgieter is een professionele website één van de beste investeringen die u kunt doen. Het levert direct meer aanvragen op uit uw regio. Vraag vandaag nog uw gratis websitescan aan en ontdek hoe u meer klanten via Google kunt krijgen.
            </p>
          </section>
        </div>

        <div className="mt-16 bg-[#f7f7f7] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Klaar om meer klanten via Google te krijgen?</h2>
          <p className="text-gray-600 mb-6">Ontvang binnen 24 uur een gratis analyse van uw huidige website met concrete verbeterpunten.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">
              Vraag uw gratis websitescan aan
            </Link>
            <Link href="/prijzen" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold hover:bg-red-50 transition-colors">
              Bekijk prijzen
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
