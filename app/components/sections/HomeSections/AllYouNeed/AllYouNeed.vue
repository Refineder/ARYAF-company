<script setup lang="ts">
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-vue-next'
import { CARD_SUCCESS_DATA } from '~/constants/needToSuccess'
</script>

<template>
  <section class="section-spacing-top flex flex-col gap-8 bg-white p-8 rounded-lg">
    <article class="flex flex-wrap justify-between gap-4 items-center">
      <h2 class="font-semibold" style="font-size: clamp(22px, 3vw, 38px)">
        <span class="gradient-text">كل ما تحتاجه للنجاح ،</span>على الإنترنت
      </h2>
      <div class="flex gap-2 items-center">
        <div class="p-3 rounded-full bg-muted cursor-pointer hover:bg-accent">
          <ArrowRight stroke-width="1" />
        </div>
        <div class="p-3 rounded-full bg-muted cursor-pointer hover:bg-accent">
          <ArrowLeft stroke-width="1" />
        </div>
      </div>
    </article>
    <article class="grid gap-4" style="grid-template-columns: repeat(auto-fit, minmax(380px, 1fr))">
      <div
        v-for="data in CARD_SUCCESS_DATA"
        class="bg-muted rounded-lg flex flex-col gap-4 px-8 py-4"
      >
        <div :class="'p-3 rounded-md w-fit ' + data.bgGradient">
          <component :is="data.icon" class="text-white" />
        </div>

        <div>
          <h2 class="font-semibold">{{ data.title }}</h2>
          <p class="text-[14px] text-gray-500">{{ data.description }}</p>
        </div>
      </div>
    </article>
  </section>
</template>
