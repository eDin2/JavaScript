"use strict";


/* Hiermit werden alle Buttons itteriert und damit auch asnprechbar gemacht */
let numberOfButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("Ich wurde geklickt");
    });
}