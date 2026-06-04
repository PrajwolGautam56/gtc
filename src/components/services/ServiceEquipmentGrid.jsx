export default function ServiceEquipmentGrid({ title, items }) {
  if (!items?.length) return null

  return (
    <section className="mb-12">
      {title && (
        <h2 className="font-heading font-bold text-2xl text-navy mb-6">{title}</h2>
      )}
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-xl border border-gray-100 bg-off-white p-4 text-center hover:border-primary/30 transition-colors"
          >
            <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-navy/5 flex items-center justify-center text-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-sm font-semibold text-navy leading-snug">{item}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
