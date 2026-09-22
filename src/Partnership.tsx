function PartnershipPill() {
  return (
    <div className="flex h-[29px] items-center gap-ui-1 rounded-full border border-white/25 bg-white/10 px-ui-4 py-[7px] backdrop-blur-[8px]">
      <span className="flex h-[9px] items-center gap-[2px]" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5].map((bar) => (
          <span
            key={bar}
            className={`h-[9px] w-[2px] ${bar < 3 ? 'bg-[#8ac3ff]' : 'bg-white/40'}`}
          />
        ))}
      </span>
      <span className="text-[12px] font-medium leading-none tracking-[0.24px] text-white">
        THE PARTNERSHIP
      </span>
    </div>
  )
}

export default function Partnership() {
  return (
    <section className="relative flex min-h-[520px] overflow-hidden bg-[linear-gradient(90deg,var(--color-partnership-start),var(--color-partnership-end))] px-card-x py-[64px] text-white sm:min-h-[560px] sm:py-section lg:px-page">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="absolute inset-x-0 top-[56px] h-px bg-partnership-line" />
        <span className="absolute inset-x-0 bottom-[56px] h-px bg-partnership-line" />
        <span className="absolute inset-y-0 left-[60px] w-px bg-partnership-line" />
        <span className="absolute inset-y-0 right-[60px] w-px bg-partnership-line" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[760px] flex-col items-center justify-center text-center">
        <PartnershipPill />

        <h2 className="mt-ui-5 font-display text-[32px] font-medium leading-[40px] tracking-[-0.576px] text-white sm:text-[36px] sm:leading-[44px]">
          Why Businesses Choose Deploy
        </h2>

        <p className="mt-ui-5 max-w-[660px] text-[16px] font-normal leading-[28px] tracking-[-0.16px] text-white">
          Most AI providers deliver tools. Deploy delivers an operating model. As your
          Fractional AI Operator, we stay involved beyond implementation&mdash;helping your
          business improve adoption, optimize workflows, and continuously unlock new
          value from AI.
        </p>

        <p className="mt-ui-5 max-w-[690px] text-[16px] font-normal leading-[28px] tracking-[-0.16px] text-white">
          &ldquo;Because lasting results don&apos;t come from deploying technology once. They come
          from making it part of how your business operates&rdquo;
        </p>

        <a
          href="https://cal.com/deploystudio/discovery-call"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-stack flex items-center justify-center gap-ui-2 rounded-[57px] bg-[#dcecff] px-card-y py-ui-4 text-[16px] font-medium leading-copy tracking-[-0.32px] text-blue transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <span>Book your AI strategy call</span>
          <img
            src="/assets/button-arrow.svg"
            alt=""
            aria-hidden="true"
            className="block size-[20px] shrink-0"
          />
        </a>
      </div>
    </section>
  )
}
