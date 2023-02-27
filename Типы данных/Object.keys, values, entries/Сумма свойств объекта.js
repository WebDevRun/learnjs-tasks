function sumSalaries(obj) {
  const salaries = Object.values(obj)
  let sum = 0

  for (const num of salaries) {
    sum += num
  }

  return sum
}

const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
}

console.log(sumSalaries(salaries)) // 650
