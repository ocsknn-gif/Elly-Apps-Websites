import type { Metadata } from 'next'
import { PhoneIcon, MailIcon, MessageCircleIcon, ClockIcon } from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Elly Apps',
  description:
    'Neem contact op met Elly Apps. Bel, mail of stuur een WhatsApp bericht. Wij reageren binnen één werkdag.',
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'Elly Apps',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+31636278515',
      email: 'info@elly-apps.nl',
      contactType: 'customer support',
      availableLanguage: 'Dutch',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    },
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Neem contact op</h1>
          <p className="mt-4 text-xl text-gray-600">
            Wij reageren altijd binnen één werkdag.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contactgegevens */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-5">Contactgegevens</h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center size-10 rounded-full bg-indigo-100 shrink-0">
                    <PhoneIcon className="size-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Telefoon</p>
                    <a
                      href="tel:+31636278515"
                      className="font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
                    >
                      +31 6 36 27 85 15
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center size-10 rounded-full bg-indigo-100 shrink-0">
                    <MailIcon className="size-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">E-mail</p>
                    <a
                      href="mailto:info@elly-apps.nl"
                      className="font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
                    >
                      info@elly-apps.nl
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center size-10 rounded-full bg-green-100 shrink-0">
                    <MessageCircleIcon className="size-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">WhatsApp</p>
                    <a
                      href="https://wa.me/31636278515"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-gray-900 hover:text-green-600 transition-colors"
                    >
                      Stuur een WhatsApp bericht
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Openingstijden</h2>
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center size-10 rounded-full bg-indigo-100 shrink-0">
                  <ClockIcon className="size-5 text-indigo-600" />
                </div>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>Maandag t/m vrijdag</p>
                  <p className="font-semibold text-gray-900">09:00 – 18:00</p>
                  <p className="text-gray-500">Buiten kantooruren kunt u een bericht sturen via WhatsApp of e-mail.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulier */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Stuur een bericht</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}
