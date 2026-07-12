import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon } from 'lucide-react'
import { BlogFilter } from '@/components/BlogFilter'

export const metadata: Metadata = {
  title: 'Blog | Elly Apps — Tips over websites, SEO en online marketing',
  description:
    'Praktische tips en inzichten over websites, SEO, Google Ads en online marketing voor het MKB. Lees de laatste artikelen van Elly Apps.',
  alternates: { canonical: 'https://elly-apps.nl/blog' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/blog',
    title: 'Blog | Elly Apps — Tips over websites, SEO en online marketing',
    description: 'Praktische tips en inzichten over websites, SEO, Google Ads en online marketing voor het MKB. Lees de laatste artikelen van Elly Apps.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Elly Apps — Tips over websites, SEO en online marketing',
    description: 'Praktische tips en inzichten over websites, SEO, Google Ads en online marketing voor het MKB. Lees de laatste artikelen van Elly Apps.',
    images: ['/og-image.png'],
  },
}

const artikelen = [
  {
    href: '/blog/wat-kost-een-website',
    titel: 'Wat kost een website laten maken?',
    beschrijving: 'Een complete uitleg over de kosten van een professionele website in 2026. Wat bepaalt de prijs en waar let je op?',
    categorie: 'Websites',
    afbeelding: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60',
  },
  {
    href: '/blog/wat-kost-seo',
    titel: 'Wat kost SEO in Nederland?',
    beschrijving: 'SEO is een investering, geen kostenpost. Ontdek wat je kunt verwachten van SEO-diensten en wat een reëel budget is.',
    categorie: 'SEO',
    afbeelding: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&auto=format&fit=crop&q=60',
  },
  {
    href: '/blog/wat-kost-google-ads',
    titel: 'Wat kost Google Ads?',
    beschrijving: 'Alles over de kosten van Google Ads-campagnes. Van minimumbudget tot gemiddelde kosten per klik in jouw branche.',
    categorie: 'Google Ads',
    afbeelding: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=60',
  },
  {
    href: '/blog/seo-vs-google-ads',
    titel: 'SEO vs Google Ads: wat werkt beter?',
    beschrijving: 'SEO of Google Ads inzetten? Of allebei? Wij vergelijken de twee kanalen en leggen uit wanneer je wat inzet.',
    categorie: 'Strategie',
    afbeelding: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&auto=format&fit=crop&q=60',
  },
  {
    href: '/blog/website-niet-gevonden-google',
    titel: 'Website niet gevonden op Google?',
    beschrijving: 'Staat uw website niet in Google? Dit zijn de meestvoorkomende oorzaken en hoe u ze stap voor stap oplost.',
    categorie: 'SEO',
    afbeelding: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop&q=60',
  },
  {
    href: '/blog/goedkope-website',
    titel: 'Goedkope website laten maken',
    beschrijving: 'Een betaalbare website die er toch professioneel uitziet — dat kan. Wij leggen uit hoe en waar je op let.',
    categorie: 'Websites',
    afbeelding: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&auto=format&fit=crop&q=60',
  },
  {
    href: '/blog/seo-tips-mkb',
    titel: 'SEO tips voor MKB',
    beschrijving: 'Praktische SEO-tips die je als MKB-bedrijf vandaag nog kunt toepassen om beter gevonden te worden op Google.',
    categorie: 'SEO',
    afbeelding: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?w=600&auto=format&fit=crop&q=60',
  },
  {
    href: '/blog/website-zzp',
    titel: "Website laten maken als ZZP'er",
    beschrijving: "Als ZZP'er heb je een professionele website nodig om klanten te winnen. Lees wat je nodig hebt en wat het kost.",
    categorie: 'Websites',
    afbeelding: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=60',
  },
  {
    href: '/blog/google-ads-zelf-of-uitbesteden',
    titel: 'Google Ads: zelf doen of uitbesteden?',
    beschrijving: 'Google Ads zelf beheren of uitbesteden aan een bureau? Wij zetten de voor- en nadelen eerlijk op een rij zodat u de juiste keuze maakt.',
    categorie: 'Google Ads',
    afbeelding: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60',
  },
  {
    href: '/blog/social-media-zelf-of-uitbesteden',
    titel: 'Social media: zelf doen of uitbesteden?',
    beschrijving: 'Social media zelf beheren of uitbesteden aan een bureau? Wij zetten de voor- en nadelen eerlijk op een rij voor MKB-ondernemers.',
    categorie: 'Social Media',
    afbeelding: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&auto=format&fit=crop&q=60',
  },
  {
    href: '/blog/social-media-budget',
    titel: 'Hoeveel budget voor social media advertenties?',
    beschrijving: 'Wat is een realistisch budget voor Facebook- en Instagram-advertenties als MKB? Concrete cijfers en uitleg over slim inzetten.',
    categorie: 'Social Media',
    afbeelding: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&auto=format&fit=crop&q=60',
  },
  {
    href: '/blog/social-media-ai',
    titel: 'Social media met AI: zo doet u het slim',
    beschrijving: 'AI maakt social media beheer sneller en goedkoper. Ontdek hoe MKB-bedrijven AI-tools inzetten — en waar de grenzen liggen.',
    categorie: 'Social Media',
    afbeelding: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop&q=60',
  },
  {
    href: '/blog/kapper',
    titel: 'Website laten maken voor een kapper',
    beschrijving: 'Als kapper meer klanten via Google? Ontdek wat een professionele kapperswebsite moet hebben en wat het kost.',
    categorie: 'Branche',
    afbeelding: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&auto=format&fit=crop&q=60',
  },
  {
    href: '/blog/restaurant',
    titel: 'Website laten maken voor een restaurant',
    beschrijving: 'Als restauranteigenaar meer gasten aantrekken via Google? Ontdek wat een professionele restaurantwebsite moet hebben.',
    categorie: 'Branche',
    afbeelding: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=60',
  },
  {
    href: '/blog/loodgieter',
    titel: 'Website laten maken voor een loodgieter',
    beschrijving: 'Als loodgieter meer klanten via Google? Ontdek wat een professionele loodgieterswebsite moet hebben en wat het kost.',
    categorie: 'Branche',
    afbeelding: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&auto=format&fit=crop&q=60',
  },
]

