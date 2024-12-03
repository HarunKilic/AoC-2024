import { assertEquals } from '@std/assert/equals'
import { calculateMuls } from '../part2.ts'
import { getValidMulsWithInstructions } from '../helpers.ts'

const path = 'day3/test/test_input_part2.txt'

Deno.test('calculateMuls should return the correct result', async () => {
  const result = calculateMuls(await getValidMulsWithInstructions(path))

  assertEquals(result, 48)
})
