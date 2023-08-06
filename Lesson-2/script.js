"use strict";

// ОПЕРАТОРЫ

let x = 5;
let y = -x; // Унарный минус меняет знак числа
console.log(y); // -5

x = "5"; 
y = +x; // Унарный плюс преобразует строку в число
console.log(y); // 5

x = true;
y = +true; // Преобразует true в 1 и false в 0
console.log(y); // 1

// Математические операции

x = 5;
y = 10;

let sum = x + y; // Сложение (addition)
console.log(sum); // 15

let difference = x - y; // Вычитание (subtraction)
console.log(difference); // -5

let multip = x * y; // Умножение (multiplication)
console.log(multip); // 50

let division = x / y; // Деление (division)
console.log(division); // 0.5

let remainder = x % y; // Взятие остатка от деления (modulo)
console.log(remainder); // 5
remainder = console.log(6 % 3); // 0
remainder = console.log(7 % 3); // 1
remainder = console.log(8 % 3); // 2

 // Возведение в степень (exponentiation of numbers)

console.log(2 ** 1); // 2
console.log(2 ** 2); // 4
console.log(2 ** 3); // 8
console.log(2 ** 4); // 16

// Взятие корня

console.log(4 ** 1 / 2); // 2
console.log(9 ** 1 / 3); // 3

// Конкатенация строк при помощи бинарного плюса

console.log("5" ** 2); // number 25
console.log("" ** 2); // number 0
console.log("" + 2); // string "2"
console.log("5" + 2); // string "52"
console.log("5" + "kek" + 2); // string "5kek2"
console.log(5 + 5 + 10 + "5" + "kek" + 2 + 10); // string "205kek2"
console.log(1 + 1 + 1 + "5" + "kek" + 1 + 2 + 3); // string "35kek123"

// Приведение значения к числу

console.log(+'55'); // number 55
console.log(+'205'); // number 205

console.log("205" * 1); // number 205
console.log(Number("205")); // number 205

const a = + x; 
console.log(a); // 5

// Составное присваивание 

let w = 5;

w += 3; // w = w + 3;
console.log(w); // 8

w -= 4; // w = w - 4;
console.log(w); // 4

w *= 2; // w = w * 2;
console.log(w); // 8

w /= 2; // w = w / 2;
console.log(w); // 4

console.log(w);
console.log(w = 10); // Присвоит значение 10 и вернет это значение

let b = 0;
b = 5 + (w = 10 + 15);
console.log(b); // 30
console.log(w); // 25
console.log(b = 2 * (w = 1 + 2)); // 6
console.log(b); // 6
console.log(w); // 3

// ПРИОРИТЕТЫ

console.log(2 + 3 * 4); // 14
console.log(10 - 2 * 3 + 5 / 5); // 10 - (2 * 3) + (5 / 5) = (10 - 6) + 1 = 5
console.log(4 * 2 ** 3); // 4 * (2 ** 3) = 4 * 8 = 32
console.log(2 ** 3 ** 2); // 2 ** (3 ** 2) = 2 ** 9 = 512


// ИНКРЕМЕНТ (++)

// Сначала увеличиваем значение переменной на единицу, а затем возвращаем новое значение
w = 5;
let prefixIncrement = ++w;

console.log(w); // 6
console.log(prefixIncrement); // 6

// Сначала присваиваем текущее значение w(5) переменной postfixIncrement, затем увеличиваем w до 6
w = 5;
let postfixIncrement = w++;

console.log(w); // 6
console.log(postfixIncrement); // 5


// ДЕКРЕМЕНТ (--) 

// Сначала уменьшаем значение переменной на единицу, а затем возвращаем новое значение
y = 5;
let prefixDecrem = --y;

console.log(y); // 4
console.log(prefixDecrem); // 4

// Сначала уменьшаем значение переменной на единицу, а затем возвращаем новое значение
y = 5;
let postfixDecrem = y--;

console.log(y); // 4
console.log(postfixDecrem); // 5

// Задача. Попросите пользователя ввести число. Затем используя префиксный инкремент увеличьте это число на 1 и выведите результат на экран.

let userInputNumber = prompt("Введите число: ");
let incrementPrefixNumber = Number(++userInputNumber);
alert(incrementPrefixNumber);

// Задача. Используя постфиксный декремент уменьшите число из предыдущей задачи на 1 и выведите результат на экран.

let postfixDecremNumber = incrementPrefixNumber--;
alert(postfixDecremNumber);

// Задача. Ииспользуя постфиксный инкремент увеличьте число 10 на 1, а затем используя префиксный декремент уменьшите его на 1. Выведите оба результата на экран.

let numberTen = 10;
numberTen++;
console.log("Постфиксный инкремент:", numberTen); // 11
--numberTen;
console.log("Префиксный декремент:", numberTen); // 10

// ЛОГИЧЕСКИЕ

console.log("Z" > "A"); //true
console.log('cat' > 'cam'); // true
console.log('caterpillar' > 'cat'); // true

console.log(3 == '3'); // true
console.log(5 != 10); // true
console.log(5 === 5); // true
console.log(5 !== '5'); // true
console.log(5 > 4); // true
console.log(3 < 7); // true
console.log(5 >= 5); // true
console.log(5 <= 5); // true

console.log('abc' === 'abc');
console.log("apple" < "banana"); // true
console.log("cat" > "dog"); // false 
console.log("hello" === "hello" ); // true
console.log("abc" <= "abcd" ); // true
console.log("Alena" !== "Ahiyevich"); // true

// Сравнение разных типов (приведение к числу)

console.log('5' > 3); // true
console.log('01' == 0); // false
console.log("0" < 5); // true
console.log("not a number" < 5); // false
console.log(NaN === 5); // false
console.log(NaN == 'not a number'); // false

console.log(null === null); // true
console.log(undefined === undefined); // true

console.log(null > 1); // false
console.log(null >= 0); // true
console.log(null == 0); // false

console.log(undefined > 1); // false
console.log(undefined >= 0); // false
console.log(undefined == 0); // false
