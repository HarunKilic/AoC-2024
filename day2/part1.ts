import { columnToArray, isValidRow } from './helpers.ts'

export function getValidReports(reports: number[][]): number {
  let validReports = 0

  for (const report of reports) {
    if (isValidRow(report).every((bool) => bool)) {
      validReports++
    }
  }

  return validReports
}

console.log(
  'Day 2 Part 1: ',
  getValidReports(await columnToArray('day2/input.txt')),
)
