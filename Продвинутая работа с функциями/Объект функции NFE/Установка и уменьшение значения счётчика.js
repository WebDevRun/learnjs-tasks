function makeCounter() {
  function counter() {
    return counter.count++
  }

  counter.count = 0

  counter.set = (value) => {
    counter.count = value
  }

  counter.decrease = () => {
    counter.count--
  }

  return counter
}

const counter = makeCounter()

counter.set(12)
counter.decrease()
counter.decrease()
console.log(counter())
