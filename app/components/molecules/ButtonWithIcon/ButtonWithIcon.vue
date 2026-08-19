<script setup lang="ts">
import Icons, { type TNameIcon } from '~/components/atoms/ARYAFIcon/Icons.vue'
import Button, { type TSize } from '~/components/atoms/Button/Button.vue'

interface IProps {
  iconName: TNameIcon
  size?: TSize
  class?: string
}

const props = withDefaults(defineProps<IProps>(), {
  size: 'md',
})
</script>

<template>
  <Button :class="class" :size="size">
    <div class="flex items-center gap-4 font-normal">
      <slot />
      <div class="bg-white p-2 w-fit rounded-full">
        <Icons :name="iconName" />
      </div>
    </div>
  </Button>
</template>
