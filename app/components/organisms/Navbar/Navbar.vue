<script setup lang="ts">
import {
  BadgeDollarSign,
  Banknote,
  BookMarked,
  BookOpen,
  BookOpenText,
  BookText,
  Boxes,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CalendarDays,
  Car,
  ChevronDown,
  Coffee,
  Cog,
  CreditCard,
  Crosshair,
  Crown,
  CupSoda,
  Database,
  FilePenLine,
  FileText,
  Gamepad2,
  Gem,
  Gift,
  Globe,
  Ham,
  HandCoins,
  HandHeart,
  Handshake,
  Headphones,
  HeartPulse,
  Hospital,
  Lamp,
  LaptopMinimal,
  Layers2,
  LifeBuoy,
  Megaphone,
  Menu,
  MessageCircleMore,
  MessagesSquare,
  Network,
  Notebook,
  PackageCheck,
  Palette,
  Plug2,
  Rocket,
  ScanLine,
  Scissors,
  ScrollText,
  Search,
  Settings2,
  Shield,
  Shirt,
  ShoppingBag,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  SquareCode,
  Store,
  ThumbsUp,
  TrendingUp,
  Truck,
  University,
  Users,
  UserStar,
  Utensils,
  Video,
  Wallet,
  Warehouse,
  Waypoints,
  Wrench,
  X,
} from 'lucide-vue-next'
import type { Component } from 'vue'
import './style.css'
import { logo } from '~/assets/images'
import { NAVBAR_ITEMS } from '~/constants/navbar'
import type { INavbarItem, TNavIcon } from '~/constants/navbar'
import Button from '~/components/atoms/Button/Button.vue'
import { PaperBag, UserShield } from '@lucide/vue'
import { PATHS } from '~/constants/paths'

const iconMap: Record<TNavIcon, Component> = {
  store: Store,
  'credit-card': CreditCard,
  boxes: Boxes,
  truck: Truck,
  megaphone: Megaphone,
  gift: Gift,
  'messages-square': MessagesSquare,
  'trending-up': TrendingUp,
  banknote: Banknote,
  'package-check': PackageCheck,
  settings2: Settings2,
  users: Users,
  sparkles: Sparkles,
  cog: Cog,
  plug2: Plug2,
  book: BookOpen,
  video: Video,
  'file-text': FileText,
  'calendar-days': CalendarDays,
  'life-buoy': LifeBuoy,
  headphones: Headphones,
  search: Search,
  calculator: Calculator,
  'scan-line': ScanLine,
  'sliders-horizontal': SlidersHorizontal,
  palette: Palette,
  rocket: Rocket,
  'shopping-bag': ShoppingBag,
  smartphone: Smartphone,
  globe: Globe,
  handshake: Handshake,
  wallet: Wallet,
  building2: Building2,
  utensils: Utensils,
  'cup-soda': CupSoda,
  coffee: Coffee,
  scissors: Scissors,
  wrench: Wrench,
  network: Network,
  layers2: Layers2,
  'badge-dollar-sign': BadgeDollarSign,
  shield: Shield,
  car: Car,
  // ! here
  filePenLine: FilePenLine,
  paparBag: PaperBag,
  crosshair: Crosshair,
  userStar: UserStar,
  msgCircleMore: MessageCircleMore,
  handCoins: HandCoins,
  global: Globe,
  squareCode: SquareCode,
  database: Database,
  bookOpenText: BookOpenText,
  notebook: Notebook,
  bookMarked: BookMarked,
  wayPoints: Waypoints,
  scrollText: ScrollText,
  'gamepad-2': Gamepad2,
  'hand-heart': HandHeart,
  'heart-pulse': HeartPulse,
  'laptop-minimal': LaptopMinimal,
  bookText: BookText,
  crown: Crown,
  gem: Gem,
  ham: Ham,
  hospital: Hospital,
  lamp: Lamp,
  shirt: Shirt,
  'briefcase-business': BriefcaseBusiness,
  'thumbs-up': ThumbsUp,
  'user-shield': UserShield,
  university: University,
  warehouse: Warehouse,
}

const navRef = ref<HTMLElement | null>(null)
const activeLabel = ref<string | null>(null)
const mobileOpen = ref<boolean>(false)
const mobileAccordion = ref<string | null>(null)
const router = useRouter()

const activeItem = computed<INavbarItem | null>(() => {
  if (!activeLabel.value) return null
  return NAVBAR_ITEMS.find((item) => item.label === activeLabel.value) ?? null
})

const toggleItem = (item: INavbarItem) => {
  activeLabel.value = activeLabel.value === item.label ? null : item.label
}

const toggleMobileMenu = () => {
  mobileOpen.value = !mobileOpen.value
  activeLabel.value = null
}

const toggleMobileAccordion = (item: INavbarItem) => {
  mobileAccordion.value = mobileAccordion.value === item.label ? null : item.label
}

const closeAll = () => {
  activeLabel.value = null
  mobileOpen.value = false
  mobileAccordion.value = null
}

