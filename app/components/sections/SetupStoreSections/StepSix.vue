<script setup lang="ts">
import { phone } from '~/assets/images/index.ts'
import StepLayout from './StepLayout.vue'
import type { IStepData } from '~/@types/setupStore.ts'

const stepData: IStepData = {
  title: 'ما الأهداف الأهم بالنسبة لك؟',
  description: 'اختر ما يهمك أكثر حتى نرتب أولويات لوحة التحكم لك.',
  multiple: false,
  options: [
    { value: 'ues', label: 'نعم' },
    { value: 'not-yet', label: 'ليس بعد' },
  ],
}

const model = defineModel<string[]>({ required: true })
</script>

<template>
  <StepLayout v-model="model" :data="stepData" :img-src="phone">
    <h3 class="clamp-text-sm font-semibold text-center">
      هل لديك جمهور جاهز <span class="gradient-text">للشراء منتجاتك ؟</span>
    </h3>

    <p class="text-secondary-foreground text-center max-w-lg self-center">
      مثل المتابعين على وسائل التواصل، العملاء الحاليين، القائمة البريدية، أو جهات اتصال واتساب.
    </p>
  </StepLayout>
</template>
