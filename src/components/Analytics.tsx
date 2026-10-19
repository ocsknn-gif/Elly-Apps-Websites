'use client'

import Script from 'next/script'
import { useCookieConsent } from '@/hooks/use-cookie-consent'

const GA_ID = 'G-YZJ22GGTS4'
const CLARITY_ID = 'wnxdne8bn4'

/**
 * Google Analytics 4 en Microsoft Clarity — alleen na "Accepteren" in de
 * cookiebanner. Zonder toestemming wordt er niets geladen en geen cookie gezet.
 */
export default function Analytics() {
  const { choice } = useCookieConsent()
  if (choice !== 'accepted') return null

  return (
    <>
      {/* gtag-wachtrij meteen klaarzetten, zodat events (bv. de leadconversie) niet verloren gaan terwijl gtag.js nog laadt */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
      <Script id="microsoft-clarity" strategy="lazyOnload">
        {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","${CLARITY_ID}");`}
      </Script>
    </>
  )
}
