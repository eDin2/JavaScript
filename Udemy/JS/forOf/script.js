"use strict";

window.addEventListener("load", () => {
  let arr = [
    "Andreas",
    "Erika",
    "Monika",
    "Saban"
  ];

  let ausgabe = "In unserem Kurs sind folgende teilnehmer: ";
  for (let person of arr) {
    ausgabe = ausgabe + person + ", ";
  }
  console.log(ausgabe);
});
