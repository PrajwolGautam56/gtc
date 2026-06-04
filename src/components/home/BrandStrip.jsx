import { BRAND_STRIP } from '../../data/site'

export default function BrandStrip() {
  return (
    <section className="bg-off-white py-8 border-y border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:gap-0 md:divide-x md:divide-gray-300">
          {BRAND_STRIP.map((name, i) => (
            <li
              key={name}
              className={`text-center font-heading font-semibold text-navy text-sm md:text-base px-0 md:px-8 ${
                i > 0 ? 'md:border-l md:border-gray-300' : ''
              }`}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
