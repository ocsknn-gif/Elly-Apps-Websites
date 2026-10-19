import Link from 'next/link'
import { WebsiteScanForm } from '@/components/WebsiteScanForm'
import { buttonVariants } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="bg-surface px-4 sm:px-6 lg:px-8 pt-6 pb-12 md:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-16 lg:items-center">
        <div>
          <h1 className="h1 text-ink">Een professionele website die gevonden wordt op Google</h1>
          <p className="body md:body-lg text-muted mt-3 md:mt-5 max-w-xl">
            Wij bouwen en beheren uw website voor een vaste maandprijs. Vanaf €49 per maand.
          </p>
        </div>

        <div className="w-full max-w-md lg:justify-self-end">
          <div id="scan" className="scroll-mt-24 rounded-2xl border border-line bg-bg p-4 sm:p-6 shadow-lg">
            <WebsiteScanForm variant="compact" />
          </div>
          <p className="mt-3 text-sm text-muted">
            Gratis en vrijblijvend. Persoonlijk rapport binnen één werkdag.
          </p>
          <Link href="/prijzen" className={buttonVariants({ variant: 'link', className: 'mt-2 text-base' })}>
            Bekijk prijzen
          </Link>
        </div>
      </div>
    </section>
  )
}
