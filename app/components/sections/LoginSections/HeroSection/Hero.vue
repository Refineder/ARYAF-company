<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useForm, useFormValues } from 'vee-validate'
import { loginHero, logo } from '~/assets/images'
import InputForm from '~/components/molecules/InputForm/InputForm.vue'
import * as yup from 'yup'
import { toTypedSchema } from '@vee-validate/yup'
import Button from '~/components/atoms/Button/Button.vue'
import OtpVerification from '~/components/organisms/Login/OtpVerification/OtpVerification.vue'
import PasswordRecovery from '~/components/organisms/Login/PasswordRecovery/PasswordRecovery.vue'

const ui = reactive({
  activeTab: 'password' as 'password' | 'otp',
  view: 'login' as 'login' | 'otp' | 'recover',
  recoverTab: 'reset' as 'reset' | 'create',
})

const otpEmail = ref('')

const recoverEmail = ref('')

const router = useRouter()

const schema = computed(() =>
  toTypedSchema(
    yup.object({
      email: yup.string().required('البريد الالكتروني مطلوب').email('بريد إلكتروني غير صحيح'),
      password:
        ui.activeTab === 'password'
          ? yup.string().required('كلمة مرور غير صالحة')
          : yup.string().notRequired(),
    }),
  ),
)

const { handleSubmit } = useForm({
  validationSchema: schema,
})

const formValues = useFormValues()

const emailValue = computed(() => (formValues.value?.email as string | undefined) ?? '')

const openRecover = (tab: 'reset') => {
  ui.recoverTab = tab
  recoverEmail.value = emailValue.value
  ui.view = 'recover'
}

const sendOtp = () => {
  otpEmail.value = emailValue.value
  ui.view = 'otp'
}

const onSubmit = handleSubmit((values) => {
  if (ui.activeTab === 'otp') {
    sendOtp()
  } else {
    console.log('تم تأكيد بيانات تسجيل الدخول:', values)
  }
})

const onRecoverSubmit = (values: unknown) => {
  console.log('تم إعادة تعيين كلمة المرور:', values)
}

const goToHome = () => router.push('/')
const goToSignup = () => router.push('/signup')
</script>

<template>
  <section class="py-20 bg-secondary-dark rounded-2xl m-2">
    <div
      class="z-20 relative section-container grid"
      style="grid-template-columns: repeat(auto-fit, minmax(min(450px, 100%), 1fr))"
    >
      <article
        class="flex w-full flex-col gap-6 bg-white/95 p-8 rounded-lg md:rounded-none md:rounded-r-lg"
      >
        <div class="flex justify-between items-center gap-4 flex-wrap">
          <div class="flex items-center gap-2 flex-wrap cursor-pointer" @click="goToHome">
            <div>
              <img class="w-10" :src="logo" alt="logo" />
            </div>

            <p class="text-lg font-semibold">ارياف</p>
          </div>

          <div class="w-12 h-12 rounded-full bg-accent flex justify-center items-center">
            <div class="gradient-text">EN</div>
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <template v-if="ui.view === 'login'">
            <h2 class="clamp-text-md text-center">
              مرحبًا بعودتك إلى <span class="gradient-text">أرياف</span>
            </h2>

            <p class="text-gray-500 text-center text-lg max-w-lg self-center">
              سجّل الدخول للوصول إلى متجرك، إدارة منتجاتك، متابعة الطلبات، وتنمية أعمالك من مكان
              واحد.
            </p>

            <div class="overflow-x-auto md:w-fit md:mx-auto rounded-full py-1 px-2 bg-background">
              <div class="max-w-3xl items-center self-center flex gap-8 justify-between">
                <p
                  style="min-width: fit-content"
                  class="cursor-pointer rounded-full px-8 py-2 transition-colors"
                  :class="
                    ui.activeTab === 'password'
                      ? 'gradient-bg text-white'
                      : 'text-gray-500 bg-muted'
                  "
                  @click="ui.activeTab = 'password'"
                >
                  تسجيل بكلمه المرور
                </p>

                <p
                  style="min-width: fit-content"
                  class="cursor-pointer rounded-full px-8 py-2 transition-colors"
                  :class="
                    ui.activeTab === 'otp' ? 'gradient-bg text-white' : 'text-gray-500 bg-muted'
                  "
                  @click="ui.activeTab = 'otp'"
                >
                  تسجيل برمز التحقق
                </p>
              </div>
            </div>

            <form class="flex flex-col gap-4" @submit="onSubmit">
              <InputForm
                name="email"
                placeholder="مثال : usear@gmail.com"
                lable="البريد الالكتروني"
              />
              <InputForm
                v-if="ui.activeTab === 'password'"
                name="password"
                input-type="password"
                placeholder="كلمه المرور"
                lable="كلمه المرور"
                icon="eyeGradient"
                icon-direction="left"
              />
              <p class="self-end cursor-pointer" @click="openRecover('reset')">نسيت كلمة المرور؟</p>
              <Button
                v-if="ui.activeTab === 'password'"
                size="lg"
                variant="secondary"
                type="submit"
              >
                تسجيل الدخول
              </Button>
              <Button
                v-else-if="ui.activeTab === 'otp'"
                size="lg"
                variant="secondary"
                type="submit"
              >
                ارسال رمز التحقق
              </Button>
              <div class="grid gap-3 items-center" style="grid-template-columns: 1fr auto 1fr">
                <span class="w-full h-px bg-muted-foreground inline-block"></span>
                <p>أو</p>
                <span class="w-full h-px bg-muted-foreground inline-block"></span>
              </div>
              <Button size="lg" variant="outline" type="button"
                >تسجيل الدخول باستخدام Google</Button
              >
            </form>
            <div class="flex flex-wrap items-center justify-center">
              <p>
                ليس لديك حساب؟
                <span class="gradient-text cursor-pointer font-semibold" @click="goToSignup"
                  >انشاء حساب جديد</span
                >
              </p>
            </div>
          </template>

          <OtpVerification
            v-else-if="ui.view === 'otp'"
            :email="otpEmail"
            @back="ui.view = 'login'"
          />

          <PasswordRecovery
            v-else-if="ui.view === 'recover'"
            v-model:tab="ui.recoverTab"
            :email="recoverEmail"
            @submitted="onRecoverSubmit"
            @back="ui.view = 'login'"
          />
        </div>
      </article>
      <article class="overflow-hidden rounded-lg md:rounded-none md:rounded-l-lg">
        <img class="h-full object-cover w-full max-w-7xl" :src="loginHero" alt="login-hero" />
      </article>
    </div>
  </section>
</template>
