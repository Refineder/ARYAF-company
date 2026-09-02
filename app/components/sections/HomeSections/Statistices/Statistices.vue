<script setup lang="ts">
import Icons from '~/components/atoms/ARYAFIcon/Icons.vue'
import './style.css'

useScrollAnimation()
</script>

<template>
  <div class="section-spacing-top bg-accent py-20">
    <section class="section-container flex flex-col gap-6">
      <h2 class="text-center font-semibold clamp-text-md">
        من الفكرة الى <span class="gradient-text">أول مليون مبيعات</span>
      </h2>
      <p class="text-center text-gray-500 max-w-4xl mx-auto clamp-text-sm">
        آلاف التجّار بدأوا رحلتهم، بنوا متاجرهم، وتوسّعوا بسرعة مع منصة واحدة تدعم نموهم من أول
        يوم.كل ما تحتاجه لإطلاق متجرك، إدارة عملياتك، وزيادة مبيعاتك في مكان واحد.
      </p>

      <article
        class="statistics-grid grid gap-4"
        style="grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr))"
      >
        <div
          class="bg-background animate-on-scroll px-4 py-6 rounded-lg flex flex-col justify-center items-center gap-2"
        >
          <div>
            <Icons name="storeGradient" />
          </div>
          <!-- <h3 class="buyers-counting gradient-text font-semibold text-3xl">+13,500</h3> -->
          <h3
            class="buyers-counting counting gradient-text font-semibold text-3xl"
            style="--num: 13500"
          ></h3>
          <p class="gradient-text text-lg font-semibold">تاجر اختاروا ارياف</p>
        </div>
        <div
          class="bg-background animate-on-scroll px-4 py-6 rounded-lg flex flex-col justify-center items-center gap-2"
        >
          <div>
            <Icons name="hashGradient" />
          </div>
          <h3 class="gradient-text font-semibold text-3xl" dir="ltr">
            <span>⃁</span>
            <span class="sales-counting counting" style="--num: 10"></span>
            <span>مليار</span>
          </h3>
          <p class="gradient-text text-lg font-semibold">مبيعات نفذت عبر متاجر ارياف</p>
        </div>
        <div
          class="bg-background animate-on-scroll px-4 py-6 rounded-lg flex flex-col justify-center items-center gap-2"
        >
          <div>
            <Icons name="userGradient" />
          </div>
          <!-- <h3 class="client-counting gradient-text font-semibold text-3xl">+15 مليون</h3> -->
          <h3
            class="client-counting counting gradient-text font-semibold text-3xl"
            style="--num: 15"
          ></h3>
          <p class="gradient-text text-lg font-semibold">عميل اشترى من متاجر مبنية على ارياف</p>
        </div>
      </article>
    </section>
  </div>
</template>
