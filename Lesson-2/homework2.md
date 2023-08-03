<p align='right'>< TeachMeSkills /></p>
<h1 align='center'>Javascript Basic</h1>

## Complete exercise

### NORMAL level

#### Task 1 💻

Написать перебор от 1 до 20, где выведутся все числа кратные трём.

> Для вычисления кратности обратите внимание на оператор %

☞ *Кратность 3 означает, что если мы разделим данное число на 3, то останется ноль в остатке. Например, числа 3, 6, 9, 12, 15, 18 и т.д. являются кратными 3, потому что они делятся на 3 без остатка.*

```javascript
   // Solution
   for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
```

#### Task 2 💻

Нам надо идти на работу, но нужно проверить все ли мы взяли или нет?
Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин. 
Для решения этой задачи нам помогут логические операторы **`|| &&`**.

```javascript
    let key = true
    let documents = true
    let pen = true
    let apple = false
    let orange = true
```

> Ответ поместите в переменную **shouldGoToWork**

```javascript
    let key = true
    let documents = true
    let pen = true
    let apple = false
    let orange = true

    // Solution 1
    let hasFruit = apple || orange;
    let hasRequiredItem = key && documents && pen;
    let shouldGoToWork = hasFruit && hasRequiredItem;
    if (shouldGoToWork) {
    console.log("Можем идти на работу!");
    } else {
    console.log("Нельзя идти на работу! Чего-то не хватает.");
    }

    // Solution 2
    let shouldGoToWork = key && documents && pen && (apple || orange);
    console.log(shouldGoToWork ? "Можем идти на работу!" : "Нельзя идти на работу! Чего-то не хватает.");
```

#### Task 3 (boolean operators, conditionals)

Напишите программу, которая спрашивает у пользователя номер года, а затем выводит на 
экран, високосный ли это год.

☞ *Високосный год - это год, который имеет одно особое свойство: в феврале месяце в нем **29 дней** вместо обычных 28 дней.*
* Год делится на 4 без остатка - это значит, что год может быть високосным.
* Но если год также делится на 100 без остатка, то это не високосный год.
* Если год делится на 400 без остатка, то это всегда високосный год._

☞ *Функция prompt() возвращает введенное пользователем значение в виде строки (тип данных String). Если пользователь ввел данные и нажал "ОК", то функция вернет введенную строку. Если пользователь ничего не ввел и нажал "ОК", функция вернет пустую строку "". Если пользователь нажал "Отмена", функция вернет null.*

```javascript
let userInputYear = prompt("Введите номер года:");

// Solution 1
if (userInputYear !== null && userInputYear !== "" && !isNaN(userInputYear)) {
   let year = parseInt(userInputYear); 
   switch (true) {
      case year % 400 === 0:
         console.log("Високосный год");
         break;
      case year % 100 === 0:
         console.log("Не високосный год");
         break;
      case year % 4 === 0:
         console.log("Високосный год");
         break;
      default:
         console.log("Не високосный год");
   }
} else {
   console.log("Ошибка! Введите корректное значение года.");
}

// Solution 2 
if (userInputYear !== null && userInputYear !== "" && !isNaN(userInputYear)) {
   let year = Number(userInputYear); 
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("Високосный год");
        } else {
        console.log("Не високосный год");
        } 
    } else {
   console.log("Ошибка! Введите корректное значение года.");
}
```

#### Task 4 💻

Запросить у пользователя число: 

    1. Если число делится без остатка на 5 выводим сообщение Fiz
    2. Если число делится без остатка на 3 выводим сообшение Buz
    3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz

```javascript
// Solution 
let userInputANumber = prompt("Введите число:");

if (userInpuANumber !== null && userInputANumber !== "") {
    let number = Number(userInput);

    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizBuz");
    } else if (number % 3 === 0) {
        console.log("Buz");
    } else if (number % 5 === 0) {
        console.log("Fiz");
    } else {
        console.log("Число не делится ни на 3, ни на 5.");
    }
} else {
    console.log("Вы не ввели число.");
}
```

#### Task 6 💻

Используя конструкцию `switch`, напишите программу, которая спрашивает у пользователя 
номер месяца и года, а затем выводит на экран количество дней в этом месяце.

Если номер месяца введён неверно - напишите об этом в консоль (можно использовать 
`console.error()`)

> используйте метод для определения високосного года из задания 3


