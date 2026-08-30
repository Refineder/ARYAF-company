<script setup lang="ts">
import { robot, skewWallpaper } from '~/assets/images'
import Icons from '~/components/atoms/ARYAFIcon/Icons.vue'
import './style.css'
import { Clock, Star } from 'lucide-vue-next'
import { TYPE_OPTIONS } from '~/@types/storeSetup'

const model = defineModel<string | null>({ required: true })

const preparingToCreate: { name: string; check: boolean }[] = [
  {
    name: 'هوية العلامة التجارية',
    check: true,
  },
  {
    name: 'الصفحة الرئيسية',
    check: false,
  },
  {
    name: 'الفئات',
    check: false,
  },
  {
    name: 'الألوان',
    check: false,
  },
  {
    name: 'محتوى ذكي',
    check: false,
  },
  {
    name: 'المنتجات',
    check: false,
  },
]
</script>

<template>
  <section class="section-container flex flex-col items-center justify-center gap-20 py-12">
    <article class="flex flex-col">
      <div class="grid gap-4 welcome-grid">
        <div class="wrapper-robot overflow-hidden">
          <img class="object-cover w-full object-center min-h-80" :src="robot" alt="robot" />
        </div>
        <div
          class="wrapper-description flex flex-col gap-3 items-center justify-center text-center grow shrink-0"
        >
          <h2 class="clamp-text-sm font-semibold">
            ابدأ رحلتك نحو <span class="gradient-text">متجر احترافي يحقق المبيعات</span>
          </h2>
          <p>
            اختر الطريقة المناسبة لإنشاء متجرك، وأكمل خطوات الإعداد الأساسية ليصبح جاهزًا لاستقبال
            العملاء وبدء البيع بثقة.
          </p>
          <small class="text-lg mt-5">اختر ما يناسبك</small>
        </div>
        <div class="wrapper-skew overflow-hidden">
          <img
            class="object-cover w-full object-center min-h-80"
            :src="skewWallpaper"
            alt="skew wallpaper dashboard"
          />
        </div>
      </div>
      <div class="self-center scale-200">
        <Icons name="loopArrow" />
      </div>
    </article>

    <article class="grid gap-4 grid-cols-[1fr] lg:grid-cols-[1fr_auto_1fr] lg:gap-3">
      <div
        class="bg-white py-4 px-8 flex flex-col gap-2 rounded-4xl border-3 transition-colors cursor-pointer"
        style="corner-shape: squircle"
        :class="[
          model === TYPE_OPTIONS[0].value
            ? 'gradient-border-bg'
            : 'border-muted hover:border-primary',
        ]"
        @click="model = TYPE_OPTIONS[0].value"
      >
        <div class="flex justify-between items-center gap-3">
          <div
            class="bg-secondary flex items-center gap-2 px-4 py-1 rounded-full border-2 border-primary/30"
          >
            <small class="text-primary font-semibold">الأكثر استخدامًا</small>
            <Star fill="hsl(200 60% 30%)" stroke-width="0" class="w-4" />
          </div>

          <div
            class="bg-secondary flex items-center gap-2 px-4 py-1 rounded-full border-2 border-primary/30"
          >
            <Clock class="w-4 text-primary" />
            <small class="text-primary font-semibold">أقل من 60 ثانية</small>
          </div>
        </div>
        <h2 class="font-semibold clamp-text-sm">إنشاء بالذكاء الاصطناعي</h2>
        <p class="text-secondary-foreground">متجرك كامل في أقل من دقيقة</p>

        <div class="mt-15">
          <main class="relative">
            <article
              class="absolute -top-10 bg-white flex flex-col gap-2 z-30 w-fit border-2 border-muted rounded-2xl px-4 py-2"
              style="corner-shape: squircle"
            >
              <div class="flex items-center gap-4">
                <span
                  class="point-effect w-2 h-2 rounded-full"
                  style="--point-clr: oklch(69.6% 0.17 162.48)"
                ></span>
                <small class="text-secondary-foreground">جاري الإنشاء...</small>
              </div>
              <p class="font-semibold text-sm">
                يصمم الصفحة الرئيسية <span class="text-primary">|</span>
              </p>
            </article>

            <article
              class="absolute -top-13 -left-5 bg-white flex flex-col gap-2 w-fit border-2 border-muted rounded-2xl px-4 py-2"
            >
              <small class="text-secondary-foreground">لوحة الألوان</small>
              <ul class="flex items-center justify-between gap-2">
                <li
                  class="w-3 h-3 rounded-full"
                  style="background-color: oklch(from #254da6 85% c h)"
                ></li>
                <li
                  class="w-3 h-3 rounded-full"
                  style="background-color: oklch(from #254da6 75% c h)"
                ></li>
                <li
                  class="w-3 h-3 rounded-full"
                  style="background-color: oklch(from #254da6 65% c h)"
                ></li>
                <li
                  class="w-3 h-3 rounded-full"
                  style="background-color: oklch(from #254da6 55% c h)"
                ></li>
                <li
                  class="w-3 h-3 rounded-full"
                  style="background-color: oklch(from #254da6 l c h)"
                ></li>
              </ul>
            </article>

            <article
              class="absolute -left-4 top-14 bg-white flex flex-col gap-4 w-fit border-2 border-muted rounded-2xl px-4 py-2"
            >
              <p class="text-secondary-foreground text-sm">جاري إنشاء المتجر...</p>

              <ul class="flex flex-col gap-2">
                <li
                  v-for="(item, index) in preparingToCreate"
                  :key="index"
                  class="flex items-center gap-2"
                >
                  <span
                    :class="[
                      'flex justify-center items-center w-5 h-5 rounded-full',
                      item.check ? 'gradient-bg' : 'bg-secondary',
                    ]"
                  >
                    <Icons v-if="item.check" name="check" />
                  </span>
                  <small
                    class="text-xs"
                    :class="[item.check ? 'font-semibold' : 'text-secondary-foreground']"
                    >{{ item.name }}</small
                  >
                </li>
              </ul>
            </article>

            <section class="rounded-2xl border-2 border-secondary" style="corner-shape: squircle">
              <article
                class="flex items-center justify-between gap-2 border-b-2 border-secondary p-3 bg-secondary/30"
              >
                <div
                  class="grow shrink-0 p-2 rounded-full border-2 border-secondary/40 bg-secondary/50"
                >
                  <p class="text-xs mr-auto w-fit text-secondary-foreground">متجري.أرياف.com</p>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 inline-flex rounded-full bg-emerald-400"></span>
                  <span class="w-3 h-3 inline-flex rounded-full bg-amber-400"></span>
                  <span class="w-3 h-3 inline-flex rounded-full bg-rose-400"></span>
                </div>
              </article>

              <article class="bg-secondary/80">
                <div class="flex flex-col">
                  <div class="flex items-center justify-between gap-2 p-4 border-b border-gray-200">
                    <div class="flex items-center gap-1">
                      <span
                        class="w-5 h-2 rounded-full bg-secondary-foreground/40 inline-flex"
                      ></span>
                      <span
                        class="w-10 h-2 rounded-full bg-secondary-foreground/40 inline-flex"
                      ></span>
                      <span
                        class="w-7 h-2 rounded-full bg-secondary-foreground/40 inline-flex"
                      ></span>
                    </div>

                    <div><span class="w-10 h-2 rounded-full bg-primary/40 inline-flex"></span></div>
                  </div>

                  <div class="flex flex-col justify-between">
                    <article class="flex justify-between gap-4 p-4">
                      <div class="grow flex items-center">
                        <span class="w-25 h-15 rounded-full bg-primary/10 inline-flex"></span>
                      </div>

                      <div class="flex flex-col gap-2 grow w-full basis-1/2">
                        <span
                          class="w-full grow h-2 rounded-full bg-secondary-foreground/60 inline-flex"
                        ></span>
                        <span
                          class="w-3/5 self-end h-2 rounded-full bg-secondary-foreground/20 inline-flex"
                        ></span>
                        <span
                          class="self-end w-25 h-10 rounded-full bg-primary/40 inline-flex"
                        ></span>
                      </div>
                    </article>

                    <article class="flex items-center gap-3 p-4 pb-1">
                      <span
                        class="w-full grow h-4 border border-secondary-foreground/10 rounded-full bg-accent/40 inline-flex"
                      ></span>
                      <span
                        class="w-full grow h-4 border border-secondary-foreground/10 rounded-full bg-accent/40 inline-flex"
                      ></span>
                      <span
                        class="w-full grow h-4 border border-secondary-foreground/10 rounded-full bg-accent/40 inline-flex"
                      ></span>
                    </article>
                  </div>
                </div>
              </article>
            </section>
          </main>
        </div>

        <div>
          <ul class="flex flex-wrap items-center gap-2">
            <li class="bg-muted min-w-fit rounded-full px-3 py-1">
              <small class="text-primary">• يصمم الصفحة الرئيسية</small>
            </li>
            <li class="bg-muted min-w-fit rounded-full px-3 py-1">
              <small class="text-primary">• يولّد الأقسام</small>
            </li>
            <li class="bg-muted min-w-fit rounded-full px-3 py-1">
              <small class="text-primary">• ينشئ الهوية البصرية</small>
            </li>
            <li class="bg-muted min-w-fit rounded-full px-3 py-1">
              <small class="text-primary">• محسّن للجوال</small>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="flex self-center mx-auto justify-center items-center p-5 text-secondary-foreground shadow-md w-5 h-5 rounded-full bg-white border border-secondary"
      >
        أو
      </div>

      <div
        class="bg-white flex-1 py-4 px-8 flex flex-col gap-2 rounded-4xl border-3 transition-colors cursor-pointer"
        style="corner-shape: squircle"
        :class="[
          model === TYPE_OPTIONS[1].value
            ? 'gradient-border-bg'
            : 'border-muted hover:border-primary',
        ]"
        @click="model = TYPE_OPTIONS[1].value"
      >
        <div class="flex justify-between items-center gap-3">
          <div class="flex flex-col gap-2">
            <h2 class="font-semibold clamp-text-sm">استعرض القوالب</h2>
            <p class="text-secondary-foreground">اختر من مئات القوالب الجاهزة</p>
          </div>

          <div
            class="bg-secondary flex items-center gap-2 px-4 py-1 rounded-full border-2 border-primary/30"
          >
            <Clock class="w-4 text-primary" />
            <small class="text-primary font-semibold">5 دقائق</small>
          </div>
        </div>

        <div class="mt-15">
          <main class="relative">
            <section class="rounded-2xl border-2 border-secondary" style="corner-shape: squircle">
              <article
                class="flex items-center justify-between gap-2 border-b-2 border-secondary p-3 bg-secondary/30"
              >
                <div
                  class="grow shrink-0 p-2 rounded-full border-2 border-secondary/40 bg-secondary/50"
                >
                  <p class="text-xs text-secondary-foreground">قوالب أرياف</p>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 inline-flex rounded-full bg-emerald-400"></span>
                  <span class="w-3 h-3 inline-flex rounded-full bg-amber-400"></span>
                  <span class="w-3 h-3 inline-flex rounded-full bg-rose-400"></span>
                </div>
              </article>

              <article class="bg-secondary/80">
                <div class="flex flex-col">
                  <div class="flex items-center justify-between gap-2 p-4 border-b border-gray-200">
                    <div class="flex items-center gap-1">
                      <span
                        class="w-5 h-2 rounded-full bg-secondary-foreground/40 inline-flex"
                      ></span>
                      <span
                        class="w-10 h-2 rounded-full bg-secondary-foreground/40 inline-flex"
                      ></span>
                      <span
                        class="w-7 h-2 rounded-full bg-secondary-foreground/40 inline-flex"
                      ></span>
                    </div>

                    <div><span class="w-10 h-2 rounded-full bg-primary/40 inline-flex"></span></div>
                  </div>

                  <div class="flex flex-col justify-between">
                    <article class="flex justify-between gap-4 p-4">
                      <div class="grow flex items-center">
                        <span class="w-25 h-15 rounded-full bg-primary/10 inline-flex"></span>
                      </div>

                      <div class="flex flex-col gap-2 grow w-full basis-1/2">
                        <span
                          class="w-full grow h-2 rounded-full bg-secondary-foreground/60 inline-flex"
                        ></span>
                        <span
                          class="w-3/5 self-end h-2 rounded-full bg-secondary-foreground/20 inline-flex"
                        ></span>
                        <span
                          class="self-end w-25 h-10 rounded-full bg-primary/40 inline-flex"
                        ></span>
                      </div>
                    </article>

                    <article class="flex items-center gap-3 p-4 pb-1">
                      <span
                        class="w-full grow h-4 border border-secondary-foreground/10 rounded-full bg-accent/40 inline-flex"
                      ></span>
                      <span
                        class="w-full grow h-4 border border-secondary-foreground/10 rounded-full bg-accent/40 inline-flex"
                      ></span>
                      <span
                        class="w-full grow h-4 border border-secondary-foreground/10 rounded-full bg-accent/40 inline-flex"
                      ></span>
                    </article>
                  </div>
                </div>
              </article>
            </section>
          </main>
        </div>

        <div class="">
          <ul class="flex flex-wrap items-center gap-2">
            <li class="bg-muted min-w-fit rounded-full px-3 py-1">
              <small class="text-primary">• تصميم احترافي</small>
            </li>
            <li class="bg-muted min-w-fit rounded-full px-3 py-1">
              <small class="text-primary">• مخصص للصناعة</small>
            </li>
            <li class="bg-muted min-w-fit rounded-full px-3 py-1">
              <small class="text-primary">• تخصيص سهل</small>
            </li>
            <li class="bg-muted min-w-fit rounded-full px-3 py-1">
              <small class="text-primary">• مئات القوالب</small>
            </li>
          </ul>
        </div>
      </div>
    </article>
  </section>
</template>
