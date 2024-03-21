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


