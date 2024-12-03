import { columnToArray, isValidRow } from './helpers.ts'

export const getValidReports = (rows: number[][]): number =>
  rows.reduce(
    (acc, row) =>
      acc +
      (isValidRow(row) ||
      row.some((_, i) => isValidRow([...row.slice(0, i), ...row.slice(i + 1)]))
        ? 1
        : 0),
    0,
  )

console.log(
  'Day 2 Part 2: ',
  getValidReports(await columnToArray('day2/input.txt')),
)
