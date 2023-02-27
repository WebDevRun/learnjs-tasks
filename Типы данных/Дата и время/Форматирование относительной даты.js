function formatDate(date) {
  const now = Date.now()
  const diff = now - date
  const map = new Map()

  const formatDate = (date) => {
    const format = (num) => (num < 10 ? `0${num}` : `${num}`)

    const year = date.getFullYear() % 100
    const monthNum = date.getMonth() + 1
    const monthStr = format(monthNum)
    const dateNum = date.getDate()
    const dateStr = format(dateNum)
    const hourNum = date.getHours()
    const hourStr = format(hourNum)
    const minutesNum = date.getMinutes()
    const minutesStr = format(minutesNum)

    return `${dateStr}.${monthStr}.${year} ${hourStr}:${minutesStr}`
  }

  map
    .set(1000, (date) => 'прямо сейчас')
    .set(60 * 1000, (date) => '30 сек. назад')
    .set(60 * 60 * 1000, (date) => '5 мин. назад')
    .set(Infinity, formatDate)

  for (const [key, fn] of map) {
    console.log(diff, key, diff < key)
    if (diff < key) return fn(date)
  }
}

console.log(formatDate(new Date(new Date() - 1))) // "прямо сейчас"
console.log(formatDate(new Date(new Date() - 30 * 1000))) // "30 сек. назад"
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))) // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)))
