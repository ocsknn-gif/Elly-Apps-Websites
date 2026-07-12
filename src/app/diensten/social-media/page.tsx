import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Social Media Advertenties voor MKB | Facebook & Instagram | Elly Apps',
  description: 'Meer klanten via Facebook en Instagram? Elly Apps beheert uw social media advertenties volledig. Vaste prijs, meetbaar resultaat. Bekijk onze pakketten.',
  alternates: { canonical: 'https://elly-apps.nl/diensten/social-media' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/diensten/social-media',
    title: 'Social Media Advertenties voor MKB | Facebook & Instagram | Elly Apps',
    description: 'Meer klanten via Facebook en Instagram? Elly Apps beheert uw social media advertenties volledig. Vaste prijs, meetbaar resultaat. Bekijk onze pakketten.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Advertenties voor MKB | Facebook & Instagram | Elly Apps',
    description: 'Meer klanten via Facebook en Instagram? Elly Apps beheert uw social media advertenties volledig. Vaste prijs, meetbaar resultaat. Bekijk onze pakketten.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Wat is het verschil tussen beheerskosten en advertentiebudget?', acceptedAnswer: { '@type': 'Answer', text: 'De beheerskosten betaalt u aan Elly Apps voor het opzetten en optimaliseren van uw campagnes. Het advertentiebudget betaalt u direct aan Meta — dit is het bedrag dat daadwerkelijk aan het tonen van advertenties wordt besteed.' } },
    { '@type': 'Question', name: 'Hoe snel zie ik resultaat?', acceptedAnswer: { '@type': 'Answer', text: 'De meeste campagnes laten na 2 tot 4 weken eerste resultaten zien. Het algoritme heeft tijd nodig om te leren wie uw ideale klant is.' } },
    { '@type': 'Question', name: 'Zit ik vast aan een contract?', acceptedAnswer: { '@type': 'Answer', text: 'Nee. U kunt maandelijks opzeggen zonder verdere verplichtingen.' } },
  ],
}

const packages = [
  {
    name: 'Starter',
    setup: '€149',
    monthly: '€149',
    popular: false,
    features: ['Campagne setup Facebook + Instagram', '1 advertentie per maand', 'Doelgroep targeting op maat', 'Maandelijkse rapportage'],
  },
  {
    name: 'Boost',
    setup: '€249',
    monthly: '€299',
    popular: true,
    features: ['Alles uit Starter', '3 advertenties per maand', 'A/B testen', 'Retargeting', 'Wekelijkse rapportage'],
  },
  {
    name: 'Pro',
    setup: '€399',
    monthly: null,
    popular: false,
    features: ['Alles uit Boost', 'Videoadvertenties', 'Volledige strategie per kwartaal', 'Persoonlijke accountmanager', 'Bi-weekly gesprek'],
  },
]

const platforms = [
  { title: 'Facebook', text: 'Facebook bereikt een breed publiek van 25 tot 65 jaar — ideaal voor MKB-bedrijven die lokale klanten zoeken. We richten campagnes in op basis van locatie, leeftijd en interesses. We meten via de Meta Pixel wie uw advertentie heeft gezien én vervolgens contact heeft opgenomen.' },
  { title: 'Instagram', text: 'Instagram werkt het beste voor visuele branches zoals restaurants, kappers en interieur. We maken advertenties voor Feed, Stories en Reels — gericht op naamsbekendheid en directe aanvragen.' },
  { title: 'Retargeting', text: 'Bezoekers die uw website hebben bekeken maar nog geen contact hebben opgenomen, zien uw advertentie opnieuw. Gemiddeld 3x hogere klikratio dan koude doelgroepen.' },
]

const goals = [
  'Meer telefoontjes of formulierinzendingen',
  'Meer bezoekers naar uw website',
  'Naamsbekendheid in uw regio',
  'Meer volgers en betrokkenheid',
  'Directe omzet — advertenties gericht op mensen die klaar zijn om te kopen',
]

