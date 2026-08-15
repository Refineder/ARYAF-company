<script setup lang="ts">
import { computed } from 'vue'
import { useForm, useFormValues } from 'vee-validate'
import * as yup from 'yup'
import { toTypedSchema } from '@vee-validate/yup'
import InputForm from '~/components/molecules/InputForm/InputForm.vue'
import Button from '~/components/atoms/Button/Button.vue'

interface IProps {
  email?: string
  tab?: 'reset' | 'create'
}

const props = withDefaults(defineProps<IProps>(), {
  email: '',
  tab: 'reset',
})

const emit = defineEmits<{
  'update:tab': [tab: 'reset' | 'create']
  submitted: [values: Record<string, unknown>, tab: 'reset' | 'create']
  back: []
}>()

const schema = computed(() => {
  if (props.tab === 'reset') {
    return toTypedSchema(
      yup.object({
        email: yup.string().required('البريد الالكتروني مطلوب').email('بريد إلكتروني غير صحيح'),
      })
    )
  }

  return toTypedSchema(
    yup.object({
      newPassword: yup
        .string()
        .required('كلمة المرور مطلوبة')
        .min(8, 'يجب أن تكون كلمة المرور 8 أحرف على الأقل')
        .matches(/[a-zA-Z]/, 'يجب أن تحتوي على حروف')
        .matches(/\d/, 'يجب أن تحتوي على أرقام'),
      confirmPassword: yup
        .string()
        .required('تأكيد كلمة المرور مطلوب')
        .oneOf([yup.ref('newPassword')], 'كلمة المرور غير متطابقة'),
    })
  )
})

const { handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: props.email ? { email: props.email } : undefined,
})

const formValues = useFormValues()

const submitLabel = computed(() => (props.tab === 'reset' ? 'ارسال رمز التحقق' : 'حفظ كلمة المرور'))

const passwordStrength = computed(() => {
  const pw = (formValues.value?.newPassword as string | undefined) ?? ''
  if (!pw) return null
  const hasLetter = /[a-zA-Z]/.test(pw)
  const hasNumber = /\d/.test(pw)
  const hasSpecial = /[^a-zA-Z0-9]/.test(pw)
  if (hasLetter && hasNumber && hasSpecial) {
    return { label: 'قوية', barClass: 'bg-green-500', textClass: 'text-green-600', percentage: 100 }
  }
  if (hasLetter && hasNumber) {
    return {
      label: 'متوسطة',
      barClass: 'bg-yellow-500',
      textClass: 'text-yellow-600',
      percentage: 66,
    }
  }
  return { label: 'ضعيفة', barClass: 'bg-red-500', textClass: 'text-red-500', percentage: 33 }
})

const onSubmit = handleSubmit((values) => {
  emit('submitted', values, props.tab)
})
</script>

<template>
  <div class="flex flex-col gap-6">
    <h2 class="clamp-text-md text-center font-semibold">
      <span v-if="tab === 'reset'">أعادة <span class="gradient-text">تعيين كلمة المرور</span></span>
      <span v-else>إنشاء <span class="gradient-text">كلمة مرور جديدة</span></span>
    </h2>

    <p class="text-gray-500 text-center text-lg max-w-lg self-center">
      <span v-if="tab === 'create'">اختر كلمة مرور قوية لحسابك لتأمين بياناتك.</span>
      <span v-if="tab === 'reset'"
        >نسيت كلمة المرور ؟ أدخل بريدك الإلكتروني المرتبط بحسابك لنرسل لك رابط إعادة تعيين كلمة
        المرور.</span
      >
    </p>

    <div class="overflow-x-auto md:w-fit md:mx-auto rounded-full py-1 px-2 bg-background">
      <div class="max-w-3xl items-center self-center flex gap-8 justify-between">
        <p
          style="min-width: fit-content"
          class="cursor-pointer rounded-full px-8 py-2 transition-colors"
          :class="tab === 'reset' ? 'gradient-bg text-white' : 'text-gray-500 bg-muted'"
          @click="emit('update:tab', 'reset')"
        >
          أعادة تعيين كلمة المرور
        </p>

        <p
          style="min-width: fit-content"
          class="cursor-pointer rounded-full px-8 py-2 transition-colors"
          :class="tab === 'create' ? 'gradient-bg text-white' : 'text-gray-500 bg-muted'"
          @click="emit('update:tab', 'create')"
        >
          إنشاء كلمة مرور جديدة
        </p>
      </div>
    </div>

    <form class="flex flex-col gap-4" @submit="onSubmit">
      <InputForm
        v-if="tab === 'reset'"
        name="email"
        placeholder="مثال : usear@gmail.com"
        lable="البريد الالكتروني"
      />
      <InputForm
        v-if="tab === 'create'"
        name="newPassword"
        input-type="password"
        placeholder="كلمة المرور الجديدة"
        lable="كلمة المرور الجديدة"
        icon="eyeGradient"
        icon-direction="left"
      />
      <div v-if="passwordStrength" class="flex flex-col gap-1">
        <div class="h-1.5 w-full rounded-full bg-muted overflow-hidden">
          <div
            class="h-full rounded-full transition-all duration-300"
            :class="passwordStrength.barClass"
            :style="{ width: passwordStrength.percentage + '%' }"
          />
        </div>
        <p class="text-xs" :class="passwordStrength.textClass">
          قوة كلمة المرور: {{ passwordStrength.label }}
        </p>
      </div>
      <InputForm
        v-if="tab === 'create'"
        name="confirmPassword"
        input-type="password"
        placeholder="تأكيد كلمة المرور"
        lable="تأكيد كلمة المرور"
        icon="eyeGradient"
        icon-direction="left"
      />
      <Button size="lg" variant="secondary" type="submit">
        {{ submitLabel }}
      </Button>
      <p class="self-center gradient-text cursor-pointer" @click="emit('back')">
        العودة إلى تسجيل الدخول
      </p>
    </form>
  </div>
</template>
