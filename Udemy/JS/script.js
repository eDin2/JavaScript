"use strict";

let run = function (calback) {
  console.log("let f: wurde ausgeführt!");
  calback();
}

let f = function () {

}

run(f);
