import { getAllOccurences, getParsedData } from './helpers.ts'

export enum MAS {
  M,
  A,
  S,
}

export const parseXmasChar = (char: string): MAS =>
  MAS[char as keyof typeof MAS]

export const getAllMasOccurences = async (path: string): Promise<number> => {
  const data = await getParsedData(path, parseXmasChar)

  const occurences = getAllOccurences(
    data,
    (currentChar, currentX, currentY) => {
      let totalOccurences = 0

      if (currentChar === MAS.A) {
        // M . .
        // . A .
        // . . S
        currentY - 1 >= 0 &&
          currentX - 1 >= 0 &&
          currentY + 1 < data.length &&
          currentX + 1 < data[0].length &&
          isValidMAS(
            data[currentY - 1][currentX - 1],
            data[currentY + 1][currentX + 1],
          ) &&
          isValidMAS(
            data[currentY + 1][currentX - 1],
            data[currentY - 1][currentX + 1],
          ) &&
          totalOccurences++
      }

      return totalOccurences
    },
  )
  console.log(occurences)
  return occurences
}

const isValidMAS = (topChar: MAS, bottomChar: MAS): boolean => {
  if (topChar === MAS.M && bottomChar === MAS.S) {
    return true
  }

  if (bottomChar === MAS.M && topChar === MAS.S) {
    return true
  }

  return false
}

await getAllMasOccurences('day4/input2.txt')
