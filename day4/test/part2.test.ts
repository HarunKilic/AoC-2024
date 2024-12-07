import { assertEquals } from '@std/assert/equals'
import { getAllMasOccurences } from '../part2.ts'

Deno.test('test part 1 response', async () => {
  const path = 'day4/test/test_input_part2.txt'
  const parsedData = await getAllMasOccurences(path)

  assertEquals(parsedData, 9)
})
