import { assertEquals } from '@std/assert/equals'
import { getGuardPaths } from '../part1.ts'
import { getDayFile } from '../../helpers.ts'

Deno.test('Get the number of paths encountered on the way down', async () => {
  const amountOfEncounteredPath = getGuardPaths(
    await getDayFile('day6/test/test_input.txt'),
  )
  assertEquals(amountOfEncounteredPath, 41)
})
