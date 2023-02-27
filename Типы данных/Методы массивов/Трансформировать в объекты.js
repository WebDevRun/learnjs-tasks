const vasya = { name: 'Вася', surname: 'Пупкин', id: 1 }
const petya = { name: 'Петя', surname: 'Иванов', id: 2 }
const masha = { name: 'Маша', surname: 'Петрова', id: 3 }

const users = [vasya, petya, masha]

const usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}))

console.log(usersMapped)
console.log(usersMapped[0].id) // 1
console.log(usersMapped[0].fullName) // Вася Пупкин
