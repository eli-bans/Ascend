export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-[60px] py-7 flex justify-between items-center"
      style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.9) 0%, transparent 100%)' }}>
      <a href="#" className="font-serif text-[26px] font-light tracking-[0.15em] text-offwhite no-underline">
        ∧<span className="text-warm">SCEND</span>
      </a>

      <ul className="flex gap-12 list-none">
        {['Gallery', 'Residences', 'Amenities', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-offwhite/60 no-underline text-[11px] tracking-widest2 uppercase transition-colors duration-300 hover:text-warm"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="text-[11px] tracking-widest2 uppercase text-warm border border-warm px-6 py-[10px] no-underline transition-all duration-300 hover:bg-warm hover:text-black"
      >
        Enquire
      </a>
    </nav>
  )
}
