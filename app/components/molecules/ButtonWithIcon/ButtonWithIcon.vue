<script setup lang="ts">
import Icons, { type TNameIcon } from '~/components/atoms/ARYAFIcon/Icons.vue'
import Button, { type TSize } from '~/components/atoms/Button/Button.vue'

interface IProps {
  iconName: TNameIcon
  size?: TSize
}

const attrs = useAttrs();

const props = withDefaults(defineProps<IProps>(), {
  size: 'md',
})
</script>

<template>
  <Button v-bind="attrs" :size="size">
    <div class="flex items-center gap-4 font-normal">
      <slot></slot>
      <div class="bg-white p-2 w-fit rounded-full">
        <Icons :name="props.iconName" />
      </div>
    </div>
  </Button>
</template>
