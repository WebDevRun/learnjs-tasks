function topSalary(salaries) {
  const entries = Object.entries(salaries)
  let topName = null
  let topSalary = 0

  for (const [name, salary] of entries) {
    if (topSalary < salary) {
      topSalary = salary
      topName = name
    }
  }

  return topName
}

const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
}

console.log(topSalary(salaries))
console.log(topSalary({}))
