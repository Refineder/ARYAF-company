interface IDocument {
  id: string
  name: string
  hint: string
  fileName: string | null
}

const DOCUMENTS = ref<IDocument[]>([
  {
    id: 'nationalId',
    name: 'الهوية الوطنية / الإقامة',
    hint: 'صورة واضحة من الهوية أو الإقامة',
    fileName: null,
  },
  {
    id: 'commercialRegister',
    name: 'السجل التجاري',
    hint: 'نسخة من السجل التجاري النشط',
    fileName: null,
  },
  {
    id: 'vatCertificate',
    name: 'شهادة ضريبة القيمة المضافة',
    hint: 'شهادة التسجيل في ضريبة القيمة المضافة',
    fileName: null,
  },
])

export { DOCUMENTS, type IDocument }
