<script setup lang="ts">
import { ref } from 'vue'
import { Monitor, Smartphone, Star, ShoppingCart, Heart, Search, X } from 'lucide-vue-next'
import { reviewLogo } from '~/assets/images'
import './style.css'

interface IProps {
  storeName: string
}

defineProps<IProps>()

const dialogRef = ref<HTMLDialogElement | null>(null)
const viewMode = ref<'desktop' | 'phone'>('desktop')

const tabs = [
  { label: 'الكل', count: 24 },
  { label: 'منتجات فاخرة', count: 8 },
  { label: 'عروض خاصة', count: 5 },
  { label: 'وصل حديثا', count: 6 },
  { label: 'الأكثر مبيعا', count: 10 },
]

const products = [
  {
    id: 1,
    name: 'سماعات لاسلكية',
    details: 'تصميم أنيق مع إلغاء الضوضاء',
    rating: 4.5,
    price: '299',
    oldPrice: '399',
  },
  {
    id: 2,
    name: 'ساعة ذكية',
    details: 'مقاومة للماء مع تتبع اللياقة',
    rating: 4.8,
    price: '599',
    oldPrice: '799',
  },
  {
    id: 3,
    name: 'حقيبة جلدية',
    details: 'جلد طبيعي فاخر 100%',
    rating: 4.3,
    price: '189',
    oldPrice: '249',
  },
  {
    id: 4,
    name: 'نظارات شمسية',
    details: 'حماية UV400 مع عدسات ملونة',
    rating: 4.6,
    price: '149',
    oldPrice: '199',
  },
  {
    id: 5,
    name: 'سماعات بلوتوث',
    details: 'صوت نقي مع خرطوم طويل',
    rating: 4.2,
    price: '89',
    oldPrice: '129',
  },
  {
    id: 6,
    name: 'حافظة هاتف',
    details: 'سيليكون مقاوم للصدمات',
    rating: 4.7,
    price: '49',
    oldPrice: '79',
  },
]

const renderStars = (rating: number) => {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5 ? 1 : 0
  return { full, half, empty: 5 - full - half }
}

const close = () => {
  dialogRef.value?.close()
}

const open = () => {
  dialogRef.value?.showModal()
}

defineExpose({ open, close })
</script>

