<script setup lang="ts">
import { useField } from 'vee-validate'
import './style.css'

interface IOption {
  value: string
  label: string
}

interface IProps {
  name: string
  lable?: string
  options: IOption[]
  placeholder?: string
}

const props = defineProps<IProps>()

const { value, errorMessage } = useField<string>(() => props.name)
</script>

<template>
  <article class="flex flex-col gap-4 w-full">
    <label
      v-if="lable"
      class="text-lg text-zinc-500"
      :class="[errorMessage ? 'text-rose-500!' : '']"
      >{{ lable }}</label
    >

    <div
      class="select-form border-2 border-zinc-200 px-4 py-2 rounded-md"
      :class="[errorMessage ? 'border-rose-500!' : '']"
    >
      <select
        v-model="value"
        class="w-full outline-0 bg-transparent cursor-pointer text-zinc-700"
        :class="[!value ? 'text-gray-400' : '']"
      >
        <button>
          <selectedcontent></selectedcontent>
        </button>

        <option v-for="opt in options" :key="opt.value" :value="opt.value">
          {{ opt.label }}
        </option>
      </select>
    </div>

    <span v-if="errorMessage" class="text-xs text-red-500">{{ errorMessage }}</span>
  </article>
</template>
