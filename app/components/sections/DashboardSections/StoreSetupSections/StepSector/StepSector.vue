<script setup lang="ts">
import { SECTOR_OPTIONS } from '~/@types/storeSetup'
import './style.css'

// import Icons from '~/components/atoms/ARYAFIcon/Icons.vue'

const model = defineModel<string | null>({ required: true })
</script>

<template>
  <div class="flex flex-col items-center gap-6 py-6 mx-auto" style="width: min(850px, 90%)">
    <div class="text-center">
      <h2 class="text-xl font-bold mb-2">
        أخبرنا عن متجرك ؟ <span class="gradient-text">قطاع نشاطك التجاري</span>
      </h2>
      <p class="text-secondary-foreground text-sm">
        سيُخصّص الذكاء الاصطناعي تصميمك بناءً على هذا الاختيار.
      </p>
    </div>

    <div
      class="grid gap-3 w-full"
      style="grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr))"
    >
      <button
        v-for="option in SECTOR_OPTIONS"
        :key="option.value"
        type="button"
        class="relative flex flex-col items-center gap-3 rounded-xl border-3 p-8 text-right transition-all duration-200 cursor-pointer"
        :class="
          model === option.value
            ? 'gradient-border-bg'
            : 'border-transparent bg-white hover:gradient-border-bg hover:shadow-sm'
        "
        @click="model = option.value"
      >
        <div
          class="p-4 rounded-full transition-colors duration-200"
          :class="[model === option.value ? 'bg-accent' : 'bg-secondary']"
        >
          <component :is="option.icon" class="w-6 h-6 text-secondary-foreground" />
        </div>

        <span
          class="font-medium"
          :class="model === option.value ? 'text-zinc-800' : 'text-gray-600'"
        >
          {{ option.label }}
        </span>

        <span
          v-if="model === option.value"
          class="absolute top-4 right-4 shrink-0 rounded-full gradient-border-bg grid place-items-center w-6 h-6 border-2!"
        >
          <span class="w-4 h-4 rounded-full gradient-bg"></span>
        </span>
      </button>
    </div>
  </div>
</template>
