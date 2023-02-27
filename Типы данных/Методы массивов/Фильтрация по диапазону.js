function filterRange(arr, a, b) {
  return arr.filter((value) => value >= a && value <= b)
}

const arr = [5, 3, 8, 1]
const filtered = filterRange(arr, 1, 4)

console.log(filtered) // 3,1 (совпадающие значения)
console.log(arr) // 5,3,8,1 (без изменений)
