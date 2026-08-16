<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import OtpInput from '~/components/molecules/OtpInput/OtpInput.vue'
import Button from '~/components/atoms/Button/Button.vue'

interface IProps {
  email: string
}

defineProps<IProps>()

const emit = defineEmits<{
  back: []
}>()

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
    otpStatus.value = otpCheck.value === otpCode.value ? 'correct' : 'wrong'
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

onMounted(() => {
  nextTick(() => focusOtpInput(0))
})
</script>

<template>
  <div class="flex flex-col gap-6">
    <h2 class="clamp-text-md text-center">
      تحقق من بريدك ، <span class="gradient-text">ارسالنا رمز التحقق</span>
    </h2>

    <p class="text-gray-500 text-center text-lg max-w-lg self-center">
      تحقق من بريدك أرسلنا رمز التحقق إلى
      <span dir="ltr" class="font-semibold text-zinc-700">{{ email }}</span>
      أدخل الرمز بالأسفل لإكمال عمليه استعاده كلمه المرور
    </p>

    <div class="flex items-center justify-center gap-2" dir="ltr">
      <OtpInput
        v-for="(_, index) in otpDigits"
        :key="index"
        :ref="setOtpInputRef(index)"
        :model-value="otpDigits[index]"
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
      <Button size="lg" variant="secondary" type="button" @click="emit('back')">
        العودة إلى تسجيل الدخول
      </Button>
    </div>
  </div>
</template>
