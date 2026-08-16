<script setup lang="ts">
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'
import { CARD_SUCCESS_DATA } from '~/constants/needToSuccess'
</script>

<template>
  <div class="section-spacing-top bg-white p-8 rounded-lg">
    <section class="section-container flex flex-col gap-8">
      <article class="flex flex-wrap justify-between gap-4 items-center">
        <h2 class="font-semibold clamp-text-md">
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
      <article
        class="grid gap-4"
        style="grid-template-columns: repeat(auto-fit, minmax(380px, 1fr))"
      >
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
  </div>
</template>
