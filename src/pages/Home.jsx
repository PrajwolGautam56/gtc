import Hero from '../components/home/Hero'
import BrandStrip from '../components/home/BrandStrip'
import AboutSection from '../components/home/AboutSection'
import ServicesGrid from '../components/home/ServicesGrid'
import WhyUs from '../components/home/WhyUs'
import GalleryPreview from '../components/home/GalleryPreview'
import ContactSection from '../components/home/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStrip />
      <AboutSection />
      <ServicesGrid />
      <WhyUs />
      <GalleryPreview />
      <ContactSection />
    </>
  )
}
