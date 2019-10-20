"use strict";

window.addEventListener("load", function() {

  class bankKonto {

    constructor(guthaben) {
      this.guthaben = guthaben;
    }

    abheben(menge) {
      let newGuthaben = this.guthaben - menge;
      if (newGuthaben < 0) {
        alert("Oida in's minus kannst du aber nicht gehen!");
      } else {
        this.guthaben = this.guthaben - menge;
      }
    }
  }

  let b = new bankKonto(1000);
  let eingabe1 = prompt("Welcehn Betrag möchten Sie abheben?");
  let eingabe2 = prompt("Welcehn Betrag möchten Sie abheben?");

  b.abheben(eingabe1);
  b.abheben(eingabe2);
  console.log(b);


});
