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
  if (Math.abs(current - previous) === 0 || Math.abs(current - previous) <= 3)
    return false

  if (incOrDec === 'inc' && current < previous) {
    return false
  } else if (incOrDec === 'dec' && current > previous) {
    return false
  }
  return true
}

export function isValidRow(row: number[]): boolean {
  return (
    row.every((_, i) => i === 0 || Math.abs(row[i] - row[i - 1]) <= 3) &&
    (row.every((_, i) => i === 0 || row[i] > row[i - 1]) ||
      row.every((_, i) => i === 0 || row[i] < row[i - 1]))
  )
}
