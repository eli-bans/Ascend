const units = [
  {
    num: '01',
    type: 'Studio Collection',
    title: 'Studios',
    total: 56,
    sold: 23,
    available: 33,
    urgent: true,
    details: [
      ['Size', '35 – 37 m²'],
      ['Total Units', '56'],
      ['Available', '33'],
      ['Reserved', '23'],
    ],
  },
  {
    num: '02',
    type: 'Apartment Collection',
    title: 'One Bedroom',
    total: 14,
    sold: 4,
    available: 10,
    urgent: false,
    details: [
      ['Size', '~51 m²'],
      ['Total Units', '14'],
      ['Available', '10'],
      ['Reserved', '4'],
    ],
  },
  {
    num: '03',
    type: 'Signature Collection',
    title: 'Two Bedroom',
    total: 14,
    sold: 4,
    available: 10,
    urgent: false,
    details: [
      ['Size', '~155 m²'],
      ['Total Units', '14'],
      ['Available', '10'],
      ['Reserved', '4'],
    ],
  },
  {
    num: '04',
    type: 'Penthouse Collection',
    title: 'Penthouse',
    total: 2,
    sold: 0,
    available: 2,
    urgent: false,
    details: [
      ['Size', '~200 m²'],
      ['Total Units', '2'],
      ['Available', '2'],
      ['Reserved', '0'],
    ],
  },
]

function AvailabilityBar({ total, available, urgent }) {
  const availablePct = (available / total) * 100

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[9px] tracking-[0.2em] uppercase text-offwhite/30">
          Availability
        </span>
        <span
          className="text-[9px] tracking-[0.15em] uppercase font-medium"
          style={{ color: urgent ? '#e8825a' : '#c9a96e' }}
        >
          {available} of {total} remaining
        </span>
      </div>
      <div className="w-full h-px" style={{ background: 'rgba(245,243,239,0.08)' }}>
        <div
          className="h-px transition-all duration-700"
          style={{
            width: `${availablePct}%`,
            background: urgent
              ? 'linear-gradient(to right, #e8825a, #c9a96e)'
              : '#c9a96e',
          }}
        />
      </div>
    </div>
  )
}

export default function Residences() {
  return (
    <section
      id="residences"
      className="reveal px-[60px] py-[120px]"
      style={{ background: '#111111' }}
    >
      {/* Header */}
      <div className="flex justify-between items-end mb-[60px]">
        <h2
          className="font-serif font-light tracking-[-0.02em] leading-none"
          style={{ fontSize: 'clamp(42px, 5vw, 68px)' }}
        >
          The
          <br />
          <em className="italic text-warm">Residences</em>
        </h2>
        <div className="text-right">
          <p className="text-xs text-offwhite/40 max-w-[280px] leading-[1.8] mb-4">
            86 residences across 8 storeys in Dzorwulu — 68 units available
            for purchase across four collections.
          </p>
          <div className="flex gap-6 justify-end">
            <div className="text-right">
              <div className="font-serif text-[28px] font-light text-warm leading-none">68</div>
              <div className="text-[9px] tracking-[0.2em] uppercase text-offwhite/30 mt-1">For Sale</div>
            </div>
            <div className="text-right">
              <div className="font-serif text-[28px] font-light text-offwhite/30 leading-none">18</div>
              <div className="text-[9px] tracking-[0.2em] uppercase text-offwhite/20 mt-1">Reserved</div>
            </div>
          </div>
        </div>
      </div>

      {/* 4-column grid */}
      <div className="grid grid-cols-4 gap-[2px]">
        {units.map(({ num, type, title, total, available, details, urgent }) => (
          <div
            key={num}
            className="residence-card card-line relative p-10 border-t overflow-hidden transition-all duration-300 hover:bg-[#1f1f1f]"
            style={{ background: '#1c1c1c', borderColor: 'rgba(201,169,110,0.2)' }}
          >
            {urgent && (
              <div
                className="absolute top-5 right-5 text-[8px] tracking-[0.2em] uppercase px-3 py-1"
                style={{ color: '#e8825a', border: '1px solid rgba(232,130,90,0.4)' }}
              >
                In Demand
              </div>
            )}
            <div
              className="font-serif text-[52px] font-light leading-none mb-6"
              style={{ color: 'rgba(201,169,110,0.15)' }}
            >
              {num}
            </div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-warm mb-2">{type}</p>
            <h3 className="font-serif text-[26px] font-light mb-5">{title}</h3>
            <ul className="list-none text-[12px] text-offwhite/50">
              {details.map(([key, val]) => (
                <li
                  key={key}
                  className="flex justify-between py-2"
                  style={{ borderBottom: '1px solid rgba(245,243,239,0.06)' }}
                >
                  {key}
                  <span className="text-offwhite">{val}</span>
                </li>
              ))}
            </ul>
            <AvailabilityBar total={total} available={available} urgent={urgent} />
          </div>
        ))}
      </div>
    </section>
  )
}
