import { getDayFile } from '../helpers.ts'
import { day1_part2, getLeftAndRightList } from './helpers.ts'

const dayFile = await getDayFile('day1/input.txt')
const { sortedLeftArray, sortedRightArray } = getLeftAndRightList(dayFile)

day1_part2(sortedRightArray, sortedLeftArray)
