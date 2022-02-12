// 3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый 
// товар применить скидку 15%, можете использовать метод forEach https://mzl.la/1AOMMWX : 
"use strict"
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

// решение 

// применяем метод forEach к массиву products в функцию передаем все элементы массива: id и price
products.forEach(function (discont) {
    // свойству id  присваиваем новое значение, равное формуле: старое значение price минус 15% скидка 
    discont.price = (discont.price * 85) / 100;
    // Выводим элементы массива с значением price на 15% меньше чем изначально в concole.log
    console.log(discont);
}
);

