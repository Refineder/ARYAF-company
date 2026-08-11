import { commerceAim, commerceArrow, commerceDevelop, commerceIdea } from '~/assets/images'

interface ICommerce {
  title: string
  description: string
  thumb: string
}

export const COMMERCE_DATA: ICommerce[] = [
  {
    title: 'لأصحاب الأفكار الطموحة',
    description: 'لأصحاب الأفكار الطموحة لأصحاب الأفكار الطموحة لأصحاب الأفكار الطموحة',
    thumb: commerceIdea,
  },
  {
    title: 'لأصحاب الأفكار الطموحة',
    description: 'لأصحاب الأفكار الطموحة لأصحاب الأفكار الطموحة لأصحاب الأفكار الطموحة',
    thumb: commerceDevelop,
  },
  {
    title: 'لأصحاب الأفكار الطموحة',
    description: 'لأصحاب الأفكار الطموحة لأصحاب الأفكار الطموحة لأصحاب الأفكار الطموحة',
    thumb: commerceArrow,
  },
  {
    title: 'لأصحاب الأفكار الطموحة',
    description: 'لأصحاب الأفكار الطموحة لأصحاب الأفكار الطموحة لأصحاب الأفكار الطموحة',
    thumb: commerceAim,
  },
]
