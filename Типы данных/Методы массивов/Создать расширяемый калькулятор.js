function Calculator() {
  this.mathOperations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  }
  this.calculate = (str) => {
    const arr = str.split(' ')
    const num1 = Number(arr[0])
    const num2 = Number(arr[2])

    if (!(arr[1] in this.mathOperations)) return NaN
    if (isNaN(num1) || isNaN([num2])) return NaN

    return this.mathOperations[arr[1]](num1, num2)
  }

  this.addMethod = (name, func) => {
    this.mathOperations[name] = func
  }
}

const calc = new Calculator()

console.log(calc.calculate('3 + 7')) // 10
console.log(calc.calculate('3 - 7')) // -4

const powerCalc = new Calculator()
powerCalc.addMethod('*', (a, b) => a * b)
powerCalc.addMethod('/', (a, b) => a / b)
powerCalc.addMethod('**', (a, b) => a ** b)

console.log(powerCalc.calculate('2 ** 3')) // 8
console.log(powerCalc.calculate('2 * 3')) // 6
console.log(powerCalc.calculate('6 / 3')) // 2
console.log(powerCalc.calculate('6 sdsd 3')) // 2
console.log(powerCalc.calculate('0 / asd')) // 2
console.log(powerCalc.calculate('asder / 0')) // 2
