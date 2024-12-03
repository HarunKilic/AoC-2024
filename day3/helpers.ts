import { getDayFile } from '../helpers.ts'

export async function getValidMuls(path: string): Promise<number[][]> {
  const rows = await getDayFile(path)
  const regex = /mul\((\d+),(\d+)\)/g
  const validMuls: number[][] = []

  rows.forEach((row) => {
    let match
    while ((match = regex.exec(row)) !== null) {
      const [, a, b] = match
      validMuls.push([Number(a), Number(b)])
    }
  })

  return validMuls
}

export async function getValidMulsWithInstructions(
  path: string,
): Promise<number[][]> {
  const rows = await getDayFile(path)
  const regex = /mul\((\d+),(\d+)\)|don't\(\)|do\(\)/g
  const validMuls: number[][] = []
  let enabled = true

  rows.forEach((row) => {
    let match
    while ((match = regex.exec(row)) !== null) {
      if (match[0] === "don't()") {
        enabled = false
      } else if (match[0] === 'do()') {
        enabled = true
      } else if (enabled) {
        const [, a, b] = match
        validMuls.push([Number(a), Number(b)])
      }
    }
  })

  return validMuls
}

export function mul(a: number, b: number): number {
  return a * b
}
