<p align='right'>< TeachMeSkills /></p>
<h1 align='center'>Javascript Basic</h1>

## Complete exercise

### NORMAL level

#### Task 1 💻

Создайте переменные, затем сложите их и выведите результат в консоль разработчика.

```javascript
const x = 20
const y = 58
const z = 42

//Solution
const sumVar = x + y + z;
console.log(sumVar);
```

#### Task 2 💻

Создайте константы:

    - количество секунд в минуте
    - количество минут в часу
    - количество часов в сутках
    - количество суток в году
    
Посчитайте ваш возраст в секундах и поместите результат в переменную **`myAgeInSeconds`**

```javascript
//Solution
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DAYS_IN_YEAR = 365;

const myAgeInYears = 32; 
const myAgeInSeconds = myAgeInYears * DAYS_IN_YEAR * HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTE;

console.log("Мой возраст в секундах:", myAgeInSeconds);
```

#### Task 3 💻

```javascript
    let count = 42
    let userName = '42'
```

Создайте две переменные. Поместите в них переменную **`count`** и превратите в строку, а **`userName`** наоборот в число. Попробуйте реализовать задачу двумя разными способами.

```javascript
let count = 42
let userName = '42'

//Solution 1
let countToString = count.toString();
let userNameToNumber = parseInt(userName);
console.log(typeof(countToString));
console.log(typeof(userNameToNumber));

//Solution 2
let countToString = '' + count;
let userNameToNumber = +userName;
console.log(typeof(countToString));
console.log(typeof(userNameToNumber));
```

#### Task 4 💻
    
Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:    

    `Variable value: %variable value% has type: %type variable%`

```javascript
//Solution
let variable_1 = 42; 
let variable_2 = "Hello, world!"; 
let variable_3 = true; 

console.log(`Variable value: ${variable_1} has type: ${typeof variable_1}`);
console.log(`Variable value: ${variable_2} has type: ${typeof variable_2}`);
console.log(`Variable value: ${variable_3} has type: ${typeof variable_3}`);
```

#### Task 5 💻

Запросить у пользователя имя и возраст и вывести их в консоль.

```javascript
//Solution 
let userName = prompt("Введите ваше имя:");
let userAge = prompt("Введите ваш возраст:");
console.log("Ваше имя:", userName);
console.log("Ваш возраст:", userAge);
```

### ADVANCED level

#### Task 1 👨‍🏫 

Поменяйте значение переменных местами не создавая дополнительной переменной:

```javascript
let a = 4
let b = 3

//Solution 
a = a + b; 
b = a - b; 
a = a - b; 

console.log(a);
console.log(b); 