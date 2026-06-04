import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from '../shared/Logo'
import { services } from '../../data/services'
import { SITE } from '../../data/site'

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors hover:text-primary ${
    isActive ? 'text-primary' : 'text-navy'
  }`

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-nav' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-18 py-3">
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <Logo className="h-11 w-11 md:h-12 md:w-12 object-contain" />
            <span className="font-heading font-bold text-xl text-navy hidden sm:inline">
              GTC Nepal
            </span>
          </Link>

          <ul className="hidden lg:flex items-center justify-center gap-8 flex-1">
            <li>
              <NavLink to="/" end className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="text-sm font-medium text-navy hover:text-primary flex items-center gap-1"
                aria-expanded={servicesOpen}
              >
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72">
                  <ul className="bg-white rounded-lg shadow-card border border-gray-100 py-2 max-h-80 overflow-y-auto">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/services/${s.slug}`}
                          className="block px-4 py-2 text-sm text-navy hover:bg-off-white hover:text-primary"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={navLinkClass}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/careers" className={navLinkClass}>
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href={SITE.brochure}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold border-2 border-navy text-navy rounded-lg hover:bg-navy hover:text-white transition-colors"
            >
              Brochure PDF
            </a>
            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-semibold bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Request Quote
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 pb-6">
            <ul className="flex flex-col gap-1">
              <li>
                <NavLink to="/" end className={navLinkClass + ' block py-2 px-2'}>
                  Home
                </NavLink>
              </li>
              <li className="px-2 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Services
              </li>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="block py-2 px-4 text-sm text-navy hover:text-primary"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <NavLink to="/about" className={navLinkClass + ' block py-2 px-2'}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className={navLinkClass + ' block py-2 px-2'}>
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/careers" className={navLinkClass + ' block py-2 px-2'}>
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={navLinkClass + ' block py-2 px-2'}>
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="flex flex-col gap-2 mt-4 px-2">
              <a
                href={SITE.brochure}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-4 py-2 text-sm font-semibold border-2 border-navy text-navy rounded-lg"
              >
                Brochure PDF
              </a>
              <Link
                to="/contact"
                className="text-center px-4 py-2 text-sm font-semibold bg-primary text-white rounded-lg"
              >
                Request Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
