<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { STORE_SETUP_STEPS } from '~/@types/storeSetup'
import { PATHS } from '~/constants/paths'

interface IProps {
  currentStep: number
  totalSteps: number
}

defineProps<IProps>()
</script>

<template>
  <div
    class="flex flex-wrap bg-white p-8 rounded-4xl items-center justify-between gap-4"
    style="corner-shape: squircle"
  >
    <NuxtLink
      :to="PATHS.DASHBOARD"
      class="text-white px-4 py-2 rounded-4xl flex gradient-bg items-center gap-2 shrink-0 cursor-pointer"
      style="corner-shape: squircle"
    >
      <ChevronRight class="text-white" />
      <span>العودة إلى الرئيسية</span>
    </NuxtLink>

    <div class="flex items-center gap-2 text-xs overflow-x-auto">
      <NuxtLink
        :to="PATHS.DASHBOARD"
        class="text-gray-400 text-[14px] hover:text-primary-foreground transition-colors shrink-0"
      >
        الرئيسية
      </NuxtLink>

      <template v-for="step in STORE_SETUP_STEPS" :key="step.id">
        <ChevronLeft class="text-secondary-foreground w-4 h-4 shrink-0" />

        <span
          class="shrink-0 text-[14px] transition-colors"
          :class="
            step.id === currentStep
              ? 'gradient-text font-semibold'
              : step.id < currentStep
                ? 'text-primary-foreground cursor-pointer'
                : 'text-secondary-foreground'
          "
        >
          {{ step.shortLabel }}
        </span>
      </template>
    </div>

    <span class="text-sm font-semibold px-4 py-2 bg-muted rounded-2xl whitespace-nowrap shrink-0">
      الخطوة {{ currentStep }} من {{ totalSteps }}
    </span>
  </div>
</template>
