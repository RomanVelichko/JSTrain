/**
 * Написать функцию sum, которая умее складывать числа,
 * Пример:
 * sum(1); // => console: 1
 * sum(1)(2)(3); // => console: 1 3 6 
 */

function sum(num){
  let res = num
  console.log(res)
  return function func() {
    res = res + arguments[0]
    console.log('console: ',res)
    return func
  }
}

sum(1)
sum(1)(2)(3)