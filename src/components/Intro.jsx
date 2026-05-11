import SectionTag from './SectionTag'

export default function Intro() {
  return (
    <section
      id="intro"
      className="reveal"
      style={{ background: '#111111' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left — text */}
        <div className="px-5 py-16 sm:px-10 sm:py-20 lg:px-[60px] lg:py-[120px] flex flex-col justify-center">
          <SectionTag>The Concept</SectionTag>
          <h2
            className="font-serif font-light leading-[1.15] tracking-[-0.01em] mb-8 lg:mb-10"
            style={{ fontSize: 'clamp(34px, 4vw, 58px)' }}
          >
            Where architecture
            <br />
            meets <em className="italic text-warm">ambition.</em>
          </h2>
          <p className="text-offwhite/60 text-sm leading-[1.9] mb-6 lg:mb-8">
            Ascend redefines premium urban living in Dzorwulu, Accra. Every
            detail — from the lush cascading balcony gardens to the warm timber
            louvre screens — is a deliberate statement of refinement. This is
            not just a residence; it is an elevation of lifestyle.
          </p>
          <p className="text-offwhite/60 text-sm leading-[1.9] mb-8 lg:mb-10">
            Developed by Reign Structura, Ascend is 8 storeys of considered
            architecture — 86 residences, a rooftop club, a private boardroom
            suite, and a gated compound designed for those who expect more.
          </p>
          <a
            href="#gallery"
            className="btn-underline inline-flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-warm no-underline pb-2 hover:gap-5 transition-all duration-300 after:content-['→']"
          >
            Explore the building
          </a>
        </div>

        {/* Right — image */}
        <div
          className="gallery-item relative overflow-hidden"
          style={{ minHeight: 'clamp(300px, 40vw, 560px)' }}
        >
          <img
            src="/EXTERIOR-ANGLE.png"
            alt="Ascend Exterior"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(17,17,17,0.4) 0%, transparent 40%)' }}
          />
          <span className="gallery-label absolute bottom-6 left-6 lg:bottom-8 lg:left-8 text-[9px] tracking-[0.25em] uppercase text-offwhite/70">
            Dzorwulu, Accra
          </span>
        </div>
      </div>
    </section>
  )
}
