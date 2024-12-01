import { getLeftAndRightList } from './helpers.ts'

const { sortedLeftArray, sortedRightArray, totalLength } =
  await getLeftAndRightList()

let sum = 0

for (let i = 0; i < totalLength; i++) {
  const left = sortedLeftArray[i]
  const right = sortedRightArray[i]
  const result = Math.abs(left - right)
  sum += result
}

console.log('Result:', sum)
