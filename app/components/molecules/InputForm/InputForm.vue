<script setup lang="ts">
import { computed, ref } from 'vue'
import { useField } from 'vee-validate'
import './form.css'
import Icons, { type TNameIcon } from '~/components/atoms/Button/ARYAFIcon/Icons.vue'

interface IProps {
  name: string
  lable?: string
  icon?: TNameIcon
  inputType?: string
  placeholder?: string
  iconDirection?: 'left' | 'right'
}

const props = defineProps<IProps>()

const { value, errorMessage } = useField<string>(() => props.name)

const randomID = Math.random() * 1000 + new Date().getTime().toString()

const showPassword = ref(false)

const isPassword = computed(() => props.icon === 'eyeGradient' && props.inputType === 'password')

const effectiveType = computed(() => {
  if (isPassword.value && showPassword.value) return 'text'
  return props.inputType || 'text'
})

const toggleVisibility = () => {
  if (isPassword.value) showPassword.value = !showPassword.value
}
</script>

<template>
  <article class="flex flex-col gap-4 w-full">
    <label
      v-if="lable"
      class="text-lg text-zinc-500"
      :class="[errorMessage ? 'text-rose-500!' : '']"
      :for="randomID"
      >{{ lable }}</label
    >

    <div
      class="input-wrapper border border-zinc-200 focus:outline-2 focus:outline-primary-foreground px-4 py-2 rounded-md flex items-center gap-2"
      :class="[
        iconDirection === 'left' ? 'flex-row-reverse' : '',
        errorMessage ? 'border-rose-500!' : '',
      ]"
    >
      <div
        v-if="icon"
        class="basis-8 cursor-pointer"
        :class="isPassword ? 'cursor-pointer' : 'cursor-default'"
        role="button"
        :aria-label="isPassword && showPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'"
        @click="toggleVisibility"
      >
        <Icons :name="icon" color-stroke="#254da6" />
      </div>
      <input
        :id="randomID"
        v-model="value"
        class="grow outline-0 min-w-12 caret-primary-foreground"
        :type="effectiveType"
        :placeholder="placeholder || 'يوسف حرارة'"
      />
    </div>

    <span v-if="errorMessage" class="text-xs text-red-500">{{ errorMessage }}</span>
  </article>
</template>
