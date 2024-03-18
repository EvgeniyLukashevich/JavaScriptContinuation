/* ЗАДАНИЕ 1
- Найти по id, используя `getElementById`, элемент с id равным "super_link"
- Вывести этот элемент в консоль
*/

const superLink = document.getElementById("super_link");
console.log("  ЗАДАНИЕ 1");
console.log(superLink);

/* ЗАДАНИЕ 2
- Внутри всех элементов на странице, которые имеют класс "card-link", поменять текст на "ссылка"
*/

const cardLinks = document.querySelectorAll(".card-link");
cardLinks.forEach((cardLink) => {
  cardLink.textContent = "ссылка";
});
console.log(`\n  ЗАДАНИЕ 2
Текст элементов с классом "card-link" изменен на "ссылка"`);

/* ЗАДАНИЕ 3
- Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" 
- Вывести полученную коллекцию в консоль
*/

const cardBody = document.querySelector(".card-body");
const cardBodyLink = cardBody.querySelectorAll(".card-link");
console.log("\n  ЗАДАНИЕ 3");
console.log(cardBodyLink);

/* ЗАДАНИЕ 4
- Найти первый попавшийся элемент на странице у которого есть атрибут `data-number` со значением 50 
- Вывести его в консоль
*/

const elementData50 = document.querySelector('[data-number="50"]');
console.log("\n  ЗАДАНИЕ 4");
console.log(elementData50);

/* ЗАДАНИЕ 5
- Вывести содержимое тега title в консоль
*/

console.log("\n  ЗАДАНИЕ 5");
console.log(document.querySelector("title").textContent);

/* ЗАДАНИЕ 6
- Получить элемент с классом "card-title"
- Вывести его родительский узел в консоль
*/

const cardTitle = document.querySelector(".card-title");
console.log("\n  ЗАДАНИЕ 6");
console.log(cardTitle.parentNode);

/* ЗАДАНИЕ 7
- Создать тег `p`
- Записать внутри него текст "Привет"
- Добавить созданный тег в начало элемента, который имеет класс "**card**"
*/

const card = document.querySelector(".card");
card.prepend((document.createElement("p").textContent = "Привет"));
console.log(`\n  ЗАДАНИЕ 7
В начало блока с классом 'card' добавлен параграф с текстом 'Привет'`);

/* ЗАДАНИЕ 8
- Удалить тег `h6` на странице
*/

const subtitle = document.querySelector("h6");
subtitle.remove();
console.log(`\n  ЗАДАНИЕ 8
Элемент с тегом 'h6' удалён`);
