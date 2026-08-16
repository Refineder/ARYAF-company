<script setup lang="ts">
import { computed, ref } from 'vue'
import Icons from '~/components/atoms/Button/ARYAFIcon/Icons.vue'
import Button from '~/components/atoms/Button/Button.vue'
import { DOCUMENTS, type IDocument } from '~/constants/documents'

const emit = defineEmits<{ next: [] }>()

const uploadedCount = computed(() => DOCUMENTS.value.filter((d) => d.fileName).length)

const totalCount = DOCUMENTS.value.length

const progressPercent = computed(() => Math.round((uploadedCount.value / totalCount) * 100))

const allUploaded = computed(() => uploadedCount.value === totalCount)

const fileInputs = ref<Record<string, HTMLInputElement | null>>({})

const setFileInputRef = (id: string) => (el: unknown) => {
  fileInputs.value[id] = el as HTMLInputElement | null
}

const openFilePicker = (doc: IDocument) => {
  fileInputs.value[doc.id]?.click()
}

const onFileChange = (doc: IDocument, event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (file) {
    doc.fileName = file.name
  }
}

const onSubmit = () => {
  if (allUploaded.value) emit('next')
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <h2 class="clamp-text-md text-center">التحقق <span class="gradient-text">التجاري</span></h2>

    <p class="text-gray-500 text-center text-lg max-w-lg self-center">
      قم برفع المستندات المطلوبة لإتمام التحقق التجاري من متجرك، تأكد من وضوح المستندات.
    </p>

    <div class="flex flex-col gap-2">
      <div class="flex items-center justify-between text-sm">
        <span class="text-gray-500">اكتمال المستندات</span>
        <span class="font-semibold">{{ uploadedCount }} / {{ totalCount }}</span>
      </div>
      <div class="h-2 rounded-full bg-muted overflow-hidden">
        <div
          class="h-full gradient-bg transition-all duration-500"
          :style="{ width: progressPercent + '%' }"
        />
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <article
        v-for="doc in DOCUMENTS"
        :key="doc.id"
        class="flex flex-col items-center gap-4 border rounded-lg p-4 sm:flex-row"
        :class="doc.fileName ? 'border-green-500/60' : 'border-zinc-200'"
      >
        <div
          class="w-12 h-12 shrink-0 rounded-full grid place-items-center"
          :class="doc.fileName ? 'gradient-bg text-white' : 'bg-muted text-gray-400'"
        >
          <Icons name="upload" />
        </div>

        <div class="grow min-w-0">
          <h3 class="font-semibold">{{ doc.name }}</h3>
          <p v-if="doc.fileName" class="text-xs text-green-600" dir="ltr">
            {{ doc.fileName }}
          </p>
          <p v-else class="text-sm text-gray-400">{{ doc.hint }}</p>
        </div>

        <input
          :ref="setFileInputRef(doc.id)"
          type="file"
          accept=".png,.jpg,.jpeg,.pdf"
          class="hidden"
          @change="onFileChange(doc, $event)"
        />

        <Button
          class="min-w-fit"
          :variant="doc.fileName ? 'default' : 'outline'"
          @click="openFilePicker(doc)"
        >
          {{ doc.fileName ? 'استبدال الملف' : 'رفع الملف' }}
        </Button>
      </article>
    </div>

    <Button
      size="lg"
      :variant="allUploaded ? 'default' : 'secondary'"
      type="button"
      :class="allUploaded ? '' : 'opacity-60'"
      @click="onSubmit"
    >
      {{ allUploaded ? 'الانتقال إلى الخطوة التالية' : 'قم برفع جميع المستندات للمتابعة' }}
    </Button>
  </div>
</template>
