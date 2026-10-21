import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { RelatedLinks } from '@/components/RelatedLinks'
import { Faq } from '@/components/home/Faq'

export const metadata: Metadata = {
  title: 'Website laten maken voor schildersbedrijf | Elly Apps',
  description: 'Website laten maken voor uw schildersbedrijf? Met voor/na portfolio, online offerteformulier en basis SEO, vanaf €49 per maand. Gratis websitescan.',
  alternates: { canonical: 'https://elly-apps.nl/branche/schilder' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/branche/schilder',
    title: 'Website laten maken voor schildersbedrijf | Elly Apps',
    description: 'Website laten maken voor uw schildersbedrijf? Met voor/na portfolio, online offerteformulier en basis SEO, vanaf €49 per maand. Gratis websitescan.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken voor schildersbedrijf | Elly Apps',
    description: 'Website laten maken voor uw schildersbedrijf? Met voor/na portfolio, online offerteformulier en basis SEO, vanaf €49 per maand. Gratis websitescan.',
    images: ['/og-image.png'],
  },
}

const faq = [
  { q: 'Kan ik voor/na foto\'s tonen op mijn website?', a: 'Ja, absoluut. We bouwen een portfolio-sectie in uw website speciaal voor voor/na foto\'s van uw projecten. Bezoekers kunnen door uw werk bladeren en zien direct wat u in huis heeft. Dit is het krachtigste conversiemiddel voor een schildersbedrijf — visueel bewijs overtuigt beter dan welke tekst dan ook.' },
  { q: 'Hoe vraag ik online offertes aan via mijn website?', a: 'We integreren een online offerteformulier in uw website. Potentiële klanten kunnen eenvoudig hun gegevens en wensen invullen. U ontvangt de aanvraag direct in uw e-mail en kunt snel reageren. Dit verlaagt de drempel voor klanten om contact op te nemen.' },
  { q: 'Kan ik klantreviews tonen op mijn website?', a: 'Ja. We zorgen dat uw Google-reviews automatisch worden weergegeven op uw website. Positieve beoordelingen van eerdere klanten wekken vertrouwen.' },
  { q: 'Hoe zorg je dat ik gevonden word in mijn werkgebied?', a: 'In het Groei pakket en hoger optimaliseren we uw website voor de steden en regio\'s waar u actief bent, met stadspagina\'s zodat u ook vindbaar kunt zijn op zoekopdrachten als "schilder Amsterdam" of "schildersbedrijf Utrecht".' },
  { q: 'Is een website voor een klein schildersbedrijf de investering waard?', a: 'Schilderswebsites via Elly Apps beginnen vanaf €49 per maand. Uw website is 24/7 zichtbaar, ook als u zelf aan het werk bent.' },
  { q: 'Wat kost een website voor een schildersbedrijf?', a: 'Een schilderswebsite via Elly Apps kost vanaf €49 per maand met een eenmalige setup van €299. Dit is inclusief hosting, onderhoud en basis SEO. Er zijn geen verborgen kosten.' },
  { q: 'Hoe snel kan mijn schilderswebsite online?', a: 'Gemiddeld staat uw website binnen twee weken live. Na een kort intakegesprek verwerken wij alles voor u — inclusief uw portfolio, diensten en werkgebied.' },
]

// Schema komt uit dezelfde items als de zichtbare FAQ, zodat ze altijd gelijk lopen
const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function SchilderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Branche</p>
          <h1 className="h1 text-ink">Website laten maken voor uw schildersbedrijf</h1>
          <p className="body-lg text-muted mt-4">Klanten vergelijken schilders online. Zorg dat uw werk voor zich spreekt — met een website die goed vindbaar is en uw werk laat zien.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <h2 className="h2 text-ink">Waarom een schildersbedrijf online gevonden moet worden</h2>
          <p>Wanneer iemand een schilder zoekt, gaat men online op zoek naar voor/na foto&apos;s, reviews en een betrouwbare indruk. Ze typen &quot;schilder [stad]&quot; of &quot;schildersbedrijf [regio]&quot; en bellen de eerste die hen overtuigt. Als uw bedrijf niet op pagina 1 staat of geen professionele website heeft, kan die opdracht naar een concurrent gaan.</p>
          <h2 className="h2 text-ink pt-6">Wat een goede schilderswebsite laat zien</h2>
          <p>Een goede website voor een schildersbedrijf laat uw vakmanschap zien. Met een portfolio van eerder uitgevoerde projecten, een duidelijk overzicht van uw diensten en een online offerteformulier maakt u het potentiële klanten zo makkelijk mogelijk om voor u te kiezen.</p>
          <p>Elly Apps bouwt schilderswebsites die goed vindbaar zijn op Google. Wij werken met een AI-gedreven aanpak. Zit u in een grote stad? Bekijk dan onze pagina's over <Link href="/stad/amsterdam" className="text-brand-strong underline hover:no-underline">website laten maken in Amsterdam</Link>, <Link href="/stad/utrecht" className="text-brand-strong underline hover:no-underline">website laten maken in Utrecht</Link> en <Link href="/stad/rotterdam" className="text-brand-strong underline hover:no-underline">website laten maken in Rotterdam</Link>.</p>
          <h2 className="h2 text-ink pt-6">Wat kost een schilderswebsite?</h2>
          <p>Een professionele schilderswebsite via Elly Apps begint vanaf €49 per maand, inclusief portfolio, online offerteformulier, basis SEO en een klikbaar telefoonnummer. Geen verborgen kosten, geen technische zorgen.</p>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Portfolio met voor/na foto\'s',
            'Online offerteformulier',
            'Google-reviews geïntegreerd',
            'Basis SEO; lokale SEO in het Groei pakket en hoger',
            'Mobielvriendelijk design',
            'Hosting, SSL en onderhoud inbegrepen',
            'Gemiddeld binnen twee weken live',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 body text-ink">
              <CheckCircleIcon className="size-5 text-brand shrink-0" aria-hidden="true" />
              {f}
            </div>
          ))}
        </div>
      </section>

      <Faq items={faq} title="Veelgestelde vragen over een website voor uw schildersbedrijf" className="bg-bg" />

      <RelatedLinks
        id="gerelateerd-titel"
        title="Gerelateerde pagina's"
        links={[
          { label: "Website laten maken en beheren", href: "/diensten/websites" },
          { label: "Wat kost een website? Bekijk de prijzen", href: "/prijzen" },
          { label: "Website laten maken voor een bouwbedrijf", href: "/branche/bouwbedrijf" },
          { label: "Website laten maken voor een loodgieter", href: "/branche/loodgieter" },
          { label: "Wat kost een website laten maken in 2026?", href: "/blog/wat-kost-een-website" },
          { label: "Website laten maken per branche", href: "/branche" },
        ]}
      />

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Een website voor uw schildersbedrijf?</h2>
          <p className="body-lg text-navy-muted mt-4">Vraag een gratis websitescan aan en ontdek uw kansen als schildersbedrijf.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>Gratis websitescan</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
