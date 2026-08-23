<script setup lang="ts">
import { delivery } from '~/assets/images/index.ts'
import StepLayout from './StepLayout.vue'
import type { IStepData } from '~/@types/setupStore.ts'

const stepData: IStepData = {
  title: 'كيف تريد استقبال المدفوعات؟',
  description: 'اختر كل طرق الدفع التي تريد تفعيلها في متجرك.',
  multiple: false,
  options: [
    { value: 'product', label: 'منتجات ملموسة سأشحنها من متجري' },
    { value: 'shipping', label: 'منتجات ملموسة تُشحن من المورِّد (Dropshipping)' },
    { value: 'card', label: 'منتجات رقمية (مثل بطاقات شحن، كتب رقمية، وغيرها)' },
    { value: 'order', label: 'خدمات (مثل الحجوزات، الطباعة حسب الطلب، وغيرها)' },
    { value: 'none', label: 'لم أحدِّد بعد' },
  ],
}

const model = defineModel<string[]>({ required: true })
</script>

<template>
  <StepLayout v-model="model" :data="stepData" :img-src="delivery">
    <h3 class="clamp-text-sm font-semibold text-center">
      ما نوع المنتجات التي تنوي بيعها؟ ، <span class="gradient-text">ماذا ستبيع عبر متجرك؟</span>
    </h3>

    <p class="text-secondary-foreground text-center max-w-lg self-center">
      يساعدنا ذلك على تخصيص تجربة متجرك وتفعيل الميزات المناسبة لنشاطك.
    </p>
  </StepLayout>
</template>
