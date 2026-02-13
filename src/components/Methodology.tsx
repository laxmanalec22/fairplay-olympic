export function Methodology() {
  return (
    <footer
      className="pt-12 pb-16"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <h2
        className="text-2xl tracking-tight mb-6"
        style={{ color: "var(--text)" }}
      >
        Methodology
      </h2>
      <div
        className="space-y-4 max-w-2xl text-sm leading-relaxed"
        style={{ color: "var(--text-secondary)", fontFamily: "'Inter', sans-serif" }}
      >
        <p>
          This tool displays <strong style={{ color: "var(--text)" }}>deviation from panel mean</strong> for
          each judge–team combination. For each team in each segment, we calculate the average of all
          nine judges' total segment scores (the panel mean), then show how far each individual judge's
          score deviates from that average.
        </p>
        <p>
          A deviation near zero indicates the judge scored close to consensus. Large positive
          or negative deviations indicate a judge scored significantly higher or lower than their
          peers for that team. Consistent directional deviations from one judge toward teams of their
          own nationality may indicate national bias.
        </p>
        <p>
          The "What If?" calculator recalculates combined standings after removing one judge's scores
          from a segment, using the mean of the remaining eight judges as the new segment score.
        </p>
        <p>
          <strong style={{ color: "var(--text)" }}>Data source:</strong> All scores are derived from official ISU
          competition protocols published at{" "}
          <a
            href="https://results.isu.org/results/season2526/owg2026/CAT004EN.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: "var(--accent)" }}
          >
            results.isu.org
          </a>
          . Judge identities and nationalities are from the{" "}
          <a
            href="https://results.isu.org/results/season2526/owg2026/SEG008OF.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: "var(--accent)" }}
          >
            official panel listings
          </a>
          .
        </p>
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          This tool shows statistical patterns in publicly available data. It does not make accusations
          of wrongdoing. Deviations may result from legitimate differences in judging philosophy,
          expertise, or interpretation of performance quality.
        </p>
      </div>

      {/* Site credit */}
      <div
        className="mt-12 text-xs"
        style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }}
      >
        Built with public data in the interest of transparency.
      </div>
    </footer>
  )
}
