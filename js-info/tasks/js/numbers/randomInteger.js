function randomInteger(min, max) {
  let minMax = Math.floor(Math.random() * (max + min));
  return console.log(minMax);
}

randomInteger(1, 11);

// решение JS info
// function randomInteger(min, max) {
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// }

// alert( randomInteger(1, 3) );
