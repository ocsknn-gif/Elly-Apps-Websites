import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website laten maken voor tandartsen | Elly Apps',
  description:
    'Professionele website voor uw tandartspraktijk. Online afspraken, behandelingsoverzicht en vertrouwen opbouwen bij nieuwe patiënten. Vanaf €49/maand.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Elly Apps — Websites voor tandartsen',
  url: 'https://elly-apps.nl/branche/tandarts',
  description: 'Professionele websites voor tandartspraktijken, inclusief online afspraken en patiënteninfo.',
}

export default function TandartsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div>
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Branche</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Website laten maken voor tandartsen
          </h1>
          <p className="text-xl text-gray-600">
            Nieuwe patiënten online aantrekken, afspraken digitaal laten plannen en vertrouwen
            wekken — dat is wat een goede tandartsenwebsite voor u doet.
          </p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>
            Mensen die op zoek zijn naar een nieuwe tandarts beginnen hun zoektocht online.
            Ze kijken naar de praktijk, het team, de behandelingen die worden aangeboden en
            de ervaringen van andere patiënten. Een professionele, overzichtelijke website
            wekt vertrouwen — en dat is in de zorg misschien wel het allerbelangrijkste.
          </p>
          <p>
            Elly Apps bouwt tandartsenwebsites die nieuwe patiënten overtuigen en bestaande
            patiënten goed informeren. Wij presenteren uw behandelingsaanbod helder: van
            reguliere controles en vullingen tot orthodontie, implantaten en bleekbehandelingen.
            Een duidelijk behandelingsoverzicht met uitleg vermindert drempelvrees en helpt
            patiënten te begrijpen wat ze kunnen verwachten.
          </p>
          <p>
            Online afspraken plannen is voor patiënten een groot gemak. Wij integreren een
            afsprakensysteem in uw website waarmee patiënten 24/7 een afspraak kunnen inplannen.
            Automatische bevestigingen en herinneringen per e-mail of SMS verminderen het aantal
            no-shows en ontlasten uw receptie.
          </p>
          <p>
            Het team is het gezicht van uw praktijk. Wij bouwen een teampagina met foto's en
            korte introducties van uw tandartsen en medewerkers. Dit maakt uw praktijk persoonlijk
            en toegankelijk, wat de drempel verlaagt voor mensen die anders misschien uitstellen.
          </p>
          <p>
            Lokale SEO zorgt dat nieuwe patiënten in uw regio u vinden via Google. Zoekopdrachten
            als "tandarts [stad]" of "tandarts nieuw patiënt accepteren [wijk]" zijn voor uw
            praktijk zeer waardevol. Wij optimaliseren uw website en Google Business Profile
            zodat u precies op die momenten zichtbaar bent.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Online afspraken plannen',
            'Behandelingsoverzicht met uitleg',
            'Teampagina met foto\'s',
            'Lokale SEO voor uw regio',
            'Google Business optimalisatie',
            'AVG-conforme contactformulieren',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />
              {f}
            </div>
          ))}
        </div>

        <div className="bg-[#f7f7f7] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Meer nieuwe patiënten?</h2>
          <p className="text-gray-600 mb-6">Vraag een gratis websitescan aan en ontdek uw online kansen.</p>
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
