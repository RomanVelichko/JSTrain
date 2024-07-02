const count = (function (){
  let n = 1

  return function() {
    return n++
  }
})()

console.log(count())
console.log(count())
console.log(count())
console.log(count())
console.log(count())

// [LOG]: 1
// [LOG]: 2
// [LOG]: 3
// [LOG]: 4
// [LOG]: 5
