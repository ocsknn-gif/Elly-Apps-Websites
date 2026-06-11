import type { Metadata } from 'next'
import Link from 'next/link'
import {
  GlobeIcon,
  SmartphoneIcon,
  SearchIcon,
  TrendingUpIcon,
  Share2Icon,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Diensten | Elly Apps',
  description:
    'Elly Apps biedt professionele websites, apps, SEO, Google Ads en social media beheer voor het MKB. Ontdek alle diensten en hoe wij uw bedrijf online laten groeien.',
  alternates: { canonical: 'https://elly-apps.nl/diensten' },
}

const diensten = [
  {
    icon: <GlobeIcon className="size-8 text-indigo-600" />,
    title: 'Websites',
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
    icon: <SmartphoneIcon className="size-8 text-indigo-600" />,
    title: 'Apps',
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
    icon: <SearchIcon className="size-8 text-indigo-600" />,
    title: 'SEO',
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
    icon: <TrendingUpIcon className="size-8 text-indigo-600" />,
    title: 'Google Ads',
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
    icon: <Share2Icon className="size-8 text-indigo-600" />,
    title: 'Social Media',
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

export default function DienstenPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Onze diensten</h1>
        <p className="mt-4 text-xl text-gray-600">
          Alles wat uw bedrijf nodig heeft voor een sterke online aanwezigheid.
        </p>
      </div>

      {diensten.map((d) => (
        <section key={d.title} className="scroll-mt-20">
          <div className="flex items-center gap-4 mb-4">
            {d.icon}
            <h2 className="text-2xl font-bold text-gray-900">{d.title}</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">{d.body}</p>
          <Link
            href="/gratis-websitescan"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors"
          >
            Vraag een gratis scan aan
          </Link>
          <hr className="mt-10 border-gray-100" />
        </section>
      ))}
    </div>
  )
}
