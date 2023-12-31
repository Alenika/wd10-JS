"use strict"

// ЛОГИЧЕСКИЕ оператор

// OR (||) - Возвращает первое truthy значение
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false


// AND (&&) - Возвращает первое falsy значение
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// NOT (!) - возвращает булево значение
console.log(!true); // false
console.log(!false); // true

/* Напишите программу, которая запрашивает у пользователя его возраст и проверяет, находится ли он в возрастной группе от 18 до 30 лет. Если возраст пользователя соответствует этому диапазону, выведите сообщение: "Вы принадлежите к молодежной возрастной группе". В противном случае выведите сообщение: "Вы не входите в молодежную возрастную группу". */

let inputAge = prompt("Сколько Вам лет?");
let age = Number(inputAge);
if (age >= 18 && age <= 30) {
    console.log("Вы принадлежите к молодежной возрастной группе");
} else {
    console.log("Вы не входите в молодежную возрастную группу");
}

/* Напишите программу, которая запрашивает у пользователя его имя и фамилию. Если пользователь ввел и имя, и фамилию, выведите сообщение: "Привет, [Имя] [Фамилия]!". Если пользователь ввел только имя или только фамилию, выведите сообщение: "Пожалуйста, введите и имя, и фамилию". */

let userName = prompt("Введите Ваше имя");
let userSurname = prompt("Введите Вашу фамилию");
if (!userName || !userSurname) {
    console.log("Пожалуйста, введите и имя, и фамилию");
} else {
    console.log(`Привет, ${userName} ${userSurname}!`);
}

/* Напишите программу, которая запрашивает у пользователя его предпочитаемый язык программирования. Если пользователь вводит "JavaScript", выведите сообщение: "Отличный выбор!". В противном случае выведите сообщение: "Попробуйте JavaScript, это замечательный язык программирования!". */

let favoriteLanguage = prompt("Какой ваш предпочитаемый язык программирования?");
if (favoriteLanguage === "JavaScript") {
    console.log("Отличный выбор!");
} else {
    console.log("Попробуйте JavaScript, это замечательный язык программирования!");
}







