import { useState } from 'react'
import SectionTag from './SectionTag'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  })

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const inputClass =
    'w-full bg-transparent border-0 border-b text-offwhite font-sans text-sm font-light py-3 outline-none transition-colors duration-300 focus:border-warm placeholder:text-offwhite/20'
  const borderStyle = { borderColor: 'rgba(245,243,239,0.15)' }

  return (
    <section
      id="contact"
      className="reveal grid grid-cols-2 gap-[100px] items-start px-[60px] py-[120px]"
      style={{ background: '#111111' }}
    >
      {/* Left */}
      <div>
        <SectionTag>Get in Touch</SectionTag>
        <h2
          className="font-serif font-light leading-[1.05] tracking-[-0.02em] mb-8"
          style={{ fontSize: 'clamp(42px, 5vw, 68px)' }}
        >
          Begin your
          <br />
          <em className="italic text-warm">ascent.</em>
        </h2>
        <p className="text-[13px] text-offwhite/50 leading-[1.9] mt-6 max-w-[380px]">
          Our sales team is available to arrange a private consultation, share
          floor plans, and guide you through selecting your residence.
        </p>

        <div className="mt-12 flex flex-col gap-6">
          {[
            { label: 'Location', value: 'Dzorwulu, Accra, Ghana' },
            { label: 'Developer', value: 'Reign Structura' },
            { label: 'Status', value: 'Now Selling — Limited Units' },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="text-[9px] tracking-[0.3em] uppercase text-warm">
                {label}
              </span>
              <span className="text-sm text-offwhite/70">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right — form */}
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-7">
          <label className="block text-[9px] tracking-[0.25em] uppercase text-offwhite/40 mb-[10px]">
            Full Name
          </label>
          <input
            name="name"
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            style={borderStyle}
          />
        </div>

        <div className="mb-7">
          <label className="block text-[9px] tracking-[0.25em] uppercase text-offwhite/40 mb-[10px]">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            style={borderStyle}
          />
        </div>

        <div className="mb-7">
          <label className="block text-[9px] tracking-[0.25em] uppercase text-offwhite/40 mb-[10px]">
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            placeholder="+233 ..."
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
            style={borderStyle}
          />
        </div>

        <div className="mb-7">
          <label className="block text-[9px] tracking-[0.25em] uppercase text-offwhite/40 mb-[10px]">
            Interested In
          </label>
          <select
            name="interest"
            value={form.interest}
            onChange={handleChange}
            className={inputClass}
            style={{ ...borderStyle, appearance: 'none' }}
          >
            <option value="" style={{ background: '#111111' }}>Select a unit type</option>
            <option style={{ background: '#111111' }}>Studio — 35–37 m²</option>
            <option style={{ background: '#111111' }}>One Bedroom — ~51 m²</option>
            <option style={{ background: '#111111' }}>Two Bedroom — ~155 m²</option>
            <option style={{ background: '#111111' }}>Penthouse — ~200 m²</option>
            <option style={{ background: '#111111' }}>General Enquiry</option>
          </select>
        </div>

        <div className="mb-7">
          <label className="block text-[9px] tracking-[0.25em] uppercase text-offwhite/40 mb-[10px]">
            Message (optional)
          </label>
          <textarea
            name="message"
            placeholder="Any questions or requests..."
            value={form.message}
            onChange={handleChange}
            rows={3}
            className={inputClass}
            style={{ ...borderStyle, resize: 'none' }}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-warm text-black font-sans text-[10px] font-medium tracking-[0.3em] uppercase py-5 border-0 mt-2 transition-colors duration-300 hover:bg-warm-light"
          style={{ cursor: 'none' }}
        >
          Send Enquiry →
        </button>
      </form>
    </section>
  )
}
