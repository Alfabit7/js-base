// 1. (это задание делайте по желанию)
// Написать функцию, преобразующую число в объект.
// Передавая на вход число в диапазоне [0, 999],
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
//  - единицы (в свойстве units)
//  - десятки (в свойстве tens)
//  - сотни (в свойстве hundereds)
// Например, для числа 45 мы должны получить следующий объект:

// {
//   units: 5, //это единицы
//   tens: 4,  //это десятки
//   hundreds: 0, //это сотни
// }

'use strict'
// Пишем функцию запрос числа у пользователя
let userNumber = Number;
requesrNumber()
function requesrNumber() {
    //просим пользователя ввести число
    userNumber = prompt("Введите целое число в диапазоне от 0 до 999");
    // проверяем если пользоваатель ввел не число просим повторить ввод
    if (isNaN(userNumber)) {
        alert('Вы ввели не число повторите ввод');
        requesrNumber()
    }
    // проверяем что пользоваатель ввел число небольше трехзначного, елси не верно просим повторить ввод
    if (userNumber.length > 3) {
        alert('Вы ввели слишком длинное число повторите ввод');
        requesrNumber()
    } return userNumber;
}

console.log(userNumber);
console.log(typeof userNumber);


let createArrayUserNumber = Object.create(userNumber.split(""));
// let createArrayUserNumber = userNumber.split("");

class createArrayUserNumber extends newArray {
    constructor(units, tens, hundreds) {
        super(units, tens, hundreds);
    }
};

// console.log(createArrayUserNumber);


class newArray {
    constructor(units, tens, hundreds) {
        this.units = units;
        this.tens = tens;
        this.hundreds = hundreds;
    }
};



// let arrayObject = new newArray(createArrayUserNumber);
// console.log(arrayObject.tens);










//преобразуем строку в число


// проверяем что пользователь вввел число а не буквы



// console.log(parseInt(userNumber));
// console.log(typeof userNumber)
// userNumber = parseInt(userNumber);
// console.log(userNumber)
// console.log(typeof userNumber)
// проверяем что пользователь вввел именно число



// if typeof userNumber === "number'{
//     console.log("все ок ")
// }

