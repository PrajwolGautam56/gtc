import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/shared/ScrollToTop'
import PageLayout from './components/layout/PageLayout'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import ServiceDetail from './pages/ServiceDetail'

export default function App() {
  return (
    <PageLayout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
      </Routes>
    </PageLayout>
  )
}
