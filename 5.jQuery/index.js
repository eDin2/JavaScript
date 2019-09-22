"use strict";

// $('h1').text("Na du!");
// $('button').html("jQ geändert");

// Atribute mit jQ ändern
$('a').attr('href', "https://www.bing.com");

// Die CSS Datei mit JS bearbeeiten
$('h1').click(function() {
  $('h1').css("color", "red")
})

// Adding ein neuen Button mit change the DOM
$('h1').before('<button>BEFOR</button>');
$('h1').prepend('<button>PREPEND</button>'); // dieser button wird innerhalb des h1 VOR dem String erstellt
$('h1').append('<button>APPEND</button>'); // dieser button wird innerhalb des h1 NACH dem String erstellt
$('h1').after('<button>AFTER</button>');

// selektiere die ID=togi und beim klicken mach ein toggle über den h1
$('#togi').on('click', () => {
  $('h1').toggle();
})

// selektiere die ID=fader und beim klicken mach ein toggle über den h1
$('#fader').on('click', () => {
  $('h1').fadeToggle();
})

// selektiere die ID=slider und beim klicken mach ein toggle über den h1
$('#slider').on('click', () => {
  $('h1').slideToggle();
})

// selektiere die ID=anime und beim klicken mach ein toggle über den h1
$('#anime').on('click', () => {
  $('h1').animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  });
})

$('#anime2').on('click', () => {
  $('h1').slideUp().slideDown().animate({
    opacity: 0.25,
    left: "+=50",
  });
})
