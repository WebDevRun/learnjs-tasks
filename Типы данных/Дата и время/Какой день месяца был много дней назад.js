function getDateAgo(date, days) {
  const dateCopy = new Date(date)
  dateCopy.setDate(date.getDate() - days)
  return dateCopy.getDate()
}

const date = new Date(2015, 0, 2)

console.log(getDateAgo(date, 1)) // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)) // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)) // 2, (2 Jan 2014)
