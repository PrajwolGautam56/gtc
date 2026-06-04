export default function ServiceFeatureCards({ title, items }) {
  if (!items?.length) return null

  return (
    <section className="mb-12">
      {title && (
        <h2 className="font-heading font-bold text-2xl text-navy mb-6">{title}</h2>
      )}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <li
            key={item}
            className="rounded-xl bg-navy text-white p-6 shadow-card"
          >
            <span className="text-gold font-heading font-bold text-3xl mb-3 block">
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="font-semibold leading-snug">{item}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
