function getPairedNumArr(num) {
  const pairedNumArr = [];

  for (let i = 1; i <= num; i++) {
    pairedNumArr.push(i, i);
  }

  return pairedNumArr;
}

const pairedArr = getPairedNumArr(4);
console.log(pairedArr); // [1, 1, 2, 2, 3, 3, 4, 4]
