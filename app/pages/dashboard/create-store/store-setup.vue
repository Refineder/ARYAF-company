<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import StoreSetupHeader from '~/components/sections/DashboardSections/StoreSetupSections/StoreSetupHeader/StoreSetupHeader.vue'
import StoreSetupFooter from '~/components/sections/DashboardSections/StoreSetupSections/StoreSetupFooter/StoreSetupFooter.vue'
import StepWelcome from '~/components/sections/DashboardSections/StoreSetupSections/StepWelcome/StepWelcome.vue'
import StepSector from '~/components/sections/DashboardSections/StoreSetupSections/StepSector/StepSector.vue'
import StepStoreName from '~/components/sections/DashboardSections/StoreSetupSections/StepStoreName/StepStoreName.vue'
import StepTheme from '~/components/sections/DashboardSections/StoreSetupSections/StepTheme/StepTheme.vue'
import StepReady from '~/components/sections/DashboardSections/StoreSetupSections/StepReady/StepReady.vue'
import StepLaunch from '~/components/sections/DashboardSections/StoreSetupSections/StepLaunch/StepLaunch.vue'
import StorePreviewDialog from '~/components/organisms/StorePreviewDialog/StorePreviewDialog.vue'

definePageMeta({
  layout: 'store-setup',
})

const TOTAL_STEPS = 6

const currentStep = ref(1)
const sector = ref<string | null>(null)
const storeName = ref('')
const theme = ref<string | null>(null)

provide('storeName', storeName)
provide('sector', sector)
provide('theme', theme)

const isFirstStep = computed(() => currentStep.value === 1)
const isLastStep = computed(() => currentStep.value === TOTAL_STEPS)
const isLaunching = computed(() => currentStep.value === TOTAL_STEPS)
const isPreviewStep = computed(() => currentStep.value === 5)

const previewDialogRef = ref<InstanceType<typeof StorePreviewDialog> | null>(null)

const openPreview = () => {
  previewDialogRef.value?.open()
}

const canProceed = computed(() => {
  switch (currentStep.value) {
    case 1:
      return true
    case 2:
      return !!sector.value
    case 3:
      return storeName.value.trim().length >= 2
    case 4:
      return !!theme.value
    case 5:
      return true
    case 6:
      return false
    default:
      return true
  }
})

const nextStep = () => {
  if (!canProceed.value) return
  if (currentStep.value < TOTAL_STEPS) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}
</script>

<template>
  <div class="flex flex-col gap-8 min-h-[80svh] h-full">
    <StoreSetupHeader v-if="!isLaunching" :current-step="currentStep" :total-steps="TOTAL_STEPS" />

    <div
      class="section-container rounded-4xl min-h-[70svh] flex items-center justify-center"
      style="corner-shape: squircle"
    >
      <StepWelcome v-if="currentStep === 1" />
      <StepSector v-else-if="currentStep === 2" v-model="sector" />
      <StepStoreName v-else-if="currentStep === 3" v-model="storeName" />
      <StepTheme v-else-if="currentStep === 4" v-model="theme" />
      <StepReady v-else-if="currentStep === 5" />
      <StepLaunch v-else-if="currentStep === 6" :store-name="storeName || 'متجرك'" />
    </div>

    <StoreSetupFooter
      v-if="!isLaunching"
      :is-first-step="isFirstStep"
      :is-last-step="isLastStep"
      :can-proceed="canProceed"
      :is-preview-step="isPreviewStep"
      @next="nextStep"
      @prev="prevStep"
      @preview="openPreview"
    />

    <StorePreviewDialog ref="previewDialogRef" :store-name="storeName || 'متجرك'" />
  </div>
</template>
