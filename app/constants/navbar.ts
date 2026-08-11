export type TNavIcon =
  | 'store'
  | 'credit-card'
  | 'boxes'
  | 'truck'
  | 'megaphone'
  | 'gift'
  | 'messages-square'
  | 'trending-up'
  | 'banknote'
  | 'package-check'
  | 'settings2'
  | 'users'
  | 'sparkles'
  | 'cog'
  | 'plug2'
  | 'book'
  | 'video'
  | 'file-text'
  | 'calendar-days'
  | 'life-buoy'
  | 'headphones'
  | 'search'
  | 'calculator'
  | 'scan-line'
  | 'sliders-horizontal'
  | 'palette'
  | 'rocket'
  | 'shopping-bag'
  | 'smartphone'
  | 'globe'
  | 'handshake'
  | 'wallet'
  | 'building2'
  | 'utensils'
  | 'cup-soda'
  | 'coffee'
  | 'scissors'
  | 'wrench'
  | 'network'
  | 'layers2'
  | 'badge-dollar-sign'
  | 'shield'
  | 'car'
  | 'filePenLine'
  | 'paparBag'
  | 'crosshair'
  | 'userStar'
  | 'msgCircleMore'
  | 'handCoins'
  | 'global'
  | 'squareCode'
  | 'database'
  | 'bookOpenText'
  | 'notebook'
  | 'bookMarked'
  | 'bookText'
  | 'wayPoints'
  | 'scrollText'
  | 'scrollText'
  | 'shirt'
  | 'heart-pulse'
  | 'gamepad-2'
  | 'laptop-minimal'
  | 'gem'
  | 'hand-heart'
  | 'coffee'
  | 'lamp'
  | 'hospital'
  | 'banknote'
  | 'crown'
  | 'ham'
  | 'warehouse'
  | 'university'
  | 'user-shield'
  | 'briefcase-business'
  | 'thumbs-up'

export interface INavLink {
  title: string
  description: string
  icon: TNavIcon
}

export interface INavColumn {
  title: string
  links: INavLink[]
}

export interface INavbarItem {
  label: string
  columns: INavColumn[]
}

