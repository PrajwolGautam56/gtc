import { Link } from 'react-router-dom'
import { ENTITIES, BRAND_STRIP, SITE } from '../data/site'
import { useImages } from '../hooks/useImages'
import SmartImage from '../components/shared/SmartImage'
import FadeIn from '../components/shared/FadeIn'
import FacebookReel from '../components/shared/FacebookReel'

export default function About() {
  const { images } = useImages('about')

  return (
    <>
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="font-heading font-bold text-4xl md:text-5xl">
              About GTC Nepal
            </h1>
            <p className="mt-4 text-gold italic text-lg">{SITE.tagline}</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="grid grid-cols-2 gap-4">
                {images.slice(0, 2).map((src, i) => (
                  <div
                    key={src}
                    className={`rounded-2xl overflow-hidden aspect-[4/5] ${
                      i === 0 ? 'mt-6' : ''
                    }`}
                  >
                    <img
                      src={src}
                      alt={i === 0 ? 'GTC Nepal facility' : 'GTC Nepal laboratory'}
                      className="w-full h-full object-cover min-h-[200px]"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="font-heading font-bold text-3xl text-navy mb-6">
                Geo Testing & Construction Lab
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Established in Butwal, Rupandehi, GTC Nepal provides
                  accredited engineering laboratory services for soil,
                  aggregate, cement, concrete, bitumen, and steel testing.
                </p>
                <p>
                  GTC Nepal works closely with Sigma Trades & Suppliers and
                  Cascade Research & Engineering to offer integrated testing,
                  supply, and consulting for contractors and developers
                  nationwide.
                </p>
                <p>
                  Our mission is simple: support quality construction through
                  reliable data, expert interpretation, and responsive service
                  — from project feasibility through completion.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="mt-16 pt-16 border-t border-gray-100">
            <FacebookReel title="Video — GTC Nepal" />
          </FadeIn>

          <FadeIn className="mt-16">
            <h2 className="font-heading font-bold text-2xl text-navy text-center mb-8">
              Our Entities
            </h2>
            <ul className="flex flex-wrap justify-center gap-4 mb-10">
              {BRAND_STRIP.map((name) => (
                <li
                  key={name}
                  className="px-4 py-2 bg-off-white rounded-full text-sm font-semibold text-navy"
                >
                  {name}
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ENTITIES.map((entity) => (
                <div
                  key={entity.name}
                  className="border border-gray-100 rounded-xl p-6 shadow-sm"
                >
                  <h3 className="font-heading font-bold text-xl text-navy mb-3">
                    {entity.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">
                    Phone:{' '}
                    <a
                      href={`tel:${entity.phone}`}
                      className="text-primary hover:underline"
                    >
                      {entity.phone}
                    </a>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Email:{' '}
                    <a
                      href={`mailto:${entity.email}`}
                      className="text-primary hover:underline"
                    >
                      {entity.email}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
