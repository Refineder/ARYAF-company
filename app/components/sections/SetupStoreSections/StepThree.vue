<script setup lang="ts">
import { storeVisiable } from '~/assets/images/index.ts'
import StepLayout from './StepLayout.vue'
import type { IStepData } from '~/@types/setupStore.ts'

const stepData: IStepData = {
  title: 'ما هو حجم أعمالك الحالي؟',
  description: 'سنهيئ الأدوات والخطط بما يناسب مرحلتك الحالية.',
  multiple: false,
  options: [
    { value: 'yes', label: 'نعم، قائم كمحل أو على الإنترنت', icon: 'storeGradientSetup' },
    { value: 'no', label: 'لا، سأبدأ نشاط تجاري جديد', icon: 'storeCancel' },
  ],
}

const model = defineModel<string[]>({ required: true })
</script>

<template>
  <StepLayout v-model="model" :data="stepData" :img-src="storeVisiable">
    <h3 class="clamp-text-sm font-semibold text-center">
      في أي مرحلة يقع نشاطك التجاري؟ ، <span class="gradient-text">هل هو قائم؟</span>
    </h3>

    <p class="text-secondary-foreground text-center max-w-lg self-center">
      سنخصص تجربتك ونوفر الأدوات المناسبة، سواء كنت تبدأ الآن أو تعمل على تنمية نشاطك.
    </p>
  </StepLayout>
</template>
