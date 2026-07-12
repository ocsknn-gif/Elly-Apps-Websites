import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hoeveel budget heb je nodig voor social media advertenties? | Elly Apps',
  description: 'Wat is een realistisch budget voor Facebook en Instagram advertenties als MKB? Wij geven concrete cijfers en uitleg over hoe u uw budget het beste inzet.',
  alternates: { canonical: 'https://elly-apps.nl/blog/social-media-budget' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/blog/social-media-budget',
    title: 'Hoeveel budget heb je nodig voor social media advertenties? | Elly Apps',
    description: 'Wat is een realistisch budget voor Facebook en Instagram advertenties als MKB? Wij geven concrete cijfers en uitleg over hoe u uw budget het beste inzet.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hoeveel budget heb je nodig voor social media advertenties? | Elly Apps',
    description: 'Wat is een realistisch budget voor Facebook en Instagram advertenties als MKB? Wij geven concrete cijfers en uitleg over hoe u uw budget het beste inzet.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Hoeveel budget heb je nodig voor social media advertenties?',
  author: { '@type': 'Organization', name: 'Elly Apps' },
  publisher: { '@type': 'Organization', name: 'Elly Apps', url: 'https://elly-apps.nl' },
  datePublished: '2026-06-11',
  url: 'https://elly-apps.nl/blog/social-media-budget',
}

export default function BlogSocialMediaBudgetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-gray prose-lg max-w-none">
        <Link href="/blog" className="text-sm text-[#E53E3E] hover:underline not-prose">
          ← Terug naar blog
        </Link>

        <h1 className="text-4xl font-extrabold text-gray-900 mt-6 mb-4">
          Hoeveel budget heb je nodig voor social media advertenties?
        </h1>
        <p className="text-gray-500 text-sm mb-8">Gepubliceerd op 11 juni 2026 door Elly Apps</p>

        <p>
          Een van de meest gestelde vragen van MKB-ondernemers die willen beginnen met Facebook of Instagram advertenties: &ldquo;Hoeveel budget heb ik eigenlijk nodig?&rdquo; Het eerlijke antwoord is: het hangt af van uw doelen, uw branche en uw werkgebied. Maar we geven u concrete cijfers als leidraad.
        </p>

        <h2>Minimumbudget om resultaten te zien</h2>
        <p>
          Meta (Facebook en Instagram) heeft een minimum van €1 per dag per advertentiegroep. Maar met €1 per dag bereikt u praktisch niemand. Een realistisch minimumbudget voor een lokale MKB-campagne is €5 tot €10 per dag — dus €150 tot €300 per maand.
        </p>
        <p>
          Met dat budget kunt u een lokale doelgroep van enkele duizenden mensen wekelijks bereiken. Dat is genoeg om naamsbekendheid op te bouwen en eerste leads te genereren, mits de advertenties en landingspagina goed zijn.
        </p>

        <h2>Wat kunt u verwachten per budget?</h2>
        <ul>
          <li><strong>€150-300/mnd:</strong> Lokale naamsbekendheid, eerste leads. Geschikt als aanvulling op bestaande marketing.</li>
          <li><strong>€300-600/mnd:</strong> Structurele leadgeneratie voor lokale dienstverleners. Voldoende voor retargeting en A/B testen.</li>
          <li><strong>€600-1.500/mnd:</strong> Serieuze groei. Meerdere campagnes parallel, videoadvertenties, volledige funnelbenadering.</li>
          <li><strong>€1.500+/mnd:</strong> Schaalbare groei voor bedrijven die social media als primair acquisitiekanaal inzetten.</li>
        </ul>

        <h2>Advertentiebudget versus beheerkosten</h2>
        <p>
          Een belangrijk onderscheid: het advertentiebudget (wat u aan Meta betaalt) staat los van de beheerkosten (wat u aan uw bureau betaalt). Als u €300 per maand aan advertenties besteedt en €149 aan beheer, zijn uw totale kosten €449 per maand.
        </p>
        <p>
          Professioneel beheer zorgt ervoor dat uw advertentiebudget zo efficiënt mogelijk wordt ingezet. Zonder optimalisatie kan een groot deel van uw budget verdwijnen aan irrelevante klikken of verkeerde doelgroepen.
        </p>

        <h2>Hoe verdeelt u uw budget slim?</h2>
        <p>
          Een beproefde strategie voor MKB:
        </p>
        <ul>
          <li><strong>70%</strong> naar koude doelgroepen — mensen die u nog niet kennen maar wel in uw regio en doelgroep vallen.</li>
          <li><strong>20%</strong> naar retargeting — websitebezoekers die nog geen contact hebben opgenomen.</li>
          <li><strong>10%</strong> naar testen — nieuwe advertentieformaten, andere koppen, nieuwe doelgroepen.</li>
        </ul>

        <h2>Wanneer verhoogt u uw budget?</h2>
        <p>
          Verhoog uw budget alleen als de resultaten dat rechtvaardigen. Heeft u een advertentie die structureel nieuwe klanten oplevert voor een acceptabele kostprijs? Dan is schalen (meer budget in dezelfde winnende advertentie stoppen) de logische volgende stap. Verhoog nooit het budget van een advertentie die niet presteert — investeer liever in een nieuw concept.
        </p>

        <div className="not-prose mt-10 flex flex-col sm:flex-row gap-4">
          <Link href="/gratis-websitescan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold text-sm hover:bg-[#C53030] transition-colors">
            Gratis scan aanvragen
          </Link>
          <Link href="/diensten/social-media" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold text-sm hover:bg-red-50 transition-colors">
            Bekijk onze social media pakketten
          </Link>
        </div>
      </article>
    </>
  )
}
