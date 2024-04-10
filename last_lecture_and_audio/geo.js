"use strict";

const geoArea = document.querySelector(".geo-area");
const geoStatus = geoArea.querySelector(".geo-status");
const geoPosition = geoArea.querySelector(".geo-position");
const watchPosition = geoArea.querySelector(".watch-position");

if ("geolocation" in navigator) {
  geoStatus.textContent = "ГЕОЛОКАЦИЯ ДОСТУПНА";

  // Получение текущей позиции
  const geoId = navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    geoPosition.textContent = `Координаты устройства (getCurrentPosition): 
    ${latitude}, ${longitude}`;
  });

  // Отслеживание позиции с какой-то периодичностью
  let watchId = navigator.geolocation.watchPosition(({ coords }) => {
    console.log(`Устройство обновило геолокацию: 
    ${coords.latitude}, ${coords.longitude}`);
    watchPosition.textContent = `Координаты устройства (watchPosition): 
    ${coords.latitude}, ${coords.longitude}`;
  });

  // Остановить отслеживание геолокации
  navigator.geolocation.clearWatch(watchId);
} else {
  geoStatus.textContent = "ГЕОЛОКАЦИЯ НЕ ДОСТУПНА";
}

// Обработка ошибок (у каждой ошибки навигатора есть свой код: 1, 2, и т.д.)
const handlePositionError = (error) => {
  switch (error.code) {
    case 1:
      console.log("Пользователь отказался предоставить доступ к геолокации.");
      break;
    case 2:
      console.log("Ошибка устройства определения геолокации.");
      break;
    case 3:
      console.log("Достигнут тайм-айт.");
      break;
    default:
      console.log("Геолокация недоступна.");
      break;
  }
};
