// Напишите функцию sumInput(), которая:
// 1. Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// 2. Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// 3. Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function getData() {
  let data = prompt('Введите число, от 0 до 10:', '');
  if (data === null) {
    return alert('Досвидания!');
  } else if (data === '') {
    alert('Вы ничего не ввели..');
    return getData();
  } else if (isNaN(data) === true) {
    alert('Давайте будем вводить только числа!');
    return getData();
  } else if (data < 0) {
    alert('Нет, нет.. только положительные числа!');
    return getData();
  } else if (data > 10) {
    alert('До 10, пожалуйста!');
    return getData();
  }
  data = Math.floor(data);
  return data;
}

function getNumArr() {
  let num = getData();
  let numArr = [];
  if (num !== undefined) {
    numArr.push(num);
    console.log(numArr);
    return getNumArr();
  } else {
    alert('Вот такая получилась сумма: ');
  }
}

getNumArr();

// решение JS Info
// function sumInput() {
//   let numbers = [];
//   while (true) {
//     let value = prompt("Введите число", 0);
//     // Прекращаем ввод?
//     if (value === "" || value === null || !isFinite(value)) break;
//     numbers.push(+value);
//   }

//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// alert( sumInput() );
