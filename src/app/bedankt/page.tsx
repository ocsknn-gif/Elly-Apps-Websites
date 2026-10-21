import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2Icon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import LeadConversion from '@/components/LeadConversion'

export const metadata: Metadata = {
  title: 'Bedankt voor uw aanvraag | Elly Apps',
  description: 'Bedankt! U ontvangt binnen één werkdag een persoonlijke reactie van ons.',
  alternates: { canonical: 'https://elly-apps.nl/bedankt' },
  openGraph: {
    type: 'website',
    url: 'https://elly-apps.nl/bedankt',
    title: 'Bedankt voor uw aanvraag | Elly Apps',
    description: 'Bedankt! U ontvangt binnen één werkdag een persoonlijke reactie van ons.',
    siteName: 'Elly Apps & Websites',
    locale: 'nl_NL',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Elly Apps & Websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bedankt voor uw aanvraag | Elly Apps',
    description: 'Bedankt! U ontvangt binnen één werkdag een persoonlijke reactie van ons.',
    images: ['/og-image.png'],
  },
}

const steps = [
  'Wij bekijken uw aanvraag vandaag nog',
  'Wij nemen binnen één werkdag persoonlijk contact op',
  'U ontvangt een vrijblijvende offerte op maat',
]

export default function BedanktPage() {
  return (
    <section className="section min-h-[60vh] flex items-center px-4 sm:px-6 lg:px-8 bg-surface">
      <LeadConversion />
      <div className="max-w-xl mx-auto text-center w-full">
        <CheckCircle2Icon className="size-14 text-success mx-auto mb-4" aria-hidden="true" />
        <h1 className="h1 text-ink mb-4">Bedankt voor uw aanvraag!</h1>
        <p className="body-lg text-muted mb-6">U ontvangt binnen één werkdag een persoonlijke reactie van ons.</p>

        <div className="rounded-2xl border border-line bg-bg shadow-sm p-6 text-left mb-8">
          <h2 className="h3 text-ink mb-4">Wat gebeurt er nu?</h2>
          <ol className="space-y-3">
            {steps.map((s, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="bg-brand-strong text-white size-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                <span className="body text-ink">{s}</span>
              </li>
            ))}
          </ol>
        </div>

        <Link href="/" className={buttonVariants()}>
          Terug naar de homepage
        </Link>

        <div className="mt-8">
          <p className="text-sm text-muted mb-3">Volg ons op social media</p>
          <div className="flex justify-center gap-4">
            {['LinkedIn', 'Instagram', 'TikTok'].map((s) => (
              <a key={s} href="#" className="text-brand-strong hover:underline text-sm font-semibold">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
