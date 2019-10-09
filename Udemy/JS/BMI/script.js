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

window.addEventListener("load", function() {
  let masseObj = document.getElementById("gewicht");
  let laengeObj = document.getElementById("groesse");

  let berechneBMI = function() {
    let masseEingabe = parseFloat(masseObj.value);
    let laengeEingabe = parseFloat(laengeObj.value.replace(",", "."));
    // mit parseFloat wird der die zahl in ein string umgewandelt
    // übertragung aus dem HTML ins JS wird das komme gegen einen punkt ersetzen!
    // replace funktioniert nur bei strings
    let bmi = masseEingabe / (laengeEingabe * laengeEingabe);
    let result = Math.round(bmi * 10) / 10;

    let ausgabeHTML = document.getElementById("ausgabe");
    ausgabeHTML.innerText = result;

    // ausblenden des styles damit er spaeter wieder eingebelndet werden kann
    document.getElementById("normal").style.display = "none";
    document.getElementById("ueber").style.display = "none";
    document.getElementById("unter").style.display = "none";
    document.getElementById("fett").style.display = "none";

    if (result < 17.5 && result > 1) {
      document.getElementById("unter").style.display = "block";
    } else if (result > 17.5 && result < 25) {
      document.getElementById("normal").style.display = "block";
    } else if (result > 25 && result < 30) {
      document.getElementById("ueber").style.display = "block";
    } else {
      document.getElementById("fett").style.display = "block";
    }
  };

  let button = document.getElementById("kalk");
  button.addEventListener("click", berechneBMI);

  // bei der eingabe soll soch das ergenniss andern
  masseObj.addEventListener("change", berechneBMI);
  laengeObj.addEventListener("change", berechneBMI);

  masseObj.addEventListener("keyup", berechneBMI);
  laengeObj.addEventListener("keyup", berechneBMI);
});
