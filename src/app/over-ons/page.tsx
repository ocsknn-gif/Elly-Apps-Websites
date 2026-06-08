import type { Metadata } from 'next'
import Link from 'next/link'
import { HeartIcon, UsersIcon, TargetIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Over ons | Elly Apps',
  description:
    'Elly Apps is opgericht door Omer Coskun in Aalsmeer. Wij bouwen betaalbare, professionele websites voor het MKB. Onze missie: elk bedrijf verdient een goede online aanwezigheid.',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Elly Apps',
  url: 'https://elly-apps.nl',
  email: 'info@elly-apps.nl',
  telephone: '+31636278515',
  founder: {
    '@type': 'Person',
    name: 'Omer Coskun',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Aalsmeer',
    addressCountry: 'NL',
  },
  description:
    'Elly Apps bouwt en beheert professionele websites voor het MKB. Betaalbaar, snel en volledig ontzorgd.',
}

const kernwaarden = [
  {
    icon: <HeartIcon className="size-7 text-indigo-600" />,
    title: 'Betaalbaar',
    description:
      'Wij geloven dat elke ondernemer recht heeft op een professionele online aanwezigheid, ongeacht het budget. Daarom bieden wij vaste, eerlijke maandprijzen zonder verborgen kosten.',
  },
  {
    icon: <UsersIcon className="size-7 text-indigo-600" />,
    title: 'Persoonlijk',
    description:
      'Bij Elly Apps bent u geen nummer. Wij werken nauw samen met elke klant, luisteren naar uw wensen en denken mee over de beste aanpak voor uw specifieke situatie.',
  },
  {
    icon: <TargetIcon className="size-7 text-indigo-600" />,
    title: 'Resultaatgericht',
    description:
      'Een mooie website is een middel, geen doel. Wij richten ons altijd op meetbare resultaten: meer bezoekers, meer leads en meer omzet voor uw bedrijf.',
  },
]

export default function OverOnsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Over Elly Apps</h1>
          <p className="mt-4 text-xl text-gray-600">
            Wij helpen het MKB groeien met een sterke online aanwezigheid.
          </p>
        </div>

        {/* Verhaal */}
        <section className="prose prose-lg max-w-none text-gray-700 space-y-5">
          <p>
            Elly Apps is opgericht door <strong>Omer Coskun</strong>, gevestigd in Aalsmeer. Na
            jarenlange ervaring in digitale dienstverlening zag Omer dat veel MKB-bedrijven
            worstelen met hetzelfde probleem: ze weten dat ze een goede website nodig hebben, maar
            vinden het te duur, te ingewikkeld of te tijdrovend om dit goed aan te pakken.
          </p>
          <p>
            Elly Apps is opgericht om dat te veranderen. Wij bouwen betaalbare, professionele
            websites voor ondernemers die gewoon goed gevonden willen worden — zonder zich zorgen
            te maken over techniek, hosting of updates. Wij ontzorgen u volledig, van het eerste
            gesprek tot de lancering en daarna.
          </p>
          <p>
            Onze missie is helder: <strong>elk bedrijf verdient een goede online aanwezigheid.</strong>{' '}
            Of u nu een eenmanszaak bent, een klein team heeft of een groeiend MKB-bedrijf runt —
            wij zorgen dat u online zichtbaar bent en gevonden wordt door de juiste klanten.
          </p>
          <p>
            Wij werken altijd persoonlijk, transparant en resultaatgericht. U heeft één vast
            aanspreekpunt, ontvangt duidelijke rapportages en weet altijd waar u aan toe bent.
          </p>
        </section>

        {/* Kernwaarden */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Onze kernwaarden</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {kernwaarden.map((w) => (
              <div
                key={w.title}
                className="text-center p-6 rounded-2xl border border-gray-100 shadow-sm"
              >
                <div className="inline-flex items-center justify-center size-12 rounded-full bg-indigo-100 mb-4">
                  {w.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{w.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{w.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-indigo-50 rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Klaar voor een kennismaking?</h2>
          <p className="text-gray-600 mb-6">
            Neem vrijblijvend contact op of vraag direct een gratis websitescan aan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gratis-websitescan"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
            >
              Gratis websitescan
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
