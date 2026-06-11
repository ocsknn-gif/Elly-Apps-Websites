import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Goedkope website laten maken: wat is slim en wat niet? | Elly Apps',
  description:
    'Op zoek naar een goedkope website? Wij leggen uit wat u kunt verwachten bij een laag budget, waar de valkuilen zitten en hoe u betaalbaar toch professioneel kunt zijn.',
  alternates: { canonical: 'https://elly-apps.nl/blog/goedkope-website' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Goedkope website laten maken: wat is slim en wat niet?',
  description: 'Op zoek naar een goedkope website? Ontdek wat u kunt verwachten en waar de valkuilen zitten.',
  author: { '@type': 'Organization', name: 'Elly Apps' },
  publisher: { '@type': 'Organization', name: 'Elly Apps', url: 'https://elly-apps.nl' },
  datePublished: '2026-06-09',
  url: 'https://elly-apps.nl/blog/goedkope-website',
}

export default function GoedkopeWebsitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-gray prose-lg max-w-none">
        <Link href="/blog" className="text-sm text-[#E53E3E] hover:underline not-prose">
          ← Terug naar blog
        </Link>

        <h1 className="text-4xl font-extrabold text-gray-900 mt-6 mb-4">
          Goedkope website laten maken: wat is slim en wat niet?
        </h1>
        <p className="text-gray-500 text-sm mb-8">Gepubliceerd op 9 juni 2026 door Elly Apps</p>

        <p>
          Iedereen wil een goede website voor een lage prijs. Dat is begrijpelijk — zeker als
          u een startende ondernemer bent of een klein bedrijf runt met een beperkt budget.
          Maar wat krijgt u eigenlijk als u kiest voor de goedkoopste aanbieder? En wanneer
          is goedkoop uiteindelijk duurkoop? In dit artikel geven wij u een eerlijk beeld.
        </p>

        <h2>Wat bedoelen mensen met een goedkope website?</h2>
        <p>
          Als ondernemers zoeken op &ldquo;goedkope website laten maken&rdquo;, bedoelen ze doorgaans een
          professioneel ogende website voor zo min mogelijk geld. Het budget varieert, maar
          veelal gaat het om een eenmalig bedrag onder de €500 of een maandprijs onder de €50.
          De vraag is: is dat realistisch voor een website die ook écht werkt voor uw bedrijf?
        </p>
        <p>
          Het antwoord is: ja, mits u weet wat u krijgt en wat u inlevert. Er zijn drie
          verschillende soorten &ldquo;goedkope&rdquo; websites, elk met hun eigen voor- en nadelen.
        </p>

        <h2>Optie 1: Zelf bouwen via een websitebouwer</h2>
        <p>
          Platforms zoals Wix, Squarespace of Jimdo bieden kant-en-klare templates waarmee u
          zelf een website in elkaar kunt zetten. De kosten liggen tussen de €10 en €30 per
          maand. Dit klinkt aantrekkelijk, maar er zijn serieuze beperkingen.
        </p>
        <ul>
          <li><strong>Beperkte SEO:</strong> Deze platforms genereren code die minder goed leesbaar is voor Google. U bouwt structureel een achterstand op ten opzichte van concurrenten met een professionele website.</li>
          <li><strong>Geen maatwerk:</strong> U zit vast aan de mogelijkheden van het platform. Wilt u iets speciaals? Dan kan het vaak niet of tegen extra kosten.</li>
          <li><strong>Platformafhankelijkheid:</strong> Uw website staat op hun server, in hun systeem. Als het platform verdwijnt of de prijs verdubbelt, bent u afhankelijk.</li>
          <li><strong>Tijdsinvestering:</strong> U bouwt de website zelf. Dat kost uren die u niet aan uw bedrijf besteedt.</li>
        </ul>
        <p>
          Conclusie: voor een tijdelijk project of een zeer eenvoudige online visitekaartje kan
          een websitebouwer volstaan. Voor een serieuze zakelijke website waarbij Google-vindbaarheid
          belangrijk is, raden wij dit af.
        </p>

        <h2>Optie 2: Goedkoop uitbesteden via freelance platformen</h2>
        <p>
          Op platforms zoals Fiverr of Upwork kunt u voor een paar honderd euro een website
          laten bouwen door een freelancer, vaak uit het buitenland. De kwaliteit varieert enorm.
          Soms krijgt u een nette website, maar vaak mist het de technische SEO-basis, is de
          laadtijd slecht of is de code van lage kwaliteit waardoor aanpassingen later duur worden.
        </p>
        <p>
          Bovendien is er na de oplevering geen doorlopend onderhoud. Updates, beveiligingsproblemen
          en technische fouten zijn dan voor uw eigen rekening — en als u de bouwer opnieuw nodig
          heeft, start de kost opnieuw.
        </p>

        <h2>Optie 3: Betaalbaar uitbesteden aan een professioneel bureau</h2>
        <p>
          Er is een derde weg: een professioneel bureau dat betaalbare pakketten aanbiedt voor
          het MKB. Geen eenmalige bouw met een grote factuur, maar een transparant abonnementsmodel
          waarbij u een vaste maandprijs betaalt voor een complete website inclusief hosting,
          onderhoud en SEO-basis.
        </p>
        <p>
          Dit is precies wat Elly Apps doet. Voor €299 setup en €49 per maand heeft u een
          professionele, SEO-geoptimaliseerde website die wij volledig beheren. Geen verrassingen,
          geen losse facturen voor elke aanpassing, geen technische zorgen. U betaalt een eerlijke
          prijs voor een complete dienst.
        </p>

        <h2>Waar moet u op letten bij een goedkope website?</h2>
        <p>
          Of u nu kiest voor een goedkope oplossing of een betaalbaar bureau — let altijd op
          de volgende punten:
        </p>
        <ul>
          <li><strong>Is SEO inbegrepen?</strong> Een website zonder basis SEO wordt nauwelijks gevonden op Google. Dit is geen luxe maar een noodzaak.</li>
          <li><strong>Wie beheert de hosting?</strong> Hosting, SSL-certificaten en technische updates moeten geregeld zijn. Anders gaat uw website op een dag offline.</li>
          <li><strong>Is de website mobielvriendelijk?</strong> Meer dan 60% van het webverkeer komt van mobiele apparaten. Een website die er slecht uitziet op een telefoon kost u klanten.</li>
          <li><strong>Wie heeft toegang tot uw domein?</strong> Zorg dat uw domeinnaam op uw eigen naam staat, niet op die van de bouwer.</li>
          <li><strong>Is er ondersteuning na oplevering?</strong> Vraag altijd wie u kunt bellen als er iets misgaat.</li>
        </ul>

        <h2>Conclusie</h2>
        <p>
          Een goedkope website hoeft niet slecht te zijn — maar u moet weten wat u krijgt.
          De goedkoopste opties leveren vaak in op SEO, kwaliteit of beheer. Een slimme keuze
          is een betaalbaar abonnementsmodel bij een professioneel bureau, waarbij u voor een
          lage vaste maandprijs een complete en goed presterende website heeft. Dat is op de
          lange termijn zowel goedkoper als effectiever.
        </p>

        <div className="not-prose mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/prijzen"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E53E3E] text-white font-semibold text-sm hover:bg-[#C53030] transition-colors"
          >
            Bekijk onze pakketten
          </Link>
          <Link
            href="/gratis-websitescan"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#E53E3E] text-[#E53E3E] font-semibold text-sm hover:bg-red-50 transition-colors"
          >
            Gratis websitescan aanvragen
          </Link>
        </div>
      </article>
    </>
  )
}
