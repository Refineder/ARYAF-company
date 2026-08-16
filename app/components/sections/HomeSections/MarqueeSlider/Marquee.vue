<script setup lang="ts">
import './style.css'
import { MARQUEE_LOGOS } from '~/constants/marquee'
</script>

<template>
  <div
    class="marquee-wrapper section-spacing-top bg-white overflow-hidden py-8 rounded-lg"
    dir="ltr"
  >
    <section class="section-container">
      <div class="flex w-max animate-marquee">
        <div v-for="copy in 2" :key="copy" class="flex shrink-0">
          <div
            v-for="logo in MARQUEE_LOGOS"
            :key="logo.alt"
            class="flex w-40 shrink-0 items-center justify-center"
          >
            <img :src="logo.src" :alt="logo.alt" class="h-24 w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
