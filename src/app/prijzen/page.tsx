import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { PrijzenFilter } from '@/components/PrijzenFilter'

export const metadata: Metadata = {
  title: 'Prijzen | Elly Apps',
  description:
    'Bekijk de transparante prijzen van Elly Apps voor websites, SEO, Google Ads, social media en apps. Geen verborgen kosten. Vaste maandprijs.',
  alternates: { canonical: 'https://elly-apps.nl/prijzen' },
}

const pakketten = {
  Websites: [
    {
      naam: 'Starter',
      prijs: '€49',
      eenmalig: '€299 eenmalige setup',
      populair: false,
      features: [
        '4 pagina\'s',
        'Basis SEO',
        'Contactformulier',
        'Hosting & SSL',
        'Maandelijks beheer',
      ],
      cta: 'Ja, ik wil mijn gratis websitescan',
      href: '/gratis-websitescan',
    },
    {
      naam: 'Boost',
      prijs: '€199',
      eenmalig: '€499 eenmalige setup',
      populair: true,
      features: [
        '6 pagina\'s + 3 stadspagina\'s',
        'Lokale SEO',
        'Google Business optimalisatie',
        'Maandelijkse updates',
        'Performance rapportage',
        'Teksten optioneel beschikbaar (+€149)',
      ],
      cta: 'Ja, ik wil mijn gratis websitescan',
      href: '/gratis-websitescan',
    },
    {
      naam: 'Pro',
      prijs: 'Op maat',
      eenmalig: '€799 eenmalige setup · Prijs op aanvraag',
      populair: false,
      features: [
        '10+ pagina\'s',
        'Volledige SEO-strategie',
        'Blog',
        'Video integratie',
        'Maandrapportages',
        'Persoonlijke accountmanager',
        'Websiteteksten inbegrepen',
      ],
      cta: 'Ja, ik wil mijn gratis websitescan',
      href: '/gratis-websitescan',
    },
  ],
  Apps: [
    {
      naam: 'App op maat',
      prijs: 'Op maat',
      eenmalig: 'Prijs op aanvraag',
      populair: false,
      features: [
        'Volledig maatwerk',
        'Web- of mobiele app',
        'API koppelingen',
        'Beheer & onderhoud',
        'Persoonlijke accountmanager',
      ],
      cta: 'Vraag offerte aan',
      href: '/contact',
    },
  ],
  'Social Media': [
    {
      naam: 'Starter',
      prijs: '€149',
      eenmalig: '€149 eenmalige opstartkosten',
      populair: false,
      features: [
        'Campagne setup Facebook + Instagram',
        '1 advertentie per maand',
        'Doelgroep targeting op maat',
        'Maandelijkse rapportage',
      ],
      cta: 'Ja, ik wil meer klanten via social media',
      href: '/contact',
    },
    {
      naam: 'Boost',
      prijs: '€299',
      eenmalig: '€249 eenmalige opstartkosten',
      populair: true,
      features: [
        'Alles uit Starter',
        '3 advertenties per maand',
        'A/B testen',
        'Retargeting',
        'Wekelijkse rapportage',
      ],
      cta: 'Ja, ik wil meer klanten via social media',
      href: '/contact',
    },
    {
      naam: 'Pro',
      prijs: 'Op maat',
      eenmalig: '€399 eenmalige opstartkosten · Prijs op aanvraag',
      populair: false,
      features: [
        'Alles uit Boost',
        'Videoadvertenties',
        'Volledige strategie per kwartaal',
        'Persoonlijke accountmanager',
        'Bi-weekly gesprek',
      ],
      cta: 'Ja, ik wil meer klanten via social media',
      href: '/contact',
    },
  ],
  'Google Ads': [
    {
      naam: 'Starter',
      prijs: '€199',
      eenmalig: '€249 eenmalige opstartkosten',
      populair: false,
      features: [
        'Campagne setup Google Ads',
        '1 zoekcampagne',
        'Zoekwoordenonderzoek',
        'Conversiemeting',
        'Maandelijkse rapportage',
        'Aanbevolen ad spend: €300-€500/mnd',
      ],
      cta: 'Ja, ik wil meer klanten via Google Ads',
      href: '/contact',
    },
    {
      naam: 'Boost',
      prijs: '€349',
      eenmalig: '€399 eenmalige opstartkosten',
      populair: true,
      features: [
        'Alles uit Starter',
        'Meerdere zoekcampagnes',
        'Remarketing',
        'A/B testen advertenties',
        'Wekelijkse optimalisatie',
        'Aanbevolen ad spend: €500-€1.000/mnd',
      ],
      cta: 'Ja, ik wil meer klanten via Google Ads',
      href: '/contact',
    },
    {
      naam: 'Pro',
      prijs: 'Op maat',
      eenmalig: 'Op aanvraag eenmalige opstartkosten · Prijs op aanvraag',
      populair: false,
      features: [
        'Alles uit Boost',
        'Display & Performance Max',
        'Volledige strategie per kwartaal',
        'Persoonlijke accountmanager',
        'Bi-weekly gesprek',
        'Aanbevolen ad spend: €1.000+/mnd',
      ],
      cta: 'Ja, ik wil meer klanten via Google Ads',
      href: '/contact',
    },
  ],
  SEO: [
    {
      naam: 'Starter',
      prijs: '€149',
      eenmalig: '€199 eenmalige opstartkosten',
      populair: false,
      features: [
        'Technische SEO audit',
        'Zoekwoordenonderzoek',
        '5 pagina\'s per maand geoptimaliseerd',
        'Lokale SEO basis',
        'Maandelijkse rapportage',
      ],
      cta: 'Ja, ik wil hoger in Google',
      href: '/contact',
    },
    {
      naam: 'Boost',
      prijs: '€299',
      eenmalig: '€299 eenmalige opstartkosten',
      populair: true,
      features: [
        'Alles uit Starter',
        '10 pagina\'s per maand geoptimaliseerd',
        '1 nieuwe blogpost per maand',
        'Linkbuilding (basis)',
        'Google Business optimalisatie',
        'Wekelijkse monitoring',
      ],
      cta: 'Ja, ik wil hoger in Google',
      href: '/contact',
    },
    {
      naam: 'Pro',
      prijs: 'Op maat',
      eenmalig: 'Op aanvraag eenmalige opstartkosten · Prijs op aanvraag',
      populair: false,
      features: [
        'Alles uit Boost',
        'Volledige website geoptimaliseerd',
        '2+ blogposts per maand',
        'Actieve linkbuilding campagne',
        'Persoonlijke accountmanager',
        'Bi-weekly strategiegesprek',
      ],
      cta: 'Ja, ik wil hoger in Google',
      href: '/contact',
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

export default function PrijzenPage({
  searchParams,
}: {
  searchParams: { dienst?: string }
}) {
  const actief = searchParams.dienst ?? 'Websites'
  const huidigePakketten = pakketten[actief as keyof typeof pakketten] ?? pakketten['Websites']

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          Transparante prijzen — wat u ziet is wat u betaalt
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Geen verborgen kosten. Vaste maandprijs. Tevredenheidsgarantie.
        </p>
      </div>

      {/* Vergelijking banner */}
      <div className="max-w-3xl mx-auto text-center bg-gray-50 rounded-2xl px-6 py-4 text-sm text-gray-600 border border-gray-200">
        <span className="font-semibold text-gray-900">Traditioneel webbureau:</span> €3.000 - €10.000 eenmalig, zonder doorlopend beheer. &nbsp;·&nbsp;
        <span className="font-semibold text-[#E53E3E]">Elly Apps:</span> vanaf €49/maand — inclusief hosting, SEO en onderhoud.
      </div>

      {/* Tabs */}
      <PrijzenFilter actief={actief} />

      {/* Pakketten */}
      <div className={`grid gap-8 items-stretch ${huidigePakketten.length === 1 ? 'max-w-sm mx-auto' : 'grid-cols-1 md:grid-cols-3'}`}>
        {huidigePakketten.map((pakket) => (
          <div
            key={pakket.naam}
            className={`flex flex-col rounded-2xl p-8 shadow-sm relative ${
              pakket.populair
                ? 'border-2 border-[#E53E3E] shadow-lg'
                : 'border border-gray-200'
            }`}
          >
            {pakket.populair && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E53E3E] text-white text-xs font-bold px-4 py-1 rounded-full">
                Meest gekozen
              </span>
            )}
            <p className="text-lg font-bold text-gray-900">{pakket.naam}</p>
            <p className="mt-2 text-4xl font-extrabold text-[#E53E3E]">
              {pakket.prijs.startsWith('€') ? (
                <>{pakket.prijs}<span className="text-lg font-medium text-gray-500">/maand</span></>
              ) : pakket.prijs}
            </p>
            <p className="text-sm text-gray-500 mt-1">{pakket.eenmalig}</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700 flex-1">
              {pakket.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href={pakket.href}
              className={`mt-8 block text-center py-3 rounded-xl font-semibold transition-colors text-sm ${
                pakket.populair
                  ? 'bg-[#E53E3E] text-white hover:bg-[#C53030]'
                  : 'border-2 border-[#E53E3E] text-[#E53E3E] hover:bg-red-50'
              }`}
            >
              {pakket.cta}
            </Link>
            <p className="text-xs text-gray-400 text-center mt-2">✓ Gratis &nbsp; ✓ Vrijblijvend &nbsp; ✓ Binnen 24 uur reactie</p>
          </div>
        ))}
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
                <span className="shrink-0 text-[#E53E3E] text-xl leading-none group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center bg-[#E53E3E] rounded-2xl p-10">
        <h2 className="text-2xl font-bold text-white mb-4">Twijfelt u nog?</h2>
        <p className="text-white/90 mb-6">
          Vraag vrijblijvend een gratis websitescan aan en ontdek wat wij voor uw bedrijf kunnen betekenen.
        </p>
        <Link
          href="/gratis-websitescan"
          className="inline-flex items-center px-7 py-3.5 rounded-xl bg-white text-[#E53E3E] font-semibold hover:bg-red-50 transition-colors"
        >
          Gratis websitescan aanvragen
        </Link>
      </div>
    </div>
  )
}
