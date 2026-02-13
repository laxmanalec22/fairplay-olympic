export function KeyStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
      <StatCard
        number="01"
        label="The majority view"
        value="5 of 9"
        unit="judges"
        detail="preferred Chock/Bates (USA) over Fournier Beaudry/Cizeron (FRA)"
        accent="var(--accent)"
        accentBg="var(--accent-light)"
      />
      <StatCard
        number="02"
        label="The margin"
        value="1.43"
        unit="points"
        detail="separated gold from silver — smaller than a single judge's deviation"
        accent="var(--text-secondary)"
        accentBg="var(--surface-2)"
      />
      <StatCard
        number="03"
        label="The swing"
        value="13.64"
        unit="points"
        detail="total delta between Dabouis's scores for France vs. the United States"
        accent="#dc2626"
        accentBg="#fef2f2"
      />
      <StatCard
        number="04"
        label="The anomaly"
        value="6.37σ"
        unit=""
        detail="standard deviations from the panel mean — a 1-in-a-billion event"
        accent="#b45309"
        accentBg="#fffbeb"
      />
    </div>
  )
}

function StatCard({ number, label, value, unit, detail, accent, accentBg }: {
  number: string
  label: string
  value: string
  unit: string
  detail: string
  accent: string
  accentBg: string
}) {
  return (
    <div
      className="stat-card rounded-2xl p-6 md:p-7"
      style={{
        background: accentBg,
        border: `1px solid color-mix(in srgb, ${accent} 15%, transparent)`,
      }}
    >
      <div className="flex items-baseline gap-3 mb-3">
        <span
          className="text-xs font-semibold tracking-wider"
          style={{ color: accent, fontFamily: "'Inter', sans-serif", opacity: 0.6 }}
        >
          {number}
        </span>
        <span
          className="text-xs font-medium uppercase tracking-wider"
          style={{ color: accent, fontFamily: "'Inter', sans-serif" }}
        >
          {label}
        </span>
      </div>
      <div className="flex items-baseline gap-2 mb-2">
        <span
          className="text-4xl md:text-5xl font-normal tabular-nums tracking-tight"
          style={{ color: accent, fontFamily: "'Instrument Serif', serif" }}
        >
          {value}
        </span>
        {unit && (
          <span
            className="text-sm font-medium"
            style={{ color: accent, fontFamily: "'Inter', sans-serif", opacity: 0.7 }}
          >
            {unit}
          </span>
        )}
      </div>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--text-secondary)", fontFamily: "'Inter', sans-serif" }}
      >
        {detail}
      </p>
    </div>
  )
}
