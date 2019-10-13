"use strict";

window.addEventListener("load", function () {


    /* 
    Mit classen werden die einzelnen constructor eigenschaften (instanzen) definiert! 
    */
    class Person {

        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;

            console.log(this);
            /* im log kann man sehen das dass this als Objekt ausgegeben wird */
        }

        printPerson() {
            console.log(this.firstName + ' ' + this.lastName + '(' + this.age + ')');
            /* damit this auf die jeweiligen this's als parameter zugreifen kann, muss das this im constructor definiert werden */
        }
    }



    /* hiermit werden die jeweiligen Personen als variabel erstellt */
    let saban = new Person("Saban", "Mustermann", 35);
    saban.printPerson();


    let semsa = new Person("Semsa", "Mustermann", 45);
    semsa.printPerson();

});