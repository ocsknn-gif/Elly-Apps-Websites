/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      // Oude Lovable stad URLs → nieuwe Next.js URLs
      { source: '/website-laten-maken/amsterdam', destination: '/stad/amsterdam', permanent: true },
      { source: '/website-laten-maken/rotterdam', destination: '/stad/rotterdam', permanent: true },
      { source: '/website-laten-maken/utrecht', destination: '/stad/utrecht', permanent: true },
      { source: '/website-laten-maken/den-haag', destination: '/stad/den-haag', permanent: true },
      { source: '/website-laten-maken/eindhoven', destination: '/stad/eindhoven', permanent: true },
      { source: '/website-laten-maken/almere', destination: '/stad/almere', permanent: true },
      { source: '/website-laten-maken/breda', destination: '/stad/breda', permanent: true },
      { source: '/website-laten-maken/den-bosch', destination: '/stad/den-bosch', permanent: true },
      { source: '/website-laten-maken/groningen', destination: '/stad/groningen', permanent: true },
      { source: '/website-laten-maken/haarlem', destination: '/stad/haarlem', permanent: true },
      { source: '/website-laten-maken/leiden', destination: '/stad/leiden', permanent: true },
      { source: '/website-laten-maken/nijmegen', destination: '/stad/nijmegen', permanent: true },
      { source: '/website-laten-maken/tilburg', destination: '/stad/tilburg', permanent: true },
      { source: '/website-laten-maken/zwolle', destination: '/stad/zwolle', permanent: true },

      // Oude Lovable branche URLs → nieuwe Next.js URLs
      { source: '/website-laten-maken/loodgieter', destination: '/branche/loodgieter', permanent: true },
      { source: '/website-laten-maken/kapper', destination: '/branche/kapper', permanent: true },
      { source: '/website-laten-maken/restaurant', destination: '/branche/restaurant', permanent: true },
      { source: '/website-laten-maken/tandarts', destination: '/branche/tandarts', permanent: true },
      { source: '/website-laten-maken/fysiotherapeut', destination: '/branche/fysiotherapeut', permanent: true },
      { source: '/website-laten-maken/horeca', destination: '/branche/horeca', permanent: true },
      { source: '/website-laten-maken/accountant', destination: '/branche/accountantskantoor', permanent: true },
      { source: '/website-laten-maken/bouw', destination: '/branche/bouwbedrijf', permanent: true },
      { source: '/website-laten-maken/rijschool', destination: '/branche/rijschool', permanent: true },
      { source: '/website-laten-maken/schilder', destination: '/branche/schilder', permanent: true },
      { source: '/website-laten-maken/zorg', destination: '/branche/zorg', permanent: true },
      { source: '/website-laten-maken/mkb', destination: '/branche', permanent: true },

      // Oude Lovable werkgebied URLs
      { source: '/website-laten-maken/noord-holland', destination: '/werkgebied/noord-holland', permanent: true },
      { source: '/website-laten-maken/zuid-holland', destination: '/werkgebied/zuid-holland', permanent: true },
      { source: '/website-laten-maken/utrecht-provincie', destination: '/werkgebied/utrecht', permanent: true },
      { source: '/website-laten-maken/noord-brabant', destination: '/werkgebied/noord-brabant', permanent: true },
      { source: '/website-laten-maken/gelderland', destination: '/werkgebied/gelderland', permanent: true },
      { source: '/website-laten-maken/overijssel', destination: '/werkgebied/overijssel', permanent: true },

      // Oude Lovable diensten URLs
      { source: '/seo', destination: '/diensten/seo', permanent: true },
      { source: '/sea', destination: '/diensten/sea', permanent: true },
      { source: '/social-media', destination: '/diensten/social-media', permanent: true },
      { source: '/diensten/websites', destination: '/diensten/websites', permanent: false },

      // Oude blog URLs
      { source: '/blog/website-laten-maken-loodgieter', destination: '/blog/loodgieter', permanent: true },
      { source: '/blog/website-laten-maken-kapper', destination: '/blog/kapper', permanent: true },
      { source: '/blog/website-laten-maken-restaurant', destination: '/blog/restaurant', permanent: true },
      { source: '/blog/website-laten-maken-zzp', destination: '/blog/website-zzp', permanent: true },
      { source: '/blog/wat-kost-een-website-laten-maken-2026', destination: '/blog/wat-kost-een-website', permanent: true },
      { source: '/blog/social-media-advertenties-zelf-doen-of-uitbesteden', destination: '/blog/social-media-zelf-of-uitbesteden', permanent: true },
      { source: '/blog/social-media-advertenties-budget-tips', destination: '/blog/social-media-budget', permanent: true },
      { source: '/blog/ai-social-media-advertenties-mkb', destination: '/blog/social-media-ai', permanent: true },
      { source: '/blog/goedkope-professionele-website-laten-maken', destination: '/blog/goedkope-website', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)\\.(ico|png|jpg|jpeg|webp|svg|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ]
  },
}

export default nextConfig
