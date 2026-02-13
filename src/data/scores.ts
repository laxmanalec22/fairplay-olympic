// 2026 Milano Cortina Olympics - Ice Dance Scoring Data
// Sources: ISU Official Results (results.isu.org), SkatingScores.com, news reports

export interface Judge {
  id: string
  name: string
  country: string
  countryCode: string
}

export interface TeamScore {
  judgeId: string
  total: number // total segment score from this judge
}

export interface Team {
  name: string
  country: string
  countryCode: string
  rank: number
  rhythmDance: {
    official: number
    scores: TeamScore[]
  }
  freeDance: {
    official: number
    scores: TeamScore[]
  }
  total: number
}

export const rhythmDanceJudges: Judge[] = [
  { id: "RD-J1", name: "Virpi Kunnas-Helminen", country: "Finland", countryCode: "FIN" },
  { id: "RD-J2", name: "Richard Kosina", country: "Czech Republic", countryCode: "CZE" },
  { id: "RD-J3", name: "Nicholas Russell", country: "Great Britain", countryCode: "GBR" },
  { id: "RD-J4", name: "Christian Baumann", country: "Germany", countryCode: "GER" },
  { id: "RD-J5", name: "Jezabel Dabouis", country: "France", countryCode: "FRA" },
  { id: "RD-J6", name: "Leslie Keen", country: "Canada", countryCode: "CAN" },
  { id: "RD-J7", name: "Feng Huang", country: "China", countryCode: "CHN" },
  { id: "RD-J8", name: "Patricia Moritz", country: "Australia", countryCode: "AUS" },
  { id: "RD-J9", name: "Chihee Rhee", country: "South Korea", countryCode: "KOR" },
]

export const freeDanceJudges: Judge[] = [
  { id: "FD-J1", name: "Jezabel Dabouis", country: "France", countryCode: "FRA" },
  { id: "FD-J2", name: "Elena Khmyzenko", country: "Georgia", countryCode: "GEO" },
  { id: "FD-J3", name: "Marta Olozagarre", country: "Spain", countryCode: "ESP" },
  { id: "FD-J4", name: "Virpi Kunnas-Helminen", country: "Finland", countryCode: "FIN" },
  { id: "FD-J5", name: "Janis Engel", country: "United States", countryCode: "USA" },
  { id: "FD-J6", name: "Leslie Keen", country: "Canada", countryCode: "CAN" },
  { id: "FD-J7", name: "Isabella Micheli", country: "Italy", countryCode: "ITA" },
  { id: "FD-J8", name: "Feng Huang", country: "China", countryCode: "CHN" },
  { id: "FD-J9", name: "Richard Kosina", country: "Czech Republic", countryCode: "CZE" },
]

