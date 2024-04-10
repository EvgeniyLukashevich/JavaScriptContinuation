"use strict";

// Хороший тон для перестраховки начинать и прописывать скрипты в слушателе, 
// который подтверждает загрузку страницы
document.addEventListener('DOMContentLoaded', event => {
    
    let dragSrcEl = null; // Переменная элемента

    // Функция начала перетаскивания
    function handleDragStart(e) {
        this.style.opacity = '0.4'; // установим полупрозрачность элементу

        dragSrcEl = this; // this - выбранный элемент
        console.log(dragSrcEl);

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    // Функция окончания перетаскивания
    function handleDragEnd(e) {
        this.style.opacity = '1'; // восстановим непрозрачность 

        items.forEach((item) => {
            item.classList.remove('over')
        })
    }

    // Функци перетаскивания над чем-то (например ссылкой)
    function handleDragOver(e) {
        // остановим срабатывание ссылки, если перетаскивается ссылка
        if (e.preventDefault) {
            e.preventDefault();
        }

        e.dataTransfer.dropEffect = 'move'; // функционал DnD

        return false;
    }

    // Функция наведения на подходящий элемент
    function handleDragEnter(e) {
        this.classList.add('over'); // добавляем класс при наведении
    }

    // Функция покидания подходящего элемента
    function handleDragLeave(e) {
        this.classList.remove('over'); // удаляе класс при отведении
    }

    function handleDrop(e) {
        // Отключаем возможные ненужные срабатывания
        if (e.stopPropagination) {
            e.stopPropagination();
        }

        // Свапаем местами содержимое элементов
        if (dragSrcEl != this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }

        return false;
    }



    let items = document.querySelectorAll('.audio-item');
    items.forEach(function(item) {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('dragenter', handleDragEnter);
        item.addEventListener('dragleave', handleDragLeave);
        item.addEventListener('drop', handleDrop);
    });
})