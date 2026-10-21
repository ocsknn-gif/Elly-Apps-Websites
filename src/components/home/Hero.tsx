import Image from 'next/image'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Link from 'next/link'
import ScanLink from '@/components/ScanLink'
import { buttonVariants } from '@/components/ui/button'

// Echte italic (alleen 600, latin) voor de slogan, zodat de browser geen nepschuine tekst maakt
const jakartaItalic = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: '600',
  style: 'italic',
  display: 'swap',
})

export function Hero() {
  return (
    <section className="hero-gradient overflow-hidden px-4 sm:px-6 lg:px-8 pt-7 md:pt-11 lg:pt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] xl:grid-cols-[minmax(0,1fr)_minmax(0,512px)] gap-8 lg:gap-16 lg:items-start">
        <div className="lg:pt-6 lg:pb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight text-ink text-balance">
            Website of app laten maken
          </h1>
          <p className={`${jakartaItalic.className} text-xl md:text-2xl text-ink mt-2 text-balance`}>
            Beter vindbaar in Google, volledig ontzorgd.
          </p>
          <p className="body-lg text-ink mt-5 max-w-xl">
            Wij bouwen en beheren websites en apps met AI, zodat u er zelf niets van hoeft te weten. Uw website staat gemiddeld binnen twee weken online, inclusief basis SEO.
          </p>
          <p className="body-lg font-bold text-ink mt-3 text-balance">Websites vanaf €49 per maand, excl. BTW.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <ScanLink className={buttonVariants({ size: 'lg', className: 'w-full sm:w-auto' })}>
              Gratis websitescan aanvragen
            </ScanLink>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg', className: 'w-full sm:w-auto' })}>
              Bekijk de pakketten
            </Link>
          </div>
        </div>

        <div className="w-full max-w-sm mx-auto lg:mx-0 lg:justify-self-end lg:self-end -mt-12 sm:max-w-[560px] lg:max-w-none lg:-mt-[105px] xl:-mt-[128px] pointer-events-none">
          <Image
            src="/images/home/hero-vrouw-vrijstaand.webp"
            alt="Lachende vrouw met een laptop op kantoor"
            width={640}
            height={640}
            priority
            sizes="(min-width: 1280px) 640px, (min-width: 1024px) 525px, (min-width: 640px) 560px, 125vw"
            className="block h-auto max-w-none w-[125%] sm:w-full lg:w-[125%]"
          />
        </div>
      </div>
    </section>
  )
}
