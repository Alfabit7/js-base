// 2. Чему будут равны переменные x и a в примере ниже? Написать почему так произошло
// (описать последовательность действий).

// присваиваем переменной "а' значение равное 2
// присваиваем переменной "x"  выражение равное сумме двух операндов ( 1-первый операнд, выражение в скобках "a*=2" второй операнд)
// выражению в скобках переменной "a" присаиваем значение равное переменной "a" умноженной на 2, (a=a*2 или короткая запись a*=2) в результате получаем значение 4
//в результате сложения 1 + (4) =5
"use strict";
let a = 2;
let x = 1 + (a *= 2);
// проверяем правильность ответа
console.log(x);