const handleOutsideClick = (event: MouseEvent) => {
  const path = event.composedPath()
  if (navRef.value && !path.includes(navRef.value)) {
    closeAll()
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') closeAll()
}

const goToLogin = () => {
  router.push(PATHS.LOGIN);
}

const goToCreateStore = () => router.push(PATHS.STORE_SETUP)

const goToHome = () => {
  router.push(PATHS.HOME)
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleOutsideClick)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <nav
    ref="navRef"
    class="section-container sticky top-5 z-50 mb-10 border border-zinc-300 rounded-full backdrop-blur-md"
  >
    <article class="flex justify-between items-center px-4 py-3 gap-3">
      <ul class="flex items-center gap-2 shrink-0 cursor-pointer"  @click="goToHome">
        <li>
          <img class="w-10" :src="logo" alt="logo" />
        </li>
        <li class="">
          <p class="text-lg font-semibold">ارياف</p>
        </li>
      </ul>

      <ul class="hidden lg:flex items-center gap-1 xl:gap-2">
        <li
          v-for="item in NAVBAR_ITEMS"
          :key="item.label"
          :class="
            'flex items-center gap-1 xl:gap-2 cursor-pointer rounded-full px-2 py-1 transition-colors duration-200 ' +
            (activeLabel === item.label ? 'bg-background' : 'hover:bg-secondary/70')
            "
          @click="toggleItem(item)"
        >
          <p
            :class="
              'text-base xl:text-lg transition-colors duration-200 ' +
              (activeLabel === item.label ? 'text-primary font-semibold' : '')
            "
          >
            {{ item.label }}
          </p>
          <ChevronDown
            :class="
              'w-5 transition-transform duration-300 ' +
              (activeLabel === item.label ? 'rotate-180 text-primary' : 'rotate-0')
            "
          />
        </li>
      </ul>

      <div class="flex items-center gap-2 md:gap-4 shrink-0">
        <p class="gradient-text font-semibold text-lg hidden md:block">EN</p>
        <Button variant="outline" class="hidden md:block" @click="goToLogin"> تسجيل الدخول </Button>
        <Button @click="goToCreateStore"> أنشئ متجرك </Button>
        <button
          class="lg:hidden cursor-pointer rounded-full p-2 hover:bg-secondary/70 transition-colors duration-200"
          aria-label="القائمة"
          @click="toggleMobileMenu"
        >
          <Menu v-if="!mobileOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </article>

    <article
      :class="
        'hidden section-container lg:grid gap-2 overflow-hidden bg-white absolute top-full left-[50%] translate-x-[-50%] mt-3 rounded-lg shadow-lg transition-all duration-300 origin-top ' +
        (activeLabel
          ? 'max-h-32rem p-4 opacity-100 translate-y-0 overflow-y-auto'
          : 'max-h-0 p-0 opacity-0 pointer-events-none')
      "
      style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))"
    >
      <article
        v-for="column in activeItem?.columns ?? []"
        :key="column.title"
        class="flex flex-col gap-4"
      >
        <h3 class="text-gray-400 font-medium">{{ column.title }}</h3>
        <ul class="flex flex-col gap-2">
          <li
            v-for="link in column.links"
            :key="link.title"
            class="nav-card flex cursor-pointer gap-2 items-center rounded-md hover:bg-secondary px-3 py-2 transition-colors duration-200"
          >
            <div class="rounded-md p-3 bg-secondary wrapper-icon transition-colors duration-200">
              <component :is="iconMap[link.icon]" class="w-5 h-5 text-primary" />
            </div>
            <div>
              <p class="nav-card-text__hover text-sm font-medium transition-colors duration-200">
                {{ link.title }}
              </p>
              <small class="text-xs text-muted-foreground">{{ link.description }}</small>
            </div>
          </li>
        </ul>
      </article>
    </article>

    <article
      :class="
        'lg:hidden grid gap-4 overflow-hidden bg-white absolute top-full left-0 right-0 rounded-2xl shadow-lg transition-all duration-300 origin-top ' +
        (mobileOpen
          ? 'max-h-[70vh] p-4 opacity-100 translate-y-0 overflow-y-auto'
          : 'max-h-0 p-0 opacity-0 pointer-events-none')
      "
    >
      <ul class="flex flex-col gap-2">
        <li
          v-for="item in NAVBAR_ITEMS"
          :key="item.label"
          class="flex flex-col rounded-xl overflow-hidden"
        >
          <button
          class="flex items-center justify-between gap-2 cursor-pointer rounded-xl px-3 py-2 hover:bg-secondary/70 transition-colors duration-200"
            @click="toggleMobileAccordion(item)"
          >
            <p
              :class="
                'text-base font-medium ' + (mobileAccordion === item.label ? 'text-primary' : '')
              "
            >
              {{ item.label }}
            </p>
            <ChevronDown
              :class="
                'w-5 transition-transform duration-300 ' +
                (mobileAccordion === item.label ? 'rotate-180 text-primary' : 'rotate-0')
              "
            />
          </button>

          <article
            :class="
              'grid gap-3 overflow-hidden overflow-y-auto transition-all duration-300 ' +
              (mobileAccordion === item.label
                ? 'max-h-[60vh] p-2 opacity-100'
                : 'max-h-0 p-0 opacity-0')
            "
            style="grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr))"
          >
            <div v-for="column in item.columns" :key="column.title" class="flex flex-col gap-2">
              <h3 class="text-gray-400 text-sm font-medium">{{ column.title }}</h3>
              <ul class="flex flex-col gap-1">
                <li
                  v-for="link in column.links"
                  :key="link.title"
                  class="nav-card flex cursor-pointer gap-2 items-center rounded-md hover:bg-secondary px-2 py-2 transition-colors duration-200"
                >
                  <div
                    class="rounded-md p-2.5 bg-secondary wrapper-icon transition-colors duration-200"
                  >
                    <component :is="iconMap[link.icon]" class="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p
                      class="nav-card-text__hover text-sm font-medium transition-colors duration-200"
                    >
                      {{ link.title }}
                    </p>
                    <small class="text-xs text-muted-foreground">{{ link.description }}</small>
                  </div>
                </li>
              </ul>
            </div>
          </article>
        </li>
      </ul>

      <div class="flex flex-col gap-2 pt-2 border-t border-zinc-200">
        <Button variant="outline" @click="goToLogin"> تسجيل الدخول </Button>
        <Button @click="goToCreateStore"> أنشئ متجرك </Button>
      </div>
    </article>
  </nav>
</template>
