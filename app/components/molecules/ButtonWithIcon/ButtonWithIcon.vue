<script setup lang="ts">
import Icons, { type TNameIcon } from '~/components/atoms/ARYAFIcon/Icons.vue'
import Button, { type TSize, type TVariant } from '~/components/atoms/Button/Button.vue'

interface IProps {
  iconName: TNameIcon
  variant?: TVariant
  size?: TSize
  iconCircle?: boolean
  iconDirection?: 'left' | 'right'
  colorStroke?: string
}

const attrs = useAttrs()

const props = withDefaults(defineProps<IProps>(), {
  size: 'md',
  variant: 'default',
  iconCircle: true,
  iconDirection: 'left',
  colorStroke: '',
})
</script>

<template>
  <Button :variant="variant" v-bind="attrs" :size="size">
    <div
      :class="[iconDirection === 'right' ? 'flex-row-reverse' : '']"
      class="flex min-w-fit items-center gap-4 justify-between font-normal"
    >
      <slot></slot>

      <div :class="[props.iconCircle ? 'bg-white p-2 w-fit rounded-full' : '']">
        <Icons :name="props.iconName" :color-stroke="colorStroke" />
      </div>
    </div>
  </Button>
</template>
