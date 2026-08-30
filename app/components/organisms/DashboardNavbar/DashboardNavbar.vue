<script setup lang="ts">
import { ref } from 'vue'
import { Search, Sparkles } from 'lucide-vue-next'
import { logo } from '~/assets/images'
import Icons from '~/components/atoms/ARYAFIcon/Icons.vue'
import ProfileAvatar from '~/components/molecules/ProfileAvatar/ProfileAvatar.vue'
import { PATHS } from '~/constants/paths'

const emit = defineEmits<{ 'toggle-sidebar': [] }>()

const userName = ref('أحمد حسام')

const searchText = ref('')

const isDarkTheme = ref(false)

const router = useRouter()

const toggleDarkTheme = () => {
  isDarkTheme.value = !isDarkTheme.value
}

const goToHome = () => router.push(PATHS.HOME)
</script>

<template>
  <header class="bg-white rounded-2xl px-5 py-3 flex items-center justify-between gap-4">
    <div class="flex items-center gap-6 shrink-0">
      <div class="flex items-center gap-2 cursor-pointer select-none" @click="goToHome">
        <img class="w-10 h-10 object-contain" :src="logo" alt="logo" />
        <span class="text-lg font-semibold">ارياف</span>
      </div>

      <button
        type="button"
        class="cursor-pointer grid place-items-center w-9 h-9 rounded-full hover:bg-muted transition-colors shrink-0"
        aria-label="فتح القائمة الجانبية"
        @click="emit('toggle-sidebar')"
      >
        <Icons name="dashboardMenu" :width="20" :height="20" />
      </button>

      <button
        type="button"
        class="cursor-pointer flex items-center gap-2 rounded-full p-1 pr-3 hover:bg-muted transition-colors shrink-0"
        aria-label="حسابي"
      >
        <ProfileAvatar :name="userName" />
        <span class="text-sm font-medium">{{ userName }}</span>
        <Icons name="menuGradient" :width="12" :height="8" />
      </button>
    </div>

    <div
      class="grow max-w-md min-w-0 border! border-zinc-200 rounded-full px-4 py-2 hidden items-center gap-2 focus-within:gradient-border-bg transition-colors sm:flex"
    >
      <Search class="w-5 h-5 shrink-0 text-primary" />
      <input
        v-model="searchText"
        type="text"
        placeholder="بحث سريع..."
        class="grow min-w-0 outline-none bg-transparent text-sm placeholder:text-gray-400"
      />
    </div>

    <div class="hidden lg:flex items-center gap-4 shrink-0">
      <button
        type="button"
        class="cursor-pointer flex items-center gap-2 rounded-full hover:bg-muted transition-colors px-3 py-2"
      >
        <Sparkles class="w-4 h-4 text-primary" />
        <span class="text-sm font-medium">مساعد ارياف</span>
      </button>

      <div class="flex items-center gap-3 cursor-pointer">
        <Icons name="dashboardWallet" :width="22" :height="22" />
        <span class="text-sm font-bold text-primary">0</span>
        <Icons name="dashboardHash" :width="16" :height="16" />
      </div>

      <div class="flex items-center gap-3">
        <button
          type="button"
          class="cursor-pointer grid place-items-center w-9 h-9 rounded-full hover:bg-muted transition-colors"
          aria-label="الكوبونات"
        >
          <Icons name="dashboardCopon" :width="20" :height="20" />
        </button>

        <span class="w-px h-6 bg-zinc-200"></span>

        <button
          type="button"
          class="cursor-pointer relative grid place-items-center w-9 h-9 rounded-full hover:bg-muted transition-colors"
          aria-label="الإشعارات"
        >
          <Icons name="dashboardBell" :width="20" :height="20" />
        </button>

        <span class="w-px h-6 bg-zinc-200"></span>
        <button
          type="button"
          class="cursor-pointer grid place-items-center w-9 h-9 rounded-full transition-colors"
          :class="
            isDarkTheme
              ? 'bg-primary-foreground/10 ring-1 ring-primary-foreground/30'
              : 'hover:bg-muted'
          "
          aria-label="الوضع الليلي"
          @click="toggleDarkTheme"
        >
          <Icons name="dashboardDarkTheme" :width="20" :height="20" />
        </button>
      </div>
    </div>
  </header>
</template>