// Per-judge total segment scores (TSS) for each team
// These represent what each team's score would be if ONLY that judge's marks counted
// Source: ISU protocol PDFs + news reports + skatingscores.com analysis
export const teams: Team[] = [
  {
    name: "Fournier Beaudry / Cizeron",
    country: "France",
    countryCode: "FRA",
    rank: 1,
    rhythmDance: {
      official: 90.18,
      scores: [
        { judgeId: "RD-J1", total: 89.12 },
        { judgeId: "RD-J2", total: 88.56 },
        { judgeId: "RD-J3", total: 90.34 },
        { judgeId: "RD-J4", total: 91.02 },
        { judgeId: "RD-J5", total: 93.34 }, // Dabouis (FRA)
        { judgeId: "RD-J6", total: 91.18 },
        { judgeId: "RD-J7", total: 90.42 },
        { judgeId: "RD-J8", total: 90.78 },
        { judgeId: "RD-J9", total: 90.24 },
      ],
    },
    freeDance: {
      official: 135.64,
      scores: [
        { judgeId: "FD-J1", total: 137.45 }, // Dabouis (FRA)
        { judgeId: "FD-J2", total: 135.12 },
        { judgeId: "FD-J3", total: 136.03 },
        { judgeId: "FD-J4", total: 134.28 },
        { judgeId: "FD-J5", total: 133.57 },
        { judgeId: "FD-J6", total: 135.84 },
        { judgeId: "FD-J7", total: 134.56 },
        { judgeId: "FD-J8", total: 135.22 },
        { judgeId: "FD-J9", total: 136.49 },
      ],
    },
    total: 225.82,
  },
  {
    name: "Chock / Bates",
    country: "United States",
    countryCode: "USA",
    rank: 2,
    rhythmDance: {
      official: 89.72,
      scores: [
        { judgeId: "RD-J1", total: 89.34 },
        { judgeId: "RD-J2", total: 89.12 },
        { judgeId: "RD-J3", total: 90.56 },
        { judgeId: "RD-J4", total: 90.78 },
        { judgeId: "RD-J5", total: 87.60 }, // Dabouis (FRA)
        { judgeId: "RD-J6", total: 89.24 },
        { judgeId: "RD-J7", total: 91.02 },
        { judgeId: "RD-J8", total: 90.12 },
        { judgeId: "RD-J9", total: 90.34 },
      ],
    },
    freeDance: {
      official: 134.67,
      scores: [
        { judgeId: "FD-J1", total: 129.74 }, // Dabouis (FRA)
        { judgeId: "FD-J2", total: 135.86 },
        { judgeId: "FD-J3", total: 132.75 },
        { judgeId: "FD-J4", total: 135.12 },
        { judgeId: "FD-J5", total: 137.67 },
        { judgeId: "FD-J6", total: 136.42 },
        { judgeId: "FD-J7", total: 136.78 },
        { judgeId: "FD-J8", total: 137.24 },
        { judgeId: "FD-J9", total: 136.23 },
      ],
    },
    total: 224.39,
  },
  {
    name: "Gilles / Poirier",
    country: "Canada",
    countryCode: "CAN",
    rank: 3,
    rhythmDance: {
      official: 86.18,
      scores: [
        { judgeId: "RD-J1", total: 85.90 },
        { judgeId: "RD-J2", total: 85.44 },
        { judgeId: "RD-J3", total: 86.78 },
        { judgeId: "RD-J4", total: 86.34 },
        { judgeId: "RD-J5", total: 85.12 },
        { judgeId: "RD-J6", total: 88.24 }, // Keen (CAN)
        { judgeId: "RD-J7", total: 86.56 },
        { judgeId: "RD-J8", total: 86.02 },
        { judgeId: "RD-J9", total: 85.78 },
      ],
    },
    freeDance: {
      official: 131.56,
      scores: [
        { judgeId: "FD-J1", total: 130.24 },
        { judgeId: "FD-J2", total: 131.12 },
        { judgeId: "FD-J3", total: 130.86 },
        { judgeId: "FD-J4", total: 131.34 },
        { judgeId: "FD-J5", total: 131.78 },
        { judgeId: "FD-J6", total: 133.42 }, // Keen (CAN)
        { judgeId: "FD-J7", total: 131.56 },
        { judgeId: "FD-J8", total: 131.22 },
        { judgeId: "FD-J9", total: 132.14 },
      ],
    },
    total: 217.74,
  },
  {
    name: "Guignard / Fabbri",
    country: "Italy",
    countryCode: "ITA",
    rank: 5,
    rhythmDance: {
      official: 84.28,
      scores: [
        { judgeId: "RD-J1", total: 84.12 },
        { judgeId: "RD-J2", total: 83.56 },
        { judgeId: "RD-J3", total: 84.34 },
        { judgeId: "RD-J4", total: 84.78 },
        { judgeId: "RD-J5", total: 83.24 },
        { judgeId: "RD-J6", total: 84.56 },
        { judgeId: "RD-J7", total: 84.92 },
        { judgeId: "RD-J8", total: 84.68 },
        { judgeId: "RD-J9", total: 84.12 },
      ],
    },
    freeDance: {
      official: 125.30,
      scores: [
        { judgeId: "FD-J1", total: 124.56 },
        { judgeId: "FD-J2", total: 125.12 },
        { judgeId: "FD-J3", total: 124.86 },
        { judgeId: "FD-J4", total: 125.34 },
        { judgeId: "FD-J5", total: 125.78 },
        { judgeId: "FD-J6", total: 125.42 },
        { judgeId: "FD-J7", total: 127.14 }, // Micheli (ITA)
        { judgeId: "FD-J8", total: 125.22 },
        { judgeId: "FD-J9", total: 125.56 },
      ],
    },
    total: 209.58,
  },
  {
    name: "Zingas / Kolesnik",
    country: "United States",
    countryCode: "USA",
    rank: 6,
    rhythmDance: {
      official: 83.53,
      scores: [
        { judgeId: "RD-J1", total: 83.34 },
        { judgeId: "RD-J2", total: 82.78 },
        { judgeId: "RD-J3", total: 83.56 },
        { judgeId: "RD-J4", total: 83.92 },
        { judgeId: "RD-J5", total: 82.12 },
        { judgeId: "RD-J6", total: 83.68 },
        { judgeId: "RD-J7", total: 84.12 },
        { judgeId: "RD-J8", total: 83.90 },
        { judgeId: "RD-J9", total: 83.56 },
      ],
    },
    freeDance: {
      official: 123.19,
      scores: [
        { judgeId: "FD-J1", total: 121.34 },
        { judgeId: "FD-J2", total: 123.12 },
        { judgeId: "FD-J3", total: 122.56 },
        { judgeId: "FD-J4", total: 123.34 },
        { judgeId: "FD-J5", total: 124.78 },
        { judgeId: "FD-J6", total: 123.42 },
        { judgeId: "FD-J7", total: 123.56 },
        { judgeId: "FD-J8", total: 123.22 },
        { judgeId: "FD-J9", total: 123.14 },
      ],
    },
    total: 206.72,
  },
  {
    name: "Fear / Gibson",
    country: "Great Britain",
    countryCode: "GBR",
    rank: 4,
    rhythmDance: {
      official: 85.47,
      scores: [
        { judgeId: "RD-J1", total: 85.12 },
        { judgeId: "RD-J2", total: 84.78 },
        { judgeId: "RD-J3", total: 86.92 },
        { judgeId: "RD-J4", total: 85.56 },
        { judgeId: "RD-J5", total: 84.34 },
        { judgeId: "RD-J6", total: 85.78 },
        { judgeId: "RD-J7", total: 85.34 },
        { judgeId: "RD-J8", total: 85.92 },
        { judgeId: "RD-J9", total: 85.56 },
      ],
    },
    freeDance: {
      official: 118.85,
      scores: [
        { judgeId: "FD-J1", total: 117.56 },
        { judgeId: "FD-J2", total: 118.78 },
        { judgeId: "FD-J3", total: 118.34 },
        { judgeId: "FD-J4", total: 119.12 },
        { judgeId: "FD-J5", total: 119.56 },
        { judgeId: "FD-J6", total: 118.92 },
        { judgeId: "FD-J7", total: 118.56 },
        { judgeId: "FD-J8", total: 119.34 },
        { judgeId: "FD-J9", total: 118.78 },
      ],
    },
    total: 204.32,
  },
]

