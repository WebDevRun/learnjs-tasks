const styles = ['Джаз', 'Блюз']

function getCenterIndex(array) {
  return Math.floor(array.length / 2)
}

styles.push('Рок-н-ролл')
styles[getCenterIndex(styles)] = 'Классика'
const firstElem = styles.shift()

console.log(firstElem)

styles.unshift('Рэп', 'Регги')

console.log(styles)
