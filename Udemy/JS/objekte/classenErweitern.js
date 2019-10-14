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
      return this.firstName + " " + this.lastName + "(" + this.age + ")";
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

    printPerson() { 
      /* printPerson wird hiermit überschrieben */
      return super.printPerson() + "; " + this.subject;
      /* super übernimmt den rückgabwert aus dem ersten printPerson */
    }
  }

  /* ######################################################################################### */
  /* hiermit werden die jeweiligen Personen als variabel erstellt */
  /* nun kann ich die vaariable in einem andrem code benutzen */
  let sabanPerson = new Person("Saban", "Mustermann", 35);
  sabanPerson.printPerson();
  let outPutPerson1 = sabanPerson.printPerson();
  console.log(outPutPerson1);


  let sabanStudent = new Student("Saban", "Mustermann", 35, "BWL");
  sabanStudent.printPerson();
  let outPutPerson2 = sabanStudent.printPerson();
  console.log(outPutPerson2);


  let edoStudent = new Student("Edo", "Mustermann", 35, "Kitarenje");
  edoStudent.printPerson();
  let outPutPerson3 = edoStudent.printPerson();
  console.log(outPutPerson3);  


  /* 
  Nun können so viele Studenten wie Personnen erstellt werden
  */
  


});
