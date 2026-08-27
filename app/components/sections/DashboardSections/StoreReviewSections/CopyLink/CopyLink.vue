<script setup lang="ts">
import ButtonWithIcon from '~/components/molecules/ButtonWithIcon/ButtonWithIcon.vue'
</script>

<template>
  <section class="flex flex-col gap-8">
    <div class="text-center flex flex-col gap-3">
      <h3 class="clamp-text-sm font-semibold">
        تهانينا اصبح <span class="gradient-text">متجرك اناقة مباشر الان !</span>
      </h3>
      <p class="text-secondary-foreground">
        رحلتك التجارية بدأت للتو. اليك كل تحتاجه للخطوات القادمة
      </p>
    </div>

    <article
      class="flex flex-wrap items-center justify-between gap-3 p-4 rounded-lg bg-white border border-neutral-200"
    >
      <div class="flex items-center gap-2">
        <div class="w-fit rounded-2xl p-3 bg-primary" style="corner-shape: squircle">
          <p>👗</p>
        </div>

        <div>
          <p>اناقة للملابس</p>
          <div class="flex items-center gap-1">
            <small>https://dd.aryaf.com</small>
            <span class="inline-flex w-2 h-2 rounded-full bg-emerald-500"></span>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <ButtonWithIcon color-stroke="white" icon-name="laptop" :icon-circle="false"
          >فتح المتجر</ButtonWithIcon
        >
        <ButtonWithIcon icon-name="laptop" :icon-circle="false" variant="secondary">
          <span class="gradient-text">نسخ الرابط</span>
        </ButtonWithIcon>
      </div>
    </article>
  </section>
</template>
