// Название JavaScript
// Используя конструкцию if..else, напишите код, который будет спрашивать: Какое «официальное» название JavaScript?
function getOfficialName() {
  let name = prompt('Какое «официальное» название у/для JavaScript?', '');
  if (name === 'ECMAScript' || name === 'ecmascript') {
    return alert('Верно! Ecma-знаток!');
  } else if (name === null) {
    return alert('До свидания..');
  } else if (name === '') {
    return alert('Да же и не попробовали..');
  } else {
    return alert('Не знаете? «Официальное» название - ECMAScript!');
  }
}

getOfficialName();
