"use strict";
window.addEventListener("load", function() {
  let start = new Date().getTime();

  /* ############################################################# */
  let makeShapeAppear = () => {
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

    let end = new Date().getTime();
    let dauerErrechnen = (end - start) / 1000;
    // console.log(dauer);
    let ausgabe = document.getElementById("dauer");
    ausgabe.innerHTML = dauerErrechnen + "s";
    setTimeAfter();
  };
});
