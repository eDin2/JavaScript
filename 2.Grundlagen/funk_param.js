//jshint esversion: 6

"use strict";
const bottleCost = 1.5; /* so viel kostet 1l Milch */
let getMilk = function (mony) {
    let calculate = mony/bottleCost;
    console.log(Math.floor(calculate));
    /* wenn ich 5euro habe wiviel l kann ich mir kaufen? */
};
getMilk(5);

