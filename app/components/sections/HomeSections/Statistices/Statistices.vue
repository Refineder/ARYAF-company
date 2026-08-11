<script setup lang="ts">
import Icons from '~/components/atoms/Button/ARYAFIcon/Icons.vue'
</script>

<template>
  <div class="section-spacing-top bg-accent py-20">
    <section class="section-container flex flex-col gap-6">
      <h2 class="text-center font-semibold" style="font-size: clamp(24px, 5vw, 38px)">
        من الفكرة الى <span class="gradient-text">أول مليون مبيعات</span>
      </h2>
      <p
        class="text-center text-gray-500 max-w-4xl mx-auto"
        style="font-size: clamp(16px, 2vw, 22px)"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias explicabo reprehenderit
        ab at sequi maxime accusantium atque possimus! Voluptatibus, exercitationem?
      </p>

      <article
        class="grid gap-4"
        style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))"
      >
        <div
          class="bg-background px-4 py-6 rounded-lg flex flex-col justify-center items-center gap-2"
        >
          <div>
            <Icons name="storeGradient" />
          </div>
          <h3 class="gradient-text font-semibold text-3xl">+13,500</h3>
          <p class="gradient-text text-lg font-semibold">تاجر اختاروا ارياف</p>
        </div>
        <div
          class="bg-background px-4 py-6 rounded-lg flex flex-col justify-center items-center gap-2"
        >
          <div>
            <Icons name="hashGradient" />
          </div>
          <h3 class="gradient-text font-semibold text-3xl">+10 مليار</h3>
          <p class="gradient-text text-lg font-semibold">ريال مبيعات نفذت عبر متاجر ارياف</p>
        </div>
        <div
          class="bg-background px-4 py-6 rounded-lg flex flex-col justify-center items-center gap-2"
        >
          <div>
            <Icons name="userGradient" />
          </div>
          <h3 class="gradient-text font-semibold text-3xl">+15 مليون</h3>
          <p class="gradient-text text-lg font-semibold">عميل اشترى من متاجر مبنية على ارياف</p>
        </div>
      </article>
    </section>
  </div>
</template>
