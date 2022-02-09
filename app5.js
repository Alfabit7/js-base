//5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических операций
// (использовать функции из задания 4) и вернуть полученное значение.




"use strict";


/**
 * объявляем декларативной функцию сложения двух произвольных чисел
 * @param {number} a любое число 
 * @param {number} b  любое число 
 * @returns возвращает результат сложения числа a и b
 */
function sumRandomTwoNumbers(a, b) {
    return (a + b);
}


/**
 *  * объявляем декларативной функцию вычитания двух произвольных чисел
 * @param {number} a любое число 
 * @param {number} b  любое число 
 * @returns возвращает результат вычитания числа a и b
 */
function differenceRandomTwoNumbers(a, b) {
  return (a - b);
}

/**
 *  * объявляем декларативной функцию деления двух произвольных чисел
 * @param {number} a любое число 
 * @param {number} b  любое число 
 * @returns возвращает результат деления числа a и b
 */
function divisionRandomTwoNumbers(a, b) {
  return (a / b);
}

/**
 *  * объявляем декларативной функцию умножения двух произвольных чисел
 * @param {number} a любое число 
 * @param {number} b  любое число 
 * @returns возвращает результат умножения числа a и b
 */
function multiplicationRandomTwoNumbers(a, b) {
  return (a * b);
}

//объявляем функцию, которая выполняет с опернадами arg1 и arg2 одно из действий (+, -, \, *) в зависимости от того какая функция передается ей в третий параметр

/**
 * объявляем функцию, которая выполняет с опернадами arg1 и arg2 одно из действий (+, -, \, *) в зависимости от того какая функция передается ей в третий параметр operation
 * @param {number} arg1 любое целое число 
 * @param {number} arg2 любое целое число
 * @param {function} operation одна из функций выполняющая либо сложение, либо вычитание, либо деление, либо умножение.
 * @returns 
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "sumRandomTwoNumbers":
            console.log( multiplicationRandomTwoNumbers (arg1, arg2));
            return multiplicationRandomTwoNumbers (arg1, arg2);
        case "differenceRandomTwoNumbers":
            console.log( differenceRandomTwoNumbers (arg1, arg2));
            return differenceRandomTwoNumbers (arg1, arg2);
        case "divisionRandomTwoNumbers":
            console.log( divisionRandomTwoNumbers (arg1, arg2));
            return divisionRandomTwoNumbers (arg1, arg2);
        case "multiplicationRandomTwoNumbers":
            console.log( multiplicationRandomTwoNumbers (arg1, arg2));
            return multiplicationRandomTwoNumbers (arg1, arg2);
    }
    
} 
//Вызываем  функцию 
mathOperation(4,7,"multiplicationRandomTwoNumbers")




