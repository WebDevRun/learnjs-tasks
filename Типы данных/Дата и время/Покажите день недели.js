function getWeekDay(date) {
  const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']

  return days[date.getDay()]
}

const date = new Date(2012, 0, 3) // 3 января 2012 года
console.log(getWeekDay(date))
