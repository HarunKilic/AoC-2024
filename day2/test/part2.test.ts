import { assertEquals } from '@std/assert/equals'
import { getValidReports } from '../part2.ts'
import { columnToArray } from '../helpers.ts'

Deno.test(
  'getValidReports should return the number of valid reports that have only one invalid field',
  async () => {
    const result = getValidReports(
      await columnToArray('day2/test/test_input.txt'),
    )

    assertEquals(result, 4)
  },
)
