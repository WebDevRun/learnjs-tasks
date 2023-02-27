function camelize(str) {
  return str
    .split('-')
    .map((word, index) => {
      if (index === 0) return word
      return `${word[0].toUpperCase()}${word.slice(1)}`
    })
    .join('')
}

console.log(camelize('background-color') == 'backgroundColor')
console.log(camelize('list-style-image') == 'listStyleImage')
console.log(camelize('-webkit-transition') == 'WebkitTransition')
