<script setup lang="ts">
import { dashboardTravel } from '~/assets/images'
import ButtonWithIcon from '~/components/molecules/ButtonWithIcon/ButtonWithIcon.vue'
import { PATHS } from '~/constants/paths'

const router = useRouter()

const goToDashboardCreateStore = () => router.push(PATHS.STORE_SETUP)
</script>

<template>
  <section
    class="p-4 rounded-4xl bg-white grid gap-4"
    style="
      grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 1fr));
      corner-shape: squircle;
    "
  >
    <article class="flex flex-col gap-8 justify-center">
      <h2 class="clamp-text-sm">
        ابدأ رحلتك نحو <span class="gradient-text">متجر احترافي يحقق المبيعات</span>
      </h2>
      <p class="text-secondary-foreground">
        اختر الطريقة المناسبة لإنشاء متجرك، وأكمل خطوات الإعداد الأساسية ليصبح جاهزًا لاستقبال
        العملاء وبدء البيع بثقة.
      </p>
      <div class="flex gap-4 flex-wrap">
        <ButtonWithIcon
          :icon-circle="false"
          icon-name="dashboardCode"
          @click="goToDashboardCreateStore"
          >أنشئ متجرك مع أرياف AI</ButtonWithIcon
        >
        <ButtonWithIcon
          class="border-gray-300!"
          :icon-circle="false"
          variant="outline"
          icon-name="dashboardTemplate"
        >
          <span class="gradient-text">اختر قالبًا احترافيًا</span>
        </ButtonWithIcon>
      </div>
    </article>

    <article class="overflow-hidden rounded-4xl" style="corner-shape: squircle">
      <img class="object-cover min-h-56" :src="dashboardTravel" alt="dashboardTravel" />
    </article>
  </section>
</template>
