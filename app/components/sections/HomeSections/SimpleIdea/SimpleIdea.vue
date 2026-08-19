<script setup lang="ts">
import { ideaLeft, ideaRight } from '~/assets/images'
import Icons from '~/components/atoms/ARYAFIcon/Icons.vue'
import Button from '~/components/atoms/Button/Button.vue'
import ButtonWithIcon from '~/components/molecules/ButtonWithIcon/ButtonWithIcon.vue'
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
      <h2 class="font-semibold clamp-text-md">
        <span class="gradient-text">من فكرة بسيطة،</span> إلى متجر ناجح
      </h2>
      <p class="max-w-3xl text-gray-500 text-center clamp-text-sm">
        ARYAF تمنحك طريقة أسرع وأسهل لبناء متجرك الإلكتروني.أنشئ موقعك، أطلق متجرك، وابدأ البيع خلال
        دقائق باستخدام أدوات ذكية وقوالب احترافية جاهزة.
      </p>
      <ButtonWithIcon icon-name="arrowLeftGradient"> أنشئ متجرك مجاناً </ButtonWithIcon>
    </div>
  </section>
</template>
