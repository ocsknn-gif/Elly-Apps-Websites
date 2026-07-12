import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website laten maken in Groningen – vanaf €49/mnd | Elly Apps',
  description: 'Professionele website laten maken in Groningen? Elly Apps bouwt en beheert websites voor lokale ondernemers. Lokale SEO, volledig ontzorgd, vanaf €49 per maand.',
  alternates: { canonical: 'https://elly-apps.nl/werkgebied/groningen' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/werkgebied/groningen',
    title: 'Website laten maken in Groningen – vanaf €49/mnd | Elly Apps',
    description: 'Professionele website laten maken in Groningen? Elly Apps bouwt en beheert websites voor lokale ondernemers. Lokale SEO, volledig ontzorgd, vanaf €49 per maand.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken in Groningen – vanaf €49/mnd | Elly Apps',
    description: 'Professionele website laten maken in Groningen? Elly Apps bouwt en beheert websites voor lokale ondernemers. Lokale SEO, volledig ontzorgd, vanaf €49 per maand.',
    images: ['/og-image.png'],
  },
}

export default function WerkgebiedGroningenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Elly Apps — Werkgebied Groningen', url: 'https://elly-apps.nl/werkgebied/groningen', areaServed: 'Groningen' }) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div>
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Werkgebied</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Website laten maken in Groningen</h1>
          <p className="text-xl text-gray-600">Actief in Groningen, Hoogezand, Veendam, Stadskanaal, Winschoten en Delfzijl — wij bouwen professionele websites voor lokale ondernemers in de provincie Groningen.</p>
        </div>
        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>In de provincie Groningen is online zichtbaarheid juist belangrijk omdat de regio groot en verspreid is. Wie goed vindbaar is in Google wint de klant. Elly Apps helpt ondernemers in Groningen met een professionele website die klanten aantrekt en converteert.</p>
          <p>Wij bouwen snelle, mobielvriendelijke websites die hoog scoren in Google. Van een eenvoudige bedrijfswebsite tot een uitgebreide site met boekingssysteem of webshop — wij leveren maatwerk passend bij uw branche in Groningen.</p>
          <p>Lokale SEO is onderdeel van elk pakket. Wij optimaliseren uw website voor zoektermen relevant voor uw stad of regio binnen Groningen en zorgen voor een volledig Google Business Profile.</p>
          <p>Onze websites zijn volledig beheerd: hosting, SSL, updates en technisch onderhoud zijn inbegrepen.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {['Lokale SEO voor Groningen', 'Mobielvriendelijk en snel', 'Google Business Profile optimalisatie', 'Hosting, SSL en onderhoud inbegrepen', 'Professioneel ontwerp op maat', 'Persoonlijk contact en support'].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700"><CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />{f}</div>
          ))}
        </div>
        <div className="bg-[#f7f7f7] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Actief in Groningen? Wij helpen u groeien.</h2>
          <p className="text-gray-600 mb-6">Vraag een gratis websitescan aan en ontdek uw kansen in Groningen.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">Gratis websitescan</Link>
            <Link href="/prijzen" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold hover:bg-red-50 transition-colors">Bekijk prijzen</Link>
          </div>
        </div>
      </div>
    </>
  )
}
