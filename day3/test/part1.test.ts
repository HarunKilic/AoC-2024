import { assertEquals } from '@std/assert/equals'
import { calculateMuls } from '../part1.ts'
import { getValidMuls } from '../helpers.ts'

const path = 'day3/test/test_input.txt'

Deno.test('calculateMuls should return the correct result', async () => {
  const result = calculateMuls(await getValidMuls(path))

  assertEquals(result, 161)
})
