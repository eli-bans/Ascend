import React from 'react'

const features = [
  {
    icon: '◈',
    title: 'Rooftop Pool & Bar',
    desc: 'A sky-level infinity pool, cocktail bar, and sundeck exclusively for Ascend residents.',
  },
  {
    icon: '◇',
    title: 'Pergola Lounges',
    desc: 'Timber pergola sun decks and private lounge cabanas overlooking the city.',
  },
  {
    icon: '◉',
    title: 'Event Space & DJ Stage',
    desc: 'A dedicated rooftop event venue with a DJ stage — built for those who entertain.',
  },
  {
    icon: '▣',
    title: 'Boardroom Suite',
    desc: 'A private meeting and boardroom suite for residents who work at the highest level.',
  },
  {
    icon: '◎',
    title: 'Gated & Secured',
    desc: 'Fully gated compound with controlled access and 24-hour on-site security.',
  },
]

export default function Features() {
  return (
    <div
      className="reveal grid px-0 py-0"
      style={{
        background: '#1c1c1c',
        gridTemplateColumns: '1fr 2px 1fr 2px 1fr 2px 1fr 2px 1fr',
      }}
    >
      {features.map((f, i) => (
        <React.Fragment key={f.title}>
          <div className="p-[52px] px-10">
            <div className="text-[28px] text-warm mb-6">{f.icon}</div>
            <div className="font-serif text-[20px] font-light mb-3 tracking-[0.02em]">
              {f.title}
            </div>
            <p className="text-[12px] text-offwhite/50 leading-[1.8]">{f.desc}</p>
          </div>
          {i < features.length - 1 && (
            <div style={{ background: 'rgba(201,169,110,0.2)' }} />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
