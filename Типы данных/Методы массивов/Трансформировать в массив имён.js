const vasya = { name: 'Вася', age: 25 }
const petya = { name: 'Петя', age: 30 }
const masha = { name: 'Маша', age: 28 }

const users = [vasya, petya, masha]

const selectNames = (users) => users.map((user) => user.name)

const names = selectNames(users)

console.log(names) // Вася, Петя, Маша
