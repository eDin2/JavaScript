"use strict";

window.addEventListener("load", function () {

    let printPerson = function () {
        console.log(this.firstName + '(' + this.age + ')'); // diese ausgabe ist gleich wie unten 
        // console.log(p.firstName + '(' + p.age + ')');
    }

    /* ############################################### */
    let person = {
        firstName: "Saban",
        age: 21,
        ausgabe: printPerson
    };
    person.ausgabe();
    // person.printPerson(person);

    /* ############################################ */
    let person2 = {
        firstName: "Semsa",
        age: 25,
        ausgabe: printPerson
    };
    person2.ausgabe();

});