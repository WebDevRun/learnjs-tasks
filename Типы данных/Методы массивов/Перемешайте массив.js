function shuffle(array) {
  for (let i = 0; i < array.length; i++) {
    const id = Math.floor(Math.random() * array.length)

    const tempValue = array[id]
    array[id] = array[i]
    array[i] = tempValue
  }
}

const arr = [1, 2, 3]

shuffle(arr)
console.log(arr)

shuffle(arr)
console.log(arr)

shuffle(arr)
console.log(arr)
