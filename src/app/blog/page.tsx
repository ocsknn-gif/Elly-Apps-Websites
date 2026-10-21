import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon } from 'lucide-react'
import { BlogFilter } from '@/components/BlogFilter'

export const metadata: Metadata = {
  title: 'Blog: tips over websites, SEO en Google Ads | Elly Apps',
  description:
    'Praktische tips en inzichten over websites, SEO, Google Ads en online marketing voor het MKB. Lees de laatste artikelen van Elly Apps.',
  alternates: { canonical: 'https://elly-apps.nl/blog' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/blog',
    title: 'Blog: tips over websites, SEO en Google Ads | Elly Apps',
    description: 'Praktische tips en inzichten over websites, SEO, Google Ads en online marketing voor het MKB. Lees de laatste artikelen van Elly Apps.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog: tips over websites, SEO en Google Ads | Elly Apps',
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
    afbeelding: '/images/hero-team.webp',
  },
  {
    href: '/blog/wat-kost-seo',
    titel: 'Wat kost SEO in Nederland?',
    beschrijving: 'SEO is een investering, geen kostenpost. Ontdek wat je kunt verwachten van SEO-diensten en wat een reëel budget is.',
    categorie: 'SEO',
    afbeelding: '/images/hero-team.webp',
  },
  {
    href: '/blog/wat-kost-google-ads',
    titel: 'Wat kost Google Ads?',
    beschrijving: 'Alles over de kosten van Google Ads-campagnes. Van minimumbudget tot gemiddelde kosten per klik in jouw branche.',
    categorie: 'Google Ads',
    afbeelding: '/images/hero-team.webp',
  },
  {
    href: '/blog/seo-vs-google-ads',
    titel: 'SEO vs Google Ads: wat werkt beter?',
    beschrijving: 'SEO of Google Ads inzetten? Of allebei? Wij vergelijken de twee kanalen en leggen uit wanneer je wat inzet.',
    categorie: 'Strategie',
    afbeelding: '/images/hero-team.webp',
  },
  {
    href: '/blog/website-niet-gevonden-google',
    titel: 'Website niet gevonden op Google?',
    beschrijving: 'Staat uw website niet in Google? Dit zijn de meestvoorkomende oorzaken en hoe u ze stap voor stap oplost.',
    categorie: 'SEO',
    afbeelding: '/images/hero-team.webp',
  },
  {
    href: '/blog/goedkope-website',
    titel: 'Goedkope website laten maken',
    beschrijving: 'Een betaalbare website die er toch professioneel uitziet — dat kan. Wij leggen uit hoe en waar je op let.',
    categorie: 'Websites',
    afbeelding: '/images/hero-team.webp',
  },
  {
    href: '/blog/seo-tips-mkb',
    titel: 'SEO tips voor MKB',
    beschrijving: 'Praktische SEO-tips die je als MKB-bedrijf vandaag nog kunt toepassen om beter gevonden te worden op Google.',
    categorie: 'SEO',
    afbeelding: '/images/hero-team.webp',
  },
  {
    href: '/blog/website-zzp',
    titel: "Website laten maken als ZZP'er",
    beschrijving: "Als ZZP'er heb je een professionele website nodig om klanten te winnen. Lees wat je nodig hebt en wat het kost.",
    categorie: 'Websites',
    afbeelding: '/images/hero-team.webp',
  },
  {
    href: '/blog/google-ads-zelf-of-uitbesteden',
    titel: 'Google Ads: zelf doen of uitbesteden?',
    beschrijving: 'Google Ads zelf beheren of uitbesteden aan een bureau? Wij zetten de voor- en nadelen eerlijk op een rij zodat u de juiste keuze maakt.',
    categorie: 'Google Ads',
    afbeelding: '/images/hero-team.webp',
  },
  {
    href: '/blog/social-media-zelf-of-uitbesteden',
    titel: 'Social media: zelf doen of uitbesteden?',
    beschrijving: 'Social media zelf beheren of uitbesteden aan een bureau? Wij zetten de voor- en nadelen eerlijk op een rij voor MKB-ondernemers.',
    categorie: 'Social Media',
    afbeelding: '/images/hero-team.webp',
  },
  {
    href: '/blog/social-media-budget',
    titel: 'Hoeveel budget voor social media advertenties?',
    beschrijving: 'Wat is een realistisch budget voor Facebook- en Instagram-advertenties als MKB? Concrete cijfers en uitleg over slim inzetten.',
    categorie: 'Social Media',
    afbeelding: '/images/hero-team.webp',
  },
  {
    href: '/blog/social-media-ai',
    titel: 'Social media met AI: zo doet u het slim',
    beschrijving: 'AI maakt social media beheer sneller en goedkoper. Ontdek hoe MKB-bedrijven AI-tools inzetten — en waar de grenzen liggen.',
    categorie: 'Social Media',
    afbeelding: '/images/hero-team.webp',
  },
  {
    href: '/blog/kapper',
    titel: 'Website laten maken voor een kapper',
    beschrijving: 'Als kapper meer klanten via Google? Ontdek wat een professionele kapperswebsite moet hebben en wat het kost.',
    categorie: 'Branche',
    afbeelding: '/images/branches/kapper.webp',
  },
  {
    href: '/blog/restaurant',
    titel: 'Website laten maken voor een restaurant',
    beschrijving: 'Als restauranteigenaar meer gasten aantrekken via Google? Ontdek wat een professionele restaurantwebsite moet hebben.',
    categorie: 'Branche',
    afbeelding: '/images/branches/restaurant.webp',
  },
  {
    href: '/blog/loodgieter',
    titel: 'Website laten maken voor een loodgieter',
    beschrijving: 'Als loodgieter meer klanten via Google? Ontdek wat een professionele loodgieterswebsite moet hebben en wat het kost.',
    categorie: 'Branche',
    afbeelding: '/images/branches/loodgieter.webp',
  },
]

const categoriePil = 'bg-brand-tint text-brand-strong'

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
    <>
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="h1 text-ink">Blog</h1>
          <p className="body-lg text-muted mt-4 max-w-2xl mx-auto">
            Praktische tips en inzichten over websites, SEO, Google Ads en online marketing voor het MKB.
          </p>
        </div>
      </section>

      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-6xl mx-auto">
          <BlogFilter actief={actieveCategorie} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gefilterdeArtikelen.map((artikel) => (
              <Link
                key={artikel.href}
                href={artikel.href}
                className="group flex flex-col rounded-2xl border border-line bg-bg overflow-hidden"
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
                    className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${categoriePil}`}
                  >
                    {artikel.categorie}
                  </span>
                  <h2 className="text-base font-bold text-ink group-hover:text-brand-strong transition-colors mb-2">
                    {artikel.titel}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed flex-1">{artikel.beschrijving}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-strong">
                    Lees meer <ArrowRightIcon className="size-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
