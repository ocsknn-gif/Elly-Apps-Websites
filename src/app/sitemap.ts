import type { MetadataRoute } from 'next'

const BASE = 'https://elly-apps.nl'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE },
    { url: `${BASE}/diensten` },
    { url: `${BASE}/prijzen` },
    { url: `${BASE}/over-ons` },
    { url: `${BASE}/contact` },
    { url: `${BASE}/faq` },
    { url: `${BASE}/gratis-websitescan` },
    { url: `${BASE}/blog` },
    { url: `${BASE}/branche` },
    { url: `${BASE}/diensten/boekingssysteem` },
    { url: `${BASE}/diensten/websites` },
    { url: `${BASE}/diensten/seo` },
    { url: `${BASE}/diensten/sea` },
    { url: `${BASE}/diensten/social-media` },
    { url: `${BASE}/diensten/apps` },
    { url: `${BASE}/privacybeleid` },
    { url: `${BASE}/algemene-voorwaarden` },
  ]

  const blogRoutes: MetadataRoute.Sitemap = [
    'wat-kost-een-website', 'wat-kost-seo', 'wat-kost-google-ads',
    'seo-vs-google-ads', 'website-niet-gevonden-google',
    'goedkope-website', 'seo-tips-mkb', 'website-zzp',
    'kapper', 'loodgieter', 'restaurant',
    'google-ads-zelf-of-uitbesteden',
    'social-media-ai', 'social-media-budget', 'social-media-zelf-of-uitbesteden',
  ].map((slug) => ({ url: `${BASE}/blog/${slug}` }))

  const brancheRoutes: MetadataRoute.Sitemap = [
    'loodgieter', 'kapper', 'restaurant', 'tandarts',
    'fysiotherapeut', 'horeca', 'accountantskantoor', 'bouwbedrijf', 'rijschool',
    'schilder', 'zorg',
  ].map((slug) => ({ url: `${BASE}/branche/${slug}` }))

  const stadRoutes: MetadataRoute.Sitemap = [
    'amsterdam', 'rotterdam', 'utrecht', 'den-haag', 'eindhoven',
    'almere', 'breda', 'den-bosch', 'groningen', 'haarlem',
    'leiden', 'nijmegen', 'tilburg', 'zwolle',
  ].map((slug) => ({ url: `${BASE}/stad/${slug}` }))

  const appsRoutes: MetadataRoute.Sitemap = [
    'amsterdam', 'den-haag', 'breda', 'tilburg', 'app-ontwikkelaar-tilburg', 'noord-holland',
  ].map((slug) => ({ url: `${BASE}/apps/${slug}` }))

  const werkgebiedRoutes: MetadataRoute.Sitemap = [
    'noord-holland', 'zuid-holland', 'utrecht',
    'noord-brabant', 'gelderland', 'overijssel', 'groningen',
  ].map((slug) => ({ url: `${BASE}/werkgebied/${slug}` }))

  return [...staticRoutes, ...blogRoutes, ...brancheRoutes, ...stadRoutes, ...appsRoutes, ...werkgebiedRoutes]
}
