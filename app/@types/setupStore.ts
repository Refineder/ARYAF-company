import type { TNameIcon } from '~/components/atoms/ARYAFIcon/Icons.vue'

export interface IStepOption {
  value: string
  label: string
  icon?: TNameIcon
}

export interface IStepData {
  title: string
  description: string
  multiple: boolean
  options: IStepOption[]
}
