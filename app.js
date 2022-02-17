// 1.1 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6
// (по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6),

// конструктор Product, который принимает параметры name и price, сохраните их как
// свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount,
// который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount
// не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип
// (как объект transport в уроке).

// Решение задачи в стиле es5
'use strict'
// создаем конструктор Product со свойствами name и price 
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// создаем конструктору Product метод который уменьшает свойство price на 25% 
Product.prototype.make25PercentDiscount = function () {
    this.price = this.price / 100 * 75;

}
// создаем объект tovar1 с пармаметры name и price который наследует свойства конструктора Product
let tovar1 = new Product("Ручка", "2000");
//Вызываем метод  make25PercentDiscount который уменьшает значение свойства price на 25%
tovar1.make25PercentDiscount()
alert(`Теперь ручка дешевле на 25% и стоит ${tovar1.price}`);


