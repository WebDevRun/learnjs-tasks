function getSecondsToday() {
  const date = new Date()
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  return hour * 60 * 60 + minutes * 60 + seconds
}

console.log(getSecondsToday())
