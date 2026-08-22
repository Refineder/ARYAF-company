<script setup lang="ts">
import { ref } from 'vue'
import { ArrowLeft, ArrowRight, Star } from 'lucide-vue-next'
import { STORIES } from '~/constants/stories'

const sliderRef = ref<HTMLElement | null>(null)

const next = () => {
  if (!sliderRef.value) return
  const cardWidth = sliderRef.value.firstElementChild?.clientWidth || 400
  const isRtl = document.dir === 'rtl' || getComputedStyle(sliderRef.value).direction === 'rtl'
  sliderRef.value.scrollBy({
    left: isRtl ? -(cardWidth + 16) : cardWidth + 16,
    behavior: 'smooth',
  })
}

const prev = () => {
  if (!sliderRef.value) return
  const cardWidth = sliderRef.value.firstElementChild?.clientWidth || 400
  const isRtl = document.dir === 'rtl' || getComputedStyle(sliderRef.value).direction === 'rtl'
  sliderRef.value.scrollBy({
    left: isRtl ? cardWidth + 16 : -(cardWidth + 16),
    behavior: 'smooth',
  })
}
</script>

<template>
  <div class="bg-white rounded-lg py-20">
    <section class="section-container flex flex-col gap-6">
      <article class="flex justify-between items-center gap-4">
        <h2 class="clamp-text-md font-semibold gradient-text">قصص تجّار اختاروا ارياف</h2>
        <div class="flex gap-2 items-center">
          <button
            type="button"
            class="p-3 rounded-full bg-muted cursor-pointer hover:bg-accent transition-colors"
            aria-label="السابق"
            @click="prev"
          >
            <ArrowRight stroke-width="1" />
          </button>
          <button
            type="button"
            class="p-3 rounded-full bg-muted cursor-pointer hover:bg-accent transition-colors"
            aria-label="التالي"
            @click="next"
          >
            <ArrowLeft stroke-width="1" />
          </button>
        </div>
      </article>

      <article
        ref="sliderRef"
        class="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <div
          v-for="story in STORIES"
          :key="story.id"
          class="bg-muted p-4 rounded-lg flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-[calc(50%-0.5rem)] snap-start"
        >
          <div class="max-h-70 h-full rounded-lg overflow-hidden w-full sm:w-1/2 shrink-0">
            <img
              class="object-cover h-full rounded-lg w-full"
              :src="story.image"
              :alt="story.author"
            />
          </div>
          <div class="flex flex-col gap-4 justify-between w-full">
            <h3 class="text-2xl font-semibold">{{ story.title }}</h3>
            <p class="text-lg text-gray-700">{{ story.quote }}</p>

            <ul class="flex items-center gap-2">
              <li v-for="star in story.rating" :key="star">
                <Star fill="yellow" stroke-width="0" />
              </li>
            </ul>

            <div class="flex gap-4 items-center justify-between mt-auto">
              <div class="flex flex-col gap-2">
                <h4 class="text-primary font-semibold">{{ story.author }}</h4>
                <small class="text-gray-500">{{ story.date }}</small>
              </div>
              <p
                class="text-primary p-2 w-12 h-12 rounded-full bg-accent flex items-center justify-center font-bold"
              >
                {{ story.avatarText }}
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>
