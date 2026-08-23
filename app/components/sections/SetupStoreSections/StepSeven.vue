<script setup lang="ts">
import { phone } from '~/assets/images/index.ts'
import StepLayout from './StepLayout.vue'
import type { IStepData } from '~/@types/setupStore.ts'

const stepData: IStepData = {
  title: 'متى تريد إطلاق متجرك؟',
  description: 'آخر سؤال، وبعدها سنجهز كل شيء حسب إجاباتك.',
  multiple: true,
  options: [
    { value: 'electronics', label: 'إلكترونيات' },
    { value: 'home-supplies', label: 'مستلزمات المنزل' },
    { value: 'fashion', label: 'أزياء' },
    { value: 'jewelry', label: 'مجوهرات' },
    { value: 'cosmetics', label: 'مستحضرات التجميل' },
    { value: 'accessories-gifts', label: 'الإكسسوارات والهدايا' },
    { value: 'music', label: 'الموسيقى' },
    { value: 'books-education', label: 'الكتب والتعليم' },
    { value: 'health-fitness', label: 'خدمات الصحة واللياقة' },
    { value: 'restaurants-cafes', label: 'المطاعم والمقاهي' },
    { value: 'food-grocery', label: 'أغذية وتموينات' },
    { value: 'pets', label: 'حيوانات' },
    { value: 'automotive', label: 'سيارات' },
    { value: 'entertainment', label: 'الترفيه' },
    { value: 'digital-products', label: 'منتجات رقمية' },
    { value: 'charity', label: 'خيرية' },
    { value: 'games', label: 'ألعاب' },
    { value: 'medical-clinic', label: 'عيادة طبية' },
  ],
}

const model = defineModel<string[]>({ required: true })
</script>

<template>
  <StepLayout v-model="model" :data="stepData" :img-src="phone">
    <h3 class="clamp-text-sm font-semibold text-center">
      أخيرًا، ما هو مجال نشاطك التجاري؟ <span class="gradient-text">حدِّد منتجاتك</span>
    </h3>

    <p class="text-secondary-foreground text-center max-w-lg self-center">
      اختر المجال الذي يصف نشاطك أو المنتجات والخدمات التي تنوي بيعها.
    </p>
  </StepLayout>
</template>
