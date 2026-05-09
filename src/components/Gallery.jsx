import SectionTag from './SectionTag'

const images = [
  {
    src: '/FRONT.png',
    alt: 'Ascend Street Elevation',
    label: 'Street Elevation',
    span: true,
  },
  {
    src: '/EXTERIOR-ANGLE.png',
    alt: 'Exterior View',
    label: 'Exterior View',
  },
  {
    src: '/AERIAL-3.png',
    alt: 'Aerial Perspective',
    label: 'Aerial Perspective',
  },
  {
    src: '/BEDROOM.png',
    alt: 'Residence Interior',
    label: 'Residence Interior',
  },
  {
    src: '/RECEPTION.png',
    alt: 'Boardroom Suite',
    label: 'Boardroom Suite',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-black px-[60px] py-20">
      <SectionTag className="reveal">Visual Tour</SectionTag>

      <div
        className="reveal grid gap-[3px]"
        style={{
          gridTemplateColumns: '2fr 1fr 1fr',
          gridTemplateRows: '340px 340px',
        }}
      >
        {images.map(({ src, alt, label, span }) => (
          <div
            key={label}
            className="gallery-item overflow-hidden relative"
            style={span ? { gridRow: '1 / 3' } : {}}
          >
            <img src={src} alt={alt} className="w-full h-full object-cover" />
            <span className="gallery-label absolute bottom-5 left-5 text-[9px] tracking-[0.25em] uppercase text-offwhite/70">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
