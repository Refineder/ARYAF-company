
import { soluation } from '~/assets/images'
import type { TNameIcon } from '~/components/atoms/ARYAFIcon/Icons.vue'

export interface ISolutionFeature {
  icon: TNameIcon
  text: string
}

export interface ISolutionTab {
  label: string
  title: string
  description: string
  features: ISolutionFeature[]
  image: string
  buttonText: string
}

export const SOLUTION_TABS: ISolutionTab[] = [
  {
    label: 'إنشاء وتدشين المتجر',
    title: 'انطلاقتك سهلة حتى بانشغالك',
    description: 'لا تحتاج لخبرة سابقة أو تفرغ تام لتبدأ تجارتك مع ارياف',
    features: [
      { icon: 'heartGradient', text: 'إعداد متجرك خلال دقائق دون أي خبرة تقنية' },
      { icon: 'settingGradient', text: 'إدارة كاملة من لوحة تحكم بسيطة وسهلة' },
      { icon: 'usersGradient', text: 'فريق دعم يرشدك من أول خطوة حتى الإطلاق' },
    ],
    image: soluation,
    buttonText: 'أنشئ متجرك مجاناً',
  },
  {
    label: 'تصميم المتجر',
    title: 'متجر يعكس هوية علامتك التجارية',
    description: 'قوالب جاهزة وأدوات تخصيص مرنة لتبرز متجرك وتكسب ثقة عملائك',
    features: [
      { icon: 'storeGradient', text: 'قوالب جاهزة قابلة للتخصيص بالكامل' },
      { icon: 'glasess', text: 'واجهة متجاوبة تناسب جميع الأجهزة' },
      { icon: 'sizes', text: 'تحسين تجربة المستخدم وسهولة التصفح' },
    ],
    image: soluation,
    buttonText: 'صمم متجرك',
  },
  {
    label: 'الشحن والتوصيل',
    title: 'شحن يصل عميلك في كل مكان',
    description: 'شراكات مع شركات شحن موثوقة وأسعار تنافسية تكسب ثقة عميلك',
    features: [
      { icon: 'shop', text: 'شركاء شحن موثوقون بأسعار تنافسية' },
      { icon: 'creditCard', text: 'خيارات دفع مرنة تشمل الدفع عند الاستلام' },
      { icon: 'hashGradient', text: 'تتبع الطلبات لحظة بلحظة' },
    ],
    image: soluation,
    buttonText: 'فعّل الشحن',
  },
  {
    label: 'أدوات التسويق',
    title: 'كوّن جمهورك وحوّل زوارك لعملاء',
    description: 'أدوات تسويق مدمجة تساعدك على الوصول لجمهورك وزيادة مبيعاتك',
    features: [
      { icon: 'userGradient', text: 'حملات خصومات وكوبونات ذكية' },
      { icon: 'hashGradient', text: 'تقارير ومؤشرات أداء لحظية' },
      { icon: 'usersGradient', text: 'تكامل مع منصات التواصل الاجتماعي' },
    ],
    image: soluation,
    buttonText: 'ابدأ التسويق',
  },
  {
    label: 'التوسع',
    title: 'طوّر مشوارك التجاري بثقة',
    description: 'خطط مرنة وميزات متقدمة تسمح لمتجرك بالنمو دون قيود',
    features: [
      { icon: 'storeGradient', text: 'خطط تتناسب مع حجم مشروعك' },
      { icon: 'userGradient', text: 'لوحة تحكم متعددة للفروع والفريق' },
      { icon: 'settingGradient', text: 'أولوية دعم أعلى أثناء مرحلة النمو' },
    ],
    image: soluation,
    buttonText: 'توسّع الآن',
  },
]
