<script setup lang="ts">
import CompleteVerification from '~/components/sections/DashboardSections/StoreReviewSections/CompleteVerfication/CompleteVerification.vue'
import CopyLink from '~/components/sections/DashboardSections/StoreReviewSections/CopyLink/CopyLink.vue'

definePageMeta({
  layout: 'store-setup',
})
</script>

<template>
  <div class="section-container flex flex-col gap-6 mt-10">
    <CopyLink />
    <CompleteVerification />
  </div>
</template>
