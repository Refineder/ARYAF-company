<script setup lang="ts">
import type { IStepData } from '~/@types/setupStore.ts'
import Icons from '~/components/atoms/ARYAFIcon/Icons.vue'

interface IProps {
  data: IStepData
  imgSrc: string
}

const props = defineProps<IProps>()

const model = defineModel<string[]>({ required: true })

const isSelected = (value: string) => model.value.includes(value)

const toggle = (value: string) => {
  if (!props.data.multiple) {
    model.value = [value]
    return
  }
  model.value = isSelected(value) ? model.value.filter((v) => v !== value) : [...model.value, value]
}
</script>

<template>
  <div class="flex items-center flex-col gap-6 w-full">
    <div class="max-w-72 h-full overflow-hidden">
      <img class="w-full h-full object-cover" :src="imgSrc" :alt="imgSrc" />
    </div>

    <slot></slot>

    <div
      class="flex gap-4 w-full max-w-3xl self-center md:gap-6"
      :class="[props.data.multiple ? 'flex-row flex-wrap gap-2!' : 'flex-col']"
    >
      <button
        v-for="option in props.data.options"
        :key="option.value"
        type="button"
        class="flex items-center gap-3 rounded-xl border-3 p-4 text-right transition-all duration-200 cursor-pointer"
        :class="[
          isSelected(option.value)
            ? 'gradient-border-bg'
            : 'border-zinc-200 bg-white hover:gradient-border-bg hover:shadow-sm',
          props.data.multiple ? 'rounded-full!' : '',
        ]"
        @click="toggle(option.value)"
      >
        <Icons v-if="option.icon" :name="option.icon" />
        <span
          class="font-medium ml-auto"
          :class="isSelected(option.value) ? 'text-zinc-800' : 'text-gray-600'"
        >
          {{ option.label }}
        </span>
        <span
          class="shrink-0 rounded-full grid place-items-center w-6 h-6 border-2! transition-all duration-200"
          :class="[isSelected(option.value) ? 'gradient-border-bg' : 'border-zinc-300']"
        >
          <span v-if="isSelected(option.value)" class="w-4 h-4 rounded-full gradient-bg"></span>
        </span>
      </button>
    </div>
  </div>
</template>
