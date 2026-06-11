import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website laten maken in Overijssel | Elly Apps',
  description: 'Van Zwolle tot Enschede — Elly Apps bouwt websites die MKB-bedrijven in Overijssel beter vindbaar maken in Google.',
  alternates: { canonical: 'https://elly-apps.nl/werkgebied/overijssel' },
}

export default function WerkgebiedOverijsselPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Elly Apps — Werkgebied Overijssel', url: 'https://elly-apps.nl/werkgebied/overijssel', areaServed: 'Overijssel' }) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div>
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Werkgebied</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Website laten maken in Overijssel</h1>
          <p className="text-xl text-gray-600">Actief in Zwolle, Enschede, Deventer, Almelo, Hengelo en Kampen — wij bouwen websites die MKB-bedrijven in Overijssel beter vindbaar maken.</p>
        </div>
        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>Overijssel kent een sterke ondernemerscultuur. In steden als Zwolle en Enschede is de concurrentie online groot — een professionele website is onmisbaar. Elly Apps helpt ondernemers in Overijssel met een website die klanten aantrekt en converteert.</p>
          <p>Wij bouwen snelle, mobielvriendelijke websites die hoog scoren in Google. Van een eenvoudige bedrijfswebsite tot een uitgebreide site met boekingssysteem of webshop — wij leveren maatwerk passend bij uw branche in Overijssel.</p>
          <p>Lokale SEO is onderdeel van elk pakket. Wij optimaliseren uw website voor zoektermen relevant voor uw stad of regio binnen Overijssel en zorgen voor een volledig Google Business Profile.</p>
          <p>Onze websites zijn volledig beheerd: hosting, SSL, updates en technisch onderhoud zijn inbegrepen.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {['Lokale SEO voor Overijssel', 'Mobielvriendelijk en snel', 'Google Business Profile optimalisatie', 'Hosting, SSL en onderhoud inbegrepen', 'Professioneel ontwerp op maat', 'Persoonlijk contact en support'].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700"><CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />{f}</div>
          ))}
        </div>
        <div className="bg-[#f7f7f7] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Actief in Overijssel? Wij helpen u groeien.</h2>
          <p className="text-gray-600 mb-6">Vraag een gratis websitescan aan en ontdek uw kansen in Overijssel.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">Gratis websitescan</Link>
            <Link href="/prijzen" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold hover:bg-red-50 transition-colors">Bekijk prijzen</Link>
          </div>
        </div>
      </div>
    </>
  )
}
