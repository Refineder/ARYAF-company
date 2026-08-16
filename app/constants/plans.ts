export interface IPlan {
  id: string
  name: string
  price: string
  period: string
  description: string
  features: string[]
  advertisement?: string
}

export const PLANS: IPlan[] = [
  {
    id: 'starter',
    name: 'أساسي',
    price: '109',
    period: 'شهريًا',
    description: 'مثالية للمتاجر الصغيرة التي تبدأ رحلتها التجارية',
    features: ['3 متاجر', '1,000 منتج', 'تحليلات متقدمة'],
  },
  {
    id: 'growth',
    name: 'مجاني',
    price: '0',
    period: 'شهريًا',
    description: 'الأكثر شعبية للمتاجر النامية',
    features: ['متجر واحد', '100 منتج', 'تحليلات أساسية'],
  },
  {
    id: 'enterprise',
    name: 'مؤسسي',
    price: 'مخصص',
    period: 'شهريًا',
    description: 'حلول مخصصة للمؤسسات الكبرى',
    advertisement: 'خدمة VIP',
    features: ['متاجر غير محدودة', 'مدير مخصص', 'ضمان SLA'],
  },
  {
    id: 'professional',
    name: 'احترافي',
    price: '299',
    period: 'شهريًا',

    description: 'للمتاجر التي تسعى للتوسع والاحترافية',
    advertisement: 'الأكثر شعبية',
    features: ['10 متاجر', 'منتجات غير محدودة', 'رؤى بالذكاء الاصطناعي'],
  },
]
