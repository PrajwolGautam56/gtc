export default function ServiceProjectCards({ title, items }) {
  if (!items?.length) return null

  return (
    <section className="mb-12">
      <h2 className="font-heading font-bold text-2xl text-navy mb-6">{title}</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-card transition-shadow"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-primary mb-3" aria-hidden />
            <p className="font-medium text-navy leading-snug">{item}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
