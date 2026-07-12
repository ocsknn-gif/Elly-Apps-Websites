import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website laten maken voor zorgpraktijk | Meer patiënten via Google | Elly Apps',
  description: 'Een professionele zorgwebsite laten maken? Elly Apps zorgt dat uw praktijk gevonden wordt op Google. AVG-compliant, online afspraken en volledig beheer. Vanaf €49/maand.',
  alternates: { canonical: 'https://elly-apps.nl/branche/zorg' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/branche/zorg',
    title: 'Website laten maken voor zorgpraktijk | Meer patiënten via Google | Elly Apps',
    description: 'Een professionele zorgwebsite laten maken? Elly Apps zorgt dat uw praktijk gevonden wordt op Google. AVG-compliant, online afspraken en volledig beheer. Vanaf €49/maand.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken voor zorgpraktijk | Meer patiënten via Google | Elly Apps',
    description: 'Een professionele zorgwebsite laten maken? Elly Apps zorgt dat uw praktijk gevonden wordt op Google. AVG-compliant, online afspraken en volledig beheer. Vanaf €49/maand.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Voldoet mijn zorgwebsite aan de AVG?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja. Wij bouwen alle zorgwebsites AVG-compliant. Dit betekent veilige formulieren, een correcte privacyverklaring en cookiebeheer dat voldoet aan de Nederlandse wetgeving.' },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een online afspraakmodule integreren?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja. Wij integreren een online afspraakmodule zodat patiënten 24/7 zelf een afspraak kunnen inplannen.' },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een zorgwebsite?',
      acceptedAnswer: { '@type': 'Answer', text: 'Een professionele zorgwebsite via Elly Apps begint vanaf €299 eenmalig + €49 per maand, inclusief hosting, onderhoud en SEO-optimalisatie.' },
    },
  ],
}

const faq = [
  { q: 'Voldoet mijn zorgwebsite aan de AVG?', a: 'Ja. Wij bouwen alle zorgwebsites AVG-compliant. Dit betekent veilige formulieren, een correcte privacyverklaring en cookiebeheer dat voldoet aan de Nederlandse wetgeving.' },
  { q: 'Kan ik een online afspraakmodule integreren?', a: 'Ja. Wij integreren een online afspraakmodule zodat patiënten 24/7 zelf een afspraak kunnen inplannen. Dit ontlast uw balie en verhoogt de tevredenheid van patiënten.' },
  { q: 'Hoe toon ik mijn specialisaties op de website?', a: 'Wij maken voor elke specialisatie een aparte pagina of sectie, zodat patiënten snel vinden wat ze zoeken en Google uw expertise herkent.' },
  { q: 'Kan ik een patiëntenportaal koppelen?', a: 'Ja. We kunnen een koppeling maken met bestaande patiëntenportalen of EPD-systemen, afhankelijk van uw huidige software.' },
  { q: 'Is mijn website toegankelijk voor mensen met een beperking?', a: 'Ja. Wij bouwen websites die voldoen aan de WCAG-richtlijnen voor digitale toegankelijkheid, zodat ook patiënten met een visuele of motorische beperking uw website goed kunnen gebruiken.' },
  { q: 'Wat als ik al een zorgwebsite heb?', a: 'Dan analyseren wij uw huidige website gratis op SEO, snelheid en conversie. Daarna kunt u kiezen voor een volledige redesign of gerichte verbeteringen.' },
]

export default function ZorgPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div>
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Branche</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Meer patiënten voor uw zorgpraktijk via Google — zonder gedoe</h1>
          <p className="text-xl text-gray-600">Elke dag zoeken mensen in uw regio online naar een zorgverlener. Wees zichtbaar wanneer het telt.</p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>Elke dag zoeken mensen in uw regio online naar een zorgverlener. Ze lezen reviews, bekijken uw behandelaanbod en willen direct een afspraak kunnen maken — zonder te bellen. Als uw praktijk daar niet professioneel zichtbaar is, kiezen ze voor een concurrent die dat wél is.</p>
          <p>Een zorgwebsite is meer dan een digitale visitekaart. Het is uw eerste indruk, uw online spreekuur en uw belangrijkste instrument om nieuwe patiënten te bereiken. Bij Elly Apps bouwen we zorgwebsites die niet alleen vertrouwen uitstralen, maar ook technisch correct zijn opgebouwd zodat Google u vindt.</p>
          <p>Een goede zorgwebsite bevat: een duidelijk overzicht van uw behandelingen en specialisaties, informatie over uw team en werkwijze, een online afspraakmodule die 24/7 werkt, uw praktijklocatie en bereikbaarheid, klantbeoordelingen en een AVG-compliant contactformulier.</p>
          <p>De meeste patiënten zoeken lokaal — &quot;huisarts Amsterdam&quot; of &quot;fysiotherapeut Den Haag&quot;. Met lokale SEO zorgen wij dat uw praktijk bovenaan verschijnt bij mensen in uw regio. Google Business optimalisatie is standaard inbegrepen in ons Boost pakket.</p>
          <p>Met een online afspraakmodule kunnen patiënten 24/7 zelf een afspraak inplannen — ook buiten kantooruren. Dit bespaart uw medewerkers tijd en geeft patiënten de vrijheid om op elk gewenst moment een afspraak te maken.</p>
          <p>Een professionele zorgwebsite via Elly Apps begint vanaf €299 eenmalig + €49 per maand, inclusief hosting, onderhoud en SEO-optimalisatie. Er zijn geen verborgen kosten.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'AVG-compliant en veilig',
            'Online afspraakmodule 24/7',
            'Lokale SEO voor uw regio',
            'Google Business Profile optimalisatie',
            'WCAG toegankelijkheidsrichtlijnen',
            'Hosting, SSL en onderhoud inbegrepen',
            'Patiëntenportaal koppeling mogelijk',
            'Professioneel design op maat',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />{f}
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Veelgestelde vragen van zorgpraktijken</h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details key={i} className="border rounded-xl p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.q}
                  <span className="text-[#E53E3E] ml-2">+</span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="bg-[#E53E3E] rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Klaar om meer patiënten te krijgen via internet?</h2>
          <p className="opacity-90 mb-6">✓ Gratis &nbsp; ✓ Vrijblijvend &nbsp; ✓ Binnen 24 uur reactie</p>
          <Link href="/gratis-websitescan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-[#E53E3E] font-semibold hover:bg-gray-100 transition-colors">
            Ja, ik wil een gratis websitescan
          </Link>
        </div>
      </div>
    </>
  )
}
