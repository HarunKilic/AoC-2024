import { getValidMuls, mul } from './helpers.ts'

export function calculateMuls(muls: number[][]): number {
  return muls.reduce((acc, [a, b]) => acc + mul(a, b), 0)
}

console.log(
  'Day 3 Part 1: ',
  calculateMuls(await getValidMuls('day3/input.txt')),
)
