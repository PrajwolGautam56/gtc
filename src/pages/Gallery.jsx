import GalleryGrid from '../components/shared/GalleryGrid'
import FadeIn from '../components/shared/FadeIn'

export default function Gallery() {
  return (
    <>
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="font-heading font-bold text-4xl md:text-5xl">
              Gallery
            </h1>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">
              Photos from our laboratory, field investigations, and project
              sites across Nepal.
            </p>
          </FadeIn>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <GalleryGrid folderPath="gallery" columns={4} />
        </div>
      </section>
    </>
  )
}
