<script setup lang="ts">
import { global } from '~/assets/images/index.ts'
import StepLayout from './StepLayout.vue'
import type { IStepData } from '~/@types/setupStore.ts'

const stepData: IStepData = {
  title: 'من أين تدير تجارتك؟',
  description: 'أخبرنا بطبيعة نشاطك حتى نجهز متجرك بالشكل المناسب.',
  multiple: false,
  options: [
    { value: 'ksa', label: 'السعوديه', icon: 'ksaFlag' },
    { value: 'egp', label: 'مصر', icon: 'egpFlag' },
    { value: 'qat', label: 'قطر', icon: 'qatFlag' },
    { value: 'kwt', label: 'الكويت', icon: 'kwtFlag' },
    { value: 'tur', label: 'تركيا', icon: 'turFlag' },
    { value: 'sdn', label: 'السودان', icon: 'sdnFlag' },
  ],
}

const model = defineModel<string[]>({ required: true })
</script>

<template>
  <StepLayout v-model="model" :data="stepData" :img-src="global">
    <h3 class="clamp-text-sm font-semibold text-center">
      في أي دولة ستسجّل متجرك؟ ، <span class="gradient-text">اختر دولة تسجيل متجرك</span>
    </h3>

    <p class="text-secondary-foreground text-center max-w-lg self-center">
      تُستخدم الدولة لتحديد المتطلبات القانونية والضريبية وإعداد متجرك بما يتوافق مع الأنظمة
      المحلية.
    </p>
  </StepLayout>
</template>
