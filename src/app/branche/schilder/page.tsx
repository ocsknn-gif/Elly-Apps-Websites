import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website laten maken voor schildersbedrijf | Meer opdrachten via Google | Elly Apps',
  description: 'Een professionele website voor uw schildersbedrijf zorgt dat klanten u vinden op Google. Elly Apps bouwt schilderswebsites met voor/na portfolio, online offertes en lokale SEO. Vraag gratis websitescan aan.',
  alternates: { canonical: 'https://elly-apps.nl/branche/schilder' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Kan ik voor/na foto\'s tonen op mijn website?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, absoluut. We bouwen een portfolio-sectie in uw website speciaal voor voor/na foto\'s van uw projecten. Bezoekers kunnen door uw werk bladeren en zien direct wat u in huis heeft.' },
    },
    {
      '@type': 'Question',
      name: 'Hoe vraag ik online offertes aan via mijn website?',
      acceptedAnswer: { '@type': 'Answer', text: 'We integreren een online offerteformulier in uw website. Potentiële klanten kunnen eenvoudig hun gegevens en wensen invullen. U ontvangt de aanvraag direct in uw e-mail.' },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een website voor een schildersbedrijf?',
      acceptedAnswer: { '@type': 'Answer', text: 'Een schilderswebsite via Elly Apps kost vanaf €49 per maand, inclusief ontwerp, hosting, lokale SEO en onderhoud.' },
    },
  ],
}

const faq = [
  { q: 'Kan ik voor/na foto\'s tonen op mijn website?', a: 'Ja, absoluut. We bouwen een portfolio-sectie in uw website speciaal voor voor/na foto\'s van uw projecten. Bezoekers kunnen door uw werk bladeren en zien direct wat u in huis heeft. Dit is het krachtigste conversiemiddel voor een schildersbedrijf — visueel bewijs overtuigt beter dan welke tekst dan ook.' },
  { q: 'Hoe vraag ik online offertes aan via mijn website?', a: 'We integreren een online offerteformulier in uw website. Potentiële klanten kunnen eenvoudig hun gegevens en wensen invullen. U ontvangt de aanvraag direct in uw e-mail en kunt snel reageren. Dit verlaagt de drempel voor klanten enorm en levert u meer kwalitatieve leads op.' },
  { q: 'Kan ik klantreviews tonen op mijn website?', a: 'Ja. We zorgen dat uw Google-reviews automatisch worden weergegeven op uw website. Positieve beoordelingen van eerdere klanten wekken vertrouwen en overtuigen twijfelaars om toch contact op te nemen.' },
  { q: 'Hoe zorg je dat ik gevonden word in mijn werkgebied?', a: 'We optimaliseren uw website specifiek voor de steden en regio\'s waar u actief bent. Voor elke stad voegen we een aparte pagina toe zodat u ook vindbaar bent op zoekopdrachten als "schilder Amsterdam" of "schildersbedrijf Utrecht".' },
  { q: 'Is een website voor een klein schildersbedrijf de investering waard?', a: 'Absoluut. Schilderswebsites via Elly Apps beginnen vanaf €49 per maand. De meeste klanten verdienen dit terug met één extra opdracht per maand. En doordat uw website 24/7 zichtbaar is, blijft het nieuwe opdrachten aantrekken.' },
  { q: 'Wat kost een website voor een schildersbedrijf?', a: 'Een schilderswebsite via Elly Apps kost vanaf €49 per maand. Dit is inclusief ontwerp, hosting, lokale SEO en onderhoud. Er zijn geen verborgen kosten.' },
  { q: 'Hoe snel kan mijn schilderswebsite online?', a: 'Gemiddeld staat uw website binnen 5 tot 10 werkdagen live. Na een kort intakegesprek verwerken wij alles voor u — inclusief uw portfolio, diensten en werkgebied.' },
]

export default function SchilderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div>
          <p className="text-sm text-[#E53E3E] font-medium mb-2">Branche</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Meer opdrachten voor uw schildersbedrijf via Google</h1>
          <p className="text-xl text-gray-600">Klanten vergelijken schilders online. Zorg dat uw werk voor zich spreekt — met een website die vindbaar is én converteert.</p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-5">
          <p>Wanneer iemand een schilder zoekt, gaat hij online op zoek naar voor/na foto&apos;s, reviews en een betrouwbare indruk. Ze typen &quot;schilder [stad]&quot; of &quot;schildersbedrijf [regio]&quot; en bellen de eerste die hen overtuigt. Als uw bedrijf niet op pagina 1 staat of geen professionele website heeft, gaat die opdracht naar een concurrent — zonder dat u het ooit weet.</p>
          <p>Een goede website voor een schildersbedrijf laat uw vakmanschap zien. Met een portfolio van eerder uitgevoerde projecten, een duidelijk overzicht van uw diensten en een online offerteformulier maakt u het potentiële klanten zo makkelijk mogelijk om voor u te kiezen.</p>
          <p>Elly Apps bouwt schilderswebsites die scoren op Google én opdrachten binnenhalen. Onze AI analyseert seizoenspatronen in zoekgedrag en past uw website daar automatisch op aan. In de zomer promoten we buitenschilderwerk, in de winter binnenschilderwerk. Zo blijft uw agenda het hele jaar door gevuld.</p>
          <p>Een professionele schilderswebsite via Elly Apps begint vanaf €49 per maand, inclusief portfolio, online offerteformulier, lokale SEO-optimalisatie en een klikbaar telefoonnummer. Geen verborgen kosten, geen technische zorgen.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Portfolio met voor/na foto\'s',
            'Online offerteformulier',
            'Google-reviews geïntegreerd',
            'Lokale SEO voor uw werkgebied',
            'Agenda het hele jaar gevuld',
            'Hosting, SSL en onderhoud inbegrepen',
            'Binnen 5-10 werkdagen live',
            'Persoonlijk contact en support',
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircleIcon className="size-4 text-[#E53E3E] shrink-0" />{f}
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Veelgestelde vragen</h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details key={i} className="border rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.q}
                  <span className="text-[#E53E3E] ml-2">+</span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="bg-[#f7f7f7] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Meer opdrachten via Google?</h2>
          <p className="text-gray-600 mb-6">Vraag een gratis websitescan aan en ontdek uw kansen als schildersbedrijf.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gratis-websitescan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold hover:bg-[#C53030] transition-colors">Gratis websitescan</Link>
            <Link href="/prijzen" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold hover:bg-red-50 transition-colors">Bekijk prijzen</Link>
          </div>
        </div>
      </div>
    </>
  )
}
