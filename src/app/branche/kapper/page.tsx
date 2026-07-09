import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website laten maken voor kappers | Elly Apps',
  description:
    'Een professionele website voor uw kapperszaak: online afspraken, portfolio en lokale SEO zodat u gevonden wordt in uw stad. Volledig beheerd vanaf €49 per maand.',
  alternates: { canonical: 'https://elly-apps.nl/branche/kapper' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'Elly Apps — Websites voor kappers',
  url: 'https://elly-apps.nl/branche/kapper',
  description: 'Professionele websites voor kappers en kapperszaken, inclusief online afspraken en lokale SEO.',
}

const faqItems = [
  { q: 'Wat kost een website voor mijn kapsalon?', a: 'U betaalt een eenmalig startbedrag voor het ontwerp en de bouw, en daarna een vast bedrag vanaf €49 per maand voor hosting, onderhoud, updates en beveiliging. Geen verrassingen achteraf. Bekijk onze pakketten op de prijzenpagina voor een exact overzicht.' },
  { q: 'Kunnen klanten online een afspraak boeken?', a: 'Ja. Wij integreren een online afsprakensysteem dat 24/7 boekingen aanneemt, automatisch bevestigingen en herinneringen stuurt en gekoppeld is aan uw agenda. Zo boeken klanten ook buiten openingstijden en belt u zelf niemand meer terug.' },
  { q: 'Hoe snel staat mijn kapperswebsite online?', a: 'Gemiddeld staat uw website binnen twee weken live. Na een korte intake bouwen wij een eerste versie die u kunt bekijken en aanpassen, waarna wij de site publiceren en de lokale SEO inrichten.' },
  { q: 'Word ik gevonden door klanten in mijn stad?', a: 'Daar richten wij de website specifiek op in. Wij optimaliseren uw pagina voor zoektermen als "kapper [uw stad]" en zorgen dat uw Google Bedrijfsprofiel klopt met openingstijden, foto\'s en reviews, zodat u verschijnt in Google Maps en de lokale resultaten.' },
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div>
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Branche</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Website laten maken voor kappers
          </h1>
          <p className="text-xl text-gray-600">
            Laat klanten online afspraken maken, toon uw portfolio en word gevonden door nieuwe
            klanten in uw buurt — voor een vaste maandprijs, volledig ontzorgd.
          </p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>
            Als kapper is uw vak visueel — en dat moet uw website ook zijn. Een professionele
            kapperswebsite laat uw werk zien, bouwt vertrouwen op bij nieuwe klanten en maakt het
            makkelijk om een afspraak te boeken. Steeds meer klanten boeken hun kappersafspraak
            online, ook buiten openingstijden. Zonder online afspraakmogelijkheid mist u die klanten.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Online afspraken, dag en nacht</h2>
          <p>
            Wij integreren een online afsprakensysteem dat automatisch bevestigingen en herinneringen
            stuurt en uw agenda beheert. U hoeft zelf niet meer te bellen om afspraken te plannen —
            uw website doet dat voor u. Dat bespaart tijd, vermindert no-shows en vergroot de
            klanttevredenheid. Wilt u meer weten over hoe zo&apos;n systeem werkt? Bekijk dan onze
            pagina over het <Link href="/diensten/boekingssysteem" className="text-[#E53E3E] underline hover:no-underline">online boekingssysteem</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Een portfolio dat overtuigt</h2>
          <p>
            Een sterk portfolio is voor een kapper onmisbaar. Wij bouwen een overzichtelijke
            fotogalerij waar u uw knipwerk, kleuringen en stylings toont. Goede voor-en-na foto&apos;s
            overtuigen potentiële klanten sneller dan welke tekst dan ook. Wij helpen u ook met de
            presentatie van uw diensten en tarieven, zodat nieuwe klanten precies weten wat ze
            kunnen verwachten.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Gevonden worden in uw stad</h2>
          <p>
            Lokale SEO is voor kappers essentieel. De meeste klanten zoeken op &quot;kapper [stad]&quot;
            of &quot;kapper [wijk]&quot;. Wij optimaliseren uw website voor deze lokale zoektermen en
            zorgen dat uw Google Bedrijfsprofiel up-to-date is met openingstijden, foto&apos;s en
            reviews. Zo verschijnt u bovenaan in de lokale Google-resultaten en op Google Maps.
            Zit u in een grote stad? Bekijk ook onze pagina&apos;s voor
            {' '}<Link href="/stad/amsterdam" className="text-[#E53E3E] underline hover:no-underline">Amsterdam</Link>,
            {' '}<Link href="/stad/rotterdam" className="text-[#E53E3E] underline hover:no-underline">Rotterdam</Link> en
            {' '}<Link href="/stad/utrecht" className="text-[#E53E3E] underline hover:no-underline">Utrecht</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Een uitstraling die bij u past</h2>
          <p>
            Naast de technische kant denken wij mee over de uitstraling van uw website. Welke sfeer
            past bij uw salon — luxe en stijlvol, of juist hip en urban? Wij vertalen uw identiteit
            naar een website die echt bij u past en zich onderscheidt van de kapper om de hoek.
          </p>
        </div>

        {/* Prijsanker */}
        <div className="rounded-2xl border-2 border-[#E53E3E]/20 p-8 bg-white">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Wat kost een kapperswebsite?</h2>
          <p className="text-gray-600 mb-4">
            U betaalt een eenmalig startbedrag voor ontwerp en bouw, en daarna een vaste maandprijs
            <strong className="text-gray-900"> vanaf €49 per maand</strong> voor hosting, onderhoud,
            updates, beveiliging en het online afsprakensysteem. Geen verrassingen op de factuur.
          </p>
          <Link href="/prijzen" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">
            Bekijk alle pakketten en prijzen
          </Link>
        </div>

        {/* Illustratief voorbeeld */}
        <div className="rounded-2xl bg-[#f7f7f7] p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Zo pakken wij het aan</h2>
          <p className="text-gray-600 mb-4">
            Stel: u runt een salon met twee stoelen en krijgt nu de meeste boekingen telefonisch,
            vaak op de drukste momenten van de dag. Zo ziet een typisch traject eruit:
          </p>
          <ol className="space-y-3 text-gray-700 text-sm list-decimal pl-5">
            <li><strong>Intake (dag 1).</strong> We bespreken uw diensten, tarieven, stijl en de wijken waar uw klanten vandaan komen.</li>
            <li><strong>Bouw (week 1).</strong> Wij zetten de website op met portfolio, dienstenoverzicht en een online afsprakenmodule gekoppeld aan uw agenda.</li>
            <li><strong>Lokale SEO (week 2).</strong> We optimaliseren voor &quot;kapper [uw stad]&quot; en richten uw Google Bedrijfsprofiel goed in.</li>
            <li><strong>Live &amp; beheer.</strong> De site gaat online; klanten boeken voortaan zelf, ook &apos;s avonds. Wij houden alles up-to-date.</li>
          </ol>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Online afspraken inboeken',
            'Portfolio met voor-en-na foto\'s',
            'Diensten en tarieven overzicht',
            'Lokale SEO voor uw buurt',
            'Google Bedrijfsprofiel optimalisatie',
            'Mobiel-vriendelijk ontwerp',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />
              {f}
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Veelgestelde vragen over een kapperswebsite</h2>
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

        {/* Gerelateerde pagina's */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Gerelateerde pagina&apos;s</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Website laten maken — onze aanpak', href: '/diensten/websites' },
              { label: 'Online boekingssysteem', href: '/diensten/boekingssysteem' },
              { label: 'Blog: website voor kappers', href: '/blog/kapper' },
              { label: 'Alle branches', href: '/branche' },
            ].map((r) => (
              <Link key={r.href} href={r.href} className="flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-xl px-4 py-3 hover:text-[#E53E3E] hover:border-[#E53E3E] transition-colors">
                <span className="text-[#E53E3E]">→</span> {r.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-[#f7f7f7] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Meer klanten voor uw salon?</h2>
          <p className="text-gray-600 mb-6">Vraag een gratis websitescan aan en ontdek uw kansen online.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">
              Gratis websitescan
            </Link>
            <Link href="/prijzen" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold hover:bg-red-50 transition-colors">
              Bekijk prijzen
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
