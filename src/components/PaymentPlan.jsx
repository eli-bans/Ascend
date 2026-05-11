import SectionTag from './SectionTag'

const plans = [
  {
    label: 'Plan A',
    sub: '12 Months',
    tag: 'Complete before handover',
    steps: [
      { milestone: 'Reservation', amount: '$5,000' },
      { milestone: 'On Signing', amount: '50% of balance' },
      { milestone: '50% Construction', amount: '30% of balance' },
      { milestone: 'Completion', amount: '20% of balance' },
    ],
    note: 'Settle in full before keys — ideal for buyers with capital ready.',
    highlight: false,
  },
  {
    label: 'Plan B',
    sub: '24 Months',
    tag: 'Most Popular',
    steps: [
      { milestone: 'Reservation', amount: '$5,000' },
      { milestone: 'On Signing', amount: '30% of balance' },
      { milestone: 'Monthly', amount: '~$3,300 / mo' },
      { milestone: 'Completion', amount: 'Remaining balance' },
    ],
    note: 'A balanced split — part upfront, part monthly. Built for steady earners.',
    highlight: true,
  },
  {
    label: 'Plan C',
    sub: '36 Months',
    tag: 'Lowest entry',
    steps: [
      { milestone: 'Reservation', amount: '$5,000' },
      { milestone: 'On Signing', amount: '10% of balance' },
      { milestone: 'Monthly', amount: '~$2,200 / mo' },
      { milestone: 'Completion', amount: 'Remaining balance' },
    ],
    note: 'Lighter upfront, longer runway — designed for diaspora buyers.',
    highlight: false,
  },
]

const pricing = [
  { type: 'Studio', asking: '$85,000', early: '$79,000', save: '$6,000' },
  { type: '1 Bedroom', asking: '$160,000', early: '$135,000', save: '$25,000' },
  { type: '2 Bedroom', asking: '$250,000', early: '$220,000', save: '$30,000' },
  { type: 'Penthouse', asking: '$340,000', early: '$300,000', save: '$40,000' },
]

