<script setup lang="ts">
import { ref } from 'vue'

interface IProps {
  modelValue: string
  invalid?: boolean
}

defineProps<IProps>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  keydown: [event: KeyboardEvent]
}>()

const inputEl = ref<HTMLInputElement | null>(null)

const onInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  const sanitized = input.value.replace(/\D/g, '').slice(0, 1)
  input.value = sanitized
  emit('update:modelValue', sanitized)
}

defineExpose({
  focus: () => inputEl.value?.focus(),
})
</script>

<template>
  <input
    ref="inputEl"
    type="text"
    inputmode="numeric"
    maxlength="1"
    :value="modelValue"
    class="w-12 h-14 text-center text-xl font-semibold rounded-md border border-zinc-200 outline-none transition-colors focus:border-primary-foreground focus:ring-1"
    :class="invalid ? 'border-red-500!' : ''"
    @input="onInput"
    @keydown="emit('keydown', $event)"
  />
</template>
