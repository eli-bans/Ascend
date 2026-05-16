import { useState, useEffect, useCallback } from 'react'
import SectionTag from './SectionTag'

// All photos — what shows in lightbox when browsing
const allImages = [
  { src: '/FRONT.png', caption: 'Street Elevation — Dzorwulu' },
  { src: '/EXTERIOR-ANGLE.png', caption: 'Corner View' },
  { src: '/AERIAL-3.png', caption: 'Aerial Perspective' },
  { src: '/AERIAL-CONTEXT.png', caption: 'Ascend in Dzorwulu, Accra' },
  { src: '/entrance-gate.png', caption: 'Gated Entrance' },
  { src: '/building-aerial-night.png', caption: 'Night View' },
  { src: '/living-room.png', caption: 'Living Room' },
  { src: '/BEDROOM.png', caption: 'Bedroom' },
  { src: '/bedroom-master.png', caption: 'Master Bedroom' },
  { src: '/kitchen.png', caption: 'Kitchen' },
  { src: '/lobby.png', caption: 'Grand Lobby' },
  { src: '/RECEPTION.png', caption: 'Boardroom Suite' },
  { src: '/ROOFTOP-2.png', caption: 'Rooftop Overview' },
  { src: '/rooftop-pool.png', caption: 'Pool Deck' },
  { src: '/rooftop-bar.png', caption: 'Cocktail Bar' },
  { src: '/rooftop-aerial.png', caption: 'Rooftop Aerial' },
  { src: '/gym.png', caption: 'Gym & Wellness' },
  { src: '/content-studio.png', caption: 'Content Studio' },
]

// The 5 hero grid images
const heroImages = [
  { src: '/AERIAL-CONTEXT.png', caption: 'Ascend in Dzorwulu, Accra', span: true },
  { src: '/EXTERIOR-ANGLE.png', caption: 'Corner View' },
  { src: '/AERIAL-3.png', caption: 'Aerial Perspective' },
  { src: '/BEDROOM.png', caption: 'Residence Interior' },
  { src: '/RECEPTION.png', caption: 'Boardroom Suite' },
]

function Lightbox({ index, onClose, onPrev, onNext }) {
  const img = allImages[index]

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-[500] flex items-center justify-center"
      style={{ background: 'rgba(5,5,5,0.97)' }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-offwhite/40 hover:text-offwhite transition-colors duration-200 text-[11px] tracking-[0.3em] uppercase z-10 bg-transparent border-0"
        style={{ cursor: 'none' }}
      >
        Close ✕
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.3em] uppercase text-offwhite/30">
        {index + 1} / {allImages.length}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-4 lg:left-10 text-offwhite/30 hover:text-warm transition-colors duration-200 text-[40px] z-10 bg-transparent border-0"
        style={{ cursor: 'none' }}
      >
        ‹
      </button>

      {/* Image */}
      <div
        className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={img.src}
          src={img.src}
          alt={img.caption}
          className="max-w-[90vw] max-h-[80vh] object-contain"
          style={{ animation: 'fadeIn 0.25s ease' }}
        />
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-4 lg:right-10 text-offwhite/30 hover:text-warm transition-colors duration-200 text-[40px] z-10 bg-transparent border-0"
        style={{ cursor: 'none' }}
      >
        ›
      </button>

      {/* Caption */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.3em] uppercase text-offwhite/40">
        {img.caption}
      </div>
    </div>
  )
}

function GalleryItem({ src, caption, style = {}, globalIndex, onOpen }) {
  return (
    <div
      className="gallery-item overflow-hidden relative"
      style={{ ...style, cursor: 'none' }}
      onClick={() => onOpen(globalIndex)}
    >
      <img src={src} alt={caption} className="w-full h-full object-cover" />
      <span className="gallery-label absolute bottom-4 left-4 text-[9px] uppercase text-offwhite">
        {caption}
      </span>
    </div>
  )
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = useCallback((i) => setLightboxIndex(i), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevImage = useCallback(() => setLightboxIndex((i) => (i - 1 + allImages.length) % allImages.length), [])
  const nextImage = useCallback(() => setLightboxIndex((i) => (i + 1) % allImages.length), [])

  return (
    <section id="gallery" className="bg-black px-5 py-16 sm:px-10 sm:py-20 lg:px-[60px] lg:py-[120px]">
      <SectionTag className="reveal">Visual Tour</SectionTag>

      {/* Mobile: single column stack */}
      <div className="reveal flex flex-col gap-[3px] sm:hidden">
        {heroImages.map(({ src, caption }, i) => (
          <GalleryItem key={src} src={src} caption={caption} globalIndex={i} onOpen={openLightbox} style={{ height: '260px' }} />
        ))}
      </div>

      {/* Tablet: 2-column grid */}
      <div
        className="reveal hidden sm:grid lg:hidden gap-[3px]"
        style={{ gridTemplateColumns: '1.5fr 1fr' }}
      >
        <GalleryItem
          src={heroImages[0].src}
          caption={heroImages[0].caption}
          globalIndex={0}
          onOpen={openLightbox}
          style={{ gridRow: '1 / 3', height: '500px' }}
        />
        {heroImages.slice(1).map(({ src, caption }, i) => (
          <GalleryItem key={src} src={src} caption={caption} globalIndex={i + 1} onOpen={openLightbox} style={{ height: '246px' }} />
        ))}
      </div>

      {/* Desktop: original asymmetric hero grid */}
      <div
        className="reveal hidden lg:grid gap-[3px]"
        style={{
          gridTemplateColumns: '2fr 1fr 1fr',
          gridTemplateRows: '380px 380px',
        }}
      >
        <GalleryItem
          src={heroImages[0].src}
          caption={heroImages[0].caption}
          globalIndex={0}
          onOpen={openLightbox}
          style={{ gridRow: '1 / 3' }}
        />
        {heroImages.slice(1).map(({ src, caption }, i) => (
          <GalleryItem key={src} src={src} caption={caption} globalIndex={i + 1} onOpen={openLightbox} />
        ))}
      </div>

      {/* View all button */}
      <div className="reveal mt-6 flex items-center justify-between">
        <p className="text-[11px] text-offwhite/25 tracking-[0.1em]">
          Showing 5 of {allImages.length} photos
        </p>
        <button
          onClick={() => openLightbox(0)}
          className="btn-underline inline-flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-warm pb-2 bg-transparent border-0 hover:gap-5 transition-all duration-300 after:content-['→']"
          style={{ cursor: 'none' }}
        >
          View all photos
        </button>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  )
}
