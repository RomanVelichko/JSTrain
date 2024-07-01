const p = (t, i) =>

  new Promise((res, rej) => {
    setTimeout(Math.random() > 0.5 ? res : rej, t, i);
  });

// Реализовать  Promise.all 
// Результат выполнения промиса должен соответсвовать с тем,
// на каком индексе в массиве находится промис
//
// Promise.all([p(1000, 1), p(2000, 2), p(500, 3)])
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

/** Полифилл - Реализация PromiseAll */
const promiseAll = (promises) => {
  const result  = [];
  let count = 0;

  return new Promise((resolve, rejected) => {
    promises.forEach( (promise, index) => {
      
      promise.then((data) => {
        promise[index] = data;
        count++;

        if (count === promises.length) {
          resolve(result);
          console.log('RESOLVED')
        }

      })
      .catch((err) => {
        rejected(err)
        console.log('ERROR', err)
      })

    });
  })
}

promiseAll([p(1000, 1), p(2000, 2), p(500, 3)])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
