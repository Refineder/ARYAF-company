<script setup lang="ts">
import { shiled } from '~/assets/images/index.ts'
import StepLayout from './StepLayout.vue'
import type { IStepData } from '~/@types/setupStore.ts'

const stepData: IStepData = {
  title: 'ما هي المنتجات التي تخطط لبيعها؟',
  description: 'يمكنك اختيار أكثر من تصنيف، سنساعدك في تنظيمها لاحقًا.',
  multiple: false,
  options: [
    { value: 'one', label: 'فرد', icon: 'userGradientFull' },
    { value: 'many', label: 'مؤسسة', icon: 'users' },
    { value: 'company', label: 'شركة', icon: 'company' },
    { value: 'charity', label: 'جمعية خيرية', icon: 'handHeart' },
  ],
}

const model = defineModel<string[]>({ required: true })
</script>

<template>
  <StepLayout v-model="model" :data="stepData" :img-src="shiled">
    <h3 class="clamp-text-sm font-semibold text-center">
      ما هو كيانك القانوني؟ ، <span class="gradient-text">اختر كيانك القانوني</span>
    </h3>

    <p class="text-secondary-foreground text-center max-w-lg self-center">
      حدِّد نوع الكيان القانوني لنتمكن من تهيئة متجرك واستكمال المتطلبات النظامية المناسبة.
    </p>
  </StepLayout>
</template>
