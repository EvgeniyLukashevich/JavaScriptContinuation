"use strict";

/* Task 1
- Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером
*/

document.addEventListener("DOMContentLoaded", function () {
  console.log("Все теги прогрузились");
});

/* Task 2
- Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены
*/

window.addEventListener("load", function () {
  console.log("Страница загрузилась");
});

/* Task 3
- При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие: 'Класс "super_element" присутствует в элементе "div"'
- Cообщение должно определять присутствует или отсутствует класс `super_element` у элемента
- Cообщение должно выводить в нижнем регистре верный тег в данной строке, по которому был совершен клик
- Необходимо использовать делегирование
*/

const parentElement = document.querySelector("body");

parentElement.addEventListener("click", function (event) {
  if (event.target.classList.contains("super_element")) {
    console.log(
      'Класс "super_element" присутствует в элементе "' +
        event.target.tagName.toLowerCase() +
        '"'
    );
  } else {
    console.log(
      'Класс "super_element" отсутствует в элементе "' +
        event.target.tagName.toLowerCase() +
        '"'
    );
  }
});

/* Task 4
- Сделать так, чтобы при наведении на `textarea` в консоли появлялось сообщение "Вы навели на textarea"
*/

const textArea = document.querySelector("textarea");

textArea.addEventListener("mouseover", function () {
  console.log("Вы навели на textarea");
});

/* Task 5
- Необходимо повесить событие клика на тег `ul`
- В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик
- Если клик был не по кнопке, то ничего выводить не нужно
- Необходимо использовать делегирование
*/

const ulElement = document.querySelector("ul");

ulElement.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    console.log(event.target.textContent);
  }
});

/* Task 6
- Почему в `console.log` пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в `ul`? 
- Ответ необходимо написать здесь же, под этим комментарием, своими словами
*/

// Ответ: Потому что обработчики срабатывают в порядке от
// непосредственно target-элемента на котором сработало событие,
// в сторону "поверхности", последовательно проходя через родительские элементы.
// Таким образом получается, что наш обработчик висящий на 'ul' встретится на
// нашем пути быстрее, чем тот, что висит на 'body'.
// Как-то так, если я верно понял :)

/* Task 7
- С помощью JS необходимо изменить цвет заднего фона каждого второго тега `li`
*/

document.querySelectorAll("li").forEach((li, index) => {
  if (index % 2 !== 0) {
    li.style.backgroundColor = "lightblue";
  }
});
