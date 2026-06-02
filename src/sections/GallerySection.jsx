import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import LightboxModal from '../components/LightboxModal'
import image1 from '../assets/image1.jpeg'
import image2 from '../assets/image2.jpeg'
import image3 from '../assets/image3.jpeg'
import image4 from '../assets/image4.jpeg'
import image5 from '../assets/image5.jpeg'
import image6 from '../assets/image6.jpeg'

const images = [
    {
    src: image3,
    alt: 'Our story photo 3',
  },
  {
    src: image1,
    alt: 'Our story photo 1',
  },
  {
    src: image4,
    alt: 'Our story photo 4',
  },
  {
    src: image2,
    alt: 'Our story photo 2',
  },
  
  
  {
    src: image5,
    alt: 'Our story photo 5',
    },
  {
    src: image6,
    alt: 'Our story photo 6',
  }
]

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="gallery" className="cinematic-section relative min-h-screen snap-start px-4 py-20 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Moments to Treasure"
          title="Our Story"
          subtitle="A glimpse of our portraits, beginnings, memories, and forever moments."
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
                style={{ filter: 'opacity(0.5)' }}
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
