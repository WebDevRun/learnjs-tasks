const room = {
  number: 23,
}

const meetup = {
  title: 'Совещание',
  occupiedBy: [{ name: 'Иванов' }, { name: 'Петров' }],
  place: room,
}

// цикличные ссылки
room.occupiedBy = meetup
meetup.self = meetup

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    if (key !== '' && value === meetup) return

    return value
  })
)
