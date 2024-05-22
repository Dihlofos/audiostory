"use strict";
(function () {
  const container = document.querySelector(".js-container");

  const playButton = document.querySelector(".js-play");
  const pauseButton = document.querySelector(".js-pause");
  const waves = document.querySelector(".js-waves");
  const audio = document.querySelector(".js-audio");

  audio.onended = function () {
    pause();
  };

  playButton.addEventListener("click", () => {
    play();
  });

  pauseButton.addEventListener("click", () => {
    pause();
  });

  function play() {
    audio.play();
    playButton.classList.add("is-hidden");
    pauseButton.classList.remove("is-hidden");
    waves.classList.remove("is-hidden");
  }

  function pause() {
    audio.pause();
    playButton.classList.remove("is-hidden");
    pauseButton.classList.add("is-hidden");
    waves.classList.add("is-hidden");
  }
})();
