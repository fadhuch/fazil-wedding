import Navbar from './components/Navbar'
import { useCinematicScroll } from './hooks/useCinematicScroll'
import EventDetailsSection from './sections/EventDetailsSection'
import FooterSection from './sections/FooterSection'
import GallerySection from './sections/GallerySection'
import IntroSection from './sections/IntroSection'
import TitleSection from './sections/TitleSection'

function App() {
  const activeSlide = useCinematicScroll()
  const slideLabels = ['Intro', 'Title', 'Details', 'Gallery', 'Farewell']

  return (
    <div className="relative overflow-x-hidden bg-ivory text-ink">
      <Navbar
        currentSlide={activeSlide}
        totalSlides={slideLabels.length}
        slideLabel={slideLabels[activeSlide]}
      />

      <main className="horizontal-shell relative h-screen overflow-hidden">
        <div className="horizontal-track flex h-full w-max">
          <div className="slide-panel h-full w-screen shrink-0">
            <IntroSection />
          </div>
          <div className="slide-panel h-full w-screen shrink-0">
            <TitleSection />
          </div>
          <div className="slide-panel h-full w-screen shrink-0">
            <EventDetailsSection />
          </div>
          <div className="slide-panel h-full w-screen shrink-0">
            <GallerySection />
          </div>
          <div className="slide-panel h-full w-screen shrink-0">
            <FooterSection />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
