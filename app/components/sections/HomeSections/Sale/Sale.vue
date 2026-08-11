<script setup lang="ts">
import { saleBig, saleSmall } from '~/assets/images'
import Icons from '~/components/atoms/Button/ARYAFIcon/Icons.vue'
import ButtonWithIcon from '~/components/molecules/ButtonWithIcon/ButtonWithIcon.vue'
</script>

<template>
  <section class="section-container flex flex-col justify-between gap-6 rounded-lg p-4 md:flex-row">
    <article class="self-center flex flex-col gap-6 basis-[50%]">
      <h2 class="font-semibold" style="font-size: clamp(24px, 3vw, 38px)">
        حيث تلتقي السهولة بالأناقة
      </h2>
      <p style="font-size: clamp(16px, 2vw, 22px)">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorum repellendus in minus
        autem earum, delectus commodi neque incidunt aliquid.
      </p>

      <ul class="flex flex-col gap-4">
        <li class="flex items-center gap-4">
          <div class="p-3 rounded-md bg-accent">
            <Icons name="sizes" />
          </div>
          <p class="text-lg">استبق سؤال العميل عبر جدول المقاسات</p>
        </li>
        <li class="flex items-center gap-4">
          <div class="p-3 rounded-md bg-accent">
            <Icons name="creditCard" />
          </div>
          <p class="text-lg">قدم تجربة شراء سهلة ومألوفة لكل عميل</p>
        </li>
        <li class="flex items-center gap-4">
          <div class="p-3 rounded-md bg-accent">
            <Icons name="glasess" />
          </div>
          <p class="text-lg">اعرض صور ثلاثية الأبعاد تبرز أناقة التفاصيل</p>
        </li>
      </ul>

      <ButtonWithIcon icon-name="arrowLeftGradient" size="lg" class="w-fit"
        >أنشئ متجرك مجانا</ButtonWithIcon
      >
    </article>
    <article class="flex flex-col gap-4 basis-[40%]">
      <div class="rounded-lg overflow-hidden h-full max-h-96">
        <img class="object-cover rounded-lg" :src="saleBig" alt="sale-big" />
      </div>
      <div class="rounded-lg overflow-hidden h-full max-h-40">
        <img class="object-cover rounded-lg" :src="saleSmall" alt="sale-small" />
      </div>
    </article>
  </section>
</template>
