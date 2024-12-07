import {
  getAllOccurences,
  getParsedData,
  isNextCharValid,
  XMAS,
} from './helpers.ts'

export enum Direction {
  POSITIVE,
  NEGATIVE,
  NEUTRAL,
}

export type XYDirection = {
  x: Direction
  y: Direction
}

const occurenceDirections: XYDirection[] = [
  // Horizontal

  // (+1, 0) Right to Left
  {
    x: Direction.POSITIVE,
    y: Direction.NEUTRAL,
  },
  // (-1, 0) Right to Left
  {
    x: Direction.NEGATIVE,
    y: Direction.NEUTRAL,
  },

  // Vertical

  // (0, +1) Up
  {
    x: Direction.NEUTRAL,
    y: Direction.POSITIVE,
  },

  // (0, -1) Down
  {
    x: Direction.NEUTRAL,
    y: Direction.NEGATIVE,
  },

  // Diagonal

  // (+1, -1) Down Right
  {
    x: Direction.POSITIVE,
    y: Direction.NEGATIVE,
  },

  // (+1, +1) Up Right
  {
    x: Direction.POSITIVE,
    y: Direction.POSITIVE,
  },

  // (-1, -1) Down Left
  {
    x: Direction.NEGATIVE,
    y: Direction.NEGATIVE,
  },

  // (-1, +1) Up Left
  {
    x: Direction.NEGATIVE,
    y: Direction.POSITIVE,
  },
]

export const parseXmasChar = (char: string): XMAS =>
  XMAS[char as keyof typeof XMAS]

export async function getAllXMASOccurences(path: string): Promise<number> {
  const data = await getParsedData(path, parseXmasChar)

  const validationCheck = (
    currentXChar: XMAS,
    x: number,
    y: number,
  ): number => {
    let occurences = 0
    if (currentXChar === XMAS.X) {
      occurenceDirections.forEach((direction) => {
        if (isNextOccurenceValid({ x, y }, direction, data)) {
          occurences++
        }
      })
    }
    return occurences
  }
  const occurences = getAllOccurences(data, validationCheck)

  return occurences
}

export function isNextOccurenceValid(
  currPos: {
    x: number
    y: number
  },
  nextPosDirection: XYDirection,
  data: XMAS[][],
): boolean {
  let nextXPos = getNextPos(currPos.x, nextPosDirection.x)
  let nextYPos = getNextPos(currPos.y, nextPosDirection.y)
  let currXPos = currPos.x
  let currYPos = currPos.y

  while (
    nextYPos >= 0 &&
    nextYPos < data.length &&
    nextXPos >= 0 &&
    nextXPos < data[nextYPos].length &&
    isNextCharValid(data[currYPos][currXPos], data[nextYPos][nextXPos])
  ) {
    if (data[nextYPos][nextXPos] === XMAS.S) {
      return true
    }
    nextXPos = getNextPos(nextXPos, nextPosDirection.x)
    nextYPos = getNextPos(nextYPos, nextPosDirection.y)
    currXPos = getNextPos(currXPos, nextPosDirection.x)
    currYPos = getNextPos(currYPos, nextPosDirection.y)
  }

  return false
}

const getNextPos = (pos: number, direction: Direction) =>
  direction === Direction.NEUTRAL
    ? pos
    : direction === Direction.NEGATIVE
    ? pos - 1
    : pos + 1

// await getAllXMASOccurences('day4/input.txt')
