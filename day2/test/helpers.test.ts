import { assertEquals } from '@std/assert/equals'
import { isValidRow } from '../helpers.ts'

Deno.test(
  'isValidRow should return true for consistently increasing row',
  () => {
    const row = [1, 2, 3, 4, 5]

    const result = isValidRow(row)

    assertEquals(result, true)
  },
)

Deno.test(
  'isValidRow should return true for consistently decreasing row',
  () => {
    const row = [5, 4, 3, 2, 1]

    const result = isValidRow(row)

    assertEquals(result, true)
  },
)

Deno.test('isValidRow should return false for inconsistent row', () => {
  const row = [1, 3, 2, 4, 5]

  const result = isValidRow(row)

  assertEquals(result, false)
})

Deno.test(
  'isValidRow should return false for row with differences greater than 3',
  () => {
    const row = [1, 2, 7, 12, 13]

    const result = isValidRow(row)

    assertEquals(result, false)
  },
)
