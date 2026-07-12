import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Google Ads: zelf doen of uitbesteden? | Elly Apps',
  description: 'Google Ads zelf beheren of uitbesteden aan een bureau? Wij zetten de voor- en nadelen eerlijk op een rij zodat u de juiste keuze maakt voor uw bedrijf.',
  alternates: { canonical: 'https://elly-apps.nl/blog/google-ads-zelf-of-uitbesteden' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/blog/google-ads-zelf-of-uitbesteden',
    title: 'Google Ads: zelf doen of uitbesteden? | Elly Apps',
    description: 'Google Ads zelf beheren of uitbesteden aan een bureau? Wij zetten de voor- en nadelen eerlijk op een rij zodat u de juiste keuze maakt voor uw bedrijf.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads: zelf doen of uitbesteden? | Elly Apps',
    description: 'Google Ads zelf beheren of uitbesteden aan een bureau? Wij zetten de voor- en nadelen eerlijk op een rij zodat u de juiste keuze maakt voor uw bedrijf.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Google Ads: zelf doen of uitbesteden?',
  author: { '@type': 'Organization', name: 'Elly Apps' },
  publisher: { '@type': 'Organization', name: 'Elly Apps', url: 'https://elly-apps.nl' },
  datePublished: '2026-06-11',
  url: 'https://elly-apps.nl/blog/google-ads-zelf-of-uitbesteden',
}

export default function BlogGoogleAdsZelfOfUitbestedenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-gray prose-lg max-w-none">
        <Link href="/blog" className="text-sm text-[#E53E3E] hover:underline not-prose">
          ← Terug naar blog
        </Link>

        <h1 className="text-4xl font-extrabold text-gray-900 mt-6 mb-4">
          Google Ads: zelf doen of uitbesteden?
        </h1>
        <p className="text-gray-500 text-sm mb-8">Gepubliceerd op 11 juni 2026 door Elly Apps</p>

        <p>
          Google Ads is een van de meest effectieve manieren om snel nieuwe klanten te bereiken. Maar de vraag die veel MKB-ondernemers stellen is: kan ik het zelf doen, of moet ik het uitbesteden? In dit artikel geven wij een eerlijk antwoord.
        </p>

        <h2>Wat kunt u zelf doen met Google Ads?</h2>
        <p>
          Google heeft het platform de afgelopen jaren steeds toegankelijker gemaakt. Met Google Ads Express (nu Smart Campaigns) kunt u als ondernemer zelf een eenvoudige campagne opzetten, een dagbudget instellen en advertenties laten draaien. Voor wie net begint en een beperkt budget heeft, kan dit een goede eerste stap zijn.
        </p>
        <p>
          Het nadeel van zelf doen: zonder ervaring verspilt u al snel budget aan irrelevante klikken. Denk aan mensen die zoeken naar iets wat u helemaal niet aanbiedt. Of advertenties die op de verkeerde tijden draaien. Of biedingen die te hoog zijn ingesteld waardoor uw budget in een uur op is.
        </p>

        <h2>Wanneer loont uitbesteden?</h2>
        <p>
          Uitbesteden aan een specialist loont als:
        </p>
        <ul>
          <li>U maandelijks meer dan €300 besteedt aan Google Ads</li>
          <li>U niet de tijd heeft om dagelijks het account te monitoren en bij te sturen</li>
          <li>U wilt weten welke advertenties daadwerkelijk tot telefoontjes of formulieren leiden</li>
          <li>U wilt schalen en meer uit uw budget halen</li>
        </ul>
        <p>
          Een goed Google Ads-bureau verdient zichzelf terug door uw cost-per-click te verlagen en uw conversieratio te verhogen. Als uw beheerkosten €149 per maand zijn, maar u daarmee €500 aan verspild budget bespaart en 20% meer conversies haalt, is de rekening snel gemaakt.
        </p>

        <h2>Wat kost Google Ads beheer?</h2>
        <p>
          Google Ads-beheer door een bureau kost gemiddeld €150 tot €500 per maand, afhankelijk van de complexiteit van de campagnes en het advertentiebudget. Bij Elly Apps starten onze beheerkosten vanaf €149 per maand — volledig transparant, zonder langetermijncontract.
        </p>
        <p>
          Belangrijk om te begrijpen: de beheerkosten en het advertentiebudget zijn twee aparte posten. Het advertentiebudget betaalt u direct aan Google; de beheerkosten zijn de vergoeding voor het beheer van uw account.
        </p>

        <h2>De vijf meest gemaakte fouten bij zelf doen</h2>
        <ul>
          <li><strong>Geen negatieve zoekwoorden instellen</strong> — u betaalt voor klikken van mensen die helemaal niet uw klant zijn.</li>
          <li><strong>Breed matchen zonder controle</strong> — uw advertentie verschijnt bij volledig irrelevante zoekopdrachten.</li>
          <li><strong>Geen conversietracking</strong> — u weet niet welke advertentie tot een belletje of formulier leidt.</li>
          <li><strong>Te kleine geografische targeting</strong> — of juist te breed, waardoor u betaalt voor klikken van buiten uw werkgebied.</li>
          <li><strong>Campagne nooit optimaliseren</strong> — Google Ads vraagt wekelijkse aandacht om maximaal rendement te behalen.</li>
        </ul>

        <h2>Conclusie</h2>
        <p>
          Voor kleine campagnes met een beperkt budget kunt u beginnen met zelf doen. Maar zodra u structureel wilt groeien via Google Ads, is professioneel beheer de slimste investering. U bespaart tijd, vermijdt verspild budget en haalt meer uit elke euro.
        </p>
        <p>
          Twijfelt u? Laat ons uw huidige campagne gratis analyseren. Wij geven u eerlijk advies — ook als we concluderen dat zelf doen voor u de beste optie is.
        </p>

        <div className="not-prose mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Gerelateerde artikelen</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Wat kost Google Ads?', href: '/blog/wat-kost-google-ads' },
              { label: 'SEO vs Google Ads: wat werkt beter?', href: '/blog/seo-vs-google-ads' },
              { label: 'Onze Google Ads-dienst', href: '/diensten/sea' },
              { label: 'Bekijk onze prijzen', href: '/prijzen' },
            ].map((r) => (
              <Link key={r.href} href={r.href} className="flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-xl px-4 py-3 hover:text-[#E53E3E] hover:border-[#E53E3E] transition-colors">
                <span className="text-[#E53E3E]">→</span> {r.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="not-prose mt-10 flex flex-col sm:flex-row gap-4">
          <Link href="/gratis-websitescan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold text-sm hover:bg-[#C53030] transition-colors">
            Vraag gratis Google Ads analyse aan
          </Link>
          <Link href="/diensten/sea" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold text-sm hover:bg-red-50 transition-colors">
            Bekijk onze SEA dienst
          </Link>
        </div>
      </article>
    </>
  )
}
