function getAverageAge(users) {
  const sum = users.reduce((acc, user) => (acc += user.age), 0)
  return sum / users.length
}

const vasya = { name: 'Вася', age: 25 }
const petya = { name: 'Петя', age: 30 }
const masha = { name: 'Маша', age: 29 }

const arr = [vasya, petya, masha]

console.log(getAverageAge(arr)) // (25 + 30 + 29) / 3 = 28
