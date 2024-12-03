import { assertEquals } from '@std/assert/equals'
import { getValidReports } from '../part1.ts'
import { columnToArray } from '../helpers.ts'

Deno.test(
  'getValidReports should return the number of valid reports',
  async () => {
    const result = getValidReports(
      await columnToArray('day2/test/test_input.txt'),
    )

    assertEquals(result, 2)
  },
)
