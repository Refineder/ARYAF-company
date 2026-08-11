<script setup lang="ts">
import { ideaLeft, ideaRight } from '~/assets/images'
import Icons from '~/components/atoms/Button/ARYAFIcon/Icons.vue'
import Button from '~/components/atoms/Button/Button.vue'
</script>

<template>
  <section class="relative section-container-lg rounded-xl py-25">
    <div class="absolute bottom-0 left-0 -z-20" style="width: min(20%, 180px)">
      <img :src="ideaLeft" alt="idea-left" />
    </div>
    <div class="absolute right-0 top-0" style="width: min(40%, 450px)">
      <img :src="ideaRight" alt="idea-right" />
    </div>

    <div class="flex flex-col justify-center items-center gap-4">
      <h2 class="font-semibold" style="font-size: clamp(22px, 3vw, 38px)">
        <span class="gradient-text">من فكرة بسيطة،</span> إلى متجر ناجح
      </h2>
      <p class="max-w-3xl text-gray-500 text-center" style="font-size: clamp(13px, 3vw, 24px)">
        ARYAF تمنحك طريقة أسرع وأسهل لبناء متجرك الإلكتروني.أنشئ موقعك، أطلق متجرك، وابدأ البيع خلال
        دقائق باستخدام أدوات ذكية وقوالب احترافية جاهزة.
      </p>
      <Button size="lg">
        <div class="flex items-center gap-4 font-normal">
          أنشئ متجرك مجاناً
          <div class="bg-white p-2 w-fit rounded-full">
            <Icons name="arrowLeftGradient" />
          </div>
        </div>
      </Button>
    </div>
  </section>
</template>
