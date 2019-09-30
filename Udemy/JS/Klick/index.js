"use strict";

window.addEventListener("load", function() {
  let button = document.getElementById("btn"); // 1.der button soll ausgewählt werden
  let count = 0; // 2.Zähler wird definiert
  button.onclick = function() {
    // 3.auf den button soll mittels click zugegriffen werden
    count += 1; // 4.bei jedem Click soll der Zähler um eines dazu gerechnet werden
    button.innerText = "Count: " + count; // 5.gib den Zähler mittels innerText im bitton aus!
  };
});
