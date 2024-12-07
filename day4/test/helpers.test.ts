import { assertEquals } from '@std/assert/equals'
import { getParsedData, isNextCharValid, XMAS } from '../helpers.ts'
import { parseXmasChar } from '../part1.ts'

Deno.test('test xmas file parsing', async () => {
  const path = 'day4/test/test_input.txt'
  const parsedData = await getParsedData(path, parseXmasChar)

  const everyRowHas10Chars = parsedData.every((row) => row.length === 10)

  assertEquals(everyRowHas10Chars, true)
  assertEquals(parsedData.length, 10)
})

Deno.test('Next Char Validation', () => {
  Deno.test('test if next char is valid if X and M', () => {
    const result = isNextCharValid(XMAS.X, XMAS.M)

    assertEquals(result, true)
  })

  Deno.test('test if next char is invalid if X and A', () => {
    const result = isNextCharValid(XMAS.X, XMAS.A)

    assertEquals(result, false)
  })

  Deno.test('test if next char is invalid if M and X', () => {
    const result = isNextCharValid(XMAS.M, XMAS.X)

    assertEquals(result, false)
  })
})
