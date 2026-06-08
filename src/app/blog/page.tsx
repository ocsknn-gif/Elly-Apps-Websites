import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | Elly Apps — Tips over websites, SEO en online marketing',
  description:
    'Praktische tips en inzichten over websites, SEO, Google Ads en online marketing voor het MKB. Lees de laatste artikelen van Elly Apps.',
}

const artikelen = [
  {
    href: '/blog/wat-kost-een-website',
    titel: 'Wat kost een website laten maken?',
    beschrijving:
      'Een complete uitleg over de kosten van een professionele website in 2026. Wat bepaalt de prijs en waar let je op?',
    categorie: 'Websites',
  },
  {
    href: '/blog/wat-kost-seo',
    titel: 'Wat kost SEO in Nederland?',
    beschrijving:
      'SEO is een investering, geen kostenpost. Ontdek wat je kunt verwachten van SEO-diensten en wat een reëel budget is.',
    categorie: 'SEO',
  },
  {
    href: '/blog/wat-kost-google-ads',
    titel: 'Wat kost Google Ads?',
    beschrijving:
      'Alles over de kosten van Google Ads-campagnes. Van minimumbudget tot gemiddelde kosten per klik in jouw branche.',
    categorie: 'Google Ads',
  },
  {
    href: '/blog/seo-vs-google-ads',
    titel: 'SEO vs Google Ads: wat werkt beter?',
    beschrijving:
      'SEO of Google Ads inzetten? Of allebei? Wij vergelijken de twee kanalen en leggen uit wanneer je wat inzet.',
    categorie: 'Strategie',
  },
  {
    href: '/blog/website-niet-gevonden-google',
    titel: 'Website niet gevonden op Google?',
    beschrijving:
      'Staat uw website niet in Google? Dit zijn de meestvoorkomende oorzaken en hoe u ze stap voor stap oplost.',
    categorie: 'SEO',
  },
  {
    href: '/blog/goedkope-website',
    titel: 'Goedkope website laten maken',
    beschrijving:
      'Een betaalbare website die er toch professioneel uitziet — dat kan. Wij leggen uit hoe en waar je op let.',
    categorie: 'Websites',
  },
  {
    href: '/blog/seo-tips-mkb',
    titel: 'SEO tips voor MKB',
    beschrijving:
      'Praktische SEO-tips die je als MKB-bedrijf vandaag nog kunt toepassen om beter gevonden te worden op Google.',
    categorie: 'SEO',
  },
  {
    href: '/blog/website-zzp',
    titel: "Website laten maken als ZZP'er",
    beschrijving:
      "Als ZZP'er heb je een professionele website nodig om klanten te winnen. Lees wat je nodig hebt en wat het kost.",
    categorie: 'Websites',
  },
]

const categorieKleur: Record<string, string> = {
  Websites: 'bg-blue-50 text-blue-700',
  SEO: 'bg-green-50 text-green-700',
  'Google Ads': 'bg-yellow-50 text-yellow-700',
  Strategie: 'bg-purple-50 text-purple-700',
}

export default function BlogOverzichtPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Blog</h1>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          Praktische tips en inzichten over websites, SEO, Google Ads en online marketing voor
          het MKB.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {artikelen.map((artikel) => (
          <Link
            key={artikel.href}
            href={artikel.href}
            className="group flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow p-6"
          >
            <span
              className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${categorieKleur[artikel.categorie] ?? 'bg-gray-100 text-gray-600'}`}
            >
              {artikel.categorie}
            </span>
            <h2 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
              {artikel.titel}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed flex-1">{artikel.beschrijving}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-600">
              Lees meer <ArrowRightIcon className="size-4" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
