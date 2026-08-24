import type { Component } from 'vue'
import type { TNameIcon } from '~/components/atoms/ARYAFIcon/Icons.vue'

export interface IDashboardNavItem {
  id: string
  label: string
  icon: Component | TNameIcon
  path?: string
}

export const isIconName = (icon: Component | TNameIcon): icon is TNameIcon => {
  return typeof icon === 'string'
}

export type TDashboardTab = 'home' | 'store' | 'setting'
