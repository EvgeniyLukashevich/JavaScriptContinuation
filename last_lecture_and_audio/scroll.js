"use strict";
/*
console.log(document.documentElement.scrollHeight); // ПОЛНОСТЬЮ ВСЯ ВЫСОТА СТРАНИЦЫ
console.log(document.documentElement.clientHeight); // ВСЯ ВИДИМАЯ ОБЛАСТЬ (если из html/css: 100vh)

console.log(document.documentElement.scrollTop); // Посмотрим значение на сколько проскроллено по вертикали
console.log(window.pageYOffset); // Посмотрим отличие 

// ДИНАМИЧЕСКОЕ СЛЕЖЕНИЕ ЗА ПРОКРУТКОЙ
document.addEventListener("scroll", function(e) {
    console.log(`ДИНАМИЧЕСКИЙ scrollTop:
    ${document.documentElement.scrollTop}`);
})
*/

// ПОДГРУЗКА НОВЫХ ЭЛЕМЕНТОВ ПРИ СКРОЛЛЕ:
const scrollArea = document.querySelector(".scroll-area");

document.addEventListener("scroll", function (e) {
  // Нам понадобятся ВЫСОТА ЭКРАНА и ВЫСОТА ДОКУМЕНТА
  const height = document.documentElement.offsetHeight;
  const screenHeight = document.documentElement.clientHeight;

  // Записываем сколько пикселей юзер уже проскроллил
  const scrolled = window.scrollY;

  // Обозначим четверть экрана до конца страницы,
  // как отметку, на которой нужно подгружать следующую пачку контента
  const threshold = height - screenHeight / 4;

  // Отслеживаем, где находится текущий низ экрана,
  // относительно всей страницы
  const position = scrolled + screenHeight;

  // Если мы приблизились к четверти экрана до конца,
  // будем добавлять контент
  if (position >= threshold) {
    makeSongsTemplate();
  }

  console.log(`
# # # # # # # # # # # # # # # # #
    ВЫСОТА ВСЕЙ СТРАНИЦЫ: ${height}
    ВЫСОТА ВИДИМОЙ ОБЛАСТИ: ${screenHeight}
    ПРОСКРОЛЛЕНО: ${scrolled}
    ТЕКУЩИЙ НИЗ: ${position}
# # # # # # # # # # # # # # # # #

`);
});

// Функция добавления отрисовки нужного куска html
function makeSongsTemplate() {
  scrollArea.insertAdjacentHTML(
    "beforeend",
    `
    <div class="audio-item" draggable="true">
        <audio src="audio/audio1.mp3" class="audio-item__song"></audio>
        <i class="audio-item__control fa-regular fa-circle-play"></i>
        <div class="audio-item__info">
        <p class="audio-item__info__artist2">TYOMCHA</p>
        <p class="audio-item__info__track2">Ничего Старого</p>
        </div>
    </div>
    <div class="audio-item" draggable="true">
        <audio src="audio/audio1.mp3" class="audio-item__song"></audio>
        <i class="audio-item__control fa-regular fa-circle-play"></i>
        <div class="audio-item__info">
        <p class="audio-item__info__artist2">TYOMCHA</p>
        <p class="audio-item__info__track2">Ничего Старого</p>
        </div>
    </div>
    <div class="audio-item" draggable="true">
        <audio src="audio/audio1.mp3" class="audio-item__song"></audio>
        <i class="audio-item__control fa-regular fa-circle-play"></i>
        <div class="audio-item__info">
        <p class="audio-item__info__artist2">TYOMCHA</p>
        <p class="audio-item__info__track2">Ничего Старого</p>
        </div>
    </div>
    <div class="audio-item" draggable="true">
        <audio src="audio/audio1.mp3" class="audio-item__song"></audio>
        <i class="audio-item__control fa-regular fa-circle-play"></i>
        <div class="audio-item__info">
        <p class="audio-item__info__artist2">TYOMCHA</p>
        <p class="audio-item__info__track2">Ничего Старого</p>
        </div>
    </div>
    <div class="audio-item" draggable="true">
        <audio src="audio/audio1.mp3" class="audio-item__song"></audio>
        <i class="audio-item__control fa-regular fa-circle-play"></i>
        <div class="audio-item__info">
        <p class="audio-item__info__artist2">TYOMCHA</p>
        <p class="audio-item__info__track2">Ничего Старого</p>
        </div>
    </div>
    `
  );
}
