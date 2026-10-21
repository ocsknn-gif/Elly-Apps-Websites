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

const cookies = [
  {
    naam: '_ga, _ga_YZJ22GGTS4',
    aanbieder: 'Google Analytics',
    doel: 'Bezoeken onderscheiden en tellen',
    looptijd: 'Tot 2 jaar; in Chrome maximaal 400 dagen',
  },
  {
    naam: '_clck, _clsk',
    aanbieder: 'Microsoft Clarity',
    doel: 'Bezoeker en sessie herkennen voor sessie-opnames en heatmaps',
    looptijd: 'Zoals opgegeven door Microsoft; wordt na livegang gecontroleerd',
  },
  {
    naam: 'cookie-consent (opslag in uw browser)',
    aanbieder: 'Elly Apps & Websites',
    doel: 'Uw cookiekeuze onthouden',
    looptijd: '12 maanden, daarna vragen wij opnieuw om uw keuze',
  },
  {
    naam: 'popup-dismissed (opslag in uw browser)',
    aanbieder: 'Elly Apps & Websites',
    doel: 'Onthouden dat u de pop-up hebt gesloten',
    looptijd: 'Tot u het tabblad sluit',
  },
]

export default function PrivacybeleidPage() {
  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-3xl mx-auto">
          <h1 className="h1 text-ink mb-3">Privacybeleid</h1>
          <p className="text-muted text-sm">Laatste update: oktober 2026</p>
        </div>
      </section>
      <div className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-3xl mx-auto artikel artikel-recht">
      <section>
        <h2>1. Wie zijn wij?</h2>
        <p>Elly Apps & Websites is gevestigd in Nederland en bouwt en beheert professionele websites voor het MKB.</p>
        <p>Vestigingsplaats: Aalsmeer. KvK-nummer: 42092063.</p>
        <p>Contactgegevens: <a href="mailto:info@elly-apps.nl">info@elly-apps.nl</a> | 06-36278515</p>
      </section>
      <section>
        <h2>2. Welke gegevens verzamelen wij?</h2>
        <ul>
          <li>Naam en bedrijfsnaam</li>
          <li>E-mailadres en telefoonnummer</li>
          <li>Website-URL (bij aanvraag websitescan)</li>
          <li>IP-adres en browserinformatie (via Google Analytics 4 en Microsoft Clarity, alleen na uw toestemming)</li>
        </ul>
      </section>
      <section>
        <h2>3. Waarvoor gebruiken wij uw gegevens?</h2>
        <ul>
          <li>Het beantwoorden van contactverzoeken en offerteaanvragen</li>
          <li>Het uitvoeren van onze dienstverlening</li>
          <li>Het verbeteren van onze website via analysediensten</li>
          <li>Het versturen van relevante informatie (alleen met uw toestemming)</li>
        </ul>
      </section>
      <section>
        <h2>4. Op welke grondslag?</h2>
        <ul>
          <li>Analytische cookies (Google Analytics en Microsoft Clarity): uw toestemming.</li>
          <li>Contact- en scanaanvragen: de uitvoering of voorbereiding van een overeenkomst, of ons gerechtvaardigd belang om op uw aanvraag te reageren.</li>
          <li>Het versturen van relevante informatie: uw toestemming.</li>
        </ul>
      </section>
      <section>
        <h2>5. Bewaartermijn</h2>
        <p>Contactformuliergegevens worden uiterlijk 2 jaar na laatste contact verwijderd, tenzij een zakelijke relatie voortduurt.</p>
      </section>
      <section>
        <h2>6. Cookies en tracking</h2>
        <p>
          Wij maken gebruik van Google Analytics 4 en Microsoft Clarity. Deze analytische cookies plaatsen wij alleen
          nadat u daarvoor toestemming geeft via de cookiemelding. Weigert u, dan worden Google Analytics en Microsoft
          Clarity niet geladen. U kunt uw keuze altijd wijzigen of intrekken via &ldquo;Cookie-instellingen&rdquo;
          onderaan elke pagina. Trekt u uw toestemming in, dan verwijderen wij de analytische cookies van deze website.
        </p>
        <p>
          Google Analytics laat ons zien hoeveel bezoekers de website heeft en hoe zij de website gebruiken. Microsoft
          Clarity laat ons zien hoe bezoekers de website gebruiken via sessie-opnames (een weergave van onder meer
          klikken, scrollen en muisbewegingen) en heatmaps. Ook Clarity wordt alleen geladen na uw toestemming.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-line text-ink">
                <th scope="col" className="py-2 pr-4 font-semibold">Naam</th>
                <th scope="col" className="py-2 pr-4 font-semibold">Aanbieder</th>
                <th scope="col" className="py-2 pr-4 font-semibold">Doel</th>
                <th scope="col" className="py-2 font-semibold">Looptijd</th>
              </tr>
            </thead>
            <tbody>
              {cookies.map((c) => (
                <tr key={c.naam} className="border-b border-line align-top">
                  <td className="py-2 pr-4 font-medium text-ink">{c.naam}</td>
                  <td className="py-2 pr-4">{c.aanbieder}</td>
                  <td className="py-2 pr-4">{c.doel}</td>
                  <td className="py-2">{c.looptijd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          De laatste twee zijn geen cookies, maar opslag in uw eigen browser. Ze worden niet met anderen gedeeld.
        </p>
      </section>
      <section>
        <h2>7. Verwerkers en doorgifte buiten de EU</h2>
        <p>Wij maken gebruik van de volgende partijen:</p>
        <ul>
          <li>Google (Google Analytics): websitestatistieken, alleen na uw toestemming</li>
          <li>Microsoft (Clarity): sessie-opnames en heatmaps, alleen na uw toestemming</li>
          <li>Resend: het verzenden van de e-mails met de gegevens uit het contact- en scanformulier</li>
          <li>Vercel: hosting van de website, inclusief serverlogs</li>
        </ul>
        <p>
          Deze partijen zijn gevestigd in de Verenigde Staten, waardoor gegevens buiten de EU kunnen worden verwerkt.
          Zij zijn gecertificeerd onder het EU-US Data Privacy Framework.
        </p>
      </section>
      <section>
        <h2>8. Uw rechten</h2>
        <ul>
          <li>Inzage, correctie en verwijdering van uw gegevens</li>
          <li>Bezwaar tegen verwerking</li>
          <li>Overdracht van uw gegevens</li>
        </ul>
        <p>Verzoeken naar <a href="mailto:info@elly-apps.nl">info@elly-apps.nl</a>. Reactie binnen één maand.</p>
      </section>
      <section>
        <h2>9. Klachten</h2>
        <p>U kunt een klacht indienen bij de <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer">Autoriteit Persoonsgegevens</a>.</p>
      </section>
        </div>
      </div>
    </>
  )
}
