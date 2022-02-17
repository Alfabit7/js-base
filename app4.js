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

// решение здачи в стиле es5 1.2 б)
'use strict'

// создаем конструктор Post который принимает параметры author, text, date и сохраняет их как свойства объекта.
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
// создаем метод edit который возвращет в конструктор Post значение свойства text  
Post.prototype.edit = function (text) {
    this.text = text;
}


// создаем конструктор AttachedPost который принимает параметры author, text, date и сохраняет их как свойства объекта.
//  инициализируим эти свойства с помощью конструктора Post, чтобы не дублировать код и создаем новую переменную highlighted с значением false
function AttachedPost(author, text, date, highlighted) {
    // вызываем функцию конструктор Post и говорим ей что объект AttachedPost будет this в ней с параметрами author, text, date
    Post.call(this, author, text, date);
    this.highlighted = false;
}

//присваиваем объекту AttachedPost наследуемый метод edit от объекта Post, делаем это через создания пустого объекта функцией Object.create чтобы присваивание не связывал жестко объекты AttachedPost и Post методом edit иначе при изменении дочернего значения изменится значение родителя, такое поведение приведет к ошибкам 
AttachedPost.prototype = Object.create(Post.prototype);
// объекту  AttachedPost

// возвращаем конструктор на место так как после предыдущей операции он теряется из объекта AttachedPost
AttachedPost.prototype.constructor = AttachedPost;

// создаем метод makeTextHighlighted объекту AttachedPost, который меняет значение highlighted с false на true 
AttachedPost.prototype.makeTextHighlighted = function (highlighted) {
    this.highlighted = true;
}

// создаем новый объект userProperties, который наследует свойства  объекта AttachedPost
let userProperties = new AttachedPost("Andrey", "какой-то текст", "какая-то дата");
alert(`ES5 Выводим значение свойства text, который был передан объекту AttachedPost = ${userProperties.text}`)
userProperties.edit("новый текст записанный методом edit")
// вызываем  метод makeTextHighlighted, который меняет значение highlighted с false на true
userProperties.makeTextHighlighted();
//Выводим  алерты 
alert(`Выводим новое значение свойства text которое было изменено методом edit родительского объекта Post text = ${userProperties.text}`)
alert(`Выводим все значение всех парметров: author text date highlighted = ${userProperties.author}, ${userProperties.text}, ${userProperties.date}, ${userProperties.highlighted}`);


