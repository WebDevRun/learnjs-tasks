// function sumTo(n) {
//   let sum = 0

//   for (let i = 0; i <= n; i++) {
//     sum += i
//   }

//   return sum
// }

// function sumTo(n) {
//   if (n === 1) return n

//   return n + sumTo(n - 1)
// }

function sumTo(n) {
  return ((1 + n) / 2) * n
}

console.log(sumTo(3))

// Самый быстрый вариант с арифметической прогрессией. Самый медленный с рекурсией.
// Нет, нельзя, т.к. у рекурсии есть максимальное количество вложенности.
