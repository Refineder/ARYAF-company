<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
import { toTypedSchema } from '@vee-validate/yup'
import InputForm from '~/components/molecules/InputForm/InputForm.vue'
import SelectForm from '~/components/molecules/SelectForm/SelectForm.vue'
import Button from '~/components/atoms/Button/Button.vue'
import Icons from '~/components/atoms/ARYAFIcon/Icons.vue'
import { CATEGORIES, COUNTRIES, CURRENCIES, LANGUAGES, TEMPLATES } from '~/constants/storeSetup'

const emit = defineEmits<{ next: [] }>()

const schema = toTypedSchema(
  yup.object({
    storeName: yup.string().required('اسم المتجر مطلوب').min(2, 'اسم المتجر قصير جدًا'),
    language: yup.string().required('لغة المتجر مطلوبة'),
    category: yup.string().required('فئة النشاط التجاري مطلوبة'),
    country: yup.string().required('الدولة مطلوبة'),
    currency: yup.string().required('العملة مطلوبة'),
    template: yup.string().required('قالب المتجر مطلوب'),
  }),
)

const { handleSubmit, meta } = useForm({
  validationSchema: schema,
})

const { value: template, errorMessage: templateError } = useField<string>('template')

const isValid = computed(() => meta.value.valid)

const onSubmit = handleSubmit(() => {
  emit('next')
})
</script>

<template>
  <div class="flex flex-col gap-6">
    <h2 class="clamp-text-md text-center font-semibold">
      ابدأ ببناء <span class="gradient-text">متجرك الاحترافي</span>
    </h2>

    <p class="text-gray-500 text-center text-lg max-w-lg self-center">
      أدخل معلومات متجرك الأساسية لتخصيص هويتك والانطلاق نحو تجربة بيع احترافية
    </p>

    <form class="flex flex-col gap-4" @submit="onSubmit">
      <InputForm name="storeName" placeholder="مثال : الزهور البيضاء" lable="اسم المتجر" />

      <div class="grid gap-4 md:grid-cols-2">
        <SelectForm name="language" lable="لغة المتجر" :options="LANGUAGES" />
        <SelectForm name="category" lable="فئة النشاط التجاري" :options="CATEGORIES" />
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        <SelectForm name="country" lable="الدولة" :options="COUNTRIES" />
        <SelectForm name="currency" lable="العملة" :options="CURRENCIES" />
      </div>

      <div class="flex flex-col gap-2 w-full">
        <label class="text-lg text-zinc-500" :class="[templateError ? 'text-rose-500!' : '']">
          قالب المتجر
        </label>
        <div
          class="grid gap-3"
          style="grid-template-columns: repeat(auto-fit, minmax(min(100px, 100%), 1fr))"
        >
          <button
            v-for="t in TEMPLATES"
            :key="t.value"
            type="button"
            class="relative flex border-3 border-transparent flex-col items-center gap-2 cursor-pointer p-2 rounded-md transition-all"
            :class="[
              template === t.value
                ? 'gradient-border-bg'
                : 'border-2 border-zinc-200 hover:gradient-border-bg',
            ]"
            @click="template = t.value"
          >
            <span
              class="w-full aspect-4/3 rounded-sm block"
              :style="{ background: t.color }"
            ></span>
            <span class="flex items-center gap-1.5">
              <div v-if="template === t.value" class="absolute top-1 left-1">
                <div
                  class="rounded-full gradient-bg flex transition-all items-center justify-center w-5 h-5"
                >
                  <Icons name="check" :width="3" :height="3" />
                </div>
              </div>

              <span class="text-xs text-gray-600">{{ t.label }}</span>
            </span>
          </button>
        </div>
        <span v-if="templateError" class="text-xs text-red-500">{{ templateError }}</span>
      </div>

      <Button size="lg" :variant="isValid ? 'default' : 'secondary'" type="submit">متابعة</Button>
    </form>
  </div>
</template>
