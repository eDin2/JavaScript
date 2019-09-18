"use strict";

/* Erster Würfell! */
let randomNumber1 = Math.floor(Math.random() * 6) + 1; // Nummer 1-6
let randomDiceImg = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
let randomImgSource = "images/" + randomDiceImg; //images/dice1.png - images/dice6.png
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSource);



/* Zweiter Würfell! */
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImgSource2 = "images/dice" + randomNumber2 + ".png";
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgSource2);



/* Ausgabe des Gewinners im Tag-h1 */
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Spieler 1 hat gewonnen!";
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Spieler 2 hat gewonnen!";
} else {
    document.querySelector("h1").innerHTML = "Unentschieden !!!";
}