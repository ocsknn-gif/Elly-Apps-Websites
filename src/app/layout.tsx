import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import MobileStickyBar from '@/components/MobileStickyBar'
import CookieBanner from '@/components/CookieBanner'
import ScrollCTA from '@/components/ScrollCTA'
import TimedPopup from '@/components/TimedPopup'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Professionele website laten maken voor MKB | Elly Apps',
  description:
    'Elly Apps bouwt en beheert professionele websites voor het MKB. SEO-geoptimaliseerd, betaalbaar en volledig ontzorgd. Vanaf €49/maand.',
  metadataBase: new URL('https://elly-apps.nl'),
  alternates: {
    canonical: 'https://elly-apps.nl',
  },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl',
    title: 'Professionele website laten maken voor MKB | Elly Apps',
    description:
      'Elly Apps bouwt en beheert professionele websites voor het MKB. SEO-geoptimaliseerd, betaalbaar en volledig ontzorgd. Vanaf €49/maand.',
    siteName: 'Elly Apps',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="/hero-image.webp"
          as="image"
          type="image/webp"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YZJ22GGTS4"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YZJ22GGTS4');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "wnxdne8bn4");
            `,
          }}
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
      </body>
    </html>
  )
}
