import type { Metadata } from 'next'
import Link from 'next/link'
import { Zap, Search, Accessibility, Smartphone, PenLine } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Professionele website laten maken & beheren | Elly Apps',
  description: 'Professionele website laten maken voor uw bedrijf? Elly Apps bouwt snelle, SEO-geoptimaliseerde websites voor het MKB. Bekijk onze diensten.',
  alternates: { canonical: 'https://elly-apps.nl/diensten/websites' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Hoe lang duurt het om een website te laten maken bij Elly Apps?', acceptedAnswer: { '@type': 'Answer', text: 'Gemiddeld staat uw website binnen 2 weken online. Afhankelijk van de complexiteit kan dit variëren.' } },
    { '@type': 'Question', name: 'Wat is inbegrepen in het maandelijkse bedrag?', acceptedAnswer: { '@type': 'Answer', text: 'Hosting, SSL, updates, onderhoud, technische support en basis SEO-optimalisatie.' } },
    { '@type': 'Question', name: 'Kan ik mijn website later uitbreiden?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, u kunt altijd upgraden naar een groter pakket of extra pagina\'s laten toevoegen.' } },
    { '@type': 'Question', name: 'Wat als ik niet tevreden ben?', acceptedAnswer: { '@type': 'Answer', text: 'Wij werken door totdat u 100% tevreden bent. Dat is onze garantie.' } },
    { '@type': 'Question', name: 'Beheert Elly Apps mijn website volledig?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, wij nemen het volledige beheer over zodat u zich kunt focussen op uw bedrijf.' } },
  ],
}

