<script setup lang="ts">
import Footer from '~/components/organisms/Footer/Footer.vue'
import Navbar from '~/components/organisms/Navbar/Navbar.vue'

const route = useRoute()

useSeoMeta({
  title: 'ARYAF - Auth',
  description: 'This is the homepage of ARYAF.',
})

useHead({
  meta: [
    {
      name: 'description',
      content: 'Best  website',
    },
    {
      name: 'keywords',
      content: 'ARYAF, landing page',
    },
  ],

  htmlAttrs: {
    lang: 'ar',
    dir: 'rtl',
  },
})
</script>

<template>
  <div class="relative">
    <main>
      <slot />
    </main>
    <div
      class="border-4 border-red-700 bg-grid mask-fade absolute w-full h-[130svh] top-0 z-10 text-accent"
    ></div>
    <Footer />
  </div>
</template>
