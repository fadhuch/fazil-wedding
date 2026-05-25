import PropTypes from 'prop-types'

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="mx-auto mb-10 max-w-xl text-center md:mb-14">
    <p className="reveal-up mb-2 text-xs uppercase tracking-[0.35em] text-gold/80">{eyebrow}</p>
    <h2 className="reveal-up font-heading text-4xl leading-tight text-ink md:text-5xl">{title}</h2>
    {subtitle ? <p className="reveal-up mt-3 text-sm text-ink/70 md:text-base">{subtitle}</p> : null}
  </div>
)

SectionTitle.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

export default SectionTitle
