import PropTypes from 'prop-types'

const FooterSection = ({ eventType }) => (
  <section id="footer" className="cinematic-section relative flex min-h-[30vh] snap-start items-center justify-center px-4 pb-40 pt-0">
    <div className="mx-auto w-full max-w-4xl rounded-[2rem] border border-white/70 bg-white/55 px-6 py-16 text-center shadow-soft backdrop-blur-2xl md:px-10">
      <p className="reveal-up font-heading text-4xl leading-tight text-ink md:text-6xl">Fasil & Asha</p>
      <p className="reveal-up mt-2 text-xs uppercase tracking-[0.28em] text-gold/80 md:text-sm">
        {eventType === 'Nikkah' ? '12 July 2026' : eventType === 'Wedding' ? '13 July 2026' : '12 - 13 July 2026'}
      </p>
      <p className="reveal-up mx-auto mt-6 max-w-2xl text-sm italic leading-relaxed text-ink/75 md:text-base">
        &quot;And He placed between you affection and mercy. Indeed, in that are signs for a people who give thought.&quot;
      </p>
      <p className="reveal-up mt-2 text-[11px] uppercase tracking-[0.24em] text-gold/90">Quran 30:21</p>
      <p className="reveal-up mt-6 text-sm uppercase tracking-[0.24em] text-gold/85 md:text-base">Made with love • Fasil Ashfak & Asha Rahma • 2026</p>
    </div>
  </section>
)

FooterSection.propTypes = {
  eventType: PropTypes.oneOf(['both', 'Nikkah', 'Wedding']),
}

FooterSection.defaultProps = {
  eventType: 'both',
}

export default FooterSection
