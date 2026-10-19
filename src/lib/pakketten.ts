/**
 * Websitepakketten — één bron voor de homepage, /prijzen en het schema.org-aanbod
 * op de homepage. Knopteksten en -links bepaalt elke pagina zelf.
 */
export type WebsitePakket = {
  naam: 'Starter' | 'Groei' | 'Pro'
  prijs: string
  /** Maandprijs in euro's voor schema.org; null = op aanvraag */
  maandprijs: number | null
  eenmalig: string
  populair: boolean
  features: string[]
}

export const websitePakketten: WebsitePakket[] = [
  {
    naam: 'Starter',
    prijs: '€49',
    maandprijs: 49,
    eenmalig: '€299 eenmalige setup',
    populair: false,
    features: [
      '4 pagina\'s',
      'Basis SEO',
      'Contactformulier',
      'Hosting & SSL',
      'Maandelijks beheer',
    ],
  },
  {
    naam: 'Groei',
    prijs: '€199',
    maandprijs: 199,
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
  },
  {
    naam: 'Pro',
    prijs: 'Op maat',
    maandprijs: null,
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
  },
]
