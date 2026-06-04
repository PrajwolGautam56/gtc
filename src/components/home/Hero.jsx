import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useImagesWithFallback } from '../../hooks/useImages'
import SmartImage from '../shared/SmartImage'
import FadeIn from '../shared/FadeIn'

function useCountUp(target, duration = 1500) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const num = parseInt(String(target).replace(/\D/g, ''), 10) || 0
    if (num === 0) {
      setValue(target)
      return
    }
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * num))
      if (progress < 1) requestAnimationFrame(tick)
      else setValue(num)
    }
    requestAnimationFrame(tick)
  }, [target, duration])

  const suffix = String(target).replace(/[0-9]/g, '')
  return `${value}${suffix}`
}

const stats = [
  { value: '10+', label: 'Services' },
  { value: '3+', label: 'Entities' },
  { value: '100%', label: 'Quality' },
]

function StatItem({ value, label }) {
  const display = useCountUp(value)
  return (
    <div className="text-center">
      <p className="font-heading font-bold text-2xl md:text-3xl text-gold">{display}</p>
      <p className="text-white/70 text-sm mt-1">{label}</p>
    </div>
  )
}

export default function Hero() {
  const { firstImage } = useImagesWithFallback('hero', 'gallery')

  return (
    <section className="relative bg-navy text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-60"
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <p className="font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-gold/90 mb-5">
              Geo Testing &amp; Construction Lab
            </p>
            <h1 className="hero-headline max-w-xl">
              <span className="block">Engineering Testing</span>
              <span className="hero-headline-accent mt-1 sm:mt-2">
                &amp; Quality Assurance
              </span>
            </h1>
            <p className="mt-6 font-body text-base md:text-lg text-white/75 max-w-lg leading-relaxed">
              GTC Nepal delivers accredited geotechnical and construction
              materials testing from our ISO-grade laboratory in Butwal —
              supporting safer, stronger infrastructure across Nepal.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex justify-center px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors"
              >
                Explore Services
              </a>
              <Link
                to="/contact"
                className="inline-flex justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {stats.map((s) => (
                <StatItem key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={150} className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-card">
              <SmartImage
                src={firstImage}
                alt="GTC Nepal laboratory"
                folderLabel="hero"
                className="w-full h-full min-h-[280px]"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 md:bottom-6 md:-left-6 bg-white text-navy rounded-xl shadow-card px-5 py-4 max-w-[220px]">
              <p className="text-primary font-heading font-bold text-lg">
                ISO-Grade
              </p>
              <p className="text-sm text-gray-600">Laboratory</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
