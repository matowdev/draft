function readNumber() {
  let enterNumber = prompt('Введите число от 1 до 10: ', '');
  if (enterNumber !== '' && enterNumber !== null) {
    console.log(enterNumber);
    return alert('Вы ввели: ' + enterNumber);
  } else if (enterNumber === null) {
    return alert('Вы отменили ввод, досвидания!');
  } else {
    alert('Введите соответствующее число!');
    return readNumber();
  }
}

readNumber();
