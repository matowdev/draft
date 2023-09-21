function random(min, max) {
  let minMax = (Math.random() * (max - min) + min).toFixed(2);
  return console.log(minMax);
}

random(1, 5);
