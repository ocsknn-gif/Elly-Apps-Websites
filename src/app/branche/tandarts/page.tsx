import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { RelatedLinks } from '@/components/RelatedLinks'
import { Faq } from '@/components/home/Faq'
import { BranchePrijzen } from '@/components/branches/BranchePrijzen'
import { serviceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Website laten maken voor een tandarts | Elly Apps',
  description:
    'Website laten maken voor uw tandartspraktijk? Met behandelingsoverzicht, vanaf €49 per maand. Online afspraken zijn een aparte uitbreiding.',
  alternates: { canonical: 'https://elly-apps.nl/branche/tandarts' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/branche/tandarts',
    title: 'Website laten maken voor een tandarts | Elly Apps',
    description: 'Website laten maken voor uw tandartspraktijk? Met behandelingsoverzicht, vanaf €49 per maand. Online afspraken zijn een aparte uitbreiding.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken voor een tandarts | Elly Apps',
    description: 'Website laten maken voor uw tandartspraktijk? Met behandelingsoverzicht, vanaf €49 per maand. Online afspraken zijn een aparte uitbreiding.',
    images: ['/og-image.png'],
  },
}

const schema = serviceSchema({
  name: 'Websites voor tandartsen',
  url: 'https://elly-apps.nl/branche/tandarts',
  description: 'Website laten maken voor uw tandartspraktijk? Met behandelingsoverzicht, vanaf €49 per maand. Online afspraken zijn een aparte uitbreiding.',
  audienceType: 'tandartsen',
})

