<script setup lang="ts">
import { hero, hero1, hero2, hero3 } from '~/assets/images'
import Icons from '~/components/atoms/Button/ARYAFIcon/Icons.vue'
import Button from '~/components/atoms/Button/Button.vue'
import ButtonWithIcon from '~/components/molecules/ButtonWithIcon/ButtonWithIcon.vue'
</script>

<template>
  <section
    class="section-container section-spacing-top flex flex-col justify-between gap-6 lg:flex-row"
  >
    <article class="flex flex-col gap-8 self-center">
      <h2
        class="max-w-full text-center leading-normal clamp-text-lg font-semibold lg:leading-22 lg:max-w-3xl lg:text-start"
      >
        من <span class="gradient-text">فــــــــــــــــــــــــكرة</span> في رأسك إلى عــــلامة
        تجارية <span class="gradient-text">على الإنترنت</span>
      </h2>
      <p class="max-w-full text-gray-500 clamp-text-sm lg:max-w-3xl">
        أنشئ متجرك الإلكتروني في دقائق، واربط منتجاتك بمجموعة متكاملة من الحلول الرقميَّة الذكيَّة
        للمدفوعات، والشحن، وإدارة المخزون، والتسويق، بكل سهولة
      </p>
      <div class="flex items-center justify-center gap-6 flex-wrap sm:justify-start">
        <ButtonWithIcon icon-name="arrowLeftGradient" size="lg"> أنشئ متجرك مجاناً </ButtonWithIcon>

        <Button size="lg" variant="outline-gradient" class="backdrop-blur-md"
          >اكتشف المتجر التجريبي</Button
        >
      </div>
    </article>

    <article class="relative">
      <div class="w-full h-full overflow-hidden">
        <img class="w-full h-full object-cover" :src="hero" alt="" />
      </div>

      <div class="absolute right-0 top-[35%] -translate-y-1/2" style="width: min(45%, 250px)">
        <img :src="hero1" alt="" />
      </div>
      <div class="absolute left-0 top-[50%] -translate-y-1/2" style="width: min(45%, 250px)">
        <img :src="hero2" alt="" />
      </div>
      <div class="absolute right-0 top-[60%] -translate-y-1/2" style="width: min(45%, 250px)">
        <img :src="hero3" alt="" />
      </div>
      <div class="absolute left-0 top-[75%] -translate-y-1/2" style="width: min(45%, 250px)">
        <img :src="hero1" alt="" />
      </div>
    </article>
  </section>
</template>
