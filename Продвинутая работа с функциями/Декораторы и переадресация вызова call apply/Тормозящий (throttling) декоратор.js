function throttle(f, ms) {
  let timer
  let savedThis
  let args

  return function wrapper() {
    if (timer) {
      savedThis = this
      args = arguments
      return
    }

    f.apply(this, arguments)

    timer = setTimeout(() => {
      timer = undefined

      if (args) {
        wrapper.apply(savedThis, args)
        savedThis = undefined
        args = undefined
      }
    }, ms)
  }
}

function f(a) {
  console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
const f1000 = throttle(f, 1000)

f1000(1) // показывает 1
f1000(2) // (ограничение, 1000 мс ещё нет)
f1000(3) // (ограничение, 1000 мс ещё нет)
f1000(4) // (ограничение, 1000 мс ещё нет)
f1000(5) // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано
