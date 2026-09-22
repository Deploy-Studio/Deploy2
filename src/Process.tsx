const processSteps = [
  {
    title: 'Discover',
    description: 'Audit your workflows and uncover AI opportunities.',
    deliverable: (
      <>
        Deliverable: AI Opportunity
        <br />
        Assessment
      </>
    ),
    icon: 'assets/discover.svg',
    progress: 1,
  },
  {
    title: 'Design',
    description: 'Prioritize initiatives and build your implementation roadmap.',
    deliverable: (
      <>
        Deliverable: AI Adoption
        <br />
        Blueprint
      </>
    ),
    icon: 'assets/design.svg',
    progress: 2,
  },
  {
    title: 'Deploy',
    description: 'Implement AI solutions, automate workflows, and enable your teams.',
    deliverable: (
      <>
        Deliverable: Live AI Systems &amp;
        <br />
        <span className="whitespace-nowrap">Team Enablement</span>
      </>
    ),
    icon: 'assets/deploy-ai.svg',
    progress: 3,
  },
  {
    title: 'Operate',
    description: 'Continuously optimize, measure adoption, and identify new opportunities.',
    deliverable: 'Deliverable: Ongoing AI Operations',
    icon: 'assets/operate.svg',
    progress: 4,
  },
]

function ProcessPill() {
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
        PROCESS
      </span>
    </div>
  )
}

export default function Process() {
  return (
    <section
      id="how-it-works"
      className="bg-white px-card-x py-[64px] sm:py-section lg:px-[28px] xl:px-section-sm"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <ProcessPill />
        <h2 className="mt-ui-2 font-display text-[36px] font-medium leading-[46px] tracking-[-1.6px] text-[#262626] sm:text-[42px] sm:leading-[58px]">
          How Deploy Works
        </h2>

        <div className="mt-grid rounded-[15px] border border-border p-[7px]">
          <div className="grid grid-cols-1 gap-ui-4 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <article
                key={step.title}
                className="flex min-h-[250px] min-w-0 flex-col rounded-[10px] border border-border bg-[#FAFAFA] px-[16px] pt-[16px] pb-[20px] xl:h-[250px]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex size-[40px] items-center justify-center overflow-hidden rounded-[6px] border border-border bg-white shadow-[0_4px_12px_rgba(4,4,4,0.05)]">
                    <img
                      src={step.icon}
                      alt=""
                      aria-hidden="true"
                      className="block size-[20px] object-contain"
                    />
                  </div>

                  <div className="mt-[16px] flex h-[9px] items-center gap-[2px]" aria-hidden="true">
                    {[0, 1, 2, 3].map((bar) => (
                      <span
                        key={bar}
                        className={`h-[9px] w-[2px] ${bar < step.progress ? 'bg-blue' : 'bg-ink-muted'}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-card-y">
                  <h3 className="font-display text-[20px] font-medium leading-[26px] tracking-[-0.016em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-[4px] text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-body-strong">
                    {step.description}
                  </p>
                </div>

                <div className="mt-[6px] rounded-[8px] border border-border bg-white p-[14px]">
                  <p className="text-[13px] font-normal leading-[20px] tracking-[-0.01em] text-ink">
                    {step.deliverable}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
