import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website laten maken voor kappers | Elly Apps',
  description:
    'Een professionele website voor uw kapperszaak. Online afspraken, portfolio en lokale SEO. Vanaf €49/maand volledig beheerd.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'Elly Apps — Websites voor kappers',
  url: 'https://elly-apps.nl/branche/kapper',
  description: 'Professionele websites voor kappers en kapperszaken, inclusief online afspraken en lokale SEO.',
}

export default function KapperPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div>
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Branche</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Website laten maken voor kappers
          </h1>
          <p className="text-xl text-gray-600">
            Laat klanten online afspraken maken, toon uw portfolio en word gevonden door nieuwe
            klanten in uw buurt.
          </p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>
            Als kapper is uw vak visueel — en dat moet uw website ook zijn. Een professionele
            kapperwebsite laat uw werk zien, bouwt vertrouwen op bij nieuwe klanten en maakt het
            makkelijk om een afspraak te boeken. Steeds meer klanten boeken hun kappersafspraak
            online, ook buiten openingstijden. Zonder online afspraakmogelijkheid mist u kansen.
          </p>
          <p>
            Elly Apps bouwt kapperwebsites die converteren. Wij integreren een online
            afsprakensysteem dat automatisch bevestigingen stuurt en uw agenda beheert. U hoeft
            zelf niet meer te bellen om afspraken te plannen — uw website doet dat voor u. Dit
            bespaart tijd en vergroot de klanttevredenheid.
          </p>
          <p>
            Een sterk portfolio is voor een kapper onmisbaar. Wij bouwen een overzichtelijke
            fotogalerij waar u uw knipwerk, kleuringen en stylings kunt tonen. Goede voor-en-na
            foto's overtuigen potentiële klanten sneller dan welke tekst dan ook. Wij helpen u
            ook met de presentatie van uw diensten en tarieven, zodat nieuwe klanten precies
            weten wat ze kunnen verwachten.
          </p>
          <p>
            Lokale SEO is voor kappers essentieel. De meeste klanten zoeken op "kapper [stad]"
            of "kapper [wijk]". Wij optimaliseren uw website voor deze lokale zoektermen en
            zorgen dat uw Google Business Profile up-to-date is met openingstijden, foto's en
            reviews. Zo verschijnt u bovenaan in de lokale Google-resultaten en Google Maps.
          </p>
          <p>
            Naast de technische kant denken wij ook mee over de uitstraling van uw website.
            Welke sfeer past bij uw salon? Luxe en stijlvol, of juist hip en urban? Wij vertalen
            uw identiteit naar een website die echt bij u past.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Online afspraken inboeken',
            'Portfolio met voor-en-na foto\'s',
            'Diensten en tarieven overzicht',
            'Lokale SEO voor uw buurt',
            'Google Business optimalisatie',
            'Mobiel-vriendelijk ontwerp',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />
              {f}
            </div>
          ))}
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
