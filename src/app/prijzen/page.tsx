import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Prijzen website laten maken | Elly Apps',
  description:
    'Bekijk de transparante prijzen van Elly Apps. Website laten maken vanaf €49 per maand. Geen verborgen kosten, vaste maandprijs.',
}

const offerSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Offer',
        name: 'Starter',
        description: 'Professionele website, hosting, SSL, basis SEO, WhatsApp support',
        price: '49',
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '49',
          priceCurrency: 'EUR',
          billingDuration: 'P1M',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Offer',
        name: 'Groei',
        description:
          'Alles van Starter + lokale SEO, Google Business, maandrapport, prioriteit support',
        price: '199',
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '199',
          priceCurrency: 'EUR',
          billingDuration: 'P1M',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Offer',
        name: 'Pro',
        description: 'Maatwerk, apps, geavanceerde SEO, dedicated support',
        priceSpecification: {
          '@type': 'PriceSpecification',
          description: 'Prijs op aanvraag',
        },
      },
    },
  ],
}

const faqItems = [
  {
    q: 'Zijn er verborgen kosten?',
    a: 'Nee. De maandprijs is allesomvattend: hosting, SSL, updates en support zijn inbegrepen. De enige extra kosten zijn de eenmalige setup en eventuele betaalde advertenties (Google Ads).',
  },
  {
    q: 'Kan ik tussentijds wisselen van pakket?',
    a: 'Ja, u kunt op elk moment upgraden naar een hoger pakket. Downgraden is mogelijk na het eerste contractjaar.',
  },
  {
    q: 'Wat is inbegrepen in de setup?',
    a: 'De eenmalige setup omvat het ontwerp, de bouw, de technische configuratie, de lancering en de eerste SEO-optimalisatie van uw website.',
  },
  {
    q: 'Hoe wordt de maandprijs gefactureerd?',
    a: 'U ontvangt maandelijks een factuur via e-mail. Betaling verloopt via automatische incasso of bankoverschrijving.',
  },
]

export default function PrijzenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Transparante prijzen, geen verrassingen
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Vaste maandprijs. Alles inbegrepen. Geen verborgen kosten.
          </p>
        </div>

        {/* Prijskaarten */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Starter */}
          <div className="flex flex-col rounded-2xl border border-gray-200 p-8 shadow-sm">
            <p className="text-lg font-bold text-gray-900">Starter</p>
            <p className="mt-2 text-4xl font-extrabold text-indigo-600">
              €49<span className="text-lg font-medium text-gray-500">/mnd</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">Eenmalige setup: €299</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700 flex-1">
              {[
                'Professionele website',
                'Hosting inbegrepen',
                'SSL-certificaat',
                'Basis SEO',
                'WhatsApp support',
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <CheckCircleIcon className="size-4 text-indigo-500 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 block text-center py-3 rounded-xl border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors"
            >
              Aan de slag
            </Link>
          </div>

          {/* Groei */}
          <div className="flex flex-col rounded-2xl border-2 border-indigo-600 p-8 shadow-lg relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full">
              Meest gekozen
            </span>
            <p className="text-lg font-bold text-gray-900">Groei</p>
            <p className="mt-2 text-4xl font-extrabold text-indigo-600">
              €199<span className="text-lg font-medium text-gray-500">/mnd</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">Eenmalige setup: €499</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700 flex-1">
              {[
                'Alles van Starter',
                'Lokale SEO',
                'Google Business optimalisatie',
                'Maandelijks rapport',
                'Prioriteit support',
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <CheckCircleIcon className="size-4 text-indigo-500 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 block text-center py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
            >
              Aan de slag
            </Link>
          </div>

          {/* Pro */}
          <div className="flex flex-col rounded-2xl border border-gray-200 p-8 shadow-sm">
            <p className="text-lg font-bold text-gray-900">Pro</p>
            <p className="mt-2 text-4xl font-extrabold text-indigo-600">Op aanvraag</p>
            <p className="text-sm text-gray-500 mt-1">Eenmalige setup: €799</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700 flex-1">
              {[
                'Maatwerk website of app',
                'Geavanceerde SEO',
                'Dedicated support',
                'Google Ads beheer',
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <CheckCircleIcon className="size-4 text-indigo-500 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 block text-center py-3 rounded-xl border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors"
            >
              Neem contact op
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Vragen over onze prijzen
          </h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-gray-200 shadow-sm overflow-hidden"
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
        </section>

        {/* CTA */}
        <div className="text-center bg-indigo-50 rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Twijfelt u nog?</h2>
          <p className="text-gray-600 mb-6">
            Vraag vrijblijvend een gratis websitescan aan en ontdek wat wij voor uw bedrijf kunnen betekenen.
          </p>
          <Link
            href="/gratis-websitescan"
            className="inline-flex items-center px-7 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
          >
            Gratis websitescan aanvragen
          </Link>
        </div>
      </div>
    </>
  )
}
