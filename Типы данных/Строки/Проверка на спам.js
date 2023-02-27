function checkSpam(str) {
  const viagra = 'viagra'
  const xxx = 'XXX'

  const lowerCaseStr = str.toLowerCase()
  return (
    lowerCaseStr.includes(viagra.toLowerCase()) ||
    lowerCaseStr.includes(xxx.toLowerCase())
  )
}

console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam('innocent rabbit'))