export default function PaymentPlan() {
  return (
    <section
      id="payment"
      className="reveal px-5 py-16 sm:px-10 sm:py-20 lg:px-[60px] lg:py-[120px]"
      style={{ background: '#0e0e0e' }}
    >
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px] items-end mb-12 lg:mb-[80px]">
        <div>
          <SectionTag>Payment Structure</SectionTag>
          <h2
            className="font-serif font-light leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(42px, 5vw, 68px)' }}
          >
            Your path
            <br />
            <em className="italic text-warm">to ownership.</em>
          </h2>
        </div>
        <div>
          <p className="text-[13px] text-offwhite/50 leading-[1.9] mb-8">
            A lump sum is a barrier. Spread over 1–3 years, it becomes a
            monthly decision. We have structured three plans so that buyers —
            whether in Accra, London, Toronto, or Houston — can find a pace
            that works.
          </p>

          {/* Early Entry Callout */}
          <div
            className="p-5 lg:p-6 flex items-start gap-4 lg:gap-5 mb-6"
            style={{ border: '1px solid rgba(232,130,90,0.35)', background: 'rgba(232,130,90,0.04)' }}
          >
            <div
              className="text-[9px] tracking-[0.25em] uppercase px-3 py-1 mt-0.5 shrink-0"
              style={{ color: '#e8825a', border: '1px solid rgba(232,130,90,0.4)' }}
            >
              Early Entry
            </div>
            <p className="text-sm text-offwhite/80 leading-[1.7]">
              Reserve now and lock in the early price — the longer you wait,
              the more you pay. Studios save{' '}
              <span className="text-warm font-medium">$6,000</span>, 1-beds
              save <span className="text-warm font-medium">$25,000</span>,
              2-beds save{' '}
              <span className="text-warm font-medium">$30,000</span>, and
              penthouses save{' '}
              <span className="text-warm font-medium">$40,000</span>.
            </p>
          </div>

          {/* Pricing table — 2 cols on mobile, 4 on desktop */}
          <div style={{ border: '1px solid rgba(245,243,239,0.08)' }}>
            {pricing.map(({ type, asking, early, save }, i) => (
              <div
                key={type}
                className="grid grid-cols-2 sm:grid-cols-4 px-4 lg:px-5 py-3"
                style={{ borderTop: i > 0 ? '1px solid rgba(245,243,239,0.06)' : 'none' }}
              >
                <span className="text-[11px] text-offwhite/40 uppercase tracking-[0.15em]">{type}</span>
                <span className="hidden sm:block text-[11px] text-offwhite/30 line-through text-right">{asking}</span>
                <span className="text-[13px] text-warm font-light text-right">{early}</span>
                <span className="text-[11px] text-right" style={{ color: '#e8825a' }}>Save {save}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reservation anchor */}
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10 lg:mb-[60px] px-6 lg:px-8 py-6"
        style={{ background: 'rgba(201,169,110,0.05)', border: '1px solid rgba(201,169,110,0.2)' }}
      >
        <div className="shrink-0">
          <div className="font-serif text-[40px] lg:text-[48px] font-light text-warm leading-none">$5,000</div>
          <div className="text-[9px] tracking-[0.3em] uppercase text-offwhite/30 mt-1">Reservation Deposit</div>
        </div>
        <div
          className="hidden sm:block w-px self-stretch"
          style={{ background: 'rgba(201,169,110,0.2)' }}
        />
        <p className="text-[13px] text-offwhite/50 leading-[1.8]">
          Pay $5,000 to hold your unit and lock in your price. The remainder is
          structured across whichever plan you choose. Your reservation is
          fully counted toward your purchase — nothing is lost.
        </p>
        <a
          href="#contact"
          className="w-full sm:w-auto sm:ml-auto shrink-0 text-center text-[10px] tracking-[0.25em] uppercase text-black font-medium px-8 py-4 transition-colors duration-300 hover:opacity-90"
          style={{ background: '#c9a96e', cursor: 'none' }}
        >
          Reserve Now →
        </a>
      </div>

      {/* Plan cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[2px]">
        {plans.map(({ label, sub, tag, steps, note, highlight }) => (
          <div
            key={label}
            className="p-8 lg:p-10 relative transition-all duration-300"
            style={{
              background: highlight ? '#1a1a1a' : '#141414',
              border: highlight
                ? '1px solid rgba(201,169,110,0.4)'
                : '1px solid rgba(245,243,239,0.06)',
            }}
          >
            {highlight && (
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: 'linear-gradient(to right, #c9a96e, #e8825a)' }}
              />
            )}
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="font-serif text-[32px] font-light text-warm leading-none">{label}</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-offwhite/30 mt-1">{sub}</div>
              </div>
              <span
                className="text-[8px] tracking-[0.2em] uppercase px-3 py-1"
                style={{
                  color: highlight ? '#e8825a' : 'rgba(201,169,110,0.6)',
                  border: highlight
                    ? '1px solid rgba(232,130,90,0.4)'
                    : '1px solid rgba(201,169,110,0.25)',
                }}
              >
                {tag}
              </span>
            </div>
            <ul className="mb-8">
              {steps.map(({ milestone, amount }) => (
                <li
                  key={milestone}
                  className="flex justify-between items-center py-3"
                  style={{ borderBottom: '1px solid rgba(245,243,239,0.06)' }}
                >
                  <span className="text-[11px] text-offwhite/40 uppercase tracking-[0.15em]">{milestone}</span>
                  <span className="text-[13px] text-offwhite font-light">{amount}</span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-offwhite/35 leading-[1.8] italic">{note}</p>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-offwhite/20 mt-6 leading-[1.7]">
        * Monthly figures are illustrative, based on a studio at early entry price ($79,000).
        Exact schedules are confirmed at point of reservation. All amounts in USD.
      </p>
    </section>
  )
}