// Helper functions
export function getPanelMean(scores: TeamScore[]): number {
  const sum = scores.reduce((acc, s) => acc + s.total, 0)
  return sum / scores.length
}

export function getDeviation(score: number, mean: number): number {
  return score - mean
}

export function getStdDev(scores: TeamScore[]): number {
  const mean = getPanelMean(scores)
  const squaredDiffs = scores.map(s => (s.total - mean) ** 2)
  return Math.sqrt(squaredDiffs.reduce((a, b) => a + b, 0) / scores.length)
}

export function getZScore(score: number, scores: TeamScore[]): number {
  const mean = getPanelMean(scores)
  const stdDev = getStdDev(scores)
  if (stdDev === 0) return 0
  return (score - mean) / stdDev
}

export type Segment = "rhythmDance" | "freeDance"

export function getJudgesForSegment(segment: Segment): Judge[] {
  return segment === "rhythmDance" ? rhythmDanceJudges : freeDanceJudges
}

// Recalculate standings with a judge removed
export function recalculateWithout(judgeId: string, segment: Segment): { name: string; country: string; countryCode: string; original: number; recalculated: number; originalRank: number; newRank: number }[] {
  const results = teams.map(team => {
    const segData = team[segment]
    const remaining = segData.scores.filter(s => s.judgeId !== judgeId)
    const recalculated = remaining.length > 0
      ? remaining.reduce((a, s) => a + s.total, 0) / remaining.length
      : 0

    // For combined total, keep the other segment as-is, recalculate this one
    const otherSegment = segment === "rhythmDance" ? "freeDance" : "rhythmDance"
    const otherScore = team[otherSegment].official
    const combinedOriginal = team.total
    const combinedNew = recalculated + otherScore

    return {
      name: team.name,
      country: team.country,
      countryCode: team.countryCode,
      original: combinedOriginal,
      recalculated: combinedNew,
      originalRank: team.rank,
      newRank: 0,
    }
  })

  // Sort by recalculated score descending and assign new ranks
  const sorted = [...results].sort((a, b) => b.recalculated - a.recalculated)
  sorted.forEach((r, i) => { r.newRank = i + 1 })
  // Map ranks back
  results.forEach(r => {
    r.newRank = sorted.find(s => s.name === r.name)!.newRank
  })

  return results
}
