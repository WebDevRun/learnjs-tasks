// function printNumbers(from, to) {
//   const run = (a) => console.log(a)
//   let a = from

//   const timer = setInterval(() => {
//     run(a)
//     a += 1
//     if (a > to) clearInterval(timer)
//   }, 1000)
// }

function printNumbers(from, to) {
  const run = (a) => console.log(a)

  for (let i = from; i <= to; i++) {
    setTimeout(() => run(i), i * 1000)
  }
}

printNumbers(3, 5)
