<script setup lang="ts">
import { computed } from 'vue'

interface IProps {
  name?: string
  image?: string
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<IProps>(), {
  name: '',
  image: '',
  size: 'md',
})

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
}

const initials = computed(() => {
  const parts = props.name.trim().split(/\s+/).filter(Boolean)
  if (!parts.length) return ''
  const first = parts[0]?.charAt(0) ?? ''
  const last = parts.length > 1 ? (parts[parts.length - 1]?.charAt(0) ?? '') : ''
  return `${first}${last}`
})
</script>

<template>
  <div
    class="rounded-full gradient-bg-violet-dark grid place-items-center shrink-0 overflow-hidden cursor-pointer"
    :class="sizeClasses[props.size]"
  >
    <img v-if="image" class="w-full h-full object-cover" :src="image" alt="profile" />
    <span v-else class="text-white font-semibold">{{ initials }}</span>
  </div>
</template>
