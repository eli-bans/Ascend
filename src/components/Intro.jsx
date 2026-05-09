import SectionTag from './SectionTag'

export default function Intro() {
  return (
    <section
      id="intro"
      className="reveal grid grid-cols-2 gap-[100px] items-center px-[60px] py-[120px]"
      style={{ background: '#111111' }}
    >
      <div>
        <SectionTag>The Concept</SectionTag>
        <h2
          className="font-serif font-light leading-[1.15] tracking-[-0.01em]"
          style={{ fontSize: 'clamp(38px, 4vw, 58px)' }}
        >
          Where architecture
          <br />
          meets <em className="italic text-warm">ambition.</em>
        </h2>
      </div>

      <div>
        <p className="text-offwhite/60 text-sm leading-[1.9] mb-10">
          Ascend redefines premium urban living in Dzorwulu, Accra. Every
          detail — from the lush cascading balcony gardens to the warm timber
          louvre screens — is a deliberate statement of refinement. This is
          not just a residence; it is an elevation of lifestyle.
        </p>
        <p className="text-offwhite/60 text-sm leading-[1.9] mb-10">
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
    </section>
  )
}
