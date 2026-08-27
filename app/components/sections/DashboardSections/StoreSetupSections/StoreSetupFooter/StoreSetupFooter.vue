<script setup lang="ts">
import Button from '~/components/atoms/Button/Button.vue'
import ButtonWithIcon from '~/components/molecules/ButtonWithIcon/ButtonWithIcon.vue'

interface IProps {
  isFirstStep: boolean
  isLastStep: boolean
  canProceed: boolean
  isPreviewStep?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  isPreviewStep: false,
})

const emit = defineEmits<{ next: []; prev: []; preview: [] }>()
</script>

<template>
  <div
    class="mt-auto bg-white p-4 rounded-4xl flex flex-wrap items-center justify-between gap-4"
    style="corner-shape: squircle"
  >
    <template v-if="props.isPreviewStep">
      <div class="flex items-center gap-3">
        <ButtonWithIcon icon-name="rocket" :icon-circle="false" @click="emit('next')">
          إطلاق المتجر الآن
        </ButtonWithIcon>
        <ButtonWithIcon
          variant="outline"
          icon-name="laptop"
          :icon-circle="false"
          @click="emit('preview')"
        >
          معاينة المتجر
        </ButtonWithIcon>
      </div>

      <Button class="px-20" variant="secondary" @click="emit('prev')">
        <span class="gradient-text">
          {{ isFirstStep ? 'العودة' : 'السابق' }}
        </span>
      </Button>
    </template>

    <template v-else>
      <Button
        class="px-20"
        :disabled="!canProceed"
        :class="canProceed ? '' : 'opacity-60 cursor-not-allowed'"
        @click="emit('next')"
      >
        {{ isLastStep ? 'إطلاق المتجر' : 'التالي' }}
      </Button>

      <Button class="px-20" variant="secondary" @click="emit('prev')">
        <span class="gradient-text">
          {{ isFirstStep ? 'العودة' : 'السابق' }}
        </span>
      </Button>
    </template>
  </div>
</template>
