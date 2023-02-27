function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1)
}

console.log(getLastDayOfMonth(2012, 1)) // 29
console.log(getLastDayOfMonth(2012, 2))
