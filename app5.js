// 1.2 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по
//     аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования),
//     а) конструктор Post, который принимает параметры author, text, date и сохраняет
//     их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет
//     принимать текст и записывать его в свойство text объекта.
//     б) конструктор AttachedPost, который принимает параметры author, text, date.
//     Проинициализируйте эти свойства с помощью конструктора Post, чтобы не
//     дублировать код. Также в конструкторе AttachedPost должно создаваться свойство
//     highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
//     Объекты типа AttachedPost должны иметь метод makeTextHighlighted,
//     который будет назначать свойству highlighted значение true.

// решение здачи в стиле es6 1.2 б)
'use strict'

// создаем конструктор Post который принимает параметры author, text, date и сохраняет их как свойства объекта.
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    // создаем метод edit который возвращет в конструктор Post значение свойства text  
    edit(text) {
        this.text = text;
    }
}

// создаем конструктор AttachedPost который принимает параметры author, text, date и сохраняет их как свойства объекта.
//  инициализируим эти свойства с помощью конструктора Post, чтобы не дублировать код и создаем новую переменную highlighted с значением false
class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        // вызываем функцию конструктор Post и говорим ей что объект AttachedPost будет this в ней с параметрами author, text, date
        super(author, text, date);
        this.highlighted = false;
    }

    // создаем метод makeTextHighlighted объекту AttachedPost, который меняет значение highlighted с false на true 
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

// создаем новый объект userProperties, который наследует свойства  объекта AttachedPost
let userProperties = new AttachedPost("Andrey", "какой-то текст", "какая-то дата");
alert(` ES6 Выводим значение свойства text, который был передан объекту AttachedPost = ${userProperties.text}`)
userProperties.edit("новый текст записанный методом edit")
// вызываем  метод makeTextHighlighted, который меняет значение highlighted с false на true
userProperties.makeTextHighlighted();
//Выводим  алерты 
alert(`Выводим новое значение свойства text которое было изменено методом edit родительского объекта Post text = ${userProperties.text}`)
alert(`Выводим все значение всех парметров: author text date highlighted = ${userProperties.author}, ${userProperties.text}, ${userProperties.date}, ${userProperties.highlighted}`);

