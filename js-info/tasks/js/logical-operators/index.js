// Что выведет console.log (ИЛИ)?
console.log(null || 2 || undefined); // 2, это первое значение, которое в логическом контексте даст true

// Что выведет console.log (ИЛИ)?
console.log(console.log(1) || 5 || console.log(3)); // 1 и 5

// Что выведет console.log (И)?
console.log(1 && null && 2); // null, потому что это первое «ложное» значение из списка

// Что выведет console.log (И)?
console.log(console.log(1) && console.log(2)); // 1

// Что выведет этот код?
console.log(null || (2 && 3) || 4); // 3

// Что выведет этот код (||=, &&=)?
let value = NaN;
console.log((value &&= 10)); // NaN
console.log(value || (value = 20)); // 20
console.log((value &&= 30)); // 30
console.log((value ||= 40)); // 30

// Проверка значения из диапазона
let age;
if ((age) => 14 && age <= 90);

// Проверка значения вне диапазона
if (!(age >= 14 && age <= 90));
// или
if (age < 14 || age > 90);

// Вопрос об "if"
if (-1 || 0) console.log('first'); // выполнится
if (-1 && 0) console.log('second'); // не выполнится, т.к.  if(need -> true)
if (null || (-1 && 1)) console.log('third'); // выполнится

// Проверка логина
function login() {
  let enterName = prompt('Представитесь: ', '');
  if (enterName !== '' && enterName !== null) {
    console.log(enterName);
    return alert('Вы ввели: ' + enterName);
  } else if (enterName === null) {
    return alert('Отменено!');
  } else {
    alert('Ваше имя?');
    return login();
  }
}

login();
