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
          <p className="text-muted text-sm">Laatste update: november 2026</p>
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
        <p>Opdrachtnemer levert uitsluitend aan bedrijven en zelfstandigen die in het Handelsregister van de KVK zijn ingeschreven.</p>
        <p>Deze versie geldt voor overeenkomsten die vanaf 27 november 2026 tot stand komen. Voor eerdere overeenkomsten blijven de toen gemaakte afspraken gelden.</p>
        <p>Voor maatwerkapps gelden voor looptijd, oplevering en eigendom de afspraken in de offerte.</p>
      </section>
      <section>
        <h2>Artikel 3 — Offertes</h2>
        <p>Alle offertes zijn vrijblijvend en geldig gedurende 30 dagen. Een overeenkomst komt tot stand na schriftelijke acceptatie of bij aanvang van de werkzaamheden.</p>
      </section>
      <section>
        <h2>Artikel 4 — Prijzen en betaling</h2>
        <p>Alle prijzen zijn exclusief BTW. Facturen dienen binnen 14 dagen te worden voldaan. Maandelijkse abonnementen worden vooraf gefactureerd. Vooraf betaalde bedragen worden niet terugbetaald.</p>
        <p>Bij niet tijdige betaling ontvangt opdrachtgever een herinnering met een extra termijn van 14 dagen. Blijft betaling daarna uit, dan mag opdrachtnemer de dienst opschorten en is opdrachtgever de wettelijke handelsrente en incassokosten verschuldigd.</p>
        <p>Opdrachtnemer mag de maandprijs eenmaal per jaar verhogen, ingaand bij de verlenging. Een verhoging wordt minstens 2 maanden vooraf gemeld.</p>
      </section>
      <section>
        <h2>Artikel 5 — Looptijd en opzegging</h2>
        <p>Abonnementen voor websites, SEO, SEA (Google Ads) en social media hebben een looptijd van 1 jaar, die begint bij schriftelijke acceptatie. Daarna worden zij steeds met 1 jaar verlengd.</p>
        <p>Opzeggen kan tot 1 kalendermaand voor het einde van de lopende looptijd via <a href="mailto:info@elly-apps.nl">info@elly-apps.nl</a>.</p>
        <p>Upgraden naar een hoger pakket kan op elk moment. Downgraden kan na het eerste jaar en gaat in bij de volgende verlenging.</p>
      </section>
      <section>
        <h2>Artikel 6 — Uitvoering en oplevering</h2>
        <p>Opdrachtgever draagt zorg voor tijdige aanlevering van benodigde informatie. Vertraging door toedoen van opdrachtgever ontslaat opdrachtnemer van enige deadline.</p>
        <p>De bouw van een website bevat 1 feedbackronde. Wil opdrachtgever na die ronde niet live gaan, dan blijven de eenmalige setup en het eerste contractjaar volledig verschuldigd.</p>
        <p>Het maandelijkse websitebeheer bevat 30 minuten kleine wijzigingen per maand. Niet gebruikte tijd vervalt. Meer werk wordt op offerte uitgevoerd.</p>
      </section>
      <section>
        <h2>Artikel 7 — Eigendom en overdracht</h2>
        <p>Na het einde van de overeenkomst en betaling van alle openstaande bedragen gaan de domeinnaam van opdrachtgever, de door opdrachtgever aangeleverde teksten en foto&apos;s en de door opdrachtnemer voor opdrachtgever geschreven teksten mee naar opdrachtgever.</p>
        <p>Het ontwerp en de code van de website blijven eigendom van opdrachtnemer. Opdrachtgever kan de website overnemen tegen een vergoeding op basis van een offerte.</p>
      </section>
      <section>
        <h2>Artikel 8 — Aansprakelijkheid</h2>
        <p>Aansprakelijkheid is beperkt tot het gefactureerde bedrag van de drie voorafgaande maanden. Opdrachtnemer is niet aansprakelijk voor indirecte schade of gederfde winst.</p>
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
