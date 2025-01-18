// const myPromise = new Promise((resolve, reject) => {
//   const success = Math.random() > 0.5;
//   if (success) {
//     resolve('Виконано успішно');
//   } else {
//     reject('Не Успішно');
//   }
// });

// console.log('Стан промісу-pending');

// myPromise
//   .then((result) => {
//     console.log('Стан промісу-fulfilled');
//     console.log(result);
//   })

//   .catch((error) => {
//     console.log('Стан промісу-rejected');
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('Виведе у будь якому випадку');
//   });

// const myPromise = new Promise((resolve, reject) => {
//   const num = Math.floor(Math.random() * 21);
//   setTimeout(() => {
//     if (num > 10) {
//       resolve(`Число більше 10: ${num}`);
//     } else {
//       reject(`Число занадто мале: ${num}`);
//     }
//     myPromise
//       .then((result) => {
//         console.log('Виконано');
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log('Rejected');
//         console.log(error);
//       })
//       .finally(() => {
//         console.log('Завершено');
//       });
//   }, 1000);
// });

// const nums = [4, 6];

// const myPromise = new Promise((resolve, reject) => {
//   let even = true;
//   nums.forEach((num) => {
//     if (num % 2 !== 0) {
//       even = false;
//     }
//   });

//   if (even) {
//     resolve('Усі числа парні');
//   } else {
//     reject('Є непарні числа');
//   }
// });

// myPromise
//   .then((result) => {
//     console.log('Виконано');
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log('Не виконано');
//     console.log(error);
//   });

// const promise1 = Promise.resolve(10);
// const promise2 = Promise.reject(20);
// const promise3 = Promise.resolve(30);

// Promise.all([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const promise1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('1');
//   }, 1000);
// });

// const promise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('2');
//   }, 4000);
// });

// const promise3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('3');
//   }, 500);
// });

// Promise.race([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const promise1 = Promise.reject('Error');
// const promise2 = Promise.reject('Error2');
// const promise3 = Promise.resolve(30);

// Promise.any([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const promise1 = Promise.resolve('resolved');
// const promise2 = Promise.resolve('resolved2');
// const promise3 = Promise.resolve('resolved3');

// Promise.all([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => [console.log(error)]);

//  ! ===============================

// const fastPromise1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('resolved');
//   }, 2500);
// });
// const fastPromise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('resolved2');
//   }, 300);
// });
// const fastPromise3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('resolved3');
//   }, 1000);
// });

// Promise.race([fastPromise1, fastPromise2, fastPromise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => [console.log(error)]);

// ! ===============================

// const promisReject = new Promise((reject) => {
//   reject('Error');
// })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const promiseResolve = new Promise((resolve) => {
//   resolve('Completed');
// })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

raceTimeout = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Completed in: ' + ms + 'ms');
    }, ms);
  })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

raceTimeout(500);
raceTimeout(1500);
raceTimeout(2500);
raceTimeout(3500);
raceTimeout(4500);
