function getPairedNumArr(num) {
  const pairedNumArr = [];

  for (let i = 1; i <= num; i++) {
    pairedNumArr.push(i, i);
  }

  return pairedNumArr;
}

const pairedArr = getPairedNumArr(4);
console.log(pairedArr); // [ 1, 1, 2, 2, 3, 3, 4, 4 ]

// !
function getShuffledArr(pairedArr) {
  const newArr = [...pairedArr];

  for (let i = newArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }

  return newArr;
}

const shuffledArr = getShuffledArr(pairedArr);
console.log(shuffledArr); // [ 2, 1, 3, 4, 3, 1, 2, 4 ]

// !
function creatingElements(shuffledArr) {
  for (let i = 0; i < shuffledArr.length; i++) {
    ul.append(li);
    li.value = shuffledArr[i];
  }
}
