import { BookOpen, Coffee, Dumbbell, Gem, Heart, House, Shirt, Zap } from 'lucide-vue-next'
import type { Component } from 'vue'
// import type { TNameIcon } from '~/components/atoms/ARYAFIcon/Icons.vue'

export interface ISetupStoreData {
  sector: string | null
  storeName: string
  theme: string | null
}

export interface IStepConfig {
  id: number
  label: string
  shortLabel: string
}

export const STORE_SETUP_STEPS: IStepConfig[] = [
  { id: 1, label: 'اختر نوع القالب', shortLabel: 'اختر نوع القالب' },
  { id: 2, label: 'اختر طريقه الانشاء', shortLabel: 'اختر طريقه الانشاء' },
  { id: 3, label: 'اسم المتجر', shortLabel: 'الاسم المتجر' },
  { id: 4, label: 'الهوية البصرية', shortLabel: 'الهوية البصرية' },
  { id: 5, label: 'المراجعة', shortLabel: 'المراجعة' },
  { id: 6, label: 'الإطلاق', shortLabel: 'الإطلاق' },
]

export const SECTOR_OPTIONS: { value: string; label: string; icon: Component }[] = [
  { value: 'fashion', label: 'أزياء وملابس', icon: Shirt },
  { value: 'perfume', label: 'عطور وتجميل', icon: Gem },
  { value: 'electronics', label: 'إلكترونيات', icon: Zap },
  { value: 'home', label: 'أثاث ومنزل', icon: House },
  { value: 'food', label: 'طعام ومشروبات', icon: Coffee },
  { value: 'sports', label: 'رياضة ولياقة', icon: Dumbbell },
  { value: 'books', label: 'كتب وتعليم', icon: BookOpen },
  { value: 'health', label: 'صحة وعناية', icon: Heart },
]

export const THEME_OPTIONS = [
  { value: 'modern', label: 'عصري', description: 'تصميم حديث بألوان متدرجة وزوايا ناعمة' },
  { value: 'elegant', label: 'أنيق', description: 'أناقة راقية بtones ذهبية وكلاسيكية' },
  { value: 'bold', label: 'جريء', description: 'ألوان قوية وتصميم يلفت الانتباه' },
  { value: 'minimal', label: 'بسيط', description: 'تصميم نظيف وبسيط يركز على المحتوى' },
]

export const AI_SUGGESTIONS = ['أناقة', 'بلوم', '루나', 'كوكب', 'نيون ستور']
