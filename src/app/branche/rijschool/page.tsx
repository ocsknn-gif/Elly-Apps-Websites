import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website laten maken voor rijscholen | Elly Apps',
  description: 'Een professionele website voor uw rijschool. Meer leerlingen aantrekken, online rijlesaanvragen ontvangen en uw reviews laten zien. Vanaf €49/maand.',
  alternates: { canonical: 'https://elly-apps.nl/branche/rijschool' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/branche/rijschool',
    title: 'Website laten maken voor rijscholen | Elly Apps',
    description: 'Een professionele website voor uw rijschool. Meer leerlingen aantrekken, online rijlesaanvragen ontvangen en uw reviews laten zien. Vanaf €49/maand.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken voor rijscholen | Elly Apps',
    description: 'Een professionele website voor uw rijschool. Meer leerlingen aantrekken, online rijlesaanvragen ontvangen en uw reviews laten zien. Vanaf €49/maand.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'DrivingSchool',
  name: 'Elly Apps — Websites voor rijscholen',
  url: 'https://elly-apps.nl/branche/rijschool',
  description: 'Professionele websites voor rijscholen, inclusief lokale SEO en online lesaanvragen.',
}

export default function RijschoolPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div>
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Branche</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Website laten maken voor rijscholen</h1>
          <p className="text-xl text-gray-600">Meer nieuwe leerlingen, betere zichtbaarheid in Google en een professionele eerste indruk — dat levert een goede rijschoolwebsite u op.</p>
        </div>
        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>De rijschoolmarkt is competitief. Leerlingen en hun ouders vergelijken rijscholen online voordat ze bellen. Als uw website verouderd of slecht vindbaar is, kiest men voor de concurrent. Een professionele website gecombineerd met lokale SEO zorgt ervoor dat uw rijschool bovenaan staat wanneer iemand zoekt op &quot;rijschool [uw stad]&quot;.</p>
          <p>Elly Apps bouwt rijschoolwebsites gericht op conversie: een duidelijke aanmeldknop, overzicht van pakketten en tarieven, slagingspercentages en een reviewsectie. Met een geïntegreerd contactformulier komen lesaanvragen direct in uw mailbox.</p>
          <p>Lokale SEO is voor rijscholen essentieel. Wij optimaliseren uw website voor zoektermen als &quot;rijles [stad]&quot; en &quot;snel rijbewijs halen&quot;. Daarnaast zorgen wij voor een volledig Google Business Profile zodat uw rijschool ook in Google Maps zichtbaar is.</p>
          <p>Reviews zijn doorslaggevend voor nieuwe leerlingen. Wij bouwen een prominente reviewsectie en helpen u actief meer beoordelingen te verzamelen. Een hoog slagingspercentage zichtbaar op uw site zet u direct boven concurrenten.</p>
          <p>Onze websites zijn volledig beheerd: hosting, SSL, updates en onderhoud zijn inbegrepen. U focust op het lesgeven, wij zorgen voor uw online zichtbaarheid.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Lokale SEO voor uw rijschoolgebied',
            'Online aanmeldformulier voor leerlingen',
            'Pakketten en tarieven overzichtelijk',
            'Slagingspercentage prominent weergegeven',
            'Google Business Profile optimalisatie',
            'Reviews sectie met Google-beoordelingen',
            'Mobielvriendelijk design',
            'Hosting, SSL en onderhoud inbegrepen',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />{f}
            </div>
          ))}
        </div>
        <div className="bg-[#f7f7f7] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Meer leerlingen via uw website?</h2>
          <p className="text-gray-600 mb-6">Vraag een gratis websitescan aan en ontdek hoe wij uw rijschool beter vindbaar maken.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">Gratis websitescan</Link>
            <Link href="/prijzen" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold hover:bg-red-50 transition-colors">Bekijk prijzen</Link>
          </div>
        </div>
      </div>
    </>
  )
}
