'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/
let requestText = document.querySelector('.text');
let requestNavLink = document.querySelectorAll('.nav-link');
requestNavLink.forEach(function (NavLink) {
    NavLink.addEventListener('click', function (event) {
        clickHandler(event)
    });
});

/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */  // здесь вызывайте changeText и changeActiveClass, и передавайте
// им объект события.

function clickHandler(event) {
    changeActiveClass(event);
    changeText(event);
};

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */
function changeActiveClass(event) {
    // перебираем и проверяем у какого элемента  nav-link есть класс 'ative' и если есть удаляем его 
    requestNavLink.forEach(function (e) {
        if (e.className.includes('active')) {
            e.classList.remove('active');
        };
    });

    //добавляем класс active элементу по которому произошёл клик
    event.target.classList.add("active");
    console.log(event.target.className)
}


/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
function changeText(event) {
    if (event.target.textContent == 'Link 1') {
        requestText.textContent = texts.text1;
    };

    if (event.target.textContent == 'Link 2') {
        requestText.textContent = texts.text2;

    };

    if (event.target.textContent == 'Link 3') {
        requestText.textContent = texts.text3;
    };
};