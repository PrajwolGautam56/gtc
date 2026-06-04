import { WHY_US_FEATURES } from '../../data/site'
import { useImagesWithFallback } from '../../hooks/useImages'
import SmartImage from '../shared/SmartImage'
import FadeIn from '../shared/FadeIn'

const icons = [
  (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  ),
  (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  ),
  (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    />
  ),
  (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  ),
]

export default function WhyUs() {
  const { firstImage } = useImagesWithFallback('why-us', 'about')

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
              Why Choose Us
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-8">
              Trusted by Builders Across Nepal
            </h2>
            <ul className="space-y-6">
              {WHY_US_FEATURES.map((feature, i) => (
                <li key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {icons[i]}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={150} className="relative">
            <div className="rounded-2xl overflow-scroll aspect-[4/5] max-h-[560px]">
              <SmartImage
                src={firstImage}
                alt="Engineering team at work"
                folderLabel="why-us"
                className="w-full h-full min-h-[320px]"
              />
            </div>
            <span className="absolute bottom-6 right-6 bg-gold text-navy font-heading font-bold text-lg px-4 py-2 rounded-lg shadow-lg">
              NES
            </span>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
