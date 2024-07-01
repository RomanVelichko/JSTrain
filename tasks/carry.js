// Создать функцию carry, которая принимает функцию и возвращает каррированную копию.
// Например,
// sum(1, 2, 3, …) // вернет сумму чисел

// const carrySum= carry(sum)
// carry(1)(2)(3)...


function sum(a, b) {
  if (b) {
    return a + b 
  } else {
    return (b) => {
      return a + b 
    }
  }
}


console.log(sum(1)(2));
console.log(sum(2, 2));
