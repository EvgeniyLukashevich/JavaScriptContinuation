"use strict";

/* AUDIO */

const switchPlay = (element) => {
  element.classList.toggle("fa-circle-play");
  element.classList.toggle("fa-circle-pause");
  element.style.color = element.classList.contains("fa-circle-pause")
    ? "#c94079"
    : "#2e7cd1";
};

const endedSwitch = (element) => {
  element.classList.add("fa-circle-play");
  element.classList.remove("fa-circle-pause");
  element.style.color = "rgba(46, 124, 209, 1)";
};

const musicArea = document.querySelector(".audio-area");
const song = musicArea.querySelector(".audio-item__song");

song.addEventListener("ended", function () {
  const closestIcon = song
    .closest(".audio-item")
    .querySelector(".audio-item__control");
  endedSwitch(closestIcon);
});

musicArea.addEventListener("click", function (e) {
  if (e.target.classList.contains("audio-item__control")) {
    switchPlay(e.target);
  }

  let closestAudio = e.target
    .closest(".audio-item")
    .querySelector(".audio-item__song");

  if (closestAudio) {
    if (closestAudio.paused) {
      closestAudio.play(); // Начать воспроизведение, если аудио на паузе
    } else {
      closestAudio.pause(); // Приостановить воспроизведение, если аудио играет
    }
  }
});
