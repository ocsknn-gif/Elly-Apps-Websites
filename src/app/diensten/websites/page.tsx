import type { Metadata } from 'next'
import Link from 'next/link'
import { Zap, Search, Accessibility, Smartphone, PenLine, CheckIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { PakketKaart } from '@/components/PakketKaart'
import { Faq } from '@/components/home/Faq'
import { ClosingCta } from '@/components/home/ClosingCta'
import { SectionHeader } from '@/components/home/SectionHeader'
import { websitePakketten } from '@/lib/pakketten'

export const metadata: Metadata = {
  title: 'Professionele website laten maken & beheren | Elly Apps',
  description: 'Professionele website laten maken voor uw bedrijf? Elly Apps bouwt snelle, SEO-geoptimaliseerde websites voor het MKB. Bekijk onze diensten.',
  alternates: { canonical: 'https://elly-apps.nl/diensten/websites' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/diensten/websites',
    title: 'Professionele website laten maken & beheren | Elly Apps',
    description: 'Professionele website laten maken voor uw bedrijf? Elly Apps bouwt snelle, SEO-geoptimaliseerde websites voor het MKB. Bekijk onze diensten.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professionele website laten maken & beheren | Elly Apps',
    description: 'Professionele website laten maken voor uw bedrijf? Elly Apps bouwt snelle, SEO-geoptimaliseerde websites voor het MKB. Bekijk onze diensten.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Hoe lang duurt het om een website te laten maken bij Elly Apps?', acceptedAnswer: { '@type': 'Answer', text: 'Gemiddeld staat uw website binnen 2 weken online. Afhankelijk van de complexiteit kan dit variëren.' } },
    { '@type': 'Question', name: 'Wat is inbegrepen in het maandelijkse bedrag?', acceptedAnswer: { '@type': 'Answer', text: 'Hosting, SSL, maandelijks beheer en basis SEO-optimalisatie.' } },
    { '@type': 'Question', name: 'Kan ik mijn website later uitbreiden?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, u kunt altijd upgraden naar een groter pakket of extra pagina\'s laten toevoegen.' } },
    { '@type': 'Question', name: 'Wat als ik niet tevreden ben?', acceptedAnswer: { '@type': 'Answer', text: 'Wij werken met een feedbackronde: u geeft feedback, daarna gaan we live.' } },
    { '@type': 'Question', name: 'Beheert Elly Apps mijn website volledig?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, wij nemen het volledige beheer over zodat u zich kunt focussen op uw bedrijf.' } },
  ],
}

const previews = [
  { label: 'Restaurant', img: '/images/branches/restaurant.webp' },
  { label: 'Loodgieter', img: '/images/branches/loodgieter.webp' },
  { label: 'Rijschool', img: '/images/branches/rijschool.webp' },
]

const comparison = [
  ['Prijs', '€0–100/jaar', '€3.000–10.000', 'Vanaf €299 + €49/mnd'],
  ['Snelheid', 'Weken–maanden', '4–8 weken', '~2 weken'],
  ['SEO', 'Beperkt', 'Extra kosten', 'Inbegrepen'],
  ['Beheer', 'Zelf', 'Extra kosten', 'Inbegrepen'],
  ['Kwaliteit', 'Variabel', 'Hoog', 'Hoog'],
]

const techSpecs = [
  { Icon: Zap, text: 'Laadtijd onder 2 seconden' },
  { Icon: Search, text: 'SEO-geoptimaliseerd vanaf dag 1' },
  { Icon: Accessibility, text: 'WCAG 2.1 AA toegankelijk' },
  { Icon: Smartphone, text: '100% mobielvriendelijk' },
]

const faq = [
  { q: 'Hoe lang duurt het om een website te laten maken bij Elly Apps?', a: 'Gemiddeld staat uw website binnen 2 weken online. Afhankelijk van de complexiteit kan dit variëren.' },
  { q: 'Wat is inbegrepen in het maandelijkse bedrag?', a: 'Hosting, SSL, maandelijks beheer en basis SEO-optimalisatie.' },
  { q: "Kan ik mijn website later uitbreiden?", a: "Ja, u kunt altijd upgraden naar een groter pakket of extra pagina's laten toevoegen." },
  { q: 'Wat als ik niet tevreden ben?', a: 'Wij werken met een feedbackronde: u geeft feedback, daarna gaan we live.' },
  { q: 'Beheert Elly Apps mijn website volledig?', a: 'Ja, wij nemen het volledige beheer over zodat u zich kunt focussen op uw bedrijf.' },
]

const NOTE = '✓ Gratis   ✓ Vrijblijvend   ✓ Binnen één werkdag reactie'

