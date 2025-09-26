console.log('Hello Primo')
export function merge(
  col1: number[],
  col2: number[],
  col3: number[]
): number[] {
  const sortedCol1 = reverseArray(col1)
  const mergedCol1_2 = mergeTwoArray(sortedCol1, col2)
  return mergeTwoArray(mergedCol1_2, col3)
}

export function reverseArray(arr: number[]): number[] {
  let result: number[] = []
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]!)
  }
  return result
}

export function mergeTwoArray(arr1: number[], arr2: number[]): number[] {
  let result: number[] = []
  let i: number = 0
  let j: number = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i]! <= arr2[j]!) {
      result.push(arr1[i]!)
      i++
    } else {
      result.push(arr2[j]!)
      j++
    }
  }

  while (i < arr1.length) result.push(arr1[i++]!)
  while (j < arr2.length) result.push(arr2[j++]!)
  return result
}
