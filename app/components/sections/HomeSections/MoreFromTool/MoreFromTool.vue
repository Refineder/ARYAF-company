<script setup lang="ts">
import ButtonWithIcon from '~/components/molecules/ButtonWithIcon/ButtonWithIcon.vue'
import { MORE_FROM_TOOL_DATA } from '~/constants/moreFromTool'
import { PATHS } from '~/constants/paths'

const router = useRouter()

const goToCreateStore = () => router.push(PATHS.STORE_SETUP)
</script>

<template>
  <div class="bg-accent py-20">
    <section class="section-container flex flex-col gap-8">
      <h2 class="font-semibold clamp-text-md gradient-text text-center">
        ارياف أكثر من مجرد "أداة لبناء متجر"
      </h2>

      <article
        class="grid gap-4"
        style="grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr))"
      >
        <div
          v-for="data in MORE_FROM_TOOL_DATA"
          :key="data.title"
          class="rounded-lg bg-white p-4 flex flex-col gap-2"
        >
          <div class="p-3 rounded-md bg-accent w-fit">
            <component :is="data.icon" class="text-primary" />
          </div>
          <h3 class="font-semibold text-lg">{{ data.title }}</h3>
          <p class="text-gray-500 max-w-xs">{{ data.description }}</p>
        </div>
      </article>

      <ButtonWithIcon
        class="w-fit mx-auto"
        icon-name="arrowLeftGradient"
        size="lg"
        @click="goToCreateStore"
        >أنشئ متجرك الآن</ButtonWithIcon
      >
    </section>
  </div>
</template>
