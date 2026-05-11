const amenities = [
  'Infinity Pool',
  'Cocktail Bar',
  'Pergola Lounges',
  'Sun Deck',
  'Event Space',
  'DJ Stage',
  'Boardroom Suite',
  'Gated Compound',
]

export default function Rooftop() {
  return (
    <section
      id="rooftop"
      className="reveal relative overflow-hidden flex items-center"
      style={{ minHeight: '80vh' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/ROOFTOP-2.png')",
          filter: 'brightness(0.4)',
        }}
      />

      <div className="relative z-10 px-5 py-16 sm:px-10 sm:py-20 lg:px-[60px] lg:py-[120px] max-w-full lg:max-w-[600px]">
        <p className="section-tag-line flex items-center gap-5 text-[9px] tracking-[0.4em] uppercase text-warm mb-10 lg:mb-[60px]">
          Rooftop Club
        </p>

        <h2
          className="font-serif font-light leading-none tracking-[-0.02em] mb-6 lg:mb-7"
          style={{ fontSize: 'clamp(44px, 6vw, 80px)' }}
        >
          Life
          <br />
          at the <em className="italic text-warm">top.</em>
        </h2>

        <p className="text-[13px] text-offwhite/60 leading-[1.9] mb-10 lg:mb-12">
          The Ascend Rooftop Club is an exclusive amenity for residents — a
          private world of pergola lounges, an infinity pool, cocktail bar,
          and event space with a DJ stage, suspended above Dzorwulu.
        </p>

        <div className="flex flex-wrap gap-2 lg:gap-3 mb-10 lg:mb-12">
          {amenities.map((a) => (
            <span
              key={a}
              className="text-[9px] tracking-widest2 uppercase text-warm py-2 px-3 lg:px-4"
              style={{ border: '1px solid rgba(201,169,110,0.3)' }}
            >
              {a}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="btn-underline inline-flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-warm no-underline pb-2 hover:gap-5 transition-all duration-300 after:content-['→']"
        >
          Request access
        </a>
      </div>
    </section>
  )
}
