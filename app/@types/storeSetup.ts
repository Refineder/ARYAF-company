import { BookOpen, Coffee, Dumbbell, Gem, Heart, House, Shirt, Zap } from 'lucide-vue-next'
import type { Component } from 'vue'

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
  { value: 'modern', label: 'عصري', description: 'خطوط نظيفة، مساحات واسعة' },
  { value: 'elegant', label: 'أنيق', description: 'فخامة وراقي وجمال' },
  { value: 'bold', label: 'جريء', description: 'قوي، دراماتيكي، لافت' },
  { value: 'minimal', label: 'بسيط', description: 'هادئ، أبيض، تركيز تام' },
]

export const TYPE_OPTIONS: [{ value: string; label: string }, { value: string; label: string }] = [
  { value: 'ai', label: 'إنشاء بالذكاء الاصطناعي' },
  { value: 'template', label: 'استعرض القوالب' },
]

export const AI_SUGGESTIONS = ['أناقة', 'بلوم', '루나', 'كوكب', 'نيون ستور']
