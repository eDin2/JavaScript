"use strict";

window.addEventListener("load", () => {
  let arr = [
    ["Andreas", "Licht"],
    ["Erika", "Mitrovic"],
    ["Monika", "Balasevic"],
    ["Saban", "Babic"]
  ];

  // Verschachtelte Arrays die dann mit einer Verschachtelten for schleife durchlauft
  for (let person of arr) {
    for (let name of person) {
      console.log(name);
    }
  }


  console.log(arr[0][1]);
});
