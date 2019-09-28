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

  let masseObj = document.getElementById('gewicht');
  let laengeObj = document.getElementById('groesse');


  let berechneBMI = function() {
    let masseEingabe = parseFloat(masseObj.value);
    let laengeEingabe = parseFloat(laengeObj.value.replace(",", "."));
    // mit parseFloat wird der die zahl in ein string umgewandelt
    // übertragung aus dem HTML ins JS wird das komme gegen einen punkt ersetzen!
    // replace funktioniert nur bei strings
    let bmi = (masseEingabe / (laengeEingabe * laengeEingabe));
    let result = Math.round(bmi * 10) / 10;

    let ausgabeHTML = document.getElementById('ausgabe');
    ausgabeHTML.innerText = result;
  }

  let button = document.getElementById('kalk');
  button.addEventListener('click', berechneBMI);

  // bei der eingabe soll soch das ergenniss andern
  masseObj.addEventListener("change", berechneBMI);
  laengeObj.addEventListener("change", berechneBMI);

  masseObj.addEventListener("keyup", berechneBMI);
  laengeObj.addEventListener("keyup", berechneBMI);








})