const faq = [
  { q: 'Wat is het verschil tussen beheerskosten en advertentiebudget?', a: 'De beheerskosten betaalt u aan Elly Apps voor het opzetten en optimaliseren van uw campagnes. Het advertentiebudget betaalt u direct aan Meta — dit is het bedrag dat daadwerkelijk aan het tonen van advertenties wordt besteed.' },
  { q: 'Hoe snel zie ik resultaat?', a: 'De meeste campagnes laten na 2 tot 4 weken eerste resultaten zien. Het algoritme heeft tijd nodig om te leren wie uw ideale klant is.' },
  { q: 'Zit ik vast aan een contract?', a: 'Nee. U kunt maandelijks opzeggen zonder verdere verplichtingen.' },
]

export default function DienstenSocialMediaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero + Pricing */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Social media advertenties — meer klanten via Facebook &amp; Instagram</h1>
        <p className="text-lg text-gray-600 mb-10">Geen gedoe met ingewikkelde campagnes. Wij regelen alles. Vaste prijs, meetbaar resultaat.</p>

        <div className="grid md:grid-cols-3 gap-6 items-stretch text-left">
          {packages.map((p) => (
            <div key={p.name} className={`rounded-xl p-6 border-2 flex flex-col relative ${p.popular ? 'border-[#E53E3E] shadow-xl' : 'border-gray-200'}`}>
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E53E3E] text-white text-xs font-bold px-3 py-1 rounded-full">Meest gekozen</span>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-1">{p.name}</h3>
              {p.monthly ? (
                <>
                  <p className="text-3xl font-bold text-[#E53E3E] mb-1">{p.monthly}<span className="text-base text-gray-500">/maand</span></p>
                  <p className="text-sm text-gray-500 mb-4">{p.setup} eenmalige opstartkosten</p>
                </>
              ) : (
                <>
                  <p className="text-2xl font-bold text-[#E53E3E] mb-1">Op maat</p>
                  <p className="text-sm text-gray-500 mb-4">{p.setup} eenmalige opstartkosten · Prijs op aanvraag</p>
                </>
              )}
              <ul className="space-y-2 mb-6 flex-1">
                {p.features.map((f) => <li key={f} className="text-sm flex gap-2 text-gray-700"><span className="text-[#E53E3E]">✓</span>{f}</li>)}
              </ul>
              <div>
                <Link href="/gratis-websitescan" className={`w-full inline-flex items-center justify-center px-4 py-2 rounded-xl font-semibold text-sm transition-colors ${p.popular ? 'bg-[#E53E3E] text-white hover:bg-[#C53030]' : 'border-2 border-[#E53E3E] text-[#E53E3E] hover:bg-red-50'}`}>
                  Ja, ik wil meer klanten via social media
                </Link>
                <p className="text-xs text-gray-500 text-center mt-2">✓ Gratis &nbsp; ✓ Vrijblijvend &nbsp; ✓ Binnen 24 uur reactie</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platforms */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">Hoe werkt het per platform?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {platforms.map((item) => (
              <div key={item.title} className="rounded-xl p-6 border-2 border-gray-200 bg-white">
                <h3 className="text-xl font-bold text-[#E53E3E] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conversion goals */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">Wat zijn uw conversiedoelen?</h2>
        <p className="text-gray-600 text-center mb-6">Voordat we starten bepalen we samen wat succes betekent voor uw bedrijf. Wij stellen campagnes in gericht op:</p>
        <ul className="space-y-3 max-w-xl mx-auto mb-8">
          {goals.map((d) => (
            <li key={d} className="flex gap-2 text-sm text-gray-700">
              <span className="text-[#E53E3E] font-bold">✓</span><span>{d}</span>
            </li>
          ))}
        </ul>
        <div className="text-center">
          <Link href="/gratis-websitescan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">
            Ja, ik wil meer klanten via social media
          </Link>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Veelgestelde vragen</h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details key={i} className="border rounded-xl p-4 bg-white">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.q}<span className="text-[#E53E3E] ml-2">+</span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