```javascript
// Solution 
let monthInput = prompt("Введите номер месяца (от 1 до 12):");
let yearInput = prompt("Введите год:");

let month = Number(monthInput);
let year = Number(yearInput);

if (month >= 1 && month <= 12 && !isNaN(year)) {
  let daysInMonth;

  switch (month) {
    case 2: // Февраль
      daysInMonth = isLeapYear(year) ? 29 : 28;
      break;
    case 4: // Апрель
    case 6: // Июнь
    case 9: // Сентябрь
    case 11: // Ноябрь
      daysInMonth = 30;
      break;
    default: 
      daysInMonth = 31;
      break;
  }

  console.log(`В месяце ${month} года ${year} ${daysInMonth} дней.`);
} else {
  console.error("Неверный ввод. Пожалуйста, введите корректные значения.");
}
```

### ADVANCED level

#### Task 1 👨‍🏫 

Напишите программу, которая выполняет следующие операции: 

1. Запрашивает у пользователя число.
2. Последовательно задает вопрос: 
    cколько отнять / прибавить / умножить / разделить от предыдущего результата?
3. По окончании вывести пользователю **`alert`**, содержащий формулу и результат например: 
> ((((6 - 10) + 5) * 20) / 2 = 110)

```javascript
// Solution 
let userInputNumber = prompt("Введите число:");
let result = null;
let number = null;

if (userInputNumber !== null && userInputNumber !== "" && !isNaN(userInputNumber)) {
    number = Number(userInputNumber);
    console.log(`Вы ввели ${number}`);

    let subtractNum = prompt(`Сколько отнять от ${number}?`);
    if (subtractNum !== null && subtractNum !== "" && !isNaN(subtractNum)) {
        number -= Number(subtractNum);

        let addNum = prompt(`Сколько прибавить к ${number}?`);
        if (addNum !== null && addNum !== "" && !isNaN(addNum)) {
            number += Number(addNum);

            let multiplyNum = prompt(`На какое число умножить ${number}?`);
            if (multiplyNum !== null && multiplyNum !== "" && !isNaN(multiplyNum)) {
                number *= Number(multiplyNum);

                let divideNum = prompt(`На какое число разделить ${number}?`);
                if (divideNum !== null && divideNum !== "" && !isNaN(divideNum)) {
                    number /= Number(divideNum);
                    console.log(number);
                    result = alert(`Результат = ${number}. Формула = ((((${userInputNumber} + ${addNum}) - ${subtractNum}) * ${multiplyNum}) / ${divideNum} = ${number}`);
                } else {
                    alert("Неверный ввод. Пожалуйста, введите корректное число.");
                }
            } else {
                alert("Неверный ввод. Пожалуйста, введите корректное число.");
            }
        } else {
            alert("Неверный ввод. Пожалуйста, введите корректное число.");
        }
    } else {
        alert("Неверный ввод. Пожалуйста, введите корректное число.");
    }
} else {
    alert("Неверный ввод. Пожалуйста, введите корректные значения.");
}
```

#### Task 2 👨‍🏫

Написать программу, которая будет выводить в консоль лесенку.

```
    #
    ##
    ###
    ####
    #####
    ######
```

```javascript
    let stairs = "";
    let row = 6;

    for (let i = 1; i <= row; i++) {
    stairs += "#";
    console.log(stairs);
}
```

#### Task 3 👨‍🏫 

Дополните результат задания 6 так, чтобы программа спрашивала пользователя до тех пор, пока он не введёт корректное значение или напишет в окошко `prompt()` специальное стоп-слово.

> Вам понадобится бесконечный цикл

```javascript
    while (true) {
    let monthInput = prompt("Введите номер месяца (1-12) или 'stop' для завершения:");
    if (monthInput === "stop") {
        console.log("The End");
        break;
    }

    let yearInput = prompt("Введите год:");
    let month = Number(monthInput);
    let year = Number(yearInput);

    if (month >= 1 && month <= 12 && !isNaN(year)) {
        let daysInMonth;

        switch (month) {
        case 2: 
            daysInMonth = isLeapYear(year) ? 29 : 28;
            break;
        case 4: case 6: case 9: case 11:
            daysInMonth = 30;
            break;
        default: 
            daysInMonth = 31;
            break;
        }

        console.log(`В месяце ${month} года ${year} ${daysInMonth} дней.`);
    } else {
        console.error("Неверный ввод. Пожалуйста, введите корректные значения.");
    }
}
```