import { useMemo, useState } from "react"
import { teams, freeDanceJudges, rhythmDanceJudges, recalculateWithout, type Segment } from "../data/scores"

export function WhatIf() {
  const [segment, setSegment] = useState<Segment>("freeDance")
  const [selectedJudge, setSelectedJudge] = useState("FD-J1") // Dabouis by default

  const judges = segment === "freeDance" ? freeDanceJudges : rhythmDanceJudges

  const handleSegmentChange = (seg: Segment) => {
    setSegment(seg)
    if (seg === "freeDance") setSelectedJudge("FD-J1")
    else setSelectedJudge("RD-J5")
  }

  const results = useMemo(
    () => recalculateWithout(selectedJudge, segment),
    [selectedJudge, segment]
  )

  const selectedJudgeInfo = judges.find(j => j.id === selectedJudge)
  const sorted = [...results].sort((a, b) => a.newRank - b.newRank)
  const goldChanged = sorted[0]?.name !== teams.find(t => t.rank === 1)?.name

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="segment-toggle">
          <button
            onClick={() => handleSegmentChange("freeDance")}
            className={segment === "freeDance" ? "active" : ""}
          >
            Free Dance
          </button>
          <button
            onClick={() => handleSegmentChange("rhythmDance")}
            className={segment === "rhythmDance" ? "active" : ""}
          >
            Rhythm Dance
          </button>
        </div>

        <select
          value={selectedJudge}
          onChange={e => setSelectedJudge(e.target.value)}
          className="rounded-xl px-4 py-2 text-sm font-medium"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            color: "var(--text)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {judges.map(j => (
            <option key={j.id} value={j.id}>
              {j.name} ({j.countryCode})
            </option>
          ))}
        </select>
      </div>

      {/* Gold flip banner */}
      {goldChanged && (
        <div className="gold-flip-banner mb-6">
          <div className="flex items-start gap-3">
            <span className="text-3xl">🥇</span>
            <div>
              <div className="text-lg font-bold" style={{ color: "#92400e", fontFamily: "'Instrument Serif', serif" }}>
                Gold medal changes hands
              </div>
              <p className="text-sm mt-1" style={{ color: "#a16207", fontFamily: "'Inter', sans-serif" }}>
                Removing {selectedJudgeInfo?.name} ({selectedJudgeInfo?.countryCode}) from the {segment === "freeDance" ? "Free Dance" : "Rhythm Dance"} panel
                moves <strong>{sorted[0]?.name}</strong> ({sorted[0]?.countryCode}) to first place
                with {sorted[0]?.recalculated.toFixed(2)} points,
                ahead of <strong>{sorted[1]?.name}</strong> ({sorted[1]?.countryCode}) at {sorted[1]?.recalculated.toFixed(2)}.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Results table */}
      <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid var(--border)", background: "var(--surface)" }}>
        <table className="w-full border-collapse text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Rank</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Team</th>
              <th className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Original</th>
              <th className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Recalculated</th>
              <th className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Change</th>
              <th className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Rank</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map(r => {
              const rankDelta = r.originalRank - r.newRank
              const scoreDelta = r.recalculated - r.original
              const isNewGold = r.newRank === 1 && goldChanged
              return (
                <tr
                  key={r.name}
                  style={{
                    borderBottom: "1px solid var(--border)",
                    background: isNewGold ? "#fffbeb" : "transparent",
                  }}
                >
                  <td className="px-4 py-3 font-medium" style={{ fontSize: "16px" }}>
                    {r.newRank === 1 ? "🥇" : r.newRank === 2 ? "🥈" : r.newRank === 3 ? "🥉" : `${r.newRank}`}
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-medium" style={{ color: "var(--text)" }}>{r.name}</span>
                    <span className="ml-2 text-xs" style={{ color: "var(--text-muted)" }}>{r.countryCode}</span>
                  </td>
                  <td className="px-4 py-3 text-center tabular-nums" style={{ color: "var(--text-muted)" }}>
                    {r.original.toFixed(2)}
                  </td>
                  <td className="px-4 py-3 text-center tabular-nums font-semibold" style={{ color: "var(--text)" }}>
                    {r.recalculated.toFixed(2)}
                  </td>
                  <td className={`px-4 py-3 text-center tabular-nums font-medium ${
                    scoreDelta > 0.5 ? "text-emerald-600" : scoreDelta < -0.5 ? "text-red-600" : ""
                  }`} style={Math.abs(scoreDelta) <= 0.5 ? { color: "var(--text-muted)" } : {}}>
                    {scoreDelta >= 0 ? "+" : ""}{scoreDelta.toFixed(2)}
                  </td>
                  <td className="px-4 py-3 text-center font-medium">
                    {rankDelta > 0 && <span className="text-emerald-600">↑{rankDelta}</span>}
                    {rankDelta < 0 && <span className="text-red-600">↓{Math.abs(rankDelta)}</span>}
                    {rankDelta === 0 && <span style={{ color: "var(--text-muted)" }}>—</span>}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
