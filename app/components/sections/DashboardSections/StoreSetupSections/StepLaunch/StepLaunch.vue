<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Icons from '~/components/atoms/ARYAFIcon/Icons.vue'
import Button from '~/components/atoms/Button/Button.vue'
import './style.css'
import { PATHS } from '~/constants/paths'

interface IProps {
  storeName: string
}

const props = defineProps<IProps>()

const router = useRouter()

const phase = ref<'launching' | 'success'>('launching')

onMounted(() => {
  setTimeout(() => {
    phase.value = 'success'
  }, 3000)
})

const goToStoreReview = () => {
  router.push(PATHS.DASHBAORD_CREATE_STORE_STORE_REVIEW)
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-6 py-16 min-h-[60vh]">
    <div v-if="phase === 'launching'" class="flex flex-col items-center gap-6 animate-fade-in">
      <div class="launch-rocket relative">
        <div
          class="w-28 h-28 rounded-full gradient-bg/10 flex items-center justify-center launch-pulse"
        >
          <Icons name="rocketGradient" :width="56" :height="56" class="launch-float" />
        </div>

        <div class="absolute -inset-4 pointer-events-none">
          <span
            v-for="i in 6"
            :key="i"
            class="absolute w-1.5 h-1.5 rounded-full gradient-bg launch-spark"
            :style="{
              top: `${15 + Math.random() * 70}%`,
              left: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.3}s`,
            }"
          ></span>
        </div>
      </div>

      <div class="text-center">
        <h2 class="text-xl font-bold mb-2">
          جاري إطلاق متجرك
          <span class="gradient-text">{{ props.storeName }}</span>
          ...
        </h2>
        <p class="text-sm text-gray-400">لحظات ونكون جاهزين</p>
      </div>

      <div class="flex items-center gap-2">
        <span
          v-for="i in 3"
          :key="i"
          class="w-2 h-2 rounded-full gradient-bg loading-dot"
          :style="{ animationDelay: `${i * 0.4}s` }"
        ></span>
      </div>
    </div>

    <div v-else class="flex flex-col items-center gap-6 animate-fade-in">
      <div class="w-28 h-28 rounded-full gradient-bg flex items-center justify-center success-pop">
        <svg
          class="w-14 h-14 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <div class="text-center">
        <h2 class="text-2xl font-bold mb-2">
          تهانينا! متجرك
          <span class="gradient-text">{{ storeName }}</span>
          مباشر الآن!
        </h2>
        <p class="text-secondary-foreground text-sm">
          يمكنك الآن البدء بإضافة منتجاتك وتنظيم متجرك
        </p>
      </div>

      <Button size="lg" class="mt-4" @click="goToStoreReview"> الانتقال إلى المتجر </Button>
    </div>
  </div>
</template>
