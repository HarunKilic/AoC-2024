import { getDayFile } from '../helpers.ts'

export async function columnToArray(path: string): Promise<number[][]> {
  const rows = await getDayFile(path)
  const handledRows = rows.map((row) =>
    row.split(' ').map((num) => parseInt(num)),
  )

  return handledRows
}

type IncOrDec = 'inc' | 'dec' | null

export function compareToLastElement(
  current: number,
  previous: number,
  incOrDec: IncOrDec,
): boolean {
  if (Math.abs(current - previous) === 0 || Math.abs(current - previous) > 3)
    return false

  if (incOrDec === 'inc' && current < previous) {
    return false
  } else if (incOrDec === 'dec' && current > previous) {
    return false
  }
  return true
}

export function isValidRow(row: number[]): boolean[] {
  let incDec: IncOrDec = null
  const result = row.map((curr, i, arr) => {
    // Continue if first element
    if (i === 0) return true

    // Set increase or decrease
    if (i === 1) {
      if (incDec !== null) throw new Error('incDec should be null')
      curr > arr[i - 1] ? (incDec = 'inc') : (incDec = 'dec')
    }

    // Check if increase or decrease is consistent
    return compareToLastElement(curr, arr[i - 1], incDec)
  })
  return result
}
