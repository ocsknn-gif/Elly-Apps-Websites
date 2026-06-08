import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

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
      <body className="font-[var(--font-inter)] antialiased bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
