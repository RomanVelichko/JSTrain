
// Из числа сделать массив с числами от нуля до указанно числа
// const num = 10

const num = 10

const getArray = (num) => {
  return Array.from({length: num}, (_, i) => i+1)
}

console.log(getArray(num))
