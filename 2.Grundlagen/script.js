//jshint esversion:6
"use strict";

var eingabe = prompt("Gib deinen Namen ein: ");
var firstLetter = name.charAt(0).toUpperCase();
var restDerEingabe = eingabe.slice(1).toLowerCase();
var name = firstLetter + restDerEingabe;

console.log(name);