const categorieKleur: Record<string, string> = {
  Websites: 'bg-blue-50 text-blue-700',
  SEO: 'bg-green-50 text-green-700',
  'Google Ads': 'bg-yellow-50 text-yellow-700',
  Strategie: 'bg-purple-50 text-purple-700',
  'Social Media': 'bg-pink-50 text-pink-700',
  Branche: 'bg-orange-50 text-orange-700',
}

export default function BlogOverzichtPage({
  searchParams,
}: {
  searchParams: { categorie?: string }
}) {
  const actieveCategorie = searchParams.categorie ?? 'Alle'

  const gefilterdeArtikelen =
    actieveCategorie === 'Alle'
      ? artikelen
      : artikelen.filter((a) => a.categorie === actieveCategorie)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Blog</h1>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          Praktische tips en inzichten over websites, SEO, Google Ads en online marketing voor het MKB.
        </p>
      </div>

      <BlogFilter actief={actieveCategorie} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gefilterdeArtikelen.map((artikel) => (
          <Link
            key={artikel.href}
            href={artikel.href}
            className="group flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="relative h-44 w-full">
              <Image
                src={artikel.afbeelding}
                alt={artikel.titel}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <span
                className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${categorieKleur[artikel.categorie] ?? 'bg-gray-100 text-gray-600'}`}
              >
                {artikel.categorie}
              </span>
              <h2 className="text-base font-bold text-gray-900 group-hover:text-[#E53E3E] transition-colors mb-2">
                {artikel.titel}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{artikel.beschrijving}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#E53E3E]">
                Lees meer <ArrowRightIcon className="size-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
