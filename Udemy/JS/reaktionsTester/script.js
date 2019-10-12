"use strict";
window.addEventListener("load", function() {
  let startTime = new Date().getTime();
  let recordTime = startTime; // im recordTime wird die beste Zeit geschpeichert

  /* Funktion die eine zufällige farbe erstellt */
  /* es wird ein zufaälliger HEX wert erstellt */
  /* ############################################################# */
  let getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  /* ############################################################# */
  let makeShapeAppear = () => {
    let top = Math.random() * 300;
    let left = Math.random() * 500;
    let width = Math.random() * 300;

    /* mit borderRadius werden die ecken um 50% gerundet und daher */
    /* ergibt das alle am ende eine zufälligen Kreis! */
    /* ########################################################## */
    if (Math.random() < 0.5) {
      document.getElementById("form").style.borderRadius = "50%";
    } else {
      document.getElementById("form").style.borderRadius = 0;
    }

    document.getElementById("form").style.backgroundColor = getRandomColor();
    document.getElementById("form").style.top = top + "px";
    document.getElementById("form").style.left = left + "px";
    document.getElementById("form").style.width = width + "px";
    document.getElementById("form").style.height = width + "px";

    document.getElementById("form").style.display = "block";
    startTime = new Date().getTime();
  };

  /* Timer der die Form nach einer gewissen Zeit erscheinen läst */
  /* ############################################################## */
  let setTimeAfter = () => {
    setTimeout(makeShapeAppear, Math.random() * 2000);
  };
  setTimeAfter();

  /* click funktion */
  /* ############################################################# */
  document.getElementById("form").onclick = () => {
    document.getElementById("form").style.display = "none";
    document.getElementById("form").style.backgroundColor = getRandomColor;

    let end = new Date().getTime();
    let dauerErrechnen = (end - startTime) / 1000;
    // console.log(dauer);

    if (recordTime >= dauerErrechnen) {
      recordTime = dauerErrechnen;
      document.getElementById("dauer").innerHTML = dauerErrechnen + "Sekunden";
    }

    /* ausgabe der Zeit im Html */
    /* ############################################################# */
    let ausgabe = (document.getElementById("dauer").innerHTML =
      dauerErrechnen + "Sekunden");
    let record = (document.getElementById("recordTime").innerHTML =
      recordTime + "Sekunden");
    setTimeAfter();
  };
});
