import type { Metadata } from 'next'
import Link from 'next/link'
import {
  GlobeIcon,
  SmartphoneIcon,
  SearchIcon,
  TrendingUpIcon,
  Share2Icon,
} from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { webPageSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Diensten | Elly Apps',
  description:
    'Websites, apps, SEO, Google Ads en social media beheer voor het MKB. Ontdek alle diensten van Elly Apps.',
  alternates: { canonical: 'https://elly-apps.nl/diensten' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/diensten',
    title: 'Diensten | Elly Apps',
    description: 'Websites, apps, SEO, Google Ads en social media beheer voor het MKB. Ontdek alle diensten van Elly Apps.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diensten | Elly Apps',
    description: 'Websites, apps, SEO, Google Ads en social media beheer voor het MKB. Ontdek alle diensten van Elly Apps.',
    images: ['/og-image.png'],
  },
}

const diensten = [
  {
    icon: <GlobeIcon className="size-6 text-brand" aria-hidden="true" />,
    title: 'Websites',
    href: '/diensten/websites',
    linkTekst: 'Website laten maken en beheren',
    body: `Een professionele website is het fundament van uw online aanwezigheid. Bij Elly Apps bouwen
    wij websites die niet alleen mooi ogen, maar ook technisch uitstekend presteren. Elke website
    is volledig responsive — optimaal weergegeven op desktop, tablet én mobiel. Wij zorgen voor
    snelle laadtijden, een sterke technische SEO-basis en een gebruiksvriendelijke opzet die
    bezoekers omzet in klanten. Of u nu een eenvoudige visitekaartjessite wilt of een uitgebreide
    website met meerdere pagina's, reserveringssysteem of webshop: wij realiseren het. Na de
    lancering blijven wij uw website beheren, zodat u zich kunt concentreren op uw bedrijf.
    Hosting, SSL-certificaat en technische updates zijn bij elk pakket inbegrepen.`,
  },
  {
    icon: <SmartphoneIcon className="size-6 text-brand" aria-hidden="true" />,
    title: 'Apps',
    href: '/diensten/apps',
    linkTekst: 'App laten maken',
    body: `Heeft uw bedrijf behoefte aan een maatwerk webapplicatie of mobiele app? Elly Apps
    ontwikkelt slimme digitale oplossingen die aansluiten op uw specifieke bedrijfsprocessen.
    Denk aan een klantportaal, boekingssysteem, offertegenerator of interne tool voor uw team.
    Wij werken met moderne technologieën zoals Next.js en React Native om snelle, schaalbare
    applicaties te bouwen. Onze apps zijn gebouwd met gebruiksgemak als prioriteit — zodat uw
    medewerkers en klanten ze direct begrijpen en er plezier in hebben. Samen verkennen wij uw
    wensen, definiëren we de functionaliteiten en bouwen we stap voor stap een applicatie die
    echt waarde toevoegt aan uw organisatie. Onderhoud en doorontwikkeling behoren tot de
    mogelijkheden.`,
  },
  {
    icon: <SearchIcon className="size-6 text-brand" aria-hidden="true" />,
    title: 'SEO',
    href: '/diensten/seo',
    linkTekst: 'SEO voor het MKB',
    body: `Gevonden worden op Google is voor elk bedrijf essentieel. Elly Apps biedt uitgebreide
    zoekmachineoptimalisatie (SEO) die uw website structureel hoger in de zoekresultaten brengt.
    Wij starten met een grondige analyse van uw huidige situatie: welke zoekwoorden zijn relevant,
    hoe scoort u nu, en wat doen uw concurrenten? Op basis hiervan stellen we een persoonlijk
    SEO-plan op. Vervolgens optimaliseren wij de technische basis van uw website, schrijven we
    SEO-sterke teksten en bouwen we aan uw online autoriteit. Lokale SEO is een van onze
    specialiteiten: wij zorgen dat u gevonden wordt door klanten in uw regio. Via Google Business
    Profile optimalisatie, lokale zoekwoorden en consistente NAP-vermeldingen verbeteren wij uw
    lokale zichtbaarheid structureel. Elke maand ontvangt u een helder rapport met uw resultaten.`,
  },
  {
    icon: <TrendingUpIcon className="size-6 text-brand" aria-hidden="true" />,
    title: 'Google Ads',
    href: '/diensten/sea',
    linkTekst: 'Google Ads laten beheren',
    body: `Wilt u snel meer bezoekers en leads? Met Google Ads (SEA) betaalt u alleen voor kliks van
    potentiële klanten die actief zoeken naar uw product of dienst. Elly Apps beheert uw
    advertentiecampagnes van A tot Z: van zoekwoordonderzoek en het schrijven van pakkende
    advertentieteksten tot het instellen van doelgroepen, budgetten en biedstrategieën. Wij
    monitoren de prestaties dagelijks en optimaliseren continu om het maximale uit uw budget te
    halen. Transparantie staat bij ons voorop: u ontvangt elke maand een duidelijk overzicht van
    uw campagneresultaten, kosten per klik en conversies. Of u nu lokaal wilt adverteren of
    nationaal wilt groeien, wij zetten een gerichte strategie op die aansluit bij uw doelen en
    budget. Geen verborgen kosten, geen ingewikkelde contracten.`,
  },
  {
    icon: <Share2Icon className="size-6 text-brand" aria-hidden="true" />,
    title: 'Social Media',
    href: '/diensten/social-media',
    linkTekst: 'Social media advertenties',
    body: `Een actieve aanwezigheid op sociale media versterkt uw merk en bouwt vertrouwen bij
    potentiële klanten. Elly Apps verzorgt het beheer van uw social media kanalen — van strategie
    en contentcreatie tot planning en publicatie. Wij schrijven prikkelende teksten, ontwerpen
    professionele visuals en zorgen voor een consistente uitstraling die past bij uw merk. Of het
    nu gaat om Facebook, Instagram, LinkedIn of Google Business: wij beheren uw kanalen actief
    en reageren op berichten en vragen van volgers. Daarnaast kunnen wij betaalde social media
    advertenties opzetten om uw bereik snel te vergroten. U bepaalt het budget, wij zorgen voor
    het resultaat. Met maandelijkse rapportages houdt u altijd inzicht in de voortgang en
    effectiviteit van uw social media strategie.`,
  },
]

const pageJsonLd = webPageSchema({
  name: 'Diensten',
  url: 'https://elly-apps.nl/diensten',
  description: 'Websites, apps, SEO, Google Ads en social media beheer voor het MKB. Ontdek alle diensten van Elly Apps.',
})

export default function DienstenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="h1 text-ink">Onze diensten</h1>
          <p className="body-lg text-muted mt-4 max-w-2xl mx-auto">
            Alles wat uw bedrijf nodig heeft voor een sterke online aanwezigheid.
          </p>
        </div>
      </section>

      {diensten.map((d, i) => (
        <section
          key={d.title}
          className={`section px-4 sm:px-6 lg:px-8 scroll-mt-20 ${i % 2 === 0 ? 'bg-bg' : 'bg-surface'}`}
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="inline-flex items-center justify-center size-12 rounded-full bg-brand-tint shrink-0">
                {d.icon}
              </div>
              <h2 className="h2 text-ink">{d.title}</h2>
            </div>
            <p className="body text-muted mb-6">{d.body}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/gratis-websitescan" className={buttonVariants()}>
                Vraag een gratis scan aan
              </Link>
              <Link href={d.href} className={buttonVariants({ variant: 'secondary' })}>
                {d.linkTekst}
              </Link>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
