// // 1. (это задание делайте по желанию)
// // Написать функцию, преобразующую число в объект.
// // Передавая на вход число в диапазоне [0, 999],
// // мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
// //  - единицы (в свойстве units)
// //  - десятки (в свойстве tens)
// //  - сотни (в свойстве hundereds)
// // Например, для числа 45 мы должны получить следующий объект:

// // {
// //   units: 5, //это единицы
// //   tens: 4,  //это десятки
// //   hundreds: 0, //это сотни
// // }

// Решение задачи

// создаем конструктор у которого будут свойства  units, tens, hundreds пока что равные одноименным значениям, в которые вернутся значения едениц units десятков tens и сотен hunderds числа введеного пользователем через функцию requesrNumberFunction
'use strict'
class requestNumberUser {
    constructor(units, tens, hundreds) {
        this.units = units;
        this.tens = tens;
        this.hundreds = hundreds;
    }
}

// создаем перемнную userNumber в которой будем хранить число введеное пользователем
let userNumber = Number;
// запускаем функцию requesrNumberFunction
requesrNumberFunction();
/**
 * функция  запрашивает число пользователя от 0 до 999 и выполняет проверку что пользователь ввел число от 0 до 999 а не буквы или отрицательное число
 * @param{number} userNumber хранит число введеное пользователем
 * @returns возвращает результат  числа введеного пользователем
 */
function requesrNumberFunction() {
    //просим пользователя ввести число
    userNumber = prompt("Введите целое число в диапазоне от 0 до 999");
    // проверяем если пользоваатель ввел не число просим повторить ввод
    if (isNaN(userNumber)) {
        alert('Вы ввели не число повторите ввод');
        requesrNumberFunction();
    }
    // проверяем что пользоваатель ввел число небольше трехзначного, если не верно просим повторить ввод
    if (userNumber.length > 3) {
        alert('Вы ввели слишком длинное число повторите ввод в диапазоне от 0 до 999');
        requesrNumberFunction();

    } if (userNumber < 0) {
        alert('Вы ввели отрицательное число повторите ввод в диапазоне от 0 до 999');
        requesrNumberFunction();
    } return userNumber;
}

// создаем переменную createArrayUserNumber, которая будет из переменной userNumber (числа введенным пользователем от 0 до 999) делать массив
let createArrayUserNumber = userNumber.split("");
//Создаем новый объект newArray который будет наследовать свойства конструктора requestNumberUser и передаем ему в параметры значения массива createArrayUserNumber (числа введеного пользователем) параметры передаем в обратном порядке потому что первый элемент массива это сотни hunderds, а нам нужны еденицы units;
let newArray = new requestNumberUser(createArrayUserNumber[2], createArrayUserNumber[1], createArrayUserNumber[0]);
// Выводим новый массив newArray  в консоль лог 
console.log(newArray);
