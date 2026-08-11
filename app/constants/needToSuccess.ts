import { Bot, Building2, CreditCard, Globe, Sparkles, Truck } from 'lucide-vue-next'
import type { Component } from 'vue'

interface TCard {
  title: string
  description: string
  icon: Component
  bgGradient: string
}

export const CARD_SUCCESS_DATA: TCard[] = [
  {
    title: 'منشئ المتاجر بالذكاء الاصطناعي',
    description: 'منشئ المتاجر بالذكاء الاصطناعي',
    icon: Sparkles,
    bgGradient: 'gradient-bg-pink',
  },
  {
    title: 'بوابات دفع الشرق الأوسط',
    description:
      'تكاملات مباشرة مع مدى وSTC Pay وتابي وتمارة وجميع مزودي الدفع الكبار في دول الخليج.',
    icon: CreditCard,
    bgGradient: 'gradient-bg-cyan',
  },
  {
    title: 'محرك الشحن الخليجي',
    description:
      'توجيه ذكي مع أرامكس وSMSA وSPL وDHL. تسليم في نفس اليوم وتحسين خيار الدفع عند الاستلام.',
    icon: Truck,
    bgGradient: 'gradient-bg-emerald',
  },
  {
    title: 'تجارة B2B للمؤسسات',
    description: 'تسعير متدرج وطلبات عروض الأسعار وموافقات الشراء وتكامل ERP وبوابات الموزعين.',
    icon: Building2,
    bgGradient: 'gradient-bg-orange',
  },
  {
    title: 'التوسع في دول الخليج',
    description:
      'أطلق متاجرك في السعودية والإمارات وقطر والكويت من لوحة تحكم واحدة مع التوطين الكامل.',
    icon: Globe,
    bgGradient: 'gradient-bg-violet',
  },
  {
    title: 'مساعد التجارة بالذكاء الاصطناعي',
    description:
      'وصف المنتجات والترجمة العربية والردود عبر واتساب وتوقع المخزون كلها مدعومة بالذكاء الاصطناعي.',
    icon: Bot,
    bgGradient: 'gradient-bg-violet-light',
  },
]
