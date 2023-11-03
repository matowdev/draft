// Перемешайте массив
// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
let numArr = [1, 2, 3];

function shuffle(arr) {
  let temp;
  for (let i = 0; i <= arr.length - 1; i++) {
    let j = Math.floor(Math.abs(Math.random() * arr.length - 1));
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  console.log(arr);
}

shuffle(numArr);

// решение JS Info
