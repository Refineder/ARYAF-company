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
    title: 'لأصحاب المحلّات',
    description:
      'اسمح لكل العالم يشوفك وتوّسع لمتجرإلكتروني، سواءً تملك فروع لتجارتك أو صاحببوث في بازار، زد بتوصّلك للتوّسع الناجح.',
    thumb: commerceDevelop,
  },
  {
    title: 'لأصحاب المتاجر الإلكترونية',
    description:
      'تجارتك في أيدي محترفة، نضمن لك أفضل لأدوات والحلول المُبتكرة اللي بتسهّل إدارة متجرك وتزيد الأصفار في أرباحك.',
    thumb: commerceArrow,
  },
  {
    title: 'لأصحاب المتاجر الكبيرة',
    description:
      'جاهز تغيّر قواعد اللعبة؟ حلولنا التقنية الشاملة ودعم الخبراء المتواصل بيساعد  ترفع المعايير على منافسينك وترضي كل',
    thumb: commerceAim,
  },
]
