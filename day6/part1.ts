import { getDayFile } from '../helpers.ts'
import {
  getGuardCurrentPosition,
  MapEnum,
  parseData,
  setGuardNextPosition,
} from './helpers.ts'

export const parseMap = (char: string): MapEnum => {
  if (char === '.') return MapEnum.Open
  if (char === '#') return MapEnum.Tree
  if (char === '^') return MapEnum.GuardUp
  if (char === 'v') return MapEnum.GuardDown
  if (char === '<') return MapEnum.GuardLeft
  if (char === '>') return MapEnum.GuardRight
  throw new Error(`Unexpected character: ${char}`)
}

export function getGuardPaths(data: string[]) {
  const parsedData = parseData(data, parseMap)

  const map = parsedData
  let currentGuardPosition = getGuardCurrentPosition(map)
  if (!currentGuardPosition) throw new Error('Guard not found')
  let gameOver = false

  while (!gameOver) {
    const { newMap, ended } = setGuardNextPosition(
      map,
      currentGuardPosition,
      map[currentGuardPosition.y][currentGuardPosition.x],
    )
    if (ended) {
      gameOver = ended
      break
    }

    const newGuardPosition = getGuardCurrentPosition(newMap)
    if (!newGuardPosition) throw new Error('Guard not found')
    currentGuardPosition = newGuardPosition
  }
  const crossedPaths = map.reduce(
    (acc, row) =>
      acc +
      row.reduce((acc, cell) => {
        if (cell === MapEnum.CrossedPath) return acc + 1
        return acc
      }, 0),
    0,
  )
  drawMap(map)

  console.log(`Crossed paths: ${crossedPaths}`)
  return crossedPaths
}

const drawMap = (map: MapEnum[][]) => {
  console.log(map.map((row) => row.map((cell) => cell).join('')).join('\n'))
}

getGuardPaths(await getDayFile('day6/input.txt'))
