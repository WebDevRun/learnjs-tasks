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

// function printListReverse(list) {
//   const listValues = []
//   let tempList = list

//   while (tempList) {
//     listValues.push(tempList.value)
//     tempList = tempList.next
//   }

//   for (let i = listValues.length - 1; i >= 0; i--) {
//     console.log(listValues[i])
//   }
// }

function printListReverse(list) {
  if (list.next) {
    printListReverse(list.next)
  }

  console.log(list.value)
}

printListReverse(list)
