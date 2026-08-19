<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { toTypedSchema } from '@vee-validate/yup'
import { psFlag, soaFlag } from '~/assets/images'
import InputForm from '~/components/molecules/InputForm/InputForm.vue'
import Button from '~/components/atoms/Button/Button.vue'
import OtpInput from '~/components/molecules/OtpInput/OtpInput.vue'
import './style.css'
import { COUNTRIES } from '~/constants/countries'
import Icons from '~/components/atoms/ARYAFIcon/Icons.vue'

const emit = defineEmits<{ next: [] }>()

const schema = toTypedSchema(
  yup.object({
    fullName: yup.string().required('الاسم الكريم مطلوب').min(2, 'الاسم قصير جدًا'),
    email: yup.string().required('البريد الالكتروني مطلوب').email('بريد إلكتروني غير صحيح'),
  })
)

const { handleSubmit, errors, meta } = useForm({
  validationSchema: schema,
})

const onSubmit = handleSubmit((values) => {
  if (phoneError.value) return
  view.value = 'otp'
})

const view = ref<'form' | 'otp' | 'success'>('form')

const activeCountry = ref(COUNTRIES[0])

const activeCountryFlag = ref(soaFlag)

const phone = ref('')

const onCountryChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  const country = COUNTRIES.find((c) => c.name === target.value) ?? COUNTRIES[0]
  activeCountry.value = country
  activeCountryFlag.value = country?.flag || psFlag
}

const onPhoneInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  const sanitized = input.value.replace(/\D/g, '').slice(0, 9)
  input.value = sanitized
  phone.value = sanitized
}

const phoneError = computed(() => {
  if (!phone.value) return 'رقم الجوال مطلوب'
  if (phone.value.length < 9) return 'رقم الجوال غير صحيح'
  return ''
})

const otpCode = ref(String(Math.floor(10000 + Math.random() * 90000)))

const otpDigits = ref<string[]>(Array(5).fill(''))

const otpInputRefs = ref<(InstanceType<typeof OtpInput> | null)[]>([])

const otpStatus = ref<'idle' | 'correct' | 'wrong'>('idle')

const otpCheck = ref('')

const setOtpInputRef = (index: number) => (el: unknown) => {
  otpInputRefs.value[index] = el as InstanceType<typeof OtpInput> | null
}

const focusOtpInput = (index: number) => {
  otpInputRefs.value[index]?.focus()
}

const onOtpInput = (index: number, value: string) => {
  otpDigits.value[index] = value
  if (value && index < otpDigits.value.length - 1) {
    focusOtpInput(index + 1)
  }
  otpCheck.value = otpDigits.value.join('')
  if (otpCheck.value.length === otpDigits.value.length) {
    if (otpCheck.value === otpCode.value) {
      otpStatus.value = 'correct'
      nextTick(() => {
        view.value = 'success'
        setTimeout(() => emit('next'), 1800)
      })
    } else {
      otpStatus.value = 'wrong'
    }
  }
}

const onOtpKeydown = (index: number, event: KeyboardEvent) => {
  if (event.key === 'Backspace' && !otpDigits.value[index] && index > 0) {
    event.preventDefault()
    otpDigits.value[index - 1] = ''
    focusOtpInput(index - 1)
  }
}

const resetOtp = () => {
  otpStatus.value = 'idle'
  otpCheck.value = ''
  otpDigits.value = Array(5).fill('')
  nextTick(() => focusOtpInput(0))
}

const isValid = computed(() => {
  return meta.value.valid
})
</script>

