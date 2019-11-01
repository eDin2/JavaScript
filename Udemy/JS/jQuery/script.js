"use stict";

$(document).ready(function() {
  let p = $("p.absatz");

  p.css("color", "red");
  // $("p").css("color", "green");

  $("h2").click(function() {
    $(this).css("color", "red");
  });
});
