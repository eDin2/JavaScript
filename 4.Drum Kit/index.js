"use strict";


/* Hiermit werden alle Buttons iteriert und damit auch asnprechbar gemacht */
let numberOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // eine Anonyme funktion wird aufgerufen die folgenden code ausfuert

    // Welcher button wurde gedrückt und welcher sound muss ausgeführt werden?
    let audioPlay = new Audio('sounds/crash.mp3');
    audioPlay.play(this);

  });
}

/* Play Sound */
// let audioPlay = new Audio('sounds/crash.mp3');
// audioPlay.play();
