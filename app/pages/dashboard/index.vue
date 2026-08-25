<script setup lang="ts">
import Greeting from '~/components/sections/DashboardSections/HomeSections/GreetingSection/Greeting.vue'
import Travel from '~/components/sections/DashboardSections/HomeSections/Travel/Travel.vue'
import Products from '~/components/sections/DashboardSections/HomeSections/Products/Products.vue'

definePageMeta({
  layout: 'dashbarod',
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <Greeting />
    <Travel />
    <Products />
  </div>
</template>
