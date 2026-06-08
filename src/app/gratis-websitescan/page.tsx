import type { Metadata } from 'next'
import { SearchIcon, ZapIcon, SmartphoneIcon } from 'lucide-react'
import { WebsiteScanForm } from '@/components/WebsiteScanForm'

export const metadata: Metadata = {
  title: 'Gratis websitescan | Elly Apps',
  description:
    'Ontvang gratis een professionele websitescan van Elly Apps. Wij analyseren uw SEO, snelheid en mobiele weergave en adviseren u zonder verplichtingen.',
}

const checks = [
  {
    icon: <SearchIcon className="size-6 text-indigo-600" />,
    title: 'SEO-check',
    description:
      'Wij analyseren hoe goed uw website scoort op zoekmachines. Denk aan zoekwoorden, metateksten, interne links en technische SEO-factoren die invloed hebben op uw positie in Google.',
  },
  {
    icon: <ZapIcon className="size-6 text-indigo-600" />,
    title: 'Snelheidstest',
    description:
      'Een trage website kost u bezoekers én Google-posities. Wij meten de laadsnelheid van uw website op desktop en mobiel en geven concrete aanbevelingen voor verbetering.',
  },
  {
    icon: <SmartphoneIcon className="size-6 text-indigo-600" />,
    title: 'Mobiel-vriendelijk check',
    description:
      'Meer dan de helft van alle websitebezoeken komt van een smartphone. Wij controleren of uw website correct wordt weergegeven op alle schermformaten en of de gebruikerservaring optimaal is.',
  },
]

export default function GratisWebsitescanPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          Ontvang gratis een professionele websitescan
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          Wij analyseren uw website op SEO, snelheid en mobiele weergave — kosteloos en
          vrijblijvend. U ontvangt binnen één werkdag een persoonlijk rapport.
        </p>
      </div>

      {/* Wat houdt de scan in */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          Wat houdt de scan in?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {checks.map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
            >
              <div className="inline-flex items-center justify-center size-11 rounded-full bg-indigo-100 mb-4">
                {c.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{c.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Formulier */}
      <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Vul uw gegevens in
        </h2>
        <WebsiteScanForm />
      </div>
    </div>
  )
}
