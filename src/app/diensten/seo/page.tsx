import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SEO voor MKB | Meer klanten via Google | Elly Apps',
  description: 'Meer klanten via Google zonder te betalen per klik? Elly Apps verzorgt lokale SEO voor MKB-bedrijven. Van technische optimalisatie tot contentstrategie. Vraag gratis scan aan.',
  alternates: { canonical: 'https://elly-apps.nl/diensten/seo' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/diensten/seo',
    title: 'SEO voor MKB | Meer klanten via Google | Elly Apps',
    description: 'Meer klanten via Google zonder te betalen per klik? Elly Apps verzorgt lokale SEO voor MKB-bedrijven. Van technische optimalisatie tot contentstrategie. Vraag gratis scan aan.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO voor MKB | Meer klanten via Google | Elly Apps',
    description: 'Meer klanten via Google zonder te betalen per klik? Elly Apps verzorgt lokale SEO voor MKB-bedrijven. Van technische optimalisatie tot contentstrategie. Vraag gratis scan aan.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Hoe lang duurt het voordat SEO resultaat geeft?', acceptedAnswer: { '@type': 'Answer', text: 'SEO is een langetermijninvestering. Doorgaans ziet u na 3 tot 6 maanden meetbare resultaten in hogere posities en meer organisch verkeer.' } },
    { '@type': 'Question', name: 'Is SEO inbegrepen bij uw websites?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Basis on-page SEO en lokale SEO zijn inbegrepen in al onze website pakketten. Google Business optimalisatie is inbegrepen in het Groei pakket en hoger.' } },
    { '@type': 'Question', name: 'Wat kost SEO bij Elly Apps?', acceptedAnswer: { '@type': 'Answer', text: 'Lokale SEO is inbegrepen in onze maandelijkse pakketten vanaf €49/mnd. Voor uitgebreide SEO-campagnes met contentcreatie en linkbuilding kunt u contact opnemen voor een offerte op maat.' } },
  ],
}

const features = [
  'Technische SEO: snelheid, mobile, structured data',
  'On-page optimalisatie van titels, koppen en teksten',
  'Lokale SEO voor uw stad en regio',
  'Google Business Profile optimalisatie',
  'Maandelijkse rapportage met concrete cijfers',
  'Zoekwoordonderzoek op maat',
  'SEO-vriendelijke content',
  'Inbegrepen in alle website pakketten',
]

const faq = [
  { q: 'Hoe lang duurt het voordat SEO resultaat geeft?', a: 'SEO is een langetermijninvestering. Doorgaans ziet u na 3 tot 6 maanden meetbare resultaten in hogere posities en meer organisch verkeer. Na 6 tot 12 maanden worden de resultaten echt zichtbaar.' },
  { q: 'Is SEO inbegrepen bij uw websites?', a: 'Ja. Basis on-page SEO en lokale SEO zijn inbegrepen in al onze website pakketten. Google Business optimalisatie is inbegrepen in het Groei pakket en hoger.' },
  { q: 'Wat kost SEO bij Elly Apps?', a: 'Lokale SEO is inbegrepen in onze maandelijkse pakketten vanaf €49/mnd. Voor uitgebreide SEO-campagnes met contentcreatie en linkbuilding kunt u contact opnemen voor een offerte op maat.' },
  { q: 'Verschil SEO en Google Ads?', a: 'SEO levert organisch (gratis) verkeer op de lange termijn. Google Ads geeft directe zichtbaarheid, maar u betaalt per klik. Wij adviseren vaak een combinatie: Google Ads voor snelle resultaten, SEO voor duurzame groei.' },
  { q: 'Garanderen jullie positie 1 in Google?', a: 'Nee — dat kan niemand eerlijk garanderen, want Google bepaalt de rankings. Wij werken met meetbare doelen en transparante rapportages zodat u precies weet wat er gebeurt en wat de voortgang is.' },
]

export default function DienstenSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div>
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Diensten</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">SEO — meer klanten via Google zonder per klik te betalen</h1>
          <p className="text-xl text-gray-600">Lokale SEO voor MKB-bedrijven. Wij zorgen dat uw website gevonden wordt door klanten in uw regio — structureel en duurzaam.</p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>De meeste MKB-bedrijven worden nauwelijks gevonden op Google. Niet omdat hun dienst niet goed is, maar omdat hun website technisch niet in orde is of te weinig relevante content bevat. Dat veranderen wij.</p>
          <p>Elly Apps verzorgt lokale SEO die écht werkt voor kleine en middelgrote bedrijven. We beginnen met een grondige analyse van uw huidige positie, uw concurrenten en de zoekwoorden waarop uw klanten zoeken. Op basis daarvan bouwen we een SEO-strategie die past bij uw budget en doelen.</p>
          <p>Voor lokale bedrijven is lokale SEO de krachtigste tool. Wanneer iemand in Amsterdam zoekt naar &ldquo;loodgieter Amsterdam&rdquo; of &ldquo;kapper Utrecht&rdquo;, wilt u bovenaan staan. Met de combinatie van on-page optimalisatie, Google Business Profile en lokale content zorgen we daar voor.</p>
          <p>SEO is inbegrepen in al onze website pakketten. U hoeft geen extra investering te doen voor de basis. Voor uitgebreide SEO-campagnes met blogcontent, linkbuilding en maandelijkse audits bieden wij een apart SEO-pakket aan.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />{f}
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Veelgestelde vragen over SEO</h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details key={i} className="border rounded-xl p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.q}<span className="text-[#E53E3E] ml-2">+</span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="bg-[#E53E3E] rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Ontdek hoe uw website scoort in Google</h2>
          <p className="opacity-90 mb-6">✓ Gratis &nbsp; ✓ Vrijblijvend &nbsp; ✓ Binnen 24 uur reactie</p>
          <Link href="/gratis-websitescan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-[#E53E3E] font-semibold hover:bg-gray-100 transition-colors">
            Ja, ik wil een gratis SEO-scan
          </Link>
        </div>
      </div>
    </>
  )
}
