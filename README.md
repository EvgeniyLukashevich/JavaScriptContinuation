# Seminar 3. Homework 
###### Решение находится в каталоге `seminar3`  

### Исходная html-разметка:
```html
<p class="super_element">Привет</p>

<img src="https://placeimg.com/50/50/animals" alt="">
<img src="https://placeimg.com/50/50/arch" alt="">
<img src="https://placeimg.com/50/50/nature" alt="">
<img src="https://placeimg.com/50/50/people" alt="">
<img src="https://placeimg.com/50/50/tech" alt="">
<img src="https://placeimg.com/50/50/tech/grayscale" alt="">
<img src="https://placeimg.com/50/50/tech/sepia" alt="">

<br>

<button>Кнопка</button>
<button class="super_element">Кнопка с классом btn</button>
<button>Кнопка</button>

<br>

<textarea></textarea>

<br>

<ul>
  <li>
    <button>Кнопка 1</button>
  </li>
  <li>
    <button>Кнопка 2</button>
  </li>
  <li>
    <button>Кнопка 3</button>
  </li>
  <li>
    <button>Кнопка 4</button>
  </li>
</ul>
```

### Task 1
- Необходимо вывести сообщение в консоль "**все теги прогрузились**", когда все теги будут созданы браузером

### Task 2
- Необходимо вывести сообщение в консоль "**страница загрузилась**", когда все ресурсы страницы будут загружены


### Task 3
- При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
    ```
    Класс "super_element" присутствует в элементе "div"
    ```
- Cообщение должно определять присутствует или отсутствует класс `super_element` у элемента
- Cообщение должно выводить в нижнем регистре верный тег в данной строке, по которому был совершен клик
- Необходимо использовать делегирование


### Task 4
- Сделать так, чтобы при наведении на `textarea` в консоли появлялось сообщение "**Вы навели на textarea**"

### Task 5
- Необходимо повесить событие клика на тег `ul`
- В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик
- Если клик был не по кнопке, то ничего выводить не нужно
- Необходимо использовать делегирование

### Task 6
- Почему в `console.log` пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в `ul`? 
- Ответ необходимо написать здесь же, под этим комментарием, своими словами

### Task 7
- С помощью JS необходимо изменить цвет заднего фона каждого второго тега `li`


##
---



# Seminar 2. Homework 
###### Решение находится в каталоге `seminar2`  

### Исходная html-разметка:
```html
<p class="dropdown">Привет :)</p>
<div class="dropdown">
    <button
    class="btn btn-secondary dropdown-toggle"
    type="button"
    id="dropdownMenuButton"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
    >
    Dropdown button
    </button>
    <div class="menu dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
    </div>
</div>
```

### Task 1
- Ко всем элементам, имеющим класс "**dropdown-item**" добавить еще один класс "**super-dropdown**"
- Необходимо использовать методы `forEach` и `querySelectorAll` и свойство `classList` у элементов

### Task 2
- У элемента с классом "**btn**" необходимо убрать класс "**btn-secondary**", если он присутствует у этого элемента
- Добавить, если такого класса у элемента не было


### Task 3
- Необходимо удалить класс "**dropdown-menu**" у элемента, у которого присутствует класс "**menu**"


### Task 4
- Используя метод `insertAdjacentHTML` добавить после div'a с классом "**dropdown**" следующую разметку:
    ```html
    <a href="#">link</a>
    ```

### Task 5
- У элемента с id "**dropdownMenuButton**" заменить id на "**superDropdown**"

### Task 6
- Добавьте атрибут `data-dd` со значением **3** элементу у которого существует атрибут `aria-labelledby` равный "**dropdownMenuButton**" используя `dataset`

### Task 7
- Удалите атрибут `type` у элемента с классом "**dropdown-toggle**"


##
---



# Seminar 1. Homework 
###### Решение находится в каталоге `seminar1`  

### Исходная html-разметка:
```html
<a href="#" class="card-link">Card link</a>
<a href="#" class="card-link">Another link</a>

<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title" data-number="100">Card title</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p class="card-text" data-number="50">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" id="super_link" class="card-link">Card link</a>
        <a href="#" class="card-link" data-number="50">Another link</a>
    </div>
</div>
```

### Task 1
- Найти по id, используя `getElementById`, элемент с id равным "**super_link**"
- Вывести этот элемент в консоль

### Task 2
- Внутри всех элементов на странице, которые имеют класс "**card-link**", поменять текст на "ссылка"


### Task 3
- Найти все элементы на странице с классом "**card-link**", которые лежат в элементе с классом "**card-body**" 
- Вывести полученную коллекцию в консоль


### Task 4
- Найти первый попавшийся элемент на странице у которого есть атрибут `data-number` со значением **50** 
- Вывести его в консоль


### Task 5
- Вывести содержимое тега **title** в консоль

### Task 6
- Получить элемент с классом "**card-title**"
- Вывести его родительский узел в консоль

### Task 7
- Создать тег `p`
- Записать внутри него текст "Привет"
- Добавить созданный тег в начало элемента, который имеет класс "**card**"

### Task 8
- Удалить тег `h6` на странице


##
---


