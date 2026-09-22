function MetricsPill() {
  return (
    <div className="flex h-[29px] w-fit items-center gap-ui-1 rounded-full border border-border-strong px-ui-4 py-[7px]">
      <span className="flex h-[9px] items-center gap-[2px]" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5].map((bar) => (
          <span
            key={bar}
            className={`h-[9px] w-[2px] ${bar < 3 ? 'bg-blue' : 'bg-ink-muted'}`}
          />
        ))}
      </span>
      <span className="text-[12px] font-medium leading-none tracking-[0.24px] text-body-strong">
        METRICS
      </span>
    </div>
  )
}

export default function Metrics() {
  return (
    <section id="roi-calculator" className="bg-white px-card-x py-[64px] sm:py-section lg:px-page">
      <div className="mx-auto grid w-full max-w-site items-center gap-[40px] xl:grid-cols-[minmax(0,515px)_minmax(0,725px)] xl:gap-0">
        <div className="min-w-0 w-full max-w-[515px]">
          <MetricsPill />

          <h2 className="mt-ui-3 max-w-[475px] font-display text-[36px] font-medium leading-[44px] tracking-[-0.672px] text-ink sm:text-[42px] sm:leading-[54px]">
            Calculate Your Team&apos;s AI Reclaim Opportunity
          </h2>

          <p className="mt-[19px] max-w-[480px] text-[16px] font-normal leading-copy tracking-[-0.16px] text-body-strong">
            Estimate how much time and operational cost your business could recover by
            reducing repetitive manual work.
          </p>

          <ul className="mt-ui-5 flex max-w-[500px] list-disc flex-col gap-ui-2 pl-[23px] text-[16px] font-normal leading-[24px] tracking-[-0.16px] text-body-strong marker:text-body-strong">
            <li>Based on average 25% efficiency gains across departments</li>
            <li>Includes workflow automation &amp; custom prompt tooling</li>
          </ul>

          <a
            href="https://cal.com/deploystudio/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[19px] flex h-control w-fit items-center justify-center rounded-[57px] bg-navy px-card-x text-[16px] font-medium leading-copy tracking-[-0.32px] text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
          >
            Book a discovery call
          </a>
        </div>

        <img
          src="/assets/use-case2.svg"
          alt="AI reclaim opportunity calculator showing reclaimed hours, annual value, and capacity equivalents"
          className="block h-auto max-h-[555px] w-full min-w-0 max-w-[725px] justify-self-end rounded-[16px] border border-border object-cover xl:h-[555px]"
        />
      </div>
    </section>
  )
}
