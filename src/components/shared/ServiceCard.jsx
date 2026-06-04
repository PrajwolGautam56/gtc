import { Link } from 'react-router-dom'
import { useImages } from '../../hooks/useImages'
import SmartImage from './SmartImage'

export default function ServiceCard({ service }) {
  const { firstImage, loading } = useImages(service.folder)

  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        {loading ? (
          <div className="w-full h-full bg-gray-200 animate-pulse" />
        ) : (
          <SmartImage
            src={firstImage}
            alt={service.title}
            folderLabel={service.folder}
            className="w-full h-full"
            imgClassName="transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div className="p-5">
        <h3 className="font-heading font-bold text-lg text-navy leading-snug mb-2">
          {service.shortTitle || service.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {service.desc}
        </p>
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center text-primary font-semibold text-sm hover:underline"
        >
          Learn More
          <span className="ml-1" aria-hidden>
            →
          </span>
        </Link>
      </div>
    </article>
  )
}
