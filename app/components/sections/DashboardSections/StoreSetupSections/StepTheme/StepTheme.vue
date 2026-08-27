<script setup lang="ts">
import { THEME_OPTIONS } from '~/@types/storeSetup'
import StoreThemePreview, {
  type TTheme,
} from '~/components/molecules/StoreThemePreview/StoreThemePreview.vue'

const model = defineModel<string | null>({ required: true })

const storeName = inject<import('vue').Ref<string>>('storeName', ref('متجرك'))
</script>

<template>
  <div class="w-full flex flex-col items-center gap-6 py-6">
    <div class="text-center">
      <h2 class="text-xl font-bold mb-2">
        كيف تبدو علامتك؟ <span class="gradient-text">اختر هوية متجرك البصرية</span>
      </h2>
      <p class="text-secondary-foreground text-sm">اختر الأسلوب البصري الذي يعكس شخصية متجرك.</p>
    </div>

    <div
      class="section-container-sm w-full grid gap-3"
      style="grid-template-columns: repeat(auto-fit, minmax(min(450px, 100%), 1fr))"
    >
      <button
        v-for="option in THEME_OPTIONS"
        :key="option.value"
        type="button"
        class="relative flex flex-col gap-3 rounded-xl border-3 p-4 text-right transition-all duration-200 cursor-pointer"
        :class="
          model === option.value
            ? 'gradient-border-bg'
            : 'border-zinc-200 bg-white hover:gradient-border-bg hover:shadow-sm'
        "
        @click="model = option.value"
      >
        <StoreThemePreview
          :theme="option.value as TTheme"
          :store-name="storeName"
          class="w-full h-40"
        />

        <div>
          <span
            class="font-semibold text-sm"
            :class="model === option.value ? 'gradient-text' : 'text-zinc-700'"
          >
            {{ option.label }}
          </span>
          <p class="text-xs text-gray-400 mt-0.5">{{ option.description }}</p>
        </div>

        <span
          v-if="model === option.value"
          class="absolute top-2 right-2 shrink-0 rounded-full gradient-border-bg grid place-items-center w-6 h-6 border-2!"
        >
          <span class="w-4 h-4 rounded-full gradient-bg"></span>
        </span>
      </button>
    </div>
  </div>
</template>
