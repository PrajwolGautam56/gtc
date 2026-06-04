export default function ServiceChecklist({ title, items }) {
  if (!items?.length) return null

  return (
    <section className="mb-12">
      <h2 className="font-heading font-bold text-2xl text-navy mb-6">{title}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-lg border border-gray-100 bg-off-white px-4 py-3 text-sm text-gray-700"
          >
            <span
              className="mt-0.5 flex-shrink-0 w-5 h-5 rounded bg-primary/10 text-primary flex items-center justify-center text-xs font-bold"
              aria-hidden
            >
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
