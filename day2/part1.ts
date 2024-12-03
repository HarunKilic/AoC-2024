import { columnToArray, isValidRow } from './helpers.ts'

export const getValidReports = (rows: number[][]): number =>
  rows.filter(isValidRow).length

console.log(
  'Day 2 Part 1: ',
  getValidReports(await columnToArray('day2/input.txt')),
)
