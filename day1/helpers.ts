export function getLeftAndRightList(list: string[]): {
  sortedLeftArray: number[]
  sortedRightArray: number[]
  totalLength: number
} {
  const leftArray: number[] = []
  const rightArray: number[] = []

  list.forEach((line) => {
    const trimmedLine = line.replace(/\s+/g, ' ')
    const [left, right] = trimmedLine.split(' ')
    leftArray.push(parseInt(left))
    rightArray.push(parseInt(right))
  })

  const sortedLeftArray = leftArray.sort((a, b) => a - b)
  const sortedRightArray = rightArray.sort((a, b) => a - b)

  return { sortedLeftArray, sortedRightArray, totalLength: list.length }
}

export function day1_part1(
  totalLength: number,
  sortedLeftArray: number[],
  sortedRightArray: number[],
): number {
  let sum = 0

  for (let i = 0; i < totalLength; i++) {
    const left = sortedLeftArray[i]
    const right = sortedRightArray[i]
    const result = Math.abs(left - right)
    sum += result
  }

  return sum
}

export function day1_part2(
  sortedRightArray: number[],
  sortedLeftArray: number[],
): number {
  function totalSimiliarityFromRight(num: number): number {
    const list = sortedRightArray
    let sum = 0

    list.forEach((right) => (right === num ? sum++ : sum))

    return sum
  }

  let totalSimilarity = 0

  sortedLeftArray.forEach((left) => {
    const similiarity = totalSimiliarityFromRight(left)
    totalSimilarity += left * similiarity
  })

  return totalSimilarity
}
