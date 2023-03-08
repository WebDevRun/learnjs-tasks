function Obj(name) {
  this.name = name
}
Obj.prototype = {
  eat: true,
  constructor: Obj, // Если откючить, то obj2 сломается
}

const obj = new Obj('Sam')

Obj.prototype.jump = false

console.log(obj, obj.eat, obj.jump)

const obj2 = new obj.constructor('Ivan')

console.log(obj2, obj2.eat, obj2.jump)
