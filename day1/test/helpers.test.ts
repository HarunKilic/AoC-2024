import { assertEquals } from 'jsr:@std/assert'
import { getLeftAndRightList, day1_part1, day1_part2 } from '../helpers.ts'
import { getDayFile } from '../../helpers.ts'

Deno.test(
  'getLeftAndRightList should return sorted arrays and total length',
  () => {
    const input = ['1 2', '3 4', '5 6']
    const expectedOutput = {
      sortedLeftArray: [1, 3, 5],
      sortedRightArray: [2, 4, 6],
      totalLength: 3,
    }

    const result = getLeftAndRightList(input)

    assertEquals(result, expectedOutput)
  },
)

Deno.test(
  'day1_part1 should correctly calculate the total distance',
  async () => {
    const dayFile = await getDayFile('day1/test/test_input.txt')
    const { sortedLeftArray, sortedRightArray, totalLength } =
      getLeftAndRightList(dayFile)

    const result = day1_part1(totalLength, sortedLeftArray, sortedRightArray)

    assertEquals(result, 11)
  },
)
Deno.test(
  'day1_part2 should correctly calculate the total similarity',
  async () => {
    const dayFile = await getDayFile('day1/test/test_input.txt')
    const { sortedLeftArray, sortedRightArray } = getLeftAndRightList(dayFile)

    const result = day1_part2(sortedRightArray, sortedLeftArray)

    assertEquals(result, 31)
  },
)
