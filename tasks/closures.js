
// Тут есть проблема - что выведет эта функция

function f() {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => console.log(i)) // 10,10,10,10,...,10
  }
}

// 10 раз 10 из за области видимости var и setTimeout

// Варианты исправления:
// 1: Исправить var на let
  function f() {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => console.log(i)) // будет 0,1,2,3,4,5,6,7,8,9
    }
  }

// 2: Передать и принять параметр через 3й аргумент у setTimeout
  function f() {
    for (var i = 0; i < 10; i++) {
      setTimeout((i) => console.log(i),0,i) // будет 0,1,2,3,4,5,6,7,8,9
    }
  }

// 3: Забиндить 
function f() {
  for (var i = 0; i < 10; i++) {
    setTimeout(function (i) {console.log(i)}.bind(null, i)) // будет 0,1,2,3,4,5,6,7,8,9
  }
}

// 4: Коллбэк у setTimeout обернуть в самовызывающуюся функцию
function f() {
  for (var i = 0; i < 10; i++) {
    setTimeout(((i) => console.log(i))(i)) // будет 0,1,2,3,4,5,6,7,8,9
  }
}
