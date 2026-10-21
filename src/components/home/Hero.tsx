import Image from 'next/image'
import Link from 'next/link'
import ScanLink from '@/components/ScanLink'
import { buttonVariants } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="hero-gradient overflow-hidden px-4 sm:px-6 lg:px-8 pt-10 pb-16 md:pt-16 md:pb-24 lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-ink">
            Website of app laten maken
          </h1>
          <p className="body-lg text-ink mt-5">Beter vindbaar in Google, volledig ontzorgd.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <ScanLink className={buttonVariants({ size: 'lg', className: 'w-full sm:w-auto' })}>
              Gratis websitescan aanvragen
            </ScanLink>
            <Link href="/prijzen" className={buttonVariants({ variant: 'secondary', size: 'lg', className: 'w-full sm:w-auto' })}>
              Bekijk de pakketten
            </Link>
          </div>
        </div>

        <div className="w-full max-w-sm sm:max-w-md lg:max-w-[480px] mx-auto lg:mx-0 lg:justify-self-end">
          <Image
            src="/images/home/hero-vrouw-laptop.webp"
            alt="Lachende vrouw met een laptop op kantoor"
            width={512}
            height={512}
            priority
            sizes="(min-width: 1024px) 480px, (min-width: 640px) 448px, 90vw"
            className="w-full h-auto aspect-square rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}
