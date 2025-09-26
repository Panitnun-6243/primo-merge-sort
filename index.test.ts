import { expect, test } from 'bun:test'
import { merge, mergeTwoArray, reverseArray } from '.'

test('Test reverse array to ascending function', () => {
  const descendingArr: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

  const result: number[] = reverseArray(descendingArr)
  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})

test('Test merge and sort two arrays function', () => {
  const col1: number[] = [0, 1, 2, 6, 8]
  const col2: number[] = [2, 3, 4, 5, 7]

  const result: number[] = mergeTwoArray(col1, col2)
  expect(result).toEqual([0, 1, 2, 2, 3, 4, 5, 6, 7, 8])
})

test('Test merge with descending and ascending arrays function', () => {
  const col1 = [9, 7, 5, 3, 1]
  const col2 = [0, 2, 4, 6, 8]
  const col3 = [10, 11, 12]

  const result = merge(col1, col2, col3)
  expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
})

test('Test merge with some empty arrays', () => {
  const emptyCol: number[] = []
  const col1: number[] = [1, 3, 5]
  const col2: number[] = [2, 4, 6]
  const col3: number[] = [5, 4, 3]

  expect(merge(emptyCol, col1, col2)).toEqual([1, 2, 3, 4, 5, 6])
  expect(merge(col3, emptyCol, emptyCol)).toEqual([3, 4, 5])
})

test('Test merge with duplicates', () => {
  const col1: number[] = [5, 3, 3, 1]
  const col2: number[] = [1, 2, 3]
  const col3: number[] = [3, 4, 5]

  const result = merge(col1, col2, col3)
  expect(result).toEqual([1, 1, 2, 3, 3, 3, 3, 4, 5, 5])
})