<template>
  <div v-if="view === 'form'" class="flex flex-col gap-6">
    <h2 class="clamp-text-md text-center font-semibold">
      انشاء <span class="gradient-text">حساب جديد</span>
    </h2>

    <p class="text-gray-500 text-center text-lg max-w-lg self-center">
      أنشئ حسابك وابدأ رحلتك مع أريف اليوم.
    </p>

    <form class="flex flex-col gap-4" @submit="onSubmit">
      <InputForm name="fullName" placeholder="مثال : فهد يحيي مجرشي" lable="الاسم الكريم" />

      <div class="flex flex-col gap-2 w-full">
        <label class="text-lg text-zinc-500">رقم الجوال</label>
        <div
          class="flex items-center gap-2 border border-zinc-200 focus-within:outline-2 focus-within:outline-primary-foreground px-4 py-2 rounded-md"
          :class="[phoneError ? 'border-rose-500!' : '']"
        >
          <span class="h-6 w-px bg-zinc-200" />
          <input
            :value="phone"
            inputmode="numeric"
            type="tel"
            placeholder="رقم الجوال"
            class="grow outline-0 min-w-0 caret-primary-foreground"
            @input="onPhoneInput"
          />

          <div class="relative shrink-0">
            <select
              class="appearance-none outline-0 cursor-pointer bg-transparent pr-4 text-zinc-700"
              :value="activeCountry?.name"
              @change="onCountryChange"
            >
              <option v-for="c in COUNTRIES" :key="c.dial" :value="c.name">
                {{ c.dial }}
              </option>
            </select>
          </div>
          <img
            class="w-6 h-4 object-cover rounded-sm shrink-0"
            :src="activeCountryFlag"
            :alt="activeCountry?.name"
          />
        </div>
        <span v-if="phoneError" class="text-xs text-red-500">{{ phoneError }}</span>
      </div>

      <InputForm name="email" placeholder="مثال : usear@gmail.com" lable="البريد الالكتروني" />

      <Button size="lg" :variant="isValid ? 'default' : 'secondary'" type="submit"
        >ارسال رمز التحقق</Button
      >
      <div class="grid gap-3 items-center" style="grid-template-columns: 1fr auto 1fr">
        <span class="w-full h-px bg-muted-foreground inline-block" />
        <p>أو</p>
        <span class="w-full h-px bg-muted-foreground inline-block" />
      </div>
      <Button size="lg" variant="outline" type="button">تسجيل الدخول باستخدام Google</Button>
    </form>
  </div>

  <div v-else-if="view === 'otp'" class="flex flex-col gap-6">
    <h2 class="clamp-text-md text-center">
      تحقق من هاتفك ، <span class="gradient-text">ارسالنا رمز التحقق</span>
    </h2>

    <p class="text-gray-500 text-center text-lg max-w-lg self-center">
      تحقق من هاتفك أرسلنا رمز التحقق إلى {{ phone }}. أدخل الرمز بالأسفل لإكمال عمليه استعاده كلمه
      المرور
    </p>

    <div class="flex items-center justify-center gap-2" dir="ltr">
      <OtpInput
        v-for="(_, index) in otpDigits"
        :key="index"
        :ref="setOtpInputRef(index)"
        :model-value="otpDigits[index] ?? ''"
        :invalid="otpStatus === 'wrong'"
        @update:model-value="onOtpInput(index, $event)"
        @keydown="onOtpKeydown(index, $event)"
      />
    </div>

    <p v-if="otpStatus === 'correct'" class="text-center text-green-600 font-semibold">
      رمز التحقق صحيح
    </p>
    <p v-else-if="otpStatus === 'wrong'" class="text-center text-red-500 font-semibold">
      رمز التحقق غير صحيح، حاول مرة أخرى
    </p>

    <div class="flex items-center justify-center gap-2 text-sm text-gray-400">
      <span>رمز التحقق التجريبي:</span>
      <span dir="ltr" class="tracking-widest">{{ otpCode }}</span>
    </div>

    <div class="flex justify-center gap-4">
      <Button
        v-if="otpStatus !== 'correct'"
        size="lg"
        variant="outline"
        type="button"
        @click="resetOtp"
      >
        إعادة المحاولة
      </Button>
      <Button size="lg" variant="secondary" type="button" @click="view = 'form'">
        تعديل البيانات
      </Button>
    </div>
  </div>

  <div v-else class="flex flex-col items-center gap-6 py-10">
    <div class="w-24 h-24 rounded-full gradient-bg flex items-center justify-center splash-pop">
      <Icons name="check" :width="12" :height="12" />
    </div>

    <h2 class="clamp-text-md text-center">تم <span class="gradient-text">التحقق بنجاح!</span></h2>

    <p class="text-gray-500 text-center text-lg max-w-lg self-center">
      يتم الآن تحويلك إلى إعداد المتجر...
    </p>
  </div>
</template>
