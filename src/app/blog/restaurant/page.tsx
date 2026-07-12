import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Website laten maken voor een restaurant in 2026 | Elly Apps',
  description: 'Als restauranteigenaar meer gasten aantrekken via Google? Ontdek wat een professionele restaurantwebsite moet hebben en hoe Elly Apps u helpt vanaf €49 per maand.',
  alternates: { canonical: 'https://elly-apps.nl/blog/restaurant' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/blog/restaurant',
    title: 'Website laten maken voor een restaurant in 2026 | Elly Apps',
    description: 'Als restauranteigenaar meer gasten aantrekken via Google? Ontdek wat een professionele restaurantwebsite moet hebben en hoe Elly Apps u helpt vanaf €49 per maand.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken voor een restaurant in 2026 | Elly Apps',
    description: 'Als restauranteigenaar meer gasten aantrekken via Google? Ontdek wat een professionele restaurantwebsite moet hebben en hoe Elly Apps u helpt vanaf €49 per maand.',
    images: ['/og-image.png'],
  },
}

const IMAGE_URL = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&fm=webp&q=75'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Website laten maken voor een restaurant — zo trekt u meer gasten aan',
  description: 'Als restauranteigenaar meer gasten aantrekken via Google? Ontdek wat een professionele restaurantwebsite moet hebben en hoe Elly Apps u helpt vanaf €49 per maand.',
  image: [IMAGE_URL],
  datePublished: '2026-01-26',
  dateModified: '2026-01-26',
  author: { '@type': 'Organization', name: 'Elly Apps', url: 'https://elly-apps.nl' },
  publisher: {
    '@type': 'Organization',
    name: 'Elly Apps',
    url: 'https://elly-apps.nl',
    logo: { '@type': 'ImageObject', url: 'https://elly-apps.nl/elly-logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://elly-apps.nl/blog/restaurant' },
  inLanguage: 'nl-NL',
}

export default function BlogRestaurantPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-[#E53E3E]">Home</Link>
          {' / '}
          <Link href="/blog" className="hover:text-[#E53E3E]">Blog</Link>
          {' / '}
          <span>Website laten maken voor een restaurant</span>
        </nav>

        <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-gray-900">
          Website laten maken voor een restaurant — zo trekt u meer gasten aan
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-gray-900">Gasten zoeken online naar een restaurant</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Bijna elke restaurantbezoeker begint zijn avond online. Ze zoeken op Google naar &quot;restaurant + plaatsnaam&quot;, bekijken het menu, lezen reviews en maken een reservering. Als uw restaurant niet goed vindbaar is, kiezen gasten voor een concurrent die wél online zichtbaar is.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-gray-900">Wat moet een restaurantwebsite bevatten?</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Een goede restaurantwebsite bevat uw menu inclusief prijzen, sfeervolle foto&apos;s van uw gerechten en interieur, openingstijden en locatie, een reserveringsknop en klantreviews. Hoe aantrekkelijker en overzichtelijker uw website eruitziet, hoe meer gasten u binnenhaalt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-gray-900">Lokaal gevonden worden op Google Maps</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Veel gasten vinden restaurants via Google Maps. Een goed ingesteld Google Business profiel in combinatie met een geoptimaliseerde website zorgt ervoor dat uw restaurant bovenaan verschijnt bij mensen in uw buurt. Bij Elly Apps is Google Business optimalisatie standaard inbegrepen in het Groei pakket.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-gray-900">Wat kost een restaurantwebsite bij Elly Apps?</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Bij Elly Apps kunt u een{' '}
              <Link href="/branche/restaurant" className="text-[#E53E3E] underline hover:no-underline">professionele restaurantwebsite laten maken</Link>
              {' '}vanaf €49 per maand inclusief hosting, onderhoud en basis SEO. Het Groei pakket voor €199 per maand voegt daar lokale SEO, stadspagina&apos;s en Google Business optimalisatie aan toe. Alles inbegrepen, geen verrassingen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-gray-900">Binnen twee weken online</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Wij leveren uw restaurantwebsite gemiddeld binnen twee weken op. U hoeft zelf niets te regelen — wij verzorgen het ontwerp, de teksten, de hosting en de SEO. U focust op uw gasten, wij zorgen dat ze u online vinden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-gray-900">Conclusie</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Een professionele restaurantwebsite is in 2026 onmisbaar. Het verschil tussen een volle en een lege zaak begint steeds vaker online. Vraag vandaag nog uw gratis websitescan aan en ontdek hoe u meer gasten via Google kunt aantrekken.
            </p>
          </section>
        </div>

        <div className="mt-16 bg-[#f7f7f7] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Klaar om meer gasten via Google te krijgen?</h2>
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
