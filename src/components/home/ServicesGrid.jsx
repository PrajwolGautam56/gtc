import { services } from '../../data/services'
import ServiceCard from '../shared/ServiceCard'
import FadeIn from '../shared/FadeIn'

export default function ServicesGrid() {
  return (
    <section id="services" className="py-16 md:py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4">
        <FadeIn className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            What We Offer
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600">
            Ten specialized services covering laboratory testing, field
            investigation, equipment supply, and engineering consulting.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
