function getLocalDay(date) {
  let day = date.getDay()

  if (day == 0) day = 7

  return day
}

const date = new Date(2012, 0, 6) // 3 января 2012 года
console.log(getLocalDay(date))
