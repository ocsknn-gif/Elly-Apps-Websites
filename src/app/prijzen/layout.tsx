import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prijzen website laten maken | Elly Apps',
  description:
    'Bekijk de transparante prijzen van Elly Apps. Website laten maken vanaf €49 per maand. Geen verborgen kosten, vaste maandprijs.',
}

export default function PrijzenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
