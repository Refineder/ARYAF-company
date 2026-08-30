<script setup lang="ts">
import { Globe } from 'lucide-vue-next'
import {
  chinaFlag,
  egyptFlag,
  jordenFlag,
  logo,
  psFlag,
  quaterFlag,
  soaFlag,
} from '~/assets/images'
import Button from '~/components/atoms/Button/Button.vue'
import { PATHS } from '~/constants/paths';

const router = useRouter();

const goToCreateStore = () => router.push(PATHS.STORE_SETUP)

</script>

<template>
  <footer class="bg-secondary-dark pt-20 pb-10">
    <section class="section-container flex flex-col gap-20 text-white">
      <article class="flex flex-col items-center gap-4 border-b border-b-indigo-950 pb-10">
        <h2 class="clamp-text-md">جاهز تبدأ تجارتك في المكان الصح؟</h2>
        <p class="clamp-text-sm">تزيد احتمالية نجاح التجّار مع ارياف بنسبة 250%</p>
        <p class="font-light text-gray-300 max-w-lg text-center">
          التجارة مو صعبة إذا بدأتها من المكان الصح، هنا تلقى الحلول والدعم والمجتمع اللي بيساعدك
          تغيّر حياتك.
        </p>
        <Button size="lg" class="w-fit" @click="goToCreateStore">أنشئ متجرك الأن</Button>
      </article>

      <article
        class="grid gap-6"
        style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))"
      >
        <div class="flex flex-col gap-4">
          <h3 class="text-gray-400">الحلول</h3>
          <ul class="flex flex-col gap-2">
            <li><p>المتجر الإلكتروني</p></li>
            <li><p>نقاط البيع (الكاشير)</p></li>
            <li><p>المدفوعات</p></li>
            <li><p>الشحن</p></li>
            <li><p>إدارة المخزون</p></li>
            <li><p>التطبيقات</p></li>
            <li><p>الثيمات</p></li>
            <li><p>التمويل</p></li>
            <li><p>أدوات التسويق</p></li>
          </ul>
        </div>

        <div class="flex flex-col gap-4">
          <h3 class="text-gray-400">لماذا زد</h3>
          <ul class="flex flex-col gap-2">
            <li><p>لماذا ابدأ مع ارياف؟</p></li>
            <li><p>لماذا أنتقل إلى ارياف؟</p></li>
            <li><p>لماذا أتوسع مع ارياف؟</p></li>
          </ul>
        </div>

        <div class="flex flex-col gap-4">
          <h3 class="text-gray-400">كيف تخدمك زد</h3>
          <ul class="flex flex-col gap-2">
            <li><p>الشركات الصغيرة</p></li>
            <li><p>الشركات المتوسطة</p></li>
            <li><p>الشركات الكبيرة</p></li>
            <li><p>حسب نوع المنتج</p></li>
            <li><p>مدير المتجر</p></li>
            <li><p>الفريق المالي</p></li>
            <li><p>فريق العمليات</p></li>
            <li><p>فريق التسويق</p></li>
            <li><p>الشركاء والمطورين</p></li>
          </ul>
        </div>

        <div class="flex flex-col gap-4">
          <h3 class="text-gray-400">الدعم والتمكين</h3>
          <ul class="flex flex-col gap-2">
            <li><p>تمكين التجار</p></li>
            <li><p>مجتمع التجار</p></li>
            <li><p>المدونة</p></li>
          </ul>
        </div>

        <div class="flex flex-col gap-4">
          <h3 class="text-gray-400">الدعم</h3>
          <ul class="flex flex-col gap-2">
            <li><p>مركز المساعدة</p></li>
            <li><p>ما هو الجديد</p></li>
            <li><p>الشروط والأحكام</p></li>
            <li><p>سياسة الخصوصية</p></li>
            <li><p>شكاوي عملاء متاجر ارياف</p></li>
          </ul>
        </div>

        <div class="flex flex-col gap-4">
          <h3 class="text-gray-400">ارياف متاحة في</h3>
          <ul class="flex items-center gap-2">
            <li><img :src="psFlag" alt="" /></li>
            <li><img :src="egyptFlag" alt="" /></li>
            <li><img :src="quaterFlag" alt="" /></li>
            <li><img :src="soaFlag" alt="" /></li>
            <li><img :src="jordenFlag" alt="" /></li>
            <li><img :src="chinaFlag" alt="" /></li>
          </ul>
        </div>
      </article>

      <article>
        <ul class="flex justify-between flex-wrap gap-4 items-center">
          <li class="flex items-center gap-2">
            <img :src="logo" class="w-8" />
            <p class="text-lg font-semibold">ارياف</p>
          </li>

          <li class="w-fit">
            <button class="flex items-center gap-3 border border-white rounded-full px-4 py-2">
              <Globe /> English (EN)
            </button>
          </li>
        </ul>
      </article>
    </section>
  </footer>
</template>
