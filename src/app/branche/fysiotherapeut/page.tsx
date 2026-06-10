import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website laten maken voor fysiotherapeuten | Elly Apps',
  description:
    'Professionele website voor uw fysiotherapiepraktijk. Online afspraken, behandelingsinfo en lokale vindbaarheid. Vanaf €49/maand volledig beheerd.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Elly Apps — Websites voor fysiotherapeuten',
  url: 'https://elly-apps.nl/branche/fysiotherapeut',
  description: 'Professionele websites voor fysiotherapiepraktijken, inclusief online afspraken en behandelingsinfo.',
}

export default function FysiotherapeutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div>
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Branche</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Website laten maken voor fysiotherapeuten
          </h1>
          <p className="text-xl text-gray-600">
            Meer directe patiënten aantrekken, verwijzingen faciliteren en uw behandelingsaanbod
            helder presenteren — met een professionele website.
          </p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>
            De fysiotherapiemarkt is competitief. Patiënten hebben steeds vaker de vrijheid om
            zelf een fysiotherapeut te kiezen, ook zonder verwijzing. Dat betekent dat uw online
            zichtbaarheid directe invloed heeft op het aantal nieuwe patiënten dat uw praktijk
            binnenkomt. Een professionele, informatieve website is daarvoor onmisbaar.
          </p>
          <p>
            Elly Apps bouwt fysiotherapiewebsites die patiënten informeren en overtuigen. Wij
            presenteren uw behandelingsaanbod helder: van sportfysiotherapie en manuele therapie
            tot bekkenfysiotherapie en geriatrie. Een duidelijke uitleg van elke behandeling —
            inclusief voor wie het geschikt is en wat patiënten kunnen verwachten — verlaagt de
            drempel en verhoogt het vertrouwen.
          </p>
          <p>
            Online afspraken maken is voor patiënten een groot gemak. Wij integreren een
            afsprakensysteem waarmee patiënten eenvoudig een eerste consult of vervolgafspraak
            inplannen. Dit ontlast uw receptie en zorgt voor minder no-shows dankzij automatische
            herinneringen.
          </p>
          <p>
            Verwijzingen van huisartsen en specialisten zijn voor veel fysiotherapeuten een
            belangrijke bron van nieuwe patiënten. Wij bouwen een professionele website die ook
            voor verwijzers overtuigend is: met duidelijke specialisaties, een teampagina en
            uw samenwerkingspartners. Een goede website versterkt uw positie als betrouwbare
            partner in het zorgnetwerk.
          </p>
          <p>
            Lokale SEO is essentieel. Zoekopdrachten als "fysiotherapeut [stad]" of "fysiotherapie
            rugklachten [regio]" leveren directe nieuwe patiënten op. Wij optimaliseren uw website
            en Google Business Profile zodat u op de juiste momenten zichtbaar bent.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Online afspraken plannen',
            'Behandelingsoverzicht per specialisatie',
            'Teampagina en specialisaties',
            'Lokale SEO voor uw regio',
            'Verwijzers-sectie',
            'AVG-conforme formulieren',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />
              {f}
            </div>
          ))}
        </div>

        <div className="bg-[#f7f7f7] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Meer directe patiënten?</h2>
          <p className="text-gray-600 mb-6">Vraag een gratis websitescan aan en ontdek uw online groeipotentieel.</p>
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
