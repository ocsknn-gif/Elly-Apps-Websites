import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website laten maken in Noord-Holland | Elly Apps',
  description: 'Van Amsterdam tot Alkmaar — Elly Apps bouwt en beheert professionele websites voor MKB-bedrijven in Noord-Holland.',
  alternates: { canonical: 'https://elly-apps.nl/werkgebied/noord-holland' },
}

export default function WerkgebiedNoordHollandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Elly Apps — Werkgebied Noord-Holland', url: 'https://elly-apps.nl/werkgebied/noord-holland', areaServed: 'Noord-Holland' }) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div>
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Werkgebied</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Website laten maken in Noord-Holland</h1>
          <p className="text-xl text-gray-600">Actief in Amsterdam, Haarlem, Alkmaar, Zaandam, Hoorn en Hilversum — wij bouwen en beheren professionele websites voor MKB-bedrijven door heel Noord-Holland.</p>
        </div>
        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>Noord-Holland is een van de meest competitieve provincies van Nederland. Goed vindbaar zijn in Google is hier geen luxe maar noodzaak. Elly Apps helpt ondernemers in Noord-Holland met een professionele website die klanten aantrekt en converteert.</p>
          <p>Wij bouwen snelle, mobielvriendelijke websites die hoog scoren in Google. Van een eenvoudige bedrijfswebsite tot een uitgebreide site met boekingssysteem of webshop — wij leveren maatwerk dat past bij uw branche en doelgroep in Noord-Holland.</p>
          <p>Lokale SEO is onderdeel van elk pakket. Wij optimaliseren uw website voor zoektermen die relevant zijn voor uw stad of regio binnen Noord-Holland en zorgen voor een volledig Google Business Profile.</p>
          <p>Onze websites zijn volledig beheerd: hosting, SSL, updates en technisch onderhoud zijn inbegrepen.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {['Lokale SEO voor Noord-Holland', 'Mobielvriendelijk en snel', 'Google Business Profile optimalisatie', 'Hosting, SSL en onderhoud inbegrepen', 'Professioneel ontwerp op maat', 'Persoonlijk contact en support'].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700"><CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />{f}</div>
          ))}
        </div>
        <div className="bg-[#f7f7f7] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Actief in Noord-Holland? Wij helpen u groeien.</h2>
          <p className="text-gray-600 mb-6">Vraag een gratis websitescan aan en ontdek uw kansen in Noord-Holland.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">Gratis websitescan</Link>
            <Link href="/prijzen" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold hover:bg-red-50 transition-colors">Bekijk prijzen</Link>
          </div>
        </div>
      </div>
    </>
  )
}
