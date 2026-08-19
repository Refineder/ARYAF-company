<script setup lang="ts">
import { ref } from 'vue'
import Icons from '~/components/atoms/ARYAFIcon/Icons.vue'
import Button from '~/components/atoms/Button/Button.vue'
import './style.css'
import { PLANS, type IPlan } from '~/constants/plans'

const emit = defineEmits<{ next: [] }>()

const selectedPlan = ref<IPlan | null>(null)

const selectPlan = (plan: IPlan) => {
  if (selectedPlan.value?.id === plan.id) return
  selectedPlan.value = plan
}

const onContinue = () => {
  if (selectedPlan.value) emit('next')
}
</script>

<template>
  <div class="plan flex flex-col gap-6">
    <h2 class="clamp-text-md text-center font-semibold">
      ابدأ بالطريقة التي تناسبك <span class="gradient-text">اختر خطتك</span>
    </h2>

    <p class="text-gray-500 text-center text-lg max-w-lg self-center">
      ابدأ دون أي تكلفة، وقم بالترقية عندما يصبح متجرك جاهزًا للتوسع.
    </p>

    <div
      class="grid gap-4 md:grid-cols-2"
      style="grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr))"
    >
      <article
        v-for="plan in PLANS"
        :key="plan.id"
        class="relative border-[3px] border-transparent flex flex-col gap-4 rounded-lg p-5 transition-all cursor-pointer"
        :class="
          selectedPlan?.id === plan.id
            ? 'gradient-border-bg'
            : 'border-zinc-200 hover:gradient-border-bg'
        "
        @click="selectPlan(plan)"
      >
        <div
          v-if="plan.advertisement"
          class="advertisement absolute gradient-bg text-white text-xs px-3 py-1 rounded-full"
        >
          {{ plan.advertisement }}
        </div>

        <div class="flex items-center justify-between">
          <h3 class="text-xl font-semibold">{{ plan.name }}</h3>
          <div
            class="rounded-full overflow-hidden"
            :class="
              selectedPlan?.id === plan.id
                ? 'gradient-bg text-white'
                : 'border border-zinc-300 text-transparent!'
            "
          >
            <div class="w-7 h-7 rounded-full grid place-items-center transition-all">
              <Icons
                :class="selectedPlan?.id === plan.id ? 'text-white' : 'text-transparent!'"
                name="check"
                :width="4"
                :height="4"
              />
            </div>
          </div>
        </div>

        <p class="text-gray-500 text-sm leading-relaxed">{{ plan.description }}</p>

        <div class="flex items-end gap-1">
          <span class="text-3xl font-bold clamp-text-sm">{{ plan.price }}</span>
          <span class="text-gray-400 mb-1">ر.س / {{ plan.period }}</span>
        </div>

        <ul class="flex flex-col gap-2 text-gray-600 text-sm">
          <li v-for="feature in plan.features" :key="feature" class="flex items-center gap-2">
            <Icons name="checkGradient" :width="15" :height="15" />
            {{ feature }}
          </li>
        </ul>
      </article>
    </div>

    <Button
      size="lg"
      :variant="selectedPlan ? 'secondary' : 'outline'"
      type="button"
      :class="selectedPlan ? 'gradient-bg text-white' : 'opacity-60'"
      @click="onContinue"
    >
      {{ selectedPlan ? 'متابعة' : 'اختر خطة للمتابعة' }}
    </Button>
  </div>
</template>
