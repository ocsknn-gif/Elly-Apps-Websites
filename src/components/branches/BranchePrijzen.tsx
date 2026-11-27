import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { websitePakketten } from '@/lib/pakketten'

/** Prijsblok op branchepagina's. Bedragen en inhoud komen uit dezelfde bron als /prijzen. */
export function BranchePrijzen({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="section px-4 sm:px-6 lg:px-8 bg-bg" aria-labelledby="prijs-titel">
      <div className="max-w-4xl mx-auto">
        <h2 id="prijs-titel" className="h2 text-ink mb-3">{title}</h2>
        <p className="body text-muted mb-6">{children}</p>
        <div className="grid gap-4 md:grid-cols-3">
          {websitePakketten.map((p) => (
            <div key={p.naam} className="rounded-2xl border border-line bg-bg shadow-sm p-5">
              <h3 className="h3 text-ink">{p.naam}</h3>
              <p className="body font-bold text-ink mt-2">
                {p.maandprijs === null ? 'Maandprijs op aanvraag' : `${p.prijs} per maand`}
              </p>
              <p className="text-sm text-muted">{p.eenmalig.split(' · ')[0]}</p>
              <ul className="mt-4 space-y-1 text-sm text-muted list-disc pl-5">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted mt-4 mb-6">Alle prijzen zijn exclusief BTW.</p>
        <Link href="/prijzen" className={buttonVariants()}>
          Bekijk alle pakketten en prijzen
        </Link>
      </div>
    </section>
  )
}
