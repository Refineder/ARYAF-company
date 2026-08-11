<script setup lang="ts">
import { hero, hero1, hero2, hero3 } from '~/assets/images'
import Icons from '~/components/atoms/Button/ARYAFIcon/Icons.vue'
import Button from '~/components/atoms/Button/Button.vue'
</script>

<template>
  <section
    class="section-container section-spacing-top flex flex-col justify-between gap-6 lg:flex-row"
  >
    <article class="flex flex-col gap-8 self-center">
      <h2
        class="max-w-full text-center leading-normal font-semibold lg:leading-22 lg:max-w-3xl lg:text-start"
        style="font-size: clamp(25px, 5vw, 68px)"
      >
        من <span class="gradient-text">فــــــــــــــــــــــــكرة</span> في رأسك إلى عــــلامة
        تجارية <span class="gradient-text">على الإنترنت</span>
      </h2>
      <p class="max-w-full text-gray-500 lg:max-w-3xl" style="font-size: clamp(16px, 3vw, 24px)">
        أنشئ متجرك الإلكتروني في دقائق، واربط منتجاتك بمجموعة متكاملة من الحلول الرقميَّة الذكيَّة
        للمدفوعات، والشحن، وإدارة المخزون، والتسويق، بكل سهولة
      </p>
      <div class="flex items-center gap-6 flex-wrap">
        <Button size="lg">
          <div class="flex items-center gap-4">
            أنشئ متجرك مجاناً
            <div class="bg-white p-2 w-fit rounded-full">
              <Icons name="arrowLeftGradient" />
            </div>
          </div>
        </Button>

        <Button size="lg" variant="outline">اكتشف المتجر التجريبي</Button>
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
