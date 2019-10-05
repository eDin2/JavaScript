"use strict";

window.addEventListener("load", () => {
  let tBodyUnd = document.getElementById('undVerknuepfung').children[1];
  // damit hohle ich mir den tbody der tabelle
  // der tbody ist das zweite kind der tabelle

  let aValues = [true, false];
  let bValues = [true, false];


  // >>>  UND Verknüpfung  <<<
  for (let keyA of aValues) { // durchlauf des keyA des ersten Arrays
    for (let keyB of bValues) { // durchlauf des keyB des zweiten Arrays
      // console.log(keyA, keyB);
      let tr = document.createElement("tr"); // kreiere eine tr im tbody

      let td0 = document.createElement("td"); // erstelle ein td im tr
      td0.innerHTML = keyA; // die td sollte mit Wert von keyA befüllt werden

      let td1 = document.createElement("td"); // erstelle eine weitere td
      td1.innerHTML = keyB; // befülle diese mit dem keyB

      let td2 = document.createElement("td");
      td2.innerHTML = (keyA && keyB);

      // jetzt mussen wir die td in die tr packen
      tr.appendChild(td0);
      tr.appendChild(td1);
      tr.appendChild(td2);

      // in den tbody mussen nun die zu erstellenden tr's gepackt werden
      tBodyUnd.appendChild(tr);
    }
  }





  // >>>  ODER Verknüpfung  <<<
  let tBodyOder = document.getElementById('oderVerknuepfung').children[1];

  for (let keyA of aValues) { // durchlauf des keyA des ersten Arrays
    for (let keyB of bValues) { // durchlauf des keyB des zweiten Arrays
      // console.log(keyA, keyB);
      let tr = document.createElement("tr"); // kreiere eine tr im tbody

      let td0 = document.createElement("td"); // erstelle ein td im tr
      td0.innerHTML = keyA; // die td sollte mit Wert von keyA befüllt werden

      let td1 = document.createElement("td"); // erstelle eine weitere td
      td1.innerHTML = keyB; // befülle diese mit dem keyB

      let td2 = document.createElement("td");
      td2.innerHTML = (keyA || keyB);

      // jetzt mussen wir die td in die tr packen
      tr.appendChild(td0);
      tr.appendChild(td1);
      tr.appendChild(td2);

      // in den tbody mussen nun die zu erstellenden tr's gepackt werden
      tBodyOder.appendChild(tr);
    }
  }



});
