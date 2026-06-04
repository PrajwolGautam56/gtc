import { SITE } from '../data/site'
import ContactForm from '../components/shared/ContactForm'
import FadeIn from '../components/shared/FadeIn'

export default function Contact() {
  return (
    <>
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="font-heading font-bold text-4xl md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-white/70">
              Request a quote or ask about any of our testing services.
            </p>
          </FadeIn>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <h2 className="font-heading font-bold text-2xl text-navy mb-6">
                Get in touch
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <span className="font-semibold text-navy block">Phone</span>
                  {SITE.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p}`}
                      className="block hover:text-primary"
                    >
                      {p}
                    </a>
                  ))}
                </li>
                <li>
                  <span className="font-semibold text-navy block">Email</span>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="hover:text-primary"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-navy block">Location</span>
                  {SITE.location}
                </li>
                <li>
                  <span className="font-semibold text-navy block">Facebook</span>
                  <a
                    href={SITE.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    Geo Testing Lab on Facebook
                  </a>
                </li>
              </ul>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="bg-navy rounded-2xl p-6 md:p-8">
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
