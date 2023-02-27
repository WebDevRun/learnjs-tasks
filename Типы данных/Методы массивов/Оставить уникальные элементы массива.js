function unique(arr) {
  const res = []

  for (const str of arr) {
    if (res.includes(str)) continue

    res.push(str)
  }

  return res
}

const strings = [
  'кришна',
  'кришна',
  'харе',
  'харе',
  'харе',
  'харе',
  'кришна',
  'кришна',
  ':-O',
]

console.log(unique(strings)) // кришна, харе, :-O
