<script setup lang="ts">
import DashboardNavbar from '~/components/organisms/DashboardNavbar/DashboardNavbar.vue'

useSeoMeta({
  title: 'ARYAF - إعداد المتجر',
  description: 'إعداد متجرك على منصة ارياف.',
})

useHead({
  htmlAttrs: {
    lang: 'ar',
    dir: 'rtl',
  },
})
</script>

<template>
  <div class="min-h-screen flex flex-col gap-2">
    <DashboardNavbar />
    <main class="rounded-2xl h-full grow overflow-y-auto">
      <slot></slot>
    </main>
  </div>
</template>
