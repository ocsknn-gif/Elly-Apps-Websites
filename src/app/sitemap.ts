import type { MetadataRoute } from 'next'

const BASE = 'https://elly-apps.nl'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-06-08')

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/diensten`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/prijzen`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/over-ons`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/faq`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/gratis-websitescan`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/diensten/boekingssysteem`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ]

  const blogRoutes: MetadataRoute.Sitemap = [
    'wat-kost-een-website',
    'wat-kost-seo',
    'wat-kost-google-ads',
    'seo-vs-google-ads',
    'website-niet-gevonden-google',
    'goedkope-website',
    'seo-tips-mkb',
    'website-zzp',
  ].map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const brancheRoutes: MetadataRoute.Sitemap = [
    'loodgieter',
    'kapper',
    'restaurant',
    'tandarts',
    'fysiotherapeut',
  ].map((slug) => ({
    url: `${BASE}/branche/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const appsRoutes: MetadataRoute.Sitemap = [
    'amsterdam',
    'den-haag',
    'breda',
    'tilburg',
    'app-ontwikkelaar-tilburg',
  ].map((slug) => ({
    url: `${BASE}/apps/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const stadRoutes: MetadataRoute.Sitemap = [
    'amsterdam',
    'rotterdam',
    'utrecht',
    'den-haag',
    'eindhoven',
  ].map((slug) => ({
    url: `${BASE}/stad/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...blogRoutes, ...brancheRoutes, ...stadRoutes, ...appsRoutes]
}
