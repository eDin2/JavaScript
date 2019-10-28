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
        this.box.style.top = position + "px";
    }

}


/* *******************************************************************
diese class representiert das ganze spiel 
diese class sollte sich darum kuemmern das der RENDERER erstellt wird!!
*/
class GAME {
    constructor(element) {
        this.renderer = new RENDERER(element);
    }

    start() {
        let counter = 0;
        /* 
        hiemrit wird zur box ein Interval gesetzt welcher jede sek. 1x px. dazu adiert.
        dieser px wird in die funk render hinzugefuegt
        */
        setInterval(() => {
            counter += 1;
            this.renderer.render(counter);
        }, 1000);
    }

}

let game = new GAME(document.getElementById("game"));
game.start();