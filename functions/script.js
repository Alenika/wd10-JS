"use strict";

// Рекурсия - разделение задачи на более простые задачи (простой вариант)

// Итеративный способ функции pow(x, n)
function pow (x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

console.log(pow(2, 2)); 

// Рекурсивный способ 

function pow1 (x, n) {
    if (n == 1) { // база рекурсии
        return x;
    } else {
        return x * pow1(x, n - 1); // шаг рекурсии
    }
}

console.log(pow1(2, 2));

// Использование условного оператора ?

function pow2 (x, n) {
    return (n == 1) ? x : (x * pow2);
}

