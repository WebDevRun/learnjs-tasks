function copySorted(arr) {
  const copyArr = structuredClone(arr)
  return copyArr.sort((a, b) => a.localeCompare(b))
}

const arr = ['HTML', 'JavaScript', 'CSS']

const sorted = copySorted(arr)

console.log(sorted) // CSS, HTML, JavaScript
console.log(arr) // HTML, JavaScript, CSS (без изменений)
