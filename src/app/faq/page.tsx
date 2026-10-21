import type { Metadata } from 'next'
import { PlusIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Veelgestelde vragen | Elly Apps',
  description:
    'Antwoorden op de meestgestelde vragen over websites laten maken, SEO, prijzen en werkwijze bij Elly Apps.',
  alternates: { canonical: 'https://elly-apps.nl/faq' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/faq',
    title: 'Veelgestelde vragen | Elly Apps',
    description: 'Antwoorden op de meestgestelde vragen over websites laten maken, SEO, prijzen en werkwijze bij Elly Apps.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veelgestelde vragen | Elly Apps',
    description: 'Antwoorden op de meestgestelde vragen over websites laten maken, SEO, prijzen en werkwijze bij Elly Apps.',
    images: ['/og-image.png'],
  },
}

const faqItems = [
  {
    q: 'Wat kost een website laten maken bij Elly Apps?',
    a: 'Bij Elly Apps betaalt u een vaste maandprijs zonder verborgen kosten. Het Starter pakket begint vanaf €49 per maand met een eenmalige setup van €299. Het Groei pakket kost €199 per maand met een eenmalige setup van €499. Het Pro pakket heeft een eenmalige setup van €799 met een maandprijs op aanvraag.',
  },
  {
    q: 'Hoe snel wordt mijn website opgeleverd?',
    a: 'Wij leveren uw website gemiddeld binnen twee weken op. Na een gratis kennismaking gaan wij direct aan de slag met het ontwerp en de technische opzet.',
  },
  {
    q: 'Moet ik zelf iets doen aan de website?',
    a: 'Nee, wij ontzorgen u volledig. Van ontwerp tot lancering tot maandelijks onderhoud — wij regelen alles.',
  },
  {
    q: 'Wordt mijn website gevonden op Google?',
    a: 'Ja. Alle websites die wij bouwen zijn standaard geoptimaliseerd voor Google. In het Groei en Pro pakket voegen we ook lokale SEO en Google Business optimalisatie toe.',
  },
  {
    q: 'Kan ik mijn huidige website laten verbeteren?',
    a: 'Ja, dat kan. Wij analyseren uw huidige website gratis via onze websitescan en adviseren u over de beste aanpak.',
  },
  {
    q: 'Zit ik vast aan een lang contract?',
    a: 'Wij hanteren een minimale contractduur van 1 jaar. Na het eerste jaar wordt het contract automatisch verlengd.',
  },
  {
    q: 'Welke sectoren bedienen jullie?',
    a: 'Wij werken voor alle sectoren: van loodgieters tot kappers, van restaurants tot zorgpraktijken.',
  },
  {
    q: 'Kan ik mijn eigen teksten en foto\'s aanleveren?',
    a: 'Ja, u kunt eigen content aanleveren. Wij verzorgen ook professionele teksten en stockfoto\'s indien gewenst.',
  },
  {
    q: 'Wat gebeurt er als mijn website stuk gaat?',
    a: 'Wij monitoren uw website 24/7 en lossen problemen proactief op.',
  },
  {
    q: 'Is mijn website mobiel-vriendelijk?',
    a: 'Ja, alle websites zijn volledig responsive en geoptimaliseerd voor mobiel.',
  },
  {
    q: 'Kan ik later uitbreiden?',
    a: 'Ja, u kunt altijd upgraden naar een hoger pakket.',
  },
  {
    q: 'Bieden jullie ook onderhoud aan bestaande websites?',
    a: 'Ja, wij nemen ook bestaande websites over voor beheer en optimalisatie.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="h1 text-ink">
            Veelgestelde vragen
          </h1>
          <p className="body-lg text-muted mt-4">
            Staat uw vraag er niet bij? Neem gerust contact op.
          </p>
        </div>
      </section>

      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-3xl mx-auto space-y-3">
          {faqItems.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-line bg-bg"
            >
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-4 font-semibold text-ink hover:text-brand-strong [&::-webkit-details-marker]:hidden">
                {item.q}
                <PlusIcon
                  className="size-5 shrink-0 text-brand-strong transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="body text-muted px-5 pb-5">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section px-4 sm:px-6 lg:px-8 bg-navy">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="h2 text-on-navy mb-8">Heeft u een andere vraag?</h2>
          <a
            href="/contact"
            className={buttonVariants({ size: 'lg' })}
          >
            Neem contact op
          </a>
        </div>
      </section>
    </>
  )
}
