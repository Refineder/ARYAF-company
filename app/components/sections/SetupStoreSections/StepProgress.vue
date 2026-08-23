<script setup lang="ts">
interface IProps {
  total?: number
  current: number
}

const props = withDefaults(defineProps<IProps>(), {
  total: 7,
})
</script>

<template>
  <div class="flex items-center p-2" dir="ltr">
    <template v-for="step in props.total" :key="step">
      <div class="flex flex-col justify-center items-center gap-2">
        <p>الخطوة {{ step }}</p>

        <div :class="[step < props.current ? '' : 'gradient-border-bg border-2! rounded-full p-2']">
          <div
            class="shrink-0 grid place-items-center rounded-full transition-all duration-300"
            :class="[
              step < props.current ? 'gradient-bg text-white w-8 h-8' : 'w-4 h-4',
              step === props.current
                ? 'gradient-bg text-white scale-110 shadow-md shadow-primary-foreground/40'
                : '',
              step > props.current ? 'bg-muted border border-zinc-200' : '',
            ]"
          >
            <svg
              v-if="step < props.current"
              class="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>
      </div>

      <div v-if="step < props.total" class="flex items-center gap-1 mx-1.5 md:mx-2">
        <span
          v-for="dot in 3"
          :key="dot"
          class="w-1.5 h-1.5 rounded-full transition-colors duration-300"
          :class="props.current > step ? 'gradient-bg' : 'bg-zinc-300'"
        ></span>
      </div>
    </template>
  </div>
</template>
