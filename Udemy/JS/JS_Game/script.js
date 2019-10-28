"use strict";

class RENDERER {
  constructor(element) {
    this.element = element;
    this.setup();
  }

  setup() {
    // console.log(this);
    let box = document.createElement("div");

    /* position des divs */
    box.style.position = "absolute";
    box.style.top = "20px";
    box.style.left = "20px";

    /* style des divs */
    box.style.backgroundColor = "red";
    box.style.width = "20px";
    box.style.height = "20px";

    this.element.appendChild(box); /* => fühe das div in mein feld ein */
    this.box = box;
  }

  render(position) {
    this.box.style.top = position + "1px";
  }

}

let renderer = new RENDERER(document.getElementById("game"));

let counter = 0;

setInterval(() => {
  counter += 1;
  renderer.render(counter);
}, 1000);
