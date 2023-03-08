// function fib(n) {
//   if (n <= 1) return n

//   return fib(n - 1) + fib(n - 2)
// }

function fib(n) {
  let a = 1
  let b = 1

  for (let i = 3; i <= n; i++) {
    const c = a + b
    a = b
    b = c
  }

  return b
}

console.log(fib(3))
console.log(fib(7))
console.log(fib(77))
