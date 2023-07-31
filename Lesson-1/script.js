"use strict";

// ПЕРЕМЕННЫЕ

let userName = "Alena";
console.log(userName);

let age = 10;
console.log(age);

let isLoggedIn = true;
console.log(isLoggedIn);

let x = 10;
let y = 5;
console.log("Координаты точки: x = ", x, "y = ", y);

let products = ["apple", "banana", "orange"];
console.log(products);

let user = {
    name: "Alena",
    age: 10,
    email: "alena@gmail.com",
    city: "Minsk"
}
console.log(user);

let sum = 10 + 10;
console.log(sum);

let message = "Hello, everyone! How are you?";
console.log(message);



// ВСТРОЕННЫЕ ФУНКЦИИ (alert, prompt, confirm, console.log)

alert("Hello, everyone! My name is Alena."); // Вывод диалогового окна с сообщением

let userName1 = prompt("What's your name?");
console.log("Hello,  " + userName1); // Вывод диалогового окна с запросом на ввод данных

let question = confirm("Is your favourite color red?"); // Вывод диалогового окна с запросом подтверждения
if (question) {
    console.log("Great choice!");
} else {
    console.log("No worries, everyone has their own favorite color!");
}



// ТИПЫ ДАННЫХ

// Число (Number)

let userAge = 15;
let price = 10.99;
let counter = 5;

let sum_numbers;
sum_numbers = 5 + 2;
console.log(sum_numbers); // 7

// BigInt - большие числа

let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber); // 1234567890123456789012345678901234567890n

// Строка (String)

let title = 'The Great White Shark!'; // Одинарные кавычки
let text = "The great white shark is the world's largest known predatory fish."; // Двойные кавычки
console.log(title, text);

/* 
Использование обратных кавычек для создания строки с интерполяцией 

Интерполяция - это процесс вставки или подстановки значений переменных внутрь строки или шаблона. В программировании интерполяция часто используется для создания строк, в которых значения переменных подставляются динамически.

В JavaScript интерполяция строк реализуется с помощью обратных кавычек (backticks) ` или одинарных кавычек ''. С использованием обратных кавычек, вы можете вставить значение переменной в строку, заключив переменную в специальный синтаксис ${...}. При выполнении кода JavaScript подставит значение переменной вместо этого выражения.
*/

let message2 = `Привет, меня зовут ${userName} и мне ${userAge} лет.`;
console.log(message2); // Привет, меня зовут Alena и мне 15 лет.

// Логический/Булевый тип (Boolean)

let isLogged = true;
let hasPermission = false;
let isAdmin = true;
let isBrave = true;

// Null - специальное значение, которое означает "ничего", "пусто", "значение неизвестно". Можно использовать для явного указания отсутствия значения или сброса значения переменной

let userAdress = null;
console.log(userAdress); // null

let someVar = null; // null
console.log(someVar); // null

// Undefined - "значение не было присвоено", пустая переменная

let userSurname;
console.log(userSurname); // undefined

let value1 = null; 
let value2;
console.log(value1);
console.log(value2);

console.log(value1 === null); // true
console.log(value2 === null); // false

console.log(value1 === undefined); // false
console.log(value2 === undefined); // true

console.log(userName); // Alena
userName = null;
console.log(userName); // null

// Объект (Object) - коллекция, набор пар ключ-значение. СОСТАВНОЙ ТИП! Хранит значения других типов

let person = {
    name: "Vera",
    age: 18,
    isStudent: true
  };
  console.log(person);

  let book = {
    title: "Гарри Поттер и философский камень",
    author: "Джоан Роулинг",
    pages: 336,
    genre: "фэнтези",
    isBestseller: true
  };
  console.log(book);

  /* Символ (Symbol) - специальный тип, который нужен для создания уникальных ключей в объектах. Даже если два символа имеют одинаковое описание, они всегда будут различными. Это делает символы полезными для создания специальных свойств объектов, которые не будут перезаписаны или перезаписываемы обычными свойствами. (Уникальные метки)*/

  let id = Symbol("id");  // Создание символа с описанием "id"

    let user1 = {
    [id]: 123, // Использование символа в качестве ключа для объекта
    name: "Mary",
    age: 19
    };
    console.log(user1[id]); // // Получение значения символа - 123



// ОПЕРАТОР typeof

typeof 42; // number
typeof 10n; // bigint
typeof "foo"; // string
typeof true; // boolean
typeof undefined; // undefined
typeof null; // object!!! ЗАПОМНИТЬ !!!
typeof {foo: 'bar'}; // object
typeof Symbol("id"); // symbol



// ПРИВЕДЕНИЕ ТИПОВ (явное (explicit) или неявное (implicit))

// Приведение к числу

// Явное приведение строки к числу с помощью функции Number()
let numbAsStr = "68";
let number1 = Number(numbAsStr);
console.log(number1); // 68
console.log(typeof(number1)); // number

let stringNotANumber = "Not a number!";
let numberWrong = Number(stringNotANumber);
console.log(numberWrong); // NaN (не число) !!!

let stringNotANumber2 = "two";
let numberWrong2 = Number(stringNotANumber);
console.log(numberWrong2); // NaN (не число) !!!

// Явное приведение логического значения к числу с помощью функции Number()
let isSmart = true;
let number2 = Number(isSmart);
console.log(number2); // 1
console.log(typeof(number2)); // number

let isWonderful = false;
let numberFromFalse = Number(isWonderful);
console.log(numFromFalse); // 0 (false приводится к числу 0)

// Неявное приведение строки к числу при математической операции
let numbAsStr2 = "6";
let number3 = numbAsStr2 * 2;
console.log(number3); // 12
console.log(typeof(number3)); // number

// Неявное приведение логического значения к числу при математической операции
let isGood = true;
let number4 = isGood + 5;
console.log(number4); // 6
console.log(typeof(number4)); // number

// Явное приведение NULL к числу с помощью функции Number()
let nullValue = null;
let numberFromNull = Number(nullValue);
console.log(numberFromNull); // 0 (null приводится к числу 0)

// Явное приведение undefined к числу с помощью функции Number()

let undefinedValue;
let numFromUndefined = Number(undefinedValue);
console.log(numFromUndefined); // NaN (undefined приводится к NaN)





