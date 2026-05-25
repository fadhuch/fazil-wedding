import Navbar from './components/Navbar'
import { useCinematicScroll } from './hooks/useCinematicScroll'
import EventDetailsSection from './sections/EventDetailsSection'
import FooterSection from './sections/FooterSection'
import GallerySection from './sections/GallerySection'
import IntroSection from './sections/IntroSection'
import LoveStorySection from './sections/LoveStorySection'
import RSVPSection from './sections/RSVPSection'
import TitleSection from './sections/TitleSection'

function App() {
  useCinematicScroll()

  return (
    <div className="relative overflow-x-hidden bg-ivory text-ink">
      <Navbar />

      <main className="snap-y snap-mandatory">
        <IntroSection />
        <TitleSection />
        <EventDetailsSection />
        <LoveStorySection />
        <GallerySection />
        {/* <RSVPSection /> */}
        <FooterSection />
      </main>
    </div>
  )
}

export default App
