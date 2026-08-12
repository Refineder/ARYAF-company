import { elec1, elecPC, fashion, filePlan, homeCleaning, jewelry, skinCar } from '~/assets/images'

interface IExperience {
  title: string
  thumb: string
}

export const EXPERIENCE_DATA: IExperience[] = [
  {
    title: 'عبايات وازياء',
    thumb: fashion,
  },
  {
    title: 'المنتجات الرقميه',
    thumb: elecPC,
  },
  {
    title: 'الصحه واللياقه',
    thumb: filePlan,
  },
  {
    title: 'الالكترونيات',
    thumb: elec1,
  },
  {
    title: 'المجوهرات',
    thumb: jewelry,
  },
  {
    title: 'العنايه والتجميل',
    thumb: skinCar,
  },
  {
    title: 'مستلزمات المنزل',
    thumb: homeCleaning,
  },
]
