import Navbar from './components/Navbar'
import { useCinematicScroll } from './hooks/useCinematicScroll'
import EventDetailsSection from './sections/EventDetailsSection'
import FooterSection from './sections/FooterSection'
import GallerySection from './sections/GallerySection'
import IntroSection from './sections/IntroSection'
import RSVPSection from './sections/RSVPSection'
import TitleSection from './sections/TitleSection'

function App() {
  const activeSlide = useCinematicScroll()
  const slideLabels = ['Invitation', 'Wedding Title', 'Ceremony', 'Our Story', 'RSVP', 'Closing']

  return (
    <div className="relative overflow-x-hidden bg-ivory text-ink">
      <Navbar
        currentSlide={activeSlide}
        totalSlides={slideLabels.length}
        slideLabel={slideLabels[activeSlide]}
      />

      <main className="relative">
        <IntroSection />
        <TitleSection />
        <EventDetailsSection />
        <GallerySection />
        <RSVPSection />
        <FooterSection />
      </main>
    </div>
  )
}

export default App
