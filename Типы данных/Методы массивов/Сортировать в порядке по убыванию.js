const arr = [5, 2, 1, -10, 8]

function descSort(arr) {
  arr.sort((a, b) => b - a)
}

descSort(arr)

console.log(arr) // 8, 5, 2, 1, -10
