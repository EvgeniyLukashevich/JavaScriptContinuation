"use strict";

/*  Task 1
- При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
*/

document.getElementById("from").addEventListener("input", function () {
  document.querySelector("span").textContent = this.value;
});

/*  Task 2
При клике на кнопку с классом `messageBtn` необходимо элементу с классом `message`:
- добавить два класса: `animate_animated` и `animate_fadeInLeftBig`
- поставить данному элементу стиль `visibility` в значение `visible`
*/

document.querySelector(".messageBtn").addEventListener("click", function () {
  const messageElement = document.querySelector(".message");
  messageElement.classList.add("animate_animated", "animate_fadeInLeftBig");
  messageElement.style.visibility = "visible";
});

/*  Task 3
- Необходимо при отправке формы проверить, заполнены ли все поля в этой форме
- Если какое-либо поле не заполнено, форма не должна отправляться
- Должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям)
- Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
  - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю)
  - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать
*/

const form = document.querySelector("form");
const inputs = form.querySelectorAll("input, select");

function checkFieldInput(field) {
  if (field.value.trim() === "") {
    field.classList.add("error");
  } else {
    field.classList.remove("error");
  }
}

inputs.forEach((input) => {
  input.addEventListener("input", function () {
    checkFieldInput(this);
  });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let filled = true;

  inputs.forEach((input) => {
    checkFieldInput(input);
    if (input.classList.contains("error")) {
      console.log(`Отсутствует значение у ${input.tagName}`);
      filled = false;
    }
  });

  if (filled) {
    alert("ФОРМА ОТПРАВЛЕНА");
    this.submit();
  } 
});

