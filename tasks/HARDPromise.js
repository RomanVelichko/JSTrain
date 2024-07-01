
/** SUPER HARD PROMISE */
function a() {
  console.log(1);
  const timer = setTimeout(() => {
    console.log("interval", 2);
  }, 100);
  const b = (item) => {
    const promise = new Promise((resolve, reject) => {
      console.log(`b(${item})-${3}`);

      if (item % 2 === 0) resolve(item);
      if (item % 2 != 0) reject(item);
    });

    promise
      .then((result) => console.log(`then:${result}-4`))
      .then((result) => console.log(`then:${result}-5`));
    promise
      .then((result) => console.log(`then:${result}-6`))
      .catch((result) => console.log(`then:${result}-7`));

    promise
      .catch((result) => console.log(`catch:${result}-8`))
      .then((result) => console.log(`then:${result}-9`));

    promise
      .catch((result) => console.log(`catch:${result}-10`))
      .catch((result) => console.log(`then:${result}-11`));

    promise.then(
      () => {
        console.log(12);
        clearTimeout(timer);
      },
      () => {
        console.log(13);
        clearTimeout(timer);
      }
    );
  };

  b(14);
  Promise.resolve().then(() => console.log(15));
  console.log(16);
  b(17);
}

a();

// 1
// b(14)-3
// 16
// b(17)-3
// then:14-4
// then:14-6
// 12
// 15
// catch:17-8
// catch:17-10
// 13
// then:undefined-5
// then:14-9
// then:17-7
// then:undefined-9
