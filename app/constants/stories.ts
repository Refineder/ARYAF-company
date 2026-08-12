import { story1, story2 } from '~/assets/images'

export interface IStory {
  id: number
  title: string
  quote: string
  rating: number
  author: string
  date: string
  avatarText: string
  image: string
}

export const STORIES: IStory[] = [
  {
    id: 1,
    title: 'من إدارة الطلبات في الواتس إلى إدارة متكاملة بلوحة واحدة',
    quote:
      '"أرياف ساعدني في إطلاق متجر الأزياء الخاص بي في دقائق. الذكاء الاصطناعي فهم تماماً ما أريد. التصميم النهائي كان أفضل مما تخيلت!"',
    rating: 5,
    author: 'حسين الخالدي',
    date: 'December 2025',
    avatarText: 'ح',
    image: story1,
  },
  {
    id: 2,
    title: 'نمو المبيعات بنسبة 200% بعد التحول الكامل لأرياف',
    quote:
      '"ربط الشحن والتوصيل مع خيارات الدفع الذكية سهّل على عملائنا الشراء، وزادت المبيعات بفضل أدوات التسويق المتميزة."',
    rating: 5,
    author: 'سارة الشمري',
    date: 'January 2026',
    avatarText: 'س',
    image: story2,
  },
  {
    id: 3,
    title: 'تخصيص متجر الهدايا بالكامل دون الحاجة لمبرمج',
    quote:
      '"القوالب وأدوات التخصيص السلسة أتاحت لنا بناء متجر إلكتروني احترافي يعكس هوية براندنا بأقل جهد وتكلفة."',
    rating: 5,
    author: 'عبدالله القحطاني',
    date: 'February 2026',
    avatarText: 'ع',
    image: story1,
  },
  {
    id: 4,
    title: 'إدارة مخزون وفروع متعددة بكل سهولة وسلاسة',
    quote:
      '"لوحة التحكم الشاملة مكّنتنا من متابعة جميع الفروع والطلبات لحظة بلحظة وبدقة عالية دون أي تعقيد."',
    rating: 5,
    author: 'ريما العتيبي',
    date: 'March 2026',
    avatarText: 'ر',
    image: story2,
  },
]
