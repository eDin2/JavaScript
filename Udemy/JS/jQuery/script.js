"use stict";

$(document).ready(function () {
    /*   let p = $("p.absatz");
      p.css("color", "red");
      $("p").css("color", "green");
     */

    /* Erreignisse */
    /* ############ */
    $("h2")
        .click(function () {
            $(this).css("color", "red");
        })
        .mouseover(function () {
            $(this).css('color', 'blue');
        })
        .mouseleave(function () {
            $(this).css('color', 'black');
        })


    /* Schleifen */
    /* ############ */
    $('h2').each(function (i, element) {
        if (i % 2 == 0) {
            $(this).css('color', 'green');
        } else {
            $(this).css('color', 'yellow')
        }
    });
});