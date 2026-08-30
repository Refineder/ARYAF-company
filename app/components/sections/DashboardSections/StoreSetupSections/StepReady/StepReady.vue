<script setup lang="ts">
import { inject, type Ref } from 'vue'
import Icons from '~/components/atoms/ARYAFIcon/Icons.vue'
import Button from '~/components/atoms/Button/Button.vue'
import './style.css'

import { SECTOR_OPTIONS } from '~/@types/storeSetup'
const storeName = inject<Ref<string>>('storeName', ref('متجرك'))
const selectedSector = inject<Ref<string | null>>('sector', ref(null))

const sectorLabel = computed(() => {
  return SECTOR_OPTIONS.find((o) => o.value === selectedSector.value)?.label ?? ''
})
</script>

<template>
  <div class="w-full flex flex-col items-center gap-6 py-6">
    <div class="text-center">
      <h2 class="text-xl font-bold mb-2">
        تهانينا اصبح <span class="gradient-text">متجرك جاهز للإطلاق! </span>
      </h2>
      <p class="text-secondary-foreground text-sm">
        كل شيء جاهز. اضغط على الإطلاق لفتح متجرك للعالم.
      </p>
    </div>

    <div
      class="section-container-sm w-full flex flex-col-reverse justify-between items-center gap-2 lg:flex-row"
    >
      <article
        class="grow rounded-2xl overflow-hidden border-2 border-secondary shadow-md w-full lg:w-fit"
        style="corner-shape: squircle"
      >
        <div
          class="flex items-center justify-between gap-2 border-b-2 border-secondary p-3 bg-primary/10"
        >
          <div class="grow shrink-0 p-2 rounded-full border-2 border-secondary/40 bg-white">
            <p class="text-xs text-secondary-foreground">{{ storeName }}.aryaf.com</p>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 inline-flex rounded-full bg-emerald-400"></span>
            <span class="w-3 h-3 inline-flex rounded-full bg-amber-400"></span>
            <span class="w-3 h-3 inline-flex rounded-full bg-rose-400"></span>
          </div>
        </div>

        <div class="flex flex-wrap p-4 justify-between items-center gap-3">
          <p class="text-primary">{{ storeName }}</p>
          <ul class="flex flex-wrap gap-4 items-center text-secondary-foreground">
            <li>عروض</li>
            <li>المنتجات</li>
            <li>الرئيسية</li>
            <li class="px-3 py-1 bg-primary text-white rounded-full">تسوق الآن</li>
          </ul>
        </div>

        <div class="p-4 bg-primary/20 flex flex-wrap gap-4 justify-between items-center">
          <div class="flex flex-col gap-3">
            <Button variant="secondary" class="w-fit bg-primary/10! text-primary"
              >جديد هذا الموسم</Button
            >
            <h3 class="clamp-text-sm font-semibold">اكتشف مجموعتنا الحصرية الجديدة</h3>
            <p>تصاميم راقية تعكس ذوقك الرفيع</p>
            <div class="flex flex-wrap items-center gap-3">
              <Button class="text-primary" variant="secondary">تعرّف أكثر</Button>
              <Button>تسوق الآن</Button>
            </div>
          </div>

          <div class="p-20 bg-primary/20 rounded-4xl" style="corner-shape: squircle">
            <div>
              <Icons
                color-stroke="oklch(from var(--primary) 40% c h / .6)"
                :height="80"
                :width="80"
                name="dashboardStore"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-3 p-4">
          <h3>المنتجات المميزة</h3>

          <div
            class="grid gap-3"
            style="grid-template-columns: repeat(auto-fit, minmax(140px, 1fr))"
          >
            <div
              v-for="(item, index) in [1, 2, 3, 4]"
              :key="index"
              class="rounded-lg overflow-hidden flex flex-col gap-2 border border-secondary"
            >
              <div class="bg-secondary flex justify-center items-center p-8">
                <span class="inline-flex w-8 h-8 rounded-full bg-primary/20"></span>
              </div>

              <div class="bg-white p-3 flex flex-col gap-2">
                <small>منتح {{ item }}</small>
                <p class="text-primary">99 ر.س</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article class="step-ready-grid-wrapper grow w-full lg:w-80">
        <!-- <aside class="grid-container flex flex-row gap-8 lg:flex-col"> -->
        <aside class="grid-container grid gap-8">
          <div
            class="flex w-full flex-col gap-2 bg-white rounded-4xl p-4"
            style="corner-shape: squircle"
          >
            <div class="flex items-center gap-3">
              <div class="rounded-2xl p-3 bg-primary" style="corner-shape: squircle">
                <p>👗</p>
              </div>
              <div>
                <p class="text-lg font-semibold">{{ storeName }}</p>
                <small class="text-secondary-foreground">{{ sectorLabel }}</small>
              </div>
            </div>

            <div class="px-4 py-2 rounded-lg bg-secondary flex justify-between gap-2 flex-wrap">
              <small>رابط المتجر</small>
              <p>aas.aryaf.com</p>
            </div>
            <div class="px-4 py-2 rounded-lg bg-secondary flex justify-between gap-2 flex-wrap">
              <small>طريقة الإنشاء</small>
              <p>✨ ذكاء اصطناعي</p>
            </div>
            <div class="px-4 py-2 rounded-lg bg-secondary flex justify-between gap-2 flex-wrap">
              <small>اللون الرئيسي</small>
              <p>أزرق ملكي</p>
            </div>
          </div>

          <div
            class="w-full rounded-4xl p-4 bg-secondary flex flex-col gap-4"
            style="corner-shape: squircle"
          >
            <h3 class="text-primary font-semibold clamp-text-sm">خطواتك التالية</h3>

            <ul class="flex gap-4 flex-col">
              <li>أضف أول منتج لمتجرك</li>
              <li>خصّص ألوان علامتك</li>
              <li>اربط طريقة الدفع</li>
              <li>فعّل الشحن والتوصيل</li>
            </ul>
          </div>
        </aside>
      </article>
    </div>
  </div>
</template>
