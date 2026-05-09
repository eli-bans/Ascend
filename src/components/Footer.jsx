export default function Footer() {
  return (
    <footer
      className="bg-black px-[60px] py-[60px] flex justify-between items-center border-t"
      style={{ borderColor: 'rgba(201,169,110,0.2)' }}
    >
      <div className="font-serif text-[22px] font-light tracking-[0.15em] text-offwhite">
        ∧<span className="text-warm">SCEND</span>
      </div>
      <p className="text-[11px] text-offwhite/30 tracking-[0.1em]">
        © 2025 Ascend. All rights reserved.
      </p>
      <p className="text-[11px] text-offwhite/30 tracking-[0.1em]">
        By <span className="text-warm">Reign Structura</span>
      </p>
    </footer>
  )
}
