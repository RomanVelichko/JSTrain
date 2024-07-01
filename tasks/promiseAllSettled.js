const p = (t, i) =>

  new Promise((res, rej) => {
    setTimeout(Math.random() > 0.5 ? res : rej, t, i);
  });

// Реализовать Promise.allSettled
// Результат выполнения промиса должен соответсвовать с тем,
// на каком индексе в массиве находится промис
//
// Promise.allSettled([p(1000, 1), p(2000, 2), p(500, 3)]).then((result) =>
//   console.log(result)
// );

/** Полифилл - Реализация PromiseAllSettled */
const promiseAllSettled = (promises) => {
  let result = [];
  let settledCount = 0;
  return new Promise((resolve, rejected) => {
    promises.forEach((promise, index) => {
      promise
      .then((data) => {
        result[index] = {status: 'fullfield', value: data};
      })
      .catch((err) => {
        result[index] = {status: 'rejected', reason: err};
      })
      .finally(() => {
        settledCount++;

        if (settledCount === result.length) {
          resolve(result);
        }
      });
    });
  });
}


promiseAllSettled([p(1000, 1), p(2000, 2), p(500, 3)])
  .then((result) => console.log(result));
