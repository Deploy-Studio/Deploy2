const alignmentCards = [
  {
    title: 'AI Without Alignment',
    description: 'Different teams use AI in different ways, creating inconsistent outcomes.',
    icon: '/assets/chatbot.svg',
  },
  {
    title: 'Manual Work',
    description: 'Routine tasks continue to consume valuable time.',
    icon: '/assets/manual-transmission.svg',
  },
  {
    title: 'Disconnected Systems',
    description: "Your business tools don't communicate effectively.",
    icon: '/assets/disconnect.svg',
  },
  {
    title: 'Underused Technology',
    description: 'AI and your existing software can deliver far more value with the right approach.',
    icon: '/assets/technology.svg',
  },
]

function AlignmentPill() {
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
      <span className="whitespace-nowrap text-[12px] font-medium leading-none tracking-[0.24px] text-body-strong">
        OPERATIONAL ALIGNMENT
      </span>
    </div>
  )
}

export default function OperationalAlignment() {
  return (
    <section id="alignment" className="bg-white px-card-x py-[64px] sm:py-section lg:px-page">
      <div className="mx-auto flex w-full max-w-site flex-col items-center">
        <div className="flex w-full flex-col items-center text-center">
          <AlignmentPill />
          <h2 className="mt-ui-5 font-display text-[32px] font-medium leading-[38px] tracking-[-0.576px] text-ink sm:text-[36px] sm:leading-[36px]">
            Making AI work across your business
          </h2>
          <p className="mt-ui-5 text-[16px] font-normal leading-copy tracking-[-0.16px] text-body">
            Built around your people, processes, and systems.
          </p>
        </div>

        <div className="mt-card-x grid w-full grid-cols-1 gap-ui-4 sm:grid-cols-2 sm:gap-card-x xl:grid-cols-4">
          {alignmentCards.map((card) => (
            <article
              key={card.title}
              className="min-h-[194px] w-full rounded-[10px] border border-border bg-surface px-card-x py-[28px] xl:h-[194px] xl:max-w-[295px]"
            >
              <div className="flex size-[40px] items-center justify-center rounded-[6px] border border-border-strong bg-white p-[7px]">
                <img
                  src={card.icon}
                  alt=""
                  aria-hidden="true"
                  className="block size-[24px] object-contain"
                />
              </div>

              <div className="mt-[22px]">
                <h3 className="font-display text-[18px] font-medium leading-[18px] tracking-[-0.288px] text-ink">
                  {card.title}
                </h3>
                <p className="mt-ui-2 text-[15px] font-normal leading-[25px] tracking-[-0.15px] text-body-strong">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