export default function DienstenWebsitesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="h1 text-ink">Professionele website laten maken voor uw bedrijf</h1>
            <p className="body-lg text-muted mt-4 mb-6">8 op de 10 MKB-websites worden niet gevonden op Google. Elly Apps zorgt dat u wél gevonden wordt — volledig ontzorgd.</p>
            <Link href="/gratis-websitescan" className={buttonVariants({ size: 'lg' })}>
              Ja, ik wil mijn gratis websitescan
            </Link>
            <p className="text-sm text-muted mt-3">{NOTE}</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {previews.map((b) => (
              <div key={b.label} className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-line">
                <img src={b.img} alt={`${b.label} website voorbeeld`} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/45" />
                <div className="absolute inset-0 flex items-end p-3">
                  <p className="text-white font-bold text-sm drop-shadow">{b.label} website</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vergelijking */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-labelledby="vergelijk-titel">
        <div className="max-w-4xl mx-auto">
          <SectionHeader id="vergelijk-titel" title="Vergelijk uw opties" />
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-line bg-surface">
                  <th scope="col" className="text-left py-3 px-4"><span className="sr-only">Onderdeel</span></th>
                  <th scope="col" className="py-3 px-4 text-muted">Zelf doen</th>
                  <th scope="col" className="py-3 px-4 text-muted">Duur bureau</th>
                  <th scope="col" className="py-3 px-4 text-brand-strong font-bold">Elly Apps</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([label, ...vals]) => (
                  <tr key={label} className="border-b border-line last:border-b-0">
                    <th scope="row" className="py-3 px-4 text-left font-semibold text-ink">{label}</th>
                    {vals.map((v, i) => (
                      <td key={i} className={`py-3 px-4 text-center ${i === 2 ? 'text-brand-strong font-semibold' : 'text-muted'}`}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pakketten */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-labelledby="inbegrepen-titel">
        <div className="max-w-7xl mx-auto">
          <SectionHeader id="inbegrepen-titel" title="Wat is inbegrepen?" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {websitePakketten.map((p) => (
              <PakketKaart
                key={p.naam}
                naam={p.naam}
                prijs={p.prijs}
                periode={p.prijs.startsWith('€') ? '/maand' : undefined}
                eenmalig={p.eenmalig}
                populair={p.populair}
                features={p.features}
                cta={{ label: 'Ja, ik wil mijn gratis websitescan', href: '/gratis-websitescan' }}
                note={NOTE}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technische specs */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-label="Technische kenmerken">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {techSpecs.map((s) => (
            <div key={s.text} className="p-6 rounded-2xl border border-line bg-bg shadow-sm">
              <div className="mb-3 flex justify-center">
                <div className="inline-flex items-center justify-center size-12 rounded-full bg-brand-tint">
                  <s.Icon size={24} className="text-brand" aria-hidden="true" />
                </div>
              </div>
              <p className="font-semibold text-sm text-ink">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Teksten */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-surface" aria-labelledby="teksten-titel">
        <div className="max-w-3xl mx-auto">
          <h2 id="teksten-titel" className="h2 text-ink mb-4 flex items-center gap-3">
            <PenLine size={28} className="text-brand shrink-0" aria-hidden="true" /> Wij schrijven ook uw teksten
          </h2>
          <p className="body text-muted mb-6">
            Geen idee wat u op uw website moet zetten? Geen probleem. Wij nemen ook het schrijven van uw websiteteksten volledig over. U vertelt, wij schrijven. Zo heeft u echt nergens omkijken naar.
          </p>
          <ul className="space-y-3 body text-ink">
            {[
              'Professionele, SEO-geoptimaliseerde teksten',
              'Geschreven voor uw doelgroep',
              'Inbegrepen in het Pro pakket, optioneel bij andere pakketten',
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <CheckIcon className="size-5 text-brand shrink-0 mt-0.5" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Proces */}
      <section className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-labelledby="proces-titel">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeader id="proces-titel" title="Ons proces" />
          <ol className="flex flex-wrap justify-center gap-4">
            {['Intake', 'Ontwerp', 'Bouw', 'Lancering', 'Beheer'].map((s, i) => (
              <li key={s} className="flex items-center gap-2">
                <span className="bg-brand-strong text-white size-10 rounded-full flex items-center justify-center font-bold">{i + 1}</span>
                <span className="font-semibold text-ink">{s}</span>
                {i < 4 && <span className="text-muted" aria-hidden="true">→</span>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Faq items={faq} title="Veelgestelde vragen over websites laten maken" className="bg-surface" />

      <ClosingCta
        title="Klaar om uw bedrijf online te laten groeien?"
        text="Vraag een gratis websitescan aan en ontdek wat wij voor uw bedrijf kunnen betekenen."
        buttonLabel="Ja, ik wil mijn gratis websitescan"
        note={NOTE}
        beeld={false}
      />
    </>
  )
}
