import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacybeleid | Elly Apps & Websites',
  description: 'Lees hoe Elly Apps & Websites omgaat met uw persoonsgegevens.',
  alternates: { canonical: 'https://elly-apps.nl/privacybeleid' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/privacybeleid',
    title: 'Privacybeleid | Elly Apps & Websites',
    description: 'Lees hoe Elly Apps & Websites omgaat met uw persoonsgegevens.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacybeleid | Elly Apps & Websites',
    description: 'Lees hoe Elly Apps & Websites omgaat met uw persoonsgegevens.',
    images: ['/og-image.png'],
  },
}

export default function PrivacybeleidPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Privacybeleid</h1>
        <p className="text-gray-500 text-sm">Laatste update: juni 2026</p>
      </div>
      <section className="space-y-4 text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">1. Wie zijn wij?</h2>
        <p>Elly Apps & Websites is gevestigd in Nederland en bouwt en beheert professionele websites voor het MKB.</p>
        <p>Contactgegevens: <a href="mailto:info@elly-apps.nl" className="text-[#E53E3E] hover:underline">info@elly-apps.nl</a> | 06-36278515</p>
      </section>
      <section className="space-y-4 text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">2. Welke gegevens verzamelen wij?</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Naam en bedrijfsnaam</li>
          <li>E-mailadres en telefoonnummer</li>
          <li>Website-URL (bij aanvraag websitescan)</li>
          <li>IP-adres en browserinformatie (via Google Analytics 4 en Microsoft Clarity)</li>
        </ul>
      </section>
      <section className="space-y-4 text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">3. Waarvoor gebruiken wij uw gegevens?</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Het beantwoorden van contactverzoeken en offerteaanvragen</li>
          <li>Het uitvoeren van onze dienstverlening</li>
          <li>Het verbeteren van onze website via analysediensten</li>
          <li>Het versturen van relevante informatie (alleen met uw toestemming)</li>
        </ul>
      </section>
      <section className="space-y-4 text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">4. Bewaartermijn</h2>
        <p>Contactformuliergegevens worden uiterlijk 2 jaar na laatste contact verwijderd, tenzij een zakelijke relatie voortduurt.</p>
      </section>
      <section className="space-y-4 text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">5. Cookies en tracking</h2>
        <p>Wij maken gebruik van Google Analytics 4 en Microsoft Clarity. U kunt cookies blokkeren via uw browserinstellingen.</p>
      </section>
      <section className="space-y-4 text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">6. Uw rechten</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Inzage, correctie en verwijdering van uw gegevens</li>
          <li>Bezwaar tegen verwerking</li>
          <li>Overdracht van uw gegevens</li>
        </ul>
        <p>Verzoeken naar <a href="mailto:info@elly-apps.nl" className="text-[#E53E3E] hover:underline">info@elly-apps.nl</a>. Reactie binnen 30 dagen.</p>
      </section>
      <section className="space-y-4 text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">7. Klachten</h2>
        <p>U kunt een klacht indienen bij de <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-[#E53E3E] hover:underline">Autoriteit Persoonsgegevens</a>.</p>
      </section>
    </div>
  )
}
