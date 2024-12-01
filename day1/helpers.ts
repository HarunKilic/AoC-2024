export async function getLeftAndRightList(): Promise<{
  sortedLeftArray: number[]
  sortedRightArray: number[]
  totalLength: number
}> {
  const list = await Deno.readTextFile('day1/input.txt')

  const lines = list.split('\r\n')

  const leftArray: number[] = []
  const rightArray: number[] = []

  lines.forEach((line) => {
    const trimmedLine = line.replace(/\s+/g, ' ')
    const [left, right] = trimmedLine.split(' ')
    leftArray.push(parseInt(left))
    rightArray.push(parseInt(right))
  })

  const sortedLeftArray = leftArray.sort((a, b) => a - b)
  const sortedRightArray = rightArray.sort((a, b) => a - b)

  return { sortedLeftArray, sortedRightArray, totalLength: lines.length }
}
