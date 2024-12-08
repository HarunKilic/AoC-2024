export enum MapEnum {
  Open = '.',
  Tree = '#',
  GuardUp = '^',
  GuardDown = 'v',
  GuardLeft = '<',
  GuardRight = '>',
  CrossedPath = 'X',
}

export enum GuardDirection {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right',
}

export type GuardF =
  | MapEnum.GuardUp
  | MapEnum.GuardDown
  | MapEnum.GuardLeft
  | MapEnum.GuardRight

export function parseData<T>(
  data: string[],
  parseChar: (char: string) => T,
): T[][] {
  return data.map((row) => row.split('').map(parseChar))
}

export const getGuardCurrentPosition = (
  map: MapEnum[][],
): { x: number; y: number } | null => {
  for (let rowIndex = 0; rowIndex < map.length; rowIndex++) {
    for (let colIndex = 0; colIndex < map[rowIndex].length; colIndex++) {
      const col = map[rowIndex][colIndex]
      if (
        col === MapEnum.GuardUp ||
        col === MapEnum.GuardDown ||
        col === MapEnum.GuardLeft ||
        col === MapEnum.GuardRight
      ) {
        return { y: rowIndex, x: colIndex }
      }
    }
  }
  return null
}

export const getMapNextType = (
  map: MapEnum[][],
  next: { y: number; x: number },
): MapEnum | undefined => {
  if (
    next.y < 0 ||
    next.y >= map.length ||
    next.x < 0 ||
    next.x >= map[next.y].length
  ) {
    return undefined
  }
  return map[next.y][next.x]
}

export const setGuardNextPosition = (
  map: MapEnum[][],
  currentGuardPosition: { x: number; y: number },
  currentGuardFacing: MapEnum,
): { newMap: MapEnum[][]; ended: boolean } => {
  let nextPosition = { x: currentGuardPosition.x, y: currentGuardPosition.y }

  switch (currentGuardFacing) {
    case MapEnum.GuardUp:
      nextPosition = {
        x: currentGuardPosition.x,
        y: currentGuardPosition.y - 1,
      }
      break
    case MapEnum.GuardDown:
      nextPosition = {
        x: currentGuardPosition.x,
        y: currentGuardPosition.y + 1,
      }
      break
    case MapEnum.GuardLeft:
      nextPosition = {
        x: currentGuardPosition.x - 1,
        y: currentGuardPosition.y,
      }
      break
    case MapEnum.GuardRight:
      nextPosition = {
        x: currentGuardPosition.x + 1,
        y: currentGuardPosition.y,
      }
      break
  }

  const nextType = getMapNextType(map, nextPosition)

  if (nextType === undefined) {
    map[currentGuardPosition.y][currentGuardPosition.x] = MapEnum.CrossedPath

    return {
      newMap: map,
      ended: true,
    }
  }

  if (nextType === MapEnum.Open || nextType === MapEnum.CrossedPath) {
    map = moveGuard(map, currentGuardPosition, currentGuardFacing)
  } else if (nextType === MapEnum.Tree) {
    map = turnGuard(map, currentGuardPosition, currentGuardFacing)
  }

  return {
    newMap: map,
    ended: false,
  }
}

const turnGuard = (
  map: MapEnum[][],
  currentGuardPosition: { x: number; y: number },
  currentGuardFacing: MapEnum,
) => {
  let nextGuardFacingDirection: GuardF = MapEnum.GuardUp

  switch (currentGuardFacing) {
    case MapEnum.GuardUp:
      nextGuardFacingDirection = MapEnum.GuardRight
      break
    case MapEnum.GuardDown:
      nextGuardFacingDirection = MapEnum.GuardLeft
      break
    case MapEnum.GuardLeft:
      nextGuardFacingDirection = MapEnum.GuardUp
      break
    case MapEnum.GuardRight:
      nextGuardFacingDirection = MapEnum.GuardDown
      break
  }
  map[currentGuardPosition.y][currentGuardPosition.x] = nextGuardFacingDirection

  return map
}

const moveGuard = (
  map: MapEnum[][],
  currentGuardPosition: { x: number; y: number },
  direction: MapEnum,
): MapEnum[][] => {
  switch (direction) {
    case MapEnum.GuardUp:
      map[currentGuardPosition.y - 1][currentGuardPosition.x] = MapEnum.GuardUp
      break
    case MapEnum.GuardDown:
      map[currentGuardPosition.y + 1][currentGuardPosition.x] =
        MapEnum.GuardDown
      break
    case MapEnum.GuardLeft:
      map[currentGuardPosition.y][currentGuardPosition.x - 1] =
        MapEnum.GuardLeft
      break
    case MapEnum.GuardRight:
      map[currentGuardPosition.y][currentGuardPosition.x + 1] =
        MapEnum.GuardRight
      break
  }

  map[currentGuardPosition.y][currentGuardPosition.x] = MapEnum.CrossedPath
  return map
}
