const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
}

// function printList(list) {
//   let tempList = list

//   while (tempList) {
//     console.log(tempList.value)
//     tempList = tempList.next
//   }
// }

function printList(list) {
  console.log(list.value)

  if (list.next === null) {
    return
  }

  printList(list.next)
}

printList(list)
