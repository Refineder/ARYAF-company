<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { AI_SUGGESTIONS } from '~/@types/storeSetup'
import Icons from '~/components/atoms/ARYAFIcon/Icons.vue'

const model = defineModel<string>({ required: true })

const ACCEPTED_NAMES = ['أناقة', 'نيون', 'بلوم', 'كوكب', 'نيون ستور', '루나']

const isAvailable = ref<boolean | null>(null)

const validationTimer = ref<ReturnType<typeof setTimeout> | null>(null)

watch(model, (value) => {
  if (validationTimer.value) clearTimeout(validationTimer.value)
  isAvailable.value = null

  if (!value || value.trim().length < 2) return

  validationTimer.value = setTimeout(() => {
    const normalized = value.trim()
    isAvailable.value = ACCEPTED_NAMES.some(
      (name) => name.toLowerCase() === normalized.toLowerCase(),
    )
  }, 600)
})

const inputBorderClass = computed(() => {
  if (isAvailable.value === true) return 'border-emerald-500 ring-2 ring-emerald-500/20'
  if (isAvailable.value === false) return 'border-red-400 ring-2 ring-red-400/20'
  return 'border-zinc-200 focus:border-primary-foreground'
})

const selectSuggestion = (name: string) => {
  model.value = name
}
</script>

<template>
  <div class="w-full flex flex-col items-center gap-6 py-6">
    <div class="text-center">
      <h2 class="text-xl font-bold mb-2">ما اسم متجرك؟</h2>
      <p class="text-secondary-foreground text-sm">
        أدخل اسم متجرك — هذا هو الاسم الذي سيظهر لعملائك
      </p>
    </div>

    <div class="w-full max-w-md flex flex-col gap-3">
      <div class="relative">
        <input
          v-model="model"
          type="text"
          placeholder="مثال: أناقة، بلوم، نيون..."
          class="w-full rounded-xl border-2 bg-white px-4 py-3 text-sm outline-none transition-all duration-300"
          :class="inputBorderClass"
        />

        <div
          v-if="isAvailable === true"
          class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center"
        >
          <svg
            class="w-3 h-3 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      </div>

      <p v-if="isAvailable === true" class="text-sm text-emerald-600 flex items-center gap-1.5">
        <Icons name="checkGradient" :width="14" :height="14" />
        هذا الاسم متاح! يمكنك المتابعة
      </p>

      <p v-else-if="isAvailable === false" class="text-sm text-red-500">
        هذا الاسم غير متاح — جرّب اسمًا آخر
      </p>
    </div>

    <div class="w-full max-w-md">
      <p class="text-xs text-gray-400 mb-2">اقتراحات الذكاء الاصطناعي</p>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="suggestion in AI_SUGGESTIONS"
          :key="suggestion"
          type="button"
          class="px-3 py-1.5 rounded-full border border-zinc-200 text-xs text-gray-500 hover:border-primary-foreground hover:text-primary-foreground transition-colors cursor-pointer"
          :class="model === suggestion ? 'gradient-border-bg gradient-text' : ''"
          @click="selectSuggestion(suggestion)"
        >
          {{ suggestion }}
        </button>
      </div>
    </div>
  </div>
</template>
