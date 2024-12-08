import { assertEquals } from '@std/assert/equals'
import {
  parseData,
  MapEnum,
  getGuardCurrentPosition,
  setGuardNextPosition,
} from '../helpers.ts'
import { parseMap } from '../part1.ts'

Deno.test('getParsedData should parse environment to MapEnum', () => {
  const data = ['.#.', '#.#', '.#.', '#^#']

  const result = parseData(data, parseMap)
  const expected = [
    [MapEnum.Open, MapEnum.Tree, MapEnum.Open],
    [MapEnum.Tree, MapEnum.Open, MapEnum.Tree],
    [MapEnum.Open, MapEnum.Tree, MapEnum.Open],
    [MapEnum.Tree, MapEnum.GuardUp, MapEnum.Tree],
  ]

  assertEquals(result, expected)
})
Deno.test('getGuardCurrentPosition should find the guard position', () => {
  const map: MapEnum[][] = [
    [MapEnum.Open, MapEnum.Tree, MapEnum.Open],
    [MapEnum.Tree, MapEnum.Open, MapEnum.Tree],
    [MapEnum.Open, MapEnum.Tree, MapEnum.Open],
    [MapEnum.Tree, MapEnum.GuardUp, MapEnum.Tree],
  ]

  const result = getGuardCurrentPosition(map)
  const expected = { x: 1, y: 3 }

  assertEquals(result, expected)
})

Deno.test(
  'getGuardCurrentPosition should return null if no guard is found',
  () => {
    const map: MapEnum[][] = [
      [MapEnum.Open, MapEnum.Tree, MapEnum.Open],
      [MapEnum.Tree, MapEnum.Open, MapEnum.Tree],
      [MapEnum.Open, MapEnum.Tree, MapEnum.Open],
    ]

    const result = getGuardCurrentPosition(map)
    const expected = null

    assertEquals(result, expected)
  },
)

Deno.test(
  'setGuardNextPosition should move the guard up if the up position is open',
  () => {
    const map: MapEnum[][] = [
      [MapEnum.Open, MapEnum.Tree, MapEnum.Open],
      [MapEnum.Tree, MapEnum.Open, MapEnum.Tree],
      [MapEnum.Open, MapEnum.Open, MapEnum.Open],
      [MapEnum.Tree, MapEnum.GuardUp, MapEnum.Tree],
    ]

    const currentGuardPosition = { x: 1, y: 3 }
    const currentGuardFacing = MapEnum.GuardUp

    const { newMap: result, ended } = setGuardNextPosition(
      map,
      currentGuardPosition,
      currentGuardFacing,
    )

    const expected: MapEnum[][] = [
      [MapEnum.Open, MapEnum.Tree, MapEnum.Open],
      [MapEnum.Tree, MapEnum.Open, MapEnum.Tree],
      [MapEnum.Open, MapEnum.GuardUp, MapEnum.Open],
      [MapEnum.Tree, MapEnum.CrossedPath, MapEnum.Tree],
    ]

    assertEquals(result, expected)
    assertEquals(ended, false)
  },
)

Deno.test(
  'setGuardNextPosition should turn right if the guard up position is tree',
  () => {
    const map: MapEnum[][] = [
      [MapEnum.Open, MapEnum.Tree, MapEnum.Open],
      [MapEnum.Tree, MapEnum.Open, MapEnum.Tree],
      [MapEnum.Open, MapEnum.Tree, MapEnum.Open],
      [MapEnum.Tree, MapEnum.GuardUp, MapEnum.Tree],
    ]

    const currentGuardPosition = { x: 1, y: 3 }
    const currentGuardFacing = MapEnum.GuardUp

    const { newMap: result, ended } = setGuardNextPosition(
      map,
      currentGuardPosition,
      currentGuardFacing,
    )

    const expected: MapEnum[][] = [
      [MapEnum.Open, MapEnum.Tree, MapEnum.Open],
      [MapEnum.Tree, MapEnum.Open, MapEnum.Tree],
      [MapEnum.Open, MapEnum.Tree, MapEnum.Open],
      [MapEnum.Tree, MapEnum.GuardRight, MapEnum.Tree],
    ]

    assertEquals(result, expected)
    assertEquals(ended, false)
  },
)

Deno.test(
  'setGuardNextPosition should exit if the guard position is ending',
  () => {
    const map: MapEnum[][] = [
      [MapEnum.Open, MapEnum.GuardUp, MapEnum.Open],
      [MapEnum.Tree, MapEnum.Open, MapEnum.Tree],
      [MapEnum.Open, MapEnum.Tree, MapEnum.Open],
      [MapEnum.Tree, MapEnum.Tree, MapEnum.Tree],
    ]

    const currentGuardPosition = { x: 1, y: 0 }
    const currentGuardFacing = MapEnum.GuardUp

    const { newMap: result, ended } = setGuardNextPosition(
      map,
      currentGuardPosition,
      currentGuardFacing,
    )

    const expected: MapEnum[][] = [
      [MapEnum.Open, MapEnum.GuardUp, MapEnum.Open],
      [MapEnum.Tree, MapEnum.Open, MapEnum.Tree],
      [MapEnum.Open, MapEnum.Tree, MapEnum.Open],
      [MapEnum.Tree, MapEnum.Tree, MapEnum.Tree],
    ]

    assertEquals(result, expected)
    assertEquals(ended, true)
  },
)
