const features = [
  {
    icon: '◈',
    title: 'Rooftop Pool & Bar',
    desc: 'A sky-level infinity pool, cocktail bar, and sundeck exclusively for Ascend residents.',
    image: '/rooftop-bar.png',
  },
  {
    icon: '◎',
    title: 'Rooftop Cinema',
    desc: 'An open-air rooftop cinema for residents — film nights above the Accra skyline.',
    image: null,
  },
  {
    icon: '◇',
    title: 'Gym & Wellness',
    desc: 'A fully equipped residents-only fitness suite, designed for daily performance.',
    image: '/gym.png',
  },
  {
    icon: '▦',
    title: 'Content Studio',
    desc: 'A dedicated creative space for photography, podcasting, and content production.',
    image: '/content-studio.png',
  },
  {
    icon: '◉',
    title: 'Event Space & DJ Stage',
    desc: 'A dedicated rooftop event venue with a DJ stage — built for those who entertain.',
    image: null,
  },
  {
    icon: '▣',
    title: 'Boardroom Suite',
    desc: 'A private meeting and boardroom suite for residents who work at the highest level.',
    image: '/RECEPTION.png',
  },
  {
    icon: '▤',
    title: 'Underground Parking',
    desc: 'Secure underground parking — one dedicated bay per unit, fully covered.',
    image: '/entrance-gate.png',
  },
  {
    icon: '⬡',
    title: 'Gated & Secured',
    desc: 'Fully gated compound with controlled access and 24-hour on-site security.',
    image: null,
  },
]

export default function Features() {
  return (
    <div
      id="amenities"
      className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      style={{ background: '#1c1c1c' }}
    >
      {features.map((f, i) => (
        <div
          key={f.title}
          className="overflow-hidden"
          style={{
            borderTop: '1px solid rgba(201,169,110,0.15)',
            borderRight:
              i % 4 !== 3 ? '1px solid rgba(201,169,110,0.15)' : 'none',
          }}
        >
          {/* Image slot */}
          <div
            className="w-full overflow-hidden bg-[#111]"
            style={{ height: '160px' }}
          >
            {f.image && (
              <img
                src={f.image}
                alt={f.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ filter: 'brightness(0.7)' }}
              />
            )}
          </div>

          {/* Text */}
          <div className="p-8 lg:p-10 xl:p-12">
            <div className="text-[26px] text-warm mb-5">{f.icon}</div>
            <div className="font-serif text-[19px] font-light mb-3 tracking-[0.02em]">
              {f.title}
            </div>
            <p className="text-[12px] text-offwhite/50 leading-[1.8]">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
