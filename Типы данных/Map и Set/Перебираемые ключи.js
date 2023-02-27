const map = new Map()

map.set('name', 'John')

// let keys = map.keys()
const keys = Array.from(map.keys()) // что бы push работал, map.keys() необходимо привести к массиву

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push('more') // Error т.к. keys не массив и у него нет метода push

console.log(keys)
