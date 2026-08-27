<script setup lang="ts">
import { computed } from 'vue'

export type TTheme = 'modern' | 'elegant' | 'bold' | 'minimal'

interface IProps {
  theme: TTheme
  storeName?: string
  scale?: number
}

const props = withDefaults(defineProps<IProps>(), {
  storeName: 'متجرك',
  scale: 1,
})

const themeStyles = {
  modern: {
    header: 'oklch(from white l c h)',
    background: 'oklch(from var(--primary) l c h / .3)',

    card: 'rounded-full bg-primary',
    muted: 'bg-primary/50',
    border: 'oklch(from var(--primary) 40% c h / .3)',

    accent: 'bg-blue-600',
    accentText: 'bg-primary/70',
  },
  elegant: {
    header: 'hsl(24, 10%, 10%)',
    background: 'oklch(from hsl(42, 60%, 90%) l c h)',
    card: 'rounded-full bg-white',
    muted: 'bg-white/50',
    border: 'oklch(from hsl(42, 60%, 90%) 80% c h)',

    accent: 'bg-amber-600',
    accentText: 'bg-white/70',
  },
  bold: {
    header: 'oklch(from hsl(222, 47%, 11%) l c h)',
    background: 'oklch(from hsl(217, 33%, 17%) l c h)',
    card: 'rounded-full bg-red-800',
    muted: 'bg-red-800/50',
    border: 'oklch(from hsl(217, 33%, 17%) 40% c h )',
    accent: 'bg-red-500',
    accentText: 'bg-red-800/70',
  },
  minimal: {
    header: 'white',
    background: 'oklch(from white 95% c h)',
    card: 'rounded-full bg-primary rounded-4xl',
    muted: 'bg-primary/50',
    border: 'oklch(from white 90% c h)',
    accent: 'bg-gray-900',
    accentText: 'bg-primary/70',
  },
}

const s = computed(() => themeStyles[props.theme])
</script>

<template>
  <main class="relative">
    <section
      class="rounded-2xl overflow-hidden border-2 border-secondary"
      style="corner-shape: squircle"
    >
      <article class="overflow-hidden">
        <div class="flex flex-col">
          <div
            :style="{ backgroundColor: s.header, borderBottomColor: s.border }"
            class="flex flex-row-reverse items-center justify-between gap-2 p-2 border-b"
          >
            <div class="flex items-center gap-1">
              <span class="w-5 h-2 rounded-full bg-secondary-foreground/40 inline-flex"></span>
              <span class="w-10 h-2 rounded-full bg-secondary-foreground/40 inline-flex"></span>
              <span class="w-7 h-2 rounded-full bg-secondary-foreground/40 inline-flex"></span>
            </div>

            <div><span :class="['w-10 h-2 rounded-full inline-flex', s.accentText]"></span></div>
          </div>

          <div class="flex flex-col justify-between">
            <article
              :style="{ backgroundColor: s.background }"
              class="flex flex-row-reverse justify-between gap-4 p-2"
            >
              <div :class="['grow shrink-0 flex items-center justify-end']">
                <span :class="['w-25 h-15 inline-flex', s.card, s.muted]"></span>
              </div>

              <div class="flex flex-col gap-2 grow w-full basis-1/2">
                <span
                  class="w-full grow h-2 rounded-full bg-secondary-foreground/60 inline-flex"
                ></span>
                <span class="w-3/5 h-2 rounded-full bg-secondary-foreground/20 inline-flex"></span>
                <span :class="['w-25 h-10 rounded-full inline-flex', s.card]"></span>
              </div>
            </article>

            <article
              :style="{ backgroundColor: s.header, borderTopColor: s.border }"
              class="flex border-t items-center gap-3 p-2 pb-1"
            >
              <span
                class="w-full grow h-4 border border-secondary-foreground/10 rounded-full bg-accent/40 inline-flex"
              ></span>
              <span
                class="w-full grow h-4 border border-secondary-foreground/10 rounded-full bg-accent/40 inline-flex"
              ></span>
              <span
                class="w-full grow h-4 border border-secondary-foreground/10 rounded-full bg-accent/40 inline-flex"
              ></span>
            </article>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>
