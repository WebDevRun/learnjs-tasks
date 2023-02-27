function aclean(arr) {
  const obj = arr.reduce((acc, str) => {
    const sortStr = str
      .split('')
      .map((letter) => letter.toLowerCase())
      .sort((a, b) => a.localeCompare(b))
      .join('')

    acc[sortStr] = str
    return acc
  }, {})

  return Object.values(obj)
}

const arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares']

console.log(aclean(arr)) // "nap,teachers,ear" или "PAN,cheaters,era"
