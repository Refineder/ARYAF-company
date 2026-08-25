<script setup lang="ts">
import {
  dashboardHeadPhonesProduct,
  dashboardMapProduct,
  dashboardPayProduct,
  dashboardPhonesProduct,
  dashboardShoesProduct,
  dashboardWallpaperProduct,
} from '~/assets/images'
import Button from '~/components/atoms/Button/Button.vue'
import ButtonWithIcon from '~/components/molecules/ButtonWithIcon/ButtonWithIcon.vue'
</script>

<template>
  <section
    class="grid gap-4"
    style="grid-template-columns: repeat(auto-fit, minmax(min(380px, 100%), 1fr))"
  >
    <article class="flex flex-col gap-4 bg-white p-4 rounded-4xl" style="corner-shape: squircle">
      <div class="w-full min-h-80 overflow-hidden">
        <img
          class="object-cover h-full"
          :src="dashboardShoesProduct"
          alt="dashboard shoes product"
        />
      </div>
      <h3 class="clamp-text-sm font-semibold">أضف أول منتج لك</h3>
      <p class="text-secondary-foreground w-full lg:max-w-sm">
        ابدأ بإضافة أول منتج لك مع بعض التفاصيل الأساسية مثل الاسم ، الوصف ، والصورة.
      </p>
      <div class="flex gap-6 grow flex-wrap items-center">
        <Button
          class="grow"
          style="background-color: oklch(from var(--primary) 90% c h/.2) !important"
          size="lg"
          variant="secondary"
        >
          <span class="gradient-text">اضف منتج</span>
        </Button>
        <Button class="grow" size="lg" variant="secondary">استيراد منتج</Button>
      </div>
    </article>

    <article class="flex flex-col gap-4 bg-white p-4 rounded-4xl" style="corner-shape: squircle">
      <div class="w-full min-h-80 overflow-hidden">
        <img
          class="object-cover h-full"
          :src="dashboardPhonesProduct"
          alt="dashboard phones product"
        />
      </div>
      <h3 class="clamp-text-sm font-semibold">تحقق في ثواني</h3>
      <p class="text-secondary-foreground w-full lg:max-w-sm">
        أكمل عملية تحقق سريعة وآمنة لفتح جميع الميزات وبدء البيع. إنها سريعة وسهلة، وتبني الثقة مع
        عملائك
      </p>
      <div class="flex gap-6 grow flex-wrap items-center">
        <Button
          class="grow"
          style="background-color: oklch(from var(--primary) 90% c h/.2) !important"
          size="lg"
          variant="secondary"
        >
          <span class="gradient-text">ابدا اجرات التحقق</span>
        </Button>
      </div>
    </article>

    <article class="flex flex-col gap-4 bg-white p-4 rounded-4xl" style="corner-shape: squircle">
      <div class="w-full min-h-80 overflow-hidden">
        <img class="object-cover h-full" :src="dashboardMapProduct" alt="dashboard map product" />
      </div>
      <h3 class="clamp-text-sm font-semibold">تفعيل وسيلة الدفع</h3>
      <p class="text-secondary-foreground w-full lg:max-w-sm">
        قم بإعداد وسيلة الدفع لبدء استقبال الطلبات من عملائك.
      </p>
      <div class="flex gap-6 grow flex-wrap items-center">
        <Button
          class="grow"
          style="background-color: oklch(from var(--primary) 90% c h/.2) !important"
          size="lg"
          variant="secondary"
        >
          <span class="gradient-text">تفعيل وسيلة الدفع</span>
        </Button>
      </div>
    </article>

    <article class="flex flex-col gap-4 bg-white p-4 rounded-4xl" style="corner-shape: squircle">
      <div class="w-full min-h-80 overflow-hidden">
        <img
          class="object-cover h-full"
          :src="dashboardWallpaperProduct"
          alt="dashboard wallpaper product"
        />
      </div>
      <h3 class="clamp-text-sm font-semibold">أضف هوية متجرك</h3>
      <p class="text-secondary-foreground w-full lg:max-w-sm">
        اعكس هويتك البصرية على متجرك من ألوان وشعار وأيقونة. ولو تحتاج مساعدة مساعد ارياف موجود
      </p>
      <div class="flex gap-6 grow flex-wrap items-center">
        <Button
          class="grow"
          style="background-color: oklch(from var(--primary) 90% c h/.2) !important"
          size="lg"
          variant="secondary"
        >
          <span class="gradient-text">اضف هويتك</span>
        </Button>
        <ButtonWithIcon
          icon-name="sparkles"
          :icon-circle="false"
          class="grow"
          size="lg"
          icon-direction="right"
          variant="secondary"
          >مساعد ارياف</ButtonWithIcon
        >
      </div>
    </article>

    <article class="flex flex-col gap-4 bg-white p-4 rounded-4xl" style="corner-shape: squircle">
      <div class="w-full min-h-80 overflow-hidden">
        <img
          class="object-cover h-full"
          :src="dashboardHeadPhonesProduct"
          alt="dashboard headphones product"
        />
      </div>
      <h3 class="clamp-text-sm font-semibold">أكد رقم الدعم الفني لمتجرك</h3>
      <p class="text-secondary-foreground w-full lg:max-w-sm">
        لرفع متسوى موثوقية متجرك أضف رقم للدعم الفني لعملاؤك ، سواء: تؤكد الرقم المسجل أو تضيف رقم
        جديد
      </p>
      <div class="flex gap-6 grow flex-wrap items-center">
        <Button
          class="grow"
          style="background-color: oklch(from var(--primary) 90% c h/.2) !important"
          size="lg"
          variant="secondary"
        >
          <span class="gradient-text">اكد الرقم المسجل</span>
        </Button>
        <Button class="grow" size="lg" variant="secondary">اضف رقم جديد</Button>
      </div>
    </article>

    <article class="flex flex-col gap-4 bg-white p-4 rounded-4xl" style="corner-shape: squircle">
      <div class="w-full min-h-80 overflow-hidden">
        <img class="object-cover h-full" :src="dashboardPayProduct" alt="dashboard pay product" />
      </div>
      <h3 class="clamp-text-sm font-semibold">حدد موقع تسليم الشحنات</h3>
      <p class="text-secondary-foreground w-full lg:max-w-sm">
        حدِّد من هنا الموقع الذي تستلم منه شركات الشحن طلبات عملائك لتوصيلها إليهم.
      </p>
      <div class="flex gap-6 grow flex-wrap items-center">
        <Button
          class="grow"
          style="background-color: oklch(from var(--primary) 90% c h/.2) !important"
          size="lg"
          variant="secondary"
        >
          <span class="gradient-text">حدد موقع التسليم</span>
        </Button>
      </div>
    </article>
  </section>
</template>
