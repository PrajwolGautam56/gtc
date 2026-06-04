import { Link } from 'react-router-dom'
import { ENTITIES } from '../../data/site'
import { useImages } from '../../hooks/useImages'
import SmartImage from '../shared/SmartImage'
import FadeIn from '../shared/FadeIn'
import FacebookReel from '../shared/FacebookReel'

export default function AboutSection() {
  const { images } = useImages('about')
  const img1 = images[0]
  const img2 = images[1]

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <FadeIn className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-scroll aspect-[3/4] mt-8">
                <SmartImage
                  src={img1}
                  alt="GTC laboratory"
                  folderLabel="about"
                  className="w-full h-full min-h-[200px]"
                />
              </div>
              <div className="rounded-xl overflow-scroll aspect-[3/4]">
                <SmartImage
                  src={img2}
                  alt="Construction testing"
                  folderLabel="about"
                  className="w-full h-full min-h-[200px]"
                />
              </div>
            </div>
            <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-md shadow">
              GTC Nepal
            </span>
          </FadeIn>

          <FadeIn delay={100}>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
              About Us
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-6">
              Geo Testing & Construction Lab
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                GTC Nepal (Geo Testing & Construction Lab) is a leading
                engineering testing facility based in Butwal, serving contractors,
                developers, and government projects across Nepal.
              </p>
              <p>
                We work alongside Sigma Trades & Suppliers and Cascade Research
                & Engineering to deliver end-to-end testing, supply, and
                consulting services for construction projects across Nepal.
              </p>
              <p>
                Our laboratory follows national and international standards
                (NS/ASTM) to ensure every test report supports confident
                decision-making on site.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {ENTITIES.map((entity) => (
                <div
                  key={entity.name}
                  className="border border-gray-100 rounded-lg p-4 bg-off-white"
                >
                  <h3 className="font-heading font-bold text-navy text-sm mb-2">
                    {entity.name}
                  </h3>
                  <p className="text-xs text-gray-600">
                    <a href={`tel:${entity.phone}`} className="hover:text-primary">
                      {entity.phone}
                    </a>
                  </p>
                  <p className="text-xs text-gray-600 truncate">
                    <a
                      href={`mailto:${entity.email}`}
                      className="hover:text-primary"
                    >
                      {entity.email}
                    </a>
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex mt-8 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </FadeIn>
        </div>

        <FadeIn className="mt-16 pt-16 border-t border-gray-100">
          <FacebookReel title="GTC Nepal on Facebook" />
        </FadeIn>
      </div>
    </section>
  )
}
