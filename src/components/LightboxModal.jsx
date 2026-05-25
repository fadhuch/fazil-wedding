import PropTypes from 'prop-types'
import { AnimatePresence, motion } from 'framer-motion'
import { HiXMark } from 'react-icons/hi2'

const LightboxModal = ({ image, onClose }) => (
  <AnimatePresence>
    {image && (
      <motion.div
        className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/20"
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="absolute right-3 top-3 z-10 rounded-full bg-white/85 p-2 text-ink"
          >
            <HiXMark size={20} />
          </button>
          <img src={image.src} alt={image.alt} className="max-h-[85vh] w-full object-cover" />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
)

LightboxModal.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
}

export default LightboxModal
