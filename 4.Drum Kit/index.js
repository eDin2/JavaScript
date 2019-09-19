"use strict";


/* Hiermit werden alle Buttons iteriert und damit auch asnprechbar gemacht */
let numberOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // eine Anonyme funktion wird aufgerufen die folgenden code ausfuert

    // Welcher button wurde gedrückt und welcher sound muss ausgeführt werden?
    let buttonInnerHtml = this.innerHTML;

    switch (buttonInnerHtml) {
      case "w":
        let tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;

      case "a":
        let tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;

      case "s":
        let tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;

      case "d":
        let tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

      case "j":
        let snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;

      case "k":
        let crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;

      case "l":
        let kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;

      default:

    }

  });
}

/* Play Sound */
// let audioPlay = new Audio('sounds/crash.mp3');
// audioPlay.play();