const previews = [
  { label: 'Restaurant', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80' },
  { label: 'Loodgieter', img: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80' },
  { label: 'Rijschool', img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80' },
]

const comparison = [
  ['Prijs', '€0–100/jaar', '€3.000–10.000', 'Vanaf €299 + €49/mnd'],
  ['Snelheid', 'Weken–maanden', '4–8 weken', '~2 weken'],
  ['SEO', 'Beperkt', 'Extra kosten', 'Inbegrepen'],
  ['Beheer', 'Zelf', 'Extra kosten', 'Inbegrepen'],
  ['Kwaliteit', 'Variabel', 'Hoog', 'Hoog'],
]

const packages = [
  { name: 'Starter', items: ["4 pagina's", 'Basis SEO', 'Contactformulier', 'Hosting & SSL', 'Maandelijks beheer'] },
  { name: 'Groei', items: ["6 pagina's + 3 stadspagina's", 'Lokale SEO', 'Google Business optimalisatie', 'Maandelijkse updates', 'Performance rapportage'] },
  { name: 'Pro', items: ["10+ pagina's", 'Volledige SEO-strategie', 'Blog', 'Video integratie', 'Persoonlijke accountmanager', 'Maandrapportages'] },
]

const techSpecs = [
  { Icon: Zap, text: 'Laadtijd onder 2 seconden' },
  { Icon: Search, text: 'SEO-geoptimaliseerd vanaf dag 1' },
  { Icon: Accessibility, text: 'WCAG 2.1 AA toegankelijk' },
  { Icon: Smartphone, text: '100% mobielvriendelijk' },
]

const faq = [
  { q: 'Hoe lang duurt het om een website te laten maken bij Elly Apps?', a: 'Gemiddeld staat uw website binnen 2 weken online. Afhankelijk van de complexiteit kan dit variëren.' },
  { q: 'Wat is inbegrepen in het maandelijkse bedrag?', a: 'Hosting, SSL, updates, onderhoud, technische support en basis SEO-optimalisatie.' },
  { q: "Kan ik mijn website later uitbreiden?", a: "Ja, u kunt altijd upgraden naar een groter pakket of extra pagina's laten toevoegen." },
  { q: 'Wat als ik niet tevreden ben?', a: 'Wij werken door totdat u 100% tevreden bent. Dat is onze garantie.' },
  { q: 'Beheert Elly Apps mijn website volledig?', a: 'Ja, wij nemen het volledige beheer over zodat u zich kunt focussen op uw bedrijf.' },
]

export default function DienstenWebsitesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professionele website laten maken voor uw bedrijf</h1>
            <p className="text-lg text-gray-600 mb-6">8 op de 10 MKB-websites worden niet gevonden op Google. Elly Apps zorgt dat u wél gevonden wordt — volledig ontzorgd.</p>
            <Link href="/gratis-websitescan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">
              Ja, ik wil mijn gratis websitescan
            </Link>
            <p className="text-sm text-gray-500 mt-2">✓ Gratis &nbsp; ✓ Vrijblijvend &nbsp; ✓ Binnen 24 uur reactie</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {previews.map((b) => (
              <div key={b.label} className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg border">
                <img src={b.img} alt={`${b.label} website voorbeeld`} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/45" />
                <div className="absolute inset-0 flex items-end p-3">
                  <p className="text-white font-bold text-sm drop-shadow">{b.label} website</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison table */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Vergelijk uw opties</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4"></th>
                  <th className="py-3 px-4 text-gray-600">Zelf doen</th>
                  <th className="py-3 px-4 text-gray-600">Duur bureau</th>
                  <th className="py-3 px-4 text-[#E53E3E] font-bold">Elly Apps</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([label, ...vals]) => (
                  <tr key={label} className="border-b">
                    <td className="py-3 px-4 font-semibold text-gray-900">{label}</td>
                    {vals.map((v, i) => (
                      <td key={i} className={`py-3 px-4 text-center ${i === 2 ? 'text-[#E53E3E] font-semibold' : 'text-gray-500'}`}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Packages */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Wat is inbegrepen?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div key={p.name} className="border rounded-xl p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">{p.name}</h3>
              <ul className="space-y-2">
                {p.items.map((f) => (
                  <li key={f} className="text-sm flex gap-2 text-gray-700"><span className="text-[#E53E3E]">✓</span>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Technical specs */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {techSpecs.map((s) => (
            <div key={s.text} className="p-6 rounded-xl border bg-white">
              <div className="mb-2 flex justify-center"><s.Icon size={24} color="#DC2626" /></div>
              <p className="font-semibold text-sm text-gray-900">{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Copywriting USP */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <PenLine size={24} color="#DC2626" /> Wij schrijven ook uw teksten
        </h2>
        <p className="text-gray-600 mb-6">
          Geen idee wat u op uw website moet zetten? Geen probleem. Wij nemen ook het schrijven van uw websiteteksten volledig over. U vertelt, wij schrijven. Zo heeft u echt nergens omkijken naar.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-sm text-gray-700"><span className="text-[#E53E3E] font-bold">✓</span>Professionele, SEO-geoptimaliseerde teksten</li>
          <li className="flex items-start gap-3 text-sm text-gray-700"><span className="text-[#E53E3E] font-bold">✓</span>Geschreven voor uw doelgroep</li>
          <li className="flex items-start gap-3 text-sm text-gray-700"><span className="text-[#E53E3E] font-bold">✓</span>Inbegrepen in het Pro pakket, optioneel bij andere pakketten</li>
        </ul>
      </div>

      {/* Process */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Ons proces</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Intake', 'Ontwerp', 'Bouw', 'Lancering', 'Beheer'].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className="bg-[#E53E3E] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">{i + 1}</div>
                <span className="font-semibold text-gray-900">{s}</span>
                {i < 4 && <span className="text-gray-400">→</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Veelgestelde vragen over websites laten maken</h2>
        <div className="space-y-4">
          {faq.map((item, i) => (
            <details key={i} className="border rounded-xl p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                {item.q}<span className="text-[#E53E3E] ml-2">+</span>
              </summary>
              <p className="mt-3 text-gray-600 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#E53E3E] py-16 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Klaar om uw bedrijf online te laten groeien?</h2>
          <Link href="/gratis-websitescan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-[#E53E3E] font-semibold hover:bg-gray-100 transition-colors">
            Ja, ik wil mijn gratis websitescan
          </Link>
          <p className="text-sm text-white/90 mt-3">✓ Gratis &nbsp; ✓ Vrijblijvend &nbsp; ✓ Binnen 24 uur reactie</p>
        </div>
      </div>
    </>
  )
}
