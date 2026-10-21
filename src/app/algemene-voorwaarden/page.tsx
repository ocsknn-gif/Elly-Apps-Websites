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
    <>
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-3xl mx-auto">
          <h1 className="h1 text-ink mb-3">Algemene Voorwaarden</h1>
          <p className="text-muted text-sm">Laatste update: juni 2026</p>
        </div>
      </section>
      <div className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-3xl mx-auto artikel artikel-recht">
      <section>
        <h2>Artikel 1 — Definities</h2>
        <ul>
          <li><strong>Opdrachtnemer:</strong> Elly Apps & Websites, gevestigd in Nederland.</li>
          <li><strong>Opdrachtgever:</strong> de natuurlijke persoon of rechtspersoon die een overeenkomst aangaat.</li>
          <li><strong>Dienst:</strong> alle aangeboden producten en diensten, waaronder websitebouw, SEO, SEA en beheer.</li>
        </ul>
      </section>
      <section>
        <h2>Artikel 2 — Toepasselijkheid</h2>
        <p>Deze voorwaarden zijn van toepassing op alle offertes en overeenkomsten. Afwijkingen zijn alleen geldig indien schriftelijk overeengekomen.</p>
      </section>
      <section>
        <h2>Artikel 3 — Offertes</h2>
        <p>Alle offertes zijn vrijblijvend en geldig gedurende 30 dagen. Een overeenkomst komt tot stand na schriftelijke acceptatie of bij aanvang van de werkzaamheden.</p>
      </section>
      <section>
        <h2>Artikel 4 — Prijzen en betaling</h2>
        <p>Alle prijzen zijn exclusief BTW. Facturen dienen binnen 14 dagen te worden voldaan. Maandelijkse abonnementen worden vooraf gefactureerd zonder restitutie bij opzegging.</p>
      </section>
      <section>
        <h2>Artikel 5 — Uitvoering</h2>
        <p>Opdrachtgever draagt zorg voor tijdige aanlevering van benodigde informatie. Vertraging door toedoen van opdrachtgever ontslaat opdrachtnemer van enige deadline.</p>
      </section>
      <section>
        <h2>Artikel 6 — Intellectueel eigendom</h2>
        <p>Alle gecreëerde content en code blijven eigendom van opdrachtnemer totdat volledige betaling is ontvangen.</p>
      </section>
      <section>
        <h2>Artikel 7 — Aansprakelijkheid</h2>
        <p>Aansprakelijkheid is beperkt tot het gefactureerde bedrag van de drie voorafgaande maanden. Opdrachtnemer is niet aansprakelijk voor indirecte schade of gederfde winst.</p>
      </section>
      <section>
        <h2>Artikel 8 — Opzegging</h2>
        <p>Abonnementen zijn maandelijks opzegbaar met één kalendermaand opzegtermijn via <a href="mailto:info@elly-apps.nl">info@elly-apps.nl</a>.</p>
      </section>
      <section>
        <h2>Artikel 9 — Toepasselijk recht</h2>
        <p>Op alle overeenkomsten is Nederlands recht van toepassing.</p>
      </section>
        </div>
      </div>
    </>
  )
}