export const NAVBAR_ITEMS: INavbarItem[] = [
  {
    label: 'الحلول',
    columns: [
      {
        title: 'الانطلاق',
        links: [
          {
            title: 'تصميم المتاجر',
            description: 'صمِّم متجرك بسهولة ومثل ما تحب',
            icon: 'store',
          },
          {
            title: 'المدفوعات',
            description: 'استقبل وأدِر مدفوعاتك بأمان',
            icon: 'credit-card',
          },
          {
            title: 'بوليصات ارياف',
            description: 'اشحن لعملائك في أي مكان',
            icon: 'filePenLine',
          },
          {
            title: 'المتاجر الجاهزة',
            description: 'ابدأ البيع من اول يوم مع متجر جاهز بالكامل',
            icon: 'paparBag',
          },
        ],
      },
      {
        title: 'التسويق',
        links: [
          {
            title: 'إعلانات ارياف',
            description: 'أطلق حملتك الإعلانية من متجرك',
            icon: 'crosshair',
          },
          {
            title: 'أدوات التسويق',
            description: 'ارفع مبيعاتك مع حلول تسويقية متعددة',
            icon: 'megaphone',
          },
          {
            title: 'الشركاء المؤثرين',
            description: 'اعلن عن منتجك مع المؤثر الأشهر فى قطاعك',
            icon: 'userStar',
          },
          {
            title: 'ارياف شات',
            description: 'اخدم عملاءك عبر كل المنصات من متجرك',
            icon: 'msgCircleMore',
          },
          {
            title: 'التسويق بالعمولة',
            description: 'آلاف المسوقين جاهزين للتسويق لمتجرك',
            icon: 'handCoins',
          },
        ],
      },
      {
        title: 'الانطلاق',
        links: [
          {
            title: 'محلّي ارياف',
            description: 'منصَّة تجمع التاجر المحلي بالعميل المحلي',
            icon: 'global',
          },
          {
            title: 'صانع التطبيقات',
            description: 'اصنع تطبيقًا خاصًا لمتجرك',
            icon: 'squareCode',
          },
          {
            title: 'سوق الجملة',
            description: 'سوق واحد يجمع البائع بالمورِّد',
            icon: 'store',
          },
          {
            title: 'ارياف بوينت',
            description: 'نظام نقاط البيع المتكامل في جوالك',
            icon: 'database',
          },
        ],
      },
      {
        title: 'الشركاء',
        links: [
          {
            title: 'شركاء ارياف',
            description: 'استثمر مهاراتك ووسّع دخلك مع شركاء ارياف',
            icon: 'users',
          },
          {
            title: 'خدمات التاجر',
            description: 'أدوات عديدة لنجاح متجرك',
            icon: 'shopping-bag',
          },
          {
            title: 'متجر التطبيقات',
            description: 'اكتشف أدوات تعزِّز نموك التجاري',
            icon: 'smartphone',
          },
          {
            title: 'متجر الثيمات',
            description: 'ثيمات تبرز منتجاتك، تعزز مبيعاتك، وتحسن تجربة عملاءك',
            icon: 'palette',
          },
        ],
      },
    ],
  },
  {
    label: 'الموارد',
    columns: [
      {
        title: 'التعليم',
        links: [
          {
            title: 'أكاديمية ارياف',
            description: 'احترف التجارة عبر دوراتنا التدريبية',
            icon: 'bookOpenText',
          },
          {
            title: 'مدونة ارياف',
            description: 'استلهم قصة نجاحك من مقالات الخبراء',
            icon: 'notebook',
          },
          {
            title: 'آخبار ارياف',
            description: 'خذ نظرة على آخر إطلاقات ارياف',
            icon: 'file-text',
          },
          {
            title: 'قاموس ارياف',
            description: 'اعرف معاني أهم مفردات التجارة الإلكترونية',
            icon: 'bookMarked',
          },
        ],
      },
      {
        title: 'المساعدة',
        links: [
          {
            title: 'مركز المساعدة',
            description: 'كل ما تحتاجه لتنطلق بتجارتك بثقة',
            icon: 'headphones',
          },
          {
            title: 'مجتمع ارياف',
            description: 'تبادل الخبرات والتجارب مع آلاف التجار',
            icon: 'wayPoints',
          },
          {
            title: 'تقويم الفعاليات',
            description: 'تابع ويبنارات وفعاليات ارياف اول بأول',
            icon: 'calendar-days',
          },
        ],
      },
      {
        title: 'استلهام',
        links: [
          {
            title: 'قصص نجاح التجار',
            description: '150 قصة نجاح لتجار في سلة',
            icon: 'userStar',
          },
          {
            title: 'قائمة جاهزية المتجر',
            description: 'ايش تحتاج علشان يكون متجرك جاهز؟',
            icon: 'scrollText',
          },
          {
            title: 'دليل تسويق المتجر',
            description: 'سوق واحد يجمع البائع بالمورِّد',
            icon: 'notebook',
          },
        ],
      },
    ],
  },
  {
    label: 'كيف تخدمك ارياف؟',
    columns: [
      {
        title: 'حسب حجم التجارة',
        links: [
          {
            title: 'الشركات الصغيرة',
            description: 'عندك الطموح وعندنا نقطة البداية',
            icon: 'warehouse',
          },
          {
            title: 'الشركات المتوسطة',
            description: 'قطعت شوط كبير واحنا معك تقطع أكبر ',
            icon: 'building2',
          },
          {
            title: 'الشركات الكبيرة',
            description: 'كيف زد تمكّن كبار التجار ورواد الأعمال؟',
            icon: 'university',
          },
        ],
      },
      {
        title: 'حسب نوع المنتج',
        links: [
          {
            title: 'حسب نوع المنتج',
            description: 'حوّل أفكارك إلى مبيعات',
            icon: 'file-text',
          },
         
        ],
      },
      {
        title: 'حسب فريق المتجر',
        links: [
          {
            title: 'مدير المتجر',
            description: 'حلول وخصائص شاملة للتحكم في المتجر',
            icon: 'user-shield',
          },
          {
            title: 'الفريق المالي',
            description: 'تقارير مفصّلة من لوحة تحكم واحدة',
            icon: 'briefcase-business',
          },
          {
            title: 'فريق التسويق',
            description: 'أدوات تسويقية متنوعة لحملات ناجحة',
            icon: 'crosshair',
          },
          {
            title: 'فريق العمليات',
            description: 'إدارة يومية مرنة من أي مكان',
            icon: 'thumbs-up',
          },
        ],
      },
      {
        title: 'الشركاء والمطورين',
        links: [
          {
            title: 'الشركاء والمطورين',
            description: 'قدّم خدماتك لآلاف التجار',
            icon: 'users',
          },
        ],
      },
    ],
  },
  {
    label: 'القطاعات',
    columns: [
      {
        title: '',
        links: [
          {
            title: 'متاجر ارياف في القطاعات ',
            description: 'خذ جولة على متاجر في قطاعات مختلفة',
            icon: 'store',
          },
          {
            title: 'عبايات وأزياء',
            description: 'تجارة أنيقة بدون تعقيد',
            icon: 'shirt',
          },
          {
            title: 'الصحة واللياقة',
            description: 'قدم منتجاتك بصورة مقنعة لعميلك',
            icon: 'heart-pulse',
          },
          {
            title: 'المنتجات الرقمية',
            description: 'تاجر بمنتجات رقمية بدون صعوبات تقنية',
            icon: 'gamepad-2',
          },
        ],
      },
      {
        title: '',
        links: [
          {
            title: 'الإلكترونيات',
            description: 'أسهل تجربة لبيع الإلكترونيات',
            icon: 'laptop-minimal',
          },
          {
            title: 'المجوهرات',
            description: 'مزايا متعددة تبرز تميُّز مجوهراتك',
            icon: 'gem',
          },
          {
            title: 'العناية والتجميل',
            description: 'مع سلة تفهم عميلك الباحث عن الجمال',
            icon: 'hand-heart',
          },
          {
            title: 'المطاعم والمقاهي',
            description: 'حلول مُخصَّصة لبيع المأكولات والمشروبات',
            icon: 'cup-soda',
          },
        ],
      },
      {
        title: '',
        links: [
          {
            title: 'مستلزمات المنزل',
            description: 'تجرية مريحة لك ولعميلك',
            icon: 'shopping-bag',
          },
          {
            title: 'تصميم الخدمات',
            description: 'تسليم فوري لمنتجاتك',
            icon: 'palette',
          },
          {
            title: 'الجمعيات الخيرية',
            description: 'سهِّل عمل الخير وأنت أهله',
            icon: 'handCoins',
          },
          {
            title: 'العيادات',
            description: 'حجز مواعيد تلقائي بدون إدخال يدوي',
            icon: 'hospital',
          },
        ],
      },
      {
        title: '',
        links: [
          {
            title: 'البطاقات الرقمية',
            description: 'حول شغفك إلى مصدر دخل',
            icon: 'credit-card',
          },
          {
            title: 'ذهب',
            description: 'متجرك يبيع الذهب طول اليوم',
            icon: 'crown',
          },
          {
            title: 'بسطات وفودتراك',
            description: 'استقبل مدفوعاتك من جوالك',
            icon: 'badge-dollar-sign',
          },
          {
            title: 'ذبائح',
            description: 'رتب طلباتك بدون اي اتصالات مع عميلك',
            icon: 'ham',
          },
        ],
      },
    ],
  },
  {
    label: 'الأسعار',
    columns: [
      {
        title: 'الخطط',
        links: [
          {
            title: 'الخطة الأساسية',
            description: 'كل ما تحتاجه لبدء بيع منتجاتك',
            icon: 'wallet',
          },
          {
            title: 'خطة النمو',
            description: 'أدوات تسويق وتحليلات متقدمة',
            icon: 'trending-up',
          },
          {
            title: 'الخطة الاحترافية',
            description: 'أتمتة وتكاملات وشراكات غير محدودة',
            icon: 'sparkles',
          },
          {
            title: 'خطة المؤسسات',
            description: 'حلول مخصصة وفريق نجاح خاص بك',
            icon: 'building2',
          },
        ],
      },
      {
        title: 'الفوترة',
        links: [
          {
            title: 'مصاريف المعاملات',
            description: 'شؤون شفافة دون رسوم خفية',
            icon: 'credit-card',
          },
          {
            title: 'رسوم التطبيقات',
            description: 'تعرّف على تكلفة التطبيقات قبل التفعيل',
            icon: 'sliders-horizontal',
          },
          {
            title: 'حاسبة التكلفة',
            description: 'احسب مصاريفك الشهرية بدقة',
            icon: 'calculator',
          },
          {
            title: 'الفواتير الضريبية',
            description: 'فواتير إلكترونية متوافقة مع الأنظمة',
            icon: 'file-text',
          },
        ],
      },
      {
        title: 'الأسئلة الشائعة',
        links: [
          {
            title: 'إدارة الاشتراك',
            description: 'رقّ خطتك أو بدّلها في أي وقت',
            icon: 'settings2',
          },
          {
            title: 'الإلغاء والاسترجاع',
            description: 'سياسة إلغاء واضحة ومرنة',
            icon: 'life-buoy',
          },
          {
            title: 'الخصومات السنوية',
            description: 'وفّر حتى 20% عند الدفع سنويًا',
            icon: 'badge-dollar-sign',
          },
          {
            title: 'طرق الدفع',
            description: 'ادفع بالبطاقة أو تحويل أو مدى',
            icon: 'banknote',
          },
        ],
      },
    ],
  },
]
