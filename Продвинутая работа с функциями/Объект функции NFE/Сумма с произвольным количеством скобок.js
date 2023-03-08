function sum(a) {
  let currentSum = a

  function f(b) {
    if (typeof b === 'number') {
      currentSum += b
      return f
    }

    return currentSum
  }

  return f
}

console.log(sum(1)(2)(0)(2)())
console.log(sum(1)(2)(3)())
console.log(sum(5)(-1)(2)())
console.log(sum(6)(-1)(-2)(-3)())
console.log(sum(0)(1)(2)(3)(4)(5)())
