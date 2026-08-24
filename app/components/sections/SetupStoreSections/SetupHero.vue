<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { gradientArrowDown, logo, setupHero } from '~/assets/images'
import ButtonWithIcon from '~/components/molecules/ButtonWithIcon/ButtonWithIcon.vue'
import StepProgress from './StepProgress.vue'
import StepOne from './StepOne.vue'
import StepTwo from './StepTwo.vue'
import StepThree from './StepThree.vue'
import StepFour from './StepFour.vue'
import StepFive from './StepFive.vue'
import StepSix from './StepSix.vue'
import StepSeven from './StepSeven.vue'
import Button from '~/components/atoms/Button/Button.vue'

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7

const router = useRouter()

const goToHome = () => router.push('/')

const totalSteps = 7

const stepComponents = [StepOne, StepTwo, StepThree, StepFour, StepFive, StepSix, StepSeven]

const started = ref(false)

const currentStep = ref<Step>(1)

const finished = ref(false)

const answers = reactive<Record<Step, string[]>>({
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
})

const canContinue = computed(() => (answers[currentStep.value]?.length ?? 0) > 0)

const isLastStep = computed(() => currentStep.value === totalSteps)

const startSetup = () => {
  started.value = true
}

const nextStep = () => {
  if (!canContinue.value) return
  if (isLastStep.value) {
    finished.value = true
    return
  }
  currentStep.value++
}

const prevStep = () => {
  if (finished.value) {
    finished.value = false
    return
  }
  if (currentStep.value === 1) {
    started.value = false
    return
  }
  currentStep.value--
}
</script>

<template>
  <article class="p-4">
    <div class="rounded-4xl bg-secondary-dark p-4" style="corner-shape: squircle">
      <section
        class="rounded-[50px] min-h-svh p-8 flex flex-col gap-6 z-20 relative"
        style="corner-shape: squircle; background-color: oklch(from white l c h / 0.95)"
      >
        <div class="flex justify-between items-center gap-4 flex-wrap">
          <div class="flex items-center gap-2 flex-wrap cursor-pointer" @click="goToHome">
            <div>
              <img class="w-10" :src="logo" alt="logo" />
            </div>

            <p class="text-lg font-semibold">ارياف</p>
          </div>

          <div v-if="started && !finished" class="grow overflow-x-auto px-2">
            <div class="min-w-2xl w-fit mx-auto">
              <StepProgress :total="totalSteps" :current="currentStep" />
            </div>
          </div>

          <div class="w-12 h-12 rounded-full bg-accent flex justify-center items-center">
            <div class="gradient-text">EN</div>
          </div>
        </div>

        <div v-if="!started" class="self-center flex justify-center items-center flex-col">
          <div class="max-w-md h-full overflow-hidden">
            <img class="w-full h-full object-cover" :src="setupHero" alt="setup-hero" />
          </div>

          <div class="flex flex-col gap-6 justify-center items-center">
            <h3 class="clamp-text-sm text-center font-semibold">
              حيَّاك محمود محمد ، <span class="gradient-text">دعنا نتعرّف على تجارتك.</span>
            </h3>

            <p class="max-w-lg text-center text-secondary-foreground">
              قبل أن نبدأ، نود التعرّف عليك وعلى نشاطك التجاري من خلال بضعة أسئلة سريعة، لنهيئ تجربة
              تناسب احتياجاتك منذ البداية.
              <span class="text-foreground">لن تستغرق أكثر من دقيقة</span>
            </p>

            <ButtonWithIcon
              class="w-full"
              size="lg"
              icon-name="arrowLeftGradient"
              @click="startSetup"
            >
              ابدا الان في بناء متجرك
            </ButtonWithIcon>
          </div>
        </div>

        <div
          v-else-if="!finished"
          class="self-center grow flex flex-col justify-center items-center gap-8 py-10 w-full"
        >
          <component :is="stepComponents[currentStep - 1]" v-model="answers[currentStep]" />

          <div class="flex items-center gap-3 w-full max-w-3xl">
            <Button
              class="grow"
              size="lg"
              :disabled="!canContinue"
              :class="canContinue ? '' : 'opacity-60'"
              @click="nextStep"
            >
              {{ isLastStep ? 'انشاء المتجر' : 'التالي' }}
            </Button>

            <Button
              type="button"
              variant="secondary"
              size="lg"
              class="flex gap-2 items-center cursor-pointer rounded-full px-6 py-3 text-lg font-semibold"
              @click="prevStep"
            >
              <p class="gradient-text">{{ currentStep === 1 ? 'العودة' : 'السابق' }}</p>
              <img class="rotate-90" :src="gradientArrowDown" alt="gradientArrowDown" />
            </Button>
          </div>
        </div>

        <div v-else class="self-center flex flex-col justify-center items-center gap-6 py-16">
          <div
            class="w-24 h-24 rounded-full gradient-bg flex items-center justify-center splash-pop"
          >
            <svg
              class="w-12 h-12 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h3 class="clamp-text-sm text-center font-semibold">
            تم بناء <span class="gradient-text">متجرك بنجاح!</span>
          </h3>

          <p class="max-w-lg text-center text-secondary-foreground">
            جهزنا كل شيء حسب إجاباتك، يمكنك الآن البدء بإضافة منتجاتك والانطلاق نحو أول عملية بيع.
          </p>

          <ButtonWithIcon
            class="w-full max-w-md"
            size="lg"
            icon-name="arrowLeftGradient"
            @click="goToHome"
          >
            الانتقال إلى لوحة التحكم
          </ButtonWithIcon>
        </div>

        <p v-if="!finished" class="text-center mt-auto">
          بالمتابعة، فإنك توافق على الشروط و سياسة الخصوصية
        </p>
      </section>
    </div>
  </article>
</template>
