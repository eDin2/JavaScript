"use strict";

// 3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
let buttonColours = [
  "red",
  "blue",
  "green",
  "yellow"
]

// 5. At the top of the game.js file, create a new empty array called gamePattern.
let gamePattern = [];

// 1. Inside game.js create a new function called nextSequence()
let nextSequnce = function() {

  // 2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  // 4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
  let randomChosenColour = buttonColours[randomNumber];

  // 6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
  gamePattern.push[randomChosenColour];

  // 7.Use jQuery to select the button with the same id as the
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  // 8.Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  let audio = new Audio('sounds/' + randomChosenColour + '.mp3');
  audio.play();
}
