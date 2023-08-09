"use strict"

// Литерал объекта


const a = {
    name: 'some',
}

const b = {
    'name': 'some',
}

const c = { // объект
    'name': {
        firstName: 'Kirill', // под ключом "firstName" хранится значение "Kirill"
        lastName: 'Taletski', // под ключом "lastName" хранится значение "Taletski"
    },
    4: 42, // под ключом "4" хранится значение "42"
}

/* Object.keys() - это встроенный метод, который используется для получения массива строк, представляющих все перечисляемые свойства (ключи) объекта. */

Object.keys(c).forEach(key => console.log(typeof key)); // 2 string

/******************************************/

// Доступ к значениям через оператор '.' (точка)

const shape = {
    type: 'circle',
    radius: 5,
}
console.log(shape.radius); // 5

// Удалить свойство с помощью delete

delete shape.radius; // true
console.log(shape); // {type: 'circle'}

/******************************************/

// Ключи


const profile = {
    name: 'John', // правило наименования переменных для ключа -> упрощенный синтаксис без кавычек
}

const profile2 = {
    "na_me$+": 'John', // если используем спецсимволы -> используем кавычки 
    name: 'John', // висячая запятая
}

// JSON - JS Object Notation - обязательно использовать двойные кавычки

/* Висячая запятая (trailing comma) - это запятая, которая добавляется после последнего элемента в списке или объекте, перед закрывающей скобкой или квадратной скобкой. Например, если поменять строки местами в коде. */

// Как обратиться к свойству со спецсимволами

console.log(profile2['na_me$+']); // используем квадратные скобки

const key = "na_me$+";
profile2[key]; // "na_me$+": 'John'

profile2.name = 'kek'; // name: 'kek'

profile2[key] = 'lol' // "na_me$+": 'lol'

// Синтаксис квадратных скобок [] для вычисления

const key2 = 'firstName'; // по этому ключу мы хотим положить в объект имя пользователя

const profile3 = {
    [key2]: 'Alena',
}
console.log(profile3); // Alena

const profile4 = {}; // пустой объект
profile4.name = 'Alica'; // создается ключ: значение
console.log(profile4); // {name: 'Alica'}

profile4['lol' + 'kek'] = 'cheburek';
console.log(profile4); // {name: 'Alica', lolkek: 'cheburek'}

/******************************************/

// Значения из переменных

const userResponse = +prompt('What is your age?');

let profile5 = {
    age: userResponse,
}

console.log(profile5); // введенное значение

const userAge = 42;

let profile6 = {
    age: userAge,
}

console.log(profile6); // {age: 42}

// Если названия ключа и значения повторяются

const age = 5;

let profile7 = {
    age,
}

console.log(profile7); // {age: 5}

/******************************************/


// Проверка существования ключа

let profile8 = {}; // пустой объект

console.log(profile8.name); // undefined - такого ключа не существует

if (typeof profile8.name === 'undefined') console.log('Не существует');
else console.log("Существует!"); // Не существует

let profile9 = {
    name: undefined,
}; 

if (typeof profile9.name === 'undefined') console.log('Не существует');
else console.log("Существует!"); // Выведет, что ключ не существует, хотя ключ есть но со значением undefined

// Оператор IN

console.log('name' in profile9); // true
console.log('name' in profile8); // false
console.log('name' in profile7); // false

// Разница проверки через typeof и оператор IN
// IN вернет true, если свойство есть со значением undefined

/******************************************/

// Копирование примитивов по значению

let str1 = "Hey there!";
let str2 = str1;
str1 = "I'm Alena";
console.log(str2 + " " + str1); // Hey there! I'm Alena

// Копирование по ссылке 

const profile_user1 = {
    name: "Loki",
}
const profile_user2 = profile_user1;

console.log(profile_user2); // {name: 'Loki'}
profile_user2.name = "Hulk";

console.log(profile_user1); // {name: 'Hulk'}


let originalObject = {
    name: "Alena",
    city: "Minsk",
}

let copyObject = originalObject;
copyObject.name = "Alice";

console.log(originalObject.name); // 'Alice'
console.log(copyObject.name); // 'Alice'

// Если нужно скопировать объект 'по значению'

let original = { name: 'Master Yoda' };
let copy = { ...original };

console.log(copy); // {name: 'Master Yoda'}

copy.name = 'Darth Vader'; 

console.log(original.name); // 'Master Yoda'
console.log(copy.name); // 'Darth Vader'


// Object.assign

let copyByValue = Object.assign({}, original); 
console.log(copyByValue); // {name: 'Master Yoda'}

copyByValue.name = "Hulk";

console.log(copyByValue); // {name: 'Hulk'}, свое место в памяти, на которое он ссылается
console.log(original); // {name: 'Master Yoda'}

// Присваивание через const - гарант неизменности ссылки

const profile22 = {}; // const относится к переменной, в которой лежит ссылка, которую нельзя поменять

profile22.surname = "Ahiyevich"; //  а вот значение можно поменять
console.log(profile22); // {surname: 'Ahiyevich'}
profile22.surname = "Makarevich";
console.log(profile22); // {surname: 'Makarevich'}

/*
profile22 = {
    someKey: "someValue",
}
console.log(profile22); // Assignment to constant variable. ОШИБКА!!!
*/

// Сравнение объектов `===` (сравнение ссылок)

console.log(profile22 === profile2); // false (разные ссылки!!!)

const profile33 = profile22;
console.log(profile33 === profile22); // true

/******************************************/

// ЦИКЛЫ (for ... in)


const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'blue',
};

for (let key in car) {
    console.log(key + ": " + car[key]);
}


const expenses = {
    groceries: 100,
    rent: 800,
    utilities: 150,
    entertainment: 50,
};

let total = 0;

for (let key in expenses) {
    total += expenses[key];
}
console.log(`Вы потратили за этот месяц ${total} рублей.`);

let codes = {
    "49": "Германия",
    "41": "Швейцария",
    "44": "Великобритания",
};

for (let code in codes) {
    console.log(code);
}

/******************************************/

// По ключу в объект можно записать любое значение, в том числе и функцию

const student = {
    firstName: "Alice",
    lastName: "Wonderland",
    age: 20,
    isEnrolled: true,
};

student.greet = function () {     // Записали функцию по ключу greet
    console.log("Welcome to our university!");
};

student.greet(); // Welcome to our university! (через круглые скобки вызвали)

student.inspiringMessage = () => console.log('We look forward to serving you the best education you need to fulfill your dreams!');

student.inspiringMessage
student.inspiringMessage();





