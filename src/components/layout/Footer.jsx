import { Link } from 'react-router-dom'
import Logo from '../shared/Logo'
import { services } from '../../data/services'
import { SITE } from '../../data/site'

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo className="h-14 w-14 object-contain" />
              <span className="font-heading font-bold text-xl">GTC Nepal</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Geo Testing & Construction Lab — engineering testing and quality
              assurance in Butwal, Nepal.
            </p>
            <p className="italic text-gold text-sm mb-4">{SITE.tagline}</p>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-gold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-sm text-white/70 hover:text-gold transition-colors line-clamp-2"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-gold transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href={SITE.brochure}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Brochure PDF
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              {SITE.phones.map((p) => (
                <li key={p}>
                  <a href={`tel:${p}`} className="hover:text-gold transition-colors">
                    {p}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              <li>{SITE.location}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-white/50 space-y-1">
          <p>© 2026 {SITE.company}. All rights reserved.</p>
          <p className="text-white/35 text-xs">
            Website by {SITE.webDeveloper}
          </p>
        </div>
      </div>
    </footer>
  )
}
