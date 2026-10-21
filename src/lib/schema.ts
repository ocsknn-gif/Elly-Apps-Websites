export const SITE_URL = 'https://elly-apps.nl'
export const ORG_ID = `${SITE_URL}/#organization`
export const ORG_NAME = 'Elly Apps & Websites'
export const ORG_ALTERNATE_NAME = 'Elly Apps'
export const ORG_SAME_AS = [
  'https://www.linkedin.com/company/136035596/',
  'https://www.facebook.com/profile.php?id=61566679888978',
]

// Google verwerkt JSON-LD per pagina: naam en url staan daarom altijd inline bij de verwijzing.
export const organizationRef = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: ORG_NAME,
  url: SITE_URL,
} as const

export function serviceSchema(opts: {
  name: string
  url: string
  description: string
  audienceType?: string
  areaServed?: { '@type': string; name: string }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    url: opts.url,
    description: opts.description,
    provider: organizationRef,
    areaServed: opts.areaServed ?? { '@type': 'Country', name: 'Netherlands' },
    ...(opts.audienceType ? { audience: { '@type': 'Audience', audienceType: opts.audienceType } } : {}),
  }
}
