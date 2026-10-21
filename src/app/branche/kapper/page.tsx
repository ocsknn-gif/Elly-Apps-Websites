import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Faq } from '@/components/home/Faq'

export const metadata: Metadata = {
  title: 'Website laten maken voor kappers | Elly Apps',
  description:
    'Website laten maken voor uw kapperszaak? Portfolio en basis SEO, volledig beheerd vanaf €49 per maand. Online afspraken zijn een aparte uitbreiding.',
  alternates: { canonical: 'https://elly-apps.nl/branche/kapper' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/branche/kapper',
    title: 'Website laten maken voor kappers | Elly Apps',
    description: 'Website laten maken voor uw kapperszaak? Portfolio en basis SEO, volledig beheerd vanaf €49 per maand. Online afspraken zijn een aparte uitbreiding.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website laten maken voor kappers | Elly Apps',
    description: 'Website laten maken voor uw kapperszaak? Portfolio en basis SEO, volledig beheerd vanaf €49 per maand. Online afspraken zijn een aparte uitbreiding.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'Elly Apps — Websites voor kappers',
  url: 'https://elly-apps.nl/branche/kapper',
  description: 'Professionele websites voor kappers en kapperszaken, met portfolio en basis SEO. Een online afsprakensysteem is als aparte uitbreiding mogelijk.',
}

const faqItems = [
  { q: 'Wat kost een website voor mijn kapsalon?', a: 'U betaalt een eenmalig startbedrag voor het ontwerp en de bouw, en daarna een vast bedrag vanaf €49 per maand voor hosting, onderhoud, updates en beveiliging. Geen verrassingen achteraf. Bekijk onze pakketten op de prijzenpagina voor een exact overzicht.' },
  { q: 'Kunnen klanten online een afspraak boeken?', a: 'Dat kan, als aparte uitbreiding. Een online afsprakensysteem zit niet in de websitepakketten, maar wij kunnen het voor u integreren: het neemt 24/7 boekingen aan, stuurt bevestigingen en herinneringen en kan gekoppeld worden aan uw agenda. De prijs hangt af van uw wensen; neem contact op voor een vrijblijvende offerte.' },
  { q: 'Hoe snel staat mijn kapperswebsite online?', a: 'Gemiddeld staat uw website binnen twee weken live. Na een korte intake bouwen wij een eerste versie die u kunt bekijken en aanpassen, waarna wij de site publiceren en, in het Groei pakket en hoger, de lokale SEO inrichten.' },
  { q: 'Word ik gevonden door klanten in mijn stad?', a: 'In het Groei pakket en hoger richten wij de website specifiek hierop in. Dan optimaliseren wij uw pagina voor zoektermen als "kapper [uw stad]" en zorgen wij dat uw Google Bedrijfsprofiel klopt met openingstijden, foto\'s en reviews, zodat u beter vindbaar kunt zijn in Google Maps en de lokale resultaten.' },
  { q: 'Kan ik mijn portfolio en tarieven zelf bijwerken?', a: 'Ja. U kunt eenvoudig nieuwe foto\'s toevoegen en tarieven aanpassen. Heeft u daar liever geen omkijken naar? Dan regelen wij het voor u als onderdeel van het maandelijkse beheer.' },
]

export default function KapperPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a }
        }))
      }) }} />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-brand-strong font-medium mb-2">Branche</p>
          <h1 className="h1 text-ink">Website laten maken voor kappers</h1>
          <p className="body-lg text-muted mt-4">Toon uw portfolio, zodat klanten u in uw buurt kunnen vinden — voor een vaste maandprijs, volledig ontzorgd.</p>
        </div>
      </section>

      {/* Tekst */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-4xl mx-auto space-y-5 body text-muted">
          <p>
            Als kapper is uw vak visueel — en dat moet uw website ook zijn. Een professionele
            kapperswebsite laat uw werk zien, bouwt vertrouwen op bij nieuwe klanten en maakt het
            makkelijk om een afspraak te boeken. Steeds meer klanten boeken hun kappersafspraak
            online, ook buiten openingstijden. Een online afsprakensysteem kunt u als aparte uitbreiding bij ons laten toevoegen.
          </p>

          <h2 className="h2 text-ink pt-6">Online afspraken als uitbreiding</h2>
          <p>
            Een online afsprakensysteem is geen onderdeel van de websitepakketten, maar kunt u er als
            aparte uitbreiding bij nemen. Het stuurt automatisch bevestigingen en herinneringen en
            kan gekoppeld worden aan uw agenda. De prijs is afhankelijk van uw wensen; wij maken
            daarvoor een vrijblijvende offerte. Wilt u meer weten over hoe zo&apos;n systeem werkt? Bekijk dan onze
            pagina over het <Link href="/diensten/boekingssysteem" className="text-brand-strong underline hover:no-underline">online boekingssysteem</Link>.
          </p>

          <h2 className="h2 text-ink pt-6">Een portfolio dat overtuigt</h2>
          <p>
            Een sterk portfolio is voor een kapper onmisbaar. Wij bouwen een overzichtelijke
            fotogalerij waar u uw knipwerk, kleuringen en stylings toont. Goede voor-en-na foto&apos;s
            overtuigen potentiële klanten sneller dan welke tekst dan ook. Wij helpen u ook met de
            presentatie van uw diensten en tarieven, zodat nieuwe klanten precies weten wat ze
            kunnen verwachten.
          </p>

          <h2 className="h2 text-ink pt-6">Gevonden worden in uw stad</h2>
          <p>
            Lokale SEO is voor kappers belangrijk en zit in het Groei pakket en hoger. De meeste klanten zoeken op &quot;kapper [stad]&quot;
            of &quot;kapper [wijk]&quot;. Daarmee optimaliseren wij uw website voor deze lokale zoektermen en
            zorgen wij dat uw Google Bedrijfsprofiel up-to-date is met openingstijden, foto&apos;s en
            reviews, zodat u beter vindbaar kunt zijn in de lokale Google-resultaten en op Google Maps.
            Zit u in een grote stad? Bekijk ook onze pagina&apos;s voor
            {' '}<Link href="/stad/amsterdam" className="text-brand-strong underline hover:no-underline">Amsterdam</Link>,
            {' '}<Link href="/stad/rotterdam" className="text-brand-strong underline hover:no-underline">Rotterdam</Link> en
            {' '}<Link href="/stad/utrecht" className="text-brand-strong underline hover:no-underline">Utrecht</Link>.
          </p>

          <h2 className="h2 text-ink pt-6">Een uitstraling die bij u past</h2>
          <p>
            Naast de technische kant denken wij mee over de uitstraling van uw website. Welke sfeer
            past bij uw salon — luxe en stijlvol, of juist hip en urban? Wij vertalen uw identiteit
            naar een website die echt bij u past en zich onderscheidt van de kapper om de hoek.
          </p>
        </div>
      </section>

      {/* Prijsanker */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-labelledby="prijs-titel">
        <div className="max-w-4xl mx-auto rounded-2xl border border-line bg-bg shadow-sm p-6 sm:p-8">
          <h2 id="prijs-titel" className="h3 text-ink mb-3">Wat kost een kapperswebsite?</h2>
          <p className="body text-muted mb-6">
            U betaalt een eenmalig startbedrag voor ontwerp en bouw, en daarna een vaste maandprijs
            <strong className="text-ink"> vanaf €49 per maand</strong> voor hosting, onderhoud,
            updates en beveiliging. Een online afsprakensysteem is een aparte uitbreiding op offertebasis. Geen verrassingen op de factuur.
          </p>
          <Link href="/prijzen" className={buttonVariants()}>
            Bekijk alle pakketten en prijzen
          </Link>
        </div>
      </section>

      {/* Aanpak */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-labelledby="aanpak-titel">
        <div className="max-w-4xl mx-auto">
          <h2 id="aanpak-titel" className="h2 text-ink mb-3">Zo pakken wij het aan</h2>
          <p className="body text-muted mb-6">Stel: u runt een salon met twee stoelen en krijgt nu de meeste boekingen telefonisch, vaak op de drukste momenten van de dag. Zo ziet een typisch traject eruit:</p>
          <ol className="space-y-4 body text-ink">
            <li className="flex items-start gap-3">
              <span className="bg-brand-strong text-white size-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">1</span>
              <span><strong>Intake (dag 1).</strong> We bespreken uw diensten, tarieven, stijl en de wijken waar uw klanten vandaan komen.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-brand-strong text-white size-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">2</span>
              <span><strong>Bouw (week 1).</strong> Wij zetten de website op met portfolio, dienstenoverzicht en eventueel een online afsprakenmodule (aparte uitbreiding).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-brand-strong text-white size-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">3</span>
              <span><strong>Lokale SEO (Groei pakket en hoger, week 2).</strong> We optimaliseren voor &quot;kapper [uw stad]&quot; en richten uw Google Bedrijfsprofiel goed in.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-brand-strong text-white size-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">4</span>
              <span><strong>Live &amp; beheer.</strong> De site gaat online; heeft u een afsprakenmodule laten toevoegen, dan boeken klanten voortaan zelf, ook &apos;s avonds. Wij houden alles up-to-date.</span>
            </li>
          </ol>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-label="Kenmerken">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Online afsprakensysteem (optionele uitbreiding)',
            'Portfolio met voor-en-na foto\'s',
            'Diensten en tarieven overzicht',
            'Basis SEO; lokale SEO in het Groei pakket en hoger',
            'Google Bedrijfsprofiel optimalisatie in het Groei pakket en hoger',
            'Mobiel-vriendelijk ontwerp',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 body text-ink">
              <CheckCircleIcon className="size-5 text-brand shrink-0" aria-hidden="true" />
              {f}
            </div>
          ))}
        </div>
      </section>

      <Faq items={faqItems} title="Veelgestelde vragen over een kapperswebsite" className="bg-bg" />

      {/* Gerelateerde pagina's */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-labelledby="gerelateerd-titel">
        <div className="max-w-4xl mx-auto">
          <h2 id="gerelateerd-titel" className="h3 text-ink mb-6">Gerelateerde pagina&apos;s</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Website laten maken — onze aanpak', href: '/diensten/websites' },
              { label: 'Online boekingssysteem', href: '/diensten/boekingssysteem' },
              { label: 'Blog: website voor kappers', href: '/blog/kapper' },
              { label: 'Wat kost een website? Bekijk de prijzen', href: '/prijzen' },
              { label: 'Website laten maken voor een restaurant', href: '/branche/restaurant' },
              { label: 'Website laten maken voor een fysiotherapeut', href: '/branche/fysiotherapeut' },
              { label: 'Alle branches', href: '/branche' },
            ].map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="flex min-h-12 items-center gap-2 rounded-2xl border border-line bg-bg px-4 py-3 font-semibold text-ink shadow-sm transition-all hover:border-brand-strong hover:text-brand-strong hover:shadow-md"
              >
                <span className="text-brand" aria-hidden="true">→</span> {r.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-navy" aria-labelledby="afsluiting-titel">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="afsluiting-titel" className="h2 text-on-navy">Een website voor uw salon?</h2>
          <p className="body-lg text-navy-muted mt-4">Vraag een gratis websitescan aan en ontdek uw kansen online.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>Gratis websitescan</Link>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>Bekijk prijzen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
