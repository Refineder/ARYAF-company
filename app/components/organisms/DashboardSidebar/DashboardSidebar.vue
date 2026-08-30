<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  BellRing,
  CreditCard,
  Plus,
  Settings,
  ShieldCheck,
  // Store as StoreIcon,
  // Boxes,
  // Tags,
  // Truck,
  UserCog,
} from 'lucide-vue-next'
import Icons from '~/components/atoms/ARYAFIcon/Icons.vue'
import ProfileAvatar from '~/components/molecules/ProfileAvatar/ProfileAvatar.vue'
import { isIconName, type IDashboardNavItem, type TDashboardTab } from '~/@types/dashboard'
import './style.css'

const emit = defineEmits<{ select: [item: IDashboardNavItem]; 'toggle-sidebar': [] }>()
const userName = ref('أحمد حسام')

const route = useRoute()

const tabs: Record<TDashboardTab, IDashboardNavItem[]> = {
  home: [
    {
      id: 'overview',
      label: 'لوحة التحكم',
      icon: 'dashboard',
      path: '/dashboard',
    },
    {
      id: 'products',
      label: 'المنتجات',
      icon: 'dashboard',
      path: '/dashboard/products',
    },
    {
      id: 'orders',
      label: 'الطلبات',
      icon: 'dashboard',
      path: '/dashboard/orders',
    },
    {
      id: 'customers',
      label: 'العملاء',
      icon: 'dashboard',
      path: '/dashboard/customers',
    },
    {
      id: 'marketing',
      label: 'التسويق',
      icon: 'dashboard',
      path: '/dashboard/marketing',
    },
  ],
  store: [
    // { id: 'store-overview', label: 'المتجر', icon: StoreIcon },
    // { id: 'inventory', label: 'المخزون', icon: Boxes },
    // { id: 'categories', label: 'التصنيفات', icon: Tags },
    // { id: 'shipping', label: 'الشحن', icon: Truck },
  ],
  setting: [
    { id: 'general-settings', label: 'الإعدادات العامة', icon: Settings },
    { id: 'account', label: 'الحساب', icon: UserCog },
    { id: 'billing', label: 'الفواتير', icon: CreditCard },
    { id: 'security', label: 'الأمان', icon: ShieldCheck },
    { id: 'notifications', label: 'الإشعارات', icon: BellRing },
  ],
}

const tabButtons: {
  key: TDashboardTab
  nameIcon: 'dashboardHome' | 'dashboardStore' | 'dashboardSetting'
  label: string
}[] = [
  { key: 'home', nameIcon: 'dashboardHome', label: 'لوحة التحكم' },
  { key: 'store', nameIcon: 'dashboardStore', label: 'المتجر' },
  { key: 'setting', nameIcon: 'dashboardSetting', label: 'الإعدادات' },
]

const activeTab = ref<TDashboardTab>('home')

const activeItems = computed(() => tabs[activeTab.value])

const onSelectTab = (key: TDashboardTab) => {
  if (activeTab.value === key) return
  activeTab.value = key
  const first = tabs[key][0]
  if (first) emit('select', first)
}

const isActive = (path?: string) => {
  if (!path) return false

  return route.path === path
}

const onSelectItem = (item: IDashboardNavItem) => {
  emit('select', item)
}
</script>

<template>
  <aside
    class="bg-white/70 backdrop-blur-lg rounded-2xl p-4 w-64 shrink-0 flex h-full top-0 right-0 fixed flex-col gap-6 max-h-svh md:sticky md:top-5 md:h-auto"
  >
    <button
      type="button"
      class="cursor-pointer grid place-items-center w-9 h-9 rounded-full hover:bg-muted transition-colors shrink-0 md:hidden"
      aria-label="فتح القائمة الجانبية"
      @click="emit('toggle-sidebar')"
    >
      <Icons name="dashboardMenu" :width="20" :height="20" />
    </button>
    <div class="flex items-center justify-between gap-2">
      <button
        v-for="tab in tabButtons"
        :key="tab.key"
        type="button"
        class="cursor-pointer grow grid place-items-center w-11 h-11 rounded-xl transition-colors"
        :class="
          activeTab === tab.key
            ? 'gradient-bg shadow-md shadow-primary-foreground/30'
            : 'bg-muted hover:bg-accent'
        "
        :aria-label="tab.label"
        @click="onSelectTab(tab.key)"
      >
        <Icons
          :color-stroke="activeTab === tab.key ? 'white' : ''"
          :name="tab.nameIcon"
          :width="20"
          :height="20"
        />
      </button>
    </div>

    <nav class="grow flex flex-col gap-1 overflow-y-auto">
      <NuxtLink
        v-for="item in activeItems"
        :key="item.id"
        :to="item.path"
        class="sidebar-dashboard cursor-pointer flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors"
        @click="onSelectItem(item)"
      >
        <Icons
          v-if="isIconName(item.icon)"
          :color-stroke="isActive(item.path) ? 'gradient' : ''"
          :name="item.icon"
        />

        <component :is="item.icon" v-else class="w-5 h-5 shrink-0" />

        <span class="text-sm">{{ item.label }}</span>
      </NuxtLink>
      <template v-if="activeItems.length === 0">
        <NuxtLink
          to="/dashboard/create-store"
          class="sidebar-dashboard cursor-pointer items-center justify-center flex gap-3 bg-accent/50 rounded-xl px-3 py-2.5 transition-colors"
        >
          <Plus class="text-primary" />
          <span class="text-lg text-primary">انشاء متجر</span>
        </NuxtLink>
      </template>
    </nav>

    <div class="flex items-center justify-between gap-2 border-t border-zinc-200 pt-4">
      <div class="flex items-center gap-2 min-w-0 cursor-pointer">
        <ProfileAvatar :name="userName" />
        <div class="min-w-0">
          <p class="text-sm font-semibold truncate">{{ userName }}</p>
        </div>
      </div>

      <button
        type="button"
        class="cursor-pointer grid place-items-center w-9 h-9 rounded-full hover:bg-destructive/10 transition-colors shrink-0"
        aria-label="تسجيل الخروج"
      >
        <Icons name="dashboardLogout" :width="18" :height="18" />
      </button>
    </div>
  </aside>
</template>
