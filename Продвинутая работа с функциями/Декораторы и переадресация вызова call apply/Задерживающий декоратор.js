function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms)
  }
}

function f(x) {
  console.log(x)
}

// создаём обёртки
const f1000 = delay(f, 1000)
const f1500 = delay(f, 1500)

f1000('test') // показывает "test" после 1000 мс
f1500('test') // показывает "test" после 1500 мс
