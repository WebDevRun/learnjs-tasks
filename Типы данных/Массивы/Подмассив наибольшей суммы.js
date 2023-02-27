function getMaxSubSum(arr) {
  let bestSum = 0
  let currentSum = 0

  for (const num of arr) {
    currentSum = Math.max(0, currentSum + num)
    bestSum = Math.max(bestSum, currentSum)
  }

  return bestSum
}

console.log(getMaxSubSum([-1, 2, 3, -9]))
console.log(getMaxSubSum([2, -1, 2, 3, -9]))
console.log(getMaxSubSum([-1, 2, 3, -9, 11]))
console.log(getMaxSubSum([-2, -1, 1, 2]))
console.log(getMaxSubSum([100, -9, 2, -3, 5]))
console.log(getMaxSubSum([1, 2, 3]))
