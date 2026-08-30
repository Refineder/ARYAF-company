<script setup lang="ts">
import { ref, computed } from 'vue'
import { SOLUTION_TABS } from '~/constants/soluations'
import Icons from '~/components/atoms/ARYAFIcon/Icons.vue'
import ButtonWithIcon from '~/components/molecules/ButtonWithIcon/ButtonWithIcon.vue'
import { PATHS } from '~/constants/paths'

const router = useRouter()
const activeTabIndex = ref(0)
const currentTab = computed(() => SOLUTION_TABS[activeTabIndex.value] || SOLUTION_TABS[0])

const goToCreateStore = () => router.push(PATHS.STORE_SETUP)
</script>

<template>
  <div class="bg-accent py-10">
    <section class="section-container flex flex-col gap-8">
      <h2 class="text-center font-semibold clamp-text-md">
        حلول ارياف تدعمك <span class="gradient-text">بكل خطوة من مشوارك التجاري</span>
      </h2>
      <div class="overflow-x-auto md:w-fit md:mx-auto rounded-full py-1 px-2 bg-background">
        <article class="flex items-center gap-2 max-w-3xl self-center">
          <button
            v-for="(tab, index) in SOLUTION_TABS"
            :key="index"
            type="button"
            style="min-width: fit-content"
            class="rounded-full cursor-pointer px-6 py-2 transition-colors duration-200"
            :class="[
              activeTabIndex === index ? 'gradient-bg text-white' : 'bg-accent hover:opacity-90',
            ]"
            @click="activeTabIndex = index"
          >
            {{ tab.label }}
          </button>
        </article>
      </div>
      <article
        v-if="currentTab"
        class="flex flex-col justify-between gap-2 bg-background rounded-lg p-2 section-container-md lg:flex-row"
      >
        <div
          class="flex flex-col justify-center items-center gap-6 p-8 lg:justify-start lg:items-start"
        >
          <h2 class="font-semibold clamp-text-md">
            {{ currentTab.title }}
          </h2>
          <p class="text-gray-500 clamp-text-sm">
            {{ currentTab.description }}
          </p>
          <ul class="flex flex-col gap-6">
            <li
              v-for="(feature, idx) in currentTab.features"
              :key="idx"
              class="flex items-center gap-4"
            >
              <div class="p-3 rounded-md bg-accent">
                <Icons :name="feature.icon" :width="22" :height="20" />
              </div>
              <p class="text-lg">{{ feature.text }}</p>
            </li>
          </ul>
          <ButtonWithIcon
            class="w-fit"
            icon-name="arrowLeftGradient"
            @click="currentTab.link ? goToCreateStore() : undefined"
          >
            {{ currentTab.buttonText }}
          </ButtonWithIcon>
        </div>

        <div class="basis-[47%] w-full h-full overflow-hidden">
          <img class="object-cover w-full h-full" :src="currentTab.image" :alt="currentTab.title" />
        </div>
      </article>
    </section>
  </div>
</template>
