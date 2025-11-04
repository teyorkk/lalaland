// Utility functions for consistent animations across server and client

// Simple hash function to generate consistent pseudo-random values
function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32-bit integer
  }
  return Math.abs(hash)
}

// Generate consistent pseudo-random number based on seed
export function seededRandom(seed: string): number {
  const hash = hashString(seed)
  return (hash % 1000) / 1000 // Returns value between 0 and 1
}

// Generate consistent position for floating elements
export function generatePosition(seed: string, index: number) {
  const random1 = seededRandom(`${seed}-${index}-1`)
  const random2 = seededRandom(`${seed}-${index}-2`)
  return {
    left: `${random1 * 100}%`,
    top: `${random2 * 100}%`
  }
}

// Generate consistent animation duration
export function generateDuration(seed: string, index: number, min: number, max: number) {
  const random = seededRandom(`${seed}-${index}-duration`)
  return min + random * (max - min)
}

// Generate consistent animation delay
export function generateDelay(seed: string, index: number, max: number) {
  const random = seededRandom(`${seed}-${index}-delay`)
  return random * max
}

// Generate consistent size
export function generateSize(seed: string, index: number, min: number, max: number) {
  const random = seededRandom(`${seed}-${index}-size`)
  return min + random * (max - min)
}
