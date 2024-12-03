import { getDayFile } from '../helpers.ts'
import { getLeftAndRightList, day1_part1 } from './helpers.ts'

const dayFile = await getDayFile('day1/input.txt')
const { sortedLeftArray, sortedRightArray, totalLength } =
  getLeftAndRightList(dayFile)

day1_part1(totalLength, sortedLeftArray, sortedRightArray)
