import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import MobileStickyBar from '@/components/MobileStickyBar'
import CookieBanner from '@/components/CookieBanner'
import Analytics from '@/components/Analytics'
import TimedPopup from '@/components/TimedPopup'
import ScrollCTA from '@/components/ScrollCTA'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Professionele website laten maken voor MKB | Elly Apps',
  description:
    'Elly Apps bouwt professionele websites voor het MKB. Met basis SEO, volledig ontzorgd. Vanaf €49 per maand.',
  metadataBase: new URL('https://elly-apps.nl'),
  alternates: {
    canonical: 'https://elly-apps.nl',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl',
    title: 'Professionele website laten maken voor MKB | Elly Apps',
    description:
      'Elly Apps bouwt professionele websites voor het MKB. Met basis SEO, volledig ontzorgd. Vanaf €49 per maand.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Elly Apps & Websites — professionele websites en apps voor het MKB, vanaf €49 per maand',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professionele website laten maken voor MKB | Elly Apps',
    description:
      'Elly Apps bouwt professionele websites voor het MKB. Met basis SEO, volledig ontzorgd. Vanaf €49 per maand.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={jakarta.variable}>
      {/* pb-16 op mobiel: ruimte voor MobileStickyBar onder de footer */}
      <body className="font-sans antialiased bg-bg text-ink pb-16 md:pb-0">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileStickyBar />
        <CookieBanner />
        <ScrollCTA />
        <TimedPopup />
        {/* GA4 en Clarity laden pas na toestemming in de cookiebanner */}
        <Analytics />
      </body>
    </html>
  )
}
