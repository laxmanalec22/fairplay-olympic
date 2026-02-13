import { useMemo, useState } from "react"
import { teams, getJudgesForSegment, getPanelMean, getDeviation, getZScore, type Segment } from "../data/scores"

interface TooltipData {
  x: number
  y: number
  judge: string
  judgeCountry: string
  team: string
  teamCountry: string
  score: number
  mean: number
  deviation: number
  zScore: number
}

function deviationColor(dev: number): string {
  const abs = Math.abs(dev)
  if (abs < 1.0) return "text-emerald-700"
  if (abs < 2.0) return "text-amber-700"
  if (abs < 3.5) return "text-orange-700 font-medium"
  return "text-red-700 font-bold"
}

function deviationBg(dev: number): string {
  const abs = Math.abs(dev)
  if (abs < 1.0) return "rgba(16, 185, 129, 0.08)"
  if (abs < 2.0) return "rgba(245, 158, 11, 0.10)"
  if (abs < 3.5) return "rgba(234, 88, 12, 0.12)"
  return "rgba(220, 38, 38, 0.14)"
}

function isExtremeCell(dev: number): boolean {
  return Math.abs(dev) > 3.5
}

export function Heatmap() {
  const [segment, setSegment] = useState<Segment>("freeDance")
  const [tooltip, setTooltip] = useState<TooltipData | null>(null)

  const judges = useMemo(() => getJudgesForSegment(segment), [segment])

  const data = useMemo(() => {
    return teams.map(team => {
      const segData = team[segment]
      const mean = getPanelMean(segData.scores)
      const cells = segData.scores.map(s => {
        const judge = judges.find(j => j.id === s.judgeId)!
        const dev = getDeviation(s.total, mean)
        const z = getZScore(s.total, segData.scores)
        return { judge, score: s.total, mean, deviation: dev, zScore: z }
      })
      return { team, mean, cells }
    })
  }, [segment, judges])

  return (
    <div>
      {/* Segment toggle */}
      <div className="segment-toggle mb-6">
        <button
          onClick={() => setSegment("freeDance")}
          className={segment === "freeDance" ? "active" : ""}
        >
          Free Dance
        </button>
        <button
          onClick={() => setSegment("rhythmDance")}
          className={segment === "rhythmDance" ? "active" : ""}
        >
          Rhythm Dance
        </button>
      </div>

      {/* Heatmap table */}
      <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid var(--border)", background: "var(--surface)" }}>
        <table className="w-full border-collapse text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <th
                className="sticky left-0 z-10 px-4 py-3 text-left text-xs font-medium uppercase tracking-wider min-w-[200px]"
                style={{ color: "var(--text-muted)", background: "var(--surface)" }}
              >
                Team
              </th>
              {judges.map(j => {
                const isFrench = j.countryCode === "FRA"
                return (
                  <th
                    key={j.id}
                    className="px-2 py-3 text-center min-w-[72px]"
                    style={{
                      background: isFrench ? "rgba(220, 38, 38, 0.04)" : "var(--surface)",
                    }}
                  >
                    <div
                      className="text-xs font-semibold"
                      style={{ color: isFrench ? "#dc2626" : "var(--text-secondary)" }}
                    >
                      {j.countryCode}
                    </div>
                    <div
                      className="text-[10px] truncate max-w-[72px]"
                      style={{ color: "var(--text-muted)" }}
                      title={j.name}
                    >
                      {j.name.split(" ").pop()}
                    </div>
                  </th>
                )
              })}
              <th
                className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider"
                style={{ color: "var(--text-muted)", background: "var(--surface)" }}
              >
                Official
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ team, mean, cells }) => (
              <tr
                key={team.name}
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <td
                  className="sticky left-0 z-10 px-4 py-3 text-sm"
                  style={{ background: "var(--surface)" }}
                >
                  <span className="font-medium" style={{ color: "var(--text)" }}>{team.name}</span>
                  <span className="ml-2 text-xs" style={{ color: "var(--text-muted)" }}>{team.countryCode}</span>
                </td>
                {cells.map(cell => {
                  const isFrenchJudge = cell.judge.countryCode === "FRA"
                  const extreme = isExtremeCell(cell.deviation)
                  return (
                    <td
                      key={cell.judge.id}
                      className={`px-2 py-3 text-center text-xs tabular-nums cursor-default ${deviationColor(cell.deviation)}`}
                      style={{
                        backgroundColor: isFrenchJudge
                          ? extreme
                            ? "rgba(220, 38, 38, 0.12)"
                            : "rgba(220, 38, 38, 0.04)"
                          : deviationBg(cell.deviation),
                        ...(extreme ? {
                          boxShadow: "inset 0 0 0 2px rgba(220, 38, 38, 0.3)",
                          borderRadius: "6px",
                        } : {}),
                      }}
                      onMouseEnter={e => {
                        const rect = (e.target as HTMLElement).getBoundingClientRect()
                        setTooltip({
                          x: rect.left + rect.width / 2,
                          y: rect.top - 8,
                          judge: cell.judge.name,
                          judgeCountry: cell.judge.country,
                          team: team.name,
                          teamCountry: team.country,
                          score: cell.score,
                          mean,
                          deviation: cell.deviation,
                          zScore: cell.zScore,
                        })
                      }}
                      onMouseLeave={() => setTooltip(null)}
                    >
                      {cell.deviation >= 0 ? "+" : ""}{cell.deviation.toFixed(1)}
                    </td>
                  )
                })}
                <td
                  className="px-4 py-3 text-center text-xs tabular-nums font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {team[segment].official.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-5 mt-4 text-xs" style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }}>
        <span className="font-medium">Deviation from panel mean:</span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded" style={{ background: "rgba(16, 185, 129, 0.15)", border: "1px solid rgba(16, 185, 129, 0.3)" }} />
          &lt;1pt
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded" style={{ background: "rgba(245, 158, 11, 0.15)", border: "1px solid rgba(245, 158, 11, 0.3)" }} />
          1–2pt
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded" style={{ background: "rgba(234, 88, 12, 0.15)", border: "1px solid rgba(234, 88, 12, 0.3)" }} />
          2–3.5pt
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded" style={{ background: "rgba(220, 38, 38, 0.18)", border: "2px solid rgba(220, 38, 38, 0.4)" }} />
          &gt;3.5pt
        </span>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="heatmap-tooltip"
          style={{ left: tooltip.x, top: tooltip.y, transform: "translate(-50%, -100%)" }}
        >
          <div className="font-medium" style={{ color: "var(--text)" }}>{tooltip.judge}</div>
          <div style={{ color: "var(--text-muted)", fontSize: "12px" }}>{tooltip.judgeCountry} — scoring {tooltip.team}</div>
          <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1" style={{ fontSize: "12px" }}>
            <span style={{ color: "var(--text-muted)" }}>Score</span>
            <span className="tabular-nums font-medium" style={{ color: "var(--text)" }}>{tooltip.score.toFixed(2)}</span>
            <span style={{ color: "var(--text-muted)" }}>Panel mean</span>
            <span className="tabular-nums font-medium" style={{ color: "var(--text)" }}>{tooltip.mean.toFixed(2)}</span>
            <span style={{ color: "var(--text-muted)" }}>Deviation</span>
            <span className={`tabular-nums font-semibold ${Math.abs(tooltip.deviation) > 2 ? "text-red-600" : "text-emerald-600"}`}>
              {tooltip.deviation >= 0 ? "+" : ""}{tooltip.deviation.toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
