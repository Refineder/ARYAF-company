import { ChartLine, EarthIcon, Handshake, SlidersHorizontal } from 'lucide-vue-next'
import type { Component } from 'vue'

interface IMoreFromTool {
  title: string
  description: string
  icon: Component
}

export const MORE_FROM_TOOL_DATA: IMoreFromTool[] = [
  {
    title: 'مجتمع يدعمك',
    description: 'أول الجماهير في بداياتك، نفرح لنجاحاتك وندعمك وقت أزماتك.',
    icon: Handshake,
  },
  {
    title: 'مفصّل عليك',
    description:
      'سواءً تبيع بهارات أو جوالات، حلولنا التقنية المرنة تناسب كل أنواع منتجاتك الفريدة.',
    icon: SlidersHorizontal,
  },
  {
    title: 'نموّك يهمّنا',
    description: 'الإنطلاقة مو كل شيء، احنا معك حتى في تحديات الاستمرار والنمو.',
    icon: ChartLine,
  },
  {
    title: 'خبرة في السوق المحلي، والعالمي',
    description: 'خبرتنا في السوق المحلي تميزك عن غيركوحلولنا المُبتكرة تفوّقك على الجميع.',
    icon: EarthIcon,
  },
]
