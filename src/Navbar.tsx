const navigationItems = [
  { label: 'Fractional model', href: '#fractional-model' },
  { label: 'Alignment', href: '#alignment' },
  { label: 'Impact areas', href: '#impact-areas' },
  { label: 'ROI calculator', href: '#roi-calculator' },
  { label: 'How it works', href: '#how-it-works' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  return (
    <header className="relative z-40 h-[74px] w-full px-card-x py-ui-5 backdrop-blur-[5px] sm:px-gutter">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-full w-full max-w-[1400px] items-center justify-between"
      >
        <a href="/" aria-label="Deploy home" className="shrink-0">
          <img
            src="assets/deploy-logo.png"
            alt="Deploy"
            className="block h-[26.36px] w-[94px] object-cover"
          />
        </a>

        <div className="hidden items-center justify-center gap-grid min-[1200px]:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[16px] font-normal leading-copy tracking-[-0.16px] text-ink transition-opacity hover:opacity-60 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="https://cal.com/deploystudio/discovery-call"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden h-control shrink-0 items-center justify-center gap-ui-3 rounded-[57px] bg-navy px-card-x text-[16px] font-medium leading-copy tracking-[-0.32px] text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue min-[1200px]:flex"
        >
          <span className="whitespace-nowrap">Book an AI strategy call</span>
          <img
            src="assets/arrow-up-right.svg"
            alt=""
            aria-hidden="true"
            className="block size-[20px]"
          />
        </a>

        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-[60] flex size-[44px] items-center justify-center text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue min-[1200px]:hidden"
        >
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          <span className="relative block h-[18px] w-[22px]" aria-hidden="true">
            <span className={`absolute left-0 top-[2px] h-[2px] w-full rounded-full bg-current transition-transform duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`absolute left-0 top-[9px] h-[2px] w-full rounded-full bg-current transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 top-[16px] h-[2px] w-full rounded-full bg-current transition-transform duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-navy/25 transition-opacity duration-300 min-[1200px]:hidden ${menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-navigation"
        inert={!menuOpen}
        className={`fixed inset-0 z-50 flex h-dvh w-screen flex-col bg-white px-card-y pb-card-y pt-[96px] transition-transform duration-300 ease-out min-[1200px]:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col gap-ui-2">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-[10px] px-ui-4 py-ui-4 text-[18px] font-medium leading-copy text-ink transition-[color,background-color,transform] duration-200 hover:translate-x-[6px] hover:bg-surface hover:text-blue focus-visible:outline-2 focus-visible:outline-blue"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://cal.com/deploystudio/discovery-call"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="mt-card-y flex h-control items-center justify-center gap-ui-3 rounded-[57px] bg-navy px-card-x text-center text-[16px] font-medium leading-copy text-white"
        >
          <span>Book an AI strategy call</span>
          <img src="assets/arrow-up-right.svg" alt="" aria-hidden="true" className="size-[20px]" />
        </a>
      </div>
    </header>
  )
}
import { useEffect, useState } from 'react'
