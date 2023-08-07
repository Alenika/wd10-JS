"use strict";

// Введение в функции
function log(message) {
    console.log(message)
}
log(); //undefined
log('Введение в функции'); // Введение в функции
log('how is it going?') // how is it going?

/******************************************/

function showMessage1() {
    alert('Каждая функция имеет уникальное имя, по которому её можно вызвать.');
}
showMessage1();

/******************************************/

// Локальные переменные
function showMessage2() {
    let message = "Локальные переменные - это переменные, которые объявлены внутри определенного блока кода, функции или области видимости, и которые доступны только в пределах этого блока или функции. Они не видимы и не доступны за пределами своей области видимости."; // локальная переменная
    alert (message);
}
showMessage2();

/******************************************/

// Внешние переменные
let userName = "и они могут быть изменены и использованы в разных контекстах.";
function showMessage3() {
    let message = "Внешние переменные могут быть доступны из разных частей программы и функций, " + userName;
    alert(message);
}
showMessage3(); // 

/******************************************/

function log2(message) {
    const prefix = 'Logger says';

    console.log(`${prefix}: ${message}`);
}
log2('succesfully connected')

/******************************************/

// Функции имеют доступ к внешним переменным
let count = 0;
function logCount() {
    console.log(count);
}
logCount(); // 0
count++;
logCount(); // 1

/******************************************/

// Функции имеют возможность менять внешние переменные
function increment() {
    count++;
}
logCount(); // 1
increment();
logCount(); // 2

/******************************************/

// Функция сначала ищет переменные внутри себя, а затем снаружи
const hello = "Hello from outer scope!";
function greet() {
    const hello = "Hello from function!";
    console.log(hello);
}
greet();

// Лексическое окружение функции
let outerVar = "I'm outside!";
function outerFunction() {
    let innerVar = "I'm inside!";

    function innerFunction() {
        console.log(innerVar); // Эта функция найдет innerVar внутри себя
        console.log(outerVar); // Эта функция найдет outerVar во внешней области видимости
    }
    innerFunction(); // I'm inside!
}
outerFunction(); // I'm outside!

/******************************************/

// В функцию можно передать любые параметры
function log3(from, message) {
    console.log(`${from}: ${message}`);
}
log3('Auth Service', '401 - permission denied'); // Auth Service: 401 - permission denied

/******************************************/

// Если аргумент не передан - undefined (отсутствие значения)
function log4(from, message) {
    console.log((`${from}: ${message}`));
}
log4('Some Service'); // Some Service: undefined

/******************************************/

// Задать значение по умолчанию
function log5(from, message = 'your message here') {
    console.log((`${from}: ${message}`));
}
log5('Some Service'); // Some Service: your message here
log5('Some Service', null); // Some Service: null
log5('Some Service', ''); // Some Service: 

/******************************************/

// Как обработать нулиш "переменные"
function log6(from, message) {
    from = from ?? 'Unknown said'; // используем оператор нулевого присваивания (??) нулиш оператор
    message = message ?? 'empty message'; // для установки значения по умолчанию (если null или undefined)
    console.log(`${from}: ${message}`);
}
log6(); // Unknown said: empty message
log6('Someone', ''); // Someone: 

/******************************************/

// Как обработать пустую строку
function log7(from, message) {
    from = from || 'Unknown said'; // используем оператор AND (||) 
    message = message || 'empty message'; 
    console.log(`${from}: ${message}`);
}
log7(); // Unknown said: empty message
log7('Someone', ''); // Someone: empty message
log7('', ''); // Unknown said: empty message

/******************************************/

// Возвращаемое значение

function sum(a, b) {
    return a + b; // return - ключевое слово
}
console.log(sum(2, 2)); // 4


function sum2(a, b) {
    if (isNaN(a) && isNaN(b)) return 0;
    if (isNaN(a)) return b;
    if (isNaN(b)) return a;
    return a + b;
}
console.log(sum2(7, 'kek')); // 7
console.log(sum2('lol', 42)); // 42
console.log(sum2(2, 2)); // 4
console.log(sum2('lol', 'kek')); // 0

// return без возвращаемого значения -> undefined
function sum3(a, b) {
    if (isNaN(a) && isNaN(b)) return;
    if (isNaN(a)) return b;
    if (isNaN(b)) return a;
    return a + b;
}
console.log(sum3("lol", "kek")); // undefined

// Функция без возвращаемого значения -> undefined

function greet(name) {
    console.log(`Привет, ${name}!`); 
  } 
  const result = greet("Елена"); // Привет, Елена
  console.log(result); // undefined
  
  /******************************************/

  // Function Expression - создается только в момент, когда исполняется соответсвующий код
  const handleError = function(message) {
    console.error(`An error occured: ${message}`);
  }

  // Function Declaration - создается в момент, когда интерпретатор читает блок кода первый раз
  function handleError(message) {
    console.error(`An error occured: ${message}`);
  }

  /******************************************/

  // Блочная область видимости
  sum(2, 2); // Ошибка
  {
    function sum(a, b) {
        return a + b; // return - ключевое слово
        }
        console.log(sum(2, 2)); // 4
  }
  sum(2, 2); // 4
