import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Website laten maken voor een kapper in 2026 | Elly Apps',
  description: 'Als kapper meer klanten via Google? Ontdek wat een professionele kapperwebsite moet hebben en hoe Elly Apps u helpt vanaf €49 per maand.',
  alternates: { canonical: 'https://elly-apps.nl/blog/kapper' },
}

const IMAGE_URL = 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&fm=webp&q=75'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Website laten maken voor een kapper — zo krijgt u meer klanten',
  description: 'Als kapper meer klanten via Google? Ontdek wat een professionele kapperwebsite moet hebben en hoe Elly Apps u helpt vanaf €49 per maand.',
  image: [IMAGE_URL],
  datePublished: '2026-01-15',
  dateModified: '2026-01-15',
  author: { '@type': 'Organization', name: 'Elly Apps', url: 'https://elly-apps.nl' },
  publisher: {
    '@type': 'Organization',
    name: 'Elly Apps',
    url: 'https://elly-apps.nl',
    logo: { '@type': 'ImageObject', url: 'https://elly-apps.nl/elly-logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://elly-apps.nl/blog/kapper' },
  inLanguage: 'nl-NL',
}

export default function BlogKapperPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-[#E53E3E]">Home</Link>
          {' / '}
          <Link href="/blog" className="hover:text-[#E53E3E]">Blog</Link>
          {' / '}
          <span>Website laten maken voor een kapper</span>
        </nav>

        <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-gray-900">
          Website laten maken voor een kapper — zo krijgt u meer klanten
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-gray-900">Klanten zoeken online naar een kapper</h2>
            <p className="text-base md:text-lg leading-relaxed">
              De meeste kappers krijgen nieuwe klanten via mond-tot-mondreclame of Google. Dat tweede kanaal groeit snel: mensen zoeken op &quot;kapper + plaatsnaam&quot; en bellen de eerste die er professioneel uitziet. Zonder een goede website bent u voor die groep onzichtbaar — en laat u opdrachten liggen aan de concurrent die wél online vindbaar is.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-gray-900">Wat moet een kapperwebsite bevatten?</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Een goede website voor een kapsalon laat direct zien wie u bent. Denk aan duidelijke foto&apos;s van uw werk, een overzicht van uw diensten en prijzen, openingstijden, adres en een online boekingsformulier. Klanten willen snel weten wat ze kunnen verwachten — hoe overzichtelijker uw site, hoe sneller ze een afspraak maken.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-gray-900">Lokale SEO: gevonden worden op &apos;kapper [uw stad]&apos;</h2>
            <p className="text-base md:text-lg leading-relaxed">
              De meeste klanten van een kapper wonen in de buurt. Google weet dat en toont lokale resultaten aan mensen bij u in de buurt. Door uw website te optimaliseren voor zoektermen als &quot;kapper Amsterdam&quot; of &quot;kapsalon Utrecht&quot; verschijnt u precies wanneer iemand op zoek is naar een nieuwe kapper. Bij Elly Apps is lokale SEO standaard inbegrepen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-gray-900">Wat kost een kapperwebsite bij Elly Apps?</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Traditionele webbureaus rekenen al snel €2.000 tot €5.000 voor een eenvoudige website. Bij Elly Apps kunt u een{' '}
              <Link href="/branche/kapper" className="text-[#E53E3E] underline hover:no-underline">professionele website laten maken als kapper</Link>
              {' '}vanaf €49 per maand inclusief hosting, onderhoud en basis SEO. Wilt u ook lokale vindbaarheid in meerdere steden? Dan is het Groei pakket voor €199 per maand de slimste keuze.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-gray-900">Binnen twee weken online</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Wij leveren uw kapperwebsite gemiddeld binnen twee weken op. U hoeft zelf niets te regelen — wij verzorgen het ontwerp, de teksten, de hosting en de SEO. U focust op uw klanten, wij zorgen dat ze u online vinden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-gray-900">Conclusie</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Als kapper is een professionele website één van de beste investeringen die u kunt doen. Het levert direct meer afspraken op uit uw eigen buurt. Vraag vandaag nog uw gratis websitescan aan en ontdek hoe u meer klanten via Google kunt krijgen.
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
