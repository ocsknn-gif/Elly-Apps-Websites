import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden | Elly Apps & Websites',
  description: 'De algemene voorwaarden van Elly Apps & Websites.',
  alternates: { canonical: 'https://elly-apps.nl/algemene-voorwaarden' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/algemene-voorwaarden',
    title: 'Algemene Voorwaarden | Elly Apps & Websites',
    description: 'De algemene voorwaarden van Elly Apps & Websites.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Algemene Voorwaarden | Elly Apps & Websites',
    description: 'De algemene voorwaarden van Elly Apps & Websites.',
    images: ['/og-image.png'],
  },
}

export default function AlgemeneVoorwaardenPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Algemene Voorwaarden</h1>
        <p className="text-gray-500 text-sm">Laatste update: juni 2026</p>
      </div>
      <section className="space-y-4 text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">Artikel 1 — Definities</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Opdrachtnemer:</strong> Elly Apps & Websites, gevestigd in Nederland.</li>
          <li><strong>Opdrachtgever:</strong> de natuurlijke persoon of rechtspersoon die een overeenkomst aangaat.</li>
          <li><strong>Dienst:</strong> alle aangeboden producten en diensten, waaronder websitebouw, SEO, SEA en beheer.</li>
        </ul>
      </section>
      <section className="space-y-4 text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">Artikel 2 — Toepasselijkheid</h2>
        <p>Deze voorwaarden zijn van toepassing op alle offertes en overeenkomsten. Afwijkingen zijn alleen geldig indien schriftelijk overeengekomen.</p>
      </section>
      <section className="space-y-4 text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">Artikel 3 — Offertes</h2>
        <p>Alle offertes zijn vrijblijvend en geldig gedurende 30 dagen. Een overeenkomst komt tot stand na schriftelijke acceptatie of bij aanvang van de werkzaamheden.</p>
      </section>
      <section className="space-y-4 text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">Artikel 4 — Prijzen en betaling</h2>
        <p>Alle prijzen zijn exclusief BTW. Facturen dienen binnen 14 dagen te worden voldaan. Maandelijkse abonnementen worden vooraf gefactureerd zonder restitutie bij opzegging.</p>
      </section>
      <section className="space-y-4 text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">Artikel 5 — Uitvoering</h2>
        <p>Opdrachtgever draagt zorg voor tijdige aanlevering van benodigde informatie. Vertraging door toedoen van opdrachtgever ontslaat opdrachtnemer van enige deadline.</p>
      </section>
      <section className="space-y-4 text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">Artikel 6 — Intellectueel eigendom</h2>
        <p>Alle gecreëerde content en code blijven eigendom van opdrachtnemer totdat volledige betaling is ontvangen.</p>
      </section>
      <section className="space-y-4 text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">Artikel 7 — Aansprakelijkheid</h2>
        <p>Aansprakelijkheid is beperkt tot het gefactureerde bedrag van de drie voorafgaande maanden. Opdrachtnemer is niet aansprakelijk voor indirecte schade of gederfde winst.</p>
      </section>
      <section className="space-y-4 text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">Artikel 8 — Opzegging</h2>
        <p>Abonnementen zijn maandelijks opzegbaar met één kalendermaand opzegtermijn via <a href="mailto:info@elly-apps.nl" className="text-[#E53E3E] hover:underline">info@elly-apps.nl</a>.</p>
      </section>
      <section className="space-y-4 text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">Artikel 9 — Toepasselijk recht</h2>
        <p>Op alle overeenkomsten is Nederlands recht van toepassing.</p>
      </section>
    </div>
  )
}
