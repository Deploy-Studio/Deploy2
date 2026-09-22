const benefits = [
  { label: 'Increase team productivity', icon: 'assets/trend2.svg' },
  { label: 'Reduces operation cost', icon: 'assets/dollar-circle2.svg' },
  { label: 'Turn AI into measurable business results', icon: 'assets/verify2.svg' },
]

export default function Hero() {
  return (
    <section className="relative -mt-[74px] flex min-h-[680px] overflow-hidden px-card-x pt-[150px] pb-[64px] sm:min-h-[740px] sm:pt-[190px] lg:min-h-[800px] lg:pt-[239px] lg:pb-section-sm">
      <img
        src="assets/hero-background.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-white/60" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-[670px] flex-col items-center text-center">
        <h1 className="hero-title-enter max-w-[670px] font-display text-[38px] font-medium leading-[46px] capitalize text-ink sm:text-[46px] sm:leading-[58px] lg:text-[50px] lg:leading-[65px]">
          Your fractional AI operator for automating the work that slows you down
        </h1>

        <p className="hero-copy-enter mt-ui-7 max-w-[600px] text-[16px] font-normal leading-copy tracking-[-0.16px] text-body">
          Deploy works alongside your leadership team to identify AI opportunities,
          redesign workflows, implement practical solutions, and equip your teams to
          use AI with confidence.
        </p>

        <ul className="mt-ui-6 flex flex-wrap items-center justify-center gap-ui-2 md:w-max md:flex-nowrap">
          {benefits.map((benefit) => (
            <li
              key={benefit.label}
              className="flex max-w-full items-center gap-ui-1 rounded-[8px] bg-mist py-ui-1 pl-ui-1 pr-ui-4 text-[14px] leading-[24px] tracking-[-0.48px] text-ink backdrop-blur-[10px]"
            >
              <img
                src={benefit.icon}
                alt=""
                aria-hidden="true"
                className="block size-[24px] shrink-0 object-contain"
              />
              <span className="min-w-0 sm:whitespace-nowrap">{benefit.label}</span>
            </li>
          ))}
        </ul>

        <a
          href="https://cal.com/deploystudio/discovery-call"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-stack flex h-control items-center justify-center gap-ui-3 rounded-[57px] bg-navy px-card-x text-[16px] font-medium leading-copy tracking-[-0.32px] text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
        >
          <span className="whitespace-nowrap">Book an AI strategy call</span>
          <img
            src="assets/arrow-up-right.svg"
            alt=""
            aria-hidden="true"
            className="block size-[20px]"
          />
        </a>
      </div>
    </section>
  )
}
