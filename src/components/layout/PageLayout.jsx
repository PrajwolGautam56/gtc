import TopBar from './TopBar'
import Navbar from './Navbar'
import Footer from './Footer'

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
