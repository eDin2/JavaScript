"use strict";

window.addEventListener("load", function() {

  class bankKonto {

    constructor(guthaben) {
      this._guthaben = guthaben;
    }

    abheben(menge) {
      let newGuthaben = this._guthaben - menge;
      if (newGuthaben < 0) {
        alert("Oida in's minus kannst du aber nicht gehen!");
      } else {
        this._guthaben = newGuthaben;
      }
    }

    getGuthaben() {
      return this._guthaben;
    }
  }

  let b = new bankKonto(1000);
  let eingabe1 = prompt("Welcehn Betrag möchten Sie abheben?");
  let eingabe2 = prompt("Welcehn Betrag möchten Sie abheben?");

  b.abheben(eingabe1);
  b.abheben(eingabe2);
  console.log(b.getGuthaben());


});
