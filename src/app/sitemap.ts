import type { MetadataRoute } from 'next'

const BASE = 'https://elly-apps.nl'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-06-11')

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/diensten`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/prijzen`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/over-ons`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/faq`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/gratis-websitescan`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/portfolio`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/diensten/boekingssysteem`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/diensten/websites`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/diensten/seo`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/diensten/sea`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/diensten/social-media`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/diensten/apps`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/bedankt`, lastModified, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE}/privacybeleid`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/algemene-voorwaarden`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const blogRoutes: MetadataRoute.Sitemap = [
    'wat-kost-een-website', 'wat-kost-seo', 'wat-kost-google-ads',
    'seo-vs-google-ads', 'website-niet-gevonden-google',
    'goedkope-website', 'seo-tips-mkb', 'website-zzp',
    'kapper', 'loodgieter', 'restaurant',
    'google-ads-zelf-of-uitbesteden',
    'social-media-ai', 'social-media-budget', 'social-media-zelf-of-uitbesteden',
  ].map((slug) => ({ url: `${BASE}/blog/${slug}`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 }))

  const brancheRoutes: MetadataRoute.Sitemap = [
    'loodgieter', 'kapper', 'restaurant', 'tandarts',
    'fysiotherapeut', 'horeca', 'accountantskantoor', 'bouwbedrijf', 'rijschool',
    'schilder', 'zorg',
  ].map((slug) => ({ url: `${BASE}/branche/${slug}`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 }))

  const stadRoutes: MetadataRoute.Sitemap = [
    'amsterdam', 'rotterdam', 'utrecht', 'den-haag', 'eindhoven',
    'almere', 'breda', 'den-bosch', 'groningen', 'haarlem',
    'leiden', 'nijmegen', 'tilburg', 'zwolle',
  ].map((slug) => ({ url: `${BASE}/stad/${slug}`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 }))

  const appsRoutes: MetadataRoute.Sitemap = [
    'amsterdam', 'den-haag', 'breda', 'tilburg', 'app-ontwikkelaar-tilburg', 'noord-holland',
  ].map((slug) => ({ url: `${BASE}/apps/${slug}`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 }))

  const werkgebiedRoutes: MetadataRoute.Sitemap = [
    'noord-holland', 'zuid-holland', 'utrecht',
    'noord-brabant', 'gelderland', 'overijssel', 'groningen',
  ].map((slug) => ({ url: `${BASE}/werkgebied/${slug}`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 }))

  return [...staticRoutes, ...blogRoutes, ...brancheRoutes, ...stadRoutes, ...appsRoutes, ...werkgebiedRoutes]
}
