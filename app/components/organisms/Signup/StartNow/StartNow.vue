<script setup lang="ts">
import Icons from '~/components/atoms/ARYAFIcon/Icons.vue'
import Button from '~/components/atoms/Button/Button.vue'

const router = useRouter()

const goToHome = () => router.push('/')
</script>

<template>
  <div class="flex flex-col items-center gap-6 py-10">
    <div class="w-24 h-24 rounded-full gradient-bg flex items-center justify-center splash-pop">
      <Icons name="check" :width="12" :height="12" />
    </div>

    <h2 class="clamp-text-md text-center">
      كل شيء جاهز، <span class="gradient-text">ابدأ الآن!</span>
    </h2>

    <p class="text-gray-500 text-center text-lg max-w-lg self-center">
      تم إنشاء متجرك بنجاح في أرياف، انطلق الآن لتبدأ ببيع منتجاتك وجني الأرباح.
    </p>

    <Button size="lg" type="button" @click="goToHome">الانتقال إلى لوحة التحكم</Button>
  </div>
</template>

<style scoped>
@keyframes splash-pop {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  60% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.splash-pop {
  animation: splash-pop 0.5s ease forwards;
}
</style>
