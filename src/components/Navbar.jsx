import { HiMiniHeart } from 'react-icons/hi2'
import PropTypes from 'prop-types'

const Navbar = ({ currentSlide, totalSlides, slideLabel }) => (
  <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
    <nav className="mx-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-white/50 bg-white/45 px-4 py-3 shadow-soft backdrop-blur-xl md:px-6">
      <a href="#intro" className="font-heading text-2xl text-gold">F & A</a>

      <div className="flex items-center gap-3">
        <div className="hidden min-w-[128px] flex-col items-end text-right md:flex">
          <p className="text-[10px] uppercase tracking-[0.3em] text-ink/55">Now Viewing</p>
          <p className="font-heading text-lg text-ink">{slideLabel}</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-[10px] uppercase tracking-[0.28em] text-ink/70 md:text-xs">
            {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </p>

          <div className="flex items-center gap-1.5 rounded-full border border-white/60 bg-white/40 px-2 py-1 shadow-[0_10px_20px_rgba(62,44,18,0.06)] backdrop-blur-sm">
            {Array.from({ length: totalSlides }).map((_, index) => {
              const isActive = index === currentSlide

              return (
                <span
                  key={`slide-dot-${index}`}
                  className={`relative h-1.5 rounded-full transition-all duration-300 ${
                    isActive ? 'w-6 bg-gradient-to-r from-champagne to-gold' : 'w-1.5 bg-ink/20'
                  }`}
                >
                  {isActive ? (
                    <span className="absolute inset-0 animate-pulse rounded-full bg-white/40" />
                  ) : null}
                </span>
              )
            })}
          </div>
        </div>
      </div>

      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-champagne/20 text-gold">
        <HiMiniHeart size={16} />
      </span>
    </nav>
  </header>
)

Navbar.propTypes = {
  currentSlide: PropTypes.number,
  totalSlides: PropTypes.number,
  slideLabel: PropTypes.string,
}

Navbar.defaultProps = {
  currentSlide: 0,
  totalSlides: 1,
  slideLabel: 'Invitation',
}

export default Navbar
