import { columnToArray, isValidRow } from './helpers.ts'

export function getValidReports(reports: number[][]): number {
  let validReports = 0

  for (const report of reports) {
    const isValid = isValidRow(report)
    const isValidCount = isValid.filter((bool) => !bool).length <= 1
    console.log(isValid)

    // if (isValidRow(report).filter((bool) => !bool).length <= 1) {
    //   validReports++
    // }
  }

  return validReports
}

// console.log(
//   'Day 2 Part 2: ',
//   getValidReports(await columnToArray('day2/input.txt')),
// )
