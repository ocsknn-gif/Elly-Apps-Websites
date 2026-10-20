import {
  ScissorsIcon,
  UtensilsCrossedIcon,
  WrenchIcon,
  SmileIcon,
  ActivityIcon,
  HardHatIcon,
  CarIcon,
  PaintRollerIcon,
  BeerIcon,
  CalculatorIcon,
  type LucideIcon,
} from 'lucide-react'

export type Branche = { icon: LucideIcon; label: string; slug: string; alt: string }

// Foto per branche: public/images/branches/<slug>.webp (800px breed, 4:3-uitsnede gebeurt via CSS).
// Ontbreekt het bestand, dan toont de kaart de beeldplek. Bestand toevoegen + opnieuw builden is genoeg.
const alleBranches: Branche[] = [
  { icon: ScissorsIcon, label: 'Kapper', slug: 'kapper', alt: 'Moderne kapsalon' },
  { icon: UtensilsCrossedIcon, label: 'Restaurant', slug: 'restaurant', alt: 'Gezellig restaurant met gedekte tafels' },
  { icon: WrenchIcon, label: 'Loodgieter', slug: 'loodgieter', alt: 'Loodgieter repareert de afvoer onder een wastafel' },
  { icon: SmileIcon, label: 'Tandarts', slug: 'tandarts', alt: 'Moderne tandartspraktijk' },
  { icon: ActivityIcon, label: 'Fysiotherapeut', slug: 'fysiotherapeut', alt: 'Fysiotherapeut behandelt een patiënt' },
  { icon: HardHatIcon, label: 'Bouwbedrijf', slug: 'bouwbedrijf', alt: 'Bouwplaats met helm en bouwtekening' },
  { icon: CarIcon, label: 'Rijschool', slug: 'rijschool', alt: 'Rijles vanuit de bestuurdersstoel' },
  { icon: PaintRollerIcon, label: 'Schilder', slug: 'schilder', alt: 'Schilder rolt een muur in de verf' },
  { icon: BeerIcon, label: 'Horeca', slug: 'horeca', alt: 'Horecazaak met bediening en gasten aan houten tafels' },
  {
    icon: CalculatorIcon,
    label: 'Accountantskantoor',
    slug: 'accountantskantoor',
    alt: 'Kantoor met laptop vol grafieken en een accountant die papieren bekijkt',
  },
]

function kies(slugs: string[]): Branche[] {
  return slugs.map((slug) => alleBranches.find((b) => b.slug === slug)!)
}

export const homeBranches = kies([
  'kapper', 'restaurant', 'loodgieter', 'tandarts', 'fysiotherapeut', 'bouwbedrijf', 'rijschool', 'schilder',
])

export const overzichtBranches = kies([
  'loodgieter', 'kapper', 'restaurant', 'tandarts', 'fysiotherapeut', 'horeca', 'accountantskantoor', 'bouwbedrijf', 'rijschool',
])
