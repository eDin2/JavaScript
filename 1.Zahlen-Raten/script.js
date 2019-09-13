"use strict";
document.addEventListener("DOMContentLoaded", function() {
  // JS wird erst nach dem laden der Seite ausgeführt!


  /* *********************** */
  /* Zufallszahlen erzeugen */
  /* math.random (Helferfunktion) */
  /* *********************** */
  document.querySelector('#submit').addEventListener("click", checkInput);
  // An den submit-Button wird mit addEventListener ein EventListener angehängt,
  // der beim Auslösen des Klickereignisses die Funktion checkInput() aufruft.

  let input = document.getElementById('guessField');
  let output = document.querySelector('output');
  let randomNumberMin = 1;
  let randomNumberMax = 10;
  let randomNumber = rand(randomNumberMin, randomNumberMax);
  let guess = 1;

  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function checkInput() {
    console.log('Zufallszahl: ' + randomNumber + '   input: ' + input.value + '  Versuche(guess): ' + guess);
    if (input.value == randomNumber) {
      output.innerText = 'Glückwunsch! Sie haben es in  ' + guess + ' Versuch(en) erraten!';
    } else if (input.value > randomNumber) {
      guess++;
      output.innerText = 'Schade! Versuchen Sie eine kleinere Zahl.';
    } else {
      guess++;
      output.innerText = 'Schade! Versuchen Sie eine größere Zahl.';
    }
    input.value = '';
  }

});
