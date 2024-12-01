import { getLeftAndRightList } from './helpers.ts'

const { sortedLeftArray, sortedRightArray } = await getLeftAndRightList()

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

console.log('Result:', totalSimilarity)
