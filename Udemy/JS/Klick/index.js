"use strict";

window.addEventListener("load", function() {
  /* Click on btn1 */
  let button1 = document.getElementById("btn1"); // 1.der button1 soll ausgewählt werden
  let count = 0; // 2.Zähler wird definiert

  button1.onclick = () => {
    // 3.auf den button1 soll mittels click zugegriffen werden
    count += 1; // 4.bei jedem Click soll der Zähler um eines dazu gerechnet werden
    button1.innerText = "Count: " + count; // 5.gib den Zähler mittels innerText im bitton aus!
  };

  /* Click on btn2 */
  let button2 = document.getElementById("btn2");
  let count2 = 0;

  let fun = () => {
    count2 += 1;
    console.log(fun);
  };
});
