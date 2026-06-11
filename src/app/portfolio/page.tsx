import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Portfolio — Onze websites & resultaten | Elly Apps',
  description: 'Bekijk onze gerealiseerde websites voor MKB-bedrijven. Loodgieters, tandartsen, restaurants en meer — allemaal beter vindbaar in Google.',
  alternates: { canonical: 'https://elly-apps.nl/portfolio' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Portfolio Elly Apps & Websites',
  url: 'https://elly-apps.nl/portfolio',
  description: 'Overzicht van gerealiseerde websites voor MKB-bedrijven door Elly Apps.',
}

const cases = [
  {
    branche: 'Loodgieter',
    naam: 'Loodgietersbedrijf Amsterdam',
    resultaat: '+340% meer organisch verkeer in 6 maanden',
    beschrijving: 'Volledig nieuwe website met lokale SEO-optimalisatie, spoedaanvraag-functionaliteit en Google Business koppeling. De klant ontvangt nu dagelijks meerdere online aanvragen.',
    features: ['Lokale SEO', 'Spoedaanvraag knop', 'Google Business optimalisatie'],
    kleur: 'bg-blue-50',
  },
  {
    branche: 'Tandarts',
    naam: 'Tandartspraktijk Utrecht',
    resultaat: 'Van pagina 4 naar positie 2 op "tandarts Utrecht"',
    beschrijving: 'Migratie van verouderde website naar moderne Next.js site. Volledige herstructurering van content, schema-markup voor medische praktijken en online afspraken-integratie.',
    features: ['Online afspraken', 'Schema.org medisch', 'Mobielvriendelijk'],
    kleur: 'bg-green-50',
  },
  {
    branche: 'Restaurant',
    naam: 'Italiaans restaurant Rotterdam',
    resultaat: '62% meer tafelbezettingen via de website',
    beschrijving: 'Sfeervol ontwerp met geïntegreerd reserveringssysteem, digitale menukaart en Google-reviews widget. Volledig beheerd inclusief seizoensgebonden menu-updates.',
    features: ['Online reserveringen', 'Digitale menukaart', 'Google-reviews widget'],
    kleur: 'bg-orange-50',
  },
  {
    branche: 'Kapper',
    naam: 'Kapperszaak Den Haag',
    resultaat: '80% van de afspraken via website (was: telefonisch)',
    beschrijving: 'Stijlvolle website met geïntegreerd online boekingssysteem. Klanten boeken nu direct hun afspraak online, wat de werkdruk op de zaak sterk vermindert.',
    features: ['Online boekingssysteem', 'Diensten & prijzenlijst', 'Instagram-koppeling'],
    kleur: 'bg-purple-50',
  },
  {
    branche: 'Fysiotherapeut',
    naam: 'Fysiotherapiepraktijk Eindhoven',
    resultaat: 'Praktijk volledig vol via organisch verkeer',
    beschrijving: "Nieuwe website met uitgebreide informatiepagina's per behandeling, online intakeformulier en zorgverzekering-checker. Top 3 positie op alle relevante zoekwoorden.",
    features: ["Behandelingspagina's", 'Online intake', 'Verzekering-checker'],
    kleur: 'bg-teal-50',
  },
  {
    branche: 'Bouwbedrijf',
    naam: 'Aannemersbedrijf Noord-Holland',
    resultaat: '3x meer offerteaanvragen na website-lancering',
    beschrijving: "Professionele portfolio-website met projectfoto's, referenties en uitgebreid offerteformulier. Sterk verbeterde betrouwbaarheidsuitstraling leidde direct tot meer kwalitatieve leads.",
    features: ['Projectportfolio', 'Offerteformulier', 'Referenties sectie'],
    kleur: 'bg-yellow-50',
  },
]

export default function PortfolioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Onze gerealiseerde websites</h1>
          <p className="text-xl text-gray-600">Van loodgieter tot restaurant — wij bouwen websites die écht resultaat opleveren.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { getal: '50+', label: 'Websites gebouwd' },
            { getal: '92%', label: 'Klanten zien meer verkeer' },
            { getal: '8', label: 'Branches bediend' },
            { getal: '4.9★', label: 'Gemiddelde beoordeling' },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 rounded-2xl p-5">
              <p className="text-3xl font-extrabold text-[#E53E3E]">{s.getal}</p>
              <p className="text-sm text-gray-600 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="space-y-8">
          {cases.map((c) => (
            <div key={c.naam} className={`${c.kleur} rounded-2xl p-8`}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <span className="inline-block text-xs font-semibold text-[#E53E3E] uppercase tracking-wide mb-1">{c.branche}</span>
                  <h2 className="text-xl font-bold text-gray-900">{c.naam}</h2>
                </div>
                <div className="shrink-0 bg-white rounded-xl px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm">📈 {c.resultaat}</div>
              </div>
              <p className="text-gray-700 mb-4">{c.beschrijving}</p>
              <div className="flex flex-wrap gap-3">
                {c.features.map((f) => (
                  <div key={f} className="flex items-center gap-1.5 text-sm text-gray-700">
                    <CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />{f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-400">Bovenstaande cases zijn geanonimiseerd. Op aanvraag delen wij referenties met contactgegevens.</p>
        <div className="bg-[#f7f7f7] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ook zulke resultaten voor uw bedrijf?</h2>
          <p className="text-gray-600 mb-6">Vraag een gratis websitescan aan en ontdek uw kansen online.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">Gratis websitescan</Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold hover:bg-red-50 transition-colors">Neem contact op</Link>
          </div>
        </div>
      </div>
    </>
  )
}
