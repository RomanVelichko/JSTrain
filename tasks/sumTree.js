 /**
  * Написать функцию sum, которая будет считать сумму value во всем объекте tree
  */

const sumTree = (data) => {
  if (!data) return 0;

  let sum = data.value;

  if (Array.isArray(data.next)){
    for (let child of data.next) {
      sum += sumTree(child)
    }
  } else if (data.next !== null) {
    sum += sumTree(data.next)
  }


  return sum
}


const tree = {
  value: 1,
  next: [
    {
      value: 2,
      next: null,
    },
    {
      value: 2,
      next: {
        value: 4,
        next: null
      }
    }
  ]
}

console.log(sumTree(tree)) // 9
