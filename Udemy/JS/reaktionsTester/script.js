"use strict";
window.addEventListener("load", function() {
  let start = new Date().getTime();

  /* Funktion die eine zufällige farbe erstellt */
  /* ############################################################# */
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  /* ############################################################# */
  let makeShapeAppear = () => {
    let top = Math.random() * 300;
    let left = Math.random() * 500;
    let width = Math.random() * 300;
    document.getElementById("form").style.top = top + "px";
    document.getElementById("form").style.left = left + "px";
    document.getElementById("form").style.width = width + "px";
    document.getElementById("form").style.height = width + "px";

    document.getElementById("form").style.display = "block";
    start = new Date().getTime();
  };

  /* Timer der dir Form nach einer gewissen Zeit erscheinen läst */
  /* ############################################################## */
  let setTimeAfter = () => {
    setTimeout(makeShapeAppear, Math.random() * 2000);
  };
  setTimeAfter();

  /* ############################################################# */
  document.getElementById("form").onclick = () => {
    document.getElementById("form").style.display = "none";
    document.getElementById("form").style.backgroundColor = getRandomColor;

    let end = new Date().getTime();
    let dauerErrechnen = (end - start) / 1000;
    // console.log(dauer);
    let ausgabe = document.getElementById("dauer");
    ausgabe.innerHTML = dauerErrechnen + "s";
    setTimeAfter();
  };
});
