export default function ServiceTextSections({ sections }) {
  if (!sections?.length) return null

  return (
    <div className="space-y-10 mb-12">
      {sections.map((section) => (
        <section key={section.title}>
          <h2 className="font-heading font-bold text-xl text-navy mb-3">
            {section.title}
          </h2>
          <p className="text-gray-600 leading-relaxed">{section.description}</p>
        </section>
      ))}
    </div>
  )
}
