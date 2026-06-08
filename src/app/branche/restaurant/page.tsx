import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website laten maken voor restaurants | Elly Apps',
  description:
    'Professionele website voor uw restaurant. Online menu, reserveringen, Google Maps en reviews. Volledig beheerd vanaf €49/maand.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Elly Apps — Websites voor restaurants',
  url: 'https://elly-apps.nl/branche/restaurant',
  description: 'Professionele websites voor restaurants, inclusief online menu, reserveringen en lokale SEO.',
}

export default function RestaurantPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div>
          <p className="text-sm text-indigo-600 font-medium mb-2">Branche</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Website laten maken voor restaurants
          </h1>
          <p className="text-xl text-gray-600">
            Toon uw menu online, laat gasten reserveren en word gevonden door hongerige klanten
            in uw buurt.
          </p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>
            Mensen die een restaurant zoeken, starten hun zoektocht online. Ze kijken naar het
            menu, de sfeer, de prijzen en de reviews — voordat ze een stap over de drempel zetten.
            Als uw restaurant geen goede website heeft, of als uw menu moeilijk te vinden is,
            kiest de potentiële gast een concurrent. Een professionele restaurantwebsite is
            daarmee direct van invloed op uw omzet.
          </p>
          <p>
            Elly Apps bouwt restaurantwebsites die gasten overtuigen. Wij presenteren uw menu
            overzichtelijk en aantrekkelijk — inclusief foto's, prijzen en allergeneninformatie.
            Een online reserveringssysteem zorgt ervoor dat gasten 24/7 een tafel kunnen boeken,
            ook als uw zaak gesloten is. Zo mist u nooit meer een reservering.
          </p>
          <p>
            Google Maps is voor restaurants een van de belangrijkste vindkanalen. Wij zorgen dat
            uw restaurant goed zichtbaar is in Google Maps en Google Search, met de juiste
            categorisering, openingstijden, foto's en beschrijving. Klanten kunnen met één klik
            de routebeschrijving openen of bellen.
          </p>
          <p>
            Reviews zijn goud waard voor restaurants. Wij integreren uw Google-reviews en
            Tripadvisor-beoordelingen in uw website, zodat nieuwe gasten direct het vertrouwen
            zien dat anderen in uw restaurant hebben. Positieve reviews verhogen ook uw positie
            in Google. Wij helpen u een strategie op te zetten om meer reviews te verzamelen.
          </p>
          <p>
            Of u nu een koffiezaak, een eetcafé, een sushi-restaurant of een fine dining
            gelegenheid heeft — wij bouwen een website die past bij de sfeer en doelgroep van
            uw zaak. Uw website weerspiegelt wie u bent.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Online menu met foto\'s en prijzen',
            'Reserveringssysteem 24/7',
            'Google Maps optimalisatie',
            'Reviews integratie',
            'Lokale SEO voor uw buurt',
            'Mobiel-vriendelijk en snel',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircleIcon className="size-4 text-indigo-500 shrink-0" />
              {f}
            </div>
          ))}
        </div>

        <div className="bg-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Meer gasten voor uw zaak?</h2>
          <p className="text-gray-600 mb-6">Vraag een gratis websitescan aan en ontdek wat er beter kan.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors">
              Gratis websitescan
            </Link>
            <Link href="/prijzen" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors">
              Bekijk prijzen
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
