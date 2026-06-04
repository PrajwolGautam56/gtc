import { Link, Navigate, useParams } from 'react-router-dom'
import { getServiceBySlug, resolveServiceSlug } from '../data/services'
import { useImages } from '../hooks/useImages'
import SmartImage from '../components/shared/SmartImage'
import FadeIn from '../components/shared/FadeIn'
import ServiceContent from '../components/services/ServiceContent'

export default function ServiceDetail() {
  const { slug } = useParams()
  const canonicalSlug = resolveServiceSlug(slug)
  const service = getServiceBySlug(canonicalSlug)
  const { images, firstImage } = useImages(service?.folder || '')

  if (slug !== canonicalSlug) {
    return <Navigate to={`/services/${canonicalSlug}`} replace />
  }

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="font-heading text-3xl text-navy mb-4">Service not found</h1>
        <Link to="/" className="text-primary font-semibold hover:underline">
          Back to Home
        </Link>
      </div>
    )
  }

  const cardTitle =
    service.title.length > 60
      ? service.title.split('—')[0].trim()
      : service.title

  return (
    <>
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <Link
              to="/#services"
              className="text-gold text-sm hover:underline mb-4 inline-block"
            >
              ← All Services
            </Link>
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl max-w-4xl leading-tight">
              {service.title}
            </h1>
            {service.desc && (
              <p className="mt-4 text-white/75 max-w-2xl text-lg leading-relaxed">
                {service.desc}
              </p>
            )}
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <FadeIn className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl overflow-scroll aspect-video mb-4">
                <SmartImage
                  src={firstImage}
                  alt={cardTitle}
                  folderLabel={service.folder}
                  className="w-full h-full min-h-[220px]"
                />
              </div>
              {images.length > 1 && (
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {images.slice(1, 4).map((src) => (
                    <div key={src} className="rounded-lg overflow-scroll aspect-square">
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}
              <Link
                to="/contact"
                className="inline-flex justify-center w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Request Quote
              </Link>
            </FadeIn>

            <FadeIn delay={100} className="lg:col-span-8">
              <ServiceContent content={service.content} />
              {!service.content && (
                <p className="text-gray-600 leading-relaxed">
                  GTC Nepal provides professional, standards-compliant delivery for
                  this service from our Butwal facility. Contact us for sample
                  submission guidelines, turnaround times, and project-specific
                  quotations.
                </p>
              )}
            </FadeIn>
          </div>

          {images.length > 0 && (
            <FadeIn className="mt-16 pt-16 border-t border-gray-100">
              <h2 className="font-heading font-bold text-2xl text-navy mb-6">
                Gallery
              </h2>
              <div className="columns-2 md:columns-3 gap-4 space-y-4">
                {images.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${cardTitle} ${i + 1}`}
                    className="w-full rounded-lg break-inside-avoid"
                    loading="lazy"
                  />
                ))}
              </div>
            </FadeIn>
          )}
        </div>
      </section>
    </>
  )
}
