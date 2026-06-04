export default function ServiceVisionMission({ vision, mission, objectives }) {
  return (
    <div className="space-y-10 mb-12">
      {vision && (
        <section>
          <h2 className="font-heading font-bold text-2xl text-navy mb-4">Our Vision</h2>
          <blockquote className="border-l-4 border-gold bg-off-white rounded-r-xl px-6 py-5 text-gray-700 italic leading-relaxed">
            {vision}
          </blockquote>
        </section>
      )}
      {mission && (
        <section>
          <h2 className="font-heading font-bold text-2xl text-navy mb-4">Our Mission</h2>
          <blockquote className="border-l-4 border-primary bg-off-white rounded-r-xl px-6 py-5 text-gray-700 italic leading-relaxed">
            {mission}
          </blockquote>
        </section>
      )}
      {objectives?.length > 0 && (
        <section>
          <h2 className="font-heading font-bold text-2xl text-navy mb-4">Objectives</h2>
          <ul className="space-y-3">
            {objectives.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-gray-600 leading-relaxed"
              >
                <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
