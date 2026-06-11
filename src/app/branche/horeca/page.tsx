import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Horeca website laten maken | Elly Apps',
  description: 'Horeca website laten maken? Elly Apps bouwt professionele websites voor restaurants, cafés, hotels en horecabedrijven. Online menu, reserveringen en lokale SEO. Vanaf €49/maand.',
  alternates: { canonical: 'https://elly-apps.nl/branche/horeca' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Horeca website laten maken',
  provider: { '@type': 'Organization', name: 'Elly Apps', url: 'https://elly-apps.nl' },
  description: 'Professionele websites voor horecabedrijven. Online menu, reserveringen, lokale SEO en volledig beheerd.',
  areaServed: { '@type': 'Country', name: 'Netherlands' },
}

const faqItems = [
  { q: 'Wat kost een horeca website laten maken?', a: 'Een professionele horecawebsite bij Elly Apps begint vanaf €299 eenmalige setup en €49 per maand. Daarin zijn hosting, SSL, updates en basis SEO inbegrepen. Voor uitgebreidere functies zoals online reserveringen, bestelsystemen of menubeheersystemen adviseren wij het Groei of Pro pakket.' },
  { q: 'Kan ik zelf mijn menu bijwerken op de website?', a: 'Ja. Wij bouwen een eenvoudig beheerpaneel waarmee u zelf uw menu kunt bijwerken — geen technische kennis nodig. Verandert er een prijs of een gerecht? U past het zelf aan in enkele klikken.' },
  { q: 'Werken jullie ook met bezorging of afhaal?', a: 'Ja. Wij kunnen een online bestelmodule integreren waarmee gasten direct via uw website kunnen bestellen voor bezorging of afhaal — zonder commissie aan platformen als Thuisbezorgd of Uber Eats.' },
  { q: 'Hoe snel kan mijn horeca website live?', a: 'Wij leveren gemiddeld binnen twee weken op. Na een gratis kennismakingsgesprek starten wij direct met het ontwerp en de technische opzet.' },
  { q: 'Zijn Google Maps en reviews inbegrepen?', a: 'Ja. Wij optimaliseren uw Google Business Profile en integreren uw reviews op de website. Dit verhoogt zowel uw vindbaarheid als het vertrouwen van nieuwe gasten.' },
]

export default function HorecaPage() {
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div>
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Branche</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Horeca website laten maken
          </h1>
          <p className="text-xl text-gray-600">
            Meer gasten via Google. Een professionele horecawebsite met online menu,
            reserveringen en lokale SEO — volledig beheerd vanaf €49 per maand.
          </p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>
            De horeca is een van de meest competitieve sectoren van Nederland. Gasten kiezen
            hun restaurant, café of hotel al online — op basis van de website, de foto's, het
            menu en de reviews. Een slechte of verouderde website kost u gasten. Een professionele
            horecawebsite, geoptimaliseerd voor Google en voorzien van een online reserveringssysteem,
            is geen luxe maar een noodzaak voor elk serieus horecabedrijf.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Wat heeft een goede horecawebsite nodig?</h2>
          <p>
            Een effectieve horecawebsite doet meer dan er goed uitzien. Ten eerste moet de website
            snel laden — zeker op mobiel, want meer dan 70 procent van de zoekopdrachten naar
            horeca vindt plaats op een smartphone. Ten tweede moet uw menu duidelijk en aantrekkelijk
            gepresenteerd worden, inclusief foto's, prijzen en allergeneninformatie. Ten derde moet
            er een reserveringssysteem op staan zodat gasten 24/7 een tafel kunnen boeken. En ten
            vierde moet de website vindbaar zijn in Google — voor zoektermen als "restaurant [stad]"
            of "[uw type keuken] [stad]".
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Online bestellen zonder commissie</h2>
          <p>
            Platforms zoals Thuisbezorgd en Uber Eats zijn handig voor bereik, maar de commissies
            (15 tot 30 procent per bestelling) vreten aan uw marge. Wij bouwen een eigen
            bestelmodule op uw website waarmee klanten direct bij u bestellen — zonder
            tussenkomst van een platform. U betaalt geen commissie en u heeft directe controle
            over de klantrelatie. Gecombineerd met een Google Ads campagne of lokale SEO is dit
            een krachtige manier om uw online omzet te vergroten.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Lokale SEO voor horeca: zo werkt het</h2>
          <p>
            Wanneer iemand zoekt op "restaurant Amsterdam-West" of "sushi bezorgen Utrecht",
            bepaalt Google welke bedrijven bovenaan verschijnen op basis van drie factoren:
            relevantie, afstand en bekendheid. Wij optimaliseren uw website en Google Business
            Profile op alle drie deze factoren. Wij voegen de juiste zoekwoorden toe, zorgen
            voor consistente NAP-gegevens (naam, adres, telefoonnummer) en helpen u actief
            meer reviews te verzamelen. Het resultaat: structureel meer gasten via Google.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Voor welke horecabedrijven werken wij?</h2>
          <p>
            Elly Apps bouwt websites voor alle soorten horecabedrijven: restaurants van alle
            keukens, cafés en kroegen, lunchrooms en koffiezaken, hotels en B&Bs,
            cateringbedrijven, foodtrucks en pop-up restaurants. Elk type zaak heeft andere
            behoeften en een andere doelgroep — wij passen de website daarop aan.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Volledig ontzorgd, vaste prijs</h2>
          <p>
            U heeft genoeg aan uw hoofd als horecaondernemer. Wij nemen uw online aanwezigheid
            volledig over. Van het eerste ontwerp tot de dagelijkse updates, van de technische
            monitoring tot de maandelijkse SEO-rapportage — wij regelen het allemaal. Voor een
            vaste maandprijs, zonder verrassingen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Online menu met foto\'s en allergenen',
            'Reserveringssysteem 24/7',
            'Bestelmodule zonder commissie',
            'Lokale SEO en Google Business',
            'Reviews integratie',
            'Volledig beheerd, vaste prijs',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />
              {f}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Veelgestelde vragen over horeca websites</h2>
          {faqItems.map((item) => (
            <details key={item.q} className="group rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-semibold text-gray-900 list-none select-none hover:bg-gray-50">
                {item.q}
                <span className="shrink-0 text-[#E53E3E] text-xl leading-none group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="bg-[#f7f7f7] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Horeca website laten maken?</h2>
          <p className="text-gray-600 mb-6">Vraag een gratis websitescan aan en ontdek hoe wij meer gasten naar uw zaak brengen.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">Gratis websitescan</Link>
            <Link href="/prijzen" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold hover:bg-red-50 transition-colors">Bekijk prijzen</Link>
          </div>
        </div>
      </div>
    </>
  )
}
