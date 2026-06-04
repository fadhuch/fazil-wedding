import Navbar from './components/Navbar'
import CandleOverlay from './components/CandleOverlay'
import { useCinematicScroll } from './hooks/useCinematicScroll'
import { usePreloadImages } from './hooks/usePreloadImages'
import EventDetailsSection from './sections/EventDetailsSection'
import FooterSection from './sections/FooterSection'
import GallerySection from './sections/GallerySection'
import IntroSection from './sections/IntroSection'
import RSVPSection from './sections/RSVPSection'
import TitleSection from './sections/TitleSection'
import PropTypes from 'prop-types'
import bgImage from './assets/bg4.jpeg'
import image1 from './assets/image1.jpeg'
import image2 from './assets/image2.jpeg'
import image3 from './assets/image3.jpeg'
import image4 from './assets/image4.jpeg'

const invitationImages = [bgImage, image1, image2, image3, image4]

function App({ eventType }) {
  useCinematicScroll()
  usePreloadImages(invitationImages)

  return (
    <div className="relative overflow-x-hidden bg-ivory text-ink">
      <CandleOverlay />
      <Navbar />

      <main className="relative">
        <IntroSection eventType={eventType} />
        <TitleSection />
        <EventDetailsSection eventType={eventType} />
        <GallerySection />
        <RSVPSection eventType={eventType} />
        <FooterSection eventType={eventType} />
      </main>
    </div>
  )
}

App.propTypes = {
  eventType: PropTypes.oneOf(['both', 'Nikkah', 'Wedding']),
}

App.defaultProps = {
  eventType: 'both',
}

export default App
