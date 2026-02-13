import { useState } from "react"
import { Heatmap } from "./components/Heatmap"
import { WhatIf } from "./components/WhatIf"
import { KeyStats } from "./components/KeyStats"
import { Methodology } from "./components/Methodology"
import { ShareButton } from "./components/ShareButton"
import { TakeAction } from "./components/TakeAction"
import "./index.css"

function App() {
  const [toast, setToast] = useState(false)

  const showToast = () => {
    setToast(true)
    setTimeout(() => setToast(false), 2000)
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <div className="max-w-4xl mx-auto px-5 md:px-8 py-12 md:py-20">

        {/* Header */}
        <header className="mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-lg">⚖️</span>
            <span className="text-sm font-medium tracking-widest uppercase" style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }}>
              Fair Play
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6" style={{ color: "var(--text)" }}>
            One Judge Changed<br />the Gold Medal
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: "var(--text-secondary)", fontFamily: "'Inter', sans-serif" }}>
            A statistical analysis of judging bias in Olympic ice dance at Milano Cortina 2026, using official ISU scoring data.
          </p>
        </header>

        {/* Key Stats */}
        <KeyStats />

        {/* Share CTA #1 — above the fold */}
        <div className="mt-12 mb-20 md:mb-28">
          <ShareButton variant="inline" onCopy={showToast} />
        </div>

        {/* Narrative bridge to heatmap */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl tracking-tight mb-4" style={{ color: "var(--text)" }}>
            The Evidence
          </h2>
          <p className="text-base leading-relaxed max-w-2xl mb-6" style={{ color: "var(--text-secondary)", fontFamily: "'Inter', sans-serif" }}>
            The heatmap below shows how each judge's score deviated from the panel average for every team.
            Green means close to consensus. Red means far from it. Look at the French judge's column.
          </p>
        </section>

        {/* Heatmap */}
        <Heatmap />

        {/* Pull quote */}
        <div className="my-16 md:my-24">
          <blockquote className="pull-quote">
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--accent)", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
              Dabouis's scoring for France deviated 6.37 standard deviations from the panel mean.
              In statistics, anything above 3&sigma; is considered extraordinary.
              A 6.37&sigma; event occurs roughly once in a billion observations.
            </p>
          </blockquote>
        </div>

        {/* Narrative bridge to What If */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl tracking-tight mb-4" style={{ color: "var(--text)" }}>
            The Proof
          </h2>
          <p className="text-base leading-relaxed max-w-2xl mb-6" style={{ color: "var(--text-secondary)", fontFamily: "'Inter', sans-serif" }}>
            Remove any single judge from the panel and see how the combined results change.
            When you remove the French judge, the gold medal flips.
          </p>
        </section>

        {/* What If Calculator */}
        <WhatIf />

        {/* Historical context */}
        <div className="mt-16 md:mt-24 mb-16 md:mb-24 rounded-2xl p-6 md:p-8" style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)", fontFamily: "'Inter', sans-serif" }}>
            <strong style={{ color: "var(--text)" }}>Historical parallel:</strong> The last time Olympic ice dance judging was this controversial,
            it was the 2002 Salt Lake City scandal — also involving a French judge. That scandal led to the
            entire scoring system being replaced. The ISU has stated it has "full confidence in the scores"
            from Milano Cortina and has not opened an investigation.
          </p>
        </div>

        {/* Take Action section */}
        <TakeAction />

        {/* Share CTA #2 — bottom of page */}
        <div className="mt-16 md:mt-20 mb-16">
          <ShareButton variant="full" onCopy={showToast} />
        </div>

        {/* Methodology */}
        <Methodology />
      </div>

      {/* Toast notification */}
      <div className={`toast ${toast ? "visible" : ""}`}>
        Link copied to clipboard
      </div>
    </div>
  )
}

export default App
