/* Task 1
- Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown"
- Необходимо использовать методы `forEach` и `querySelectorAll` и свойство `classList` у элементов
*/

document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.classList.add("super-dropdown");
});

/* Task 2
- У элемента с классом "btn" необходимо убрать класс "btn-secondary", если он присутствует у этого элемента
- Добавить, если такого класса у элемента не было
*/

document.querySelectorAll(".btn").forEach((btn) => {
  btn.classList.toggle("btn-secondary");
});

/* Task 3
- Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu"
*/

document.querySelectorAll(".menu").forEach((item) => {
  item.classList.remove("dropdown-menu");
});

/* Task 4
- Используя метод `insertAdjacentHTML` добавить после div'a с классом "dropdown" следующую разметку:
    <a href="#">link</a>
*/

document
  .querySelector("div.dropdown")
  .insertAdjacentHTML("afterend", '<a href="#">link</a>');

/* Task 5
- У элемента с id "dropdownMenuButton" заменить id на "superDropdown"
*/

document.getElementById("dropdownMenuButton").id = "superDropdown";

/* Task 6
- Добавьте атрибут `data-dd` со значением 3 элементу у которого существует атрибут `aria-labelledby` равный "dropdownMenuButton" используя `dataset`
*/

const targetElement = document.querySelector(
  '[aria-labelledby="dropdownMenuButton"]'
);
targetElement.dataset.dd = "3";

/* Task 7
- Удалите атрибут `type` у элемента с классом "dropdown-toggle"
*/

document.querySelector(".dropdown-toggle").removeAttribute("type");
