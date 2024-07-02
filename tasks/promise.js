console.log(1);

const prom = new Promise((resolve, reject) => {
  reject(2);
  console.log(3);

  resolve(console.log(4));
});

setTimeout(() => {
  console.log(5);
}, 0);

prom
  .then((res) => console.log(res))
  .catch((res) => console.log(res))
  .then((res) => console.log(res));

console.log(6);

// 1, 3, 4, 6, 2, undefined, 5

// ------------ // ------------ // ------------ // ------------ //


Promise.reject("a")
  .catch((p) => p + "b")
  .catch((p) => p + "c") //не выполняется
  .then((p) => p + "d")
  .finally((p) => p + "e") //ничего не возвращает
  .then((p) => console.log(p)); // abd

  // ------------ // ------------ // ------------ // ------------ //

  Promise.resolve("foo")
  .then(Promise.resolve("bar"))
  .then(function (result) {
    console.log(result);
  });
  // foo

  // ------------ // ------------ // ------------ // ------------ //

  Promise.resolve("foo")
  .then(function () {
    return Promise.resolve("bar");
  })
  .then(function (result) {
    console.log(result);
  });

  // bar

  // ------------ // ------------ // ------------ // ------------ //


  Promise.resolve("foo")
  .then(() => Promise.resolve("bar"))
  .then(function (result) {
    console.log(result);
  });

  // bar

  // ------------ // ------------ // ------------ // ------------ //

  //Event Loop

console.log(1);
new Promise((res, rej) => {
  console.log(2);
  setTimeout(() => console.log(3), -1);
}).then(() => console.log(4)); //Promise не резолвится и ничего не возвращает.
//Остается в состоянии pending
Promise.resolve(5)
  .then(console.log) //первый выполняется из очереди
  .then(() => console.log(6)); //третий
Promise.reject(7)
  .catch(console.log) //второй выполняется из очереди
  .then(() => console.log(8)); //четвертый
setTimeout(() => console.log(9), 0);
console.log(10);

// 1, 2, 10, 4, 6, 8, 3, 9 ---
// 1, 2, 10, 5, 7, 8, 3, 9 +++++

// ------------ // ------------ // ------------ // ------------ //

function test() {
  const p = Promise.resolve();

  setTimeout(() => {
    console.log("timeout1");

    p.then(() => {
      console.log("promise");
    });
  }, 0);

  setTimeout(() => {
    console.log("timeout2");
  }, 0);
}
test(); //timeout1, promise, timeout2


// ------------ // ------------ // ------------ // ------------ //

function testAnimation() {
  const p = Promise.resolve();

  requestAnimationFrame(() => {
    console.log("timeout1");

    p.then(() => {
      console.log("promise");
    });
  });

  requestAnimationFrame(() => {
    console.log("timeout2");
  });
} // imeout1, promise, timeout2

console.log("test", testAnimation()); // timeout1, promise, timeout2

// ------------ // ------------ // ------------ // ------------ //

console.log(1)
setTimeout((()=>console.log(0)),1)

Promise.resolve()
.then(()=>console.log(2))
.then(()=>console.log(3))
.then(()=>console.log(4))
.then(()=>{throw new Error()})
.catch(()=>console.log(5))

// 1, 2, 3, 4, 5, 0

// ------------ // ------------ // ------------ // ------------ //

console.log(1)
setTimeout((()=>console.log(0)),1)

Promise.resolve()
.then(()=>console.log(2))
.then(()=>fetch())
.then(()=>console.log(4))
.then(()=>{throw new Error()})
.catch(()=>console.log(5))

// 1, 2, 5, 0
