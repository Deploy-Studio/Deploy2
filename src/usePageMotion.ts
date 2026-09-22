import { useEffect } from 'react'

export default function usePageMotion() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const sections = Array.from(document.querySelectorAll('section')).slice(1)
    const cards = document.querySelectorAll('article')
    const bookingLinks = document.querySelectorAll('a[href^="https://cal.com/"]')

    cards.forEach((card) => card.classList.add('motion-card'))
    bookingLinks.forEach((link) => link.classList.add('motion-cta'))

    if (reduceMotion || !('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('motion-section-visible'))
      return
    }

    sections.forEach((section) => section.classList.add('motion-section'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('motion-section-visible')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])
}
