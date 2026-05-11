const stats = [
  { num: '8', label: 'Storeys' },
  { num: '86', label: 'Residences' },
  { num: '68', label: 'For Sale' },
]

export default function Hero() {
  return (
    <section className="h-screen relative flex items-end px-5 pb-12 sm:px-10 sm:pb-16 lg:px-[60px] lg:pb-20 overflow-hidden">
      {/* Background */}
      <div
        className="hero-zoom absolute inset-0 bg-cover bg-[center_top]"
        style={{ backgroundImage: "url('/FRONT.png')" }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.4) 55%, rgba(10,10,10,0.1) 100%)',
        }}
      />

      {/* Main content */}
      <div className="fade-up relative z-10 w-full">
        <p className="hero-label-line flex items-center gap-3 lg:gap-4 text-[9px] lg:text-[10px] tracking-[0.25em] lg:tracking-[0.35em] uppercase text-warm mb-5 lg:mb-6">
          By Reign Structura — Dzorwulu, Accra
        </p>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[800px]">
            <h1
              className="font-serif font-light leading-[0.9] tracking-[-0.02em] mb-6 lg:mb-8"
              style={{ fontSize: 'clamp(52px, 9vw, 120px)' }}
            >
              Ascend.<br />
              <em className="not-italic italic text-warm">Rise above.</em>
            </h1>

            <p className="text-[13px] text-offwhite/60 tracking-[0.05em] leading-[1.8] max-w-[420px] mb-8 lg:mb-12">
              A new standard of vertical living in Dzorwulu. Residences designed
              for those who demand more — more elegance, more light, more life.
            </p>

            <div className="flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-offwhite/40">
              <div
                className="scroll-line w-px"
                style={{
                  height: '60px',
                  background: 'linear-gradient(to bottom, rgba(201,169,110,0.8), transparent)',
                }}
              />
              Explore
            </div>
          </div>

          {/* Stats — inline below content on mobile, absolute on desktop */}
          <div className="flex flex-row lg:hidden gap-8 mt-8 pt-8" style={{ borderTop: '1px solid rgba(201,169,110,0.15)' }}>
            {stats.map(({ num, label }) => (
              <div key={label}>
                <div className="font-serif text-[32px] font-light text-warm leading-none">{num}</div>
                <div className="text-[9px] tracking-[0.2em] uppercase text-offwhite/40 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats — desktop absolute position */}
      <div className="fade-up-delay hidden lg:flex absolute right-[60px] bottom-20 z-10 flex-col gap-8">
        {stats.map(({ num, label }) => (
          <div key={label} className="text-right">
            <div className="font-serif text-[42px] font-light text-warm leading-none">{num}</div>
            <div className="text-[9px] tracking-[0.25em] uppercase text-offwhite/40 mt-1">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
