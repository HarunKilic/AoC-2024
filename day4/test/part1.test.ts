import { assertEquals } from '@std/assert/equals'
import {
  isNextOccurenceValid,
  Direction,
  getAllXMASOccurences,
  XYDirection,
} from '../part1.ts'
import { XMAS } from '../helpers.ts'

Deno.test('test part 1 response', async () => {
  const path = 'day4/test/test_input.txt'
  const parsedData = await getAllXMASOccurences(path)

  assertEquals(parsedData, 18)
})

// Horizontal
Deno.test('Horizontal Occurences', () => {
  Deno.test('left to right', () => {
    const testRow: XMAS[][] = [[XMAS.X, XMAS.M, XMAS.A, XMAS.S]]
    const xyDirection: XYDirection = {
      x: Direction.POSITIVE,
      y: Direction.NEUTRAL,
    }

    Deno.test('passes', () => {
      const response = isNextOccurenceValid(
        {
          x: 0,
          y: 0,
        },
        xyDirection,
        testRow,
      )

      assertEquals(response, true)
    })
    Deno.test('fails', () => {
      const response = isNextOccurenceValid(
        {
          x: 0,
          y: 0,
        },
        xyDirection,
        testRow,
      )

      assertEquals(response, false)
    })
  })

  Deno.test('right to left', () => {
    const testRow: XMAS[][] = [[XMAS.S, XMAS.A, XMAS.M, XMAS.X]]
    const xyDirection: XYDirection = {
      x: Direction.NEGATIVE,
      y: Direction.NEUTRAL,
    }

    Deno.test('passes', () => {
      const response = isNextOccurenceValid(
        {
          x: 0,
          y: 0,
        },
        xyDirection,
        testRow,
      )

      assertEquals(response, true)
    })
    Deno.test('fails', () => {
      const response = isNextOccurenceValid(
        {
          x: 0,
          y: 0,
        },
        xyDirection,
        testRow,
      )

      assertEquals(response, false)
    })
  })
})

// Vertical
Deno.test('Vertical Occurences', () => {
  Deno.test('top to bottom', () => {
    const testRow: XMAS[][] = [[XMAS.X], [XMAS.M], [XMAS.A], [XMAS.S]]
    const xyDirection: XYDirection = {
      x: Direction.NEUTRAL,
      y: Direction.POSITIVE,
    }

    Deno.test('passes', () => {
      const response = isNextOccurenceValid(
        {
          x: 0,
          y: 0,
        },
        xyDirection,
        testRow,
      )

      assertEquals(response, true)
    })
    Deno.test('fails', () => {
      const response = isNextOccurenceValid(
        {
          x: 0,
          y: 0,
        },
        xyDirection,
        testRow,
      )

      assertEquals(response, false)
    })
  })

  Deno.test('bottom to top', () => {
    const testRow: XMAS[][] = [[XMAS.S], [XMAS.A], [XMAS.M], [XMAS.X]]
    const xyDirection: XYDirection = {
      x: Direction.NEUTRAL,
      y: Direction.NEGATIVE,
    }

    Deno.test('passes', () => {
      const response = isNextOccurenceValid(
        {
          x: 0,
          y: 0,
        },
        xyDirection,
        testRow,
      )

      assertEquals(response, true)
    })
    Deno.test('fails', () => {
      const response = isNextOccurenceValid(
        {
          x: 0,
          y: 0,
        },
        xyDirection,
        testRow,
      )

      assertEquals(response, false)
    })
  })
})

// Diagonal
Deno.test('Diagonal Occurences', () => {
  Deno.test('to top right', () => {
    const testRow: XMAS[][] = [
      [XMAS.X, XMAS.M, XMAS.A, XMAS.S],
      [XMAS.M, XMAS.A, XMAS.A, XMAS.X],
      [XMAS.A, XMAS.M, XMAS.X, XMAS.M],
      [XMAS.X, XMAS.X, XMAS.M, XMAS.A],
    ]
    const xyDirection: XYDirection = {
      x: Direction.POSITIVE,
      y: Direction.POSITIVE,
    }
    Deno.test('passes', () => {})
  })
})
