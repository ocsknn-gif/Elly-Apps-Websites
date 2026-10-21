import type { Metadata } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { RelatedLinks } from '@/components/RelatedLinks'
import { organizationRef } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Wat kost SEO in Nederland? | Elly Apps',
  description:
    'Wat betaal je voor SEO in Nederland? Een eerlijk overzicht van SEO-kosten, wat je kunt verwachten en wanneer SEO de moeite waard is voor jouw bedrijf.',
  alternates: { canonical: 'https://elly-apps.nl/blog/wat-kost-seo' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/blog/wat-kost-seo',
    title: 'Wat kost SEO in Nederland? | Elly Apps',
    description: 'Wat betaal je voor SEO in Nederland? Een eerlijk overzicht van SEO-kosten, wat je kunt verwachten en wanneer SEO de moeite waard is voor jouw bedrijf.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wat kost SEO in Nederland? | Elly Apps',
    description: 'Wat betaal je voor SEO in Nederland? Een eerlijk overzicht van SEO-kosten, wat je kunt verwachten en wanneer SEO de moeite waard is voor jouw bedrijf.',
    images: ['/og-image.png'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Wat kost SEO in Nederland?',
  author: organizationRef,
  publisher: organizationRef,
  datePublished: '2026-06-08',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://elly-apps.nl/blog/wat-kost-seo' },
}

export default function WatKostSEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-sm font-medium text-brand-strong hover:underline">
            ← Terug naar blog
          </Link>
          <h1 className="h1 text-ink mt-6">
            Wat kost SEO in Nederland?
          </h1>
          <p className="text-sm text-muted mt-4">Gepubliceerd op 8 juni 2026 door Elly Apps</p>
        </div>
      </section>

      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-3xl mx-auto artikel">
          <p>
            SEO — zoekmachineoptimalisatie — is voor veel ondernemers een onbekend terrein. Ze weten
            dat het belangrijk is, maar wat het kost en wat je er voor terugkrijgt blijft vaag. In
            dit artikel geven wij een eerlijk en praktisch overzicht van SEO-kosten in Nederland,
            zodat u weloverwogen een beslissing kunt nemen.
          </p>

          <h2>Wat zijn de kosten van SEO?</h2>
          <p>
            SEO-kosten variëren enorm, afhankelijk van of u met een freelancer of een bureau werkt,
            hoe groot uw website is en hoe concurrerend uw branche is. Vraag altijd om een
            duidelijke offerte waarin staat wat er precies wordt gedaan en wat u maandelijks
            terugziet.
          </p>
          <p>
            Bij Elly Apps hebben wij SEO geïntegreerd in onze pakketten. In het Groei pakket
            (€199/mnd) is lokale SEO inclusief: zoekwoordoptimalisatie, Google Business en
            performance rapportage. Zo betaalt u een vaste prijs zonder verrassing.
          </p>

          <h2>Wat valt er onder SEO?</h2>
          <p>
            SEO is geen enkele handeling, maar een combinatie van werkzaamheden:
          </p>
          <ul>
            <li>
              <strong>Technische SEO:</strong> Laadsnelheid, mobile-friendliness, sitemap,
              structured data, crawlbaarheid. Dit is de fundering.
            </li>
            <li>
              <strong>On-page SEO:</strong> Zoekwoordoptimalisatie van titels, meta-omschrijvingen,
              koppen (H1/H2) en teksten. Elke pagina moet een duidelijk doel hebben.
            </li>
            <li>
              <strong>Content:</strong> Blogartikelen, landingspagina's en branche-specifieke content
              die antwoord geeft op de vragen van uw doelgroep.
            </li>
            <li>
              <strong>Lokale SEO:</strong> Google Business Profile, lokale zoekwoorden, vermeldingen
              in online directories. Essentieel voor lokale bedrijven.
            </li>
            <li>
              <strong>Linkbuilding:</strong> Het verkrijgen van kwalitatieve externe links die de
              autoriteit van uw website verhogen.
            </li>
          </ul>

          <h2>Wanneer zie je resultaten?</h2>
          <p>
            Dit is de vraag die iedere ondernemer stelt. SEO is een langetermijninvestering. In de
            meeste gevallen duurt het drie tot zes maanden voordat u meetbare resultaten ziet in de
            vorm van hogere posities en meer organisch verkeer. Na zes tot twaalf maanden beginnen
            de resultaten echt zichtbaar te worden.
          </p>
          <p>
            Dat betekent niet dat u maandenlang in het duister tast. Een goede SEO-partner geeft u
            maandelijkse rapportages met concrete cijfers: welke zoekwoorden stijgen, hoeveel
            organisch verkeer u ontvangt en hoe uw concurrenten presteren.
          </p>

          <h2>Is SEO de moeite waard voor het MKB?</h2>
          <p>
            Absoluut. Voor lokale MKB-bedrijven is SEO één van de meest kosteneffectieve
            marketingkanalen. Als u eenmaal goed rankt voor relevante zoekwoorden, komt er
            structureel gratis verkeer naar uw website — zonder dat u per klik betaalt zoals bij
            Google Ads.
          </p>
          <p>
            Stel dat uw website elke maand 200 extra bezoekers trekt dankzij SEO, en 5% wordt
            klant. Dan heeft u 10 nieuwe klanten per maand. Als die elk gemiddeld €200 opleveren,
            genereert SEO u €2.000 per maand aan extra omzet. Een SEO-investering van €199/mnd
            verdient u in dat scenario ruimschoots terug.
          </p>

          <h2>Waar let je op bij het kiezen van een SEO-bureau?</h2>
          <p>
            Helaas zijn er partijen die beloften doen die ze niet kunnen waarmaken. Wees voorzichtig
            met bureaus die garanderen dat u op positie 1 komt te staan, want niemand kan dat
            garanderen. Google bepaalt de rankings, niet het bureau. Let op transparantie: ontvangt
            u duidelijke rapportages? Wordt uitgelegd wat er gedaan wordt en waarom?
          </p>
          <p>
            Bij Elly Apps werken wij altijd met eerlijke verwachtingen en maandelijkse rapportages.
            U weet precies wat wij doen, wat het kost en wat de resultaten zijn.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/gratis-websitescan"
            className={buttonVariants()}
          >
            Vraag een gratis SEO-scan aan
          </Link>
          <Link
            href="/prijzen"
            className={buttonVariants({ variant: 'secondary' })}
          >
            Bekijk onze pakketten
          </Link>
        </div>
      </section>

      <RelatedLinks
        id="gerelateerd-titel"
        title="Gerelateerde artikelen"
        narrow
        links={[
          { label: "7 praktische SEO tips voor MKB-bedrijven in 2026", href: "/blog/seo-tips-mkb" },
          { label: "SEO vs Google Ads: wat werkt beter?", href: "/blog/seo-vs-google-ads" },
          { label: "Website niet gevonden op Google? Oorzaken en oplossingen", href: "/blog/website-niet-gevonden-google" },
          { label: "SEO voor het MKB", href: "/diensten/seo" },
        ]}
      />
    </>
  )
}
