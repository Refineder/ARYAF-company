<script setup lang="ts">
import './style.css'
import { EXPERIENCE_DATA } from '~/constants/experience'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'

const sliderRef = ref<HTMLElement | null>(null)

const scroll = (direction: 'next' | 'prev') => {
  const el = sliderRef.value
  if (!el) return
  const step = el.clientWidth * 0.9
  el.scrollBy({ left: direction === 'next' ? step : -step, behavior: 'smooth' })
}
</script>

<template>
  <section class="section-container flex flex-col gap-6 py-10 bg-white">
    <article class="flex flex-wrap items-center justify-between gap-4">
      <h2 class="font-semibold clmap-text-md">
        انطلق بتجارتك<span class="gradient-text">،مهما كان قطاعك</span>
      </h2>
      <div class="flex gap-2 items-center">
        <div
          class="p-3 rounded-full bg-muted cursor-pointer hover:bg-accent"
          @click="scroll('next')"
        >
          <ArrowRight stroke-width="1" />
        </div>
        <div
          class="p-3 rounded-full bg-muted cursor-pointer hover:bg-accent"
          @click="scroll('prev')"
        >
          <ArrowLeft stroke-width="1" />
        </div>
      </div>
    </article>

    <article
      ref="sliderRef"
      class="flex gap-2 items-center overflow-x-auto scroll-smooth snap-x scrollbar-hide"
    >
      <div
        v-for="data in EXPERIENCE_DATA"
        :key="data.title"
        class="snap-start shrink-0 w-55 p-4 rounded-lg border-[3px] border-transparent bg-background cursor-pointer hover:gradient-border-bg flex flex-col justify-center items-center gap-2"
      >
        <div>
          <img :src="data.thumb" :alt="data.title" />
        </div>
        <p class="text-lg">{{ data.title }}</p>
      </div>
    </article>
  </section>
</template>
