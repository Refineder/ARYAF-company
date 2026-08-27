<script setup lang="ts">
import { dashboardCreateStore } from '~/assets/images'
import Button from '~/components/atoms/Button/Button.vue'

const router = useRouter()

const goToStoreSetup = () => router.push('/dashboard/create-store/store-setup')
</script>

<template>
  <section class="bg-white p-2 rounded-2xl" style="width: min(512px, 95%)">
    <article class="bg-secondary/50 w-full rounded-3xl p-4 flex flex-col gap-4">
      <div class="w-full rounded-4xl overflow-hidden" style="corner-shape: squircle">
        <img
          class="object-cover min-h-60"
          :src="dashboardCreateStore"
          alt="dashbaord create store"
        />
      </div>

      <h2 class="clamp-text-sm font-semibold">
        ليس لديك أي متجر حتى الآن <span class="gradient-text">جاهز لإنشاء متجرك؟</span>
      </h2>

      <p class="max-w-lg text-center">
        ابدأ بإنشاء متجرك الأول، واختر الطريقة التي تناسبك سواء باستخدام الذكاء الاصطناعي أو من خلال
        قالب احترافي.
      </p>

      <Button size="lg" @click="goToStoreSetup"> أنشئ متجرك الان </Button>
    </article>
  </section>
</template>
