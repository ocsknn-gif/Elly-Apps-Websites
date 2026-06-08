import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Veelgestelde vragen | Elly Apps',
  description:
    'Antwoorden op de meestgestelde vragen over websites laten maken, SEO, prijzen en werkwijze bij Elly Apps.',
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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Veelgestelde vragen
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Staat uw vraag er niet bij? Neem gerust contact op.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-semibold text-gray-900 list-none select-none hover:bg-gray-50 transition-colors">
                {item.q}
                <span className="shrink-0 text-indigo-600 text-xl leading-none group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center bg-indigo-50 rounded-2xl p-8">
          <p className="text-gray-700 font-medium mb-4">Heeft u een andere vraag?</p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
          >
            Neem contact op
          </a>
        </div>
      </div>
    </>
  )
}
