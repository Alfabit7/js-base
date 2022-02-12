// 4. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
// 1. Получить все товары, у которых есть фотографии, можете использовать метод filter
// https://mzl.la/2qROQkT
// 2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать 
// метод sort https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например 
// здесь https://youtu.be/O2pusOp0gC0 или в дополнительных видео в материалах урока.
"use strict"
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];


// Решение задачи 1
//Получить все товары, у которых есть фотографии, можете использовать метод filter

//присваиваем переменной productsFilter  массив  products
//передаем массив методу filter 
//функция возвращает значения у которых есть свойство photos и это свойство не пустое 
let productsFilter = products.filter(function (existencePhoto) {
    return existencePhoto.photos && existencePhoto.photos.length > 0
});


console.log(productsFilter);

// Решение задачи 2 отсортируйте товары по цене (от низкой цены к высокой)
// используем метод sort для массива products метод принимает знаечения из функции 
//в функию передаем значения из свойства price 
//далее функция возвращает истину если первое число больше второго, таким образом она выстраивает числа в порядке возрастания от меньшего к большему 
products.sort(function (a, b) {
    if (a.price > b.price) {
        return 1;
    }

    if (a.price < b.price) {
        return -1;
    }

    return 0;
})
console.log(products)

