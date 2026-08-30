<script setup lang="ts">
import { ref } from 'vue'
import DashboardNavbar from '~/components/organisms/DashboardNavbar/DashboardNavbar.vue'
import DashboardSidebar from '~/components/organisms/DashboardSidebar/DashboardSidebar.vue'
import './style.css'

useSeoMeta({
  title: 'ARYAF - Dashboard',
  description: 'This is the Dashboard Page of ARYAF.',
})

useHead({
  htmlAttrs: {
    lang: 'ar',
    dir: 'rtl',
  },
})

const sidebarOpen = ref(true)
</script>

<template>
  <div class="min-h-screen p-2 flex flex-col gap-2">
    <DashboardNavbar @toggle-sidebar="sidebarOpen = !sidebarOpen" />

    <div class="flex gap-2 grow min-h-0">
      <Transition name="dashboard-sidebar">
        <DashboardSidebar v-show="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
      </Transition>

      <main class="bg-muted rounded-2xl grow p-6 overflow-y-auto">
        <slot></slot>
      </main>
    </div>
  </div>
</template>
