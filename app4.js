// 4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с
// двумя параметрами. Т.е. например, функция для сложения должна принимать два числа,
// складывать их и возвращать результат. Обязательно использовать оператор return.

"use strict";
// функции с двумя парметрами a и b принимающими значения типа number


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

// Поочередно вызываем функции начиная с первой сверху
sumRandomTwoNumbers(4, 3);
differenceRandomTwoNumbers(4, 3);
divisionRandomTwoNumbers(4, 3);
multiplicationRandomTwoNumbers(4, 3);