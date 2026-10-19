import Image from 'next/image'
import Link from 'next/link'
import { WebsiteScanForm } from '@/components/WebsiteScanForm'
import { buttonVariants } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface px-4 sm:px-6 lg:px-8 pt-6 pb-12 md:py-20 lg:py-24">
      {/* Achtergrondbeeld — het enige beeld met priority op de site */}
      <Image
        src="/images/hero-team.webp"
        alt="Ondernemers werken samen aan hun website"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Witte laag voor leesbaarheid: mobiel egaal, desktop van links (wit) naar rechts (doorzichtig) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-bg/90 lg:bg-transparent lg:bg-gradient-to-r lg:from-bg lg:from-25% lg:via-bg/90 lg:via-50% lg:to-bg/0 lg:to-75%"
      />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-16 lg:items-center">
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
          {/* Witte ondergrond: deze tekst staat over het beeld */}
          <div className="mt-3 rounded-xl bg-bg/90 px-4 py-3">
            <p className="text-sm text-muted">
              Gratis en vrijblijvend. Persoonlijk rapport binnen één werkdag.
            </p>
            <Link href="/prijzen" className={buttonVariants({ variant: 'link', className: 'mt-2 text-base' })}>
              Bekijk prijzen
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
