import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Google Ads voor MKB | SEA & Betaald Adverteren | Elly Apps',
  description: 'Direct bovenaan Google met Google Ads? Elly Apps beheert uw campagnes volledig. Vaste beheerkosten, meetbaar resultaat, geen verborgen kosten. Vraag gratis scan aan.',
  alternates: { canonical: 'https://elly-apps.nl/diensten/sea' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Wat is het verschil tussen SEO en Google Ads?', acceptedAnswer: { '@type': 'Answer', text: 'SEO levert organisch verkeer op de lange termijn. Google Ads (SEA) geeft directe zichtbaarheid bovenaan Google, maar u betaalt per klik. Samen vormen ze een krachtige groeistrategie.' } },
    { '@type': 'Question', name: 'Wat kost Google Ads beheer bij Elly Apps?', acceptedAnswer: { '@type': 'Answer', text: 'Onze beheerkosten starten vanaf €149/mnd. Het advertentiebudget betaalt u direct aan Google — dat is volledig uw keuze en staat los van onze beheerskosten.' } },
    { '@type': 'Question', name: 'Hoe snel zie ik resultaat?', acceptedAnswer: { '@type': 'Answer', text: 'Google Ads campagnes zijn vrijwel direct actief. Na activering verschijnen uw advertenties al binnen enkele uren in de zoekresultaten.' } },
  ],
}

const features = [
  'Campagne setup en zoekwoordonderzoek',
  'Advertentieteksten op maat',
  'Bid management en budgetoptimalisatie',
  'Conversietracking instellen',
  'Remarketing campagnes',
  'Maandelijkse rapportage',
  'Geen langetermijncontract',
  'Transparante beheerkosten',
]

const faq = [
  { q: 'Wat is het verschil tussen SEO en Google Ads?', a: 'SEO levert organisch verkeer op de lange termijn. Google Ads (SEA) geeft directe zichtbaarheid bovenaan Google, maar u betaalt per klik. Samen vormen ze een krachtige groeistrategie.' },
  { q: 'Wat kost Google Ads beheer bij Elly Apps?', a: 'Onze beheerkosten starten vanaf €149/mnd. Het advertentiebudget betaalt u direct aan Google — dat is volledig uw keuze en staat los van onze beheerskosten.' },
  { q: 'Hoe snel zie ik resultaat?', a: 'Google Ads campagnes zijn vrijwel direct actief. Na activering verschijnen uw advertenties al binnen enkele uren in de zoekresultaten.' },
  { q: 'Wat als ik mijn campagne wil pauzeren?', a: 'U kunt uw campagne op elk moment pauzeren of stoppen. Er zijn geen minimale looptijden en geen opzegtermijnen bij ons.' },
  { q: 'Beheren jullie ook bestaande Google Ads accounts?', a: 'Ja. Wij nemen graag een bestaand account over, voeren een audit uit en optimaliseren waar nodig. Dit gaat gepaard met een eenmalige analyse.' },
]

export default function DienstenSeaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div>
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Diensten</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Google Ads — direct bovenaan Google, volledig ontzorgd</h1>
          <p className="text-xl text-gray-600">SEA-beheer voor MKB-bedrijven die nu al klanten willen. Wij zetten uw campagnes op, optimaliseren dagelijks en rapporteren maandelijks.</p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>Met Google Ads staat uw bedrijf direct bovenaan in de zoekresultaten — zelfs als uw website nog niet hoog rankt organisch. U betaalt alleen wanneer iemand op uw advertentie klikt. Dat maakt Google Ads een van de meest meetbare vormen van online adverteren.</p>
          <p>Voor MKB-bedrijven is Google Ads bijzonder effectief voor lokale diensten waarbij klanten actief zoeken: loodgieters, kappers, tandartsenpraktijken, rijscholen en meer. Wanneer iemand zoekt naar &ldquo;loodgieter Amsterdam spoed&rdquo; wilt u als eerste zichtbaar zijn.</p>
          <p>Elly Apps beheert uw Google Ads-campagnes volledig. Van het instellen van campagnes en het schrijven van advertentieteksten tot dagelijkse optimalisatie van biedstrategieën en uitgebreide maandrapportages. U hoeft zelf niets te doen — wij zorgen dat uw budget zo efficiënt mogelijk wordt ingezet.</p>
          <p>Het advertentiebudget betaalt u direct aan Google. Onze beheerkosten zijn transparant en starten vanaf €149 per maand. Geen verborgen kosten, geen langetermijncontract.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />{f}
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Veelgestelde vragen over Google Ads</h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details key={i} className="border rounded-xl p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.q}<span className="text-[#E53E3E] ml-2">+</span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Meer lezen over Google Ads</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Wat kost Google Ads?', href: '/blog/wat-kost-google-ads' },
              { label: 'Google Ads: zelf doen of uitbesteden?', href: '/blog/google-ads-zelf-of-uitbesteden' },
              { label: 'SEO vs Google Ads: wat werkt beter?', href: '/blog/seo-vs-google-ads' },
              { label: 'Bekijk onze prijzen', href: '/prijzen' },
            ].map((r) => (
              <Link key={r.href} href={r.href} className="flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-xl px-4 py-3 hover:text-[#E53E3E] hover:border-[#E53E3E] transition-colors">
                <span className="text-[#E53E3E]">→</span> {r.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-[#E53E3E] rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Klaar om direct meer klanten te krijgen via Google?</h2>
          <p className="opacity-90 mb-6">✓ Gratis &nbsp; ✓ Vrijblijvend &nbsp; ✓ Binnen 24 uur reactie</p>
          <Link href="/gratis-websitescan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-[#E53E3E] font-semibold hover:bg-gray-100 transition-colors">
            Ja, ik wil een gratis scan
          </Link>
        </div>
      </div>
    </>
  )
}
