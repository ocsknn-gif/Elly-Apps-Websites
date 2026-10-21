import type { Metadata } from 'next'
import Link from 'next/link'
import { PrijzenFilter } from '@/components/PrijzenFilter'
import { PakketKaart } from '@/components/PakketKaart'
import { Faq } from '@/components/home/Faq'
import { ClosingCta } from '@/components/home/ClosingCta'
import { SectionHeader } from '@/components/home/SectionHeader'
import { websitePakketten } from '@/lib/pakketten'

export const metadata: Metadata = {
  title: 'Wat kost een website? Prijzen vanaf €49 p/m | Elly Apps',
  description:
    'Transparante vaste maandprijzen voor websites, SEO, Google Ads, social media en apps — vanaf €49 per maand. Geen verborgen kosten, geen hoge investering vooraf.',
  alternates: { canonical: 'https://elly-apps.nl/prijzen' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/prijzen',
    title: 'Wat kost een website? Prijzen vanaf €49 p/m | Elly Apps',
    description: 'Transparante vaste maandprijzen voor websites, SEO, Google Ads, social media en apps — vanaf €49 per maand. Geen verborgen kosten, geen hoge investering vooraf.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wat kost een website? Prijzen vanaf €49 p/m | Elly Apps',
    description: 'Transparante vaste maandprijzen voor websites, SEO, Google Ads, social media en apps — vanaf €49 per maand. Geen verborgen kosten, geen hoge investering vooraf.',
    images: ['/og-image.png'],
  },
}

const pakketten = {
  // Websitepakketten komen uit één bron (ook gebruikt op de homepage)
  Websites: websitePakketten.map((p) => ({
    ...p,
    cta: 'Ja, ik wil mijn gratis websitescan',
    href: '/gratis-websitescan',
  })),
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
    a: 'Nee. De maandprijs is allesomvattend: hosting, SSL en maandelijks beheer zijn inbegrepen. De enige extra kosten zijn de eenmalige setup en eventuele betaalde advertenties (Google Ads).',
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

const brancheLinks = [
  { label: 'Kapper', href: '/branche/kapper' },
  { label: 'Restaurant', href: '/branche/restaurant' },
  { label: 'Loodgieter', href: '/branche/loodgieter' },
  { label: 'Tandarts', href: '/branche/tandarts' },
  { label: 'Fysiotherapeut', href: '/branche/fysiotherapeut' },
  { label: 'Alle branches', href: '/branche' },
]

const NOTE = '✓ Gratis \u00a0 ✓ Vrijblijvend \u00a0 ✓ Binnen één werkdag reactie'

export default function PrijzenPage({
  searchParams,
}: {
  searchParams: { dienst?: string }
}) {
  const actief = searchParams.dienst ?? 'Websites'
  const huidigePakketten = pakketten[actief as keyof typeof pakketten] ?? pakketten['Websites']

  return (
    <>
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-8 md:pt-20 md:pb-10 bg-surface">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="h1 text-ink">Transparante prijzen — wat u ziet is wat u betaalt</h1>
            <p className="body-lg text-muted mt-4">
              Geen verborgen kosten. Vaste maandprijs. U geeft feedback, daarna gaan we live.
            </p>
          </div>

          {/* Vergelijking banner */}
          <div className="max-w-3xl mx-auto text-center bg-bg rounded-2xl px-6 py-4 text-sm text-muted border border-line">
            <span className="font-semibold text-brand-strong">Elly Apps:</span> vanaf €49/maand — inclusief hosting, basis SEO en onderhoud.
          </div>

          {/* Tabs */}
          <PrijzenFilter actief={actief} />
        </div>
      </section>

      {/* Pakketten */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-label="Pakketten">
        <div className="max-w-7xl mx-auto">
          <div className={`grid gap-6 lg:gap-8 items-stretch ${huidigePakketten.length === 1 ? 'max-w-sm mx-auto' : 'grid-cols-1 md:grid-cols-3'}`}>
            {huidigePakketten.map((pakket) => (
              <PakketKaart
                key={pakket.naam}
                naam={pakket.naam}
                prijs={pakket.prijs}
                periode={pakket.prijs.startsWith('€') ? '/maand' : undefined}
                eenmalig={pakket.eenmalig}
                populair={pakket.populair}
                features={pakket.features}
                cta={{ label: pakket.cta, href: pakket.href }}
                note={NOTE}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq items={faqItems} title="Vragen over onze prijzen" className="bg-surface" />

      {/* Branches */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-labelledby="branches-titel">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            id="branches-titel"
            title="Prijzen per branche"
            intro="Benieuwd hoe een website er voor uw vak uitziet? Bekijk de mogelijkheden per branche."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {brancheLinks.map((b) => (
              <Link
                key={b.href}
                href={b.href}
                className="flex min-h-12 items-center justify-center rounded-2xl border border-line bg-bg px-4 py-3 text-center font-semibold text-ink shadow-sm transition-all hover:border-brand-strong hover:text-brand-strong hover:shadow-md"
              >
                {b.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ClosingCta
        title="Twijfelt u nog?"
        text="Vraag vrijblijvend een gratis websitescan aan en ontdek wat wij voor uw bedrijf kunnen betekenen."
        buttonLabel="Gratis websitescan aanvragen"
        note={null}
        beeld={false}
      />
    </>
  )
}
