import SectionTag from './SectionTag'

const landmarks = [
  { name: 'Kotoka International Airport', distance: '8 min' },
  { name: 'Accra Mall', distance: '5 min' },
  { name: 'Nyaho Medical Centre', distance: '4 min' },
  { name: 'Cantonments Business District', distance: '10 min' },
  { name: 'Labone & Osu', distance: '12 min' },
  { name: 'East Legon', distance: '15 min' },
]

export default function Location() {
  return (
    <section
      id="location"
      className="reveal px-5 py-16 sm:px-10 sm:py-20 lg:px-[60px] lg:py-[120px]"
      style={{ background: '#111111' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px] items-start">
        {/* Left */}
        <div>
          <SectionTag>Location</SectionTag>
          <h2
            className="font-serif font-light leading-[1.05] tracking-[-0.02em] mb-8"
            style={{ fontSize: 'clamp(42px, 5vw, 68px)' }}
          >
            Dzorwulu,
            <br />
            <em className="italic text-warm">Accra.</em>
          </h2>
          <p className="text-[13px] text-offwhite/50 leading-[1.9] mb-10 max-w-[400px]">
            Ascend sits at the heart of Dzorwulu — one of Accra's most
            established and connected residential corridors. Minutes from the
            airport, the city's best medical facilities, and its premier
            shopping and dining.
          </p>
          <a
            href="#contact"
            className="btn-underline inline-flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-warm no-underline pb-2 hover:gap-5 transition-all duration-300 after:content-['→']"
          >
            Request site visit
          </a>
        </div>

        {/* Right — landmark list */}
        <div>
          <div className="text-[9px] tracking-[0.3em] uppercase text-offwhite/25 mb-5">
            Key distances
          </div>
          <ul className="list-none">
            {landmarks.map(({ name, distance }, i) => (
              <li
                key={name}
                className="flex items-center justify-between py-4 lg:py-5 group"
                style={{
                  borderBottom: '1px solid rgba(245,243,239,0.07)',
                  borderTop: i === 0 ? '1px solid rgba(245,243,239,0.07)' : 'none',
                }}
              >
                <span className="text-[13px] text-offwhite/70 group-hover:text-offwhite transition-colors duration-200">
                  {name}
                </span>
                <span className="font-serif text-[20px] lg:text-[22px] font-light text-warm/60 group-hover:text-warm transition-colors duration-200 ml-6 shrink-0">
                  {distance}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-[10px] text-offwhite/20 mt-5 leading-[1.7]">
            Drive times are approximate, based on typical Accra traffic conditions.
          </p>
        </div>
      </div>
    </section>
  )
}
