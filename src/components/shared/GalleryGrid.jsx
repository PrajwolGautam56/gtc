import { useState } from 'react'
import { useImages } from '../../hooks/useImages'
import ImagePlaceholder from './ImagePlaceholder'
import Lightbox from './Lightbox'

export default function GalleryGrid({
  folderPath = 'gallery',
  columns = 4,
  limit,
  className = '',
}) {
  const { images, loading } = useImages(folderPath)
  const [lightbox, setLightbox] = useState(null)

  const display = limit ? images.slice(0, limit) : images

  const colClass =
    columns === 4
      ? 'columns-1 sm:columns-2 lg:columns-4'
      : columns === 3
        ? 'columns-1 sm:columns-2 lg:columns-3'
        : 'columns-1 sm:columns-2'

  if (loading) {
    return (
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
        {[...Array(limit || 8)].map((_, i) => (
          <div key={i} className="aspect-square bg-gray-200 rounded-lg animate-pulse" />
        ))}
      </div>
    )
  }

  if (display.length === 0) {
    return (
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
        {[...Array(limit || 4)].map((_, i) => (
          <ImagePlaceholder
            key={i}
            label={folderPath}
            className="aspect-square rounded-lg"
          />
        ))}
      </div>
    )
  }

  return (
    <>
      <div className={`${colClass} gap-4 space-y-4 ${className}`}>
        {display.map((src, i) => (
          <button
            key={src}
            type="button"
            className="group relative block w-full break-inside-avoid overflow-scroll rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setLightbox({ src, alt: `Gallery image ${i + 1}` })}
          >
            <div className="overflow-scroll rounded-lg">
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                loading="lazy"
              />
            </div>
          </button>
        ))}
      </div>
      <Lightbox
        src={lightbox?.src}
        alt={lightbox?.alt}
        onClose={() => setLightbox(null)}
      />
    </>
  )
}
