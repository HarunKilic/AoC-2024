import { assertEquals } from '@std/assert/equals'
import { getValidMuls, getValidMulsWithInstructions } from '../helpers.ts'
const path = 'day3/test/test_input.txt'

Deno.test(
  'getValidMuls should return only rows with mul function',
  async () => {
    const result = await getValidMuls(path)

    //['mul(2,4)', 'mul(5,5)', 'mul(11,8)', 'mul(8,5)']
    assertEquals(result, [
      [2, 4],
      [5, 5],
      [11, 8],
      [8, 5],
    ])
  },
)

Deno.test(
  'getValidMulsWithInstructions should return only rows with mul function',
  async () => {
    const result = await getValidMulsWithInstructions(path)

    //['mul(2,4)', 'mul(5,5)', 'mul(11,8)', 'mul(8,5)']
    assertEquals(result, [
      [2, 4],
      [5, 5],
      [11, 8],
      [8, 5],
    ])
  },
)
