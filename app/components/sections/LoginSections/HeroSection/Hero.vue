<script setup lang="ts">
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import { loginHero, logo } from '~/assets/images'
import InputForm from '~/components/molecules/InputForm/InputForm.vue'
import * as yup from 'yup'
import { toTypedSchema } from '@vee-validate/yup'
import Button from '~/components/atoms/Button/Button.vue'

const activeTab = ref<'password' | 'otp'>('password')

const schema = toTypedSchema(
  yup.object({
    email: yup.string().required('البريد الالكتروني مطلوب').email('بريد إلكتروني غير صحيح'),
    password: yup.string().required('كلمة مرور غير صالحة'),
    code: yup.string().required('رمز التحقق مطلوب'),
  })
)

const { handleSubmit } = useForm({
  validationSchema: schema,
})

const onSubmit = handleSubmit((values) => {
  console.log('تم تأكيد البيانات:', values)
})
</script>

<template>
  <section class="section-container mb-20 flex flex-col justify-between md:flex-row">
    <article class="flex flex-col gap-6 w-full bg-white/95 p-8 rounded-r-lg">
      <div class="flex justify-between items-center gap-4 flex-wrap">
        <div>
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
        <h2 class="clamp-text-md text-center">
          مرحبًا بعودتك إلى <span class="gradient-text">أرياف</span>
        </h2>

        <p class="text-gray-500 text-center text-lg max-w-lg self-center">
          سجّل الدخول للوصول إلى متجرك، إدارة منتجاتك، متابعة الطلبات، وتنمية أعمالك من مكان واحد.
        </p>

        <div class="overflow-x-auto md:w-fit md:mx-auto rounded-full py-1 px-2 bg-background">
          <div class="max-w-3xl items-center self-center flex gap-8 justify-between">
            <p
              style="min-width: fit-content"
              class="cursor-pointer rounded-full px-8 py-2 transition-colors"
              :class="
                activeTab === 'password' ? 'gradient-bg text-white' : 'text-gray-500 bg-muted'
              "
              @click="activeTab = 'password'"
            >
              تسجيل بكلمه المرور
            </p>

            <p
              style="min-width: fit-content"
              class="cursor-pointer rounded-full px-8 py-2 transition-colors"
              :class="activeTab === 'otp' ? 'gradient-bg text-white' : 'text-gray-500 bg-muted'"
              @click="activeTab = 'otp'"
            >
              تسجيل برمز التحقق
            </p>
          </div>
        </div>

        <form class="flex flex-col gap-4" @submit="onSubmit">
          <InputForm name="email" placeholder="مثال : usear@gmail.com" lable="البريد الالكتروني" />
          <InputForm
            v-if="activeTab === 'password'"
            name="password"
            input-type="password"
            placeholder="كلمه المرور"
            lable="كلمه المرور"
            icon="eyeGradient"
            icon-direction="left"
          />
          <p class="self-end">نسيت كلمة المرور؟</p>
          <Button size="lg" variant="secondary" type="submit">
            {{ activeTab === 'password' ? 'تسجيل الدخول' : 'ارسال رمز التحقق' }}
          </Button>
          <div class="grid gap-3 items-center" style="grid-template-columns: 1fr auto 1fr">
            <span class="w-full h-px bg-muted-foreground inline-block" />
            <p>أو</p>
            <span class="w-full h-px bg-muted-foreground inline-block" />
          </div>
          <Button size="lg" variant="outline" type="button">تسجيل الدخول باستخدام Google </Button>
        </form>
        <div class="flex flex-wrap items-center justify-center">
          <p>ليس لديك حساب؟</p>
          <p class="gradient-text cursor-pointer">انشاء حساب جديد</p>
        </div>
      </div>
    </article>
    <article class="w-full h-full overflow-hidden max-w-2xl rounded-l-lg">
      <img :src="loginHero" alt="login-hero" />
    </article>
  </section>
</template>
