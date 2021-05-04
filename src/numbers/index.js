const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 == 0) {
    return true
  } 
  return false
}

const sum = (arr) => {
  // write code for numbers.sum
  let total = 0;
  arr.forEach(element => {
    total += element
  });
  return total
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for(let i = 0; i < arr.length; i++) {
    let element = arr[i];
    for(let j = element + 1; j < arr.length; j++) {
      if(arr[j] + element == sum) {
        return true
      }
    }
  } 
  return false
}

module.exports = {
  isEven,
  sum,
  comboSum
}