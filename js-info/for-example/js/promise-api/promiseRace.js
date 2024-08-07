// ! главное, кто первый выполнится! ..не зависимо, resolve или reject
Promise.race([
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Ошибка!')), 5000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(
  function (result) {
    console.log(result); // 1
  },
  function (err) {
    console.log(err.message);
  }
);