const faqItems = [
  { q: 'Wat kost een website voor een tandartspraktijk?', a: 'Het Starter pakket kost €49 per maand met €299 eenmalige setup. Groei kost €199 per maand met €499 eenmalige setup. Bij Pro is de eenmalige setup €799 en de maandprijs op aanvraag. Alle prijzen zijn exclusief BTW.' },
  { q: 'Hoe snel staat mijn praktijkwebsite online?', a: 'Gemiddeld staat uw website binnen twee weken online. Afhankelijk van de complexiteit kan dit variëren.' },
  { q: 'Kunnen patiënten online een afspraak maken?', a: 'Dat kan als aparte uitbreiding. Een online afsprakensysteem zit niet in de websitepakketten; de prijs hangt af van uw wensen en wij maken daarvoor een offerte.' },
  { q: 'Word ik gevonden door patiënten in mijn regio?', a: 'Basis SEO zit in elk pakket. Lokale SEO en Google Business optimalisatie horen bij het Groei pakket en hoger. Een positie in Google kunnen wij niet garanderen.' },
  { q: 'Kunnen jullie mijn bestaande website overnemen?', a: 'Ja, wij nemen ook bestaande websites over voor beheer en optimalisatie.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function TandartsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Branche</p>
          <h1 className="h1 text-ink">Website laten maken voor een tandarts</h1>
          <p className="body-lg text-muted mt-4">Een website laten maken voor uw tandartspraktijk: informeer nieuwe patiënten en wek vertrouwen, vanaf €49 per maand excl. BTW.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>
            Mensen die op zoek zijn naar een nieuwe tandarts beginnen hun zoektocht online.
            Ze kijken naar de praktijk, het team, de behandelingen die worden aangeboden en
            de ervaringen van andere patiënten. Een professionele, overzichtelijke website
            wekt vertrouwen — en dat is in de zorg misschien wel het allerbelangrijkste.
          </p>
          <p>
            Elly Apps bouwt tandartsenwebsites die nieuwe patiënten overtuigen en bestaande
            patiënten goed informeren. Wij presenteren uw behandelingsaanbod helder: van
            reguliere controles en vullingen tot orthodontie, implantaten en bleekbehandelingen.
            Een duidelijk behandelingsoverzicht met uitleg vermindert drempelvrees en helpt
            patiënten te begrijpen wat ze kunnen verwachten.
          </p>
          <p>
            Online afspraken plannen is voor patiënten een groot gemak. Een online afsprakensysteem
            is geen onderdeel van de websitepakketten, maar kunt u als aparte uitbreiding laten
            toevoegen. Het stuurt automatische bevestigingen en herinneringen per e-mail of SMS.
            De prijs is afhankelijk van uw wensen; wij maken daarvoor een vrijblijvende offerte.
            Meer weten? Bekijk dan onze pagina over het{' '}
            <Link href="/diensten/boekingssysteem" className="text-brand-strong underline hover:no-underline">online boekingssysteem</Link>.
          </p>
          <p>
            Het team is het gezicht van uw praktijk. Wij bouwen een teampagina met foto's en
            korte introducties van uw tandartsen en medewerkers. Dit maakt uw praktijk persoonlijk
            en toegankelijk, wat de drempel verlaagt voor mensen die anders misschien uitstellen.
          </p>
          <h2 className="h2 text-ink pt-6">Wat staat er op een goede praktijkwebsite?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-ink">Nieuwe patiënten:</strong> of u nieuwe patiënten aanneemt en hoe iemand zich aanmeldt.</li>
            <li><strong className="text-ink">Spoed:</strong> welk nummer patiënten bellen bij pijn of een ongeval, ook buiten openingstijden.</li>
            <li><strong className="text-ink">Behandelingen en tarieven:</strong> korte uitleg per behandeling en waar de tarieven te vinden zijn.</li>
            <li><strong className="text-ink">Bereikbaarheid:</strong> adres, openingstijden, parkeren en toegankelijkheid.</li>
          </ul>

          <h2 className="h2 text-ink pt-6">Privacy bij formulieren</h2>
          <p>Vraag in een contactformulier alleen wat nodig is om terug te bellen of te mailen, en geen medische gegevens. Verwijs bij het formulier naar uw privacyverklaring.</p>

          <h2 className="h2 text-ink pt-6">Gevonden worden in uw regio</h2>
          <p>
            Lokale SEO zorgt dat nieuwe patiënten in uw regio u vinden via Google. Zoekopdrachten
            als "tandarts [stad]" of "tandarts nieuw patiënt accepteren [wijk]" zijn voor uw
            praktijk zeer waardevol. In het Groei pakket en hoger optimaliseren wij uw website
            en Google Business Profile voor deze lokale zoekopdrachten.
          </p>
        </div>
      </section>

      <BranchePrijzen title="Wat kost een tandartswebsite?">
        U betaalt eenmalig voor de setup en daarna een vaste maandprijs. Een online afsprakensysteem is een aparte uitbreiding op offertebasis.
      </BranchePrijzen>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Online afsprakensysteem (optionele uitbreiding)',
            'Behandelingsoverzicht met uitleg',
            'Teampagina met foto\'s',
            'Basis SEO; lokale SEO in het Groei pakket en hoger',
            'Google Business optimalisatie in het Groei pakket en hoger',
            'Contactformulier met privacyverklaring',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 body text-ink">
              <CheckCircleIcon className="size-5 text-brand shrink-0" aria-hidden="true" />
              {f}
            </div>
          ))}
        </div>
      </section>

      <Faq items={faqItems} title="Veelgestelde vragen over een tandartswebsite" className="bg-bg" />

      <RelatedLinks
        id="gerelateerd-titel"
        title="Gerelateerde pagina's"
        links={[
          { label: "Website laten maken en beheren", href: "/diensten/websites" },
          { label: "Wat kost een website? Bekijk de prijzen", href: "/prijzen" },
          { label: "Website laten maken voor een zorgpraktijk", href: "/branche/zorg" },
          { label: "Website laten maken voor een fysiotherapeut", href: "/branche/fysiotherapeut" },
          { label: "Online boekingssysteem voor uw website", href: "/diensten/boekingssysteem" },
          { label: "7 praktische SEO tips voor MKB-bedrijven in 2026", href: "/blog/seo-tips-mkb" },
          { label: "Website laten maken per branche", href: "/branche" },
        ]}
      />

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Meer nieuwe patiënten?</h2>
          <p className="body-lg text-navy-muted mt-4">Vraag een gratis websitescan aan en ontdek uw online kansen.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>Gratis websitescan</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
