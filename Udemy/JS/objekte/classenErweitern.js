"use strict";

window.addEventListener("load", function() {
  /* 
    Mit classen werden die einzelnen constructor eigenschaften (instanzen) definiert! 
    */
  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
    printPerson() {
      console.log(this.firstName + " " + this.lastName + "(" + this.age + ")");
      /* damit this auf die jeweiligen this's als parameter zugreifen kann, muss das this im constructor definiert werden */
    }
  }

  /* ######################################################################################## */
  class Student extends Person {
    // Student wird die mit classe Person erweitert
    // Student ist wie Person mit nur paar erweiterungen
    constructor(firstName, lastName, age, subject) {
      super(firstName, lastName, age);
      /* mit super wird der constructor für Person angesprochen */
      this.subject = subject;
    }

    enroll() {
      console.log("enroll() wurde ausgefährt!");
    }
  }

  /* ######################################################################################### */
  /* hiermit werden die jeweiligen Personen als variabel erstellt */
  /* nun kann ich die vaariable in einem andrem code benutzen */
  let saban = new Student("Saban", "Mustermann", 35, "Informatik");
  saban.printPerson();

  console.log(saban);
});
