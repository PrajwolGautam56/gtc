import { Link } from 'react-router-dom'
import { SITE } from '../../data/site'
import ContactForm from '../shared/ContactForm'
import FadeIn from '../shared/FadeIn'

const cards = [
  {
    title: 'Phone',
    content: SITE.phones,
    href: (v) => `tel:${v}`,
    multi: true,
  },
  {
    title: 'Email',
    content: SITE.email,
    href: () => `mailto:${SITE.email}`,
  },
  {
    title: 'Location',
    content: SITE.location,
    href: null,
  },
  {
    title: 'Facebook',
    content: 'Geo Testing Lab',
    href: () => SITE.facebook,
    external: true,
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4">
        <FadeIn className="text-center mb-12">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2 italic">
            Get In Touch
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            Contact Us
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white/5 border border-white/10 rounded-xl p-5"
                >
                  <h3 className="font-heading font-bold text-gold mb-2">
                    {card.title}
                  </h3>
                  {card.multi ? (
                    <ul className="space-y-1 text-sm text-white/80">
                      {card.content.map((p) => (
                        <li key={p}>
                          <a
                            href={card.href(p)}
                            className="hover:text-gold transition-colors"
                          >
                            {p}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : card.href ? (
                    <a
                      href={card.href(card.content)}
                      target={card.external ? '_blank' : undefined}
                      rel={card.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-white/80 hover:text-gold transition-colors"
                    >
                      {card.content}
                    </a>
                  ) : (
                    <p className="text-sm text-white/80">{card.content}</p>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <ContactForm />
          </FadeIn>
        </div>
        <p className="text-center mt-8 text-white/50 text-sm">
          Prefer a dedicated page?{' '}
          <Link to="/contact" className="text-gold hover:underline">
            Visit our contact page
          </Link>
        </p>
      </div>
    </section>
  )
}
