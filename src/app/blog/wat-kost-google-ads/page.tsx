import type { Metadata } from 'next'
import Link from 'next/link'
import { Faq } from '@/components/home/Faq'
import { buttonVariants } from '@/components/ui/button'
import { organizationRef } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Hoeveel kost Google Ads? Prijzen voor MKB | Elly Apps',
  description:
    'Hoeveel kost Google Ads voor een MKB-bedrijf? Lees de prijzen: kosten per klik, maandbudget en beheerkosten, en hoe u geen budget verspilt.',
  alternates: { canonical: 'https://elly-apps.nl/blog/wat-kost-google-ads' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/blog/wat-kost-google-ads',
    title: 'Hoeveel kost Google Ads? Prijzen voor MKB | Elly Apps',
    description: 'Hoeveel kost Google Ads voor een MKB-bedrijf? Lees de prijzen: kosten per klik, maandbudget en beheerkosten, en hoe u geen budget verspilt.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hoeveel kost Google Ads? Prijzen voor MKB | Elly Apps',
    description: 'Hoeveel kost Google Ads voor een MKB-bedrijf? Lees de prijzen: kosten per klik, maandbudget en beheerkosten, en hoe u geen budget verspilt.',
    images: ['/og-image.png'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Wat kost Google Ads in 2026? Een eerlijk overzicht voor MKB',
  description: 'Wat kost Google Ads voor een MKB-bedrijf? Ontdek de werkelijke kosten per klik en hoe u slim adverteert.',
  author: organizationRef,
  publisher: organizationRef,
  datePublished: '2026-06-09',
  url: 'https://elly-apps.nl/blog/wat-kost-google-ads',
}

const faqItems = [
  { q: 'Wat is een realistisch startbudget voor Google Ads?', a: 'Voor een MKB-bedrijf is een advertentiebudget vanaf ongeveer €300 tot €500 per maand een realistisch startpunt. Daarmee verzamelt u genoeg data om te zien welke zoekwoorden werken. Een te klein budget levert te weinig vertoningen op om iets zinnigs te leren.' },
  { q: 'Betaal ik per klik of per vertoning?', a: 'Bij Google Ads betaalt u standaard per klik (cost-per-click). U betaalt dus alleen wanneer iemand daadwerkelijk op uw advertentie klikt, niet wanneer die alleen wordt getoond. Wat u per klik betaalt, hangt af van de concurrentie op uw zoekwoorden.' },
  { q: 'Wat kost het om Google Ads te laten beheren?', a: 'Naast uw advertentiebudget betaalt u een vergoeding voor het beheer: het opzetten van campagnes, zoekwoordonderzoek, advertentieteksten, biedstrategie en optimalisatie. Bij Elly Apps betaalt u een vaste maandprijs voor het beheer, vanaf €199 per maand met €249 eenmalige opstartkosten. Het advertentiebudget is daar niet in inbegrepen en betaalt u direct aan Google.' },
  { q: 'Hoe snel zie ik resultaat van Google Ads?', a: 'Anders dan bij SEO ziet u vrijwel direct verkeer: zodra uw campagne live staat, kunnen mensen op uw advertentie klikken. De eerste weken zijn vooral bedoeld om data te verzamelen en bij te sturen. Reken op enkele weken voordat een campagne echt geoptimaliseerd draait.' },
  { q: 'Is Google Ads of SEO slimmer voor mijn bedrijf?', a: 'Google Ads levert direct verkeer maar stopt zodra u stopt met betalen. SEO bouwt duurzaam op maar kost tijd. Voor de meeste MKB-bedrijven werkt een combinatie het best: Ads voor snelle resultaten, SEO voor structurele groei op de lange termijn.' },
]

export default function WatKostGoogleAdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map(item => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a }
          }))
        }) }}
      />
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-sm font-medium text-brand-strong hover:underline">
            ← Terug naar blog
          </Link>
          <h1 className="h1 text-ink mt-6">
            Wat kost Google Ads in 2026? Een eerlijk overzicht voor MKB
          </h1>
          <p className="text-sm text-muted mt-4">Gepubliceerd op 9 juni 2026 door Elly Apps</p>
        </div>
      </section>

      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-3xl mx-auto artikel">
          <p>
            Google Ads is een van de krachtigste manieren om snel nieuwe klanten te bereiken.
            Maar hoeveel kost Google Ads eigenlijk? Veel ondernemers schrikken van onduidelijke prijzen,
            onverwacht hoge kosten per klik of teleurstellende resultaten na een te klein budget.
            In dit artikel geven wij een eerlijk en volledig overzicht van de prijzen en kosten van Google Ads
            voor het Nederlandse MKB in 2026.
          </p>

          <h2>Hoe werkt het advertentiesysteem van Google?</h2>
          <p>
            Google Ads werkt op basis van een veilingsysteem. Elke keer dat iemand iets zoekt op
            Google, vindt er in milliseconden een veiling plaats tussen alle adverteerders die op
            dat zoekwoord bieden. De winnaar krijgt de beste advertentiepositie. U betaalt alleen wanneer
            iemand daadwerkelijk op uw advertentie klikt — dit heet cost-per-click (CPC).
          </p>
          <p>
            De prijs per klik wordt bepaald door twee factoren: uw bod en uw kwaliteitsscore.
            Die kwaliteitsscore is een beoordeling van Google op basis van de relevantie van uw
            advertentie, de verwachte klikfrequentie en de kwaliteit van uw landingspagina.
            Een hoge kwaliteitsscore verlaagt uw kosten per klik — een goed ingerichte campagne
            betaalt u dus minder dan een slecht ingerichte campagne voor hetzelfde zoekwoord.
          </p>

          <h2>Prijzen van Google Ads: wat is de gemiddelde prijs per klik in Nederland?</h2>
          <p>
            De gemiddelde kosten per klik variëren sterk per branche. Voor algemene zoekwoorden
            in het MKB-segment liggen de kosten doorgaans tussen de €0,50 en €3,00 per klik.
            In competitieve sectoren zoals juridische dienstverlening, verzekeringen of
            financiële producten kan dit oplopen tot €10 tot €30 per klik. Hieronder een
            indicatie per sector:
          </p>
          <ul>
            <li><strong>Loodgieter / installateur:</strong> €1,50 – €4,00 per klik</li>
            <li><strong>Kapper / schoonheidsspecialist:</strong> €0,50 – €1,50 per klik</li>
            <li><strong>Tandarts / fysiotherapeut:</strong> €1,00 – €3,00 per klik</li>
            <li><strong>Webdesign bureau:</strong> €1,00 – €4,00 per klik</li>
            <li><strong>Advocaat / notaris:</strong> €5,00 – €20,00 per klik</li>
          </ul>
          <p>
            Dit zijn gemiddelden — de werkelijke kosten hangen af van uw locatie, concurrentie,
            zoekwoorden en de kwaliteit van uw campagne.
          </p>

          <h2>Hoeveel kost Google Ads per maand? Een realistisch budget</h2>
          <p>
            Voor de meeste MKB-bedrijven is een startbudget van €300 tot €600 per maand een
            realistisch beginpunt om zinvolle data te verzamelen en eerste resultaten te boeken.
            Met €300 per maand en een gemiddelde CPC van €1,50 heeft u ruim 200 klikken per maand.
            Als uw website goed converteert — bijvoorbeeld 5% van de bezoekers vraagt een offerte
            aan — betekent dat circa 10 leads per maand.
          </p>
          <p>
            Wilt u serieus groeien via Google Ads, dan is een budget van €500 tot €1.500 per maand
            realistischer. Dit geeft voldoende volume om te testen, te optimaliseren en structureel
            resultaten te boeken. Houd er rekening mee dat naast het advertentiebudget ook
            beheerkosten komen kijken als u dit uitbesteedt.
          </p>

          <h2>Wat zijn de kosten voor beheer?</h2>
          <p>
            Als u Google Ads uitbesteedt aan een bureau of specialist, betaalt u naast het
            advertentiebudget ook een beheerfee. Dit is doorgaans een percentage van uw
            advertentiebudget (10–20%) of een vast maandelijks bedrag. Bij een budget van €500
            per maand rekent een bureau dus al snel €75 tot €100 extra voor het beheer.
          </p>
          <p>
            Bij Elly Apps is Google Ads beheer een losse dienst, los van de websitepakketten.
            De beheerkosten starten vanaf €199 per maand, met €249 eenmalige opstartkosten. Het advertentiebudget
            komt daar bovenop en betaalt u direct aan Google.
          </p>

          <h2>Valkuilen die u geld kosten</h2>
          <p>
            Veel ondernemers starten zelf met Google Ads en verliezen onnodig geld door veelgemaakte
            fouten. De meest voorkomende valkuilen:
          </p>
          <ul>
            <li><strong>Te brede zoekwoorden:</strong> Adverteren op &ldquo;website&rdquo; in plaats van &ldquo;website laten maken MKB&rdquo; trekt veel irrelevante bezoekers.</li>
            <li><strong>Geen negatieve zoekwoorden:</strong> Zonder uitsluitingslijst betaalt u voor zoekopdrachten die niets met uw dienst te maken hebben.</li>
            <li><strong>Slechte landingspagina:</strong> Een advertentie die doorlinkt naar uw homepage in plaats van een gerichte pagina converteert aanzienlijk slechter.</li>
            <li><strong>Geen conversietracking:</strong> Als u niet meet welke klikken leiden tot aanvragen, weet u niet wat werkt en wat niet.</li>
            <li><strong>Te laag budget:</strong> Een budget van €50 per maand levert te weinig data op om iets te kunnen optimaliseren.</li>
          </ul>

          <h2>Is Google Ads de moeite waard voor MKB?</h2>
          <p>
            Ja — mits goed opgezet. Google Ads is bijzonder geschikt voor bedrijven die snel
            zichtbaar willen zijn, een nieuw product of dienst lanceren of lokaal een specifieke
            doelgroep willen bereiken. De kracht van Google Ads is dat u adverteert op het moment
            dat iemand actief zoekt naar wat u aanbiedt. Dat is fundamenteel anders dan sociale
            media advertenties, waar u mensen onderbreekt die niet per se op zoek zijn.
          </p>
          <p>
            Combineer Google Ads altijd met een goede SEO-strategie. Google Ads genereert direct
            verkeer; SEO bouwt op de lange termijn organische zichtbaarheid op. Samen vormen ze
            de sterkste online marketingstrategie voor het MKB.
          </p>

          <h2>Conclusie</h2>
          <p>
            De kosten van Google Ads zijn sterk afhankelijk van uw branche, zoekwoorden en de
            kwaliteit van uw campagne. Een realistisch startbudget voor MKB ligt tussen de €300
            en €600 per maand exclusief beheer. Laat u begeleiden door een specialist om verspilling
            te voorkomen en uw investering maximaal te laten renderen.
          </p>
        </div>
      </section>

      <Faq
        items={faqItems}
        title="Veelgestelde vragen over de kosten van Google Ads"
      />

      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-3xl mx-auto">
          <h2 className="h3 text-ink mb-4">Gerelateerde artikelen</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Google Ads: zelf doen of uitbesteden?', href: '/blog/google-ads-zelf-of-uitbesteden' },
              { label: 'SEO vs Google Ads: wat werkt beter?', href: '/blog/seo-vs-google-ads' },
              { label: 'Onze Google Ads-dienst', href: '/diensten/sea' },
              { label: 'Wat kost SEO in Nederland?', href: '/blog/wat-kost-seo' },
              { label: 'Wat kost een website laten maken in 2026?', href: '/blog/wat-kost-een-website' },
              { label: 'Bekijk onze prijzen', href: '/prijzen' },
            ].map((r) => (
              <Link key={r.href} href={r.href} className="flex items-center gap-2 text-sm font-medium text-ink border border-line rounded-xl px-4 py-3 hover:text-brand-strong hover:border-brand-strong transition-colors">
                <span className="text-brand-strong">→</span> {r.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className={buttonVariants()}
          >
            Vraag een gratis adviesgesprek aan
          </Link>
          <Link
            href="/diensten/sea"
            className={buttonVariants({ variant: 'secondary' })}
          >
            Bekijk onze Google Ads-dienst
          </Link>
        </div>
      </section>
    </>
  )
}
