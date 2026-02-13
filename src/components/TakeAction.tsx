export function TakeAction() {
  return (
    <section>
      <h2
        className="text-3xl md:text-4xl tracking-tight mb-4"
        style={{ color: "var(--text)" }}
      >
        What You Can Do
      </h2>
      <p
        className="text-base leading-relaxed max-w-2xl mb-8"
        style={{ color: "var(--text-secondary)", fontFamily: "'Inter', sans-serif" }}
      >
        Over 14,000 people have already signed petitions demanding an investigation.
        The ISU has not acted. Transparency requires public pressure.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ActionCard
          emoji="📣"
          title="Share the data"
          description="Post this analysis on social media. Tag @ISaborci and @SkateCanada. Use #FairPlay2026."
        />
        <ActionCard
          emoji="✍️"
          title="Sign the petition"
          description="Join 14,000+ signatures demanding the ISU investigate the scoring patterns from Milano Cortina."
          link="https://www.change.org"
          linkText="View petitions"
        />
        <ActionCard
          emoji="📧"
          title="Contact the ISU"
          description="Email the ISU Ethics Commission directly. Respectful, evidence-based messages carry weight."
        />
      </div>
    </section>
  )
}

function ActionCard({ emoji, title, description, link, linkText }: {
  emoji: string
  title: string
  description: string
  link?: string
  linkText?: string
}) {
  return (
    <div
      className="rounded-2xl p-6"
      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
    >
      <span className="text-2xl">{emoji}</span>
      <h3
        className="text-lg mt-3 mb-2"
        style={{ color: "var(--text)", fontFamily: "'Instrument Serif', serif" }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--text-secondary)", fontFamily: "'Inter', sans-serif" }}
      >
        {description}
      </p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-sm font-medium underline"
          style={{ color: "var(--accent)", fontFamily: "'Inter', sans-serif" }}
        >
          {linkText} →
        </a>
      )}
    </div>
  )
}
