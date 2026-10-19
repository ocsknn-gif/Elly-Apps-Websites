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
      {/* Witte laag: mobiel egaal 90%, desktop alleen een lichte rand links (max. 30% breed) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-bg/90 lg:bg-transparent lg:bg-gradient-to-r lg:from-bg/60 lg:to-bg/0 lg:to-30%"
      />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-16 lg:items-center">
        <div>
          {/* Desktop: eigen, deels doorzichtige ondergrond per tekstblok, zodat de foto zichtbaar blijft */}
          <h1 className="h1 text-ink lg:w-fit lg:-mx-4 lg:px-4 lg:py-2 lg:rounded-xl lg:bg-bg/60 lg:backdrop-blur-sm">Een professionele website die gevonden wordt op Google</h1>
          <p className="body md:body-lg text-muted mt-3 md:mt-5 max-w-xl lg:w-fit lg:-mx-4 lg:px-4 lg:py-2 lg:rounded-xl lg:bg-bg/90 lg:backdrop-blur-sm">
            Wij bouwen en beheren uw website voor een vaste maandprijs. Vanaf €49 per maand.
          </p>
        </div>

        <div className="w-full max-w-md lg:justify-self-end">
          <div id="scan" className="scroll-mt-24 rounded-2xl border border-line bg-bg p-4 sm:p-6 shadow-lg">
            <WebsiteScanForm variant="compact" />
          </div>
          {/* Witte ondergrond: deze tekst staat over het beeld */}
          <div className="mt-3 rounded-xl bg-bg/95 px-4 py-3">
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
