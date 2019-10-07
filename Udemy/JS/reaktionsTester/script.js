"use strict";
window.addEventListener('load', function () {
  let start = new Date().getTime();



  /* ####################################################### */
  let makeShapeAppear = setTimeout(() => {
    document.getElementById('form').style.display = 'block';
    start = new Date().getTime();
  }, 5000);


  /* ####################################################### */

  document.getElementById('form').onclick = () => {
    document.getElementById('form').style.display = 'none';

    let end = new Date().getTime();
    let dauer = (end - start) / 1000;
    // alert(dauer);
    let ausgabe = document.getElementById('dauer');
    ausgabe.innerHTML = dauer;
  };





})