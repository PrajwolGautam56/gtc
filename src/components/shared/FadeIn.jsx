import { useEffect, useRef, useState } from 'react'

function isInViewport(el) {
  const rect = el.getBoundingClientRect()
  const viewHeight = window.innerHeight || document.documentElement.clientHeight
  return rect.top < viewHeight && rect.bottom > 0
}

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const show = () => setVisible(true)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      show()
      return
    }

    if (isInViewport(el)) {
      show()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()
          observer.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px 5% 0px' }
    )

    observer.observe(el)

    const fallback = window.setTimeout(show, 1200)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
