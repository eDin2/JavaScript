"use strict";

// let run = function (calback) {
//   console.log("let f: wurde ausgeführt!");
//   calback();
// }
//
// let f = function () {
//
// }
//
// run(f);


window.addEventListener('load', function() {

  let button = document.getElementById('kalk');
  button.addEventListener('click', function() {

    let masseObj = document.getElementById('gewicht');
    let laengeObj = document.getElementById('groesse');

    let masseEingabe = parseFloat(masseObj.value);
    let laengeEingabe = parseFloat(laengeObj.value.replace(",", "."));
    // mit parseFloat wird der die zahl in ein string umgewandelt

    let berechneBMI = (masseEingabe / (laengeEingabe * laengeEingabe));

    let ausgabeHTML = document.getElementById('ausgabe');
    ausgabeHTML.innerText = Math.round(berechneBMI * 10) / 10;
  });








})
