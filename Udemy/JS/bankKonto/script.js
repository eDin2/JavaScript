"use strict";

window.addEventListener("load", function() {

  class bankKonto {

    constructor(guthaben) {
      this.guthaben = guthaben;
    }

    abheben(menge) {
      let newGuthaben = this.guthaben - menge;
      if (newGuthaben < 0) {
        alert("Oida in minus kannst du aber nicht!");
      } else {
        this.guthaben = this.guthaben - menge;
      }
    }
  }

  let b = new bankKonto(1000);
  b.abheben(200);
  b.abheben(900);
  console.log(b);


});
