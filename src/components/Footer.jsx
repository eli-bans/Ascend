export default function Footer() {
  return (
    <footer
      className="bg-black px-5 py-10 sm:px-10 lg:px-[60px] lg:py-[60px] flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-4 border-t text-center sm:text-left"
      style={{ borderColor: 'rgba(201,169,110,0.2)' }}
    >
      <div className="font-serif text-[22px] font-light tracking-[0.15em] text-offwhite">
        ∧<span className="text-warm">SCEND</span>
      </div>
      <p className="text-[11px] text-offwhite/30 tracking-[0.1em] order-last sm:order-none">
        © 2026 Ascend. All rights reserved.
      </p>
      <p className="text-[11px] text-offwhite/30 tracking-[0.1em]">
        By <span className="text-warm">Reign Structura</span>
      </p>
    </footer>
  )
}
