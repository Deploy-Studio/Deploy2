type StandardCardProps = {
  title: string
  description: string
  image: string
  width: number
  imageWidth: number
}

const firstRowCards: StandardCardProps[] = [
  {
    title: 'AI Workflow Automation',
    description: 'Reduce repetitive work and manual handoffs.',
    image: '/assets/ai-workflow.svg',
    width: 327,
    imageWidth: 325,
  },
  {
    title: 'AI Knowledge Assistants',
    description: 'Give every employee instant access to company knowledge.',
    image: '/assets/ai-knowledge.svg',
    width: 327,
    imageWidth: 325,
  },
]

const secondRowCards: StandardCardProps[] = [
  {
    title: 'Client Experience',
    description: 'Automate reporting, invoicing, and approvals.',
    image: '/assets/client-experience.svg',
    width: 295,
    imageWidth: 293,
  },
  {
    title: 'Marketing Operations',
    description: 'Accelerate content creation and campaign execution.',
    image: '/assets/marketing-operation.svg',
    width: 295,
    imageWidth: 293,
  },
  {
    title: 'Delivery Operations',
    description: 'Keep projects moving through connected systems.',
    image: '/assets/delivery-operation.svg',
    width: 295,
    imageWidth: 293,
  },
  {
    title: 'Executive AI Advisory',
    description: 'Develop a practical roadmap for long-term AI success.',
    image: '/assets/executive-ai.svg',
    width: 295,
    imageWidth: 293,
  },
]

function CapabilitiesPill() {
  return (
    <div className="flex h-[29px] items-center gap-ui-1 rounded-full border border-border-strong px-ui-4 py-[7px]">
      <span className="flex h-[9px] items-center gap-[2px]" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5].map((bar) => (
          <span
            key={bar}
            className={`h-[9px] w-[2px] ${bar < 3 ? 'bg-blue' : 'bg-ink-muted'}`}
          />
        ))}
      </span>
      <span className="text-[12px] font-medium leading-none tracking-[0.24px] text-body-strong">
        CAPABILITIES
      </span>
    </div>
  )
}

function StandardCard({ title, description, image, width, imageWidth }: StandardCardProps) {
  const cardWidthClass = width === 327 ? 'xl:max-w-[327px]' : 'xl:max-w-[295px]'
  const imageWidthClass = imageWidth === 325 ? 'xl:max-w-[325px]' : 'xl:max-w-[293px]'

  return (
    <article
      className={`h-[346px] w-full overflow-hidden rounded-[12px] border border-card-border bg-white min-[1440px]:shrink-0 ${cardWidthClass}`}
    >
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className={`block h-[230px] w-full object-contain object-top ${imageWidthClass}`}
      />
      <div className="p-[16px]">
        <h3 className="font-display text-[18px] font-medium leading-[24px] tracking-[-0.288px] text-ink">
          {title}
        </h3>
        <p className="mt-[4px] text-[15px] font-normal leading-[24px] tracking-[-0.3px] text-body">
          {description}
        </p>
      </div>
    </article>
  )
}

function FinanceCard() {
  return (
    <article className="flex w-full flex-col-reverse gap-ui-4 overflow-hidden rounded-[16px] border border-card-border bg-[#030714] p-[12px] xl:h-[346px] xl:max-w-[546px] xl:flex-row xl:gap-0 xl:pt-[11px] xl:pr-[11px] xl:pb-[11px] xl:pl-[19px] min-[1440px]:shrink-0">
      <div className="flex min-w-0 flex-1 flex-col justify-end p-[4px] xl:p-0 xl:pb-[4px]">
        <h3 className="font-display text-[18px] font-medium leading-[24px] tracking-[-0.288px] text-white">
          Finance Operations
        </h3>
        <p className="mt-[4px] text-[15px] font-normal leading-[24px] tracking-[-0.3px] text-white/80">
          Automate reporting, invoicing, and approvals
        </p>
      </div>
      <img
        src="/assets/metrics.svg"
        alt="Finance operations dashboard"
        className="mx-auto block h-auto w-full max-w-[289px] shrink-0 rounded-[12px] object-contain xl:ml-[23px] xl:h-[322px] xl:w-[289px]"
      />
    </article>
  )
}

export default function Capabilities() {
  return (
    <section id="impact-areas" className="bg-white px-card-x py-[64px] sm:py-section lg:px-page">
      <div className="mx-auto w-full max-w-site">
        <div className="flex flex-col items-center text-center">
          <CapabilitiesPill />
          <h2 className="mt-ui-1 font-display text-[36px] font-medium leading-[44px] tracking-[-0.672px] text-ink sm:text-[42px] sm:leading-[54px]">
            Where we create impact
          </h2>
          <p className="mt-[2px] text-[16px] font-normal leading-copy tracking-[-0.16px] text-body">
            End-to-end AI execution and enablement for modern business teams.
          </p>
        </div>

        <div className="mt-grid w-full">
          <div className="flex w-full flex-wrap justify-center gap-ui-4 sm:gap-card-x xl:grid xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_546px] xl:justify-stretch">
            {firstRowCards.map((card) => (
              <StandardCard key={card.title} {...card} />
            ))}
            <FinanceCard />
          </div>

          <div className="mt-ui-4 flex w-full flex-wrap justify-center gap-ui-4 sm:mt-card-y sm:gap-card-x xl:grid xl:grid-cols-4 xl:justify-stretch">
            {secondRowCards.map((card) => (
              <StandardCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
