import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { PakketKaart } from '@/components/PakketKaart'
import { Faq } from '@/components/home/Faq'
import { SectionHeader } from '@/components/home/SectionHeader'

export const metadata: Metadata = {
  title: 'Social media advertenties | Facebook & Instagram | Elly Apps',
  description: 'Meer klanten via Facebook en Instagram? Elly Apps beheert uw social media advertenties volledig. Vaste prijs, meetbaar resultaat. Bekijk onze pakketten.',
  alternates: { canonical: 'https://elly-apps.nl/diensten/social-media' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/diensten/social-media',
    title: 'Social media advertenties | Facebook & Instagram | Elly Apps',
    description: 'Meer klanten via Facebook en Instagram? Elly Apps beheert uw social media advertenties volledig. Vaste prijs, meetbaar resultaat. Bekijk onze pakketten.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social media advertenties | Facebook & Instagram | Elly Apps',
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

const NOTE = '✓ Gratis   ✓ Vrijblijvend   ✓ Binnen één werkdag reactie'

export default function DienstenSocialMediaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero + pakketten */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="h1 text-ink">Social media advertenties — meer klanten via Facebook &amp; Instagram</h1>
            <p className="body-lg text-muted mt-4 max-w-2xl mx-auto">Geen gedoe met ingewikkelde campagnes. Wij regelen alles. Vaste prijs, meetbaar resultaat.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {packages.map((p) => (
              <PakketKaart
                key={p.name}
                naam={p.name}
                prijs={p.monthly ?? 'Op maat'}
                periode={p.monthly ? '/maand' : undefined}
                eenmalig={p.monthly ? `${p.setup} eenmalige opstartkosten` : `${p.setup} eenmalige opstartkosten · Prijs op aanvraag`}
                populair={p.popular}
                features={p.features}
                cta={{ label: 'Ja, ik wil meer klanten via social media', href: '/gratis-websitescan' }}
                note={NOTE}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-labelledby="platforms-titel">
        <div className="max-w-5xl mx-auto">
          <SectionHeader id="platforms-titel" title="Hoe werkt het per platform?" />
          <div className="grid md:grid-cols-3 gap-6">
            {platforms.map((item) => (
              <div key={item.title} className="rounded-2xl border border-line bg-bg shadow-sm p-6">
                <h3 className="h3 text-ink mb-2">{item.title}</h3>
                <p className="body text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversiedoelen */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-labelledby="doelen-titel">
        <div className="max-w-3xl mx-auto">
          <SectionHeader id="doelen-titel" title="Wat zijn uw conversiedoelen?" intro="Voordat we starten bepalen we samen wat succes betekent voor uw bedrijf. Wij stellen campagnes in gericht op:" />
          <ul className="space-y-3 max-w-xl mx-auto mb-8 body text-ink">
            {goals.map((d) => (
              <li key={d} className="flex items-start gap-2">
                <CheckIcon className="size-5 text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>
              Ja, ik wil meer klanten via social media
            </Link>
          </div>
        </div>
      </section>

      <Faq items={faq} className="bg-bg" />
    </>
  )
}
