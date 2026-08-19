<script setup lang="ts">
import type { Component } from 'vue'

type TVariant = 'default' | 'outline-gradient' | 'secondary' | 'outline'
export type TSize = 'sm' | 'md' | 'lg'
interface IProps {
  variant?: TVariant
  size?: TSize
  icon?: boolean
}

const attrs = useAttrs()

const variantClasses: Record<TVariant, string> = {
  default: 'gradient-bg text-white',
  'outline-gradient': 'gradient-border-bg',
  outline: 'border border-gray-500',
  secondary: 'bg-secondary text-gray-500',
}

const sizeClasses: Record<TSize, string> = {
  sm: 'text-[12px] px-3 py-1',
  md: 'text-sm',
  lg: 'text-lg px-5 py-3',
}

const props = withDefaults(defineProps<IProps>(), {
  variant: 'default',
  size: 'md',
  icon: false,
})
</script>

<template>
  <button
    v-bind="attrs"
    :class="[
      'cursor-pointer px-4 py-2 rounded-full font-semibold',
      variantClasses[props.variant],
      sizeClasses[props.size],
    ]"
  >
    <p v-if="props.variant === 'outline-gradient'" class="gradient-text"><slot /></p>
    <slot v-else />
  </button>
</template>
