"use strict";

let randomNumber1 = Math.floor(Math.random() * 6) + 1; // Nummer 1-6

let randomDiceImg = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

let randomImgSource = "images/" + randomDiceImg; //images/dice1.png - images/dice6.png

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSource);