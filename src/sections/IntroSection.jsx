import { HiChevronDoubleRight } from 'react-icons/hi2'
import { HiChevronDoubleDown } from 'react-icons/hi2'
import PropTypes from 'prop-types'
import bgImage from '../assets/bg4.jpeg'
const particles = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  size: 4 + ((index * 3) % 7),
  left: `${(index * 13) % 97}%`,
  duration: 10 + (index % 5) * 1.5,
  delay: (index % 6) * 0.6,
}))

const IntroSection = ({ eventType }) => (
  <section id="intro" className="cinematic-section relative flex min-h-screen snap-start items-center justify-center overflow-hidden px-4 pb-16 pt-24">
    <div className="section-bg-parallax intro-zoom absolute inset-0 z-0">
      <img
        src={bgImage}
        alt="Romantic couple silhouette"
        className="h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-ivory/40 to-ivory/90" />
    </div>

    <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_40%,rgba(255,240,219,0.55),transparent_55%)]" />

    <div className="relative z-10 mx-auto w-full max-w-4xl rounded-[2rem] border border-white/45 bg-white/25 px-6 py-20 text-center shadow-soft backdrop-blur-sm md:px-10">
      <p className="reveal-up mb-3 text-[10px] uppercase tracking-[0.4em]  md:text-xs">
        Wedding Invitation
      </p>
      <p className="mask-reveal  overflow-hidden font-heading text-5xl leading-[0.95] text-ink md:text-8xl">
        <span className="block text-gold">FASIL</span>
        <span className="block text-gold" style={{fontSize: '40px'}}>&</span>
        <span className="block text-gold">ASHA</span>
      </p>
      <p className="reveal-up mt-5 text-sm italic tracking-[0.03em] text-ink/75 md:text-base">
        Together with their families, joyfully invite you to celebrate the blessing of their union.
      </p>
      <p className="reveal-up mt-4 text-xs uppercase tracking-[0.3em] text-gold/90 md:text-sm">
        {eventType === 'Nikkah'
          ? '12th July 2026 - Koduvally, Malappuram'
          : eventType === 'Wedding'
            ? '13th July 2026 - Kuttippuram'
            : '12th - 13th July 2026 - Koduvally & Kuttippuram'}
      </p>
    </div>

    <div className="pointer-events-none absolute inset-0 z-[2]">
      {particles.map((p) => (
        <span
          key={p.id}
          className="float-deco absolute rounded-full bg-white/60"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: p.left,
            bottom: `${10 + ((p.id * 9) % 35)}%`,
            animation: `floatDrift ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}
    </div>

    <a href="#title" className="scroll-hint absolute bottom-7 left-1/2 inline-flex -translate-x-1/2 flex-col items-center gap-1 text-[11px] uppercase tracking-[0.24em] text-ink/70">
      Scroll
      <HiChevronDoubleDown size={18} />
    </a>
  </section>
)

IntroSection.propTypes = {
  eventType: PropTypes.oneOf(['both', 'Nikkah', 'Wedding']),
}

IntroSection.defaultProps = {
  eventType: 'both',
}

export default IntroSection
