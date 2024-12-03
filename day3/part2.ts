import { getValidMulsWithInstructions, mul } from './helpers.ts'

export function calculateMuls(muls: number[][]): number {
  return muls.reduce((acc, [a, b]) => acc + mul(a, b), 0)
}

console.log(
  'Day 3 Part 2: ',
  calculateMuls(await getValidMulsWithInstructions('day3/input.txt')),
)
