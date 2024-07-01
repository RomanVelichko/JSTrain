const arr = [1, [2, [3, 4]], [5]]; 

/**
 * FLATTEN
 * Написать функцию, которая из многомерного
 * массива вернет одномерный
 */
const flatten = (arr) => {

  let flattenArr = [];

  for (let item of arr) {

    if (!Array.isArray(item)) {
      flattenArr.push(item)
    } else {
      flattenArr.push(...flatten(item))
    }
  }

  return flattenArr;
}

console.log(flatten(arr));