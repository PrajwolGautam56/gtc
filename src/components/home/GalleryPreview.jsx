import { Link } from 'react-router-dom'
import GalleryGrid from '../shared/GalleryGrid'
import FadeIn from '../shared/FadeIn'

export default function GalleryPreview() {
  return (
    <section className="py-16 md:py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4">
        <FadeIn className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Our Work
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy">
            Project Gallery
          </h2>
        </FadeIn>
        <GalleryGrid folderPath="gallery" columns={4} limit={8} />
        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="inline-flex px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy/90 transition-colors"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
