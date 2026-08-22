<script setup lang="ts">
import ButtonWithIcon from '~/components/molecules/ButtonWithIcon/ButtonWithIcon.vue'
import { COMMERCE_DATA } from '~/constants/commerce'
</script>

<template>
  <section class="section-container py-10 flex flex-col gap-6">
    <h2 class="text-center font-semibold clamp-text-md">
      انطلق بتجارتك<span class="gradient-text">, مهما كان قطاعك</span>
    </h2>
    <article class="grid gap-4" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))">
      <div v-for="data in COMMERCE_DATA" :key="data.title" class="flex flex-col gap-2">
        <div class="w-full h-60 overflow-hidden rounded-lg">
          <img class="rounded-lg w-full h-full object-cover" :src="data.thumb" :alt="data.title" />
        </div>
        <h3 class="font-semibold text-lg">{{ data.title }}</h3>
        <p class="text-gray-500">{{ data.description }}</p>
      </div>
    </article>
    <ButtonWithIcon class="w-fit self-center" size="lg" icon-name="arrowLeftGradient"
      >اختر باقتك الأن</ButtonWithIcon
    >
  </section>
</template>