<template>
  <dialog
    id="store-preview-dialog"
    ref="dialogRef"
    class="store-preview-dialog rounded-2xl overflow-hidden border-0 p-0 m-auto"
    :class="{ 'phone-frame': viewMode === 'phone' }"
    @click.self="close"
    @close="viewMode = 'desktop'"
  >
    <div class="flex flex-col bg-white w-full h-[85vh] rounded-2xl overflow-hidden">
      <!-- Browser Header -->
      <div class="flex items-center justify-between px-4 py-2.5 bg-secondary-dark shrink-0">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-rose-400"></span>
          <span class="w-3 h-3 rounded-full bg-amber-400"></span>
          <span class="w-3 h-3 rounded-full bg-emerald-400"></span>
        </div>

        <div class="flex-1 mx-4 max-w-md">
          <div
            class="flex items-center gap-2 rounded-full px-3 py-1.5 border border-neutral-700"
            style="background-color: oklch(from white 25% c h)"
          >
            <span class="text-xs text-neutral-500 mx-auto truncate">{{ storeName }}.aryaf.com</span>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <div
            class="flex items-center p-1 rounded-md"
            style="background-color: oklch(from white 25% c h)"
          >
            <button
              type="button"
              :class="[
                'flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs transition-colors cursor-pointer',
                viewMode === 'desktop' ? 'bg-zinc-700 text-white' : 'text-neutral-500',
              ]"
              @click="viewMode = 'desktop'"
            >
              <Monitor class="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              :class="[
                'flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs transition-colors cursor-pointer',
                viewMode === 'phone' ? 'bg-zinc-700 text-white' : 'text-neutral-500',
              ]"
              @click="viewMode = 'phone'"
            >
              <Smartphone class="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            type="button"
            class="ml-1 p-1.5 rounded-full text-neutral-500 transition-colors cursor-pointer"
            style="background-color: oklch(from white 25% c h)"
            @click="close"
          >
            <X class="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div class="bg-primary text-white w-full p-2 text-xs text-center">
        <p>🎉 شحن مجاني لجميع الطلبات فوق ٢٠٠ ر.س — استخدم الكود: ARYAF10</p>
      </div>

      <!-- Store Preview Content -->
      <div :class="['flex-1 overflow-y-auto bg-gray-50']">
        <!-- Store Navbar -->
        <nav
          class="flex flex-wrap items-center justify-between px-4 py-3 bg-white border-b border-gray-100 sticky top-0 z-10"
        >
          <div class="flex items-center gap-2">
            <img :src="reviewLogo" alt="logo" />
            <span class="font-semibold text-sm">{{ storeName }}</span>
          </div>
          <div
            class="nav-preview-links flex-wrap hidden md:flex items-center gap-4 text-xs text-gray-600"
          >
            <span
              class="cursor-pointer text-primary font-semibold hover:text-primary transition-colors"
              >الرئيسية</span
            >
            <span class="cursor-pointer hover:text-primary transition-colors">تواصل معنا</span>
            <span class="cursor-pointer hover:text-primary transition-colors">المدونة</span>
            <span class="cursor-pointer hover:text-primary transition-colors">عروض</span>
            <span class="cursor-pointer hover:text-primary transition-colors">المنتجات</span>
          </div>
          <div class="flex items-center gap-2">
            <button type="button" class="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Search class="w-4 h-4 text-gray-600" />
            </button>
            <button type="button" class="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Heart class="w-4 h-4 text-gray-600" />
            </button>
            <button
              type="button"
              class="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ShoppingCart class="w-4 h-4 text-gray-600" />
              <span
                class="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-white text-[9px] rounded-full flex items-center justify-center"
              >
                3
              </span>
            </button>
          </div>
        </nav>

        <!-- Tabs -->
        <div class="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
          <div class="flex items-center gap-1 overflow-x-auto">
            <button
              v-for="(tab, i) in tabs"
              :key="tab.label"
              type="button"
              :class="[
                'shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer',
                i === 0 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
              ]"
            >
              {{ tab.label }}
            </button>
          </div>
          <span class="shrink-0 text-[11px] text-gray-400 mr-3">{{ tabs[0]?.count }} منتج</span>
        </div>

        <!-- Products Section -->
        <div class="p-4">
          <div class="flex items-center justify-between mb-4">
            <button
              type="button"
              class="text-xs text-primary font-medium hover:underline cursor-pointer"
            >
              عرض الكل
            </button>
            <h3 class="font-semibold text-sm">المنتجات المميزة</h3>
          </div>

          <div
            class="grid gap-3"
            :class="// viewMode === 'phone' ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
            ''"
            style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))"
          >
            <div
              v-for="product in products"
              :key="product.id"
              class="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
            >
              <div class="relative bg-gray-100 flex items-center justify-center p-6">
                <div class="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                  <ShoppingCart class="w-6 h-6 text-gray-400" />
                </div>
                <button
                  type="button"
                  class="absolute top-2 left-2 p-1.5 rounded-full bg-white/80 hover:bg-white transition-colors"
                >
                  <Heart class="w-3.5 h-3.5 text-gray-400" />
                </button>
              </div>

              <div class="p-3 flex flex-col gap-1.5 flex-1">
                <p class="text-xs font-semibold line-clamp-1">{{ product.name }}</p>
                <p class="text-[10px] text-gray-400 line-clamp-1">{{ product.details }}</p>

                <div class="flex items-center gap-0.5">
                  <Star
                    v-for="s in renderStars(product.rating).full"
                    :key="'f' + s"
                    class="w-3 h-3 text-amber-400 fill-amber-400"
                  />
                  <Star
                    v-if="renderStars(product.rating).half"
                    class="w-3 h-3 text-amber-400 fill-amber-400/50"
                  />
                  <span class="text-[10px] text-gray-400 mr-1">{{ product.rating }}</span>
                </div>

                <div class="flex items-center justify-between mt-auto pt-1">
                  <button
                    type="button"
                    class="p-1.5 flex items-center gap-1 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
                  >
                    <span class="text-xs">إضافة</span>
                    <ShoppingCart class="w-3 h-3" />
                  </button>
                  <div class="flex items-center gap-1.5">
                    <span class="text-xs font-bold text-primary">{{ product.price }} ر.س</span>
                    <span class="text-[10px] text-gray-400 line-through">{{
                      product.oldPrice
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </dialog>
</template>
