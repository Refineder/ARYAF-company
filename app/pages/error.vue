<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode: number
    message: string
  }
}>()

const handleError = () => {
  clearError({
    redirect: '/',
  })
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <h1 class="text-7xl font-bold">
      {{ props.error.statusCode }}
    </h1>

    <p class="text-2xl mt-4">
      {{ props.error.message }}
    </p>

    <button  class="mt-6 px-5 py-3 bg-black text-white rounded" @click="handleError">Go Home</button>
  </div>
</template>
