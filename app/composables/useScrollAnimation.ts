export const useScrollAnimation = (selector = '.animate-on-scroll') => {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('show', entry.isIntersecting)
        })
      },
      {
        threshold: 0.4,
      }
    )

    document.querySelectorAll(selector).forEach((element) => {
      observer?.observe(element)
    })
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })
}
