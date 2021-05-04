const split = (str, delim) => {
  // write code for strings.split
  return str = str.split(delim)
}

const pairs = (str) => {
  // write code for strings.pairs
  let array = []
  str = str.split('')
  for(let i = 0; i < str.length; i+2) {
  array.push(str.splice(0,2).join(''))
  }
  return array
}

const reverse = (str) => {
  // write code for strings.reverse
  let strReverse = str.split('').reverse().join().replace(/,/g, "")
  return strReverse
}

module.exports = {
  split,
  pairs,
  reverse
}