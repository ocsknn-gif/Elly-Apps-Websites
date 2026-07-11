import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import MobileStickyBar from '@/components/MobileStickyBar'
import CookieBanner from '@/components/CookieBanner'
import Script from 'next/script'
import TimedPopup from '@/components/TimedPopup'
import ScrollCTA from '@/components/ScrollCTA'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Professionele website laten maken voor MKB | Elly Apps',
  description:
    'Elly Apps bouwt professionele websites voor het MKB. SEO-geoptimaliseerd, volledig ontzorgd. Vanaf €49 per maand.',
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
      'Elly Apps bouwt professionele websites voor het MKB. SEO-geoptimaliseerd, volledig ontzorgd. Vanaf €49 per maand.',
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
      'Professionele websites en apps voor het MKB. SEO-geoptimaliseerd, volledig ontzorgd. Vanaf €49/maand.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={inter.variable}>
      <head>
        <link
          rel="preload"
          href="/hero-image.webp"
          as="image"
          type="image/webp"
        />
      </head>
      <body className="font-[var(--font-inter)] antialiased bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileStickyBar />
        <CookieBanner />
        <ScrollCTA />
        <TimedPopup />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YZJ22GGTS4"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-YZJ22GGTS4');`}
        </Script>
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","wnxdne8bn4");`}
        </Script>
      </body>
    </html>
  )
}
