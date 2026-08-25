export const useScrollAnimation = (selector = '.animate-on-scroll', thresholdValue = 0.4) => {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('show', entry.isIntersecting)
        })
      },
      {
        threshold: thresholdValue,
      },
    )

    document.querySelectorAll(selector).forEach((element) => {
      observer?.observe(element)
    })
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })
}
