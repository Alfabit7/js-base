// 2. Выведите в консоль значения, указанные рядом с комментариями:
'use strict'
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

// for (let property in post) {
//     if (property == "author") {
//         console.log(post[property]);
//     }
// }


// Решение задачи 
//Выводим значение "John" свойства author
console.log(post.author);
//Выводим значение 2 свойства dislikes массива comments
console.log(post.comments[0].rating.dislikes);
//Выводим значение 5 свойства userId массива comments
console.log(post.comments[1].userId);
//Выводим значение "lorem ipsum 2" свойства text массива comments
console.log(post.comments[1].text);