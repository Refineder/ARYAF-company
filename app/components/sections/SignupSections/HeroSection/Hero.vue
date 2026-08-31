<script setup lang="ts">
import { ref } from 'vue'
import { loginHero, logo } from '~/assets/images'
import UserData from '~/components/organisms/Signup/UserData/UserData.vue'
import StoreSetup from '~/components/organisms/Signup/StoreSetup/StoreSetup.vue'
import PricingPlans from '~/components/organisms/Signup/PricingPlans/PricingPlans.vue'
import BusinessVerification from '~/components/organisms/Signup/BusinessVerification/BusinessVerification.vue'
import StartNow from '~/components/organisms/Signup/StartNow/StartNow.vue'
import Icons from '~/components/atoms/ARYAFIcon/Icons.vue'
import '~/assets/css/select.css'
import { PATHS } from '~/constants/paths'

const steps = [
  { key: 1, label: 'بيانات المستخدم' },
  { key: 2, label: 'إعداد المتجر' },
  { key: 3, label: 'خطة الأسعار' },
  { key: 4, label: 'التحقق التجاري' },
  { key: 5, label: 'ابدأ الآن' },
]

const activeStep = ref(1)

const router = useRouter()

const goToHome = () => router.push(PATHS.HOME)

const goToStep = (key: number) => {
  activeStep.value = key
}
const goToLogin = () => router.push(PATHS.LOGIN)
</script>

<template>
  <section class="py-20 bg-secondary-dark rounded-2xl m-2">
    <div
      class="z-20 relative section-container grid"
      style="grid-template-columns: repeat(auto-fit, minmax(min(450px, 100%), 1fr))"
    >
      <article
        class="flex shrink w-full max-w-5xl flex-col gap-6 bg-white/95 p-8 rounded-lg md:rounded-none md:rounded-r-lg"
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
          <UserData v-if="activeStep === 1" @next="goToStep(2)" />
          <StoreSetup v-else-if="activeStep === 2" @next="goToStep(3)" />
          <PricingPlans v-else-if="activeStep === 3" @next="goToStep(4)" />
          <BusinessVerification v-else-if="activeStep === 4" @next="goToStep(5)" />
          <StartNow v-else />
        </div>

        <div class="flex flex-wrap items-center justify-center">
          <p class="font-semibold cursor-pointer" @click="goToLogin">
            لديك حساب؟ <span class="gradient-text">تسجيل الدخول</span>
          </p>
        </div>

        <div class="self-center mt-auto">
          <p>
            بالمتابعة، فإنك توافق على <span class="font-semibold">الشروط</span> و<span
              class="font-semibold"
              >سياسة الخصوصية</span
            >
          </p>
        </div>
      </article>

      <article class="relative overflow-hidden rounded-lg md:rounded-none md:rounded-l-lg">
        <img
          class="object-top md:object-cover w-full max-w-7xl"
          :src="loginHero"
          alt="signup-hero"
        />

        <div
          class="border border-gray-500 rounded-full py-1 backdrop-blur absolute top-8 left-[50%] mx-auto -translate-x-1/2 px-4 md:px-8 overflow-x-auto"
          style="background-color: rgba(0, 0, 0, 0.3); width: min(100%, 700px)"
        >
          <div class="mx-auto shadow-lg">
            <div class="flex items-center gap-2 justify-between md:gap-1">
              <p
                v-for="step in steps"
                :key="step.key"
                style="min-width: fit-content"
                class="cursor-pointer rounded-full px-3 md:px-5 py-2 text-xs md:text-sm font-semibold whitespace-nowrap transition-colors"
                :class="activeStep === step.key ? 'gradient-bg text-white' : 'text-gray-500'"
                @click="goToStep(step.key)"
              >
                <span class="relative flex items-center gap-1.5">
                  <span
                    v-if="activeStep > step.key"
                    class="flex absolute -left-5 items-center justify-center w-4 h-4 rounded-full backdrop-blur-md text-white text-[10px]"
                    style="background-color: rgba(255, 255, 255, 0.2)"
                  >
                    <Icons name="checkGradient" />
                  </span>
                  <span>{{ step.label }}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

