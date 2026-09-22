export default function Ready() {
  return (
    <section
      className="relative flex min-h-[400px] items-center overflow-hidden bg-cover bg-center px-card-x py-[64px] sm:px-[40px] sm:py-section-sm"
      style={{ backgroundImage: "url('assets/way-to-work-bg.svg')" }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.12)_62%,rgba(255,255,255,0.92)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[700px] flex-col items-center text-center">
        <h2 className="max-w-[600px] font-display text-[36px] font-medium leading-[44px] tracking-[-0.016em] text-ink sm:text-[42px] sm:leading-[54px]">
          Ready to make AI a part of the way you work?
        </h2>

        <p className="mt-ui-2 max-w-[610px] text-[16px] font-normal leading-copy tracking-[-0.01em] text-body-strong">
          Bring AI into your business with a partner who helps you plan, implement, and
          continuously improve&mdash;not just deploy software.
        </p>

        <a
          href="https://cal.com/deploystudio/discovery-call"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-card-x inline-flex items-center justify-center gap-ui-2 rounded-[57px] bg-navy px-card-x py-ui-4 text-[16px] font-medium leading-copy text-white transition-colors hover:bg-[#172044] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
        >
          <span>Book your AI strategy call</span>
          <img
            src="assets/button-arrow.svg"
            alt=""
            aria-hidden="true"
            className="block size-[20px] shrink-0 brightness-0 invert"
          />
        </a>
      </div>
    </section>
  )
}
