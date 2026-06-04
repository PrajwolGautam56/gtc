import { SITE } from '../../data/site'

export default function TopBar() {
  return (
  <>
    <div className="bg-navy text-white text-xs py-2 md:hidden px-4 text-center">
      <a href={`tel:${SITE.phones[1]}`} className="hover:text-gold">
        {SITE.phones[1]}
      </a>
      <span className="mx-2 text-white/40">·</span>
      <span className="italic text-gold">{SITE.tagline}</span>
    </div>
    <div className="bg-navy text-white text-sm py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-4 text-white/90">
          <a href={`tel:${SITE.phones[0]}`} className="hover:text-gold transition-colors">
            {SITE.phones[0]}
          </a>
          <span className="text-white/40">|</span>
          <a href={`tel:${SITE.phones[1]}`} className="hover:text-gold transition-colors">
            {SITE.phones[1]}
          </a>
          <span className="text-white/40">|</span>
          <a
            href={`mailto:${SITE.email}`}
            className="hover:text-gold transition-colors"
          >
            {SITE.email}
          </a>
        </div>
        <p className="italic text-gold font-medium">{SITE.tagline}</p>
      </div>
    </div>
  </>
  )
}
