import { getDayFile } from '../helpers.ts'

export enum XMAS {
  X,
  M,
  A,
  S,
}

export async function getParsedData<T>(
  path: string,
  parseChar: (char: string) => T,
): Promise<T[][]> {
  const rows = await getDayFile(path)

  return rows.map((row) => row.split('').map(parseChar))
}

export function getAllOccurences<T>(
  data: T[][],
  validationCheck: (
    currentXChar: T,
    currentX: number,
    currentY: number,
  ) => number,
): number {
  let occurences = 0

  for (let y = 0; y < data.length; y++) {
    for (let x = 0; x < data[y].length; x++) {
      const char = data[y][x]
      occurences += validationCheck(char, x, y)
    }
  }

  return occurences
}

export function isNextCharValid(currChar: XMAS, nextChar: XMAS): boolean {
  return nextChar === currChar + 1
}
