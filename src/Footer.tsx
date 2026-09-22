const footerLinks = [
  { label: 'Model', href: '#fractional-model' },
  { label: 'Impact', href: '#impact-areas' },
  { label: 'Process', href: '#how-it-works' },
]

export default function Footer() {
  return (
    <footer className="bg-white px-card-x py-[64px] sm:px-gutter sm:py-section-sm">
      <div className="mx-auto grid w-full max-w-[1340px] items-center gap-card-y sm:gap-grid lg:grid-cols-[1fr_auto_1fr]">
        <div>
          <a href="#" aria-label="Deploy home" className="inline-flex">
            <img
              src="assets/deploy-logo2.svg"
              alt="Deploy"
              className="block h-[42px] w-[148px] object-contain"
            />
          </a>
          <p className="mt-ui-2 text-[16px] font-normal leading-copy tracking-[-0.01em] text-body">
            Your fractional AI operator
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center gap-[40px]">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[16px] font-normal leading-copy tracking-[-0.01em] text-body-strong transition-colors hover:text-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-[14px] font-normal leading-[21px] tracking-[-0.01em] text-[#51515C] lg:justify-self-end lg:text-right">
          &copy; 2026 Deploy AI Operations Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
