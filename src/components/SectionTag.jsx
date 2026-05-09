export default function SectionTag({ children, className = '' }) {
  return (
    <p className={`section-tag-line flex items-center gap-5 text-[9px] tracking-[0.4em] uppercase text-warm mb-[60px] ${className}`}>
      {children}
    </p>
  )
}
