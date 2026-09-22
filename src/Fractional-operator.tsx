const blendedDots = [
  { left: '4%', top: '59%', size: 12 },
  { left: '16%', top: '82%', size: 10 },
  { left: '31%', top: '34%', size: 12 },
  { left: '42%', top: '94%', size: 11 },
  { left: '47%', top: '58%', size: 14 },
  { left: '61%', top: '35%', size: 12 },
  { left: '67%', top: '72%', size: 12 },
  { left: '78%', top: '57%', size: 12 },
  { left: '88%', top: '68%', size: 14 },
  { left: '100%', top: '78%', size: 12 },
]

const aiDots = [
  { left: '4%', top: '68%', size: 12 },
  { left: '19%', top: '20%', size: 13 },
  { left: '35%', top: '70%', size: 14 },
  { left: '51%', top: '35%', size: 13 },
  { left: '67%', top: '12%', size: 14 },
  { left: '83%', top: '59%', size: 13 },
  { left: '99%', top: '29%', size: 13 },
]

const teamDots = [
  { left: '4%', top: '36%', size: 13 },
  { left: '19%', top: '68%', size: 16 },
  { left: '35%', top: '9%', size: 11 },
  { left: '51%', top: '56%', size: 13 },
  { left: '67%', top: '31%', size: 16 },
  { left: '83%', top: '66%', size: 13 },
  { left: '99%', top: '33%', size: 14 },
]

type Dot = { left: string; top: string; size: number }

function DotField({ dots, color }: { dots: Dot[]; color: string }) {
  return (
    <div className="relative h-full w-full" aria-hidden="true">
      {dots.map((dot, index) => (
        <span
          key={`${dot.left}-${dot.top}-${index}`}
          className="absolute block -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  )
}

function SectionMarker() {
  return (
    <div className="flex h-[9px] items-center justify-center gap-[2px]" aria-hidden="true">
      {[0, 1, 2, 3, 4, 5].map((bar) => (
        <span
          key={bar}
          className={`h-[9px] w-[2px] ${bar < 3 ? 'bg-blue' : 'bg-ink-muted'}`}
        />
      ))}
    </div>
  )
}

function MobileOperatorDiagram() {
  return (
    <div className="grid gap-ui-4 rounded-[16px] border border-border bg-surface p-card-x xl:hidden">
      <div className="rounded-[12px] border border-border bg-white p-[16px]">
        <h3 className="text-[12px] font-semibold uppercase leading-[16px] tracking-[0.48px] text-ink">
          Everything blended
        </h3>
        <div className="mt-ui-5 h-[90px] px-ui-4">
          <DotField dots={blendedDots.slice(0, 8)} color="#bfc0c2" />
        </div>
      </div>

      <div className="flex items-center gap-ui-4" aria-hidden="true">
        <span className="h-px flex-1 bg-border" />
        <span className="rounded-full border border-border bg-white px-[16px] py-[8px] text-[12px] font-semibold leading-[16px] tracking-[0.48px] text-ink shadow-[0_4px_14px_rgba(0,0,0,0.06)]">
          DEPLOY
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="grid gap-ui-4 sm:grid-cols-2">
        <div className="rounded-[12px] border border-border bg-white p-[16px]">
          <h3 className="text-[12px] font-semibold uppercase leading-[16px] tracking-[0.48px] text-ink">
            AI handles
          </h3>
          <div className="mt-ui-5 h-[76px] px-ui-4">
            <DotField dots={aiDots} color="#0877e8" />
          </div>
        </div>
        <div className="rounded-[12px] border border-border bg-white p-[16px]">
          <h3 className="text-[12px] font-semibold uppercase leading-[16px] tracking-[0.48px] text-ink">
            Team focuses
          </h3>
          <div className="mt-ui-5 h-[76px] px-ui-4">
            <DotField dots={teamDots} color="#040404" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FractionalOperator() {
  return (
    <section
      id="fractional-model"
      className="bg-white px-card-x py-[64px] sm:py-section-sm lg:px-[120px]"
    >
      <div className="mx-auto flex w-full max-w-[564px] flex-col items-center text-center">
        <SectionMarker />
        <h2 className="mt-ui-6 w-full font-display text-[28px] font-medium leading-[36px] text-ink">
          What is a Fractional AI Operator?
        </h2>
        <p className="mt-[7px] w-full text-[16px] font-normal leading-copy tracking-[-0.16px] text-body-strong">
          Think of Deploy as your outsourced AI function. Instead of hiring a full-time
          Head of AI, you gain an experienced partner who helps your business identify
          opportunities, implement AI across departments, train your teams, and
          continuously improve how work gets done.
        </p>
      </div>

      <div className="mx-auto mt-[32px] w-full max-w-site sm:mt-[40px]">
        <MobileOperatorDiagram />
        <div className="hidden h-[396px] grid-cols-[432px_1fr_84px_1fr_409px] rounded-[16px] border border-border bg-surface px-[77px] py-[47px] xl:grid">
          <div className="flex h-full flex-col">
            <h3 className="text-[12px] font-semibold leading-[16px] uppercase tracking-[0.48px] text-ink">
              Everything blended
            </h3>
            <div className="mt-[74px] h-[161px] pl-[14px]">
              <DotField dots={blendedDots} color="#bfc0c2" />
            </div>
          </div>

          <div />

          <div className="relative flex h-full items-center justify-center">
            <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-border" />
            <span className="relative z-10 rounded-full border border-border bg-white px-[16px] py-[8px] text-[12px] font-semibold leading-[16px] tracking-[0.48px] text-ink shadow-[0_4px_14px_rgba(0,0,0,0.06)]">
              DEPLOY
            </span>
          </div>

          <div />

          <div className="flex h-full flex-col">
            <div className="h-[94px]">
              <h3 className="text-[12px] font-semibold leading-[16px] uppercase tracking-[0.48px] text-ink">
                AI handles
              </h3>
              <div className="mt-[30px] h-[48px] px-[14px]">
                <DotField dots={aiDots} color="#0877e8" />
              </div>
            </div>

            <div className="mt-[76px] h-[100px]">
              <h3 className="text-[12px] font-semibold leading-[16px] uppercase tracking-[0.48px] text-ink">
                Team focuses
              </h3>
              <div className="mt-[30px] h-[54px] px-[14px]">
                <DotField dots={teamDots} color="#040404" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
