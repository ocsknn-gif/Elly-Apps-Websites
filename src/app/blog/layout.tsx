import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Elly Apps — Tips over websites, SEO en online marketing',
  description:
    'Praktische tips en inzichten over websites, SEO, Google Ads en online marketing voor het MKB. Lees de laatste artikelen van Elly Apps.',
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
