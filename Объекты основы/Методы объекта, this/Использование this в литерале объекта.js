function makeUser() {
  return {
    name: 'John',
    ref: this,
  }
}

let user = makeUser()

console.log(user.ref.name) // Error, т.к. у makeUser() ствойство ref = undefined
