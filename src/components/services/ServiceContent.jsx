import ServiceChecklist from './ServiceChecklist'
import ServiceProjectCards from './ServiceProjectCards'
import ServiceEquipmentGrid from './ServiceEquipmentGrid'
import ServiceFeatureCards from './ServiceFeatureCards'
import ServiceTextSections from './ServiceTextSections'
import ServiceVisionMission from './ServiceVisionMission'

export default function ServiceContent({ content }) {
  if (!content) return null

  return (
    <div className="mt-12 lg:mt-0">
      {content.intro && (
        <p className="text-gray-600 text-lg leading-relaxed mb-8">{content.intro}</p>
      )}

      {content.description && (
        <p className="text-gray-600 leading-relaxed mb-8">{content.description}</p>
      )}

      {content.scope && (
        <section className="mb-12">
          <h2 className="font-heading font-bold text-2xl text-navy mb-4">Scope</h2>
          <p className="text-gray-600 leading-relaxed">{content.scope}</p>
        </section>
      )}

      {content.visionMission && (
        <ServiceVisionMission {...content.visionMission} />
      )}

      {content.textSections && (
        <ServiceTextSections sections={content.textSections} />
      )}

      {content.featureCards && (
        <ServiceFeatureCards
          title={content.featureCards.title}
          items={content.featureCards.items}
        />
      )}

      {content.checklists?.map((block) => (
        <ServiceChecklist key={block.title} title={block.title} items={block.items} />
      ))}

      {content.projects?.map((block) => (
        <ServiceProjectCards key={block.title} title={block.title} items={block.items} />
      ))}

      {content.equipment && (
        <ServiceEquipmentGrid
          title={content.equipment.title}
          items={content.equipment.items}
        />
      )}
    </div>
  )
}
