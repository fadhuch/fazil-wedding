import Navbar from './components/Navbar'
import { useCinematicScroll } from './hooks/useCinematicScroll'
import EventDetailsSection from './sections/EventDetailsSection'
import FooterSection from './sections/FooterSection'
import GallerySection from './sections/GallerySection'
import IntroSection from './sections/IntroSection'
import RSVPSection from './sections/RSVPSection'
import TitleSection from './sections/TitleSection'
import PropTypes from 'prop-types'

function App({ eventType }) {
  const activeSlide = useCinematicScroll()
  const ceremonySlideLabel = eventType === 'Nikkah' ? 'Nikkah' : eventType === 'Wedding' ? 'Reception' : 'Ceremony'
  const slideLabels = ['Invitation', 'Wedding Title', ceremonySlideLabel, 'Our Story', 'RSVP', 'Closing']

  return (
    <div className="relative overflow-x-hidden bg-ivory text-ink">
      <Navbar
        currentSlide={activeSlide}
        totalSlides={slideLabels.length}
        slideLabel={slideLabels[activeSlide]}
      />

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
