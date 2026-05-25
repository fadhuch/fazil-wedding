import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import LightboxModal from '../components/LightboxModal'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80',
    alt: 'Wedding flowers and decor',
  },
  {
    src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
    alt: 'Bride and groom hands',
  },
  {
    src: 'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?auto=format&fit=crop&w=900&q=80',
    alt: 'Wedding rings',
  },
  {
    src: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=80',
    alt: 'Romantic couple portrait',
  },
  {
    src: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=900&q=80',
    alt: 'Wedding table setup',
  },
  {
    src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&w=900&q=80',
    alt: 'Elegant wedding venue',
  },
]

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="gallery" className="cinematic-section relative min-h-screen snap-start px-4 py-20 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Photo Gallery"
          title="Cinematic Memories"
          subtitle="A glimpse of the love and details surrounding our day."
        />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {images.map((image) => (
            <button
              key={image.src}
              type="button"
              className="gallery-item group overflow-hidden rounded-2xl border border-white/60 bg-white/50 shadow-soft"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      <LightboxModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  )
}

export default GallerySection
