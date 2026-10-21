import type { Metadata } from 'next'
import { PhoneIcon, MailIcon, MessageCircleIcon, ClockIcon } from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'
import ContactLink from '@/components/ContactLink'
import { ORG_ALTERNATE_NAME, ORG_ID, ORG_NAME, SITE_URL } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Contact & gratis websitescan | Elly Apps & Websites',
  description:
    'Vraag vrijblijvend een offerte of gratis websitescan aan. Bel, mail of stuur een WhatsApp — wij reageren binnen één werkdag. Websites vanaf €49 per maand.',
  alternates: { canonical: 'https://elly-apps.nl/contact' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/contact',
    title: 'Contact & gratis websitescan | Elly Apps & Websites',
    description: 'Vraag vrijblijvend een offerte of gratis websitescan aan. Bel, mail of stuur een WhatsApp — wij reageren binnen één werkdag. Websites vanaf €49 per maand.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact & gratis websitescan | Elly Apps & Websites',
    description: 'Vraag vrijblijvend een offerte of gratis websitescan aan. Bel, mail of stuur een WhatsApp — wij reageren binnen één werkdag. Websites vanaf €49 per maand.',
    images: ['/og-image.png'],
  },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: ORG_NAME,
    alternateName: ORG_ALTERNATE_NAME,
    url: SITE_URL,
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

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-12 md:pt-20 md:pb-16 bg-surface">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="h1 text-ink">Neem contact op</h1>
          <p className="body-lg text-muted mt-4">
            Wij reageren altijd binnen één werkdag.
          </p>
        </div>
      </section>

      <section className="section px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contactgegevens */}
          <div className="space-y-8">
            <div>
              <h2 className="h3 text-ink mb-5">Contactgegevens</h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center size-10 rounded-full bg-brand-tint shrink-0">
                    <PhoneIcon className="size-5 text-brand" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wide mb-0.5">Telefoon</p>
                    <ContactLink
                      type="phone"
                      location="contactpagina"
                      className="font-semibold text-ink hover:text-brand-strong transition-colors"
                    >
                      +31 6 36 27 85 15
                    </ContactLink>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center size-10 rounded-full bg-brand-tint shrink-0">
                    <MailIcon className="size-5 text-brand" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wide mb-0.5">E-mail</p>
                    <a
                      href="mailto:info@elly-apps.nl"
                      className="font-semibold text-ink hover:text-brand-strong transition-colors"
                    >
                      info@elly-apps.nl
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center size-10 rounded-full bg-success/10 shrink-0">
                    <MessageCircleIcon className="size-5 text-success" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wide mb-0.5">WhatsApp</p>
                    <ContactLink
                      type="whatsapp"
                      location="contactpagina"
                      className="font-semibold text-ink hover:text-success transition-colors"
                    >
                      Stuur een WhatsApp bericht
                    </ContactLink>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="h3 text-ink mb-4">Openingstijden</h2>
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center size-10 rounded-full bg-brand-tint shrink-0">
                  <ClockIcon className="size-5 text-brand" />
                </div>
                <div className="text-sm text-ink space-y-1">
                  <p>Maandag t/m vrijdag</p>
                  <p className="font-semibold text-ink">09:00 – 18:00</p>
                  <p className="text-muted">Buiten kantooruren kunt u een bericht sturen via WhatsApp of e-mail.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulier */}
          <div className="rounded-2xl border border-line bg-bg p-4 sm:p-8 shadow-lg">
            <h2 className="h3 text-ink mb-6">Stuur een bericht</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
