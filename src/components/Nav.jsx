import { useState, useEffect } from 'react'

const links = [
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Residences', href: '#residences' },
  { label: 'How to Buy', href: '#payment' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] px-5 sm:px-10 lg:px-[60px] py-6 lg:py-7 flex justify-between items-center"
        style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.9) 0%, transparent 100%)' }}
      >
        {/* Logo */}
        <a href="#" className="font-serif text-[24px] lg:text-[26px] font-light tracking-[0.15em] text-offwhite no-underline z-[201]">
          ∧<span className="text-warm">SCEND</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-10 list-none">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-offwhite/60 no-underline text-[11px] tracking-widest2 uppercase transition-colors duration-300 hover:text-warm"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden lg:inline-block text-[11px] tracking-widest2 uppercase text-warm border border-warm px-6 py-[10px] no-underline transition-all duration-300 hover:bg-warm hover:text-black"
        >
          Enquire
        </a>

        {/* Mobile — right side: Enquire + Menu toggle */}
        <div className="flex lg:hidden items-center gap-5">
          <a
            href="#contact"
            onClick={close}
            className="text-[10px] tracking-widest2 uppercase text-warm border border-warm px-4 py-2 no-underline transition-all duration-300"
          >
            Enquire
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex flex-col gap-[5px] z-[201] bg-transparent border-0 p-0"
            style={{ cursor: 'none' }}
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-px bg-offwhite transition-all duration-300 origin-center"
              style={open ? { transform: 'translateY(6px) rotate(45deg)' } : {}}
            />
            <span
              className="block w-4 h-px bg-warm transition-all duration-300"
              style={open ? { opacity: 0, transform: 'translateX(-8px)' } : {}}
            />
            <span
              className="block w-6 h-px bg-offwhite transition-all duration-300 origin-center"
              style={open ? { transform: 'translateY(-6px) rotate(-45deg)' } : {}}
            />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        className="fixed inset-0 z-[200] flex flex-col justify-center items-center lg:hidden transition-all duration-500"
        style={{
          background: 'rgba(10,10,10,0.98)',
          backdropFilter: 'blur(12px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'all' : 'none',
          transform: open ? 'translateY(0)' : 'translateY(-12px)',
        }}
      >
        <ul className="list-none flex flex-col items-center gap-8">
          {links.map(({ label, href }, i) => (
            <li key={label} style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}>
              <a
                href={href}
                onClick={close}
                className="font-serif text-[36px] sm:text-[48px] font-light tracking-[-0.01em] text-offwhite/80 hover:text-warm no-underline transition-colors duration-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="absolute bottom-10 text-[9px] tracking-[0.3em] uppercase text-offwhite/20"
        >
          By Reign Structura — Dzorwulu, Accra
        </div>
      </div>
    </>
  )
}
