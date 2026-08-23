<script setup lang="ts">
import { laptop } from '~/assets/images/index.ts'
import StepLayout from './StepLayout.vue'
import type { IStepData } from '~/@types/setupStore.ts'

const stepData: IStepData = {
  title: 'كيف تخطط لشحن طلباتك؟',
  description: 'اختر الطريقة الأقرب لطريقة عملك.',
  multiple: false,
  options: [
    { value: 'first', label: 'نعم، هذه تجربتي الأولى' },
    { value: 'no', label: 'لا، عندي خبرة سابقة' },
  ],
}

const model = defineModel<string[]>({ required: true })
</script>

<template>
  <StepLayout v-model="model" :data="stepData" :img-src="laptop">
    <h3 class="clamp-text-sm font-semibold text-center">
      ما مدى خبرتك في التجارة الإلكترونية ،
      <span class="gradient-text">هل هذه تجربتك الأولى ؟</span>
    </h3>

    <p class="text-secondary-foreground text-center max-w-lg self-center">
      يساعدنا ذلك على تخصيص تجربة متجرك وتفعيل الميزات المناسبة لنشاطك.
    </p>
  </StepLayout>
</template>
