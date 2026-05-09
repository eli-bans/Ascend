export default function Hero() {
  return (
    <section className="h-screen relative flex items-end px-[60px] pb-20 overflow-hidden">
      {/* Background image */}
      <div
        className="hero-zoom absolute inset-0 bg-cover bg-[center_top]"
        style={{ backgroundImage: "url('/FRONT.png')" }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.3) 50%, rgba(10,10,10,0.1) 100%)',
        }}
      />

      {/* Main content */}
      <div className="fade-up relative z-10 max-w-[800px]">
        <p className="hero-label-line flex items-center gap-4 text-[10px] tracking-[0.35em] uppercase text-warm mb-6">
          By Reign Structura — Dzorwulu, Accra
        </p>

        <h1 className="font-serif font-light leading-[0.9] tracking-[-0.02em] mb-8"
          style={{ fontSize: 'clamp(64px, 9vw, 120px)' }}>
          Ascend.<br />
          <em className="not-italic italic text-warm">Rise above.</em>
        </h1>

        <p className="text-[13px] text-offwhite/60 tracking-[0.05em] leading-[1.8] max-w-[420px] mb-12">
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

      {/* Stats */}
      <div className="fade-up-delay absolute right-[60px] bottom-20 z-10 flex flex-col gap-8">
        {[
          { num: '8', label: 'Storeys' },
          { num: '86', label: 'Residences' },
          { num: '68', label: 'For Sale' },
        ].map(({ num, label }) => (
          <div key={label} className="text-right">
            <div className="font-serif text-[42px] font-light text-warm leading-none">{num}</div>
            <div className="text-[9px] tracking-[0.25em] uppercase text-offwhite/40 mt-1">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
