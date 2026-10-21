import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Faq } from '@/components/home/Faq'

export const metadata: Metadata = {
  title: 'Website laten maken voor zorgpraktijk | Meer patiënten via Google | Elly Apps',
  description: 'Een professionele zorgwebsite laten maken? Elly Apps zorgt dat uw praktijk gevonden wordt op Google. Met privacyverklaring, cookiebeheer en volledig beheer. Vanaf €49/maand. Online afspraken zijn als aparte uitbreiding mogelijk.',
  alternates: { canonical: 'https://elly-apps.nl/branche/zorg' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/branche/zorg',
    title: 'Website laten maken voor zorgpraktijk | Meer patiënten via Google | Elly Apps',
    description: 'Een professionele zorgwebsite laten maken? Elly Apps zorgt dat uw praktijk gevonden wordt op Google. Met privacyverklaring, cookiebeheer en volledig beheer. Vanaf €49/maand. Online afspraken zijn als aparte uitbreiding mogelijk.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken voor zorgpraktijk | Meer patiënten via Google | Elly Apps',
    description: 'Een professionele zorgwebsite laten maken? Elly Apps zorgt dat uw praktijk gevonden wordt op Google. Met privacyverklaring, cookiebeheer en volledig beheer. Vanaf €49/maand. Online afspraken zijn als aparte uitbreiding mogelijk.',
    images: ['/og-image.png'],
  },
}

const faq = [
  { q: 'Is er een privacyverklaring en cookiebeheer op mijn zorgwebsite?', a: 'Wij nemen een privacyverklaring en cookiebeheer op in uw website.' },
  { q: 'Kan ik een online afspraakmodule integreren?', a: 'Dat kan, als aparte uitbreiding. Een online afspraakmodule zit niet in de websitepakketten, maar wij kunnen het voor u integreren. Neem contact op voor een vrijblijvende offerte.' },
  { q: 'Hoe toon ik mijn specialisaties op de website?', a: 'Wij maken voor elke specialisatie een aparte pagina of sectie, zodat patiënten snel vinden wat ze zoeken en Google uw expertise herkent.' },
  { q: 'Kan ik een patiëntenportaal koppelen?', a: 'Koppelingen met bestaande patiëntenportalen of EPD-systemen zijn op aanvraag mogelijk, in overleg en afhankelijk van uw huidige software.' },
  { q: 'Is mijn website toegankelijk voor mensen met een beperking?', a: 'Wij letten op toegankelijkheid, zodat ook patiënten met een visuele of motorische beperking uw website goed kunnen gebruiken.' },
  { q: 'Wat als ik al een zorgwebsite heb?', a: 'Dan analyseren wij uw huidige website gratis op SEO, snelheid en conversie. Daarna kunt u kiezen voor een volledige redesign of gerichte verbeteringen.' },
  { q: 'Wat kost een zorgwebsite?', a: 'Een professionele zorgwebsite via Elly Apps begint vanaf €299 eenmalig + €49 per maand, inclusief hosting, onderhoud en basis SEO-optimalisatie.' },
]

// Schema komt uit dezelfde items als de zichtbare FAQ, zodat ze altijd gelijk lopen
const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function ZorgPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Branche</p>
          <h1 className="h1 text-ink">Meer patiënten voor uw zorgpraktijk via Google — zonder gedoe</h1>
          <p className="body-lg text-muted mt-4">Elke dag zoeken mensen in uw regio online naar een zorgverlener. Wees zichtbaar wanneer het telt.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>Elke dag zoeken mensen in uw regio online naar een zorgverlener. Ze lezen reviews, bekijken uw behandelaanbod en willen direct een afspraak kunnen maken — zonder te bellen. Als uw praktijk daar niet professioneel zichtbaar is, kiezen ze voor een concurrent die dat wél is.</p>
          <p>Een zorgwebsite is meer dan een digitale visitekaart. Het is uw eerste indruk, uw online spreekuur en uw belangrijkste instrument om nieuwe patiënten te bereiken. Bij Elly Apps bouwen we zorgwebsites die niet alleen vertrouwen uitstralen, maar ook technisch correct zijn opgebouwd zodat Google u vindt.</p>
          <p>Een goede zorgwebsite bevat: een duidelijk overzicht van uw behandelingen en specialisaties, informatie over uw team en werkwijze, uw praktijklocatie en bereikbaarheid, klantbeoordelingen en een contactformulier met privacyverklaring.</p>
          <p>De meeste patiënten zoeken lokaal — &quot;huisarts Amsterdam&quot; of &quot;fysiotherapeut Den Haag&quot;. Met lokale SEO zorgen wij dat uw praktijk bovenaan verschijnt bij mensen in uw regio. Google Business optimalisatie is standaard inbegrepen in ons Groei pakket.</p>
          <p>Wilt u dat patiënten zelf een afspraak kunnen inplannen, ook buiten kantooruren? Dan kunt u een online afspraakmodule als aparte uitbreiding laten toevoegen. De prijs is afhankelijk van uw wensen; vraag een vrijblijvende offerte aan.</p>
          <p>Een professionele zorgwebsite via Elly Apps begint vanaf €299 eenmalig + €49 per maand, inclusief hosting, onderhoud en SEO-optimalisatie. Er zijn geen verborgen kosten.</p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Privacyverklaring en cookiebeheer',
            'Online afspraakmodule (optionele uitbreiding)',
            'Lokale SEO voor uw regio',
            'Google Business Profile optimalisatie',
            'Wij letten op toegankelijkheid',
            'Hosting, SSL en onderhoud inbegrepen',
            'Koppelingen op aanvraag, in overleg',
            'Professioneel design op maat',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 body text-ink">
              <CheckCircleIcon className="size-5 text-brand shrink-0" aria-hidden="true" />
              {f}
            </div>
          ))}
        </div>
      </section>

      <Faq items={faq} title="Veelgestelde vragen van zorgpraktijken" className="bg-bg" />

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Klaar om meer patiënten te krijgen via internet?</h2>
          <p className="body-lg text-navy-muted mt-4">✓ Gratis &nbsp; ✓ Vrijblijvend &nbsp; ✓ Binnen één werkdag reactie</p>
          <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg', className: 'mt-8' })}>
            Ja, ik wil een gratis websitescan
          </Link>
        </div>
      </section>
    </>
  )
}
