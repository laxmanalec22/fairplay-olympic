interface ShareButtonProps {
  variant: "inline" | "full"
  onCopy: () => void
}

const TWEET_TEXT = encodeURIComponent(
  "One French judge scored a 13.64-point swing (6.37σ — 1 in a billion) at the Olympics.\n\nRemove her scores, and gold flips from France to USA.\n\nSee the data:"
)

export function ShareButton({ variant, onCopy }: ShareButtonProps) {
  const url = encodeURIComponent(window.location.href)

  if (variant === "inline") {
    return (
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={`https://twitter.com/intent/tweet?text=${TWEET_TEXT}&url=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all"
          style={{
            background: "var(--text)",
            color: "white",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <XIcon />
          Share on X
        </a>
        <button
          onClick={() => {
            navigator.clipboard.writeText(window.location.href)
            onCopy()
          }}
          className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all"
          style={{
            background: "var(--surface)",
            color: "var(--text-secondary)",
            border: "1px solid var(--border)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <LinkIcon />
          Copy link
        </button>
      </div>
    )
  }

  // Full variant — larger, more prominent
  return (
    <div
      className="rounded-2xl p-8 md:p-10 text-center"
      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
    >
      <h3
        className="text-2xl md:text-3xl tracking-tight mb-3"
        style={{ color: "var(--text)" }}
      >
        Share this analysis
      </h3>
      <p
        className="text-sm mb-6 max-w-md mx-auto"
        style={{ color: "var(--text-secondary)", fontFamily: "'Inter', sans-serif" }}
      >
        Help bring transparency to Olympic judging. The data speaks for itself.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href={`https://twitter.com/intent/tweet?text=${TWEET_TEXT}&url=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all"
          style={{
            background: "var(--text)",
            color: "white",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <XIcon />
          Share on X
        </a>
        <button
          onClick={() => {
            navigator.clipboard.writeText(window.location.href)
            onCopy()
          }}
          className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all"
          style={{
            background: "var(--surface-2)",
            color: "var(--text-secondary)",
            border: "1px solid var(--border)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <LinkIcon />
          Copy link
        </button>
      </div>
    </div>
  )
}

function XIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.07-9.07l-1.757 1.757a4.5 4.5 0 010 6.364l4.5-4.5a4.5 4.5 0 00-6.364-6.364z" />
    </svg>
  )
}
