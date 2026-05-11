import SectionTag from './SectionTag'

const images = [
  {
    src: '/FRONT.png',
    alt: 'Ascend Street Elevation',
    label: 'Street Elevation — Dzorwulu',
    main: true,
  },
  { src: '/EXTERIOR-ANGLE.png', alt: 'Exterior View', label: 'Exterior View' },
  { src: '/AERIAL-3.png', alt: 'Aerial Perspective', label: 'Aerial Perspective' },
  { src: '/BEDROOM.png', alt: 'Residence Interior', label: 'Residence Interior' },
  { src: '/RECEPTION.png', alt: 'Boardroom Suite', label: 'Boardroom Suite' },
]

function GalleryItem({ src, alt, label, style = {}, className = '' }) {
  return (
    <div className={`gallery-item overflow-hidden relative ${className}`} style={style}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      <span className="gallery-label absolute bottom-5 left-5 text-[9px] tracking-[0.25em] uppercase text-offwhite/70">
        {label}
      </span>
    </div>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-black px-5 py-16 sm:px-10 sm:py-20 lg:px-[60px] lg:py-[120px]">
      <SectionTag className="reveal">Visual Tour</SectionTag>

      {/* Mobile: single column stack */}
      <div className="reveal flex flex-col gap-[3px] sm:hidden">
        {images.map(({ src, alt, label }) => (
          <GalleryItem key={label} src={src} alt={alt} label={label} style={{ height: '260px' }} />
        ))}
      </div>

      {/* Tablet: 2-column grid */}
      <div
        className="reveal hidden sm:grid lg:hidden gap-[3px]"
        style={{ gridTemplateColumns: '1.5fr 1fr', gridTemplateRows: 'auto' }}
      >
        <GalleryItem
          src={images[0].src}
          alt={images[0].alt}
          label={images[0].label}
          style={{ gridRow: '1 / 3', height: '500px' }}
        />
        {images.slice(1).map(({ src, alt, label }) => (
          <GalleryItem key={label} src={src} alt={alt} label={label} style={{ height: '246px' }} />
        ))}
      </div>

      {/* Desktop: full asymmetric grid */}
      <div
        className="reveal hidden lg:grid gap-[3px]"
        style={{
          gridTemplateColumns: '2fr 1fr 1fr',
          gridTemplateRows: '380px 380px',
        }}
      >
        <GalleryItem
          src={images[0].src}
          alt={images[0].alt}
          label={images[0].label}
          style={{ gridRow: '1 / 3' }}
        />
        {images.slice(1).map(({ src, alt, label }) => (
          <GalleryItem key={label} src={src} alt={alt} label={label} />
        ))}
      </div>
    </section>
  )
}
