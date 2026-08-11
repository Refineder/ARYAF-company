import {
  aromaticLogo,
  blackLogo,
  entajLogo,
  gameLogo,
  milafLogo,
  obekonLogo,
  qormuzLogo,
  rashofLogo,
  reefiLogo,
  sayyarLogo,
  sportLogo,
  surgeLogo,
  teatLogo,
} from '~/assets/images'

export interface IMarqueeLogo {
  src: string
  alt: string
}

export const MARQUEE_LOGOS: IMarqueeLogo[] = [
  { src: aromaticLogo, alt: 'Aromatic' },
  { src: blackLogo, alt: 'Black' },
  { src: entajLogo, alt: 'Entaj' },
  { src: gameLogo, alt: 'Game' },
  { src: milafLogo, alt: 'Milaf' },
  { src: obekonLogo, alt: 'Obekon' },
  { src: qormuzLogo, alt: 'Qormuz' },
  { src: rashofLogo, alt: 'Rashof' },
  { src: reefiLogo, alt: 'Reefi' },
  { src: sayyarLogo, alt: 'Sayyar' },
  { src: sportLogo, alt: 'Sport' },
  { src: surgeLogo, alt: 'Surge' },
  { src: teatLogo, alt: 'Teat' },
]
